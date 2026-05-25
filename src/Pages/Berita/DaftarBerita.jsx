import { Link } from "react-router-dom";
import {
  PageHero,
  ContentSection,
  BackLink,
  SectionTitle,
} from "../../Component/PageLayout";

import Blog1 from "../../assets/blog1.png";

const blogData = [
  {
    id: 1,
    title:
      "Perkuat Kompetensi Klinik Mahasiswa, FKG Unhas Gelar Dental Laboratory Camp",
    category: "04. Quality Education",
    conten:
      "<p>Fakultas Kedokteran Gigi (FKG) Universitas Hasanuddin menggelar kegiatan Sosialisasi Program Studi Spesialis, Program Magister (S2) Ilmu Kedokteran Gigi, dan Program Doktor (S3) Ilmu Kedokteran Gigi pada Sabtu (28/6/2025), bertempat di Aula RSUD Nene Mallomo, Pangkajene, Kabupaten Sidrap, Sulawesi Selatan.</p><p>Kegiatan yang dimulai pukul 10.00 WITA ini bertujuan untuk memperluas akses dan informasi pendidikan lanjutan bagi dokter gigi di wilayah Ajatappareng, khususnya Kabupaten Sidrap.</p><p>Acara dibuka secara resmi oleh Direktur RSUD Nene Mallomo, drg. Hj. Sahriah Usman, M.Kes., Sp.KG. dan turut dihadiri oleh Ibu Bupati Sidrap, Hj. Haslindah Syaharuddin, S.Pd.</p><p>Hadir sebagai pembicara dalam kegiatan ini:</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Prof. Dr. Bahruddin Thalib, drg., M.Kes., Sp.Pros., Subsp.PKIKG(K), selaku Ketua Senat Akademik Unhas, yang memaparkan mengenai Program Magister dan Doktor Ilmu Kedokteran Gigi FKG Unhas.</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Prof. Dr. Sri Oktawati, drg., Sp.Perio., Subsp.R.P.I.D (K), yang menyampaikan informasi tentang Program Spesialis Kedokteran Gigi.</p><p>Peserta kegiatan terdiri dari anggota PDGI Cabang Sidrap serta para dokter gigi umum yang berasal dari wilayah Ajatappareng.</p><p>Antusiasme peserta terlihat dari aktifnya sesi diskusi dan tanya jawab terkait peluang studi lanjutan, sistem pembelajaran, hingga beasiswa pendidikan.</p><p>Turut hadir dalam rombongan FKG Unhas:</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Direktur RSGMP Unhas, Andi Tajrin, drg., M.Kes., Sp.BMM., Subsp.COM(K)<br>•&nbsp;&nbsp;&nbsp;&nbsp;Ketua Gugus Penjaminan Mutu dan Peningkatan Reputasi FKG Unhas, Prof. Dr. Asmawati, drg., M.Kes., PBO.<br>•&nbsp;&nbsp;&nbsp;&nbsp;Surijana Mappangara, drg., M.Kes., Sp.Perio (K)<br>•&nbsp;&nbsp;&nbsp;&nbsp;Supiaty, drg., M.Kes.<br>•&nbsp;&nbsp;&nbsp;&nbsp;Muliaty Yunus, drg., M.Kes, Sp.OF (K)., dan<br>•&nbsp;&nbsp;&nbsp;&nbsp;Dian Setiawaty, drg., Sp.Perio., Subsp.MP(K)</p><p>Laporan : Majid (Humas FKG Unhas)</p>",
    date: "07-Jan-2026",
    image: Blog1,
  },
  {
    id: 2,
    title:
      "Dosen FKG Unhas Hadiri Konferensi Internasional di Jerman, Satu-satunya dari Indonesia",
    category: "04. Quality Education",
    conten:
      "<p>Fakultas Kedokteran Gigi (FKG) Universitas Hasanuddin menggelar kegiatan Sosialisasi Program Studi Spesialis, Program Magister (S2) Ilmu Kedokteran Gigi, dan Program Doktor (S3) Ilmu Kedokteran Gigi pada Sabtu (28/6/2025), bertempat di Aula RSUD Nene Mallomo, Pangkajene, Kabupaten Sidrap, Sulawesi Selatan.</p><p>Kegiatan yang dimulai pukul 10.00 WITA ini bertujuan untuk memperluas akses dan informasi pendidikan lanjutan bagi dokter gigi di wilayah Ajatappareng, khususnya Kabupaten Sidrap.</p><p>Acara dibuka secara resmi oleh Direktur RSUD Nene Mallomo, drg. Hj. Sahriah Usman, M.Kes., Sp.KG. dan turut dihadiri oleh Ibu Bupati Sidrap, Hj. Haslindah Syaharuddin, S.Pd.</p><p>Hadir sebagai pembicara dalam kegiatan ini:</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Prof. Dr. Bahruddin Thalib, drg., M.Kes., Sp.Pros., Subsp.PKIKG(K), selaku Ketua Senat Akademik Unhas, yang memaparkan mengenai Program Magister dan Doktor Ilmu Kedokteran Gigi FKG Unhas.</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Prof. Dr. Sri Oktawati, drg., Sp.Perio., Subsp.R.P.I.D (K), yang menyampaikan informasi tentang Program Spesialis Kedokteran Gigi.</p><p>Peserta kegiatan terdiri dari anggota PDGI Cabang Sidrap serta para dokter gigi umum yang berasal dari wilayah Ajatappareng.</p><p>Antusiasme peserta terlihat dari aktifnya sesi diskusi dan tanya jawab terkait peluang studi lanjutan, sistem pembelajaran, hingga beasiswa pendidikan.</p><p>Turut hadir dalam rombongan FKG Unhas:</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Direktur RSGMP Unhas, Andi Tajrin, drg., M.Kes., Sp.BMM., Subsp.COM(K)<br>•&nbsp;&nbsp;&nbsp;&nbsp;Ketua Gugus Penjaminan Mutu dan Peningkatan Reputasi FKG Unhas, Prof. Dr. Asmawati, drg., M.Kes., PBO.<br>•&nbsp;&nbsp;&nbsp;&nbsp;Surijana Mappangara, drg., M.Kes., Sp.Perio (K)<br>•&nbsp;&nbsp;&nbsp;&nbsp;Supiaty, drg., M.Kes.<br>•&nbsp;&nbsp;&nbsp;&nbsp;Muliaty Yunus, drg., M.Kes, Sp.OF (K)., dan<br>•&nbsp;&nbsp;&nbsp;&nbsp;Dian Setiawaty, drg., Sp.Perio., Subsp.MP(K)</p><p>Laporan : Majid (Humas FKG Unhas)</p>",
    date: "12-Jan-2026",
    image: Blog1,
  },
  {
    id: 3,
    title:
      "FKG Unhas Gelar Workshop Persiapan Perkuliahan Semester Genap 2025/2026",
    category: "04. Quality Education",
    conten:
      "<p>Fakultas Kedokteran Gigi (FKG) Universitas Hasanuddin menggelar kegiatan Sosialisasi Program Studi Spesialis, Program Magister (S2) Ilmu Kedokteran Gigi, dan Program Doktor (S3) Ilmu Kedokteran Gigi pada Sabtu (28/6/2025), bertempat di Aula RSUD Nene Mallomo, Pangkajene, Kabupaten Sidrap, Sulawesi Selatan.</p><p>Kegiatan yang dimulai pukul 10.00 WITA ini bertujuan untuk memperluas akses dan informasi pendidikan lanjutan bagi dokter gigi di wilayah Ajatappareng, khususnya Kabupaten Sidrap.</p><p>Acara dibuka secara resmi oleh Direktur RSUD Nene Mallomo, drg. Hj. Sahriah Usman, M.Kes., Sp.KG. dan turut dihadiri oleh Ibu Bupati Sidrap, Hj. Haslindah Syaharuddin, S.Pd.</p><p>Hadir sebagai pembicara dalam kegiatan ini:</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Prof. Dr. Bahruddin Thalib, drg., M.Kes., Sp.Pros., Subsp.PKIKG(K), selaku Ketua Senat Akademik Unhas, yang memaparkan mengenai Program Magister dan Doktor Ilmu Kedokteran Gigi FKG Unhas.</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Prof. Dr. Sri Oktawati, drg., Sp.Perio., Subsp.R.P.I.D (K), yang menyampaikan informasi tentang Program Spesialis Kedokteran Gigi.</p><p>Peserta kegiatan terdiri dari anggota PDGI Cabang Sidrap serta para dokter gigi umum yang berasal dari wilayah Ajatappareng.</p><p>Antusiasme peserta terlihat dari aktifnya sesi diskusi dan tanya jawab terkait peluang studi lanjutan, sistem pembelajaran, hingga beasiswa pendidikan.</p><p>Turut hadir dalam rombongan FKG Unhas:</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Direktur RSGMP Unhas, Andi Tajrin, drg., M.Kes., Sp.BMM., Subsp.COM(K)<br>•&nbsp;&nbsp;&nbsp;&nbsp;Ketua Gugus Penjaminan Mutu dan Peningkatan Reputasi FKG Unhas, Prof. Dr. Asmawati, drg., M.Kes., PBO.<br>•&nbsp;&nbsp;&nbsp;&nbsp;Surijana Mappangara, drg., M.Kes., Sp.Perio (K)<br>•&nbsp;&nbsp;&nbsp;&nbsp;Supiaty, drg., M.Kes.<br>•&nbsp;&nbsp;&nbsp;&nbsp;Muliaty Yunus, drg., M.Kes, Sp.OF (K)., dan<br>•&nbsp;&nbsp;&nbsp;&nbsp;Dian Setiawaty, drg., Sp.Perio., Subsp.MP(K)</p><p>Laporan : Majid (Humas FKG Unhas)</p>",
    date: "15-Jan-2026",
    image: Blog1,
  },
  {
    id: 4,
    title:
      "Rektor Unhas Kunjungi Stand Pameran FKG pada Acara Dies Natalis Universitas",
    category: "04. Quality Education",
    conten:
      "<p>Fakultas Kedokteran Gigi (FKG) Universitas Hasanuddin menggelar kegiatan Sosialisasi Program Studi Spesialis, Program Magister (S2) Ilmu Kedokteran Gigi, dan Program Doktor (S3) Ilmu Kedokteran Gigi pada Sabtu (28/6/2025), bertempat di Aula RSUD Nene Mallomo, Pangkajene, Kabupaten Sidrap, Sulawesi Selatan.</p><p>Kegiatan yang dimulai pukul 10.00 WITA ini bertujuan untuk memperluas akses dan informasi pendidikan lanjutan bagi dokter gigi di wilayah Ajatappareng, khususnya Kabupaten Sidrap.</p><p>Acara dibuka secara resmi oleh Direktur RSUD Nene Mallomo, drg. Hj. Sahriah Usman, M.Kes., Sp.KG. dan turut dihadiri oleh Ibu Bupati Sidrap, Hj. Haslindah Syaharuddin, S.Pd.</p><p>Hadir sebagai pembicara dalam kegiatan ini:</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Prof. Dr. Bahruddin Thalib, drg., M.Kes., Sp.Pros., Subsp.PKIKG(K), selaku Ketua Senat Akademik Unhas, yang memaparkan mengenai Program Magister dan Doktor Ilmu Kedokteran Gigi FKG Unhas.</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Prof. Dr. Sri Oktawati, drg., Sp.Perio., Subsp.R.P.I.D (K), yang menyampaikan informasi tentang Program Spesialis Kedokteran Gigi.</p><p>Peserta kegiatan terdiri dari anggota PDGI Cabang Sidrap serta para dokter gigi umum yang berasal dari wilayah Ajatappareng.</p><p>Antusiasme peserta terlihat dari aktifnya sesi diskusi dan tanya jawab terkait peluang studi lanjutan, sistem pembelajaran, hingga beasiswa pendidikan.</p><p>Turut hadir dalam rombongan FKG Unhas:</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Direktur RSGMP Unhas, Andi Tajrin, drg., M.Kes., Sp.BMM., Subsp.COM(K)<br>•&nbsp;&nbsp;&nbsp;&nbsp;Ketua Gugus Penjaminan Mutu dan Peningkatan Reputasi FKG Unhas, Prof. Dr. Asmawati, drg., M.Kes., PBO.<br>•&nbsp;&nbsp;&nbsp;&nbsp;Surijana Mappangara, drg., M.Kes., Sp.Perio (K)<br>•&nbsp;&nbsp;&nbsp;&nbsp;Supiaty, drg., M.Kes.<br>•&nbsp;&nbsp;&nbsp;&nbsp;Muliaty Yunus, drg., M.Kes, Sp.OF (K)., dan<br>•&nbsp;&nbsp;&nbsp;&nbsp;Dian Setiawaty, drg., Sp.Perio., Subsp.MP(K)</p><p>Laporan : Majid (Humas FKG Unhas)</p>",
    date: "20-Jan-2026",
    image: Blog1,
  },
  {
    id: 5,
    title:
      "5. Mahasiswa Prestasi FKG Unhas Raih Juara 1 Karya Tulis Ilmiah Nasional",
    category: "04. Quality Education",
    conten:
      "<p>Fakultas Kedokteran Gigi (FKG) Universitas Hasanuddin menggelar kegiatan Sosialisasi Program Studi Spesialis, Program Magister (S2) Ilmu Kedokteran Gigi, dan Program Doktor (S3) Ilmu Kedokteran Gigi pada Sabtu (28/6/2025), bertempat di Aula RSUD Nene Mallomo, Pangkajene, Kabupaten Sidrap, Sulawesi Selatan.</p><p>Kegiatan yang dimulai pukul 10.00 WITA ini bertujuan untuk memperluas akses dan informasi pendidikan lanjutan bagi dokter gigi di wilayah Ajatappareng, khususnya Kabupaten Sidrap.</p><p>Acara dibuka secara resmi oleh Direktur RSUD Nene Mallomo, drg. Hj. Sahriah Usman, M.Kes., Sp.KG. dan turut dihadiri oleh Ibu Bupati Sidrap, Hj. Haslindah Syaharuddin, S.Pd.</p><p>Hadir sebagai pembicara dalam kegiatan ini:</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Prof. Dr. Bahruddin Thalib, drg., M.Kes., Sp.Pros., Subsp.PKIKG(K), selaku Ketua Senat Akademik Unhas, yang memaparkan mengenai Program Magister dan Doktor Ilmu Kedokteran Gigi FKG Unhas.</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Prof. Dr. Sri Oktawati, drg., Sp.Perio., Subsp.R.P.I.D (K), yang menyampaikan informasi tentang Program Spesialis Kedokteran Gigi.</p><p>Peserta kegiatan terdiri dari anggota PDGI Cabang Sidrap serta para dokter gigi umum yang berasal dari wilayah Ajatappareng.</p><p>Antusiasme peserta terlihat dari aktifnya sesi diskusi dan tanya jawab terkait peluang studi lanjutan, sistem pembelajaran, hingga beasiswa pendidikan.</p><p>Turut hadir dalam rombongan FKG Unhas:</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Direktur RSGMP Unhas, Andi Tajrin, drg., M.Kes., Sp.BMM., Subsp.COM(K)<br>•&nbsp;&nbsp;&nbsp;&nbsp;Ketua Gugus Penjaminan Mutu dan Peningkatan Reputasi FKG Unhas, Prof. Dr. Asmawati, drg., M.Kes., PBO.<br>•&nbsp;&nbsp;&nbsp;&nbsp;Surijana Mappangara, drg., M.Kes., Sp.Perio (K)<br>•&nbsp;&nbsp;&nbsp;&nbsp;Supiaty, drg., M.Kes.<br>•&nbsp;&nbsp;&nbsp;&nbsp;Muliaty Yunus, drg., M.Kes, Sp.OF (K)., dan<br>•&nbsp;&nbsp;&nbsp;&nbsp;Dian Setiawaty, drg., Sp.Perio., Subsp.MP(K)</p><p>Laporan : Majid (Humas FKG Unhas)</p>",
    date: "28-Jan-2026",
    image: Blog1,
  },
];

export function DaftarBerita() {
  return (
    <>
      <PageHero
        title="Daftar Berita"
        subtitle="Seluruh Daftar Berita Fakultas Kedokteran Gigi"
      />
      <ContentSection>
        <BackLink to="/" />
        <div className="max-w-full">
          <div className="p-[20px] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] rounded-[10px] max-w-full">
            <div className="flex items-center gap-[10px] border-[2px] border-[rgba(0,0,0,0.2)] min-w-[200px] max-w-full p-[4px] px-[20px] rounded-[10px]">
              <i class="ri-search-line text-[20px]"></i>
              <input
                type="text"
                className="w-full py-[8px] border-0 focus:outline-none"
                placeholder="Cari Berita"
              />
            </div>
          </div>

          {/* Card Blog */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-[20px]">
            {blogData.map((item, index) => (
              <div
                key={item.id || index}
                className={`${index === 0 ? "lg:col-span-3 md:col-span-2" : "col-span-1"}`}
              >
                <div
                  className={`overflow-hidden w-full rounded-[20px] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] ${index === 0 ? "grid md:grid-cols-2 md:max-h-[354px]" : "flex flex-col"}`}
                >
                  <img src={item.image} className={`min-h-[192px] ${index === 0 ? "object-cover w-full md:h-full" : "object-cover"}`} alt="" />
                  <div
                    className={`${index === 0 ? "md:me-[30px] md:my-[40px] m-[20px]" : "m-[20px]"} space-y-4`}
                  >
                    <div className="flex items-center gap-[20px]">
                      <p className="px-[20px] py-[4px] text-white text-[12px] rounded-full bg-[#4a0000] max-w-max">
                        Featured
                      </p>
                      <p className="px-[20px] py-[4px] text-[#4a0000] text-[12px] rounded-full bg-[rgba(0,0,0,0.1)] max-w-max">
                        {item.category}
                      </p>
                    </div>
                    <div className="max-w-[620px] space-y-2">
                      <p className={`${index === 0 ? 'md:text-[26px] lg:text-[30px] text-[18px]' : 'text-[18px]'} font-bold leading-tight line-clamp-2`}>
                        {item.title}
                      </p>
                      <div
                        dangerouslySetInnerHTML={{ __html: item.conten }}
                        className={`${index === 0 ? 'lg:text-[16px] text-[14px] md:line-clamp-4 line-clamp-3' : 'text-[14px] line-clamp-3'} text-gray-700`}
                      ></div>
                      <p className="text-gray-600 text-[14px]">
                        <i class="ri-calendar-line text-[16px] me-[8px]"></i>
                        {item.date}
                      </p>
                    </div>
                    <div>
                      <Link className="text-[#4a0000]">
                        Baca Selengkapnya{" "}
                        <i class="ri-arrow-right-long-line ms-[8px]"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
    </>
  );
}
