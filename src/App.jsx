import { Footer } from "./Component/Footer";
import { Navigasi } from "./Component/Navigasi";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import apiService from "./Services/api";
import { LoadingPage } from "./Component/LoadingPage";

// === LAZY LOADING PAGES ===
// Menggunakan fungsi wrapper untuk menangani Named Export tanpa perlu mengubah isi file page satu per satu
const lazyRetry = (importFn, componentName) =>
  lazy(() => importFn().then((module) => ({ default: module[componentName] })));

const Beranda = lazyRetry(() => import("./Pages/Beranda"), "Beranda");
const DaftarAcara = lazyRetry(
  () => import("./Pages/Acara/DaftarAcara"),
  "DaftarAcara",
);
const DaftarBerita = lazyRetry(
  () => import("./Pages/Berita/DaftarBerita"),
  "DaftarBerita",
);
const DetailBerita = lazyRetry(
  () => import("./Pages/Berita/DetailBerita"),
  "DetailBerita",
);
const NotFound = lazyRetry(() => import("./Pages/NotFound"), "NotFound");

// Profil
const Profil = lazyRetry(() => import("./Pages/Profil/Profil"), "Profil");
const SelayangPandang = lazyRetry(
  () => import("./Pages/Profil/SelayangPandang"),
  "SelayangPandang",
);
const Sejarah = lazyRetry(() => import("./Pages/Profil/Sejarah"), "Sejarah");
const ProfilFKG = lazyRetry(
  () => import("./Pages/Profil/ProfilFKG"),
  "ProfilFKG",
);
const VisiMisi = lazyRetry(() => import("./Pages/Profil/VisiMisi"), "VisiMisi");
const SambutanDekan = lazyRetry(
  () => import("./Pages/Profil/SambutanDekan"),
  "SambutanDekan",
);
const PimpinanFakultas = lazyRetry(
  () => import("./Pages/Profil/PimpinanFakultas"),
  "PimpinanFakultas",
);
const StrukturOrganisasi = lazyRetry(
  () => import("./Pages/Profil/StrukturOrganisasi"),
  "StrukturOrganisasi",
);
const DataDosen = lazyRetry(
  () => import("./Pages/Profil/DataDosen"),
  "DataDosen",
);
const TenagaPendidik = lazyRetry(
  () => import("./Pages/Profil/TenagaPendidik"),
  "TenagaPendidik",
);
const SaranaPrasarana = lazyRetry(
  () => import("./Pages/Profil/SaranaPrasarana"),
  "SaranaPrasarana",
);
const ZonaIntegritasProfil = lazyRetry(
  () => import("./Pages/Profil/ZonaIntegritas"),
  "ZonaIntegritasProfil",
);
const DownloadCenter = lazyRetry(
  () => import("./Pages/Profil/DownloadCenter"),
  "DownloadCenter",
);
const Kontak = lazyRetry(() => import("./Pages/Profil/Kontak"), "Kontak");
const Perjanjian = lazyRetry(
  () => import("./Pages/Profil/Perjanjian"),
  "Perjanjian",
);
const Galeri = lazyRetry(() => import("./Pages/Profil/Galeri"), "Galeri");

// Departemen & Lainnya
const Departemen = lazyRetry(
  () => import("./Pages/Departemen/Departemen"),
  "Departemen",
);
const ProgramStudi = lazyRetry(
  () => import("./Pages/ProgramStudi/ProgramStudi"),
  "ProgramStudi",
);
const GPM = lazyRetry(() => import("./Pages/GPM/GPM"), "GPM");
const Unduhan = lazyRetry(() => import("./Pages/Unduhan/Unduhan"), "Unduhan");
const ZonaIntegritas = lazyRetry(
  () => import("./Pages/ZonaIntegritas/ZonaIntegritas"),
  "ZonaIntegritas",
);
const PPID = lazyRetry(() => import("./Pages/PPID/PPID"), "PPID");
const Akademik = lazyRetry(
  () => import("./Pages/Akademik/Akademik"),
  "Akademik",
);

// Komite Etik
const KomiteEtik = lazyRetry(
  () => import("./Pages/KomiteEtik/KomiteEtik"),
  "KomiteEtik",
);
const Pendahuluan = lazyRetry(
  () => import("./Pages/KomiteEtik/Pendahuluan"),
  "Pendahuluan",
);
const AnggotaKE = lazyRetry(
  () => import("./Pages/KomiteEtik/AnggotaKomiteEtik"),
  "AnggotaKE",
);
const StrukturOrganisasiKomiteEtik = lazyRetry(
  () => import("./Pages/KomiteEtik/StrukturOrganisasi"),
  "StrukturOrganisasiKomiteEtik",
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [showButton, setShowButton] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    apiService
      .getDepartemen()
      .then((response) => {
        const result = response.data?.departemenList || response;
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <LoadingPage />;
  if (error)
    return (
      <p className="text-center py-10 text-red-600">
        Gagal memuat data: {error}
      </p>
    );

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="overflow-visible h-auto">
        <Navigasi data={data} />

        {/* Suspense digunakan agar saat user pindah halaman, LoadingPage muncul selama file diunduh */}
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/acara/daftar" element={<DaftarAcara />} />
            <Route path="/blog/daftar" element={<DaftarBerita />} />
            <Route path="/blog/detail/:slug" element={<DetailBerita />} />
            <Route path="/profil" element={<Profil />} />
            <Route
              path="/profil/selayang-pandang"
              element={<SelayangPandang />}
            />
            <Route path="/profil/sejarah" element={<Sejarah />} />
            <Route path="/profil/profil-fkg" element={<ProfilFKG />} />
            <Route path="/profil/visi-misi" element={<VisiMisi />} />
            <Route path="/profil/sambutan-dekan" element={<SambutanDekan />} />
            <Route
              path="/profil/pimpinan-fakultas"
              element={<PimpinanFakultas />}
            />
            <Route
              path="/profil/struktur-organisasi"
              element={<StrukturOrganisasi />}
            />
            <Route path="/profil/data-dosen" element={<DataDosen />} />
            <Route
              path="/profil/tenaga-pendidik"
              element={<TenagaPendidik />}
            />
            <Route
              path="/profil/sarana-prasarana"
              element={<SaranaPrasarana />}
            />
            <Route
              path="/profil/zona-integritas"
              element={<ZonaIntegritasProfil />}
            />
            <Route
              path="/profil/download-center"
              element={<DownloadCenter />}
            />
            <Route path="/profil/kontak" element={<Kontak />} />
            <Route path="/profil/perjanjian" element={<Perjanjian />} />
            <Route path="/profil/galeri" element={<Galeri />} />
            <Route path="/departemen/*" element={<Departemen />} />
            <Route path="/program-studi/*" element={<ProgramStudi />} />
            <Route path="/gpm/*" element={<GPM />} />
            <Route path="/unduhan/*" element={<Unduhan />} />
            <Route path="/zona-integritas/*" element={<ZonaIntegritas />} />
            <Route path="/ppid/*" element={<PPID />} />
            <Route path="/akademik/*" element={<Akademik />} />
            <Route path="/komite-etik/*" element={<KomiteEtik />} />
            <Route path="/komite-etik/pendahuluan" element={<Pendahuluan />} />
            <Route
              path="/komite-etik/anggota-komite-etik"
              element={<AnggotaKE />}
            />
            <Route
              path="/komite-etik/struktur-organisasi-alur-pengajuan"
              element={<StrukturOrganisasiKomiteEtik />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <div
          className={`${
            showButton
              ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
              : "opacity-0 scale-95 pointer-events-none -translate-y-2"
          } w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#b00000] fixed right-[20px] bottom-[40px] sm:bottom-[20px] z-50 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:w-[60px] hover:h-[60px] transition-all`}
          onClick={scrollToTop}
        >
          <span className="text-white text-[28px]">↑</span>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
