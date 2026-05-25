import { Link } from "react-router-dom"
import { PageHero } from "../Component/PageLayout"

export function NotFound() {
  return (
    <>
      <PageHero title="404" subtitle="Halaman tidak ditemukan" />
      <div className="px-4 sm:px-6 lg:px-[70px] py-16 flex flex-col items-center text-center">
        <i className="ri-error-warning-line text-8xl text-[#b00000]"></i>
        <h2 className="text-2xl font-semibold text-black mt-6">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-600 mt-2 max-w-[500px]">
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-[#b00000] text-white px-6 py-3 rounded-[10px] hover:bg-[#8a0000] transition-colors font-medium"
        >
          <i className="ri-arrow-left-line"></i>
          Kembali ke Beranda
        </Link>
      </div>
    </>
  )
}
