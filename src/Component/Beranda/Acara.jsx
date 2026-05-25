import {motion} from 'motion/react'
import { Link } from 'react-router-dom';

function Card({ data }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[20px] 2xl:gap-[40px] mt-4 lg:mt-[20px]">
      {data.map((item) => (
        <div key={item.id} className="col-span-1 min-h-[180px] lg:h-[230px] flex flex-col sm:flex-row items-center">
          <div className="bg-[#4A0000] w-full sm:w-[100px] lg:w-[130px] h-[70px] sm:h-full rounded-tl-[20px] rounded-tr-[20px] sm:rounded-tr-[0px] sm:rounded-bl-[20px] text-center flex sm:flex-col items-center justify-center gap-[10px] lg:gap-[8px] shrink-0">
            <h1 className="text-[14px] lg:text-[16px] text-white font-bold">{item.m}</h1>
            <h1 className="text-2xl lg:text-[36px] text-white font-bold">{item.t}</h1>
            <h1 className="text-[14px] lg:text-[16px] text-white font-bold">{item.y}</h1>
          </div>
          <div className="w-full h-[140px] sm:h-full sm:rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] sm:rounded-bl-[0px]  border-2 sm:border-s-0 border-[#4A0000] p-3 lg:p-[24px] flex flex-col items-start gap-2 lg:gap-[16px]">
            <div className="px-[16px] h-[28px] rounded-full bg-[#4A0000] text-white flex items-center justify-center shrink-0">
              <p className="text-[12px]">{item.type}</p>
            </div>
            <h1 className="font-semibold text-[16px] lg:text-[20px] leading-tight">{item.title}</h1>
            <div className="flex flex-wrap gap-x-4 gap-y-1 lg:gap-[20px] mt-auto">
              <div className="text-xs lg:text-[16px] flex items-center gap-1 lg:gap-[4px]">
                <i className="ri-time-line"></i>
                <p>{item.time}</p>
              </div>
              <div className="text-xs lg:text-[16px] flex items-center gap-1 lg:gap-[4px]">
                <i className="ri-map-pin-line"></i>
                <p>{item.place}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Acara() {
  const data = [
    {
      id: 1,
      t: "30",
      m: "JUN",
      y: 2025,
      type: "EVENT",
      title: "Workshop Kesehatan Gigi & Mulut",
      time: "09:00 - 15:00",
      place: "Ruang Lab Komputer",
    },
    {
      id: 2,
      t: "29",
      m: "JUN",
      y: 2025,
      type: "EVENT",
      title: "Workshop Perawatan Gigi",
      time: "09:00 - 15:00",
      place: "Ruang Lab Komputer",
    },
  ];
  return (
    <div className="w-full px-4 sm:px-6 lg:px-[70px] py-8 md:py-12 lg:py-[64px]">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
      >
        <div>
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-[32px]">Acara Akan Datang</h1>
            <Link to={'/acara/daftar'} className="w-[174px] h-[40px] bg-[#B00000] text-center font-medium text-white flex items-center justify-center gap-[20px] rounded-[8px] shrink-0">
              Lihat Semua <i className="ri-arrow-right-long-line text-[20px]"></i>
            </Link>
          </div>
          <div className="mt-[20px]">
            <select className="w-full max-w-[400px] p-2 lg:p-[8px] border" name="" id="">
              <option value="">Semua Bulan</option>
              <option value="">January</option>
              <option value="">February</option>
              <option value="">March</option>
              <option value="">April</option>
              <option value="">Mei</option>
              <option value="">June</option>
              <option value="">July</option>
              <option value="">August</option>
              <option value="">September</option>
              <option value="">November</option>
              <option value="">Desember</option>
            </select>
          </div>
          <Card data={data} />
        </div>
      </motion.div>
    </div>
  );
}
