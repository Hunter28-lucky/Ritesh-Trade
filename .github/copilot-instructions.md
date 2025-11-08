# BuuyTheDip Trading Education Platform - AI Agent Instructions

## Project Overview
Single-page vanilla JavaScript trading education website. **Zero build process** - pure HTML/CSS/JS served statically via Vercel.

## Architecture & Structure

### Core Files (Read These First)
- `index.html` - Single 675-line HTML file with all content sections
- `css/styles.css` - 2543 lines of pure CSS (no preprocessors) with comprehensive CSS custom properties
- `js/script.js` - 555 lines of vanilla JavaScript (no frameworks/libraries)

### Section Structure (in `index.html`)
1. **Preloader** → **Header/Nav** → **Hero** → **About** → **Services** → **Reviews** → **Contact** → **Footer**
2. All sections use `<section id="...">` with semantic IDs for anchor navigation
3. Every section follows `.container` → content pattern for responsive centering

## Critical Patterns & Conventions

### CSS Design System
**Located at top of `css/styles.css` (lines 1-60):**
```css
:root {
  --color-primary: #1E293B;    /* Navy/Slate */
  --color-accent: #3B82F6;     /* Professional Blue */
  --color-success: #059669;    /* Subdued Green (market up) */
  /* ... 30+ CSS variables */
}
```
**Always use CSS variables** - never hardcode colors/spacing. The theme is "professional business" with navy/blue/green accents.

### Component Naming Pattern
- **Card components**: `.service-card`, `.review-card`, `.feature-card`
- **Headers**: `.service-card-header`, `.service-card-body`, `.service-card-footer`
- **Color modifiers**: `.green-gradient`, `.red-gradient` (trading green/red semantics)
- **Interactive states**: `.active`, `.scrolled`, `.show`, `.error`

### JavaScript Module Organization
`js/script.js` is organized in clear sections (comments with `===`):
1. **Preloader** (lines 5-17)
2. **Navigation & Header** (lines 19-120) - sticky header, hamburger menu, active link highlighting
3. **Back to Top Button** (lines 122-141)
4. **Counter Animation** (lines 143-154) - for stats in About section
5. **Reviews Slider** (lines 156-260) - auto-play carousel with keyboard support
6. **Contact Form Validation** (lines 262-372) - real-time validation
7. **Notification System** (lines 374-420) - toast notifications

**Pattern**: Each feature is self-contained with feature detection (`if (element) {...}`) to prevent errors.

## Development Workflows

### Local Development
```bash
# Option 1: Python (most common)
python3 -m http.server 5500

# Option 2: Node.js (if installed)
npx serve .

# Then visit: http://localhost:5500
```
**No build step exists** - edit files and refresh browser.

### Deployment (Vercel)
- `vercel.json` configures static hosting with clean URLs
- Deployment is instant: `git push` triggers auto-deploy
- **No environment variables needed** - all static except Web3Forms API key (hardcoded in HTML)

### Contact Form Integration
Uses **Web3Forms API** (third-party service):
```html
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="d6d7a776-791c-46f9-89da-a4c8ba8b0d77">
```
- Form submits via standard POST (no JavaScript API)
- Validation happens client-side in `script.js` before submission
- Success/error feedback shown via notification system

## Project-Specific Anti-Patterns

### DO NOT:
1. **Add build tools** - This is intentionally dependency-free. No webpack, vite, parcel, etc.
2. **Use frameworks** - No React/Vue/Angular. Vanilla JS is the architecture.
3. **Add npm dependencies** - `package.json` exists only for metadata and local dev scripts
4. **Create separate component files** - Single HTML file is the pattern
5. **Use inline styles** - All styling goes in `css/styles.css` via classes

### DO:
1. **Use CSS custom properties** for any color/spacing changes
2. **Follow BEM-like naming**: `.block-element--modifier`
3. **Add ARIA labels** - Accessibility is prioritized (see navigation buttons)
4. **Test mobile responsiveness** - Design is mobile-first (breakpoints: 768px, 1024px)
5. **Maintain section order** - Hero → About → Services → Reviews → Contact flow is intentional

## Key Integration Points

### Image Assets
- Logo supports fallback: `<img src="logo.svg" onerror="this.src='logo.png';">`
- Images go in `assets/images/`
- All images use `loading="lazy"` attribute

### Navigation System
- Hash-based routing: `#home`, `#about`, `#services`, `#contact`
- Smooth scroll implemented in JS (lines 106-120)
- Active link highlighting on scroll (lines 84-100)
- Mobile hamburger menu closes on link click (lines 53-60)

### Animation System
- **CSS-driven**: Most animations in `@keyframes` (no JS animation libraries)
- **Scroll animations**: Intersection Observer used for fade-in effects (lines 421-455)
- **Slider auto-play**: 5-second interval, pauses on hover (lines 228-238)

## Testing & Debugging

### Browser Testing
- **Primary target**: Chrome/Safari (mobile + desktop)
- **Font Awesome 6.4.0** CDN required for icons
- **Google Fonts**: Inter + Poppins preloaded

### Common Issues
1. **Form not submitting**: Check Web3Forms API key validity
2. **Icons missing**: Verify Font Awesome CDN is loaded
3. **Menu not closing**: Check `hamburger` and `navMenu` IDs exist
4. **Slider not working**: Ensure `.review-card` elements have `.active` class initially

## Documentation References
- `README.md` - Feature overview and color scheme
- `IMPROVEMENTS.md` - Historical context of refactoring decisions
- `DEPLOYMENT.md` - Vercel deployment steps (GitHub or CLI)
- `SUMMARY.md` - Project goals and technical decisions
- `SEO_IMPLEMENTATION.md` - Complete SEO strategy and implementation details
- `SEO_CHECKLIST.md` - Step-by-step SEO deployment checklist
- `SEO_QUICK_REFERENCE.md` - Quick reference for SEO features

## SEO Implementation

### Hidden SEO Content
- **All SEO optimizations are invisible to users** - positioned off-screen or in meta tags
- Hidden div contains keyword-rich content for search engines
- Schema.org structured data (5 types: EducationalOrganization, LocalBusiness, Course, Person, BreadcrumbList)
- Comprehensive meta tags with geo-targeting for Dhanbad, Jharkhand

### Target Keywords
- Primary: Ritesh Lifts, Ritesh Trades, BuuyTheDip, Buy The Dip, Dhanbad Trading Courses
- All keywords naturally integrated in meta tags, schema, and hidden content
- Local SEO optimization for Dhanbad location

### SEO Files
- `sitemap.xml` - XML sitemap for search engine indexing
- `robots.txt` - Crawler instructions allowing all major search engines
- `manifest.json` - PWA manifest with SEO keywords
- `.htaccess` - Server-level optimizations (compression, caching, security headers)

## Modifying Content

### Adding a Service Card
Copy the `.service-card` structure (lines 293-314 in `index.html`), update:
- Icon: `.service-icon i` class (Font Awesome icon)
- Gradient: `.green-gradient` or `.red-gradient`
- Features: `<ul class="service-features">` list items

### Changing Colors
Edit `:root` variables in `css/styles.css` (lines 7-19):
```css
--color-primary: #1E293B;  /* Change primary brand color */
--color-accent: #3B82F6;   /* Change button/link color */
```
**All 2500+ lines of CSS reference these variables** - change once, affects everywhere.

### Adding a Review
Duplicate `.review-card` in HTML (lines 447-467), JavaScript auto-detects and creates navigation dots.
