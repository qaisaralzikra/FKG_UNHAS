import { Footer } from "./Component/Footer";
import { Navigasi } from "./Component/Navigasi";
import { Beranda } from "./Pages/Beranda";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { Profil } from "./Pages/Profil/Profil";
import { SelayangPandang } from "./Pages/Profil/SelayangPandang";
import { Sejarah } from "./Pages/Profil/Sejarah";
import { ProfilFKG } from "./Pages/Profil/ProfilFKG";
import { VisiMisi } from "./Pages/Profil/VisiMisi";
import { SambutanDekan } from "./Pages/Profil/SambutanDekan";
import { PimpinanFakultas } from "./Pages/Profil/PimpinanFakultas";
import { StrukturOrganisasi } from "./Pages/Profil/StrukturOrganisasi";
import { DataDosen } from "./Pages/Profil/DataDosen";
import { TenagaPendidik } from "./Pages/Profil/TenagaPendidik";
import { SaranaPrasarana } from "./Pages/Profil/SaranaPrasarana";
import { ZonaIntegritasProfil } from "./Pages/Profil/ZonaIntegritas";
import { DownloadCenter } from "./Pages/Profil/DownloadCenter";
import { Kontak } from "./Pages/Profil/Kontak";
import { Perjanjian } from "./Pages/Profil/Perjanjian";
import { Galeri } from "./Pages/Profil/Galeri";

import { Departemen } from "./Pages/Departemen/Departemen";

import { ProgramStudi } from "./Pages/ProgramStudi/ProgramStudi";

import { GPM } from "./Pages/GPM/GPM";

import { Unduhan } from "./Pages/Unduhan/Unduhan";

import { ZonaIntegritas } from "./Pages/ZonaIntegritas/ZonaIntegritas";

import { PPID } from "./Pages/PPID/PPID";

import { Akademik } from "./Pages/Akademik/Akademik";

import { KomiteEtik } from "./Pages/KomiteEtik/KomiteEtik";
import { NotFound } from "./Pages/NotFound";
import { Pendahuluan } from "./Pages/KomiteEtik/Pendahuluan";
import { AnggotaKE } from "./Pages/KomiteEtik/AnggotaKomiteEtik";
import { StrukturOrganisasiKomiteEtik } from "./Pages/KomiteEtik/StrukturOrganisasi";
import { DaftarBerita } from "./Pages/Berita/DaftarBerita";
import { DetailBerita } from "./Pages/Berita/DetailBerita";
import { DaftarAcara } from "./Pages/Acara/DaftarAcara";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const routes = (
    <Routes>
      <Route path="/" element={<Beranda />} />
      <Route path="/acara/daftar" element={<DaftarAcara />} />
      <Route path="/blog/daftar" element={<DaftarBerita />} />
      <Route path="/blog/detail/:id" element={<DetailBerita />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/profil/selayang-pandang" element={<SelayangPandang />} />
      <Route path="/profil/sejarah" element={<Sejarah />} />
      <Route path="/profil/profil-fkg" element={<ProfilFKG />} />
      <Route path="/profil/visi-misi" element={<VisiMisi />} />
      <Route path="/profil/sambutan-dekan" element={<SambutanDekan />} />
      <Route path="/profil/pimpinan-fakultas" element={<PimpinanFakultas />} />
      <Route
        path="/profil/struktur-organisasi"
        element={<StrukturOrganisasi />}
      />
      <Route path="/profil/data-dosen" element={<DataDosen />} />
      <Route path="/profil/tenaga-pendidik" element={<TenagaPendidik />} />
      <Route path="/profil/sarana-prasarana" element={<SaranaPrasarana />} />
      <Route
        path="/profil/zona-integritas"
        element={<ZonaIntegritasProfil />}
      />
      <Route path="/profil/download-center" element={<DownloadCenter />} />
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
      <Route path="/komite-etik/anggota-komite-etik" element={<AnggotaKE />} />
      <Route
        path="/komite-etik/struktur-organisasi-alur-pengajuan"
        element={<StrukturOrganisasiKomiteEtik />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="overflow-visible h-auto">
        <Navigasi />
        {routes}
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
