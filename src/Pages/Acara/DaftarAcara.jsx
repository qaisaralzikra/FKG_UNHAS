import { Link } from "react-router-dom";
import { useState } from "react";
import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";

// Data Dummy Acara yang disesuaikan dengan kebutuhan card event pada gambar
const eventData = [
  {
    id: 1,
    title: "Workshop Kesehatan Gigi & Mulut",
    description:
      "Workshop komprehensif tentang kesehatan gigi dan mulut untuk mahasiswa.",
    time: "09:00 - 15:00",
    location: "Ruang Lab Komputer",
    day: "30",
    monthText: "JUN",
    year: "2025",
    monthIndex: "JUN", // Untuk filter
  },
  {
    id: 2,
    title: "Workshop Perawatan Gigi",
    description: "Pelatihan praktis mengenai teknik perawatan gigi modern.",
    time: "09:00 - 15:00",
    location: "Ruang Lab Komputer",
    day: "29",
    monthText: "JUN",
    year: "2025",
    monthIndex: "JUN",
  },
  {
    id: 3,
    title: "Seminar Ortodonti Modern",
    description: "Seminar tentang perkembangan terkini dalam bidang ortodonti.",
    time: "13:00 - 17:00",
    location: "Auditorium FKG",
    day: "15",
    monthText: "JUL",
    year: "2025",
    monthIndex: "JUL",
  },
  {
    id: 4,
    title: "Pelatihan Endodontik Lanjutan",
    description: "Pelatihan intensif untuk mahasiswa tingkat lanjut.",
    time: "08:00 - 16:00",
    location: "Klinik FKG",
    day: "20",
    monthText: "AUG",
    year: "2025",
    monthIndex: "AUG",
  },
];

const daftarBulan = [
  { label: "Semua Bulan", value: "ALL" },
  { label: "JAN", value: "JAN" },
  { label: "FEB", value: "FEB" },
  { label: "MAR", value: "MAR" },
  { label: "APR", value: "APR" },
  { label: "MEI", value: "MEI" },
  { label: "JUN", value: "JUN" },
  { label: "JUL", value: "JUL" },
  { label: "AUG", value: "AUG" },
  { label: "SEP", value: "SEP" },
  { label: "OKT", value: "OKT" },
  { label: "NOV", value: "NOV" },
  { label: "DES", value: "DES" },
];

export function DaftarAcara() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("ALL");

  // Logika Filter gabungan (Bulan & Kolom Pencarian)
  const filteredEvents = eventData.filter((event) => {
    const matchesMonth =
      selectedMonth === "ALL" || event.monthIndex === selectedMonth;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMonth && matchesSearch;
  });

  return (
    <>
      <PageHero
        title="Daftar Acara"
        subtitle="Seluruh Daftar Acara Fakultas Kedokteran Gigi"
      />
      <ContentSection>
        <BackLink to="/" />

        <div className="max-w-full space-y-6 mt-4">
          {/* BAR INPUT PENCARIAN & FILTER BULAN */}
          <div className="p-4 md:p-6 bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.05)] rounded-[15px] space-y-4">
            {/* Input Cari */}
            <div className="flex items-center gap-[10px] border-[2px] border-gray-100 max-w-md p-[4px] px-[16px] rounded-[10px] focus-within:border-[#4A0000] transition-colors">
              <i className="ri-search-line text-gray-400 text-[20px]"></i>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-[6px] border-0 focus:outline-none text-[15px]"
                placeholder="Cari Acara..."
              />
            </div>

            {/* Navigasi Filter Bulan */}
            <div className="flex items-center gap-2 flex-wrap text-sm border-t border-gray-50 pt-4">
              <span className="text-gray-500 font-medium mr-2 flex items-center gap-1">
                <i className="ri-filter-3-line"></i> Filter Bulan:
              </span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {daftarBulan.map((bulan) => (
                  <button
                    key={bulan.value}
                    onClick={() => setSelectedMonth(bulan.value)}
                    className={`px-3 py-1.5 rounded-[6px] font-semibold text-xs transition-all cursor-pointer ${
                      selectedMonth === bulan.value
                        ? "bg-[#4A0000] text-white shadow-sm"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {bulan.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* GRID CARD DAFTAR ACARA */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col border border-gray-50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  {/* Bagian Atas: Banner Tanggal (Maroon Gelap) */}
                  <div className="bg-[#4A0000] text-white p-6 flex flex-col items-center justify-center relative">
                    <span className="text-sm font-bold tracking-widest opacity-80">
                      {event.monthText}
                    </span>
                    <span className="text-4xl font-extrabold my-1">
                      {event.day}
                    </span>
                    <span className="text-xs font-medium tracking-wider opacity-70">
                      {event.year}
                    </span>

                    {/* Badge EVENT */}
                    <div className="mt-3 bg-[rgba(255,255,255,0.15)] px-4 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase border border-[rgba(255,255,255,0.2)]">
                      Event
                    </div>
                  </div>

                  {/* Bagian Bawah: Konten Detail Kard */}
                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-bold text-gray-800 text-[18px] leading-snug line-clamp-2 min-h-[52px]">
                        {event.title}
                      </h3>
                      <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Metadata Waktu & Tempat */}
                    <div className="space-y-1.5 pt-2 text-xs text-gray-600 font-medium">
                      <div className="flex items-center gap-2">
                        <i className="ri-time-line text-[#4A0000] text-sm"></i>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <i className="ri-map-pin-line text-[#4A0000] text-sm"></i>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* State kosong jika data pencarian tidak ketemu */
            <div className="text-center py-12 bg-white rounded-[15px] shadow-[0_0_20px_0_rgba(0,0,0,0.03)] text-gray-400">
              <i className="ri-calendar-close-line text-4xl mb-2 block text-gray-300"></i>
              <p className="text-sm">
                Tidak ada acara yang ditemukan pada bulan ini.
              </p>
            </div>
          )}
        </div>
      </ContentSection>
    </>
  );
}
