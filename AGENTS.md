# FKG Unhas — Dent Unhas

## Stack
- React 19, Vite 8, Tailwind CSS v4, DaisyUI 5
- JavaScript (JSX) — no TypeScript
- `motion` for animations — import from `"motion/react"` (e.g. `import { motion } from "motion/react"`)
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
- Theme and plugins via CSS directives in `src/index.css`:
  - `@import "tailwindcss"` (entry point), `@plugin "daisyui"`, `@theme { ... }`
- Do **not** use `@tailwind` or `@apply` directives — they will not work

## Architecture
- Entry: `src/main.jsx` → `src/App.jsx`
- **React Router** (`react-router-dom`) for navigation — use `<Link>` not `<a>`
- Beranda (`/`) is the homepage; sections live in `src/Component/Beranda/` (HeroSection, VisiMisi, Layanan, Acara, JurnalDanPublikasi, Blog, Kemitraan)
- Shared layout: `src/Component/PageLayout.jsx` (PageHero, ContentSection, SectionTitle, BackLink, CardLink, CardGrid)
- Shared: `src/Component/Navigasi.jsx` (1742 lines, complex nested hover-dropdowns), `src/Component/Footer.jsx`, `src/Component/PageListManager.jsx` (search + pagination)
- Page routes: `/profil`, `/departemen/*`, `/program-studi/*`, `/gpm/*`, `/unduhan/*`, `/zona-integritas/*`, `/ppid/*`, `/akademik/*`, `/komite-etik/*`
- Sub-pages in `src/Pages/ProfIl/`, `src/Pages/GPM/`, etc. — note the lowercase `l` in `ProfIl` directory name
- `src/Pages/NotFound.jsx` catches unmatched routes (`path="*"`)
- Backend API at `http://localhost:8080/api` via axios (`src/Services/api.js`) — provides `/` dashboard data and `/berita` endpoint

## Conventions
- Standard `className` in JSX
- Dark theme via DaisyUI `data-theme="dark"`
- Accent colors: `#b00000` (red — nav hovers), `#4A0000` (footer/dark sections)
- `@theme` in `src/index.css` declares `--font-poppins: "Raleway", sans-serif` — name says Poppins, font is Raleway

## Additional integrations
- Google Translate widget in `index.html` (id/en) — hidden via CSS in `src/index.css`
- `puppeteer` in dependencies — a PDF generation script (`scripts/generate-pdfs.mjs`) exists in `.opencode/plans/generate-pdfs-plan.md`; it builds → previews → puppeteer-screenshots all routes to A4 PDFs
- No pre-commit hooks, CI/CD, or codegen/migration steps
