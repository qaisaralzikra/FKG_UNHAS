# Generate PDF Plan

## Script: `scripts/generate-pdfs.mjs`

```js
import puppeteer from "puppeteer"
import { spawn, execSync } from "child_process"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")

const routes = [
  "/",
  "/profil",
  "/profil/selayang-pandang",
  "/profil/sejarah",
  "/profil/profil-fkg",
  "/profil/visi-misi",
  "/profil/sambutan-dekan",
  "/profil/pimpinan-fakultas",
  "/profil/struktur-organisasi",
  "/profil/data-dosen",
  "/profil/tenaga-pendidik",
  "/profil/sarana-prasarana",
  "/profil/zona-integritas",
  "/profil/download-center",
  "/profil/kontak",
  "/profil/perjanjian",
  "/profil/galeri",
  "/departemen",
  "/departemen/biologi-oral",
  "/departemen/ilmu-bahan-dan-teknologi",
  "/departemen/ilmu-kedokteran-gigi-anak",
  "/departemen/ilmu-kedokteran-gigi-masyarakat-pencegahan",
  "/departemen/ilmu-penyakit-mulut",
  "/departemen/konservasi-gigi",
  "/departemen/oral-and-maxillofacial-radiology",
  "/departemen/ortodonti",
  "/departemen/periodonsia",
  "/departemen/prostodonsia",
  "/departemen/oral-and-maxillofacial-surgery",
  "/program-studi",
  "/gpm",
  "/gpm/audit-mutu-internal",
  "/gpm/tinjauan-manajemen-fakultas",
  "/gpm/evaluasi-proses-belajar-mengajar",
  "/gpm/laporan-permintaan-tindakan-koreksi",
  "/gpm/bukti-pelaksanaan-ami",
  "/gpm/laporan-benchmarking",
  "/gpm/akreditasi-nasional",
  "/gpm/akreditasi-internasional",
  "/gpm/sertifikasi-iso",
  "/gpm/sertifikasi-laboratorium",
  "/gpm/hasil-survey-2025",
  "/gpm/hasil-survey-2024",
  "/gpm/hasil-survey-2023",
  "/gpm/dokumen-spmi-standar",
  "/gpm/dokumen-spmi-kebijakan",
  "/gpm/dokumen-spmi-manual",
  "/gpm/dokumen-spmi-formulir",
  "/gpm/laporan-kinerja",
  "/gpm/renstra-unhas-dan-fkg",
  "/gpm/standar-pelayanan-publik",
  "/gpm/kebijakan-spmi",
  "/gpm/dasar-hukum",
  "/gpm/dokumen",
  "/gpm/qs-wur-the-wur-2025",
  "/gpm/proses-bisnis",
  "/gpm/kegiatan-gpm",
  "/gpm/instrumen",
  "/gpm/sistem-audit",
  "/gpm/akreditasi",
  "/gpm/gallery",
  "/gpm/bench-marking",
  "/unduhan",
  "/zona-integritas",
  "/zona-integritas/wbs",
  "/zona-integritas/upg",
  "/zona-integritas/bk",
  "/zona-integritas/am",
  "/zona-integritas/ikm",
  "/ppid",
  "/ppid/serta-merta",
  "/ppid/dikecualikan",
  "/ppid/setiap-saat",
  "/ppid/berkala",
  "/akademik",
  "/akademik/akreditasi",
  "/akademik/sk-kontrak-kinerja",
  "/akademik/pengabdian",
  "/akademik/kemahasiswaan",
  "/akademik/ormawa",
  "/akademik/buku-pedoman",
  "/komite-etik",
  "/komite-etik/pendahuluan",
  "/komite-etik/akreditasi-komite-etik",
  "/komite-etik/struktur-organisasi-alur-pengajuan",
  "/komite-etik/anggota-komite-etik",
  "/komite-etik/konsultan-independen-komite-etik",
  "/komite-etik/sop-penelitian-subjek-manusia",
  "/komite-etik/sop-penelitian-hewan",
  "/komite-etik/formulir-panduan-pengajuan-untuk-pi",
  "/komite-etik/jadwal-rapat",
  "/komite-etik/protokol-yang-disetujui",
  "/komite-etik/referensi-komite-etik",
  "/komite-etik/biaya-kontribusi-ethical-clearance",
  "/komite-etik/pelatihan-komite-etik",
  "/komite-etik/kontak-komite-etik",
]

const BASE_URL = "http://localhost:4173"
const OUTPUT_DIR = path.join(root, "pdf-output")

function makeFilename(route) {
  const clean = route === "/" ? "beranda" : route.replace(/^\//, "")
  return clean.replace(/\//g, "_") + ".pdf"
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function waitForServer(url, timeout = 30000) {
  const start = Date.now()
  while (Date.now() - start < timeout) {
    try {
      const resp = await fetch(url)
      if (resp.ok) return true
    } catch {}
    await sleep(1000)
  }
  throw new Error("Server did not start in time")
}

async function main() {
  console.log("Building project...")
  execSync("npm run build", { cwd: root, stdio: "inherit" })

  console.log("Starting preview server...")
  const server = spawn("npx.cmd", ["vite", "preview", "--port", "4173", "--strictPort"], {
    cwd: root,
    stdio: "pipe",
    shell: true,
  })

  server.stderr.on("data", (d) => process.stderr.write(d))

  try {
    await waitForServer(BASE_URL)
    console.log("Server is ready.")

    fs.mkdirSync(OUTPUT_DIR, { recursive: true })

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    })

    const total = routes.length
    for (let i = 0; i < total; i++) {
      const route = routes[i]
      const filename = makeFilename(route)
      const outputPath = path.join(OUTPUT_DIR, filename)

      console.log(`[${i + 1}/${total}] ${route} -> ${filename}`)

      const page = await browser.newPage()
      await page.setViewport({ width: 1280, height: 900 })

      try {
        await page.goto(`${BASE_URL}${route}`, {
          waitUntil: "networkidle0",
          timeout: 30000,
        })

        await sleep(1500)

        await page.pdf({
          path: outputPath,
          format: "A4",
          printBackground: true,
          margin: { top: "15mm", right: "10mm", bottom: "15mm", left: "10mm" },
        })
      } catch (err) {
        console.error(`  ERROR: ${err.message}`)
      }

      await page.close()
    }

    await browser.close()
    console.log(`\nDone! ${total} PDFs generated in: ${OUTPUT_DIR}`)
  } finally {
    server.kill()
  }
}

main().catch(console.error)
```

## Cara Jalankan

1. Save script di `scripts/generate-pdfs.mjs`
2. Pastikan puppeteer sudah terinstall:
   ```bash
   cd /mnt/d/Project\ Freelance/FKG_Unhas && /mnt/c/Program\ Files/nodejs/npm install puppeteer
   ```
3. Jalankan script:
   ```bash
   /mnt/c/Program\ Files/nodejs/node.exe scripts/generate-pdfs.mjs
   ```
4. Output: folder `pdf-output/` berisi ~97 file PDF dengan format nama `kategori_nama-file.pdf`

## Detail Teknis
- **Headless browser:** Puppeteer + Chromium bawaan puppeteer
- **Wait strategy:** `networkidle0` + 1.5s delay untuk animasi motion
- **Format:** A4, print background enabled, margin 15mm top/bottom, 10mm left/right
- **Navigasi & Footer:** ikut tercetak (sesuai preferensi)
- **Port:** 4173 (vite preview default)
