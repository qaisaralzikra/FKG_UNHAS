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

  // 1. Sinkronisasi state lokal jika state parent diubah dari luar (misal saat klik tombol X)
  useEffect(() => {
    setLocalSearch(searchTerm);
  }, [searchTerm]);

  // 2. FITUR DEBOUNCE: Menunggu user berhenti mengetik selama 1.5 - 2 detik
  useEffect(() => {
    if (localSearch === searchTerm) return;

    const delayDebounceFn = setTimeout(() => {
      // Tambahkan validasi: Hanya jalankan jika onSearchChange benar-benar sebuah fungsi
      if (typeof onSearchChange === "function") {
        onSearchChange(localSearch);
      }
    }, 1500);

    return () => clearTimeout(delayDebounceFn);
  }, [localSearch, onSearchChange, searchTerm]);

  // Membuat array angka halaman (misal: [1, 2, 3])
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="space-y-6 w-full">
      {/* 1. Bar Pencarian (Search Bar) */}
      <div className="p-[20px] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] rounded-[10px] w-full bg-white">
        <div className="flex items-center gap-[10px] border-[2px] border-[rgba(0,0,0,0.2)] w-full p-[4px] px-[20px] rounded-[10px] focus-within:border-[#4a0000] transition-colors">
          <i className="ri-search-line text-[20px] text-gray-400"></i>
          <input
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)} // Mengetik sangat lancar di sini
            className="w-full py-[8px] border-0 focus:outline-none text-black bg-transparent"
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
              <i className="ri-close-circle-fill text-[18px]"></i>
            </button>
          )}
        </div>

        {searchTerm && (
          <p className="text-sm text-gray-500 mt-2">
            Menampilkan hasil pencarian untuk:{" "}
            <span className="font-semibold text-[#4a0000]">"{searchTerm}"</span>{" "}
            ({totalItems} ditemukan)
          </p>
        )}
      </div>

      {/* 2. Navigasi Halaman (Pagination Control) - Hanya muncul jika total halaman > 1 */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {/* Tombol Previous */}
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 px-4 rounded-lg border border-gray-200 text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 text-black bg-white"
          >
            <i className="ri-arrow-left-s-line align-middle me-1"></i> Prev
          </button>

          {/* Angka Halaman */}
          <div className="flex items-center gap-1">
            {pageNumbers.map((number) => (
              <button
                key={number}
                onClick={() => onPageChange(number)}
                className={`w-9 h-9 rounded-lg text-sm font-semibold transition-all ${
                  currentPage === number
                    ? "bg-[#4a0000] text-white shadow-md shadow-[#4a0000]/20"
                    : "border border-gray-200 hover:bg-gray-50 text-black bg-white"
                }`}
              >
                {number}
              </button>
            ))}
          </div>

          {/* Tombol Next */}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 px-4 rounded-lg border border-gray-200 text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 text-black bg-white"
          >
            Next <i className="ri-arrow-right-s-line align-middle ms-1"></i>
          </button>
        </div>
      )}
    </div>
  );
}
