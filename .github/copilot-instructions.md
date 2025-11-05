# Copilot Instructions: Market Mastery View

## Project Overview
Professional stock market research website built with React, TypeScript, Vite, and shadcn/ui components. This is a single-page application (SPA) featuring a landing page for a SEBI-registered research analyst business.

## Architecture & Key Patterns

### Component Structure
- **Page Components**: Located in `src/pages/` - minimal orchestration containers (see `Index.tsx`)
- **Section Components**: Located in `src/components/` - self-contained page sections like `HeroNew.tsx`, `AboutNew.tsx`, `ServicesNew.tsx`
- **Naming Convention**: Components with "New" suffix (e.g., `HeroNew`, `ContactNew`) are the active versions; non-suffixed versions are legacy/alternate implementations
- **UI Primitives**: All shadcn/ui components live in `src/components/ui/` - these are generated/managed via shadcn CLI

### Routing & Navigation
- Uses React Router v6 with `BrowserRouter` configured in `App.tsx`
- Single-page app with scroll-based navigation (`scrollIntoView`) rather than route changes
- All sections use `id` attributes (e.g., `id="about"`, `id="services"`) for smooth scrolling from navigation
- Catch-all `*` route points to `NotFound.tsx` - add custom routes ABOVE this in `App.tsx`

### Styling System
- **CSS Variables First**: All design tokens defined in `src/index.css` using HSL color format
- **Tailwind Extensions**: Custom colors, shadows, and gradients defined in `tailwind.config.ts` reference CSS variables
- **Component Styling**: Use `cn()` utility from `@/lib/utils` to merge Tailwind classes with component variants
- **Class Variance Authority**: UI components use `cva()` for variant-based styling (see `button.tsx`)

### Import Aliases
Path aliases configured in both `tsconfig.json` and `vite.config.ts`:
- `@/` → `./src/` (use for all internal imports)
- Example: `import { Button } from "@/components/ui/button"`

## Development Commands

```bash
npm run dev         # Start dev server on http://[::]:8080
npm run build       # Production build
npm run build:dev   # Development mode build
npm run preview     # Preview production build
npm run lint        # ESLint check
```

## Component Development Guidelines

### Adding New Sections
1. Create component in `src/components/` using default export
2. Import and add to `src/pages/Index.tsx` in desired order
3. Add section `id` attribute for navigation linking
4. Follow established pattern: container → max-width wrapper → content grid

Example structure:
```tsx
const NewSection = () => {
  return (
    <section id="section-name" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Content here */}
        </div>
      </div>
    </section>
  );
};

export default NewSection;
```

### Adding shadcn/ui Components
This project uses the shadcn/ui CLI. Check `components.json` for configuration. Components are installed to `src/components/ui/`.

### State Management
- React Query (`@tanstack/react-query`) configured in `App.tsx` for async state
- Local state via `useState` is preferred for component-specific state
- No global state management library currently used

### Icons
Use `lucide-react` for all icons. Common imports:
```tsx
import { ArrowRight, Shield, Award, TrendingUp } from "lucide-react";
```

## Project-Specific Conventions

### Design System Values
- **Primary color**: Dark gray (`--primary: 0 0% 15%`) for professional/institutional feel
- **Accent color**: Red (`--accent: 0 72% 51%`) - represents bull market theme
- **Spacing rhythm**: 8px base (use Tailwind `p-4`, `py-24`, etc.)
- **Border radius**: Soft corners via `--radius: 0.5rem`

### TypeScript Configuration
- **Relaxed strictness**: `noImplicitAny: false`, `strictNullChecks: false` - pragmatic over strict
- `allowJs: true` for gradual typing if needed
- Use `.tsx` for all component files

### Responsive Breakpoints
Follow Tailwind defaults with custom container:
- Mobile-first approach
- `md:` for tablet (768px)
- `lg:` for desktop (1024px)
- Container maxes at `1400px` (2xl)

## Special Considerations

### Lovable Integration
- Project managed via Lovable platform (see README.md)
- `lovable-tagger` plugin active in dev mode only
- Changes pushed to repo sync with Lovable dashboard

### Asset Management
- Static assets in `src/assets/` (currently includes bull logo)
- Import assets directly: `import bullLogo from "@/assets/bull-logo.png"`

### Performance
- Vite + SWC for fast builds/HMR
- `@vitejs/plugin-react-swc` provides React Fast Refresh

## Common Gotchas

1. **Component imports**: Always use `@/` alias, never relative paths for cross-directory imports
2. **Section IDs**: Must match navigation links for smooth scrolling to work
3. **Color formats**: Only use HSL values when defining colors in CSS variables
4. **Button variants**: Use shadcn `Button` component with variants, don't create custom button components
5. **Legacy components**: Don't modify components without "New" suffix unless explicitly updating legacy versions
