import { useState, useEffect } from "react";
import Blog1 from "../../assets/blog1.png";

// ================= COLUMN KIRI (DAFTAR 4 BERITA SISA) =================
function ColumnKiri({ data }) {
  return (
    <div className="col-span-4 flex flex-col justify-between h-[502px] overflow-y-auto pr-2 gap-3">
      {data.map((item, index) => (
        <div
          key={item.id || index}
          className="flex gap-4 items-start group cursor-pointer border-b border-gray-100 pb-2 last:border-0 hover:bg-gray-50/50 transition-all duration-300 p-1"
        >
          <div className="w-[120px] h-[90px] rounded-[15px] overflow-hidden flex-shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 duration-300"
            />
          </div>
          <div className="flex flex-col justify-between h-full py-1">
            <a
              href=""
              className="font-semibold text-[14px] leading-snug line-clamp-3 group-hover:text-[#b00000] duration-300"
            >
              {item.title}
            </a>
            <span className="text-gray-400 text-[12px] mt-2 block">
              {item.date}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ================= COLUMN KANAN (1 BERITA UTAMA TERDEPAN) =================
function ColumnKanan({ activeData }) {
  if (!activeData) return null;

  return (
    <div className="col-span-8 w-full h-[502px] overflow-hidden rounded-[20px] group relative cursor-pointer">
      <img
        key={activeData.id} // Key di sini memicu refresh animasi fade/scale saat data berganti
        src={activeData.image}
        className="w-full h-full object-cover group-hover:scale-105 duration-500 absolute top-0 left-0"
        alt={activeData.title}
      />
      <div className="w-full h-full absolute top-0 left-0 bg-black/20 z-10"></div>
      <div className="absolute bottom-0 left-0 w-full z-20 flex flex-col p-8 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-24">
        <span className="text-white/80 text-[14px] font-light mb-2">
          {activeData.date}
        </span>
        <a
          href=""
          className="text-[24px] font-bold leading-snug mb-4 max-w-[90%] hover:underline text-white"
        >
          {activeData.title}
        </a>
        <div className="border-t border-white/20 pt-3">
          <span className="text-white/60 text-[12px] block font-medium tracking-wider uppercase">
            SDGS Category
          </span>
          <span className="text-white/90 text-[13px]">
            {activeData.category}
          </span>
        </div>
      </div>
    </div>
  );
}

// ================= MAIN COMPONENT (BLOG) =================
export function Blog() {
  // Masukkan 5 data berita awal kamu di sini
  const [newsList, setNewsList] = useState([
    {
      id: 1,
      title:
        "Perkuat Kompetensi Klinik Mahasiswa, FKG Unhas Gelar Dental Laboratory Camp",
      category: "04. Quality Education",
      date: "07-Jan-2026",
      image: Blog1,
    },
    {
      id: 2,
      title:
        "Dosen FKG Unhas Hadiri Konferensi Internasional di Jerman, Satu-satunya dari Indonesia",
      category: "04. Quality Education",
      date: "12-Jan-2026",
      image: Blog1,
    },
    {
      id: 3,
      title:
        "FKG Unhas Gelar Workshop Persiapan Perkuliahan Semester Genap 2025/2026",
      category: "04. Quality Education",
      date: "15-Jan-2026",
      image: Blog1,
    },
    {
      id: 4,
      title:
        "Rektor Unhas Kunjungi Stand Pameran FKG pada Acara Dies Natalis Universitas",
      category: "04. Quality Education",
      date: "20-Jan-2026",
      image: Blog1,
    },
    {
      id: 5,
      title:
        "5. Mahasiswa Prestasi FKG Unhas Raih Juara 1 Karya Tulis Ilmiah Nasional",
      category: "04. Quality Education",
      date: "28-Jan-2026",
      image: Blog1,
    },
  ]);

  // Efek Rotasi Otomatis (Menggeser Array)
  useEffect(() => {
    const interval = setInterval(() => {
      setNewsList((prevList) => {
        // Ambil data pertama (yang sedang di kanan)
        const [firstItem, ...restItems] = prevList;
        // Kembalikan array baru: sisa data maju ke depan, data pertama taruh di paling belakang
        return [...restItems, firstItem];
      });
    }, 5000); // Berganti posisi setiap 5 detik

    return () => clearInterval(interval);
  }, []);

  // Pembagian data secara dinamis berdasarkan urutan array saat ini:
  const beritaUtama = newsList[0]; // Data indeks 0 selalu masuk ke Kolom Kanan
  const daftarBeritaSisa = newsList.slice(1); // Data indeks 1 sampai 4 selalu masuk ke Kolom Kiri

  return (
    <div className="relative w-full h-dvh px-[70px] pt-[64px] bg-white text-black">
      <div className="flex flex-col gap-[20px]">
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-[32px]">Berita Terbaru</h1>
          <button className="w-[174px] h-[40px] bg-[#B00000] text-center font-medium text-white flex items-center justify-center gap-[20px] rounded-[8px]">Lihat Semua <i class="ri-arrow-right-long-line text-[20px]"></i></button>
        </div>
        <div className="grid grid-cols-12 2xl:gap-x-[60px] xl:gap-x-[20px]">
          {/* Sisi Kanan: Selalu merender elemen pertama dari array state */}
          <ColumnKanan activeData={beritaUtama} />

          {/* Sisi Kiri: Selalu merender 4 elemen sisa dari array state */}
          <ColumnKiri data={daftarBeritaSisa} />
        </div>
      </div>
    </div>
  );
}
