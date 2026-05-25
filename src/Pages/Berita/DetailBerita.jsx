import { PageHeroDetailBlog, BackLink } from "../../Component/PageLayout";
import Blog1 from "../../assets/blog1.png";

const DataDetail = [
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
];
export function DetailBerita() {
  return (
    <>
      <PageHeroDetailBlog img={DataDetail[0].image} />
      {/* <BackLink to="/blog/daftar" /> */}
      <div className="max-w-[900px]">
        <div className="p-[48px] bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)] rounded-[20px]"></div>
      </div>
    </>
  );
}
