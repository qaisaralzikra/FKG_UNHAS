import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiTwitterXLine,
} from "@remixicon/react";

// Gunakan string path langsung dari root '/' agar Vite meloloskan aset tanpa kalkulasi ulang di bundle JS
const logoUnhas = "/logo unhas.png";

function ColumnKiri() {
  return (
    <div className="flex flex-col col-span-1 items-start gap-4 lg:gap-[24px]">
      <div className="text-xl lg:text-[26px] font-bold leading-snug">
        <div className="flex items-center gap-3 lg:gap-[10px] w-[300px]">
          {/* OPTIMASI CLS: Ditambahkan width & height eksplisit untuk aspect-ratio reserving */}
          <img
            loading="lazy"
            src={logoUnhas}
            width={50}
            height={60}
            className="w-[30px] h-[38px] lg:w-[50px] lg:h-[60px] object-contain"
            alt="Logo Universitas Hasanuddin"
          />
          <div className="text-white leading-tight lg:leading-[20px] whitespace-nowrap">
            <h2 className="font-medium text-xs lg:text-[16px]">
              Fakultas Kedokteran Gigi
            </h2>
            <h1 className="font-semibold text-sm lg:text-[20px]">
              Universitas Hasanuddin
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:gap-[16px]">
        <div className="text-sm lg:text-base text-gray-200">
          <p>
            Jl. Perintis Kemerdekaan No.KM.10, Tamalanrea Indah, Kec.
            Tamalanrea,
          </p>
          <p>Kota Makassar, Sulawesi Selatan 90245</p>
          <p className="mt-1">
            <strong className="text-white">Email</strong>: info@dent.unhas.ac.id
          </p>
        </div>

        {/* Kontainer Media Sosial dengan Perbaikan Typo Class */}
        <div className="flex items-center gap-3 lg:gap-[16px]">
          <a href="https://dent.unhas.ac.id/" aria-label="Twitter X FKG Unhas">
            <div className="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 duration-300">
              <div className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] hover:w-[20px] hover:h-[20px] lg:hover:w-[24px] lg:hover:h-[24px] duration-300 flex items-center justify-center text-white">
                <RiTwitterXLine size="100%" />
              </div>
            </div>
          </a>

          <a href="https://dent.unhas.ac.id/" aria-label="Facebook FKG Unhas">
            <div className="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 duration-300">
              <div className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] hover:w-[20px] hover:h-[20px] lg:hover:w-[24px] lg:hover:h-[24px] duration-300 flex items-center justify-center text-white">
                <RiFacebookCircleLine size="100%" />
              </div>
            </div>
          </a>

          <a href="https://dent.unhas.ac.id/" aria-label="Instagram FKG Unhas">
            <div className="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 duration-300">
              <div className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] hover:w-[20px] hover:h-[20px] lg:hover:w-[24px] lg:hover:h-[24px] duration-300 flex items-center justify-center text-white">
                <RiInstagramLine size="100%" />
              </div>
            </div>
          </a>

          <a href="https://dent.unhas.ac.id/" aria-label="LinkedIn FKG Unhas">
            <div className="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full border-2 border-white flex items-center justify-center hover:bg-white/10 duration-300">
              <div className="w-[16px] h-[16px] lg:w-[20px] lg:h-[20px] hover:w-[20px] hover:h-[20px] lg:hover:w-[24px] lg:hover:h-[24px] duration-300 flex items-center justify-center text-white">
                <RiLinkedinBoxFill size="100%" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

function ColumnKanan() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[40px]">
      {/* Layanan Publik */}
      <div className="flex flex-col gap-4 lg:gap-[16px]">
        <h2 className="text-xl lg:text-[24px] font-bold">Layanan Publik</h2>
        <div className="text-sm lg:text-[16px] flex flex-col gap-y-3 lg:gap-y-[10px] text-gray-200">
          <a
            href="https://dent.unhas.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Keadilan dan Anti Diskriminasi
          </a>
          <a
            href="https://dent.unhas.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Layanan Terpadu
          </a>
          <a
            href="https://dent.unhas.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Aduan Unhas
          </a>
          <a
            href="https://dent.unhas.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LAPOR
          </a>
          <a
            href="https://dent.unhas.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            SIPPN
          </a>
        </div>
      </div>

      {/* Menu */}
      <div className="flex flex-col gap-4 lg:gap-[16px]">
        <h2 className="text-xl lg:text-[24px] font-bold">Menu</h2>
        <div className="text-sm lg:text-[16px] flex flex-col gap-y-3 lg:gap-y-[10px] text-gray-200">
          <a
            href="https://dent.unhas.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Kalender Akademik
          </a>
          <a
            href="https://dent.unhas.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Kemitraan
          </a>
          <a
            href="https://dent.unhas.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Akademik
          </a>
          <a
            href="https://dent.unhas.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Riset dan Inovasi
          </a>
          <a
            href="https://dent.unhas.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Green Campus
          </a>
          <a
            href="https://dent.unhas.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Laporan Keuangan
          </a>
        </div>
      </div>

      {/* Link Cepat */}
      <div className="flex flex-col gap-4 lg:gap-[16px]">
        <h2 className="text-xl lg:text-[24px] font-bold">Link Cepat</h2>
        <div className="text-sm lg:text-[16px] flex flex-col gap-y-3 lg:gap-y-[10px] text-gray-200">
          <a
            href="https://dent.unhas.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Perpustakaan
          </a>
          <a
            href="https://dent.unhas.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            SIKOLA
          </a>
          <a
            href="https://dent.unhas.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            APPS
          </a>
          <a
            href="https://dent.unhas.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Jurnal
          </a>
          <a
            href="https://dent.unhas.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Repositori
          </a>
          <a
            href="https://dent.unhas.ac.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Publikasi Videotron
          </a>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-[70px] bg-[#4A0000]">
      <div className="py-6 lg:py-[48px] text-white flex justify-between lg:flex-row flex-col gap-6 lg:gap-[20px] 2xl:gap-[40px]">
        <ColumnKiri />
        <ColumnKanan />
      </div>
      <div className="w-full h-[2px] bg-white opacity-[0.30]"></div>
      <div className="flex items-center justify-center text-white py-4 lg:py-[20px]">
        <p className="text-sm lg:text-base text-center">
          © Copyright <strong>IT FKG Support</strong> All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
