"""Generate js/stack.js: the tech-stack tiles data used by the Skills section.

Logos come from three sources, in order of preference, so each one looks the way
the vendor draws it rather than as a flat recolour:

  devicon              full-colour official logos (45 of them)
  AWS Architecture     the official service pictogram; the white symbol is kept and
                       re-inked per theme, the service-family colour drives the halo
  Simple Icons         monochrome fallback for the handful devicon does not carry

Near-black fills are rewritten to `var(--logo-ink)` so a dark logo (Kafka, pandas,
Flask, Tux...) stays visible on the dark tile and still reads as ink on the light
one. Every other colour is left exactly as the vendor drew it.

Usage:  python tools/build_stack.py
"""
import colorsys
import io
import json
import re
import urllib.request
import zipfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent

DEVICON_JSON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.json"
DEVICON_SVG = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/{n}/{n}-{v}.svg"
AWS_ZIP = HERE / ".cache" / "aws-architecture-icons.zip"
AWS_ZIP_URL = ("https://d1.awsstatic.com/onedam/marketing-channels/website/public/shared/"
               "architecture-icon-release/Icon-package_07312026."
               "5846e92413caa21490223536cc97f1269e44fa92.zip")

# Our key -> devicon name, where a plain match does not work.
DEVICON_ALIAS = {
    "sklearn": "scikitlearn", "gcp": "googlecloud", "aws": "amazonwebservices",
    "sqlserver": "microsoftsqlserver", "spark": "apachespark", "kafka": "apachekafka",
    "airflow": "apacheairflow", "hive": "apachehive", "solr": "apachesolr",
    "arrow": "apachearrow", "parquet": "apacheparquet",
    "sql": "azuresqldatabase",
}
# devicon has no BigQuery mark of its own and would hand back the generic Google
# Cloud logo, duplicating the GCP tile; the Simple Icons fallback is the real one.
NO_DEVICON = {"bigquery"}
# Prefer a version that carries the real colours.
DEVICON_VERSIONS = ("original", "plain")

# A fill darker than this (relative luminance) becomes theme ink.
INK_LUMA = 0.06
# Contrast floor for the monochrome fallback: 3:1 is the WCAG bar for graphics,
# not the 4.5:1 text bar, which was washing brand colours out to neon.
MONO_THEMES = {
    "dark":  {"bg": "#1a1a1a", "text": "#ffffff", "minContrast": 3.0, "step": 0.02},
    "light": {"bg": "#ffffff", "text": "#0a0f14", "minContrast": 3.0, "step": -0.02},
}
OVERRIDES = {("aws", "dark"): "#FF9900", ("javascript", "light"): "#C9A800"}


# --------------------------------------------------------------------- colour
def rgb(h):
    h = h.lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    return tuple(int(h[i:i + 2], 16) / 255 for i in (0, 2, 4))


def hexs(c):
    return "#" + "".join(f"{round(max(0, min(1, v)) * 255):02X}" for v in c)


def luminance(h):
    def f(c):
        return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4
    r, g, b = rgb(h)
    return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b)


def contrast(a, b):
    la, lb = sorted((luminance(a), luminance(b)), reverse=True)
    return (la + 0.05) / (lb + 0.05)


def legible(hex_, theme, key):
    t = MONO_THEMES[theme]
    if (key, theme) in OVERRIDES:
        return OVERRIDES[(key, theme)]
    base = "#" + hex_.lstrip("#")
    if contrast(base, t["bg"]) >= t["minContrast"]:
        return base
    h, l, s = colorsys.rgb_to_hls(*rgb(base))
    if s < 0.15:
        return t["text"]
    for _ in range(60):
        l = max(0.0, min(1.0, l + t["step"]))
        cand = hexs(colorsys.hls_to_rgb(h, l, s if s > 0.05 else 0))
        if contrast(cand, t["bg"]) >= t["minContrast"]:
            return cand
    return t["text"]


# ------------------------------------------------------------------- fetching
def get(url):
    req = urllib.request.Request(url, headers={"User-Agent": "build_stack/1.0"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return r.read()


# ------------------------------------------------------------------ svg tidy
DROP_RE = re.compile(r"<\?xml.*?\?>|<!--.*?-->|<!DOCTYPE.*?>|<title>.*?</title>|<desc>.*?</desc>",
                     re.S | re.I)
SVG_OPEN_RE = re.compile(r"<svg\b([^>]*)>", re.I)
VIEWBOX_RE = re.compile(r'viewBox\s*=\s*"([^"]+)"', re.I)
WH_RE = re.compile(r'\b(width|height)\s*=\s*"([\d.]+)(px)?"', re.I)
COLOR_RE = re.compile(r'(fill|stop-color|stroke)\s*=\s*"(#[0-9a-fA-F]{3,6})"')
STYLE_COLOR_RE = re.compile(r'(fill|stop-color|stroke)\s*:\s*(#[0-9a-fA-F]{3,6})')


def ink_swap(markup):
    """Rewrite near-black paint to var(--logo-ink) so dark logos survive a dark tile."""
    def sub_attr(m):
        prop, col = m.group(1), m.group(2)
        return f'{prop}="var(--logo-ink)"' if luminance(col) <= INK_LUMA else m.group(0)

    def sub_style(m):
        prop, col = m.group(1), m.group(2)
        return f"{prop}:var(--logo-ink)" if luminance(col) <= INK_LUMA else m.group(0)

    markup = COLOR_RE.sub(sub_attr, markup)
    return STYLE_COLOR_RE.sub(sub_style, markup)


def normalise(svg, ink=True):
    """Return (viewBox, inner markup) for a vendor SVG, stripped and de-duplicated."""
    svg = DROP_RE.sub("", svg)
    m = SVG_OPEN_RE.search(svg)
    if not m:
        raise ValueError("no <svg> element")
    attrs = m.group(1)
    vb = VIEWBOX_RE.search(attrs)
    if vb:
        view = vb.group(1).strip()
    else:
        dims = dict((k.lower(), v) for k, v, _ in WH_RE.findall(attrs))
        view = f"0 0 {dims.get('width', '24')} {dims.get('height', '24')}"
    inner = svg[m.end():svg.rindex("</svg>")]
    # ids can collide once many icons share one document
    inner = re.sub(r"\s+(xmlns(:\w+)?)=\"[^\"]*\"", "", inner)
    inner = re.sub(r">\s+<", "><", inner).strip()
    if ink:
        inner = ink_swap(inner)
    return view, inner


SOLID_RE = re.compile(r'(?:fill|stop-color)\s*[=:]\s*"?(#[0-9a-fA-F]{3,6})')


def contrast_flags(markup):
    """Flag logos whose own palette is too weak against a tile, per theme.

    Brand colours are never rewritten — a flagged tile is lifted with a CSS
    filter instead, so the logo keeps its identity and stays readable.
    """
    # a logo that paints with var(--logo-ink) already carries a contrasting part
    # in both themes (the black "JS" on the yellow square, Tux's outline...)
    if "var(--logo-ink)" in markup:
        return 0, 0
    cols = set(SOLID_RE.findall(markup))
    if not cols:
        return 0, 0
    best_dark = max(contrast(c, "#1a1a1a") for c in cols)
    best_light = max(contrast(c, "#ffffff") for c in cols)
    return (1 if best_dark < 3.0 else 0), (1 if best_light < 3.0 else 0)


def uniquify_ids(inner, key):
    """Namespace ids/url() refs so gradients from different logos cannot clash."""
    ids = set(re.findall(r'\bid="([^"]+)"', inner))
    for i in sorted(ids, key=len, reverse=True):
        safe = f"{key}-{i}"
        inner = inner.replace(f'id="{i}"', f'id="{safe}"')
        inner = inner.replace(f"url(#{i})", f"url(#{safe})")
        inner = inner.replace(f'href="#{i}"', f'href="#{safe}"')
    return inner


# ----------------------------------------------------------------------- main
def main():
    tech = json.loads((HERE / "tech.json").read_text(encoding="utf-8"))
    glyphs = json.loads((HERE / "glyphs.json").read_text(encoding="utf-8"))

    print("fetching devicon manifest…")
    manifest = json.loads(get(DEVICON_JSON).decode())
    dev = {}
    for e in manifest:
        names = [e["name"]] + [a for a in (e.get("aliases") or []) if isinstance(a, str)]
        for n in names:
            dev[n.lower()] = e

    zf = None
    if AWS_ZIP.exists():
        zf = zipfile.ZipFile(AWS_ZIP)
    else:
        legacy = list((HERE / ".cache").glob("*Icon-package*.zip")) if (HERE / ".cache").exists() else []
        if legacy:
            zf = zipfile.ZipFile(legacy[0])

    items, stats = [], {"devicon": 0, "aws": 0, "simple": 0}
    for t in tech["tech"]:
        key, name, g = t["key"], t["name"], glyphs[t["key"]]
        entry = {"k": key, "n": name, "c": t["cat"]}

        # 1) AWS official pictogram -------------------------------------------------
        if g.get("source", "").startswith("AWS") and zf is not None:
            member = next((m for m in zf.namelist()
                           if m.endswith(Path(t["slug"]).name) and "__MACOSX" not in m), None)
            if member:
                raw = zf.read(member).decode("utf-8")
                # drop the full-bleed background rect: the tile already provides one
                raw = re.sub(r'<g[^>]*Icon-Architecture-BG[^>]*>.*?</g>', "", raw, flags=re.S)
                view, inner = normalise(raw, ink=False)
                # AWS draws the symbol white on a coloured square. We drop the square
                # and paint the symbol in that service family's own colour, so the AWS
                # block keeps Amazon's colour coding instead of reading as white line art.
                inner = re.sub(r'fill="#FFF(?:FFF)?"', 'fill="currentColor"', inner, flags=re.I)
                if "fill=" not in inner:
                    inner = f'<g fill="currentColor">{inner}</g>'
                entry.update(v=view, s=uniquify_ids(inner, key), h=g["hex"],
                             d=legible(g["hex"], "dark", key),
                             l=legible(g["hex"], "light", key))
                items.append(entry); stats["aws"] += 1
                continue

        # 2) devicon full colour ----------------------------------------------------
        cand = [DEVICON_ALIAS.get(key, key), key, name.lower().replace(" ", "").replace(".", "")]
        hit = None if key in NO_DEVICON else next((dev[c] for c in cand if c in dev), None)
        if hit:
            have = hit.get("versions", {}).get("svg", [])
            ver = next((v for v in DEVICON_VERSIONS if v in have), have[0] if have else None)
            if ver:
                try:
                    raw = get(DEVICON_SVG.format(n=hit["name"], v=ver)).decode("utf-8")
                    view, inner = normalise(raw)
                    colour = (hit.get("color") or "#" + g["hex"]).lstrip("#")
                    entry.update(v=view, s=uniquify_ids(inner, key), h=colour)
                    items.append(entry); stats["devicon"] += 1
                    print(f"  devicon {key:14s} <- {hit['name']}-{ver}")
                    continue
                except Exception as exc:                       # noqa: BLE001
                    print(f"  ! devicon failed for {key}: {exc}")

        # 3) Simple Icons monochrome fallback --------------------------------------
        x0, y0, x1, y1 = g["bbox"]
        paths = "".join(f'<path d="{d}"/>' for d in g["paths"])
        rule = ' fill-rule="evenodd" clip-rule="evenodd"' if g.get("fillRule") == "evenodd" else ""
        entry.update(
            v=f"{round(x0, 2)} {round(y0, 2)} {round(x1 - x0, 2)} {round(y1 - y0, 2)}",
            s=f'<g fill="currentColor"{rule}>{paths}</g>',
            h=g["hex"],
            d=legible(g["hex"], "dark", key),
            l=legible(g["hex"], "light", key),
        )
        items.append(entry); stats["simple"] += 1
        print(f"  simple  {key:14s} (no devicon)")

    for it in items:
        ld, ll = contrast_flags(it["s"])
        if ld: it["ld"] = 1
        if ll: it["ll"] = 1

    payload = {
        "categories": [{"id": c["id"], "title": c["title"]} for c in tech["categories"]],
        "tech": items,
    }
    js = ("/* Generated by tools/build_stack.py. Do not hand-edit.\n"
          "   Logos: devicon, the official AWS Architecture Icons and Simple Icons (CC0).\n"
          "   All trademarks belong to their owners. */\n"
          "window.TECH_STACK=" + json.dumps(payload, separators=(",", ":"), ensure_ascii=False) + ";\n")
    (ROOT / "js" / "stack.js").write_text(js, encoding="utf-8")
    print(f"\njs/stack.js  {len(js.encode('utf-8')):,} bytes  "
          f"devicon={stats['devicon']} aws={stats['aws']} simple={stats['simple']}")


if __name__ == "__main__":
    main()
