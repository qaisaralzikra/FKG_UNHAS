# FKG Unhas — Dent Unhas

## Stack
- React 19, Vite 8, Tailwind CSS v4, DaisyUI 5
- JavaScript (JSX) — no TypeScript
- `motion` for animations — import from `"motion/react"` (e.g. `import { motion } from "motion/react"`)
- Remixicon icons: **`@remixicon/react` npm package** for programmatic imports; **CDN class names** (`<i className="ri-...">`) for declarative use — both coexist
- ESLint flat config (`eslint.config.js`) — no Prettier, no formatter config

## Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve production build locally |
| `npm run lint` | ESLint on all files |

No test runner is configured. No CI/CD, pre-commit hooks, or codegen steps.

## Tailwind v4 specifics
- No `tailwind.config.js` or `postcss.config.js` — plugin is `@tailwindcss/vite` (see `vite.config.js`)
- Theme and plugins via CSS directives in `src/index.css`:
  - `@import "tailwindcss"` (entry point), `@plugin "daisyui"`, `@theme { ... }`
- Do **not** use `@tailwind` or `@apply` directives — they will not work
- `vite.config.js` has a stale `content` array (Tailwind v3 leftover); it has no effect in v4

## Entry and routing
- `src/main.jsx` → `src/App.jsx` (StrictMode is **commented out**)
- **React Router** (`react-router-dom`) for navigation — use `<Link>` not `<a>`
- `src/Pages/NotFound.jsx` catches unmatched routes (`path="*"`)

## Architecture
- Beranda (`/`) is the homepage; sections live in `src/Component/Beranda/` (HeroSection, VisiMisi, Layanan, Acara, Blog, JurnalDanPublikasi, Kemitraan)
- Shared layout: `src/Component/PageLayout.jsx` (PageHero, PageHeroDetailBlog, ContentSection, SectionTitle, BackLink, CardLink, CardGrid, CardIMG, CardDept)
- Shared: `src/Component/Navigasi.jsx` (1742 lines, complex nested hover-dropdowns), `src/Component/Footer.jsx`, `src/Component/PageListManager.jsx` (search + pagination), `src/Component/LoadingPage.jsx`
- Page routes: `/profil/*`, `/departemen/*`, `/program-studi/*`, `/gpm/*`, `/unduhan/*`, `/zona-integritas/*`, `/ppid/*`, `/akademik/*`, `/komite-etik/*`, plus `/acara/daftar`, `/blog/daftar`, `/blog/detail/:slug`
- Sub-pages in `src/Pages/ProfIl/` — note the **lowercase `l`** in `ProfIl`
- Uses **white background** (`background-color: white` in `src/index.css`) with **red accents** (`#b00000` primary, `#4A0000` dark sections)
- `@theme` in `src/index.css` declares `--font-poppins: "Raleway", sans-serif`

## API
- Base URL: `https://fkg-unhas.qaisaralzikrah.workers.dev` (Cloudflare Worker proxying to the actual backend)
- Via `axios` in `src/Services/api.js` — provides these endpoints:
  - `getDashboardData()` → `/` (homepage data)
  - `getDaftarBerita(page, perPage, search)` → `/berita`
  - `getDetailBerita(slug)` → `/berita/:slug`
  - `getEvent()` → `/event`
  - `getDataDosen()` → `/dosen`
  - `getDataPendidik()` → `/pendidik`
  - `getPimpinan()` → `/pimpinan`
  - `getDepartemen()` → `/departement` (note: misspelled in API)
  - `getDetailDepartemen(uniq)` → `/departemen/detail/:uniq`
  - `getProdi()` → `/prodi`
  - `getPpid(cat)` → `/webcontent/PPID?cat=`
  - `getAkreditasi()` → `/akreditasi`
  - `getProfil()` → `/profil`
  - `getWebcontent(content)` → `/webcontent/:content`
  - `getSambutan()` → `/sambutan`
  - `getKomite(title)` → `/komite-etik/:title`
- Vite proxy to `https://dent.unhas.ac.id` is **commented out** in `vite.config.js`

## Additional integrations
- Google Translate widget (id/en) in `index.html` — hidden via CSS in `src/index.css`
- `puppeteer` in dependencies — a PDF generation script exists in `.opencode/plans/generate-pdfs-plan.md`; it builds → previews → puppeteer-screenshots all routes to A4 PDFs
- `express` + `cors` in dependencies (used by scripts, not the frontend app)
