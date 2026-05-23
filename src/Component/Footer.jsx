import logo from "../../public/logo unhas.png";

function ColumnKiri() {
  return (
    <div className="flex flex-col col-span-1 items-start gap-4 lg:gap-[24px]">
      <div className="text-xl lg:text-[26px] font-bold leading-snug">
        <div className="flex items-center gap-3 lg:gap-[10px] w-[300px]">
          <img
            src={logo}
            className="w-[30px] h-[38px] lg:w-[50px] lg:h-[60px]"
            alt=""
          />
          <div
            className={`text-white leading-tight lg:leading-[20px] whitespace-nowrap`}
          >
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
        <div className="text-sm lg:text-base">
          <p>
            Jl. Perintis Kemerdekaan No.KM.10, Tamalanrea Indah, Kec.
            Tamalanrea,
          </p>
          <p>Kota Makassar, Sulawesi Selatan 90245</p>
          <p>
            <strong>Email</strong>: info@dent.unhas.ac.id
          </p>
        </div>
        <div className="flex items-center gap-3 lg:gap-[16px]">
          <a href="">
            <div className="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full border-2 border-white flex items-center justify-center text-base lg:text-[20px] hover:text-xl lg:hover:text-[24px] duration-[0.3s]">
              <i className="ri-twitter-x-line"></i>
            </div>
          </a>
          <a href="">
            <div className="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full border-2 border-white flex items-center justify-center text-base lg:text-[20px] hover:text-xl lg:hover:text-[24px] duration-[0.3s]">
              <i className="ri-facebook-circle-line"></i>
            </div>
          </a>
          <a href="">
            <div className="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full border-2 border-white flex items-center justify-center text-base lg:text-[20px] hover:text-xl lg:hover:text-[24px] duration-[0.3s]">
              <i className="ri-instagram-line"></i>
            </div>
          </a>
          <a href="">
            <div className="w-10 h-10 lg:w-[50px] lg:h-[50px] rounded-full border-2 border-white flex items-center justify-center text-base lg:text-[20px] hover:text-xl lg:hover:text-[24px] duration-[0.3s]">
              <i className="ri-linkedin-box-fill"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

function ColumnKanan() {
  return (
    <div className="grid md:grid-cols-3 gap-[40px] md:gap-[40px]">
      <div className="flex flex-col gap-4 lg:gap-[16px]">
        <h1 className="text-xl lg:text-[24px] font-bold">Layanan Publik</h1>
        <div className="flex flex-col gap-2 lg:gap-[8px]">
          <div className="text-sm lg:text-[16px] flex flex-col gap-y-4 gap-y-1 lg:gap-y-[10px]">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              keadilan dan Anti Diskriminasi
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Layanan Terpadu
            </a>
            <a
              href="http://"
              className="whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aduan Unhas
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              LAPOR
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              SIPPN
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:gap-[16px]">
        <h1 className="text-xl lg:text-[24px] font-bold">Menu</h1>
        <div className="flex flex-col gap-2 lg:gap-[8px]">
          <div className="text-sm lg:text-[16px] flex flex-col gap-y-4 gap-y-1 lg:gap-y-[10px]">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Kalender Akademik
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Kemitraan
            </a>
            <a
              href="http://"
              className="whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              Akademik
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Riset dan Inovasi
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Green Campuss
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Laporan Keuangan
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:gap-[16px]">
        <h1 className="text-xl lg:text-[24px] font-bold">Link Cepat</h1>
        <div className="flex flex-col gap-2 lg:gap-[8px]">
          <div className="text-sm lg:text-[16px] flex flex-col gap-y-4 gap-y-1 lg:gap-y-[10px]">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Perpustakaan
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              SIKOLA
            </a>
            <a
              href="http://"
              className="whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              APPS
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Jurnal
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Repositori
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Publikasi Videotron
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="px-4 sm:px-6 lg:px-[70px] bg-[#4A0000]">
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
    </div>
  );
}
