# 31 North Salon & Barbershop — Legacy Website Modernization

A frontend modernization project that converts a legacy Joomla/Gantry website into a maintainable static application using HTML, CSS, and vanilla JavaScript while preserving the original visual design, responsive behavior, animations, and custom interactive components.

The original 31 North Salon & Barbershop website was developed by Jon Best and ran in production using Joomla with the Gantry/Helium template system. After the original site went offline, its rendered production pages and archived assets were recovered and refactored into this standalone version.

Rather than redesigning the site, the goal was to preserve the original frontend while removing its dependency on the legacy CMS and generated framework code.

## The Challenge

The recoverable version of the website consisted of rendered production output from a Joomla/Gantry installation rather than the original CMS environment.

That introduced several challenges:

- Joomla, Gantry, Helium, PHP, and the original database were unavailable
- Production markup contained generated CMS and framework structure
- Shared and page-specific CSS were mixed with unused framework utilities
- Legacy JavaScript dependencies and duplicated behavior remained in the export
- Responsive behavior and custom animations needed to remain visually consistent
- The custom compass navigation needed to retain its original directional behavior
- Archived third-party resources had to be separated from custom application code

The modernization therefore focused on extracting the actual frontend implementation from the legacy platform without changing the character of the original site.

## Modernization Approach

The restored site was reorganized into a conventional static frontend architecture:

- Shared layout and styling were consolidated into `assets/css/site.css`
- Page-specific styles were separated into dedicated stylesheets
- Shared interaction behavior was moved into `assets/js/site.js`
- Page-specific JavaScript was separated by page
- Inline `<style>` and `<script>` blocks were eliminated
- jQuery dependencies were removed
- Unused Joomla/Gantry/Helium markup and CSS were removed
- Legacy navigation behavior was rewritten in vanilla JavaScript
- Responsive and accessibility behavior was preserved and improved

No build system or framework is required.

## Key Technical Improvements

### CSS Cleanup

The shared stylesheet was reduced from approximately **437 lines to 123 lines** by removing unused generated framework utilities and consolidating the rules actually required by the restored pages.

Page-specific styles remain separate so that specialized layouts and responsive behavior do not unnecessarily expand the global stylesheet.

### Vanilla JavaScript

Legacy and repetitive interaction logic was replaced with smaller, purpose-specific vanilla JavaScript.

Shared functionality includes:

- Responsive mobile navigation
- Keyboard-accessible menu controls
- ARIA state management
- Smooth scrolling
- Shared navigation behavior

jQuery is no longer required.

### Compass Navigation

The home page contains a custom interactive compass that serves as the site's primary visual navigation component.

Directional elements are mapped to compass rotations through JavaScript rather than maintaining separate repetitive event handlers.

The compass preserves the original directional states and animated two-second rotation while keeping the implementation considerably easier to maintain.

### Responsive Design

The original desktop and mobile presentation was preserved while removing the framework that previously supplied much of the surrounding layout infrastructure.

Responsive behavior includes:

- Desktop and mobile navigation states
- Responsive hero/header compositions
- Adaptive page layouts
- Mobile staff and service presentations
- Responsive compass navigation
- Page-specific breakpoint behavior

### Accessibility

Modernization work also improved interaction semantics without substantially changing the original presentation.

Examples include:

- Keyboard-operable mobile navigation
- `aria-expanded` state management
- Accessible navigation labels
- Image alternative text
- Keyboard-accessible scroll controls

## Project Structure

```text
31-north-website-refactor/
├── index.html
├── locate.html
├── services.html
├── about.html
├── about-ashley.html
├── about-tiffany.html
├── about-whitney.html
│
└── assets/
    ├── css/
    │   ├── site.css
    │   └── [page-specific styles]
    ├── js/
    │   ├── site.js
    │   ├── animations.js
    │   └── [page-specific scripts]
    ├── images/
    ├── svg/
    └── vendor/
```

## Recovered Pages

- **Home** — animated header and interactive compass navigation
- **Locate** — location information, archived map, business details, and hours
- **Services** — service categories, imagery, scrolling sections, and animation
- **About Us** — staff overview
- **Ashley** — individual stylist profile
- **Tiffany** — individual stylist profile
- **Whitney** — individual stylist profile

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Responsive Web Design
- SVG
- AOS / GSAP animation
- Git / GitHub

### Legacy Technologies Removed from the Runtime

- Joomla
- Gantry
- Helium
- jQuery
- PHP/database dependency

## Run Locally

No build step or package installation is required.

Serve the repository root using any static web server. For example, with the VS Code **Live Server** extension, open `index.html` and select **Open with Live Server**.

Alternatively, if Python is installed:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

Opening the HTML files directly may work for most pages, but a local server is recommended because the archived map is loaded in an iframe.

## GitHub Pages

The project uses relative asset paths and can be hosted as a static website using GitHub Pages.

## Project Background

This project represents both the preservation of an earlier production website and a later modernization of its frontend architecture.

The visual design and custom frontend functionality originate from the original production implementation. The current repository demonstrates the process of recovering that implementation from archived production output, identifying the code actually required by the site, removing obsolete CMS/framework dependencies, and reorganizing the result into a substantially smaller and more maintainable standalone frontend.

The objective was deliberately **not** to redesign the site with modern frameworks. Instead, the project demonstrates legacy-code analysis, dependency removal, refactoring, responsive frontend development, and preservation of existing production behavior.

## Third-Party Assets

Business branding, photography, and other media remain the property of their respective owners and are included here solely as part of the historical portfolio restoration.

The archived Google Maps resources under `assets/vendor/` are third-party resources retained to preserve the recovered location page.

AOS and GSAP/TweenMax code is retained for animation behavior and is not presented as original authorship.
