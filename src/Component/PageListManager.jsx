import React, { useState, useEffect } from "react";

export function PageListManager({
  searchTerm,
  onSearchChange,
  currentPage,
  totalPages,
  onPageChange,
  totalItems,
}) {
  const [localSearch, setLocalSearch] = useState(searchTerm);

  // 1. Sinkronisasi state lokal jika state parent diubah dari luar
  useEffect(() => {
    setLocalSearch(searchTerm);
  }, [searchTerm]);

  // 2. FITUR DEBOUNCE
  useEffect(() => {
    if (localSearch === searchTerm) return;

    const delayDebounceFn = setTimeout(() => {
      if (typeof onSearchChange === "function") {
        onSearchChange(localSearch);
      }
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
  }, [localSearch, onSearchChange, searchTerm]);

  // =========================================================================
  // LOGIKA RESPONSIVE PAGINATION (Mencegah Overflow Angka di Mobile)
  // =========================================================================
  const getPaginationRange = () => {
    const totalNumbers = 3; // Jumlah angka aktif yang mau ditampilkan di mobile
    const halfWay = Math.floor(totalNumbers / 2);

    if (totalPages <= 4) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    let start = Math.max(currentPage - halfWay, 1);
    let end = Math.min(start + totalNumbers - 1, totalPages);

    if (end === totalPages) {
      start = Math.max(end - totalNumbers + 1, 1);
    }

    const pages = [];

    // Halaman Pertama Selalu Muncul
    if (start > 1) {
      pages.push(1);
      if (start > 2) pages.push("...");
    }

    // Angka di tengah-tengah rentang aktif
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Halaman Terakhir Selalu Muncul
    if (end < totalPages) {
      if (end < totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPaginationRange();

  return (
    <div className="space-y-4 md:space-y-6 w-full">
      {/* 1. Bar Pencarian (Search Bar) */}
      <div className="p-4 md:p-[20px] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] rounded-[10px] w-full bg-white">
        <div className="flex items-center gap-[10px] border-[2px] border-[rgba(0,0,0,0.2)] w-full p-[4px] px-3 md:px-[20px] rounded-[10px] focus-within:border-[#4a0000] transition-colors">
          <i className="ri-search-line text-[18px] md:text-[20px] text-gray-400"></i>
          <input
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="w-full py-1.5 md:py-[8px] border-0 focus:outline-none text-black bg-transparent text-sm md:text-base"
            placeholder="Ketik untuk mencari berita..."
          />
          {localSearch && (
            <button
              onClick={() => {
                setLocalSearch("");
                onSearchChange("");
              }}
              className="text-gray-400 hover:text-gray-600 p-1"
              title="Hapus Pencarian"
            >
              <i className="ri-close-circle-fill text-[16px] md:text-[18px]"></i>
            </button>
          )}
        </div>

        {searchTerm && (
          <p className="text-xs md:text-sm text-gray-500 mt-2">
            Menampilkan hasil pencarian untuk:{" "}
            <span className="font-semibold text-[#4a0000]">"{searchTerm}"</span>{" "}
            ({totalItems} ditemukan)
          </p>
        )}
      </div>

      {/* 2. Navigasi Halaman (Pagination Control) */}
      {totalPages > 1 && (
        // PERBAIKAN: flex-wrap + penyesuaian gap agar aman di layar super kecil
        <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-2 mt-4 md:mt-6 w-full">
          {/* Tombol Previous */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            // PERBAIKAN: Di mobile teks hilang, hanya muncul ikon agar hemat ruang (px-3 md:px-4)
            className="p-2 px-3 md:px-4 rounded-lg border border-gray-200 text-xs md:text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 text-black bg-white flex items-center justify-center min-h-[36px]"
          >
            <i className="ri-arrow-left-s-line text-base md:align-middle md:me-1"></i>
            <span className="hidden md:inline">Prev</span>
          </button>

          {/* Angka Halaman */}
          <div className="flex items-center gap-1">
            {pageNumbers.map((number, idx) => {
              if (number === "...") {
                return (
                  <span
                    key={`ellipsis-${idx}`}
                    className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center text-gray-400 text-xs md:text-sm"
                  >
                    ...
                  </span>
                );
              }

              return (
                <button
                  key={`page-${number}`}
                  onClick={() => onPageChange(number)}
                  // PERBAIKAN: Mengecilkan ukuran tombol di layar mobile (w-8 h-8 menjadi md:w-9 md:h-9)
                  className={`w-8 h-8 md:w-9 md:h-9 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center justify-center ${
                    currentPage === number
                      ? "bg-[#4a0000] text-white shadow-md shadow-[#4a0000]/20"
                      : "border border-gray-200 hover:bg-gray-50 text-black bg-white"
                  }`}
                >
                  {number}
                </button>
              );
            })}
          </div>

          {/* Tombol Next */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            // PERBAIKAN: Di mobile teks hilang, hanya muncul ikon agar hemat ruang (px-3 md:px-4)
            className="p-2 px-3 md:px-4 rounded-lg border border-gray-200 text-xs md:text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 text-black bg-white flex items-center justify-center min-h-[36px]"
          >
            <span className="hidden md:inline">Next</span>
            <i className="ri-arrow-right-s-line text-base md:align-middle md:ms-1"></i>
          </button>
        </div>
      )}
    </div>
  );
}
