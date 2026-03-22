# PBE Website
Official site for PBE TAMU (`pbetamu.com`).

## Tech Stack
- Static HTML/CSS/JS (no build step)
- Shared UI via small JS components in `components/`
- Global styling in `style.css`

## Project Structure
```
.
├── components/
│   ├── back-to-top.js      # Injects back-to-top button mount
│   ├── footer.js           # Injects shared footer
│   ├── home-hero.js        # Injects index hero section + announcement area
│   ├── navbar.js           # Injects shared navbar links/logo
│   ├── page-hero.js        # Injects standard inner-page hero (title + navbar mount)
│   └── site-behavior.js    # Shared interactions (mobile nav, close behavior, back-to-top)
├── styles/
│   ├── 01-base-pages.css
│   ├── 02-nav-layout.css
│   ├── 03-components.css
│   └── 04-homepage-overrides.css
├── *.html                  # Site pages
├── style.css               # Active stylesheet loaded by pages
└── PBEimages/              # Static images/icons
```

## Important Styling Note
The site currently loads `style.css` directly from each page. Use this file as the source of truth for active styling.

If you edit files under `styles/`, also keep `style.css` in sync (or switch to `@import` strategy intentionally).

## How Shared Components Work
Pages use mount points and component scripts instead of duplicating markup.

Common mounts:
- Navbar: `<div id="site-navbar"></div>`
- Footer: `<div id="site-footer"></div>`
- Back-to-top: `<div id="site-back-to-top"></div>`
- Inner-page hero: `<div data-page-hero data-hero-class="sub-header" data-hero-title="About Us"></div>`
- Home hero: `<div data-home-hero></div>`

Typical script includes in `<head>`:
```html
<script src="components/page-hero.js" defer></script>
<script src="components/home-hero.js" defer></script> <!-- index only -->
<script src="components/navbar.js" defer></script>
<script src="components/footer.js" defer></script>
<script src="components/back-to-top.js" defer></script>
<script src="components/site-behavior.js" defer></script>
```

## Recommended Page Structure
Use this structure for new inner pages:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title | PBE</title>
  <link rel="stylesheet" href="style.css">

  <script src="components/page-hero.js" defer></script>
  <script src="components/navbar.js" defer></script>
  <script src="components/footer.js" defer></script>
  <script src="components/back-to-top.js" defer></script>
  <script src="components/site-behavior.js" defer></script>
</head>
<body>
  <div data-page-hero data-hero-class="sub-header" data-hero-title="Page Title"></div>

  <main>
    <!-- Page content -->
  </main>

  <div id="site-footer"></div>
  <div id="site-back-to-top"></div>
</body>
</html>
```

For `index.html`, use:
- `<div data-home-hero></div>` instead of `data-page-hero`

## How To Add A New Page
1. Copy an existing page (e.g. `about.html`) as your starting template.
2. Update the `<title>`.
3. Update `data-page-hero` attributes:
   - `data-hero-class` should match an existing hero style class (or add a new one in `style.css`).
   - `data-hero-title` is the heading text.
4. Add your content section(s).
5. Keep `#site-footer` and `#site-back-to-top` mounts.
6. Add the page to nav in `components/navbar.js` if it should appear in the menu.

## How To Add/Edit Navbar Links
Edit `components/navbar.js` only.

Checklist:
1. Add/update `<li><a href="...">...</a></li>` in the nav list.
2. Keep `desktop-only` center logo item intact.
3. Keep `mobile-only-nav-item` for the mobile golf CTA.
4. Verify both desktop and mobile layouts after changes.

## How To Add A New Reusable Component
1. Create `components/<name>.js`.
2. Use a mount selector and fail safely if mount is missing.
3. Inject markup with `innerHTML`/`outerHTML`.
4. Add `<script src="components/<name>.js" defer></script>` to pages that use it.
5. Add related styles to `style.css`.

Example pattern:
```js
(function () {
  const mount = document.getElementById('my-component');
  if (!mount) return;

  mount.innerHTML = `...`;
})();
```

## Mobile/Tablet Nav Rules
The active mobile+tablet nav override is at the bottom of `style.css` under:
- `/* ===== Final Mobile/Tablet Nav Override (active stylesheet) ===== */`

If nav behavior looks wrong, check for conflicting older rules above it and keep final override last.

## Conventions
- Use relative links (`./about`, `./members`, etc.) for internal routing.
- Keep assets in `PBEimages/`.
- Prefer shared components over copy/paste HTML blocks.
- Keep one source of truth per concern:
  - nav markup: `components/navbar.js`
  - global interactions: `components/site-behavior.js`
  - final active styles: `style.css`

## Local Testing
Since this is static, open pages directly or run a simple local server.

Quick server option:
```bash
python3 -m http.server 8000
```
Then open `http://localhost:8000`.

## Deployment
This repo is static-site friendly (GitHub Pages / Netlify / similar). Ensure paths remain relative and test at root path before deploy.
