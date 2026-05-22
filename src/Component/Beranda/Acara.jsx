import {motion} from 'motion/react'

function Card({ data }) {
  return (
    <div className="grid grid-cols-2 2xl:gap-[40px] xl:gap-[20px] mt-[20px]">
      {data.map((item) => (
        <div key={item.id} className="col-span-1 h-[230px] flex items-center">
          <div className="bg-[#4A0000] xl:w-[100px] 2xl:w-[130px] h-full rounded-tl-[20px] rounded-bl-[20px] text-center flex flex-col items-center justify-center gap-[8px]">
            <h1 className="text-[16px] text-white font-bold">{item.m}</h1>
            <h1 className="text-[36px] text-white font-bold">{item.t}</h1>
            <h1 className="text-[16px] text-white font-bold">{item.y}</h1>
          </div>
          <div className="xl:w-[446px] 2xl:w-full h-full rounded-tr-[20px] rounded-br-[20px] border-[2px] border-s-0 border-[#4A0000] p-[24px] flex flex-col items-start gap-[16px]">
            <div className="w-[62px] h-[28px] rounded-full bg-[#4A0000] text-white flex items-center justify-center">
              <p className="text-[12px]">{item.type}</p>
            </div>
            <h1 className="font-semibold text-[20px]">{item.title}</h1>
            <h1 className="text-[16px]">{item.title}</h1>
            <div className="flex gap-[20px]">
              <div className="text-[16px] flex items-center gap-[4px]">
                <i class="ri-time-line"></i>
                <p className="text-[16px]">{item.time}</p>
              </div>
              <div className="text-[16px] flex items-center gap-[4px]">
                <i class="ri-map-pin-line"></i>
                <p className="text-[16px]">{item.place}</p>
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
      y: "2025",
      type: "EVENT",
      title: "Workshop Kesehatan Gigi & Mulut",
      time: "09:00 - 15:00",
      place: "Ruang Lab Komputer",
    },
    {
      id: 2,
      t: "29",
      m: "JUN",
      y: "2025",
      type: "EVENT",
      title: "Workshop Perawatan Gigi",
      time: "09:00 - 15:00",
      place: "Ruang Lab Komputer",
    },
  ];
  return (
    <div className="w-full px-[70px] py-[64px]">
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
            <h1 className="font-semibold text-[32px]">Acara Akan Datang</h1>
            <button className="w-[174px] h-[40px] bg-[#B00000] text-center font-medium text-white flex items-center justify-center gap-[20px] rounded-[8px]">
              Lihat Semua <i class="ri-arrow-right-long-line text-[20px]"></i>
            </button>
          </div>
          <div className="mt-[20px]">
            <select className="w-[400px] p-[8px] border-[1px]" name="" id="">
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
