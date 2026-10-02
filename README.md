# 31 North Salon & Barbershop — Legacy Frontend Restoration

This repository is a restored, static portfolio version of the production 31 North Salon & Barbershop website originally developed by Jon Best. The original live site is no longer online. It ran on Joomla with the Gantry/Helium template system; this project uses the rendered production pages and downloaded assets from a 2023 browser archive to preserve the recoverable frontend without requiring Joomla, PHP, or a database.

This is an archival restoration, not a redesign. The goal is to make the historical site reviewable while keeping Jon's original visual direction, content, responsive behavior, and custom frontend implementation as intact as the backup permits.

## Frontend structure

Each page now contains markup only. Styling and behavior are organized consistently:

- `assets/css/site.css` — shared structural CSS and the single canonical Roboto import
- `assets/css/<page>.css` — only selectors used by that page, including responsive and interactive states
- `assets/js/site.js` — shared vanilla-JavaScript navigation and smooth-scroll behavior
- `assets/js/animations.js` — the retained GSAP/AOS animation libraries used by the About/profile pages
- `assets/js/<page>.js` — page-only interaction code where it is genuinely needed

There are no inline `<style>` or `<script>` blocks. jQuery and the generated Joomla/Gantry/Helium shell are no longer required.

## Recovered pages

- `index.html` — Home and interactive compass navigation
- `locate.html` — location, archived map, address, and hours
- `services.html` — service categories, scrolling sections, imagery, and animation
- `about.html` — staff overview
- `about-ashley.html` — Ashley profile
- `about-tiffany.html` — Tiffany profile
- `about-whitney.html` — Whitney profile

## Custom frontend work demonstrated

- Responsive desktop and mobile navigation
- Booking, phone, Facebook, and shop controls
- Animated responsive header/hero composition
- Layered compass, arrow rotation, and directional navigation logic
- Mobile menu transformation and responsive layout changes
- Page-specific salon/service/profile layouts
- Scroll and parallax presentation on the Services page
- SVG and image composition, hover states, transitions, and custom styling
- Conservative modernization of a real Joomla/Gantry-era frontend export

## Run locally

No build step or package installation is required. Serve the repository root with any static web server, then open `index.html`.

For example:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

Opening the HTML files directly may work for most pages, but a local server is recommended because the archived map is loaded in an iframe.

## GitHub Pages

The project uses relative URLs and is compatible with GitHub Pages. Publish the repository root from the default branch, or copy this folder into the configured Pages source directory.

## Authorship and third-party code

The custom page markup, inline interaction logic, visual composition, and page-specific styles/scripts represent the historical site implementation recovered from the production output. They are not newly generated replacements.

The remaining files under `assets/vendor/` belong to the archived Google Maps snapshot. AOS and TweenMax are retained once in `assets/js/animations.js` because they drive visible effects. jQuery, unused Gantry/Helium rules, obsolete off-canvas/menu code, duplicate libraries, and superseded source fragments were removed. These dependencies are not presented as Jon Best's authorship.

See [CLEANUP_REPORT.md](CLEANUP_REPORT.md) for the second-pass audit and [RESTORATION_NOTES.md](RESTORATION_NOTES.md) for the original restoration history.
