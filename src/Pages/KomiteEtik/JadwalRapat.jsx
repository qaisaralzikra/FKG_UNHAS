import { useEffect, useState } from "react";
import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";
import apiService from "../../Services/api";
import { LoadingPage } from "../../Component/LoadingPage";

const Jadwal = [
  //   {
  //     id: 1,
  //     tanggal: "12 Januari 2024",
  //     keterangan: "Sidang Pleno Program Studi Pendidikan Dokter Gigi",
  //     batas_waktu_pengajuan: "13 Januari 2024",
  //   },
];

export function JadwalRapat() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const year = 2025;

  useEffect(() => {
    apiService
      .getJadwal()
      .then((response) => {
        const result = response.data?.rows || response;
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingPage />;
  if (error)
    return (
      <p className="text-center py-10 text-red-600">
        Gagal memuat data: {error}
      </p>
    );

  // console.log(data);
  return (
    <>
      <PageHero
        title="Jadwal Rapat dan Pelatihan 2026"
        subtitle="Jadwal Rapat Komite Etik Penelitian FKG-RSGMP UNHAS"
      />
      <ContentSection>
        <BackLink to="/komite-etik" />
        <div className="max-w-full">
          <p className="max-w-[900px] text-gray-600 text-base lg:text-[18px] mb-8">
            Jadwal rapat pleno Komite Etik Penelitian FKG-RSGMP UNHAS
            dilaksanakan secara berkala untuk melakukan review dan penetapan
            ethical clearance. Jadwal rapat dapat berubah sesuai dengan
            kebutuhan dan jumlah permohonan yang masuk.
          </p>
          <div class="overflow-x-auto">
            <table class="$$table border-[2px] border-gray-200 rounded-[20px] w-full max-w-[900px]">
              <thead className="border-[2px] border-gray-200">
                <tr>
                  <th className="py-[10px] px-[20px] text-start">No</th>
                  <th className="py-[10px] px-[20px] text-start">Tanggal</th>
                  <th className="py-[10px] px-[20px] text-start">Keterangan</th>
                  <th className="py-[10px] px-[20px] text-start">
                    Batas Waktu Pengajuan
                  </th>
                </tr>
              </thead>

              <tbody>
                {data && data.length > 0 ? (
                  data.map((d, index) => {
                    // 1. Opsi konfigurasi format tanggal (biar tidak duplikasi nulis)
                    const options = {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    };

                    // 2. Validasi & Format Tanggal Mulai
                    const tanggalDiformat = d.tanggal_mulai
                      ? new Date(d.tanggal_mulai).toLocaleDateString(
                          "id-ID",
                          options,
                        )
                      : "-";

                    // 3. Validasi & Format Batas Pengajuan
                    const tanggalDiformatt = d.batas_pengajuan
                      ? new Date(d.batas_pengajuan).toLocaleDateString(
                          "id-ID",
                          options,
                        )
                      : "-";

                    return (
                      <tr
                        key={d.id || index}
                        className={`${index % 2 === 1 ? "bg-gray-100 hover:bg-gray-200 print:bg-gray-100" : "bg-white print:bg-white"} border-b border-gray-200`}
                      >
                        {/* Kolom Nomor */}
                        <td className="py-[20px] px-[20px] text-gray-700">
                          {index + 1}
                        </td>

                        {/* Kolom Data */}
                        <td className="py-[20px] px-[20px] font-medium text-gray-900 text-start">
                          {tanggalDiformat}
                        </td>
                        <td className="py-[20px] px-[20px] font-medium text-gray-900 text-start">
                          {d.keterangan}
                        </td>
                        <td className="py-[20px] px-[20px] font-medium text-gray-900 text-start">
                          {tanggalDiformatt}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  // Jangan lupa berikan feedback jika seluruh 'data' kosong
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-gray-500">
                      Tidak ada data.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
