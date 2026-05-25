"use client";

import en from "../assets/en.png";
import id from "../assets/id.png";
import logo from "../../public/logo unhas.png";
import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Link } from "react-router-dom";

function Profil({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  // Menyimpan string nama }sub-menu yang aktif ('menu1', 'menu2', dst) atau null jika tidak ada

  const closeTimeoutRef = useRef(null);

  // ================= HANDLERS MENU UTAMA =================
  const handleMouseEnterMenu = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeaveMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative flex items-center cursor-pointer text-[16px]"
      onMouseEnter={handleMouseEnterMenu}
      onMouseLeave={handleMouseLeaveMenu}
    >
      {/* TOMBOL PEMICU UTAMA */}
      <div
        className={`flex items-center ${isScrolled ? "hover:underline" : "hover:text-[#b00000]"} duration-[0.4s] ease-in-out py-2`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[16px]">Profil</span>
        <i className="ri-arrow-down-s-line text-[20px]"></i>
      </div>

      {/* MENU UTAMA DROPDOWN */}
      <ul
        id="menu_profil"
        className={`menu bg-white text-black rounded-box z-1 w-[240px] absolute top-full left-0 mt-2 shadow-md text-[16px]
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
              : "opacity-0 scale-95 pointer-events-none -translate-y-2"
          }
        `}
      >
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
          <Link to="/profil/sambutan-dekan">Sambutan Dekan</Link>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
          <Link to="/profil/selayang-pandang">Selayang Pandang</Link>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
          <Link to="/profil/sejarah">Sejarah</Link>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
          <Link to="/profil/profil-fkg">Profil</Link>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
          <Link to="/profil/visi-misi">Visi & Misi</Link>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
          <Link to="/profil/pimpinan-fakultas">Pimpinan Fakultas</Link>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
          <Link to="/profil/data-dosen">Data Dosen</Link>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
          <Link to="/profil/tenaga-pendidik">Tenaga Pendidik</Link>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
          <Link to="/profil/struktur-organisasi">Struktur Organisasi</Link>
        </li>
      </ul>
    </div>
  );
}
function GPM({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  // Menyimpan string nama }sub-menu yang aktif ('menu1', 'menu2', dst) atau null jika tidak ada
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const closeTimeoutRef = useRef(null);
  const subMenuTimeoutRef = useRef(null);

  // ================= HANDLERS MENU UTAMA =================
  const handleMouseEnterMenu = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeaveMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setActiveSubMenu(null); // Solusi: Langsung menutup semua sub-menu sekaligus saat menu utama tutup
    }, 200);
  };

  // ================= HANDLERS SUB-MENU (REUSABLE) =================
  const handleMouseEnterSub = (menuKey) => {
    if (subMenuTimeoutRef.current) clearTimeout(subMenuTimeoutRef.current);
    setActiveSubMenu(menuKey);
  };

  const handleMouseLeaveSub = () => {
    subMenuTimeoutRef.current = setTimeout(() => {
      setActiveSubMenu(null);
    }, 200);
  };

  return (
    <div
      className="relative flex items-center cursor-pointer text-[16px]"
      onMouseEnter={handleMouseEnterMenu}
      onMouseLeave={handleMouseLeaveMenu}
    >
      {/* TOMBOL PEMICU UTAMA */}
      <div
        className={`flex items-center ${isScrolled ? "hover:underline" : "hover:text-[#b00000]"} duration-[0.4s] ease-in-out py-2`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[16px]">GPM</span>
        <i className="ri-arrow-down-s-line text-[20px]"></i>
      </div>

      {/* MENU UTAMA DROPDOWN */}
      <ul
        id="menu_profil"
        className={`menu bg-white text-black rounded-box z-1 w-[240px] absolute top-full left-0 mt-2 shadow-md text-[16px]
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
              : "opacity-0 scale-95 pointer-events-none -translate-y-2"
          }
        `}
      >
        {/* SUB-MENU 1 */}
        <li
          className="relative rounded-[10px]"
          onMouseEnter={() => handleMouseEnterSub("menu1")}
          onMouseLeave={handleMouseLeaveSub}
        >
          <div
            className="flex items-center justify-between w-full hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]"
            onClick={() =>
              setActiveSubMenu(activeSubMenu === "menu1" ? null : "menu1")
            }
          >
            <span>Sistem Penjaminan Mutu Internal</span>
            <i className="ri-arrow-right-s-line text-[20px]"></i>
          </div>
          <ul
            className={`w-[220px] menu bg-white text-black absolute shadow-md text-[16px] rounded-box top-0 left-[230px] ml-1 transition-all duration-300 ease-in-out
            ${activeSubMenu === "menu1" ? "opacity-100 scale-100 pointer-events-auto translate-x-0" : "opacity-0 scale-95 pointer-events-none -translate-x-2"}
          `}
          >
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/audit-mutu-internal">Audit Mutu Internal</Link>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/tinjauan-manajemen-fakultas">
                Tinjauan Manajemen Fakultas
              </Link>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/evaluasi-proses-belajar-mengajar">
                Evaluasi Proses Belajar Mengajar
              </Link>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/laporan-permintaan-tindakan-koreksi">
                Laporan Permintaan Tindakan Koreksi Hasil Rapat Tinjauan
                Manajemen
              </Link>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/bukti-pelaksanaan-ami">Bukti Pelaksanaan AMI</Link>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/laporan-benchmarking">Laporan Benchmarking</Link>
            </li>
          </ul>
        </li>

        {/* SUB-MENU 2 */}
        <li
          className="relative rounded-[10px]"
          onMouseEnter={() => handleMouseEnterSub("menu2")}
          onMouseLeave={handleMouseLeaveSub}
        >
          <div
            className="flex items-center justify-between w-full hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]"
            onClick={() =>
              setActiveSubMenu(activeSubMenu === "menu2" ? null : "menu2")
            }
          >
            <span>Sistem Penjaminan Mutu Eksternal</span>
            <i className="ri-arrow-right-s-line text-[20px]"></i>
          </div>
          <ul
            className={`w-[220px] menu bg-white text-black absolute shadow-md text-[16px] rounded-box top-0 left-[230px] ml-1 transition-all duration-300 ease-in-out
            ${activeSubMenu === "menu2" ? "opacity-100 scale-100 pointer-events-auto translate-x-0" : "opacity-0 scale-95 pointer-events-none -translate-x-2"}
          `}
          >
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/akreditasi-nasional">Akreditasi Nasional</Link>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/akreditasi-internasional">
                Akreditasi Internasional
              </Link>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/sertifikasi-iso">Sertifikasi ISO</Link>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/sertifikasi-laboratorium">
                Sertifikasi Laboratorium
              </Link>
            </li>
          </ul>
        </li>

        {/* SUB-MENU 3 */}
        <li
          className="relative rounded-[10px]"
          onMouseEnter={() => handleMouseEnterSub("menu3")}
          onMouseLeave={handleMouseLeaveSub}
        >
          <div
            className="flex items-center justify-between w-full hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]"
            onClick={() =>
              setActiveSubMenu(activeSubMenu === "menu3" ? null : "menu3")
            }
          >
            <span>Hasil Survey</span>
            <i className="ri-arrow-right-s-line text-[20px]"></i>
          </div>
          <ul
            className={`w-[220px] menu bg-white text-black absolute shadow-md text-[16px] rounded-box top-0 left-[230px] ml-1 transition-all duration-300 ease-in-out
            ${activeSubMenu === "menu3" ? "opacity-100 scale-100 pointer-events-auto translate-x-0" : "opacity-0 scale-95 pointer-events-none -translate-x-2"}
          `}
          >
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/hasil-survey-2025">Hasil Survey 2025</Link>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/hasil-survey-2024">Hasil Survey 2024</Link>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/hasil-survey-2023">Hasil Survey 2023</Link>
            </li>
          </ul>
        </li>

        {/* SUB-MENU 4 */}
        <li
          className="relative rounded-[10px]"
          onMouseEnter={() => handleMouseEnterSub("menu4")}
          onMouseLeave={handleMouseLeaveSub}
        >
          <div
            className="flex items-center justify-between w-full hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]"
            onClick={() =>
              setActiveSubMenu(activeSubMenu === "menu4" ? null : "menu4")
            }
          >
            <span>Dokumen Mutu</span>
            <i className="ri-arrow-right-s-line text-[20px]"></i>
          </div>
          <ul
            className={`w-[220px] menu bg-white text-black absolute shadow-md text-[16px] rounded-box top-0 left-[230px] ml-1 transition-all duration-300 ease-in-out
            ${activeSubMenu === "menu4" ? "opacity-100 scale-100 pointer-events-auto translate-x-0" : "opacity-0 scale-95 pointer-events-none -translate-x-2"}
          `}
          >
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/dokumen-spmi-standar">Dokumen SPMI Standar</Link>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/dokumen-spmi-kebijakan">
                Dokumen SPMI Kebijakan
              </Link>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/dokumen-spmi-manual">Dokumen SPMI Manual</Link>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/dokumen-spmi-formulir">Dokumen SPMI Formulir</Link>
            </li>
          </ul>
        </li>

        {/* MENU UTAMA LAIN TANPA SUB-MENU */}
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/gpm/laporan-kinerja">Laporan Kinerja</Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/gpm/renstra-unhas-dan-fkg">Renstra Unhas Dan FKG</Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/gpm/standar-pelayanan-publik">
              Standar Pelayanan Publik
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/gpm/kebijakan-spmi">Kebijakan SPMI</Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/gpm/dasar-hukum">Dasar Hukum</Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/gpm/dokumen">Dokumen</Link>
          </div>
        </li>

        {/* SUB-MENU 5 */}
        <li
          className="relative rounded-[10px]"
          onMouseEnter={() => handleMouseEnterSub("menu5")}
          onMouseLeave={handleMouseLeaveSub}
        >
          <div
            className="flex items-center justify-between w-full hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]"
            onClick={() =>
              setActiveSubMenu(activeSubMenu === "menu5" ? null : "menu5")
            }
          >
            <span>Peningkatan Reputasi</span>
            <i className="ri-arrow-right-s-line text-[20px]"></i>
          </div>
          <ul
            className={`w-[220px] menu bg-white text-black absolute shadow-md text-[16px] rounded-box top-0 left-[230px] ml-1 transition-all duration-300 ease-in-out
            ${activeSubMenu === "menu5" ? "opacity-100 scale-100 pointer-events-auto translate-x-0" : "opacity-0 scale-95 pointer-events-none -translate-x-2"}
          `}
          >
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/gpm/qs-wur-the-wur-2025">QS.WUR & The WUR 2025</Link>
            </li>
          </ul>
        </li>

        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/gpm/proses-bisnis">Proses Bisnis</Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/gpm/kegiatan-gpm">Kegiatan GPM</Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/gpm/instrumen">Instrumen</Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/gpm/sistem-audit">Sistem Audit</Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/gpm/akreditasi">Akreditasi</Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/gpm/gallery">Gallery</Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/gpm/bench-marking">Bench Marking</Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

function Akademik({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  // Menyimpan string nama sub-menu yang aktif ('menu1', 'menu2', dst) atau null jika tidak ada
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const closeTimeoutRef = useRef(null);
  const subMenuTimeoutRef = useRef(null);

  // ================= HANDLERS MENU UTAMA =================
  const handleMouseEnterMenu = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeaveMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setActiveSubMenu(null); // Solusi: Langsung menutup semua sub-menu sekaligus saat menu utama tutup
    }, 200);
  };

  // ================= HANDLERS SUB-MENU (REUSABLE) =================
  const handleMouseEnterSub = (menuKey) => {
    if (subMenuTimeoutRef.current) clearTimeout(subMenuTimeoutRef.current);
    setActiveSubMenu(menuKey);
  };

  const handleMouseLeaveSub = () => {
    subMenuTimeoutRef.current = setTimeout(() => {
      setActiveSubMenu(null);
    }, 200);
  };

  return (
    <div
      className="relative flex items-center cursor-pointer text-[16px]"
      onMouseEnter={handleMouseEnterMenu}
      onMouseLeave={handleMouseLeaveMenu}
    >
      {/* TOMBOL PEMICU UTAMA */}
      <div
        className={`flex items-center ${isScrolled ? "hover:underline" : "hover:text-[#b00000]"} duration-[0.4s] ease-in-out py-2`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[16px]">Akademik</span>
        <i className="ri-arrow-down-s-line text-[20px]"></i>
      </div>

      {/* MENU UTAMA DROPDOWN */}
      <ul
        id="menu_profil"
        className={`menu bg-white text-black rounded-box z-1 w-[240px] absolute top-full left-0 mt-2 shadow-md text-[16px]
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
              : "opacity-0 scale-95 pointer-events-none -translate-y-2"
          }
        `}
      >
        {/* SUB-MENU 1 */}
        <li
          className="relative rounded-[10px]"
          onMouseEnter={() => handleMouseEnterSub("menu1")}
          onMouseLeave={handleMouseLeaveSub}
        >
          <div
            className="flex items-center justify-between w-full hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]"
            onClick={() =>
              setActiveSubMenu(activeSubMenu === "menu1" ? null : "menu1")
            }
          >
            <span>Informasi Akademik</span>
            <i className="ri-arrow-right-s-line text-[20px]"></i>
          </div>
          <ul
            className={`w-[220px] menu bg-white text-black absolute shadow-md text-[16px] rounded-box top-0 right-[235px] ml-1 transition-all duration-300 ease-in-out
            ${activeSubMenu === "menu1" ? "opacity-100 scale-100 pointer-events-auto translate-x-0" : "opacity-0 scale-95 pointer-events-none -translate-x-2"}
          `}
          >
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/akademik/akreditasi">Akreditasi</Link>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/akademik/sk-kontrak-kinerja">
                SK & Kontrak Kinerja
              </Link>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/akademik/pengabdian">Pengabdian</Link>
            </li>
          </ul>
        </li>

        {/* SUB-MENU 2 */}
        <li
          className="relative rounded-[10px]"
          onMouseEnter={() => handleMouseEnterSub("menu2")}
          onMouseLeave={handleMouseLeaveSub}
        >
          <div
            className="flex items-center justify-between w-full hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]"
            onClick={() =>
              setActiveSubMenu(activeSubMenu === "menu2" ? null : "menu2")
            }
          >
            <span>Kemahasiswaan</span>
            <i className="ri-arrow-right-s-line text-[20px]"></i>
          </div>
          <ul
            className={`w-[220px] menu bg-white text-black absolute shadow-md text-[16px] rounded-box top-0 right-[235px] ml-1 transition-all duration-300 ease-in-out
            ${activeSubMenu === "menu2" ? "opacity-100 scale-100 pointer-events-auto translate-x-0" : "opacity-0 scale-95 pointer-events-none -translate-x-2"}
          `}
          >
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/akademik/kemahasiswaan">Kemahasiswaan</Link>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <Link to="/akademik/ormawa">Ormawa</Link>
            </li>
          </ul>
        </li>

        {/* MENU UTAMA LAIN TANPA SUB-MENU */}
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/akademik/buku-pedoman">Buku Pedoman</Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

function Unduhan({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnterMenu = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeaveMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative flex items-center cursor-pointer text-[16px]"
      onMouseEnter={handleMouseEnterMenu}
      onMouseLeave={handleMouseLeaveMenu}
    >
      {/* TOMBOL PEMICU UTAMA */}
      <div
        className={`flex items-center ${isScrolled ? "hover:underline" : "hover:text-[#b00000]"} duration-[0.4s] ease-in-out py-2`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[16px]">Unduhan</span>
        <i className="ri-arrow-down-s-line text-[20px]"></i>
      </div>

      {/* MENU UTAMA DROPDOWN */}
      <ul
        id="menu_profil"
        className={`menu bg-white text-black rounded-box z-1 w-[240px] absolute top-full left-0 mt-2 shadow-md text-[16px]
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
              : "opacity-0 scale-95 pointer-events-none -translate-y-2"
          }
        `}
      >
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/unduhan/download">Download</Link>
          </div>
        </li>

        {/* MENU UTAMA LAIN TANPA SUB-MENU */}
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/unduhan/peraturan">Peraturan</Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/unduhan/perjanjian-kinerja-rektor-dekan">
              Perjanjian Kinerja Rektor-Dekan
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
function ZonaIntegritas({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnterMenu = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeaveMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative flex items-center cursor-pointer text-[16px]"
      onMouseEnter={handleMouseEnterMenu}
      onMouseLeave={handleMouseLeaveMenu}
    >
      {/* TOMBOL PEMICU UTAMA */}
      <div
        className={`flex items-center ${isScrolled ? "hover:underline" : "hover:text-[#b00000]"} duration-[0.4s] ease-in-out py-2`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[16px]">Zona Integritas</span>
        <i className="ri-arrow-down-s-line text-[20px]"></i>
      </div>

      {/* MENU UTAMA DROPDOWN */}
      <ul
        id="menu_profil"
        className={`menu bg-white text-black rounded-box z-1 w-[240px] absolute top-full left-0 mt-2 shadow-md text-[16px]
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
              : "opacity-0 scale-95 pointer-events-none -translate-y-2"
          }
        `}
      >
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="https://drive.google.com/drive/folders/10aXnTs6uWai-dHupZPPz_tZKGYd1F169?usp=sharing">
              Zona Integritas
            </Link>
          </div>
        </li>

        {/* MENU UTAMA LAIN TANPA SUB-MENU */}
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/zona-integritas/unit-layanan-terpadu">
              Unit Layanan Terpadu
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/zona-integritas/laporan-kinerja-area-zi">
              Laporan Kinerja Area ZI
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/zona-integritas/laporan-survey-pelayanan-publik">
              Laporan Survey Pelayanan Publik
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/zona-integritas/laporan-pengaduan">
              Laporan Pengaduan
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

function Departement({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnterMenu = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeaveMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative flex items-center cursor-pointer text-[16px]"
      onMouseEnter={handleMouseEnterMenu}
      onMouseLeave={handleMouseLeaveMenu}
    >
      {/* TOMBOL PEMICU UTAMA */}
      <div
        className={`flex items-center ${isScrolled ? "hover:underline" : "hover:text-[#b00000]"} duration-[0.4s] ease-in-out py-2`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[16px]">Departemen</span>
        <i className="ri-arrow-down-s-line text-[20px]"></i>
      </div>

      {/* MENU UTAMA DROPDOWN */}
      <ul
        id="menu_profil"
        className={`menu bg-white text-black rounded-box z-1 w-[240px] absolute top-full left-0 mt-2 shadow-md text-[16px]
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
              : "opacity-0 scale-95 pointer-events-none -translate-y-2"
          }
        `}
      >
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/departemen/biologi-oral">Departemen Biologi Oral</Link>
          </div>
        </li>

        {/* MENU UTAMA LAIN TANPA SUB-MENU */}
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/departemen/ilmu-bahan-dan-teknologi">
              Departemen Ilmu Bahan dan Teknologi
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/departemen/ilmu-kedokteran-gigi-anak">
              Departemen Ilmu Kedokteran Gigi Anak
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/departemen/ilmu-kedokteran-gigi-masyarakat-pencegahan">
              Departemen Ilmu Kedokteran Gigi Masyarakat - Pencegahan
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/departemen/ilmu-penyakit-mulut">
              Departemen Ilmu Penyakit Mulut
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/departemen/konservasi-gigi">
              Departemen Konservasi Gigi
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/departemen/oral-and-maxillofacial-radiology">
              Departemen Oral and Maxillofacial Radiology
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/departemen/ortodonti">Departemen Ortodonti</Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/departemen/periodonsia">Departemen Periodonsia</Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/departemen/prostodonsia">Departemen Prostodonsia</Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/departemen/oral-and-maxillofacial-surgery">
              Departement Oral and Maxillofacial Surgery
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

function KomiteEtik({ isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnterMenu = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeaveMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className="relative flex items-center cursor-pointer text-[16px]"
      onMouseEnter={handleMouseEnterMenu}
      onMouseLeave={handleMouseLeaveMenu}
    >
      {/* TOMBOL PEMICU UTAMA */}
      <div
        className={`flex items-center ${isScrolled ? "hover:underline" : "hover:text-[#b00000]"} duration-[0.4s] ease-in-out py-2`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[16px]">Komite Etik</span>
        <i className="ri-arrow-down-s-line text-[20px]"></i>
      </div>

      {/* MENU UTAMA DROPDOWN */}
      <ul
        id="menu_profil"
        className={`overflow-y-auto menu bg-white text-black rounded-box z-1 w-[240px] absolute top-full right-0 mt-2 shadow-md text-[16px]
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
              : "opacity-0 scale-95 pointer-events-none -translate-y-2"
          }
        `}
      >
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/komite-etik/pendahuluan">Pendahuluan</Link>
          </div>
        </li>

        {/* MENU UTAMA LAIN TANPA SUB-MENU */}
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/komite-etik/akreditasi-komite-etik">
              Akreditasi Komite Etik
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/komite-etik/struktur-organisasi-alur-pengajuan">
              Struktur Organisasi & Alur Pengajuan
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/komite-etik/anggota-komite-etik">
              Anggota Komite Etik
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/komite-etik/konsultan-independen-komite-etik">
              Konsultan Independen Komite Etik
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/komite-etik/sop-penelitian-subjek-manusia">
              SOP Penelitian Subjek Manusia
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/komite-etik/sop-penelitian-hewan">
              SOP Penelitian Hewan
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/komite-etik/formulir-panduan-pengajuan-untuk-pi">
              Formulir & Panduan Pengajuan Untuk PI
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/komite-etik/jadwal-rapat">Jadwal Rapat</Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/komite-etik/protokol-yang-disetujui">
              Protokol Yang Disetujui
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/komite-etik/referensi-komite-etik">
              Referensi Komite Etik
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/komite-etik/biaya-kontribusi-ethical-clearance">
              Biaya Kontribusi Ethical Clearance
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/komite-etik/pelatihan-komite-etik">
              Pelatihan Komite Etik
            </Link>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <Link to="/komite-etik/kontak-komite-etik">Kontak Komite Etik</Link>
          </div>
        </li>
      </ul>
    </div>
  );
}

function MobileAccordion({ label, isOpen, onToggle, children, nested }) {
  return (
    <div className={`border-b ${nested ? "border-gray-100 ms-3" : ""}`}>
      <button
        className="flex items-center justify-between w-full py-3 text-left text-[16px] font-medium"
        onClick={onToggle}
      >
        <span>{label}</span>
        <i
          className={`ri-arrow-down-s-line text-[20px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        ></i>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? " opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="pb-2">{children}</div>
      </div>
    </div>
  );
}

function MobileDrawer({ isOpen, onClose }) {
  const [expanded, setExpanded] = useState({});

  const toggle = (key) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white shadow-xl z-50 transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10">
          <span className="font-semibold text-lg text-black">Menu</span>
          <button onClick={onClose} className="text-2xl p-1 text-black">
            <i className="ri-close-line"></i>
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100%-60px)] p-4 text-black">
          <Link to="/" className="block py-3 border-b text-[16px] font-medium">
            Beranda
          </Link>

          <MobileAccordion
            label="Profil"
            isOpen={expanded.profil}
            onToggle={() => toggle("profil")}
          >
            <Link
              to="/profil/sambutan-dekan"
              className="block py-2 text-sm ps-3"
            >
              Sambutan Dekan
            </Link>
            <Link
              to="/profil/selayang-pandang"
              className="block py-2 text-sm ps-3"
            >
              Selayang Pandang
            </Link>
            <Link to="/profil/sejarah" className="block py-2 text-sm ps-3">
              Sejarah
            </Link>
            <Link to="/profil/profil-fkg" className="block py-2 text-sm ps-3">
              Profil
            </Link>
            <Link to="/profil/visi-misi" className="block py-2 text-sm ps-3">
              Visi & Misi
            </Link>
            <Link
              to="/profil/pimpinan-fakultas"
              className="block py-2 text-sm ps-3"
            >
              Pimpinan Fakultas
            </Link>
            <Link to="/profil/data-dosen" className="block py-2 text-sm ps-3">
              Data Dosen
            </Link>
            <Link
              to="/profil/tenaga-pendidik"
              className="block py-2 text-sm ps-3"
            >
              Tenaga Pendidik
            </Link>
            <Link
              to="/profil/struktur-organisasi"
              className="block py-2 text-sm ps-3"
            >
              Struktur Organisasi
            </Link>
          </MobileAccordion>

          <MobileAccordion
            label="Departemen"
            isOpen={expanded.departemen}
            onToggle={() => toggle("departemen")}
          >
            <Link
              to="/departemen/biologi-oral"
              className="block py-2 text-sm ps-3"
            >
              Departemen Biologi Oral
            </Link>
            <Link
              to="/departemen/ilmu-bahan-dan-teknologi"
              className="block py-2 text-sm ps-3"
            >
              Departemen Ilmu Bahan dan Teknologi
            </Link>
            <Link
              to="/departemen/ilmu-kedokteran-gigi-anak"
              className="block py-2 text-sm ps-3"
            >
              Departemen Ilmu Kedokteran Gigi Anak
            </Link>
            <Link
              to="/departemen/ilmu-kedokteran-gigi-masyarakat-pencegahan"
              className="block py-2 text-sm ps-3"
            >
              Departemen Ilmu Kedokteran Gigi Masyarakat - Pencegahan
            </Link>
            <Link
              to="/departemen/ilmu-penyakit-mulut"
              className="block py-2 text-sm ps-3"
            >
              Departemen Ilmu Penyakit Mulut
            </Link>
            <Link
              to="/departemen/konservasi-gigi"
              className="block py-2 text-sm ps-3"
            >
              Departemen Konservasi Gigi
            </Link>
            <Link
              to="/departemen/oral-and-maxillofacial-radiology"
              className="block py-2 text-sm ps-3"
            >
              Departemen Oral and Maxillofacial Radiology
            </Link>
            <Link
              to="/departemen/ortodonti"
              className="block py-2 text-sm ps-3"
            >
              Departemen Ortodonti
            </Link>
            <Link
              to="/departemen/periodonsia"
              className="block py-2 text-sm ps-3"
            >
              Departemen Periodonsia
            </Link>
            <Link
              to="/departemen/prostodonsia"
              className="block py-2 text-sm ps-3"
            >
              Departemen Prostodonsia
            </Link>
            <Link
              to="/departemen/oral-and-maxillofacial-surgery"
              className="block py-2 text-sm ps-3"
            >
              Departement Oral and Maxillofacial Surgery
            </Link>
          </MobileAccordion>

          <Link
            to="/program-studi"
            className="block py-3 border-b text-[16px] font-medium"
          >
            Program Studi
          </Link>

          <MobileAccordion
            label="GPM" // Anda bisa sesuaikan nama label utamanya
            isOpen={expanded.GPM}
            onToggle={() => toggle("GPM")}
          >
            {/* SUB-MENU 1 */}
            <MobileAccordion
              label="Sistem Penjaminan Mutu Internal"
              isOpen={expanded.spmi}
              onToggle={() => toggle("spmi")}
              nested
            >
              <Link
                to="/gpm/audit-mutu-internal"
                className="block py-2 text-sm ps-3"
              >
                Audit Mutu Internal
              </Link>
              <Link
                to="/gpm/tinjauan-manajemen-fakultas"
                className="block py-2 text-sm ps-3"
              >
                Tinjauan Manajemen Fakultas
              </Link>
              <Link
                to="/gpm/evaluasi-proses-belajar-mengajar"
                className="block py-2 text-sm ps-3"
              >
                Evaluasi Proses Belajar Mengajar
              </Link>
              <Link
                to="/gpm/laporan-permintaan-tindakan-koreksi"
                className="block py-2 text-sm ps-3"
              >
                Laporan Permintaan Tindakan Koreksi Hasil Rapat Tinjauan
                Manajemen
              </Link>
              <Link
                to="/gpm/bukti-pelaksanaan-ami"
                className="block py-2 text-sm ps-3"
              >
                Bukti Pelaksanaan AMI
              </Link>
              <Link
                to="/gpm/laporan-benchmarking"
                className="block py-2 text-sm ps-3"
              >
                Laporan Benchmarking
              </Link>
            </MobileAccordion>

            {/* SUB-MENU 2 */}
            <MobileAccordion
              label="Sistem Penjaminan Mutu Eksternal"
              isOpen={expanded.spme}
              onToggle={() => toggle("spme")}
              nested
            >
              <Link
                to="/gpm/akreditasi-nasional"
                className="block py-2 text-sm ps-3"
              >
                Akreditasi Nasional
              </Link>
              <Link
                to="/gpm/akreditasi-internasional"
                className="block py-2 text-sm ps-3"
              >
                Akreditasi Internasional
              </Link>
              <Link
                to="/gpm/sertifikasi-iso"
                className="block py-2 text-sm ps-3"
              >
                Sertifikasi ISO
              </Link>
              <Link
                to="/gpm/sertifikasi-laboratorium"
                className="block py-2 text-sm ps-3"
              >
                Sertifikasi Laboratorium
              </Link>
            </MobileAccordion>

            {/* SUB-MENU 3 */}
            <MobileAccordion
              label="Hasil Survey"
              isOpen={expanded.survey}
              onToggle={() => toggle("survey")}
              nested
            >
              <Link
                to="/gpm/hasil-survey-2025"
                className="block py-2 text-sm ps-3"
              >
                Hasil Survey 2025
              </Link>
              <Link
                to="/gpm/hasil-survey-2024"
                className="block py-2 text-sm ps-3"
              >
                Hasil Survey 2024
              </Link>
              <Link
                to="/gpm/hasil-survey-2023"
                className="block py-2 text-sm ps-3"
              >
                Hasil Survey 2023
              </Link>
            </MobileAccordion>

            {/* SUB-MENU 4 */}
            <MobileAccordion
              label="Dokumen Mutu"
              isOpen={expanded.dokumenMutu}
              onToggle={() => toggle("dokumenMutu")}
              nested
            >
              <Link
                to="/gpm/dokumen-spmi-standar"
                className="block py-2 text-sm ps-3"
              >
                Dokumen SPMI Standar
              </Link>
              <Link
                to="/gpm/dokumen-spmi-kebijakan"
                className="block py-2 text-sm ps-3"
              >
                Dokumen SPMI Kebijakan
              </Link>
              <Link
                to="/gpm/dokumen-spmi-manual"
                className="block py-2 text-sm ps-3"
              >
                Dokumen SPMI Manual
              </Link>
              <Link
                to="/gpm/dokumen-spmi-formulir"
                className="block py-2 text-sm ps-3"
              >
                Dokumen SPMI Formulir
              </Link>
            </MobileAccordion>

            {/* MENU UTAMA LAIN TANPA SUB-MENU */}
            <Link
              to="/gpm/laporan-kinerja"
              className="block py-3 text-[16px] border-b border-gray-100 ps-3"
            >
              Laporan Kinerja
            </Link>
            <Link
              to="/gpm/renstra-unhas-dan-fkg"
              className="block py-3 text-[16px] border-b border-gray-100 ps-3"
            >
              Renstra Unhas Dan FKG
            </Link>
            <Link
              to="/gpm/standar-pelayanan-publik"
              className="block py-3 text-[16px] border-b border-gray-100 ps-3"
            >
              Standar Pelayanan Publik
            </Link>
            <Link
              to="/gpm/kebijakan-spmi"
              className="block py-3 text-[16px] border-b border-gray-100 ps-3"
            >
              Kebijakan SPMI
            </Link>
            <Link
              to="/gpm/dasar-hukum"
              className="block py-3 text-[16px] border-b border-gray-100 ps-3"
            >
              Dasar Hukum
            </Link>
            <Link
              to="/gpm/dokumen"
              className="block py-3 text-[16px] border-b border-gray-100 ps-3"
            >
              Dokumen
            </Link>

            {/* SUB-MENU 5 */}
            <MobileAccordion
              label="Peningkatan Reputasi"
              isOpen={expanded.reputasi}
              onToggle={() => toggle("reputasi")}
              nested
            >
              <Link
                to="/gpm/qs-wur-the-wur-2025"
                className="block py-2 text-sm ps-3"
              >
                QS.WUR & The WUR 2025
              </Link>
            </MobileAccordion>

            {/* MENU UTAMA SISA TANPA SUB-MENU */}
            <Link
              to="/gpm/proses-bisnis"
              className="block py-3 text-[16px] border-b border-gray-100 ps-3"
            >
              Proses Bisnis
            </Link>
            <Link
              to="/gpm/kegiatan-gpm"
              className="block py-3 text-[16px] border-b border-gray-100 ps-3"
            >
              Kegiatan GPM
            </Link>
            <Link
              to="/gpm/instrumen"
              className="block py-3 text-[16px] border-b border-gray-100 ps-3"
            >
              Instrumen
            </Link>
            <Link
              to="/gpm/sistem-audit"
              className="block py-3 text-[16px] border-b border-gray-100 ps-3"
            >
              Sistem Audit
            </Link>
            <Link
              to="/gpm/akreditasi"
              className="block py-3 text-[16px] border-b border-gray-100 ps-3"
            >
              Akreditasi
            </Link>
            <Link
              to="/gpm/gallery"
              className="block py-3 text-[16px] border-b border-gray-100 ps-3"
            >
              Gallery
            </Link>
            <Link
              to="/gpm/bench-marking"
              className="block py-3 text-[16px] ps-3"
            >
              Bench Marking
            </Link>
          </MobileAccordion>
          <MobileAccordion
            label="Unduh" // Anda bisa sesuaikan nama label utamanya
            isOpen={expanded.Unduh}
            onToggle={() => toggle("Unduh")}
          >
            <Link to="/unduhan/download" className="block py-2 text-sm ps-3">
              Download
            </Link>
            <Link to="/unduhan/peraturan" className="block py-2 text-sm ps-3">
              Peraturan
            </Link>
            <Link
              to="/unduhan/perjanjian-kinerja-rektor-dekan"
              className="block py-2 text-sm ps-3"
            >
              Perjanjian Kinerja Rektor-Dekan
            </Link>
          </MobileAccordion>
          <MobileAccordion
            label="Zona Integritas" // Anda bisa sesuaikan nama label utamanya
            isOpen={expanded.zonaintegritas}
            onToggle={() => toggle("zonaintegritas")}
          >
            <Link to="/zona-integritas" className="block py-2 text-sm ps-3">
              Zona Integritas
            </Link>
            <Link
              to="/zona-integritas/unit-layanan-terpadu"
              className="block py-2 text-sm ps-3"
            >
              Unit Layanan Terpadu
            </Link>
            <Link
              to="/zona-integritas/laporan-kinerja-area-zi"
              className="block py-2 text-sm ps-3"
            >
              Laporan Kinerja Area ZI
            </Link>
            <Link
              to="/zona-integritas/laporan-survey-pelayanan-publik"
              className="block py-2 text-sm ps-3"
            >
              Laporan Survey Pelayanan Publik
            </Link>
            <Link
              to="/zona-integritas/laporan-pengaduan"
              className="block py-2 text-sm ps-3"
            >
              Laporan Pengaduan
            </Link>
          </MobileAccordion>

          <Link
            to="/ppid"
            className="block py-3 border-b text-[16px] font-medium"
          >
            PPID
          </Link>

          <MobileAccordion
            label="Akademik"
            isOpen={expanded.akademik}
            onToggle={() => toggle("akademik")}
          >
            <MobileAccordion
              label="Informasi Akademik"
              isOpen={expanded.infoAkademik}
              onToggle={() => toggle("infoAkademik")}
              nested
            >
              <Link
                to="/akademik/akreditasi"
                className="block py-2 text-sm ps-3"
              >
                Akreditasi
              </Link>
              <Link
                to="/akademik/sk-kontrak-kinerja"
                className="block py-2 text-sm ps-3"
              >
                SK & Kontrak Kinerja
              </Link>
              <Link
                to="/akademik/pengabdian"
                className="block py-2 text-sm ps-3"
              >
                Pengabdian
              </Link>
            </MobileAccordion>
            <MobileAccordion
              label="Kemahasiswaan"
              isOpen={expanded.kemahasiswaan}
              onToggle={() => toggle("kemahasiswaan")}
              nested
            >
              <Link
                to="/akademik/kemahasiswaan"
                className="block py-2 text-sm ps-3"
              >
                Kemahasiswaan
              </Link>
              <Link to="/akademik/ormawa" className="block py-2 text-sm ps-3">
                Ormawa
              </Link>
            </MobileAccordion>
            <Link
              to="/akademik/buku-pedoman"
              className="block py-3 text-[16px] border-b border-gray-100 ms-3"
            >
              Buku Pedoman
            </Link>
          </MobileAccordion>

          <MobileAccordion
            label="Komite Etik"
            isOpen={expanded.komiteEtik}
            onToggle={() => toggle("komiteEtik")}
          >
            <Link
              to="/komite-etik/pendahuluan"
              className="block py-2 text-sm ps-3"
            >
              Pendahuluan
            </Link>
            <Link
              to="/komite-etik/akreditasi-komite-etik"
              className="block py-2 text-sm ps-3"
            >
              Akreditasi Komite Etik
            </Link>
            <Link
              to="/komite-etik/struktur-organisasi-alur-pengajuan"
              className="block py-2 text-sm ps-3"
            >
              Struktur Organisasi & Alur Pengajuan
            </Link>
            <Link
              to="/komite-etik/anggota-komite-etik"
              className="block py-2 text-sm ps-3"
            >
              Anggota Komite Etik
            </Link>
            <Link
              to="/komite-etik/konsultan-independen-komite-etik"
              className="block py-2 text-sm ps-3"
            >
              Konsultan Independen Komite Etik
            </Link>
            <Link
              to="/komite-etik/sop-penelitian-subjek-manusia"
              className="block py-2 text-sm ps-3"
            >
              SOP Penelitian Subjek Manusia
            </Link>
            <Link
              to="/komite-etik/sop-penelitian-hewan"
              className="block py-2 text-sm ps-3"
            >
              SOP Penelitian Hewan
            </Link>
            <Link
              to="/komite-etik/formulir-panduan-pengajuan-untuk-pi"
              className="block py-2 text-sm ps-3"
            >
              Formulir & Panduan Pengajuan Untuk PI
            </Link>
            <Link
              to="/komite-etik/jadwal-rapat"
              className="block py-2 text-sm ps-3"
            >
              Jadwal Rapat
            </Link>
            <Link
              to="/komite-etik/protokol-yang-disetujui"
              className="block py-2 text-sm ps-3"
            >
              Protokol Yang Disetujui
            </Link>
            <Link
              to="/komite-etik/referensi-komite-etik"
              className="block py-2 text-sm ps-3"
            >
              Referensi Komite Etik
            </Link>
            <Link
              to="/komite-etik/biaya-kontribusi-ethical-clearance"
              className="block py-2 text-sm ps-3"
            >
              Biaya Kontribusi Ethical Clearance
            </Link>
            <Link
              to="/komite-etik/pelatihan-komite-etik"
              className="block py-2 text-sm ps-3"
            >
              Pelatihan Komite Etik
            </Link>
            <Link
              to="/komite-etik/kontak-komite-etik"
              className="block py-2 text-sm ps-3"
            >
              Kontak Komite Etik
            </Link>
          </MobileAccordion>
        </div>
      </div>
    </>
  );
}

function NavList({ isScrolled }) {
  return (
    <div className="hidden lg:flex lg:flex-wrap text-[16px] text-white items-center gap-x-[20px]">
      <Link
        to="/"
        className={`${isScrolled ? "hover:underline" : "hover:text-[#b00000]"}  duration-[0.4s] ease-in-out`}
      >
        Beranda
      </Link>
      <Profil isScrolled={isScrolled} />
      <Departement isScrolled={isScrolled} />
      <Link
        to="/program-studi"
        className={`${isScrolled ? "hover:underline" : "hover:text-[#b00000]"}  duration-[0.4s] ease-in-out`}
      >
        Program Studi
      </Link>
      <GPM isScrolled={isScrolled} />
      <Unduhan isScrolled={isScrolled} />
      <ZonaIntegritas isScrolled={isScrolled} />
      <Link
        to="/ppid"
        className={`${isScrolled ? "hover:underline" : "hover:text-[#b00000]"} duration-[0.4s] ease-in-out`}
      >
        PPID
      </Link>
      <Akademik isScrolled={isScrolled} />
      <KomiteEtik isScrolled={isScrolled} />
    </div>
  );
}

function GlassNav({ isScrolled, onToggleMobile }) {
  return (
    <div
      className={`w-full h-[72px] lg:h-[96px] px-4 sm:px-6 lg:px-[70px] shadow-lg transition-colors duration-500 flex items-center justify-between 2xl:gap-[50px] lg:gap-[100px] ${
        isScrolled ? "bg-[#b00000]" : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center gap-3 lg:gap-[34px] w-[300px]">
        <img
          src={logo}
          className="w-[40px] h-[48px] lg:w-[50px] lg:h-[60px]"
          alt=""
        />
        <div
          className={`text-white leading-tight lg:leading-[20px] whitespace-nowrap`}
        >
          <h2 className="font-medium text-xs lg:text-[16px]">
            Fakultas Kedokteran Gigi
          </h2>
          <h1 className="font-semibold text-sm lg:text-[20px]">
            Universitas Hasanuddin
          </h1>
        </div>
      </div>
      <NavList isScrolled={isScrolled} />
      <button
        onClick={onToggleMobile}
        className="lg:hidden text-white text-2xl p-2"
        aria-label="Toggle menu"
      >
        <i className="ri-menu-line"></i>
      </button>
    </div>
  );
}

export function Navigasi() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isPastDvh, setIsPastDvh] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    // 1. Logika Menyembunyikan Navigasi (Saat Scroll ke Bawah)
    if (current > previous && current > 50) {
      setHidden(true);
    }
    // 2. KUNCI UTAMA: Hanya munculkan kembali jika posisi scroll sudah mentok/mendekati paling atas (misal < 10px)
    else if (current <= 10) {
      setHidden(false);
    }

    // Logika mendeteksi apakah sudah melewati batas viewport tinggi layar
    if (current > window.innerHeight) {
      setIsPastDvh(true);
    } else {
      setIsPastDvh(false);
    }
  });

  const changeLanguage = (langCode) => {
    // 1. Cari elemen dropdown bawaan Google Translate
    const googleSelect = document.querySelector(".goog-te-combo");

    if (googleSelect) {
      // Jika elemen ditemukan, langsung ubah bahasanya
      googleSelect.value = langCode;
      googleSelect.dispatchEvent(new Event("change"));
    } else {
      // 2. FALLBACK: Jika script google telat dimuat, kita coba cari lagi dalam 100ms
      console.warn("Google Translate belum siap, mencoba memicu ulang...");
      setTimeout(() => {
        const retrySelect = document.querySelector(".goog-te-combo");
        if (retrySelect) {
          retrySelect.value = langCode;
          retrySelect.dispatchEvent(new Event("change"));
        } else {
          alert("Fitur translasi sedang memuat, silakan coba sesaat lagi.");
        }
      }, 100);
    }
  };

  return (
    <motion.header
      animate={{
        y: hidden ? -48 : 0,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full"
    >
      <div className="h-[48px] bg-[#b00000] px-4 sm:px-6 lg:px-[70px] w-full flex items-center justify-between">
        <div className="text-white flex items-center gap-2 lg:gap-[16px]">
          <i className="ri-mail-fill text-lg lg:text-[24px]"></i>
          <span className="text-xs lg:text-[14px] sm:inline">
            info@dent.unhas.ac.id
          </span>
        </div>

        <div className="w-[97px] h-[30px] bg-[#0B3E9C] rounded-full flex items-center justify-between px-[16px]">
          <button
            className="cursor-pointer"
            onClick={() => changeLanguage("id")}
          >
            <img
              src={id}
              alt="Indonesia"
              className="w-[24px] h-[16px] rounded-[10px]"
            />
          </button>

          {/* Tombol Bahasa Inggris */}
          <button
            className="cursor-pointer"
            onClick={() => changeLanguage("en")}
          >
            <img
              src={en}
              alt="English"
              className="w-[24px] h-[16px] rounded-[10px]"
            />
          </button>
        </div>
      </div>

      <GlassNav
        isScrolled={isPastDvh}
        onToggleMobile={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </motion.header>
  );
}
