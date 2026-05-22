# FKG Unhas — Dent Unhas

## Stack
- React 19, Vite 8, Tailwind CSS v4, DaisyUI 5
- JavaScript (JSX) — no TypeScript
- `motion` (formerly Framer Motion) for animations
- Remixicon for icons (loaded from CDN in `index.html`)
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
- Pages: `src/Pages/` (single page: `Beranda.jsx`)
- Sections: `src/Component/Beranda/` (HeroSection, VisiMisi, Layanan, Acara, JurnalDanPublikasi, Blog, Kemitraan)
- Shared: `src/Component/Navigasi.jsx`, `src/Component/Footer.jsx`
- `index.html` loads fonts via Google Fonts and Remixicon via CDN

## Conventions
- `classname` instead of `className` in JSX (observed in `App.jsx` — consistency preferred)
- Dark theme via DaisyUI data attributes (e.g. `data-theme="dark"`)
- Color palette used: `#0A6843`, `#F3F3F3`, `#7ABA78`, `#E0F7FA`, `#FFFACD`, `#263238`, `#0D47A1`

## Notes
- No test runner installed
- No pre-commit hooks or CI/CD configured
- No codegen or migration steps
- Single-page app — no client-side routing
