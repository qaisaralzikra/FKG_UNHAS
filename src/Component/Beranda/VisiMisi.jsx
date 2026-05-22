import { motion } from "motion/react";


function Card({ data }) {
  return (
    <div className="grid grid-cols-12 2xl:gap-x-[40px] xl:gap-x-[20px]">
      {data.map((item) => (
        <div
          key={item.id}
          className="col-span-4 bg-white py-[8px] px-[8px] rounded-[40px] h-[472px] relative w-[366px]"
        >
          <div className="w-[173px] h-[48px] bg-[#b00000] rounded-[10px] absolute z-11 top-[-12px] right-1/4">
            <p className="text-[32px] font-semibold text-white text-center">
              {item.title}
            </p>
          </div>
          <div className="relative p-[3px] rounded-[40px] bg-gradient-to-b from-[#4A0000] to-[#B00000] w-full h-full">
            <div className="absolute inset-2 bg-white rounded-[40px] z-0"></div>
            <div className="relative z-10 px-8 py-8">
              <p>{item.desc}</p>
            </div>
          </div>
          <div className="w-[133px] h-[133px] border-[8px] border-[#b00000] rounded-full bg-white absolute z-12 bottom-[-56px] right-1/3 flex items-center justify-center">
            <i
              className={`${item.icon} text-[80px] text-[#b00000] text-center`}
            ></i>
            <i
              className={`ri-space-ship-2-line text-[80px] text-[#b00000] text-center`}
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export function VisiMisi() {
  const data = [
    {
      id: 1,
      title: "VISI",
      desc: "Menjadi pusat pengembangan ilmu pengetahuan, teknologi, dan penelitian kedokteran gigi yang mampu bersaing secara nasional dan internasional dalam bidang pendidikan, penelitian, dan pengabdian kepada masyarakat yang berbasis pada Benua Maritim Indonesia.",
      icon: "ri-space-ship-line",
    },
    {
      id: 2,
      title: "MISI",
      desc: "Menyelenggarakan pembelajaran yang berkualitas untuk menghasilkan insan sarjana yang mandiri dan unggul di tingkat nasional serta mampu bersaing di tingkat nasional dan internasional. Mengembangkan ilmu pengetahuan, teknologi dan seni di bidang Kedokteran Gigi. Menghasilkan dan melaksanakan penelitian dan pengabdian yang unggul di bidang Kedokteran Gigi yang bermanfaat bagi masyarakat. Menyelenggarakan tata kelola fakultas yang modern dan berbasis digital.",
      icon: "ri-eye-line",
    },
    {
      id: 3,
      title: "TUJUAN",
      desc: "Menghasilkan tenaga Kedokteran Gigi yang berkualitas, profesional dan bertanggung jawab sesuai dengan Sarjana Karakter Maritim. Membangun karakter peneliti bagi dosen dan mahasiswa serta kerjasama keduanya dengan memberikan dukungan maksimal dalam setiap keikutsertaan dalam kompetisi karya ilmiah. Menciptakan manajemen fakultas yang efektif dan efisien.",
      icon: "ri-star-line",
    },
  ];
  return (
    <div className="w-full bg-[#4A0000] h-dvh px-[70px] flex items-center justify-center">
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
