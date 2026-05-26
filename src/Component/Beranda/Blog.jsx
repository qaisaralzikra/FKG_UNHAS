import { useState, useEffect } from "react";
import Blog1 from "../../assets/blog1.png";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { LoadingPage } from "../LoadingPage";

// ================= COLUMN KIRI (DAFTAR 4 BERITA SISA) =================
function ColumnKiri({ data }) {
  return (
    <div className="col-span-12 lg:col-span-4 flex flex-col justify-between h-auto lg:h-[502px] overflow-y-auto gap-3">
      {data.map((item, index) => (
        <Link
          to={`/blog/detail/${item.PostSlug}`}
          key={item.PostID || index}
          className="flex gap-4 items-start group cursor-pointer border-b border-gray-100 pb-2 last:border-0 hover:bg-gray-50/50 transition-all duration-300 p-1"
        >
          <div className="w-[100px] lg:w-[120px] h-[75px] lg:h-[90px] rounded-[15px] overflow-hidden flex-shrink-0">
            <img
              src={`https://dent.unhas.ac.id/${item.postImages}`}
              alt={item.PostTitle}
              className="w-full h-full object-cover group-hover:scale-105 duration-300"
            />
          </div>
          <div className="flex flex-col justify-between h-full py-1">
            <Link
              to={`/blog/detail/${item.PostSlug}`}
              className="font-semibold text-[13px] lg:text-[14px] leading-snug line-clamp-3 group-hover:text-[#b00000] duration-300"
            >
              {item.PostTitle}
            </Link>
            <span className="text-gray-400 text-[12px] mt-2 block">
              {item.PostDate}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

// ================= COLUMN KANAN (1 BERITA UTAMA TERDEPAN) =================
function ColumnKanan({ activeData }) {
  if (!activeData) return null;

  return (
    <Link
      to={`/blog/detail/${activeData.PostSlug}`}
      className="col-span-12 lg:col-span-8 w-full h-[280px] sm:h-[350px] lg:h-[502px] overflow-hidden rounded-[20px] group relative cursor-pointer"
    >
      <img
        key={activeData.PostID}
        src={`https://dent.unhas.ac.id/${activeData.postImages}`}
        className="w-full h-full object-cover group-hover:scale-105 duration-500 absolute top-0 left-0"
        alt={activeData.PostTitle}
      />
      <div className="w-full h-full absolute top-0 left-0 bg-black/20 z-10"></div>
      <div className="absolute bottom-0 left-0 w-full z-20 flex flex-col p-4 sm:p-6 lg:p-8 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-12 lg:pt-24">
        <span className="text-white/80 text-[12px] lg:text-[14px] font-light mb-2">
          {activeData.PostDate}
        </span>
        <Link
          to={`/blog/detail/${activeData.PostSlug}`}
          className="text-base sm:text-lg lg:text-[24px] font-bold leading-snug mb-4 max-w-[90%] hover:underline text-white"
        >
          {activeData.PostTitle}
        </Link>
        <div className="border-t border-white/20 pt-3">
          <span className="text-white/60 text-[12px] block font-medium tracking-wider uppercase">
            SDGS Category
          </span>
          <span className="text-white/90 text-[13px]">
            {activeData.SdgKategori}
          </span>
        </div>
      </div>
    </Link>
  );
}

// ================= MAIN COMPONENT (BLOG) =================
// ================= MAIN COMPONENT (BLOG) =================
export function Blog({ data }) {
  // 1. Inisialisasi dengan array kosong [] terlebih dahulu agar aman dari error undefined
  const [newsList, setNewsList] = useState([]);

  // 2. Tambahkan useEffect ini untuk memasukkan data berita ketika data dari API Beranda sudah masuk
  useEffect(() => {
    if (data && data.beritaList) {
      setNewsList(data.beritaList); // Langsung masukkan array-nya (TIDAK perlu dikurung siku lagi)
    }
  }, [data]); // Efek ini berjalan setiap kali props 'data' berubah

  // 3. Efek Rotasi Otomatis (Hanya berjalan jika isi newsList sudah ada datanya)
  useEffect(() => {
    if (newsList.length === 0) return; // Jangan jalankan interval jika data belum masuk

    const interval = setInterval(() => {
      setNewsList((prevList) => {
        if (prevList.length === 0) return prevList;
        const [firstItem, ...restItems] = prevList;
        return [...restItems, firstItem];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [newsList.length]); // dependensi diperbarui berdasarkan panjang array

  // 4. Pengaman jika data masih kosong/loading proses state di atas
  if (!newsList || newsList.length === 0) {
    return <LoadingPage message="Memuat berita..." section />;
  }

  // Pembagian data secara dinamis berdasarkan urutan array saat ini:
  const beritaUtama = newsList[0];
  const daftarBeritaSisa = newsList.slice(1);

  return (
    <div className="relative w-full px-4 sm:px-6 lg:px-[70px] pt-6 sm:pt-8 lg:pt-[64px] pb-8 lg:pb-[66px] bg-white text-black">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-[32px]">
              Berita Terbaru
            </h1>
            <Link
              to="/blog/daftar"
              className="w-[174px] h-[40px] bg-[#B00000] text-center font-medium text-white flex items-center justify-center gap-[20px] rounded-[8px] shrink-0"
            >
              Lihat Semua{" "}
              <i className="ri-arrow-right-long-line text-[20px]"></i>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-x-[20px] 2xl:gap-x-[60px]">
            {/* Sisi Kanan: Selalu merender elemen pertama dari array state */}
            <ColumnKanan activeData={beritaUtama} />

            {/* Sisi Kiri: Selalu merender elemen sisa dari array state */}
            <ColumnKiri data={daftarBeritaSisa} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
