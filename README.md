# [svenko.me](https://svenko.me)

Personal site. [Astro](https://astro.build), static output, deployed to GitHub Pages
by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Where things live

| What | Where |
| --- | --- |
| Pages | `src/pages/*.astro` |
| Peak list data | `src/data/mountains.json` |
| Counter + confetti | `src/lib/` |
| Styles (one file) | `src/styles/global.css` |
| Screenshots (optimised at build) | `src/images/` |
| Verbatim files — `CNAME`, fonts, downloads | `public/` |

To tick off a peak, set `"climbed": true` on its entry in `src/data/mountains.json`.
