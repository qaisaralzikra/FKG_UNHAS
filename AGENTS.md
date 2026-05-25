# FKG Unhas — Dent Unhas

## Stack
- React 19, Vite 8, Tailwind CSS v4, DaisyUI 5
- JavaScript (JSX) — no TypeScript
- `motion` (formerly Framer Motion) for animations — import from `"motion/react"` (e.g. `import { motion } from "motion/react"`)
- Remixicon for icons (loaded via CDN in `index.html`)
- ESLint flat config (`eslint.config.js`) — no Prettier, no formatter config

## Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve production build locally |
| `npm run lint` | ESLint on all files |

No test runner is configured.

## Tailwind v4 specifics
- No `tailwind.config.js` or `postcss.config.js` — plugin is `@tailwindcss/vite` (see `vite.config.js`)
- Theme and plugins are defined via CSS directives in `src/index.css`:
  - `@import "tailwindcss"` (entry point)
  - `@plugin "daisyui"` (DaisyUI integration)
  - `@theme { ... }` (custom theme tokens)
- Do **not** use `@tailwind` or `@apply` directives in a postcss config — they will not work

## Architecture
- Entry: `src/main.jsx` → `src/App.jsx`
- **React Router** (`react-router-dom`) for multi-page navigation — all nav links use `<Link>` not `<a>`
- Beranda (`/`) is the homepage with sections: `src/Component/Beranda/` (HeroSection, VisiMisi, Layanan, Acara, JurnalDanPublikasi, Blog, Kemitraan)
- Shared layout: `src/Component/PageLayout.jsx` (PageHero, ContentSection, SectionTitle, BackLink, CardLink, CardGrid)
- Shared: `src/Component/Navigasi.jsx`, `src/Component/Footer.jsx`
- `Navigasi.jsx` is a large file (~1876 lines) with complex nested dropdown sub-menus using hover-based state management
- Page routes: `/profil/*`, `/departemen/*`, `/program-studi/*`, `/gpm/*`, `/unduhan/*`, `/zona-integritas/*`, `/ppid/*`, `/akademik/*`, `/komite-etik/*`
- Sub-pages live in `src/Pages/ProfIl/`, `src/Pages/GPM/`, etc.
- `*` wildcard routes fall back to the category index page when a direct sub-page match is missing
- `src/pages/NotFound.jsx` handles unmatched routes (`path="*"`)

## Conventions
- Standard `className` attribute in JSX (one `classname` typo existed in old `App.jsx` — do not replicate)
- Dark theme via DaisyUI data attributes (e.g. `data-theme="dark"`)
- Accent colors used in code: `#b00000` (red — navigation hover states), `#4A0000` (footer background)
- `@theme` in `src/index.css` declares `--font-poppins: "Raleway", sans-serif` — the CSS variable name says Poppins but uses the Raleway font family

## Additional integrations
- Google Translate widget embedded in `index.html` (language pair id/en) — hidden via CSS in `src/index.css` (`.goog-te-banner-frame`, `.skiptranslate`)
- No pre-commit hooks, CI/CD, or codegen/migration steps
