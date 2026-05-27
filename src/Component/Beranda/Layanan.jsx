import { RiArrowRightLongLine, RiToothLine } from "@remixicon/react";
import { motion } from "motion/react";

function Card({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-[20px] 2xl:gap-[40px] mt-6 lg:mt-[32px] text-black text-base lg:text-[20px]">
      {data.map((item) => (
        <a
          href={item.url}
          target="_blank"
          key={item.id}
          className="col-span-1 w-full min-h-[220px] lg:h-[298px] bg-white rounded-[20px] p-3 lg:p-[10px] flex items-start flex-col gap-2 lg:gap-[8px]"
        >
          <RiToothLine className="w-[36px] h-[36px] lg:w-[53px] lg:h-[53px] text-[#b00000]" />
          <p className="w-full text-base lg:text-[22px] line-clamp-4 lg:line-clamp-none flex-1">
            {item.title}
          </p>
          <a
            href={item.url}
            target="_blank"
            className="hover:text-[#b00000] duration-[0.4s] shrink-0 flex items-center justify-center gap-[8px]"
          >
            Lihat 
            <RiArrowRightLongLine />
          </a>
        </a>
      ))}
    </div>
  );
}

export function Layanan() {
  const data = [
    {
      id: 1,
      title:
        "Permohonan Surat Keterangan Aktif Kuliah dan Surat Rekomendasi Beasiswa",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScgs9wKYdrFKR09HDbZib5nT2TsejpwoLRQvRslozlo7YAPEg/viewform",
    },
    {
      id: 2,
      title:
        "Permohonan Surat Izin Penelitian dan Surat Rekomendasi Etik Penelitian",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSdrp16xzwNpYItuZ8KWOkVA0ApYnQ5kgEZQ6ad8QkkLWD9FCg/viewform",
    },
    {
      id: 3,
      title: "Surat Rekomendasi Magang",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSccDxBc-yCba542Z-K8lYk4nLvL7yR9dfyYepIKGso-Z3Gjnw/viewform",
    },
    {
      id: 4,
      title: "Layanan E-Library",
      url: "https://drive.google.com/file/d/1i59Gq8V7wpM9NjGVOsBwdGQV43xXEoOo/view",
    },
    {
      id: 5,
      title: "Jurnal Ilmu Dentomaksilofasial",
      url: "https://jdmfs.org/index.php/jdmfs",
    },
    {
      id: 6,
      title: "Pusat Bahasa Universitas",
      url: "https://pusatbahasa.unhas.ac.id/id/upt-pusat-bahasa-universitas-hasanuddin/",
    },
    {
      id: 7,
      title: "Jurnal Laporan Kasus Kedokteran Gigi",
      url: "https://www.jcrdm.org/index.php/jcrdm/",
    },
    {
      id: 8,
      title: "Layanan Penelitian Frontiers Dental Laboratory Research",
      url: "https://drive.google.com/drive/folders/1HuAExmPz4TVY44mAti6itMheddsNpBK_",
    },
    {
      id: 9,
      title: "Surat Keterangan Tidak Menerima Beasiswa",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSe69dup7iTLeRUrKK07eh1YBdJ91c9mLthfM6xS2IOgWgVnDw/viewform",
    },
    {
      id: 10,
      title: "Asrama Mahasiswa",
      url: "youtube.com/watch?si=CEIgTtys2vPfLe8-&v=lc7GEVq-si8&feature=youtu.be",
    },
    {
      id: 11,
      title: "Rumah Sakit Gigi Universitas Hasanuddin (RSGMP)",
      url: "https://rsgm.unhas.ac.id/",
    },
    {
      id: 12,
      title: "Rumah Sakit Universitas Hasanuddin (RSP)",
      url: "https://rs.unhas.ac.id/website/tentang-kami/profil-rumah-sakit-unhas/",
    },
    {
      id: 13,
      title: "Pusat Pengembangan Karir",
      url: "https://cdc.unhas.ac.id/eng",
    },
    {
      id: 14,
      title: "Perpustakaan Universitas Hasanuddin",
      url: "https://library.unhas.ac.id/",
    },
  ];
  return (
    <div className="w-full bg-[#4A0000] px-4 sm:px-6 lg:px-[70px] py-8 md:py-12 lg:py-[64px]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div className="text-white">
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-[32px]">
            Layanan Mahasiswa
          </h1>
          <Card data={data} />
        </div>
      </motion.div>
    </div>
  );
}
