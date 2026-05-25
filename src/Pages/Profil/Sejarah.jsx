import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout"

export function Sejarah() {
  const dekanList = [
    { tahun: "1983 – 1991", nama: "Halimah Dg. Sikati, drg" },
    { tahun: "1991 – 1999", nama: "Prof. HM Hatta Hasan S, drg., Ph.D., Sp.BM" },
    { tahun: "1999 – 2007", nama: "M. Amin Kansi, drg., MS., Ph.D" },
    { tahun: "2007 – 2011", nama: "Prof. Moh. Dharmautama, drg., Ph.D., Sp.Pros" },
    { tahun: "2011 – 2015", nama: "Prof. Mansjur Nasir, drg., Ph.D" },
    { tahun: "2015 – 2019", nama: "Prof. Bahruddin Thalib, drg., M.Kes., Sp.Pros(K)" },
    { tahun: "2019 – 2022", nama: "Prof. Muhammad Ruslin, drg., M.Kes., Ph.D., Sp.BM(K)" },
    { tahun: "2022 – 2023", nama: "Prof. Dr. Edy Machmud, drg., Sp.Pros(K)" },
    { tahun: "2023 – sekarang", nama: "Irfan Sugianto, drg., M.Med., Ph.D" },
  ]
  return (
    <>
      <PageHero title="Sejarah Fakultas" subtitle="Perjalanan panjang FKG Unhas sejak 1968" />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-[900px]">
          <div className="prose prose-lg text-gray-700">
            <p className="text-base lg:text-[18px] leading-relaxed">
              Sejarah dimulai pada tahun 1968. Pertemuan antara tim TNI-AL yang dipimpin oleh drg. Liem Tjing Kiat bersama drg. Halima dan Sikati menghadap Rektor Unhas Letkol Dr. M. Nasir Said, SH untuk membahas kemungkinan pembukaan Pendidikan Kedokteran Gigi di Universitas Hasanuddin.
            </p>
            <p className="text-base lg:text-[18px] leading-relaxed mt-4">
              Penandatanganan perjanjian kerjasama antara Universitas Hasanuddin dan TNI Angkatan Laut, pada tanggal 23 Januari 1969. Berdasarkan Surat Keputusan Rektor Universitas Hasanuddin tanggal 1 Januari 1969, Institut Kedokteran Gigi Yos Sudarso menjadi Jurusan Kedokteran Gigi Fakultas Kedokteran Universitas Hasanuddin.
            </p>
            <p className="text-base lg:text-[18px] leading-relaxed mt-4">
              Berdasarkan Surat Keputusan Menteri Pendidikan dan Kebudayaan Nomor 0226 Tahun 1970 tanggal 27 Juli 1970 dan Surat Keputusan Rektor Unhas No. 91/0/02/83 tanggal 22 Februari 1983, serta Surat Keputusan Menteri Pendidikan dan Kebudayaan Republik Indonesia No. 0563/0/1983 tanggal 8 Desember 1983, FKG UNHAS didirikan sebagai fakultas tersendiri dalam lingkungan UNHAS.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-semibold text-2xl text-black mb-6">Daftar Dekan FKG Unhas</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#b00000]/30"></div>
              {dekanList.map((dekan, i) => (
                <div key={i} className="relative pl-12 pb-6 last:pb-0">
                  <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full bg-[#b00000] border-2 border-white shadow"></div>
                  <div className="bg-white p-4 rounded-[12px] shadow-sm border border-gray-100">
                    <span className="text-sm text-[#b00000] font-medium">{dekan.tahun}</span>
                    <p className="text-base font-semibold text-black mt-1">{dekan.nama}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
