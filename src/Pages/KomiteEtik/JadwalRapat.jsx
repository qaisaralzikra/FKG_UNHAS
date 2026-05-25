import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";

const Jadwal = [
  //   {
  //     id: 1,
  //     tanggal: "12 Januari 2024",
  //     keterangan: "Sidang Pleno Program Studi Pendidikan Dokter Gigi",
  //     batas_waktu_pengajuan: "13 Januari 2024",
  //   },
];

export function JadwalRapat() {
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
                {Jadwal && Jadwal.length > 0 ? (
                  Jadwal.map((d, index) => (
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
                        {d.tanggal}
                      </td>
                      <td className="py-[20px] px-[20px] font-medium text-gray-900 text-start">
                        {d.keterangan}
                      </td>
                      <td className="py-[20px] px-[20px] text-gray-600 font-mono text-start">
                        {d.batas_waktu_pengajuan}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4 text-gray-500">
                      Tidak ada jadwal tersedia.
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
