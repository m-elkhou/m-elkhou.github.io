/* ==========================================================================
   Portfolio renderer — builds the page from CONTENT[lang] (see content-*.js)
   No dependencies. Handles: loading screen, language toggle, theme toggle,
   mobile menu, scroll-spy, navbar/back-to-top on scroll, typing effect,
   counters, skill bars, reveal-on-scroll, career grid, project filters.
   ========================================================================== */
(function () {
  'use strict';

  var CONTENT = window.CONTENT || {};
  var root = document.documentElement;
  var app = document.getElementById('app');
  var footer = document.getElementById('footer');
  var navLinks = document.getElementById('nav-links');
  var nav = document.getElementById('nav');
  var backToTop = document.getElementById('back-to-top');
  var loading = document.getElementById('loading-screen');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var ICONS = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.5 8.5h-3V21h3V8.5zM5 3a1.8 1.8 0 1 0 0 3.6A1.8 1.8 0 0 0 5 3zm16 10.6c0-3.4-1.8-5.4-4.7-5.4-1.7 0-2.8.8-3.4 1.7V8.5H10V21h3v-6.5c0-1.6.6-2.8 2.2-2.8 1.5 0 1.9 1.2 1.9 2.8V21h3v-7.4z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M6 9l6 6 6-6M4 21h16"/></svg>',
    rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 15c-1.5 1.5-2 5-2 5s3.5-.5 5-2M14 4l6 6-8 8-6-6z"/><path d="M15 9l-4 4"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s7-6.5 7-11.5a7 7 0 0 0-14 0C5 14.5 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>'
  };

  /* ---------- tiny DOM helper ------------------------------------------- */
  function el(tag, attrs) {
    var node = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      var v = attrs[k];
      if (v === null || v === undefined || v === false) return;
      if (k === 'html') node.innerHTML = v;
      else if (k === 'text') node.textContent = v;
      else if (k === 'class') node.className = v;
      else if (k === 'style') node.style.cssText = v;
      else node.setAttribute(k, v === true ? '' : v);
    });
    for (var i = 2; i < arguments.length; i++) append(node, arguments[i]);
    return node;
  }

  function append(parent, child) {
    if (child === null || child === undefined || child === false) return;
    if (Array.isArray(child)) { child.forEach(function (c) { append(parent, c); }); return; }
    if (typeof child === 'string') { parent.appendChild(document.createTextNode(child)); return; }
    parent.appendChild(child);
  }

  /* items: string (HTML) | { text, sub: [...] } */
  function list(items, cls) {
    if (!items || !items.length) return null;
    return el('ul', { class: cls || null }, items.map(function (it) {
      if (typeof it === 'string') return el('li', { html: it });
      return el('li', { html: it.text }, list(it.sub));
    }));
  }

  function tags(items, tech) {
    if (!items || !items.length) return null;
    return el('ul', { class: 'tags' }, items.map(function (t) {
      var name = typeof t === 'string' ? t : t.name;
      return el('li', { class: 'tag' + (tech ? ' tech' : ''), text: name, title: (t && t.detail) || null });
    }));
  }

  function icon(name) {
    return el('span', { class: 'contact-icon', 'aria-hidden': 'true', html: ICONS[name] || '' });
  }

  function section(id, head, body) {
    return el('section', { class: 'section', id: id, 'aria-labelledby': id + '-title' },
      el('div', { class: 'wrap' },
        el('div', { class: 'section-header', 'data-reveal': 'up' },
          el('h2', { id: id + '-title', class: 'section-title gradient-text', text: head.title }),
          head.tagline ? el('p', { class: 'section-subtitle', text: head.tagline }) : null
        ),
        el('div', { class: 'section-body' }, body)
      )
    );
  }

  function card(children, attrs) {
    attrs = attrs || {};
    attrs.class = 'card' + (attrs.class ? ' ' + attrs.class : '');
    return el('div', attrs, children);
  }

  function detailsBlock(summaryLabel, openLabel, bodyNodes, open) {
    var d = el('details', { open: open ? true : null },
      el('summary', {}, el('span', { text: open && openLabel ? openLabel : summaryLabel })),
      el('div', { class: 'details-body' }, bodyNodes)
    );
    if (openLabel) {
      var label = d.querySelector('summary span');
      d.addEventListener('toggle', function () {
        label.textContent = d.open ? openLabel : summaryLabel;
      });
    }
    return d;
  }

  /* ---------- state ------------------------------------------------------- */
  function getLang() {
    var l = root.getAttribute('lang');
    return CONTENT[l] ? l : 'en';
  }

  function setLang(l) {
    if (!CONTENT[l]) return;
    root.setAttribute('lang', l);
    try { localStorage.setItem('lang', l); } catch (e) { /* ignore */ }
    var url = new URL(location.href);
    url.searchParams.set('lang', l);
    history.replaceState(null, '', url.pathname + url.search + url.hash);
    render();
  }

  function toggleTheme() {
    var next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
  }

  /* ---------- hero -------------------------------------------------------- */
  function renderHero(c) {
    var h = c.hero;
    var enter = 0;
    function step() { enter += 1; return String(enter); }

    return el('section', { class: 'hero', id: 'home', 'aria-label': h.ariaLabel },
      el('div', { class: 'wrap' },
        el('div', { class: 'hero-content' },
          el('span', { class: 'hero-badge', 'data-enter': step(), text: h.badge }),
          el('p', { class: 'hero-greeting', 'data-enter': step(), text: h.kicker }),
          el('h1', { class: 'hero-name', 'data-enter': step() },
            el('span', { class: 'name-first gradient-text', text: h.name[0] }),
            el('span', { class: 'name-last', text: h.name[1] })
          ),
          el('p', { class: 'hero-typing', 'data-enter': step(), 'aria-label': h.typingPrefix + ' ' + h.typing.join(', ') },
            el('span', { class: 'prefix', 'aria-hidden': 'true', text: h.typingPrefix }),
            el('span', { class: 'typing-text', 'aria-hidden': 'true', 'data-typing': JSON.stringify(h.typing) })
          ),
          el('p', { class: 'hero-description', 'data-enter': step(), html: h.lede }),
          el('p', { class: 'hero-where', 'data-enter': step(), html: h.where }),
          el('ul', { class: 'hero-stats', 'data-enter': step() }, h.facts.map(function (f) {
            return el('li', {},
              el('span', { class: 'stat-number', 'data-count': f.n, 'data-suffix': f.suffix || '', text: '0' + (f.suffix || '') }),
              el('span', { class: 'stat-label', text: f.l })
            );
          })),
          el('div', { class: 'hero-actions', 'data-enter': step() }, h.actions.map(function (a) {
            return el('a', {
              class: 'btn btn-' + (a.style || 'tertiary'),
              href: a.href,
              target: a.external ? '_blank' : null,
              rel: a.external ? 'noopener noreferrer' : null,
              download: a.download ? true : null,
              html: (ICONS[a.icon] || '') + '<span>' + a.label + '</span>'
            });
          })),
          el('ul', { class: 'hero-social', 'data-enter': step() }, h.social.map(function (s) {
            return el('li', {}, el('a', {
              class: 'social-link',
              href: s.href,
              'aria-label': s.label,
              title: s.label,
              target: s.external ? '_blank' : null,
              rel: s.external ? 'noopener noreferrer' : null,
              html: ICONS[s.icon] || ''
            }));
          }))
        ),
        el('div', { class: 'hero-image' },
          el('div', { class: 'image-frame' },
            el('img', { class: 'profile-image', src: 'images/profile.jpg', width: '400', height: '400', alt: h.photoAlt, fetchpriority: 'high' })
          )
        )
      )
    );
  }

  /* ---------- about ------------------------------------------------------- */
  function renderAbout(c) {
    var a = c.about;
    return section('about', a, [
      el('div', { class: 'about-grid' },
        card(el('div', { class: 'about-text' }, a.paragraphs.map(function (p) { return el('p', { html: p }); })), { 'data-reveal': 'left' }),
        el('div', { class: 'about-side' },
          card([el('h3', { class: 'category-title', text: a.competencies.title }), tags(a.competencies.items)], { 'data-reveal': 'right' }),
          card([el('h3', { class: 'category-title', text: a.soft.title }),
            el('ul', { class: 'soft-list' }, a.soft.items.map(function (s) {
              return el('li', {}, el('b', { text: s.name }), el('span', { text: s.desc }));
            }))
          ], { 'data-reveal': 'right', style: '--reveal-delay:120ms' })
        )
      )
    ]);
  }

  /* ---------- career grid ------------------------------------------------- */
  function monthIndex(ym, base) {
    var p = ym.split('-');
    return (parseInt(p[0], 10) - base) * 12 + (parseInt(p[1], 10) - 1);
  }

  function renderGrid(c) {
    var x = c.experience;
    var ui = c.ui;
    var now = new Date();
    var nowYm = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0');
    var rows = x.roles.slice();
    var allStarts = rows.map(function (r) { return r.start; }).concat(x.studies.map(function (s) { return s.start; }));
    var baseYear = Math.min.apply(null, allStarts.map(function (s) { return parseInt(s.slice(0, 4), 10); }));
    var lastYear = now.getFullYear();
    var months = (lastYear - baseYear + 1) * 12;

    var years = [];
    for (var y = baseYear; y <= lastYear; y++) {
      years.push(el('span', { style: 'grid-column:' + ((y - baseYear) * 12 + 1) + ' / span 12', text: String(y) }));
    }

    var grid = el('div', { class: 'cgrid', 'data-animate': true, 'data-reveal': 'up', style: '--months:' + months + ';--years:' + (months / 12), role: 'img', 'aria-label': ui.gridAria },
      el('p', { class: 'cgrid-caption', text: x.gridNote }),
      el('div', { class: 'cgrid-years', 'aria-hidden': 'true' }, years)
    );

    function bar(start, end, text, title, color, href, extraClass, delay) {
      var s = monthIndex(start, baseYear) + 1;
      var e = monthIndex(end || nowYm, baseYear) + 2;
      var short = (e - s) < 20; // label will not fit inside: draw it beside the bar
      return el(href ? 'a' : 'span', {
        class: 'cgrid-bar' + (extraClass ? ' ' + extraClass : '') + (short ? ' is-short' : ''),
        style: 'grid-column:' + s + ' / ' + e + ';--bar:var(--c-' + color + ');animation-delay:' + delay + 'ms',
        href: href || null,
        title: title,
        'aria-label': title,
        text: text
      });
    }

    rows.forEach(function (r, i) {
      append(grid, el('div', { class: 'cgrid-label', 'aria-hidden': 'true' }, el('span', { text: r.org }), el('small', { text: r.short })));
      append(grid, el('div', { class: 'cgrid-track' }, bar(r.start, r.end, r.period, r.org + ' — ' + r.short + ' (' + r.period + ')', r.color, '#' + r.id, null, i * 80)));
    });

    append(grid, el('div', { class: 'cgrid-label', 'aria-hidden': 'true' }, el('span', { text: ui.gridStudies })));
    append(grid, el('div', { class: 'cgrid-track' }, x.studies.map(function (s, i) {
      return bar(s.start, s.end, s.label, s.label, 'edu', '#education', 'is-edu', rows.length * 80 + i * 60);
    })));

    return grid;
  }

  /* ---------- experience -------------------------------------------------- */
  function renderExperience(c) {
    var x = c.experience;
    var ui = c.ui;

    var timeline = el('ol', { class: 'timeline' }, x.roles.map(function (r, i) {
      var detail = [];
      if (r.context) detail.push(el('p', { html: '<b>' + ui.context + '</b> ' + r.context }));
      if (r.constraints) detail.push(el('p', { html: '<b>' + ui.constraints + '</b> ' + r.constraints }));
      if (r.groups && r.groups.length) {
        detail.push(el('div', { class: 'role-groups' }, r.groups.map(function (g) {
          return el('div', {}, g.title ? el('h4', { text: g.title }) : null, list(g.items));
        })));
      }
      if (r.result) detail.push(el('div', { class: 'role-result' }, el('p', { html: '<b>' + ui.result + '</b> ' + r.result })));

      var role = card([
        el('div', { class: 'role-head' },
          el('h3', { text: r.role }),
          el('span', { class: 'role-period', text: r.period })
        ),
        el('p', { class: 'role-org', html: '<b>' + r.org + '</b> — ' + r.place }),
        r.summary ? el('p', { class: 'role-summary', html: r.summary }) : null,
        detail.length ? detailsBlock(ui.showDetails, ui.hideDetails, detail, r.open) : null,
        tags(r.env, true)
      ], { class: 'role', id: r.id, style: '--bar:var(--c-' + r.color + ')' });

      return el('li', { class: 'timeline-item', 'data-reveal': i % 2 ? 'right' : 'left' },
        el('span', { class: 'timeline-marker', style: '--bar:var(--c-' + r.color + ')', 'aria-hidden': 'true' }),
        role
      );
    }));

    return section('experience', x, [renderGrid(c), timeline]);
  }

  /* ---------- projects ---------------------------------------------------- */
  function renderProjects(c) {
    var p = c.projects;
    var ui = c.ui;
    var counts = {};
    p.items.forEach(function (it) {
      it.cats.forEach(function (k) { counts[k] = (counts[k] || 0) + 1; });
    });

    var cards = p.items.map(function (it, i) {
      var body = [];
      it.sections.forEach(function (s) {
        body.push(el('div', {}, el('h4', { text: s.title }), list(s.items)));
      });
      if (it.role) body.push(el('p', { class: 'project-role full', html: it.role }));
      if (it.links && it.links.length) {
        body.push(el('div', { class: 'project-links full' }, it.links.map(function (l) {
          return el('a', { href: l.href, target: '_blank', rel: 'noopener noreferrer', text: l.label + ' ↗' });
        })));
      }

      var d = el('details', {},
        el('summary', {},
          el('p', { class: 'project-org', text: it.org }),
          el('h3', { text: it.title }),
          el('p', { text: it.summary }),
          tags(it.stack, true),
          el('span', { class: 'more', text: ui.more })
        ),
        el('div', { class: 'details-body' }, body)
      );
      var cardEl = el('li', { class: 'project', 'data-cats': it.cats.join(' '), id: 'p-' + it.id, 'data-reveal': 'up', style: '--reveal-delay:' + ((i % 3) * 90) + 'ms' }, d);
      d.addEventListener('toggle', function () {
        cardEl.classList.toggle('is-open', d.open);
        if (d.open) {
          var top = cardEl.getBoundingClientRect().top;
          if (top < 80) window.scrollBy({ top: top - 96, behavior: reduceMotion ? 'auto' : 'smooth' });
        }
      });
      return cardEl;
    });

    var grid = el('ul', { class: 'projects' }, cards);
    var current = 'all';

    var filters = el('ul', { class: 'filters', role: 'group', 'aria-label': ui.filterAria, 'data-reveal': 'up' }, p.filters.map(function (f) {
      var n = f.id === 'all' ? p.items.length : (counts[f.id] || 0);
      var b = el('button', { type: 'button', 'aria-pressed': f.id === current ? 'true' : 'false', 'data-filter': f.id },
        f.label, el('small', { text: String(n) }));
      b.addEventListener('click', function () {
        current = f.id;
        filters.querySelectorAll('button').forEach(function (x) {
          x.setAttribute('aria-pressed', x.getAttribute('data-filter') === current ? 'true' : 'false');
        });
        cards.forEach(function (cardEl) {
          var show = current === 'all' || (' ' + cardEl.getAttribute('data-cats') + ' ').indexOf(' ' + current + ' ') !== -1;
          cardEl.hidden = !show;
          if (show) cardEl.classList.add('in');
        });
      });
      return el('li', {}, b);
    }));

    return section('projects', p, [filters, grid]);
  }

  /* ---------- impact ------------------------------------------------------ */
  function renderImpact(c) {
    var m = c.impact;
    return section('impact', m, [
      el('ul', { class: 'metrics' }, m.metrics.map(function (k, i) {
        return el('li', { class: 'card', 'data-reveal': 'up', style: '--reveal-delay:' + ((i % 4) * 80) + 'ms' },
          el('span', { class: 'stat-number', text: k.n }),
          el('strong', { text: k.l }),
          el('span', { class: 'desc', text: k.d })
        );
      })),
      el('div', { class: 'two-col' }, m.blocks.map(function (b, i) {
        return card([el('h3', { class: 'category-title', text: b.title }), list(b.items)], { 'data-reveal': i % 2 ? 'right' : 'left' });
      })),
      card([
        el('h3', { class: 'category-title', text: m.yearsTitle }),
        el('div', { class: 'impact-years' }, m.years.map(function (y) {
          return el('div', { class: 'impact-year' }, el('span', { class: 'year', text: y.year }), el('div', {}, el('h4', { text: y.title }), list(y.items)));
        }))
      ], { 'data-reveal': 'up' })
    ]);
  }

  /* ---------- skills ------------------------------------------------------ */
  function renderSkills(c) {
    var s = c.skills;

    var proficiency = s.proficiency.map(function (cat) {
      return el('div', { 'data-reveal': 'up' },
        el('h3', { class: 'category-title', text: cat.title }),
        el('div', { class: 'skills-grid' }, cat.items.map(function (it, i) {
          return el('div', { class: 'skill-item' },
            el('h4', {}, el('span', { text: it.name }), el('span', { class: 'skill-percentage', text: it.pct + ' %' })),
            it.detail ? el('span', { class: 'skill-detail', text: it.detail }) : null,
            el('div', { class: 'skill-bar', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': '100', 'aria-valuenow': String(it.pct), 'aria-label': it.name },
              el('div', { class: 'skill-progress', 'data-width': it.pct + '%', style: 'transition-delay:' + (i * 60) + 'ms' })
            )
          );
        }))
      );
    });

    var groups = el('div', {},
      el('h3', { class: 'category-title', text: s.groupsTitle, 'data-reveal': 'up' }),
      el('div', { class: 'skill-groups' }, s.groups.map(function (g, i) {
        return el('div', { class: 'skill-group', 'data-reveal': 'up', style: '--reveal-delay:' + ((i % 3) * 80) + 'ms' }, el('h4', { text: g.title }), tags(g.items));
      }))
    );

    var exp = el('div', { class: 'expertise', 'data-reveal': 'up' },
      el('h3', { class: 'category-title', text: s.expertise.title }),
      el('p', { class: 'expertise-note', html: s.expertise.note }),
      s.expertise.blocks.map(function (b) {
        return card([
          detailsBlock(b.title, null, [
            el('div', { class: 'sub' }, b.sub.map(function (sub) {
              return el('div', {}, el('h4', { text: sub.title }), list(sub.items));
            }))
          ], false)
        ]);
      })
    );

    return section('skills', s, [proficiency, groups, exp]);
  }

  /* ---------- education --------------------------------------------------- */
  function renderEducation(c) {
    var e = c.education;
    return section('education', e, [
      el('ul', { class: 'edu-grid' }, e.items.map(function (it, i) {
        return el('li', { class: 'card', 'data-reveal': 'up', style: '--reveal-delay:' + ((i % 3) * 80) + 'ms' },
          el('span', { class: 'edu-year', text: it.year }),
          el('b', { text: it.degree }),
          el('span', { text: it.school }),
          it.desc ? el('small', { text: it.desc }) : null
        );
      })),
      el('div', { 'data-reveal': 'up' },
        el('h3', { class: 'category-title', text: e.certsTitle }),
        el('ul', { class: 'certs' }, e.certs.map(function (ct) {
          var name = ct.url
            ? el('a', { href: ct.url, target: '_blank', rel: 'noopener noreferrer', text: ct.name })
            : el('span', { text: ct.name });
          return el('li', {},
            el('span', { class: 'name' }, name, ct.status ? el('span', { class: 'status', text: ct.status }) : null),
            el('span', { class: 'issuer', text: ct.issuer }),
            el('span', { class: 'year', text: ct.year })
          );
        }))
      ),
      el('div', { 'data-reveal': 'up' },
        el('h3', { class: 'category-title', text: e.langsTitle }),
        el('ul', { class: 'langs' }, e.langs.map(function (l) {
          return el('li', { class: 'card' }, el('b', { text: l.name }), el('span', { text: l.level }));
        }))
      )
    ]);
  }

  /* ---------- contact ----------------------------------------------------- */
  function renderContact(c) {
    var k = c.contact;
    return section('contact', k, [
      el('div', { class: 'contact-grid' },
        el('div', { 'data-reveal': 'left' },
          el('p', { class: 'contact-lead', html: k.lead }),
          el('a', { class: 'contact-email gradient-text', href: 'mailto:' + k.email, text: k.email })
        ),
        el('ul', { class: 'contact-list', 'data-reveal': 'right' }, k.items.map(function (it) {
          return el('li', { class: 'card' },
            icon(it.icon), el('div', {},
              el('span', { class: 'label', text: it.label }),
              it.href
                ? el('a', { href: it.href, target: it.external ? '_blank' : null, rel: it.external ? 'noopener noreferrer' : null, text: it.value })
                : el('b', { text: it.value })
            )
          );
        }))
      )
    ]);
  }

  /* ---------- footer ------------------------------------------------------ */
  function renderFooter(c) {
    var f = c.footer;
    footer.innerHTML = '';
    append(footer, el('div', { class: 'wrap' },
      el('div', {},
        el('a', { class: 'brand', href: '#top', html: '<span class="brand-m">M</span>elkhou' }),
        el('p', { text: f.blurb })
      ),
      f.columns.map(function (col) {
        return el('div', {},
          el('h4', { text: col.title }),
          el('ul', {}, col.links.map(function (l) {
            return el('li', {}, el('a', { href: l.href, target: l.external ? '_blank' : null, rel: l.external ? 'noopener noreferrer' : null, download: l.download ? true : null, text: l.label }));
          }))
        );
      }),
      el('div', { class: 'footer-bottom' }, el('p', { text: f.rights }), el('p', { html: f.made }))
    ));
  }

  /* ---------- nav --------------------------------------------------------- */
  function renderNav(c) {
    navLinks.innerHTML = '';
    c.nav.forEach(function (n) {
      var a = el('a', { href: '#' + n.id, text: n.label });
      a.addEventListener('click', closeMenu);
      append(navLinks, el('li', {}, a));
    });
    document.querySelectorAll('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === c.code ? 'true' : 'false');
    });
    var cvLabel = document.querySelector('[data-cv-label]');
    if (cvLabel) cvLabel.textContent = c.ui.cv;
    var cv = document.querySelector('[data-cv]');
    if (cv) cv.setAttribute('title', c.ui.cvTitle);
    var themeBtn = document.querySelector('[data-theme-toggle]');
    if (themeBtn) themeBtn.setAttribute('aria-label', c.ui.theme);
    var menuBtn = document.querySelector('[data-menu]');
    if (menuBtn) menuBtn.setAttribute('aria-label', c.ui.menu);
    if (backToTop) backToTop.setAttribute('aria-label', c.ui.backToTop);
  }

  function closeMenu() {
    document.body.removeAttribute('data-menu-open');
    var b = document.querySelector('[data-menu]');
    if (b) b.setAttribute('aria-expanded', 'false');
  }

  /* ---------- effects ----------------------------------------------------- */
  var observers = [];
  var typingTimer = null;

  function observe(targets, opts, onEnter) {
    if (!('IntersectionObserver' in window)) { targets.forEach(onEnter); return; }
    var o = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { onEnter(e.target); o.unobserve(e.target); }
      });
    }, opts);
    targets.forEach(function (t) { o.observe(t); });
    observers.push(o);
  }

  function initReveal() {
    var targets = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
    if (reduceMotion) { targets.forEach(function (t) { t.classList.add('in'); }); return; }
    observe(targets, { rootMargin: '0px 0px -10% 0px', threshold: 0 }, function (t) { t.classList.add('in'); });
  }

  function initGridReveal() {
    var grid = document.querySelector('.cgrid');
    if (!grid) return;
    observe([grid], { threshold: 0.35 }, function (g) { g.classList.add('is-in'); });
  }

  function initSkillBars() {
    var bars = Array.prototype.slice.call(document.querySelectorAll('.skill-progress'));
    observe(bars, { threshold: 0.4 }, function (bar) {
      setTimeout(function () { bar.style.width = bar.getAttribute('data-width'); }, 150);
    });
  }

  function animateCounter(node) {
    var target = parseFloat(node.getAttribute('data-count')) || 0;
    var suffix = node.getAttribute('data-suffix') || '';
    if (reduceMotion || !('requestAnimationFrame' in window)) { node.textContent = target + suffix; return; }
    var duration = 1800;
    var start = null;
    function frame(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      node.textContent = Math.floor(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(frame);
      else node.textContent = target + suffix;
    }
    requestAnimationFrame(frame);
  }

  function initCounters() {
    var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));
    observe(nodes, { threshold: 0.5 }, animateCounter);
  }

  function initTyping() {
    if (typingTimer) { clearTimeout(typingTimer); typingTimer = null; }
    var node = document.querySelector('.typing-text');
    if (!node) return;
    var texts = JSON.parse(node.getAttribute('data-typing') || '[]');
    if (!texts.length) return;
    if (reduceMotion) { node.textContent = texts[0]; return; }
    var ti = 0, ci = 0, deleting = false;
    function type() {
      var current = texts[ti];
      ci = deleting ? ci - 1 : ci + 1;
      node.textContent = current.substring(0, ci);
      var delay = deleting ? 40 : 85;
      if (!deleting && ci === current.length) { delay = 2200; deleting = true; }
      else if (deleting && ci === 0) { deleting = false; ti = (ti + 1) % texts.length; delay = 450; }
      typingTimer = setTimeout(type, delay);
    }
    typingTimer = setTimeout(type, 900);
  }

  var spy = null;
  function initScrollSpy() {
    if (spy) spy.disconnect();
    var links = Array.prototype.slice.call(navLinks.querySelectorAll('a'));
    var sections = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); }).filter(Boolean);
    if (!('IntersectionObserver' in window) || !sections.length) return;
    var visible = {};
    spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });
      var active = null;
      for (var i = 0; i < sections.length; i++) {
        if (visible[sections[i].id]) { active = sections[i].id; break; }
      }
      links.forEach(function (a) {
        var on = active && a.getAttribute('href') === '#' + active;
        if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(function (s) { spy.observe(s); });
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY || window.pageYOffset;
      if (nav) nav.classList.toggle('scrolled', y > 60);
      if (backToTop) backToTop.classList.toggle('visible', y > 400);
      ticking = false;
    });
  }

  function hideLoading() {
    if (!loading || loading.classList.contains('hidden')) return;
    loading.classList.add('hidden');
    setTimeout(function () { loading.style.display = 'none'; }, 500);
  }

  /* ---------- render ------------------------------------------------------ */
  function render() {
    observers.forEach(function (o) { o.disconnect(); });
    observers = [];

    var lang = getLang();
    var c = CONTENT[lang];
    document.title = c.htmlTitle;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', c.metaDescription);
    var skip = document.querySelector('a.sr-only[href="#main"]');
    if (skip) skip.textContent = c.ui.skip;

    renderNav(c);
    app.innerHTML = '';
    append(app, [
      renderHero(c),
      renderAbout(c),
      renderExperience(c),
      renderProjects(c),
      renderImpact(c),
      renderSkills(c),
      renderEducation(c),
      renderContact(c)
    ]);
    renderFooter(c);

    initScrollSpy();
    initReveal();
    initGridReveal();
    initSkillBars();
    initCounters();
    initTyping();
    onScroll();

    // Re-open a deep link target after re-render (e.g. #p-xyz or #experience)
    if (location.hash) {
      var target = document.getElementById(location.hash.slice(1));
      if (target) {
        var d = target.querySelector('details');
        if (d && target.classList.contains('project')) d.open = true;
      }
    }
  }

  /* ---------- wiring ------------------------------------------------------ */
  document.querySelectorAll('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });
  var themeToggle = document.querySelector('[data-theme-toggle]');
  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  var menu = document.querySelector('[data-menu]');
  if (menu) {
    menu.addEventListener('click', function () {
      var open = document.body.hasAttribute('data-menu-open');
      if (open) closeMenu();
      else { document.body.setAttribute('data-menu-open', ''); menu.setAttribute('aria-expanded', 'true'); }
    });
  }
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) closeMenu();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  render();

  // Loader: hide when the page (fonts, photo) is ready, never later than 1.2 s
  if (document.readyState === 'complete') setTimeout(hideLoading, 350);
  else window.addEventListener('load', function () { setTimeout(hideLoading, 350); });
  setTimeout(hideLoading, 1200);
})();
