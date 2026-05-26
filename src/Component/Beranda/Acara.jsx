import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useState } from "react"; // 1. Import useState

function Card({ data }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[20px] 2xl:gap-[40px] mt-4 lg:mt-[20px]">
      {data.map((item) => {
        // Perubahan: Menerima array yang sudah di-filter langsung
        return (
          <div
            key={item.id}
            className="col-span-1 min-h-[180px] lg:h-[230px] flex flex-col sm:flex-row items-center"
          >
            <div className="bg-[#4A0000] w-full sm:w-[100px] lg:w-[130px] h-[70px] sm:h-full rounded-tl-[20px] rounded-tr-[20px] sm:rounded-tr-[0px] sm:rounded-bl-[20px] text-center flex sm:flex-col items-center justify-center gap-[10px] lg:gap-[8px] shrink-0">
              <h1 className="text-[14px] lg:text-[16px] text-white font-bold uppercase">
                {new Date(item.tanggal_mulai).toLocaleDateString("id-ID", {
                  month: "short",
                })}
              </h1>
              <h1 className="text-2xl lg:text-[36px] text-white font-bold">
                {item.tanggal_mulai.split("-")[2]}
              </h1>
              <h1 className="text-[14px] lg:text-[16px] text-white font-bold">
                {item.tanggal_mulai.split("-")[0]}
              </h1>
            </div>
            <div className="w-full h-[140px] sm:h-full sm:rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] sm:rounded-bl-[0px]  border-2 sm:border-s-0 border-[#4A0000] p-3 lg:p-[24px] flex flex-col items-start gap-2 lg:gap-[16px]">
              <div className="px-[16px] h-[28px] rounded-full bg-[#4A0000] text-white flex items-center justify-center shrink-0">
                <p className="text-[12px]">{item.type ? item.type : "EVENT"}</p>
              </div>
              <h1 className="font-semibold text-[16px] lg:text-[20px] leading-tight text-black line-clamp-1">
                {item.nama_event}
              </h1>
              <div
                dangerouslySetInnerHTML={{ __html: item.lokasi }}
                className="text-gray-500 text-sm line-clamp-2 leading-relaxed"
              ></div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 lg:gap-[20px] mt-auto">
                <div className="text-xs lg:text-[16px] flex items-center gap-1 lg:gap-[4px] text-gray-600">
                  <i className="ri-time-line"></i>
                  <span>{item.jam_mulai}</span>
                  <span className="mx-0.5">-</span>
                  <span>{item.jam_selesai}</span>
                </div>
                <div className="text-xs lg:text-[16px] flex items-center gap-1 lg:gap-[4px] text-gray-600">
                  <i className="ri-map-pin-line"></i>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.lokasi }}
                    className="line-clamp-1"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function Acara({ data }) {
  // 2. Buat state untuk menampung string angka bulan ("01", "02", dst.)
  const [selectedMonth, setSelectedMonth] = useState("");

  // 3. Ambil data list event, berikan fallback array kosong jika data belum ke-fetch
  const events = data?.evenList || [];

  // 4. Proses Filter: Ambil indeks array ke-1 dari split("-") yang merupakan string bulan
  const filteredEvents = events.filter((item) => {
    if (selectedMonth === "") return true; // Jika "Semua Bulan", loloskan semua data
    const bulanItem = item.tanggal_mulai.split("-")[1]; // Mengambil "06" dari "2025-06-30"
    return bulanItem === selectedMonth;
  });

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
            <h1 className="font-semibold text-2xl md:text-3xl lg:text-[32px]">
              Acara Akan Datang
            </h1>
            <Link
              to={"/acara/daftar"}
              className="w-[174px] h-[40px] bg-[#B00000] text-center font-medium text-white flex items-center justify-center gap-[20px] rounded-[8px] shrink-0"
            >
              Lihat Semua{" "}
              <i className="ri-arrow-right-long-line text-[20px]"></i>
            </Link>
          </div>

          {/* 5. Pasang value dan onChange pada komponen Select */}
          <div className="mt-[20px]">
            <select
              className="w-full max-w-[400px] p-2 lg:p-[8px] border rounded-md text-black bg-white focus:outline-none focus:border-[#4A0000]"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="">Semua Bulan</option>
              <option value="01">Januari</option>
              <option value="02">Februari</option>
              <option value="03">Maret</option>
              <option value="04">April</option>
              <option value="05">Mei</option>
              <option value="06">Juni</option>
              <option value="07">Juli</option>
              <option value="08">Agustus</option>
              <option value="09">September</option>
              <option value="10">Oktober</option>
              <option value="11">November</option>
              <option value="12">Desember</option>
            </select>
          </div>

          {/* 6. Tampilkan Card jika ada data, atau info kosong jika bulan tersebut tidak ada event */}
          {filteredEvents.length > 0 ? (
            <Card data={filteredEvents} />
          ) : (
            <div className="text-center py-16 bg-gray-50 rounded-[20px] mt-6 border-2 border-dashed">
              <i className="ri-calendar-todo-line text-[40px] text-gray-300 block mb-2"></i>
              <p className="text-gray-500 font-medium">
                Tidak ada agenda acara pada bulan ini
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
