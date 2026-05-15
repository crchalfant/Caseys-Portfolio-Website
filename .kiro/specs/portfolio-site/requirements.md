# Requirements Document

## Introduction

A personal portfolio website for Casey Chalfant, a Product Leader with 12+ years of experience in fintech and digital banking. The site serves as a professional showcase targeting fintech and banking hiring managers for senior and VP-level PM roles. It is a multi-page React application with client-side routing, a dark-mode-only design, and a corporate-premium color palette.

The visual style is inspired by [elezea.com](https://elezea.com/) - a clean, text-forward personal site with a centered hero, icon navigation cards, and separate pages for each content area.

## Architecture

- Multi-page with React Router - each section is its own route (/about, /resume, /ai, /products, /contact)
- No single-page scroll - navigation between pages, not anchor scrolling
- No scroll animations - pages render immediately, no fade-in effects
- ScrollToTop component - pages scroll to top on route change
- 404 catch-all route - unknown URLs show a "Go Home" page
- SPA redirect configs - vercel.json and public/_redirects for deployment compatibility

## Color Palette (Corporate Premium)

| Role | Hex | Usage |
|------|-----|-------|
| Background | #0f1117 | Page background, card backgrounds |
| Surface | #1a1d27 | Hero gradient, nav background, card surfaces |
| Border | #2a2d37 | All borders, dividers |
| Blue accent | #3b82f6 | Links, nav active state, company names, CTA button, card hover borders, bullet markers, icons |
| Blue hover | #2563eb | CTA hover state |
| Green accent | #10b981 | Status badge, "Currently Open To" badge, skills "Strong" column |
| Amber | #f59e0b | Skills "Improving" column label and icon |
| Body text | #e5e7eb | Paragraphs, bullet text |
| Muted text | #9ca3af | Subtitles, descriptions, dates, card icons, skills "Moderate" column |
| White | #ffffff | Headings, card titles, name |

## Requirements

### Requirement 1: Home Page - Hero Banner

**User Story:** As a hiring manager, I want to immediately see Casey's photo, name, and availability status so I can assess relevance.

#### Acceptance Criteria

1. THE Home_Page SHALL display a centered hero banner with a gradient background (#1a1d27 to #0f1117)
2. THE hero banner SHALL display Casey's headshot as a large circular image (250px desktop) with a border, subtle blue shadow, and -5% vertical translate for framing
3. THE hero banner SHALL display Casey's full name as the H1 element
4. THE hero banner SHALL display a green (#10b981) status pill reading "STATUS: Open to New Opportunities" with a pulsing dot
5. THE hero banner SHALL display the tagline "Bridging Technology & Product in Regulated Environments."
6. THE hero banner SHALL NOT display a CTA button

### Requirement 2: Home Page - About Section with Navigation Cards

**User Story:** As a hiring manager, I want quick access to all sections of Casey's portfolio from the homepage.

#### Acceptance Criteria

1. THE Home_Page SHALL display an "About me" heading and a short bio paragraph below the hero with minimal spacing
2. THE bio SHALL include a link to the full About page with the text "Wanna learn about me? View my full about page."
3. THE Home_Page SHALL display 6 icon navigation cards in a 3x2 grid (2 columns on mobile, 3 on desktop): Resume, Products, AI, LinkedIn, Contact, GitHub
4. EACH card SHALL display a circular icon, a title, and a short description
5. THE Resume, Products, and AI cards SHALL link to their respective pages using React Router
6. THE LinkedIn card SHALL link directly to https://www.linkedin.com/in/casey-chalfant/ in a new tab
7. THE Contact card SHALL link to the /contact page
8. THE GitHub card SHALL link directly to https://github.com/crchalfant in a new tab
9. ALL cards SHALL have gray (#9ca3af) icons and blue hover borders
10. ALL images SHALL use the LoadingImage component with pulse placeholder and fade-in

### Requirement 3: About Page

**User Story:** As a hiring manager, I want to read Casey's full bio and understand his personality, interests, and availability.

#### Acceptance Criteria

1. THE About_Page SHALL display a full-width mountain banner image at the top with dark overlay (20% opacity) and rounded corners
2. THE About_Page SHALL display the headline "Hello! I'm Glad You're Here!"
3. THE About_Page SHALL display a slideshow (floated right on desktop) that auto-rotates between 3 personal photos every 20 seconds with 1-second fade transitions
4. THE slideshow SHALL pause on mouse hover and resume on mouse leave
5. THE slideshow SHALL be clickable to open the current photo in a full-screen lightbox
6. THE slideshow SHALL display dot indicators below for manual navigation
7. THE About_Page SHALL display a "My Personality" section below the slideshow with links to: MBTI (ENTJ-T), DISC (Encourager IS), and Insights Discovery (Y,B,G)
8. THE About_Page SHALL display the following content sections with h3 headings: "How I got to where I am today", "What I'm Working on Now", "What I'm looking for in my next role", "What I Do When I'm Not Working", "What's on my bucket list:"
9. THE bucket list section SHALL display items as blue bullet points
10. THE About_Page SHALL display a "Currently Open To" badge with green (#10b981) styling

### Requirement 4: Resume Page

**User Story:** As a hiring manager, I want to see Casey's full work history with detailed accomplishments.

#### Acceptance Criteria

1. THE Resume_Page SHALL display a heading "Experience" and a descriptor "12+ years across digital banking, fintech, and regulated environments."
2. THE Resume_Page SHALL display a "How I work" card with 4 paragraph items describing work style (no headers, just body text)
3. THE Resume_Page SHALL display exactly 4 role cards: Jenius Bank (Senior Product Manager, Feb 2022-Present), RBC Bank (Digital Product Manager, May 2020-Feb 2022), First Citizens Bank (Business Systems Analyst II, Aug 2019-May 2020), Deutsche Bank (Business Analyst, Aug 2014-Aug 2019)
4. EACH role card SHALL display: job title (white), company name (blue with Building2 icon), date range (gray monospace with Calendar icon), and full bullet points with blue arrow markers
5. THE role cards SHALL have blue hover borders via the card-interactive CSS class
6. THE Resume_Page SHALL display an Education card with: GraduationCap icon, "Appalachian State University" in blue, date "August 2012 - May 2014", degree, AITP President & Fundraising Chair, First Generation College Graduate, and Awards sub-section
7. THE Resume_Page SHALL display a "My Skillset" section with 3 columns:
   - STRONG (green label, Check icon)
   - MODERATE (gray label, Circle icon)
   - SKILLS I'M IMPROVING (amber label, TrendingUp icon)

### Requirement 5: AI Page

**User Story:** As a hiring manager, I want to understand how Casey uses AI tools in his product work.

#### Acceptance Criteria

1. THE AI_Page SHALL display a heading "How I work with AI" and a descriptor "AI tools are core workflow components, not buzzword dressing."
2. THE AI_Page SHALL display 2 paragraphs explaining Casey's AI philosophy
3. THE AI_Page SHALL display 3 highlight cards with blue icon backgrounds and blue icons (Sparkles, Zap, Code2)

### Requirement 6: Products Page

**User Story:** As a hiring manager, I want to see what Casey has built to assess hands-on capability.

#### Acceptance Criteria

1. THE Products_Page SHALL display a heading "Products"
2. THE Products_Page SHALL display GitHub project cards (Job Search Autopilot, Tailwind) with: project name, tech label, "Built with Kiro" label, description, GitHub link button, and a screenshot on the right side
3. THE Products_Page SHALL display a career product card (Jenius Bank - Authentication User Journey) with: Building2 icon, "USER EXPERIENCE EXAMPLES" label, description, and a tabbed gallery
4. THE tabbed gallery SHALL have tabs for "Web Login", "Mobile Login", and "Password Reset"
5. EACH tab SHALL display a thumbnail grid of screenshots (4 per tab)
6. THE thumbnails SHALL use h-48 object-cover for web screenshots and h-64 object-contain for mobile screenshots
7. Clicking any thumbnail SHALL open a gallery lightbox with left/right arrows, keyboard navigation (Arrow keys), and a counter (e.g., "1 / 4")
8. THE lightbox SHALL close on Escape key, X button, or click outside
9. THE lightbox SHALL trap focus and prevent background scrolling

### Requirement 7: Contact Page

**User Story:** As a hiring manager, I want to send Casey a message without needing his email address.

#### Acceptance Criteria

1. THE Contact_Page SHALL display a heading "Get in touch" and subtitle "Fill out the form below and I'll be in touch."
2. THE Contact_Page SHALL display a form with Name, Email, and Message fields (all required)
3. THE form SHALL use Web3Forms API for submission (access key: a023de76-a415-41c2-86a2-a0fad03e8061)
4. THE form SHALL include hCaptcha (dark theme) using the Web3Forms free sitekey
5. THE form SHALL display validation states: amber warning for missing captcha, green success message, red error message
6. THE form status messages SHALL use aria-live="polite" and role="alert" or role="status"
7. Casey's email address SHALL NOT appear anywhere in the site source code

### Requirement 8: Navigation

**User Story:** As a site visitor, I want persistent navigation to move between pages.

#### Acceptance Criteria

1. THE Sticky_Nav SHALL remain fixed at the top of all pages
2. THE Sticky_Nav SHALL display "Home" on the left as a link to / in blue (#3b82f6) monospace font
3. THE Sticky_Nav SHALL display page links on the right: About Me, Resume, AI, Products, Contact
4. THE active page link SHALL be highlighted with blue text and a blue/10 background
5. THE Sticky_Nav SHALL collapse into a hamburger menu on viewports below md breakpoint (768px)
6. THE hamburger button SHALL include aria-expanded attribute
7. THE Sticky_Nav SHALL have a semi-transparent dark background with backdrop blur

### Requirement 9: Footer

**User Story:** As a hiring manager, I want to always have access to Casey's contact information.

#### Acceptance Criteria

1. THE Footer SHALL appear on every page below the main content
2. THE Footer SHALL display "Casey Chalfant" and "Product Leader"
3. THE Footer SHALL display 3 social icons: Contact form (Link to /contact), LinkedIn (new tab), GitHub (new tab)
4. ALL footer icons SHALL use the footer-icon CSS class (gray default, blue on hover)

### Requirement 10: SEO and Meta Tags

**User Story:** As a hiring manager finding Casey's site via search, I want clear metadata.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL include the title "Casey Chalfant | Senior Product Manager | Fintech & Digital Banking"
2. THE Portfolio_Site SHALL include per-page titles via react-helmet-async (e.g., "Resume | Casey Chalfant")
3. THE Portfolio_Site SHALL include per-page meta descriptions
4. THE Portfolio_Site SHALL include Open Graph meta tags (og:title, og:description, og:type, og:image, og:url)
5. THE Portfolio_Site SHALL include a canonical URL
6. THE Portfolio_Site SHALL include JSON-LD structured data (Person schema)
7. THE Portfolio_Site SHALL include a favicon (SVG with "CC" initials in blue on dark background)
8. THE Portfolio_Site SHALL preload the headshot image only (other images load on demand)
9. THE Portfolio_Site SHALL include sitemap.xml (all pages) and robots.txt

### Requirement 11: Technology Constraints

**User Story:** As a developer, I want clear technology boundaries.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL use React with functional components and hooks
2. THE Portfolio_Site SHALL use React Router for client-side page navigation
3. THE Portfolio_Site SHALL use Tailwind CSS for styling with CSS custom classes for interactive states
4. THE Portfolio_Site SHALL use Lucide React as the sole icon library
5. THE Portfolio_Site SHALL use Vite as the build tool
6. THE Portfolio_Site SHALL use @hcaptcha/react-hcaptcha for spam protection
7. THE Portfolio_Site SHALL use Web3Forms for contact form submission
8. THE Portfolio_Site SHALL use react-helmet-async for per-page meta tags
9. THE Portfolio_Site SHALL NOT include a backend, database, or authentication
10. THE Portfolio_Site SHALL NOT use heavy third-party component libraries

### Requirement 12: Accessibility (WCAG 2.1 AA)

**User Story:** As a user with disabilities, I want the site to be fully accessible.

#### Acceptance Criteria

1. ALL interactive elements SHALL have visible focus indicators (blue outline on focus-visible)
2. THE Portfolio_Site SHALL include a skip-to-content link (visible on focus)
3. ALL images SHALL have appropriate alt text (descriptive for meaningful, empty for decorative)
4. ALL external links SHALL have aria-labels indicating they open in a new tab
5. THE lightbox dialogs SHALL trap keyboard focus and include aria-modal="true"
6. THE contact form status messages SHALL use aria-live regions
7. THE hamburger menu SHALL include aria-expanded state
8. THE Portfolio_Site SHALL respect prefers-reduced-motion (disable all animations)
9. ALL form inputs SHALL have associated labels

### Requirement 13: Mobile-First Responsive Layout

**User Story:** As a hiring manager on mobile, I want the site to be fully usable.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL be designed mobile-first starting at 375px minimum width
2. THE navigation card grid SHALL display as 2 columns on mobile and 3 columns on desktop
3. THE Sticky_Nav SHALL collapse to a hamburger menu below md breakpoint
4. THE Resume "How I work" grid SHALL stack to single column on mobile
5. THE Products page screenshots SHALL be visible on mobile (below the text content)
6. THE Skills assessment grid SHALL stack to single column on mobile
7. THE About page slideshow SHALL display above the text content on mobile

### Requirement 14: Image Loading and Performance

**User Story:** As a site visitor, I want images to load smoothly without layout shift.

#### Acceptance Criteria

1. ALL images SHALL use the shared LoadingImage component where appropriate
2. THE LoadingImage component SHALL display a pulsing dark placeholder (#1a1d27) while loading
3. THE LoadingImage component SHALL fade in the image over 500ms once loaded
4. THE Portfolio_Site SHALL only preload the headshot image in the HTML head
5. ALL images SHALL be compressed (max 400KB, most under 150KB)
6. Image filenames SHALL use lowercase with hyphens (no spaces, no special characters)

### Requirement 15: Privacy and Simplicity

**User Story:** As a site visitor, I want a distraction-free experience.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL NOT include a blog section
2. THE Portfolio_Site SHALL NOT display cookie banners or modals (except lightbox)
3. THE Portfolio_Site SHALL NOT include analytics tracking
4. THE Portfolio_Site SHALL NOT include a light mode toggle - dark mode only
5. Casey's email address SHALL NOT be exposed anywhere in the source code or rendered HTML

### Requirement 16: Deployment

**User Story:** As a developer, I want the site to deploy correctly on any static hosting platform.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL include a vercel.json with SPA rewrite rules
2. THE Portfolio_Site SHALL include a public/_redirects file for Netlify compatibility
3. THE Portfolio_Site SHALL work on Cloudflare Pages (which handles SPA routing automatically)
4. THE build command SHALL be `npm run build` with output directory `dist`
5. THE .gitignore SHALL exclude node_modules and dist
