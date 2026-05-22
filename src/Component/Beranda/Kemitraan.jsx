import Mitra1 from "../../assets/Mitra1.jpg";
import { motion } from "motion/react";

export function Mitra() {
  const data = [
    {
      id: 1,
      desc: "Sejarah dimulai pada tahun 1968. Pertemuan antara tim TNI-AL yang dipimpin oleh drg. Liem Tjing Kiat bersama drg Halima dan Sikati menghadap Rektor Unhas Letkol Dr. M. Nasir Said, SH untuk membahas kemungkinan pembukaan Pendidikan Kedokteran Gigi di Universitas Hasanuddin. Penandatanganan perjanjian kerjasama antara Universitas Hasanuddin dan TNI Angkatan Laut, pada tanggal 23 Januari 1969..",
      img: Mitra1,
    },
    {
      id: 2,
      desc: "Sejarah dimulai pada tahun 1968. Pertemuan antara tim TNI-AL yang dipimpin oleh drg. Liem Tjing Kiat bersama drg Halima dan Sikati menghadap Rektor Unhas Letkol Dr. M. Nasir Said, SH untuk membahas kemungkinan pembukaan Pendidikan Kedokteran Gigi di Universitas Hasanuddin. Penandatanganan perjanjian kerjasama antara Universitas Hasanuddin dan TNI Angkatan Laut, pada tanggal 23 Januari 1969..",
      img: Mitra1,
    },
  ];
  return (
    <div className="px-[70px] py-[64px]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div>
          <h1 className="font-semibold text-[32px]">Kemitraan</h1>
          <div className="grid grid-cols-2 2xl:gap-[40px] xl:gap-[20px] mt-[20px]">
            {data.map((item) => (
              <div
                key={item.id}
                className="w-full h-[502px] overflow-hidden rounded-[20px] group relative"
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover group-hover:scale-105 duration-500 absolute top-0 left-0"
                />
                <div className="w-full h-full absolute top-0 left-0 bg-black/20 z-10"></div>
                <div className="absolute bottom-0 left-0 w-full z-20 flex flex-col p-8 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-24">
                  <p className="text-[16px] font-medium leading-snug mb-4 max-w-[90%] text-white">
                    {item.desc}
                  </p>
                  <div className="border-t border-white/20 pt-3">
                    <a
                      href=""
                      className="text-white/80 text-[12px] hover:text-[#b00000] block font-medium tracking-wider uppercase"
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
    </div>
  );
}
