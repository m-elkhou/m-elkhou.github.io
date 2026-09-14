# Mohammed EL-KHOU — Portfolio

Live: **<https://m-elkhou.github.io/>**

Bilingual (EN / FR) portfolio of Mohammed EL-KHOU — Data/Cloud Engineer (AWS), Big Data/Python developer, R&D ML/AI.

## How it is built

- **No build step, no framework, no external JavaScript.** Plain HTML + CSS + vanilla JS served by GitHub Pages.
- **Content lives in data files**, one per language, with identical structure:
  - [`js/content-en.js`](js/content-en.js)
  - [`js/content-fr.js`](js/content-fr.js)
- [`js/app.js`](js/app.js) renders the page from the active language and drives the EN/FR toggle and the dark/light toggle (the page always opens in dark + English; a toggle lasts for the current visit, `?lang=fr` opens French directly), the loading screen, the typing effect, the animated counters, the skill bars, the reveal-on-scroll, the mobile menu, the scroll-spy, the career grid and the project filters — all without external libraries.
- [`css/style.css`](css/style.css) is the original dark/cyan theme, refined: design tokens (dark and light palettes), Inter via Google Fonts, layout, animations (all disabled under `prefers-reduced-motion`).
- [`assets/cv/`](assets/cv/) contains the downloadable CV (PDF).

## Editing content

Edit the same entry in **both** `js/content-en.js` and `js/content-fr.js`. The two files must keep the same shape (same keys, same array lengths, same `id`s for roles and projects). A quick check:

```bash
node -e '
const fs=require("fs"); global.window={};
eval(fs.readFileSync("js/content-en.js","utf8")); eval(fs.readFileSync("js/content-fr.js","utf8"));
const shape=(v,p,o)=>{Array.isArray(v)?(o.push(p+"[]"+v.length),v.forEach((x,i)=>shape(x,p+i,o))):v&&typeof v==="object"?Object.keys(v).sort().forEach(k=>shape(v[k],p+"."+k,o)):o.push(p);return o};
const a=shape(window.CONTENT.en,"",[]),b=shape(window.CONTENT.fr,"",[]);
console.log(a.join()===b.join()?"EN and FR shapes match":"MISMATCH");'
```

Bump the `?v=` query on the `<link>`/`<script>` tags in `index.html` after changing CSS or JS so visitors do not get a cached copy.

## Local preview

```bash
python -m http.server 3000
# open http://127.0.0.1:3000/
```

## Deployment

GitHub Pages serves the `dev` branch; a workflow mirrors `dev` to `main` on every push. Work on a feature branch and merge into `dev` to publish.

## Author

**Mohammed EL-KHOU** — [LinkedIn](https://www.linkedin.com/in/m-elkhou/) · [GitHub](https://github.com/m-elkhou) · <m.elkhou@hotmail.com>
