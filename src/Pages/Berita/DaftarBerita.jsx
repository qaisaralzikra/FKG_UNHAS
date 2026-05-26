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
  }, [currentPage, searchTerm]);

  // =========================================================================
  // FUNGSI INI YANG TADI HILANG / BELUM DICIPTAKAN:
  // =========================================================================
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1); // Reset kembali ke halaman 1 setiap kali kata kunci pencarian berubah
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
            onSearchChange={handleSearchChange} // <-- Sekarang handleSearchChange sudah aman terbaca
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalItems={totalItems}
          />

          {/* Card Blog List */}
          {data.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[40px] mt-[20px]">
              {data.map((item, index) => {
                const isCurrentHovered = hoveredId === item.PostID;

                // Di halaman manapun, item pertama di page tersebut (index 0) akan selalu menjadi wide card
                const isFeaturedItem = index === 0;

                return (
                  <Link
                    onMouseEnter={() => setHoveredId(item.PostID)}
                    onMouseLeave={() => setHoveredId(null)}
                    to={`/blog/detail/${item.PostSlug}`}
                    key={item.PostID || index}
                    className={`group ${isFeaturedItem ? "lg:col-span-3 md:col-span-2" : "col-span-1"}`}
                  >
                    <div
                      className={`overflow-hidden w-full rounded-[20px] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] bg-white ${
                        isFeaturedItem
                          ? "grid md:grid-cols-2 md:max-h-[354px]"
                          : "flex flex-col h-full"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <img
                          src={`https://dent.unhas.ac.id/${item.postImages}`}
                          className={`min-h-[192px] w-full transition-transform duration-300 ${
                            isCurrentHovered ? "scale-105" : "scale-100"
                          } ${isFeaturedItem ? "object-cover md:h-full" : "object-cover max-h-[192px]"}`}
                          alt={item.PostTitle}
                        />
                      </div>

                      <div
                        className={`${isFeaturedItem ? "md:mx-[30px] md:my-[40px] m-[20px]" : "m-[20px] flex flex-col justify-between flex-grow"} space-y-4`}
                      >
                        <div className="space-y-4">
                          <div className="flex items-center gap-[20px]">
                            <p className="px-[20px] py-[4px] text-white text-[12px] rounded-full bg-[#4a0000] max-w-max">
                              Featured
                            </p>
                            <p className="px-[20px] py-[4px] text-[#4a0000] text-[12px] rounded-full bg-[rgba(0,0,0,0.1)] max-w-max">
                              {item.sdgKategori ? item.sdgKategori : "04. Quality Education"}
                            </p>
                          </div>
                          <div className="max-w-[620px] space-y-2">
                            <p className={`${isCurrentHovered ? "text-[#4a0000]" : ""} ${isFeaturedItem ? "md:text-[26px] lg:text-[30px] text-[18px]" : "text-[18px]"} font-bold leading-tight line-clamp-2`}>
                              {item.PostTitle}
                            </p>
                            <div
                              dangerouslySetInnerHTML={{ __html: item.PostContent }}
                              className={`${isFeaturedItem ? "lg:text-[16px] text-[14px] md:line-clamp-4 line-clamp-3" : "text-[14px] line-clamp-3"} text-gray-700`}
                            ></div>
                          </div>
                        </div>
                        <div className="space-y-2 pt-2">
                          <p className="text-gray-600 text-[14px]">
                            <i className="ri-calendar-line text-[16px] me-[8px]"></i>
                            {item.PostDate}
                          </p>
                          <div className="text-[#4a0000] flex items-center font-medium">
                            Baca Selengkapnya{" "}
                            <i className="ri-arrow-right-long-line ms-[8px] inline-block transition-transform duration-300 group-hover:translate-x-[6px]"></i>
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