# PBE Website

Official site for PBE TAMU (`pbetamu.com`).

## Tech Stack
- React + TypeScript, built with Vite
- React Router for client-side routing
- Tailwind CSS v4 (CSS-first config via `@theme` in `src/index.css`)
- Deployed to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`), publishing `dist/` to the `gh-pages` branch on every push to `main`

## Migration status
This site is being migrated from a static HTML/CSS/JS site to React. The previous
implementation is preserved under [`legacy/`](legacy/) for reference while pages are ported
over one at a time. See [`legacy/README.md`](legacy/README.md) for how the old site worked.
Once all pages are ported and verified, `legacy/` will be removed.

## Project Structure
```
.
├── src/
│   ├── components/   # Shared UI: Layout, Navbar, Footer, BackToTop, PageHero, HomeHero
│   ├── pages/         # One component per route
│   ├── data/          # Static data (e.g. members list)
│   ├── App.tsx         # Route definitions
│   └── index.css       # Tailwind import + brand theme
├── public/
│   ├── PBEimages/     # Static images/icons
│   └── CNAME           # Custom domain for GitHub Pages
└── legacy/             # Old static site, kept for reference during migration
```

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Output goes to `dist/`, including `CNAME` and `PBEimages/` so the custom domain and assets work
on GitHub Pages.

## Deployment
Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes
`dist/` to the `gh-pages` branch. In the repo's Settings → Pages, the Pages source should be set
to "Deploy from branch" → `gh-pages` / `root`.
