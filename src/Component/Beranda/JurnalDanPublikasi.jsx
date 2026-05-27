import Vector1 from "../../assets/vector1.png";
import { motion } from "motion/react";

export function Jurnal() {
  const data = [
    {
      id: 1,
      title: "Journal Of Dentomaxillofacial Science",
      url: "https://jdmfs.org/index.php/jdmfs",
    },
    {
      id: 2,
      title: "Journal Of Case Reports In Dental Medicine",
      url: "https://jcrdm.org/index.php/jcrdm",
    },
  ];
  return (
    <div className="px-4 sm:px-6 lg:px-[70px] py-8 md:py-12 lg:py-[64px]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div>
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-[32px]">Jurnal & Publikasi</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-[40px] mt-4 lg:mt-[20px]">
            {data.map((item, index) => (
              <div key={item.id} className="w-full">
                <a href={item.url} target="_blank">
                  <div className="w-full min-h-[160px] lg:h-[192px] bg-[#b00000] rounded-[20px] relative shadow-[0_0_20px_rgba(0,0,0,0.25)] overflow-hidden flex items-center justify-between">
                    <h1 className="z-1 text-white font-bold text-6xl lg:text-[96px] ms-3 lg:ms-[20px] text-transparent [-webkit-text-stroke:2px_#b00000]">
                      0{index + 1}
                    </h1>
                    <img
                    loading="lazy"
                      src={Vector1}
                      className="absolute top-0 right-[-2px] w-[300px] h-[150px] sm:w-[600px] md:w-[500px]"
                      alt=""
                    />
                    <p className="z-1 me-3 lg:me-[40px] text-base md:text-xl lg:text-[28px] max-w-[180px] sm:max-w-[240px] lg:max-w-[312px] font-semibold leading-tight text-right lg:text-left">
                      {item.title}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
