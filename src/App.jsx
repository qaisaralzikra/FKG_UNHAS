import { Footer } from "./Component/Footer";
import { Navigasi } from "./Component/Navigasi";
import { Beranda } from "./Pages/Beranda";
import React, { useState, useEffect } from "react";

function App() {
  // 1. Buat state untuk mengontrol visibilitas tombol
  const [showButton, setShowButton] = useState(false);

  // 2. Logika untuk mendeteksi posisi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true); // Tampilkan tombol jika scroll ke bawah lebih dari 300px
      } else {
        setShowButton(false); // Sembunyikan jika kembali ke paling atas
      }
    };

    // Pasang event listener saat komponen dimuat
    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat komponen ditinggalkan (cleanup)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div classname="overflow-visible h-auto">
      <Navigasi />
      <Beranda />
      <div
        className={`
            ${
              showButton
                ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                : "opacity-0 scale-95 pointer-events-none -translate-y-2"
            }
            w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#b00000] fixed right-[20px] bottom-[40px] sm:bottom-[20px] z-50 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:w-[60px] hover:h-[60px] transition-all`}
        onClick={scrollToTop}
      >
        {/* Kamu bisa menambahkan ikon panah di sini nanti */}
        <span className="text-white text-[28px]">↑</span>
      </div>
      <Footer />
      <Css />
    </div>
  );
}

function Css() {
  return (
    <style>
      {`
      @media (prefers-reduced-motion: reduce) {
                .header {
                    transition: none;
                }
            }
            `}
    </style>
  );
}

export default App;
