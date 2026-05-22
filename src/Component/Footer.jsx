function ColumnKiri() {
  return (
    <div className="flex flex-col col-span-1 items-start gap-4 lg:gap-[24px]">
      <div className="text-xl lg:text-[26px] font-bold leading-snug">
        <h1>Fakultas Kedokteran Gigi</h1>
        <h1>Universitas Hasanuddin</h1>
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
    <div className="col-span-1">
      <div className="flex flex-col gap-4 lg:gap-[20px]">
        <h1 className="text-xl lg:text-[24px] font-semibold">Quick Links</h1>
        <div className="flex flex-col gap-2 lg:gap-[8px]">
          <div className="text-sm lg:text-[16px] font-semibold flex flex-wrap gap-x-4 gap-y-1 lg:gap-x-[20px]">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              UNHAS
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Apps
            </a>
            <a
              href="http://"
              className="whitespace-nowrap"
              target="_blank"
              rel="noopener noreferrer"
            >
              Portal Mahasiswa
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Berita
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Acara
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Jadwal
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Logbook
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              ItemBank
            </a>
          </div>
          <a
            href="http://"
            className="text-sm lg:text-[16px] font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zona Integritas
          </a>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="px-4 sm:px-6 lg:px-[70px] bg-[#4A0000]">
      <div className="py-6 lg:py-[48px] text-white grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[20px] 2xl:gap-[40px]">
        <ColumnKiri />
        <ColumnKanan />
      </div>
      <div className='w-full h-[2px] bg-white opacity-[0.30]'></div>
      <div className="flex items-center justify-center text-white py-4 lg:py-[20px]">
        <p className="text-sm lg:text-base text-center">© Copyright <strong>IT FKG Support</strong> All Rights Reserved</p>
      </div>
    </div>
  );
}
