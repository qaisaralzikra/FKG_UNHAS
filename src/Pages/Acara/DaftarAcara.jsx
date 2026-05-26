import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";
import apiService from "../../Services/api";
import { LoadingPage } from "../../Component/LoadingPage";

// Nilai value disesuaikan dengan format string bulan 2-digit dari database (01 - 12)
const daftarBulan = [
  { label: "Semua Bulan", value: "ALL" },
  { label: "JAN", value: "01" },
  { label: "FEB", value: "02" },
  { label: "MAR", value: "03" },
  { label: "APR", value: "04" },
  { label: "MEI", value: "05" },
  { label: "JUN", value: "06" },
  { label: "JUL", value: "07" },
  { label: "AUG", value: "08" },
  { label: "SEP", value: "09" },
  { label: "OKT", value: "10" },
  { label: "NOV", value: "11" },
  { label: "DES", value: "12" },
];

export function DaftarAcara() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("ALL");
  const [data, setData] = useState([]); // Default gunakan array kosong agar .length tidak error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiService
      .getEvent()
      .then((response) => {
        // Menyesuaikan penangkapan data eventList dari backend
        const result =
          response.data?.eventList || response.eventList || response;
        setData(Array.isArray(result) ? result : []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  console.log(data);


  // =========================================================================
  // LOGIKA FILTER GABUNGAN (BULAN & KOLOM PENCARIAN)
  // =========================================================================
  const filteredEvents = data.filter((event) => {
    // 1. Ambil digit bulan dari string "2025-06-30" -> hasil: "06"
    const bulanItem = event.tanggal_mulai
      ? event.tanggal_mulai.split("-")[1]
      : "";
    const matchesMonth = selectedMonth === "ALL" || bulanItem === selectedMonth;

    // 2. Filter berdasarkan judul event (nama_event)
    const namaEventLower = (event.nama_event || "").toLowerCase();
    const matchesSearch = namaEventLower.includes(searchQuery.toLowerCase());

    return matchesMonth && matchesSearch;
  });

  if (loading) return <LoadingPage />;
  if (error)
    return (
      <p className="text-center py-10 text-red-600">
        Gagal memuat data: {error}
      </p>
    );

    console.log(filteredEvents);

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
                className="w-full py-[6px] border-0 focus:outline-none text-[15px] text-black bg-white"
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
              {filteredEvents.map((event) => {
                // Ekstraksi komponen tanggal dari "2025-06-30"
                const [tahun, bulan, hari] = event.tanggal_mulai
                  ? event.tanggal_mulai.split("-")
                  : ["-", "-", "-"];

                // Ubah string tanggal menjadi teks nama bulan pendek bahasa Indonesia (contoh: "Jun")
                const namaBulanPendek = event.tanggal_mulai
                  ? new Date(event.tanggal_mulai).toLocaleDateString("id-ID", {
                      month: "short",
                    })
                  : "-";

                return (
                  <div
                    key={event.id}
                    className="bg-white rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col border border-gray-50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
                  >
                    {/* Bagian Atas: Banner Tanggal (Maroon Gelap) */}
                    <div className="bg-[#4A0000] text-white p-6 flex flex-col items-center justify-center relative">
                      <span className="text-sm font-bold tracking-widest uppercase opacity-80">
                        {namaBulanPendek}
                      </span>
                      <span className="text-4xl font-extrabold my-1">
                        {hari}
                      </span>
                      <span className="text-xs font-medium tracking-wider opacity-70">
                        {tahun}
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
                          {event.nama_event}
                        </h3>
                        {/* Render deskripsi keterangan html dengan aman */}
                        <div
                          dangerouslySetInnerHTML={{ __html: event.keterangan }}
                          className="text-gray-500 text-sm line-clamp-2 leading-relaxed"
                        ></div>
                      </div>

                      {/* Metadata Waktu & Tempat */}
                      <div className="space-y-1.5 pt-2 text-xs text-gray-600 font-medium border-t border-gray-50">
                        <div className="flex items-center gap-2">
                          <i className="ri-time-line text-[#4A0000] text-sm"></i>
                          <span>
                            {event.jam_mulai?.substring(0, 5)} -{" "}
                            {event.jam_selesai?.substring(0, 5)} WITA
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="ri-map-pin-line text-[#4A0000] text-sm-shrink-0"></i>
                          {/* Render lokasi html dengan aman */}
                          <div
                            dangerouslySetInnerHTML={{ __html: event.lokasi }}
                            className="line-clamp-1 text-gray-600"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* State kosong jika data pencarian atau filter bulan tidak ada yang cocok */
            <div className="text-center py-16 bg-white rounded-[15px] shadow-[0_0_20px_0_rgba(0,0,0,0.03)] text-gray-400 border-2 border-dashed border-gray-100">
              <i className="ri-calendar-close-line text-4xl mb-2 block text-gray-300"></i>
              <p className="text-sm font-medium">
                Tidak ada acara yang ditemukan pada kriteria pencarian atau
                bulan ini.
              </p>
            </div>
          )}
        </div>
      </ContentSection>
    </>
  );
}
