import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import apiService from "../../Services/api";
import { LoadingPage } from "../../Component/LoadingPage";
import { PageListManager } from "../../Component/PageListManager";
import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";

export function DaftarBerita() {
  const [hoveredId, setHoveredId] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(7);

  useEffect(() => {
    setLoading(true);
    apiService
      .getDaftarBerita(currentPage, itemsPerPage, searchTerm)
      .then((response) => {
        const result = response.data || response;

        setData(result.postsList || []);

        if (result) {
          setTotalPages(result.totalPages || 1);
          setItemsPerPage(result.perPage || 7);
          setTotalItems(result.totalPosts || 0);
        }

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [currentPage, searchTerm, itemsPerPage]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1); 
  };

  if (loading) return <LoadingPage />;
  if (error) return <p className="text-center py-10 text-red-600">Gagal memuat data: {error}</p>;

  return (
    <>
      <PageHero
        title="Daftar Berita"
        subtitle="Seluruh Daftar Berita Fakultas Kedokteran Gigi"
      />
      <ContentSection>
        <BackLink to="/" />
        <div className="max-w-full space-y-6">
          <PageListManager
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalItems={totalItems}
          />

          {/* Card Blog List */}
          {data.length > 0 ? (
            // PERBAIKAN: Mengatur grid responsive dari 1 kolom (mobile), 2 kolom (tablet), ke 3 kolom (desktop)
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-[40px] mt-[20px]">
              {data.map((item, index) => {
                const isCurrentHovered = hoveredId === item.PostID;
                const isFeaturedItem = index === 0;

                return (
                  <Link
                    onMouseEnter={() => setHoveredId(item.PostID)}
                    onMouseLeave={() => setHoveredId(null)}
                    to={`/blog/detail/${item.PostSlug}`}
                    key={item.PostID || index}
                    className={`group ${isFeaturedItem ? "lg:col-span-3 md:col-span-2 col-span-1" : "col-span-1"}`}
                  >
                    <div
                      // PERBAIKAN: Mengubah max-h menjadi md:max-h agar versi mobile tingginya bisa menyesuaikan konten otomatis
                      className={`overflow-hidden w-full rounded-[20px] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] bg-white transition-all duration-300 h-full ${
                        isFeaturedItem
                          ? "grid grid-cols-1 md:grid-cols-2 md:max-h-[380px]"
                          : "flex flex-col"
                      }`}
                    >
                      <div className="overflow-hidden w-full h-full">
                        <img
                          src={`https://dent.unhas.ac.id/${item.postImages}`}
                          className={`w-full transition-transform duration-300 ${
                            isCurrentHovered ? "scale-105" : "scale-100"
                          } ${isFeaturedItem ? "object-cover h-[220px] md:h-full w-full" : "object-cover h-[200px] w-full"}`}
                          alt={item.PostTitle}
                        />
                      </div>

                      <div
                        // PERBAIKAN: Mengatur margin dan padding flexbox supaya tidak overflow di layar kecil
                        className={`p-5 md:p-6 lg:p-8 flex flex-col justify-between flex-grow space-y-4`}
                      >
                        <div className="space-y-3">
                          {/* Tag Kategori */}
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-3 py-1 text-white text-[11px] font-semibold rounded-full bg-[#4a0000]">
                              Featured
                            </span>
                            <span className="px-3 py-1 text-[#4a0000] text-[11px] font-semibold rounded-full bg-gray-100 line-clamp-1">
                              {item.sdgKategori ? item.sdgKategori : "04. Quality Education"}
                            </span>
                          </div>

                          {/* Judul & Konten */}
                          <div className="space-y-2">
                            <h3 className={`${isCurrentHovered ? "text-[#4a0000]" : ""} ${isFeaturedItem ? "md:text-[22px] lg:text-[26px] text-[18px]" : "text-[18px]"} font-bold leading-tight line-clamp-2`}>
                              {item.PostTitle}
                            </h3>
                            <div
                              dangerouslySetInnerHTML={{ __html: item.PostContent }}
                              className={`text-[14px] text-gray-600 leading-relaxed ${isFeaturedItem ? "md:line-clamp-3 lg:line-clamp-4 line-clamp-2" : "line-clamp-2"}`}
                            ></div>
                          </div>
                        </div>

                        {/* Footer Card */}
                        <div className="space-y-2 pt-2 border-t border-gray-50">
                          <p className="text-gray-500 text-[13px] flex items-center">
                            <i className="ri-calendar-line text-[15px] me-2"></i>
                            {item.PostDate}
                          </p>
                          <div className="text-[#4a0000] flex items-center text-[14px] font-semibold">
                            Baca Selengkapnya
                            <i className="ri-arrow-right-long-line ms-2 inline-block transition-transform duration-300 group-hover:translate-x-1"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-[10px]">
              <i className="ri-file-search-line text-[48px] text-gray-300 block mb-2"></i>
              <p className="text-gray-500 font-medium">Berita tidak ditemukan</p>
            </div>
          )}
        </div>
      </ContentSection>
    </>
  );
}