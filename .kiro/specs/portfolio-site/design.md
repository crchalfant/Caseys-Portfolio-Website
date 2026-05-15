# Technical Design Document

## Overview

Casey Chalfant's portfolio site is a multi-page React SPA with client-side routing, a corporate-premium dark color palette, and content centralized in a single data file. The site is deployed as a static build to Cloudflare Pages (or Vercel/Netlify) with no backend dependencies.

## Architecture

```
Browser
  └── React SPA (Vite build)
        ├── BrowserRouter (React Router v6)
        │     ├── / (Home - Hero + Cards)
        │     ├── /about (Bio + Slideshow + Personality)
        │     ├── /resume (Experience + Education + Skills)
        │     ├── /ai (AI Philosophy + Highlights)
        │     ├── /products (GitHub Projects + Career Gallery)
        │     ├── /contact (Web3Forms + hCaptcha)
        │     └── /* (404 Not Found)
        ├── Nav (sticky, all pages)
        ├── Footer (all pages)
        └── ScrollToTop (route change handler)
```

## Component Tree

```
App.jsx
├── ScrollToTop
├── SkipToContent (sr-only link)
├── Nav
├── <main id="main-content">
│   └── <Routes>
│       ├── Hero.jsx (/)
│       ├── About.jsx (/about)
│       ├── Resume.jsx (/resume)
│       ├── AI.jsx (/ai)
│       ├── Project.jsx (/products)
│       ├── Contact.jsx (/contact)
│       └── NotFound.jsx (*)
├── Footer
└── PageMeta (per-page, inside each route component)
```

## Shared Components

| Component | Purpose | Used By |
|-----------|---------|---------|
| LoadingImage | Pulse placeholder + fade-in for images | Hero, About, Project |
| PageMeta | Per-page title + meta description via react-helmet-async | All page components |
| ScrollToTop | Scrolls to top on route change | App (global) |
| NotFound | 404 catch-all page | App router |

## Data Flow

```
src/data/content.js (single source of truth)
       │
       ├── Hero.jsx reads: hero.*, about.cards
       ├── About.jsx reads: about.*
       ├── Resume.jsx reads: resume.*
       ├── AI.jsx reads: ai.*
       ├── Project.jsx reads: project.*
       └── Nav.jsx reads: nav.name
```

All user-visible text, URLs, and content structure lives in `content.js`. Components are purely presentational - they read data and render it.

## Color System

| Token | Hex | CSS Usage |
|-------|-----|-----------|
| bg-primary | #0f1117 | body background, card backgrounds |
| bg-surface | #1a1d27 | hero gradient start, nav bg, card surfaces, form inputs |
| border | #2a2d37 | all borders, dividers, card-interactive default |
| blue | #3b82f6 | links, active nav, company names, bullets, CTA, hover borders |
| blue-hover | #2563eb | CTA hover state |
| green | #10b981 | status badge, "Currently Open To", skills Strong column |
| amber | #f59e0b | skills Improving column |
| text-primary | #e5e7eb | body text, bullet content |
| text-muted | #9ca3af | subtitles, descriptions, dates, icons, skills Moderate |
| white | #ffffff | headings, card titles, name |

Colors are applied via:
- Tailwind arbitrary values: `bg-[#0f1117]`, `text-[#3b82f6]`
- CSS custom classes in index.css: `.card-interactive`, `.btn-primary`, `.btn-outline-blue`, `.footer-icon`, `.icon-circle`

## CSS Architecture

```
src/index.css
├── Tailwind directives (@tailwind base/components/utilities)
├── Global styles (body, scrollbar, selection)
├── Focus-visible styles (a, button)
├── Component classes:
│   ├── .card-interactive (border + hover/focus-within)
│   ├── .btn-primary (solid blue button)
│   ├── .btn-outline-blue (outlined blue button)
│   ├── .footer-icon (gray → blue hover)
│   └── .icon-circle (border transition on parent hover)
└── @media (prefers-reduced-motion: reduce) - disables animations
```

## Routing

| Path | Component | Background | Meta Title |
|------|-----------|------------|------------|
| / | Hero | gradient | Casey Chalfant | Senior Product Manager... |
| /about | About | plain | About Me | Casey Chalfant |
| /resume | Resume | tinted | Resume | Casey Chalfant |
| /ai | AI | tinted | AI | Casey Chalfant |
| /products | Project | tinted | Products | Casey Chalfant |
| /contact | Contact | plain | Contact | Casey Chalfant |
| * | NotFound | plain | (default) |

## Key Interactions

### Lightbox (Products Page)
- **Single image**: Click GitHub project screenshot → full-screen overlay with X close
- **Gallery**: Click Jenius Bank thumbnail → full-screen with left/right arrows, keyboard nav (Arrow keys), counter, Escape to close
- Focus trapped inside dialog, background scroll disabled

### Slideshow (About Page)
- Auto-rotates every 20 seconds with 1s fade transition
- Pauses on mouse hover, resumes on leave
- Click to enlarge in lightbox
- Dot indicators for manual navigation

### Navigation Cards (Home Page)
- 6 cards in 3x2 grid (2 col mobile)
- Blue border on hover via `.card-interactive` CSS class
- Icon circles get blue border on parent hover via `.icon-circle`
- Internal links use React Router `<Link>`, external use `<a target="_blank">`

### Contact Form
- Web3Forms API submission (no backend)
- hCaptcha spam protection (dark theme)
- States: idle → submitting (disabled button) → success/error/captcha-missing
- Form resets on success, captcha resets

## External Services

| Service | Purpose | Config |
|---------|---------|--------|
| Web3Forms | Contact form email delivery | Access key in Contact.jsx |
| hCaptcha | Spam protection | Free sitekey (Web3Forms provided) |
| Google Fonts | Inter + Fira Code | Loaded in index.html |

## File Structure

```
├── public/
│   ├── _redirects (Netlify SPA fallback)
│   ├── favicon.svg (CC initials)
│   ├── headshot.jpg
│   ├── mountains.JPEG
│   ├── slideshow-1.jpg, slideshow-2.jpg, slideshow-3.jpg
│   ├── autopilot-dashboard.png
│   ├── tailwind-dashboard.jpg
│   ├── web-login-1..4.jpg
│   ├── mobile-login-1..4.png
│   ├── password-reset-1..4.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/ (one file per section + shared)
│   ├── data/content.js (all copy)
│   ├── App.jsx (router + layout)
│   ├── main.jsx (entry + HelmetProvider)
│   └── index.css (Tailwind + custom classes)
├── index.html (meta tags, JSON-LD, preloads)
├── tailwind.config.js
├── vite.config.js
├── vercel.json (SPA rewrites)
└── package.json
```

## Build & Deploy

- **Build**: `npm run build` → outputs to `dist/`
- **Dev**: `npm run dev` → Vite dev server on localhost:5173
- **Deploy target**: Cloudflare Pages (auto SPA routing)
- **Fallback configs**: vercel.json + public/_redirects for Vercel/Netlify

## Performance Considerations

- Only headshot.jpg preloaded in HTML head (127KB)
- All other images load on demand per page
- All images compressed (max 392KB for mountain banner, most under 150KB)
- No render-blocking scripts (module type)
- Fonts loaded with preconnect
- Total JS bundle: ~268KB (84KB gzipped)
- Total CSS: ~21KB (5KB gzipped)

## Accessibility

- WCAG 2.1 Level AA compliant (code-level)
- Skip-to-content link
- Focus-visible indicators on all interactive elements
- aria-expanded on hamburger menu
- aria-labels on icon-only links
- aria-live regions on form status messages
- role="dialog" + aria-modal on lightboxes
- Focus trap in lightbox dialogs
- prefers-reduced-motion disables all animations
- Proper heading hierarchy (h1 → h2 → h3 → h4)
- Semantic HTML landmarks (header, nav, main, footer, section)
- Decorative images have alt="" + role="presentation"

## SEO

- Per-page titles via react-helmet-async
- Per-page meta descriptions
- Open Graph tags (title, description, type, image, url)
- Canonical URL
- JSON-LD Person structured data
- sitemap.xml with all 5 pages
- robots.txt allowing all crawlers
- Clean URL structure (/about, /resume, /ai, /products, /contact)
