import Mitra1 from "../../assets/Mitra1.jpg";
import { motion } from "motion/react";

export function Mitra() {
  const data = [
    {
      id: 1,
      title: "Kerjasama Universitas Hasanuddin dan TNI Angkatan Laut",
      desc: "Sejarah dimulai pada tahun 1968. Pertemuan antara tim TNI-AL yang dipimpin oleh drg. Liem Tjing Kiat bersama drg Halima dan Sikati menghadap Rektor Unhas Letkol Dr. M. Nasir Said, SH untuk membahas kemungkinan pembukaan Pendidikan Kedokteran Gigi di Universitas Hasanuddin. Penandatanganan perjanjian kerjasama antara Universitas Hasanuddin dan TNI Angkatan Laut, pada tanggal 23 Januari 1969.",
      img: Mitra1,
    },
  ];

  return (
    // Menggunakan tag semantik <section> menggantikan <div> terluar untuk meningkatkan SEO struktur data
    <section className="px-4 sm:px-6 lg:px-[70px] py-8 md:py-12 lg:py-[64px]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div>
          {/* Judul Utama Hirarki H2 */}
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-[32px] text-gray-900">
            Kemitraan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[20px] 2xl:gap-[40px] mt-4 lg:mt-[20px]">
            {data.map((item) => (
              <div
                key={item.id}
                className="w-full h-[300px] lg:h-[502px] overflow-hidden rounded-[20px] group relative bg-neutral-100"
              >
                {/* OPTIMASI CLS & SEO: Ditambahkan aspect ratio eksplisit, objek fit, dan deskripsi alt */}
                <img
                  loading="lazy"
                  src={item.img}
                  width={600}
                  height={502}
                  className="w-full h-full object-cover group-hover:scale-105 duration-500 absolute top-0 left-0"
                  alt={`Foto Sejarah ${item.title}`}
                />

                {/* Lapisan Overlay Gelap */}
                <div className="w-full h-full absolute top-0 left-0 bg-black/20 z-10"></div>

                {/* Blok Teks Gradasi */}
                <div className="absolute bottom-0 left-0 w-full z-20 flex flex-col p-4 lg:p-8 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-12 lg:pt-24">
                  <p className="text-sm lg:text-[16px] font-medium leading-snug mb-4 max-w-[90%] text-white line-clamp-4 lg:line-clamp-none">
                    {item.desc}
                  </p>

                  <div className="border-t border-white/20 pt-3">
                    {/* OPTIMASI SEO: Diubah ke link ber-ID/URL tujuan yang jelas lengkap dengan aria-label */}
                    <a
                      href="#selengkapnya"
                      aria-label={`Lanjutkan membaca mengenai ${item.title}`}
                      className="text-white/80 text-[12px] hover:text-[#b00000] transition-colors block font-medium tracking-wider uppercase"
                    >
                      Lanjutkan Membaca
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
