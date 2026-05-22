function ColumnKiri() {
  return (
    <div className="flex flex-col col-span-1 items-start gap-[24px]">
      <div className="text-[26px] font-bold leading-snug">
        <h1>Fakultas Kedokteran Gigi</h1>
        <h1>Universitas Hasanuddin</h1>
      </div>
      <div className="flex flex-col gap-[16px]">
        <div>
          <p>
            Jl. Perintis Kemerdekaan No.KM.10, Tamalanrea Indah, Kec.
            Tamalanrea,
          </p>
          <p>Kota Makassar, Sulawesi Selatan 90245</p>
          <p>
            <strong>Email</strong>: info@dent.unhas.ac.id
          </p>
        </div>
        <div className="flex items-center gap-[16px]">
          <a href="">
            <div className="w-[50px] h-[50px] rounded-full border-[2px] border-white flex items-center justify-center text-[20px] hover:text-[24px] duration-[0.3s]">
              <i class="ri-twitter-x-line"></i>
            </div>
          </a>
          <a href="">
            <div className="w-[50px] h-[50px] rounded-full border-[2px] border-white flex items-center justify-center text-[20px] hover:text-[24px] duration-[0.3s]">
              <i class="ri-facebook-circle-line"></i>
            </div>
          </a>
          <a href="">
            <div className="w-[50px] h-[50px] rounded-full border-[2px] border-white flex items-center justify-center text-[20px] hover:text-[24px] duration-[0.3s]">
              <i class="ri-instagram-line"></i>
            </div>
          </a>
          <a href="">
            <div className="w-[50px] h-[50px] rounded-full border-[2px] border-white flex items-center justify-center text-[20px] hover:text-[24px] duration-[0.3s]">
              <i class="ri-linkedin-box-fill"></i>
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
      <div className="flex flex-col gap-[20px]">
        <h1 className="text-[24px] font-semibold">Quick Links</h1>
        <div className="flex flex-col gap-[8px]">
          <div className="text-[16px] font-semibold flex items-center gap-[20px]">
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
            <br />
          </div>
          <a
            href="http://"
            className="text-[16px] font-semibold"
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
    <div className="px-[70px] bg-[#4A0000]">
      <div className="py-[48px] text-white grid grid-cols-2 2xl:gap-[40px] xl:gap-[20px]">
        <ColumnKiri />
        <ColumnKanan />
      </div>
      <div className='w-full h-[2px] bg-white opacity-[0.30]'></div>
      <div className="flex items-center justify-center text-white py-[20px]">
        <p>© Copyright <strong>IT FKG Support</strong> All Rights Reserved</p>
      </div>
    </div>
  );
}
