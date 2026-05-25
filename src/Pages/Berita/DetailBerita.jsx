import { PageHeroDetailBlog, BackLink } from "../../Component/PageLayout";
import Blog1 from "../../assets/blog1.png";
import { useState } from "react";

const DataDetail = {
  id: 1,
  title:
    "Perkuat Kompetensi Klinik Mahasiswa, FKG Unhas Gelar Dental Laboratory Camp",
  category: "04. Quality Education",
  conten:
    "<p>Fakultas Kedokteran Gigi (FKG) Universitas Hasanuddin menggelar kegiatan Sosialisasi Program Studi Spesialis, Program Magister (S2) Ilmu Kedokteran Gigi, dan Program Doktor (S3) Ilmu Kedokteran Gigi pada Sabtu (28/6/2025), bertempat di Aula RSUD Nene Mallomo, Pangkajene, Kabupaten Sidrap, Sulawesi Selatan.</p><p>Kegiatan yang dimulai pukul 10.00 WITA ini bertujuan untuk memperluas akses dan informasi pendidikan lanjutan bagi dokter gigi di wilayah Ajatappareng, khususnya Kabupaten Sidrap.</p><p>Acara dibuka secara resmi oleh Direktur RSUD Nene Mallomo, drg. Hj. Sahriah Usman, M.Kes., Sp.KG. dan turut dihadiri oleh Ibu Bupati Sidrap, Hj. Haslindah Syaharuddin, S.Pd.</p><p>Hadir sebagai pembicara dalam kegiatan ini:</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Prof. Dr. Bahruddin Thalib, drg., M.Kes., Sp.Pros., Subsp.PKIKG(K), selaku Ketua Senat Akademik Unhas, yang memaparkan mengenai Program Magister dan Doktor Ilmu Kedokteran Gigi FKG Unhas.</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Prof. Dr. Sri Oktawati, drg., Sp.Perio., Subsp.R.P.I.D (K), yang menyampaikan informasi tentang Program Spesialis Kedokteran Gigi.</p><p>Peserta kegiatan terdiri dari anggota PDGI Cabang Sidrap serta para dokter gigi umum yang berasal dari wilayah Ajatappareng.</p><p>Antusiasme peserta terlihat dari aktifnya sesi diskusi dan tanya jawab terkait peluang studi lanjutan, sistem pembelajaran, hingga beasiswa pendidikan.</p><p>Turut hadir dalam rombongan FKG Unhas:</p><p>•&nbsp;&nbsp;&nbsp;&nbsp;Direktur RSGMP Unhas, Andi Tajrin, drg., M.Kes., Sp.BMM., Subsp.COM(K)<br>•&nbsp;&nbsp;&nbsp;&nbsp;Ketua Gugus Penjaminan Mutu dan Peningkatan Reputasi FKG Unhas, Prof. Dr. Asmawati, drg., M.Kes., PBO.<br>•&nbsp;&nbsp;&nbsp;&nbsp;Surijana Mappangara, drg., M.Kes., Sp.Perio (K)<br>•&nbsp;&nbsp;&nbsp;&nbsp;Supiaty, drg., M.Kes.<br>•&nbsp;&nbsp;&nbsp;&nbsp;Muliaty Yunus, drg., M.Kes, Sp.OF (K)., dan<br>•&nbsp;&nbsp;&nbsp;&nbsp;Dian Setiawaty, drg., Sp.Perio., Subsp.MP(K)</p><p>Laporan : Majid (Humas FKG Unhas)</p>",
  date: "07-Jan-2026",
  image: Blog1,
};
export function DetailBerita() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      // 1. Ambil URL halaman aktif saat ini secara dinamis
      const currentUrl = window.location.href;

      // 2. Jalankan fungsi copy ke clipboard browser
      await navigator.clipboard.writeText(currentUrl);

      // 3. Set state copied menjadi true untuk feedback visual
      setCopied(true);

      // 4. Kembalikan teks ke "Bagikan" setelah 2 detik
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Gagal menyalin teks: ", err);
      alert("Gagal menyalin tautan, silakan salin manual dari address bar.");
    }
  };
  return (
    <>
      <PageHeroDetailBlog img={DataDetail.image} />

      {/* 1. Ubah my-[80px] menjadi -mt-[100px] (margin top negatif) untuk menarik konten ke atas.
    2. Tambahkan pb-[80px] agar bagian bawah tetap memiliki ruang (ganti dari my).
    3. Tambahkan relative dan z-10 supaya box putih ini berada di atas komponen Hero.
  */}
      <div className="relative z-10 max-w-full flex items-center justify-center -mt-[100px] md:-mt-[160px] pb-[80px] px-4">
        <div className="max-w-[900px] w-full">
          <div className="p-[24px] md:p-[48px] w-full bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)] rounded-[20px]">
            <BackLink to="/blog/daftar" />

            <div className="space-y-3">
              <div className="flex items-center gap-[16px]">
                <i className="ri-price-tag-3-line"></i>
                <p>{DataDetail.category}</p>
              </div>

              <div>
                {/* Responsif text heading agar aman di mobile */}
                <h1 className="font-bold text-[24px] md:text-[36px]">
                  {DataDetail.title}
                </h1>
              </div>

              <div className="flex items-center justify-between mb-[30px]">
                <p className="text-gray-600 text-[14px]">
                  <i className="ri-calendar-line text-[16px] me-[8px]"></i>
                  {DataDetail.date}
                </p>
                <button
                  className="text-[#4a0000] cursor-pointer flex items-center transition-all duration-200"
                  onClick={handleCopyLink}
                >
                  <i
                    className={`${copied ? "ri-check-line" : "ri-share-line"} text-[20px] me-[4px]`}
                  ></i>
                  <span>{copied ? "Tersalin!" : "Bagikan"}</span>
                </button>
              </div>

              <hr />

              <div
                className="text-[16px] md:text-[18px] text-gray-600 mt-[30px]"
                dangerouslySetInnerHTML={{ __html: DataDetail.conten }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
