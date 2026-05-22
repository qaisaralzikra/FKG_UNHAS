"use client";

import en from "../assets/en.png";
import id from "../assets/id.png";
import logo from "../../public/logo unhas.png";
import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

function Profil({isScrolled}) {
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
            <span>Selayang Pandang</span>
            <i className="ri-arrow-right-s-line text-[20px]"></i>
          </div>
          <ul
            className={`w-[220px] menu bg-white text-black absolute shadow-md text-[16px] rounded-box top-0 left-[230px] ml-1 transition-all duration-300 ease-in-out
            ${activeSubMenu === "menu1" ? "opacity-100 scale-100 pointer-events-auto translate-x-0" : "opacity-0 scale-95 pointer-events-none -translate-x-2"}
          `}
          >
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Selayang Pandang</a>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Sejarah</a>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Profil</a>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Visi & Misi</a>
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
            <span>Profil Pimpinan</span>
            <i className="ri-arrow-right-s-line text-[20px]"></i>
          </div>
          <ul
            className={`w-[220px] menu bg-white text-black absolute shadow-md text-[16px] rounded-box top-0 left-[230px] ml-1 transition-all duration-300 ease-in-out
            ${activeSubMenu === "menu2" ? "opacity-100 scale-100 pointer-events-auto translate-x-0" : "opacity-0 scale-95 pointer-events-none -translate-x-2"}
          `}
          >
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Sambutan Dekan</a>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Pimpinan Fakultas</a>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Struktur Organisasi</a>
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
            <span>Staff Fakultas</span>
            <i className="ri-arrow-right-s-line text-[20px]"></i>
          </div>
          <ul
            className={`w-[220px] menu bg-white text-black absolute shadow-md text-[16px] rounded-box top-0 left-[230px] ml-1 transition-all duration-300 ease-in-out
            ${activeSubMenu === "menu3" ? "opacity-100 scale-100 pointer-events-auto translate-x-0" : "opacity-0 scale-95 pointer-events-none -translate-x-2"}
          `}
          >
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Data Dosen</a>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Tenaga Pendidik</a>
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
            <span>Fasilitas</span>
            <i className="ri-arrow-right-s-line text-[20px]"></i>
          </div>
          <ul
            className={`w-[220px] menu bg-white text-black absolute shadow-md text-[16px] rounded-box top-0 left-[230px] ml-1 transition-all duration-300 ease-in-out
            ${activeSubMenu === "menu4" ? "opacity-100 scale-100 pointer-events-auto translate-x-0" : "opacity-0 scale-95 pointer-events-none -translate-x-2"}
          `}
          >
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Sarana Prasarana</a>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Zona Integritas</a>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Download Center</a>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Kotak</a>
            </li>
          </ul>
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
            <span>PPID FKG</span>
            <i className="ri-arrow-right-s-line text-[20px]"></i>
          </div>
          <ul
            className={`w-[220px] menu bg-white text-black absolute shadow-md text-[16px] rounded-box top-0 left-[230px] ml-1 transition-all duration-300 ease-in-out
            ${activeSubMenu === "menu5" ? "opacity-100 scale-100 pointer-events-auto translate-x-0" : "opacity-0 scale-95 pointer-events-none -translate-x-2"}
          `}
          >
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Informasi Sera Merta</a>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Informasi Dikecualikan</a>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Informasi Setiap Saat</a>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Informasi Berkala</a>
            </li>
          </ul>
        </li>

        {/* MENU UTAMA LAIN TANPA SUB-MENU */}
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Perjanjian</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Galeri</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

function Akademik({isScrolled}) {
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
            className={`w-[220px] menu bg-white text-black absolute shadow-md text-[16px] rounded-box top-0 left-[230px] ml-1 transition-all duration-300 ease-in-out
            ${activeSubMenu === "menu1" ? "opacity-100 scale-100 pointer-events-auto translate-x-0" : "opacity-0 scale-95 pointer-events-none -translate-x-2"}
          `}
          >
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Akreditasi</a>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">SK & Kontrak Kinerja</a>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Pengabdian</a>
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
            className={`w-[220px] menu bg-white text-black absolute shadow-md text-[16px] rounded-box top-0 left-[230px] ml-1 transition-all duration-300 ease-in-out
            ${activeSubMenu === "menu2" ? "opacity-100 scale-100 pointer-events-auto translate-x-0" : "opacity-0 scale-95 pointer-events-none -translate-x-2"}
          `}
          >
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Kemahasiswaan</a>
            </li>
            <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] rounded-[10px]">
              <a href="">Ormawa</a>
            </li>
          </ul>
        </li>

        {/* MENU UTAMA LAIN TANPA SUB-MENU */}
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Buku Pedoman</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

function ProgramStudi({isScrolled}) {
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
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Doktor Ilmu Kedokteran Gigi</a>
          </div>
        </li>

        {/* MENU UTAMA LAIN TANPA SUB-MENU */}
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Magister Ilmu Kedokteran Gigi</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Pendidikan Doket Gigi</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Pendidikan Profesi Dokter Gigi</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">PPDGS Ilmu Bedah Mulut dan Maksilofasial</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">PPDGS Kedokteran Gigi Anak</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">PPDGS Konservasi Gigi</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">PPDGS Ortodonti</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">PPDGS Penyakit Mulut</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">PPDGS Periodonsia</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">PPDGS Prostodonsia</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">PPDGS Radiologi Kedokteran Gigi</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

function KomiteEtik({isScrolled}) {
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
        className={`menu bg-white text-black rounded-box z-1 w-[240px] absolute top-full right-0 mt-2 shadow-md text-[16px]
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
            <a href="">Pendahuluan</a>
          </div>
        </li>

        {/* MENU UTAMA LAIN TANPA SUB-MENU */}
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Akreditasi Komite Etik</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Struktur Organisasi & Alur Pengajuan</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Anggota Komite Etik</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Konsultan Independen Komite Etik</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">SOP Penelitian Subjek Manusia</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">SOP Penelitian Hewan</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Formulir & Panduan Pengajuan Untuk PI</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Jadwal Rapat</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Protokol Yang Disetujui</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Referensi Komite Etik</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Biaya Kontribusi Ethical Clearance</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Pelatihan Komite Etik</a>
          </div>
        </li>
        <li className="hover:bg-[#f2f2f2] hover:text-[#b00000] duration-[0.4s] hover:cursor-pointer rounded-[10px]">
          <div className="flex items-center justify-between">
            <a href="">Kontak Komite Etikk</a>
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
        <i className={`ri-arrow-down-s-line text-[20px] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}></i>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="pb-2">{children}</div>
      </div>
    </div>
  );
}

function MobileDrawer({ isOpen, onClose }) {
  const [expanded, setExpanded] = useState({});

  const toggle = (key) => setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
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
          <a href="#" className="block py-3 border-b text-[16px] font-medium">
            Beranda
          </a>

          <MobileAccordion label="Profil" isOpen={expanded.profil} onToggle={() => toggle("profil")}>
            <MobileAccordion label="Selayang Pandang" isOpen={expanded.selayang1} onToggle={() => toggle("selayang1")} nested>
              <a href="#" className="block py-2 text-sm ps-3">Selayang Pandang</a>
              <a href="#" className="block py-2 text-sm ps-3">Sejarah</a>
              <a href="#" className="block py-2 text-sm ps-3">Profil</a>
              <a href="#" className="block py-2 text-sm ps-3">Visi & Misi</a>
            </MobileAccordion>
            <MobileAccordion label="Profil Pimpinan" isOpen={expanded.pimpinan} onToggle={() => toggle("pimpinan")} nested>
              <a href="#" className="block py-2 text-sm ps-3">Sambutan Dekan</a>
              <a href="#" className="block py-2 text-sm ps-3">Pimpinan Fakultas</a>
              <a href="#" className="block py-2 text-sm ps-3">Struktur Organisasi</a>
            </MobileAccordion>
            <MobileAccordion label="Staff Fakultas" isOpen={expanded.staff} onToggle={() => toggle("staff")} nested>
              <a href="#" className="block py-2 text-sm ps-3">Data Dosen</a>
              <a href="#" className="block py-2 text-sm ps-3">Tenaga Pendidik</a>
            </MobileAccordion>
            <MobileAccordion label="Fasilitas" isOpen={expanded.fasilitas} onToggle={() => toggle("fasilitas")} nested>
              <a href="#" className="block py-2 text-sm ps-3">Sarana Prasarana</a>
              <a href="#" className="block py-2 text-sm ps-3">Zona Integritas</a>
              <a href="#" className="block py-2 text-sm ps-3">Download Center</a>
              <a href="#" className="block py-2 text-sm ps-3">Kotak</a>
            </MobileAccordion>
            <MobileAccordion label="PPID FKG" isOpen={expanded.ppid} onToggle={() => toggle("ppid")} nested>
              <a href="#" className="block py-2 text-sm ps-3">Informasi Serta Merta</a>
              <a href="#" className="block py-2 text-sm ps-3">Informasi Dikecualikan</a>
              <a href="#" className="block py-2 text-sm ps-3">Informasi Setiap Saat</a>
              <a href="#" className="block py-2 text-sm ps-3">Informasi Berkala</a>
            </MobileAccordion>
            <a href="#" className="block py-3 text-[16px] border-b border-gray-100">Perjanjian</a>
            <a href="#" className="block py-3 text-[16px]">Galeri</a>
          </MobileAccordion>

          <MobileAccordion label="Akademik" isOpen={expanded.akademik} onToggle={() => toggle("akademik")}>
            <MobileAccordion label="Informasi Akademik" isOpen={expanded.infoAkademik} onToggle={() => toggle("infoAkademik")} nested>
              <a href="#" className="block py-2 text-sm ps-3">Akreditasi</a>
              <a href="#" className="block py-2 text-sm ps-3">SK & Kontrak Kinerja</a>
              <a href="#" className="block py-2 text-sm ps-3">Pengabdian</a>
            </MobileAccordion>
            <MobileAccordion label="Kemahasiswaan" isOpen={expanded.kemahasiswaan} onToggle={() => toggle("kemahasiswaan")} nested>
              <a href="#" className="block py-2 text-sm ps-3">Kemahasiswaan</a>
              <a href="#" className="block py-2 text-sm ps-3">Ormawa</a>
            </MobileAccordion>
            <a href="#" className="block py-3 text-[16px] border-b border-gray-100 ms-3">Buku Pedoman</a>
          </MobileAccordion>

          <a href="#" className="block py-3 border-b text-[16px] font-medium">Departement</a>

          <MobileAccordion label="Program Studi" isOpen={expanded.prodi} onToggle={() => toggle("prodi")}>
            <a href="#" className="block py-2 text-sm ps-3">Doktor Ilmu Kedokteran Gigi</a>
            <a href="#" className="block py-2 text-sm ps-3">Magister Ilmu Kedokteran Gigi</a>
            <a href="#" className="block py-2 text-sm ps-3">Pendidikan Dokter Gigi</a>
            <a href="#" className="block py-2 text-sm ps-3">Pendidikan Profesi Dokter Gigi</a>
            <a href="#" className="block py-2 text-sm ps-3">PPDGS Ilmu Bedah Mulut dan Maksilofasial</a>
            <a href="#" className="block py-2 text-sm ps-3">PPDGS Kedokteran Gigi Anak</a>
            <a href="#" className="block py-2 text-sm ps-3">PPDGS Konservasi Gigi</a>
            <a href="#" className="block py-2 text-sm ps-3">PPDGS Ortodonti</a>
            <a href="#" className="block py-2 text-sm ps-3">PPDGS Penyakit Mulut</a>
            <a href="#" className="block py-2 text-sm ps-3">PPDGS Periodonsia</a>
            <a href="#" className="block py-2 text-sm ps-3">PPDGS Prostodonsia</a>
            <a href="#" className="block py-2 text-sm ps-3">PPDGS Radiologi Kedokteran Gigi</a>
          </MobileAccordion>

          <a href="#" className="block py-3 border-b text-[16px] font-medium">PPID</a>

          <MobileAccordion label="Komite Etik" isOpen={expanded.komiteEtik} onToggle={() => toggle("komiteEtik")}>
            <a href="#" className="block py-2 text-sm ps-3">Pendahuluan</a>
            <a href="#" className="block py-2 text-sm ps-3">Akreditasi Komite Etik</a>
            <a href="#" className="block py-2 text-sm ps-3">Struktur Organisasi & Alur Pengajuan</a>
            <a href="#" className="block py-2 text-sm ps-3">Anggota Komite Etik</a>
            <a href="#" className="block py-2 text-sm ps-3">Konsultan Independen Komite Etik</a>
            <a href="#" className="block py-2 text-sm ps-3">SOP Penelitian Subjek Manusia</a>
            <a href="#" className="block py-2 text-sm ps-3">SOP Penelitian Hewan</a>
            <a href="#" className="block py-2 text-sm ps-3">Formulir & Panduan Pengajuan Untuk PI</a>
            <a href="#" className="block py-2 text-sm ps-3">Jadwal Rapat</a>
            <a href="#" className="block py-2 text-sm ps-3">Protokol Yang Disetujui</a>
            <a href="#" className="block py-2 text-sm ps-3">Referensi Komite Etik</a>
            <a href="#" className="block py-2 text-sm ps-3">Biaya Kontribusi Ethical Clearance</a>
            <a href="#" className="block py-2 text-sm ps-3">Pelatihan Komite Etik</a>
            <a href="#" className="block py-2 text-sm ps-3">Kontak Komite Etik</a>
          </MobileAccordion>
        </div>
      </div>
    </>
  );
}

function NavList({isScrolled}) {
  return (
    <div className="hidden lg:flex text-[16px] text-white items-center gap-[20px]">
      <a href="" className={`${isScrolled ? "hover:underline" : "hover:text-[#b00000]"}  duration-[0.4s] ease-in-out`}>
        Beranda
      </a>
      <Profil isScrolled={isScrolled} />
      <Akademik isScrolled={isScrolled} />
      <a href="" className={`${isScrolled ? "hover:underline" : "hover:text-[#b00000]"} duration-[0.4s] ease-in-out`}>
        Departement
      </a>
      <ProgramStudi isScrolled={isScrolled} />
      <a href="" className={`${isScrolled ? "hover:underline" : "hover:text-[#b00000]"} duration-[0.4s] ease-in-out`}>
        PPID
      </a>
      <KomiteEtik isScrolled={isScrolled} />
    </div>
  );
}

function GlassNav({ isScrolled, onToggleMobile }) {
  return (
    <div
      className={`w-full h-[72px] lg:h-[96px] px-4 sm:px-6 lg:px-[70px] shadow-lg transition-colors duration-500 flex items-center justify-between ${
        isScrolled
          ? "bg-[#b00000]"
          : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center gap-3 lg:gap-[34px]">
        <img src={logo} className="w-[40px] h-[48px] lg:w-[50px] lg:h-[60px]" alt="" />
        <div className={`text-white leading-tight lg:leading-[20px]`}>
          <h2 className="font-medium text-xs lg:text-[16px]">Fakultas Kedokteran Gigi</h2>
          <h1 className="font-semibold text-sm lg:text-[20px]">Universitas Hasanuddin</h1>
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

    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (current > window.innerHeight) {
      setIsPastDvh(true);
    } else {
      setIsPastDvh(false);
    }
  });

  return (
    <motion.header
      animate={{
        y: hidden ? -48 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full"
    >
      <div className="h-[48px] bg-[#b00000] px-4 sm:px-6 lg:px-[70px] w-full flex items-center justify-between">
        <div className="text-white flex items-center gap-2 lg:gap-[16px]">
          <i className="ri-mail-fill text-lg lg:text-[24px]"></i>
          <span className="text-xs lg:text-[14px] sm:inline">info@dent.unhas.ac.id</span>
        </div>

        <div className="w-[97px] h-[30px] bg-[#0B3E9C] rounded-full flex items-center justify-between px-[16px]">
          <button className="cursor-pointer">
            <img src={id} alt="" className="w-[24px] h-[16px] rounded-[10px]" />
          </button>
          <button className="cursor-pointer">
            <img src={en} alt="" className="w-[24px] h-[16px] rounded-[10px]" />
          </button>
        </div>
      </div>

      <GlassNav isScrolled={isPastDvh} onToggleMobile={() => setMobileMenuOpen(!mobileMenuOpen)} />

      <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </motion.header>
  );
}
