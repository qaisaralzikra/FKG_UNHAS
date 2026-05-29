import { useEffect, useState } from "react";
import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";
import apiService from "../../Services/api";
import { LoadingPage } from "../../Component/LoadingPage";

const ProtokolData = [
  //   {
  //     id: 1,
  //     tanggal: "12 Januari 2024",
  //     keterangan: "Sidang Pleno Program Studi Pendidikan Dokter Gigi",
  //     batas_waktu_pengajuan: "13 Januari 2024",
  //   },
];

export function Protokol() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const year = 2025;

  useEffect(() => {
    apiService
      .getProtokol()
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
  return (
    <>
      <PageHero
        title="Protokol Komite Etik"
        subtitle="Data Protokol Yang Diterima"
      />
      <ContentSection>
        <BackLink to="/komite-etik" />
        <div className="max-w-full">
          <p className="max-w-[900px] text-gray-600 text-base lg:text-[18px] mb-8">
            Daftar protokol penelitian yang telah disetujui oleh KEPK FKG-RSGMP
            UNHAS setelah melalui proses review etik. Protokol yang disetujui
            mendapatkan sertifikat ethical clearance yang berlaku untuk jangka
            waktu tertentu sesuai dengan ketentuan yang berlaku.
          </p>
          <div class="overflow-x-auto">
            <table class="$$table border-[2px] border-gray-200 rounded-[20px] w-full max-w-[900px]">
              <thead className="border-[2px] border-gray-200">
                <tr>
                  <th className="py-[10px] px-[20px] text-center">No</th>
                  <th className="py-[10px] px-[20px] text-center">Tahun</th>
                  <th className="py-[10px] px-[20px] text-center">
                    No.Protokol
                  </th>
                  <th className="py-[10px] px-[20px] text-center">
                    Periode Izin Etik
                  </th>
                </tr>
              </thead>

              <tbody>
                {data && data.length > 0 ? (
                  data.map((d, index) => {
                    const options = {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    };

                    // 2. Validasi & Format Tanggal Mulai
                    const tanggalDiformat = d.masa_berlaku_mulai
                      ? new Date(d.masa_berlaku_mulai).toLocaleDateString(
                          "id-ID",
                          options,
                        )
                      : "-";

                    // 3. Validasi & Format Batas Pengajuan
                    const tanggalDiformatt = d.masa_berlaku_sampai
                      ? new Date(d.masa_berlaku_sampai).toLocaleDateString(
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
                        <td className="py-[20px] px-[20px] text-gray-700 text-center">
                          {index + 1}
                        </td>

                        {/* Kolom Data */}
                        <td className="py-[20px] px-[20px] font-medium text-gray-900 text-center">
                          {d.tahun}
                        </td>
                        <td className="py-[20px] px-[20px] font-medium text-gray-900 text-center">
                          {d.no_registrasi_protokol}
                        </td>
                        <td className="py-[20px] px-[20px] text-gray-600 font-mono text-center">
                          {tanggalDiformat} - {tanggalDiformatt}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-gray-500">
                      Tidak ada Protokol tersedia.
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
