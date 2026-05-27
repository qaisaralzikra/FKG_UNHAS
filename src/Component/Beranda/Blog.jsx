import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { LoadingPage } from "../LoadingPage";
import { RiArrowRightLongLine } from "@remixicon/react";

// ================= COLUMN KIRI (DAFTAR 4 BERITA SISA) =================
function ColumnKiri({ data }) {
  return (
    <div className="col-span-12 lg:col-span-4 flex flex-col justify-between h-auto lg:h-[502px] overflow-y-auto gap-3">
      {data.map((item, index) => (
        <Link
          // Memindahkan navigasi hanya pada wrapper utama kartu berita sisa
          to={`/blog/detail/${item.PostSlug}`}
          key={item.PostID || index}
          aria-label={`Baca berita selengkapnya: ${item.PostTitle}`}
          className="flex gap-4 items-start group cursor-pointer border-b border-gray-100 pb-2 last:border-0 hover:bg-gray-50/50 transition-all duration-300 p-1"
        >
          {/* OPTIMASI CLS: Kontainer gambar diberi aspek rasio & background dasar */}
          <div className="w-[100px] lg:w-[120px] h-[75px] lg:h-[90px] rounded-[15px] overflow-hidden flex-shrink-0 bg-neutral-100 relative">
            <img
              loading="lazy"
              width={120}
              height={90}
              src={`https://dent.unhas.ac.id/${item.postImages}`}
              alt={`Ilustrasi ${item.PostTitle}`}
              className="w-full h-full object-cover group-hover:scale-105 duration-300 absolute top-0 left-0"
            />
          </div>
          <div className="flex flex-col justify-between h-full py-1">
            {/* OPTIMASI SEO: Diubah dari <Link> menjadi tag <p> karena pembungkus terluar sudah berupa <Link> */}
            <p className="font-semibold text-[13px] lg:text-[14px] leading-snug line-clamp-3 group-hover:text-[#b00000] duration-300 text-gray-900">
              {item.PostTitle}
            </p>
            <time className="text-gray-400 text-[12px] mt-2 block">
              {item.PostDate}
            </time>
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
      aria-label={`Berita Utama: ${activeData.PostTitle}`}
      className="col-span-12 lg:col-span-8 w-full h-[280px] sm:h-[350px] lg:h-[502px] overflow-hidden rounded-[20px] group relative cursor-pointer bg-neutral-200 block"
    >
      <img
        loading="lazy"
        key={activeData.PostID}
        width={800}
        height={502}
        src={`https://dent.unhas.ac.id/${activeData.postImages}`}
        className="w-full h-full object-cover group-hover:scale-105 duration-500 absolute top-0 left-0"
        alt={`Foto Cover Berita ${activeData.PostTitle}`}
      />
      <div className="w-full h-full absolute top-0 left-0 bg-black/30 z-10"></div>
      
      <div className="absolute bottom-0 left-0 w-full z-20 flex flex-col p-4 sm:p-6 lg:p-8 text-white bg-gradient-to-t from-black/95 via-black/40 to-transparent pt-12 lg:pt-24">
        <time className="text-white/80 text-[12px] lg:text-[14px] font-light mb-2">
          {activeData.PostDate}
        </time>
        
        {/* OPTIMASI SEO: Mengubah <Link> menjadi <h3/p> agar validasi dom nesting tidak patah */}
        <p className="text-base sm:text-lg lg:text-[24px] font-bold leading-snug mb-4 max-w-[90%] group-hover:underline text-white">
          {activeData.PostTitle}
        </p>
        
        <div className="border-t border-white/20 pt-3">
          <span className="text-white/60 text-[12px] block font-medium tracking-wider uppercase">
            SDGS Category
          </span>
          <span className="text-white/90 text-[13px] font-medium">
            {activeData.SdgKategori}
          </span>
        </div>
      </div>
    </Link>
  );
}

// ================= MAIN COMPONENT (BLOG) =================
export function Blog({ data }) {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    if (data && data.beritaList) {
      setNewsList(data.beritaList);
    }
  }, [data]);

  // Efek Rotasi Otomatis (Interval tetap berjalan namun CLS diredam oleh pengunci tinggi aset gambar)
  useEffect(() => {
    if (newsList.length === 0) return;

    const interval = setInterval(() => {
      setNewsList((prevList) => {
        if (prevList.length === 0) return prevList;
        const [firstItem, ...restItems] = prevList;
        return [...restItems, firstItem];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [newsList.length]);

  if (!newsList || newsList.length === 0) {
    return <LoadingPage message="Memuat berita..." section />;
  }

  const beritaUtama = newsList[0];
  const daftarBeritaSisa = newsList.slice(1);

  return (
    // OPTIMASI SEO: Tag diubah menjadi elemen semantik <section>
    <section className="relative w-full px-4 sm:px-6 lg:px-[70px] pt-6 sm:pt-8 lg:pt-[64px] pb-8 lg:pb-[66px] bg-white text-black">
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
            <h2 className="font-semibold text-2xl md:text-3xl lg:text-[32px] text-gray-900">
              Berita Terbaru
            </h2>
            <Link
              to="/blog/daftar"
              aria-label="Lihat seluruh daftar berita"
              className="w-[174px] h-[40px] bg-[#B00000] text-center font-medium text-white flex items-center justify-center gap-[20px] rounded-[8px] shrink-0 hover:bg-[#800000] transition-colors"
            >
              Lihat Semua{" "}
              <RiArrowRightLongLine size={20} className="text-white" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-x-[20px] 2xl:gap-x-[60px]">
            <ColumnKanan activeData={beritaUtama} />
            <ColumnKiri data={daftarBeritaSisa} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}