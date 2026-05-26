import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import apiService from "../../Services/api";
import { LoadingPage } from "../../Component/LoadingPage";
import { PageHeroDetailBlog, BackLink } from "../../Component/PageLayout";

export function DetailBerita() {
  // 1. Mengambil parameter slug dari URL router React
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    // 2. Mengirim slug ke API Service
    apiService
      .getDetailBerita(slug)
      .then((response) => {
        const result = response.data || response;
        setBerita(result.postDetail);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]); // Memicu re-fetch jika slug di URL berubah

  if (loading) return <LoadingPage />;
  if (error)
    return (
      <p className="text-center py-10 text-red-600">
        Gagal memuat berita: {error}
      </p>
    );
  if (!berita)
    return <p className="text-center py-10">Berita tidak ditemukan</p>;

  const handleCopyLink = async () => {
    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Gagal menyalin teks: ", err);
      alert("Gagal menyalin tautan, silakan salin manual dari address bar.");
    }
  };

  console.log(berita);

  return (
    <>
      {/* Gambar banner mengambil properti dari state berita */}
      <PageHeroDetailBlog img={berita.postImages} />

      <div className="relative z-10 max-w-full flex items-center justify-center -mt-[100px] md:-mt-[160px] pb-[80px] px-4">
        <div className="max-w-[900px] w-full">
          <div className="p-[24px] md:p-[48px] w-full bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)] rounded-[20px]">
            <BackLink to="/blog/daftar" />

            <div className="space-y-3">
              <div className="flex items-center gap-[16px] text-gray-500">
                <i className="ri-price-tag-3-line"></i>
                {/* Menampilkan kategori SDG berita */}
                <p>{berita.SdgKategori || "General"}</p>
              </div>

              <div>
                {/* DIUBAH: Menggunakan berita.PostTitle */}
                <h1 className="font-bold text-[24px] md:text-[36px] text-black leading-tight">
                  {berita.PostTitle}
                </h1>
              </div>

              <div className="flex items-center justify-between mb-[30px]">
                {/* DIUBAH: Menggunakan berita.PostDate */}
                <p className="text-gray-600 text-[14px]">
                  <i className="ri-calendar-line text-[16px] me-[8px]"></i>
                  {berita.PostDate}
                </p>

                <button
                  className="text-[#4a0000] cursor-pointer flex items-center transition-all duration-200 font-medium"
                  onClick={handleCopyLink}
                >
                  <i
                    className={`${copied ? "ri-check-line" : "ri-share-line"} text-[20px] me-[4px]`}
                  ></i>
                  <span>{copied ? "Tersalin!" : "Bagikan"}</span>
                </button>
              </div>

              <hr className="border-gray-200" />

              {/* DIUBAH: Menggunakan berita.PostContent */}
              <div
                className="text-[16px] md:text-[18px] text-gray-700 mt-[30px] leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: berita.PostContent }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
