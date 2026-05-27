import { RiEyeLine, RiSpaceShipLine, RiStarLine } from "@remixicon/react";
import { motion } from "framer-motion"; // Pastikan package name-nya sesuai dengan yang kamu install (framer-motion atau motion/react)

function Card({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-[100px] lg:gap-x-[40px]">
      {data.map((item) => {
        // 1. Ambil komponen ikon dan simpan ke variabel berhuruf kapital (PascalCase)
        const IconComponent = item.icon;

        return (
          <div
            key={item.id}
            className="col-span-1 bg-white py-[8px] px-[8px] rounded-[40px] h-[372px] md:h-[472px] relative w-[330px] md:max-w-[400px] mx-auto"
          >
            {/* Badge Title (VISI / MISI / TUJUAN) */}
            <div className="w-[173px] h-[48px] bg-[#b00000] rounded-[10px] absolute z-11 top-[-12px] left-1/2 -translate-x-1/2 md:left-auto md:right-1/4 md:-translate-x-0">
              <p className="text-2xl md:text-[32px] font-semibold text-white text-center leading-[48px]">
                {item.title}
              </p>
            </div>

            {/* Konten Deskripsi */}
            <div className="relative p-[3px] rounded-[40px] bg-gradient-to-b from-[#4A0000] to-[#B00000] w-full h-full">
              <div className="absolute inset-2 bg-white rounded-[40px] z-0"></div>
              <div className="relative z-10 px-4 md:px-8 py-8 md:py-8 text-sm md:text-base text-gray-800">
                <p>{item.desc}</p>
              </div>
            </div>

            {/* Container Lingkaran Ikon */}
            <div className="w-[90px] h-[90px] md:w-[100px] md:h-[100px] lg:w-[110px] lg:h-[110px] border-[6px] md:border-[8px] border-[#b00000] rounded-full bg-white absolute z-12 bottom-[-42px] md:bottom-[-56px] left-1/2 -translate-x-1/2 md:left-auto md:right-1/3 md:-translate-x-0 flex items-center justify-center">
              
              {/* 2. Cukup Render komponen seperti ini, atur sizenya secara proporsional */}
              {IconComponent && (
                <IconComponent 
                  className="text-[#b00000] w-[45px] h-[45px] md:w-[55px] md:h-[55px] lg:w-[60px] lg:h-[60px]" 
                />
              )}

            </div>
          </div>
        );
      })}
    </div>
  );
}

export function VisiMisi() {
  const data = [
    {
      id: 1,
      title: "VISI",
      desc: "Menjadi pusat pengembangan ilmu pengetahuan, teknologi, dan penelitian kedokteran gigi yang mampu bersaing secara nasional dan internasional dalam bidang pendidikan, penelitian, dan pengabdian kepada masyarakat yang berbasis pada Benua Maritim Indonesia.",
      icon: RiSpaceShipLine, // Mengirim referensi komponen langsung
    },
    {
      id: 2,
      title: "MISI",
      desc: "Menyelenggarakan pembelajaran yang berkualitas untuk menghasilkan insan sarjana yang mandiri dan unggul di tingkat nasional serta mampu bersaing di tingkat nasional dan internasional. Mengembangkan ilmu pengetahuan, teknologi dan seni di bidang Kedokteran Gigi. Menghasilkan dan melaksanakan penelitian dan pengabdian yang unggul di bidang Kedokteran Gigi yang bermanfaat bagi masyarakat. Menyelenggarakan tata kelola fakultas yang modern dan berbasis digital.",
      icon: RiEyeLine,
    },
    {
      id: 3,
      title: "TUJUAN",
      desc: "Menghasilkan tenaga Kedokteran Gigi yang berkualitas, profesional dan bertanggung jawab sesuai dengan Sarjana Karakter Maritim. Membangun karakter peneliti bagi dosen dan mahasiswa serta kerjasama keduanya dengan memberikan dukungan maksimal dalam setiap keikutsertaan dalam kompetisi karya ilmiah. Menciptakan manajemen fakultas yang efektif dan efisien.",
      icon: RiStarLine,
    },
  ];

  return (
    <div className="w-full bg-[#4A0000] px-4 sm:px-6 lg:px-[70px] py-20 md:py-[100px] lg:py-20 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <Card data={data} />
      </motion.div>
    </div>
  );
}