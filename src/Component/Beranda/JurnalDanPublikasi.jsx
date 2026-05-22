import Jurnal1 from "../../assets/Jurnal 1.jpg";
import Jurnal2 from "../../assets/jurnal 2.jpg";
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
          <h1 className="font-semibold text-[32px]">Jurnal & Publikasi</h1>
          <div className="grid grid-cols-2 gap-[40px] mt-[20px]">
            {data.map((item, index) => (
              <div key={item.id}>
                <a href={item.url} target="_blank">
                  <div className="w-[560px] h-[192px] bg-[#b00000] rounded-[20px] relative shadow-[0_0_20px_rgba(0,0,0,0.25)] overflow-hidden flex items-center justify-between">
                    <h1 className="text-white font-bold text-[96px] ms-[20px]">
                      0{index + 1}
                    </h1>
                    <img
                      src={Vector1}
                      className="absolute top-0 right-[-2px]"
                      alt=""
                    />
                    <p className="z-1 me-[40px] text-[32px] w-[312px] font-semibold">
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
