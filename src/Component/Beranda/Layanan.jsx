function Card({ data }) {
  return (
    <div className="grid grid-cols-3 xl:gap-[20px] 2xl:gap-[40px] mt-[32px] text-black text-[20px]">
      {data.map((item) => (
        <div
          key={item.id}
          className="col-span-1 w-[366px] h-[298px] bg-white rounded-[20px] p-[10px] flex items-start flex-col gap-[8px]"
        >
          <i className="ri-tooth-line text-[53px] text-[#b00000]"></i>
          <p className="w-[291px] text-[22px] h-[132px]">{item.title}</p>
          <a href={item.url} className="hover:text-[#b00000] duration-[0.4s]">
            Lihat <i className="ri-arrow-right-long-line"></i>
          </a>
        </div>
      ))}
    </div>
  );
}

export function Layanan() {
  const data = [
    {
      id: 1,
      title:
        "Permohonan Surat Keterangan Aktif Kuliah dan Surat Rekomendasi Beasiswa",
      url: "",
    },
    {
      id: 2,
      title:
        "Permohonan Surat Izin Penelitian dan Surat Rekomendasi Etik Penelitian",
      url: "",
    },
    {
      id: 3,
      title: "Surat Rekomendasi Magang",
      url: "",
    },
    {
      id: 4,
      title: "Layanan E-Library",
      url: "",
    },
    {
      id: 5,
      title: "Jurnal Ilmu Dentomaksilofasial",
      url: "",
    },
    {
      id: 6,
      title: "Pusat Bahasa Universitas",
      url: "",
    },
    {
      id: 7,
      title: "Jurnal Laporan Kasus Kedokteran Gigi",
      url: "",
    },
    {
      id: 8,
      title: "Layanan Penelitian Frontiers Dental Laboratory Research",
      url: "",
    },
    {
      id: 9,
      title: "Surat Keterangan Tidak Menerima Beasiswa",
      url: "",
    },
    {
      id: 10,
      title: "Asrama Mahasiswa",
      url: "",
    },
    {
      id: 11,
      title: "Rumah Sakit Gigi Universitas Hasanuddin (RSGMP)",
      url: "",
    },
    {
      id: 12,
      title: "Rumah Sakit Universitas Hasanuddin (RSP)",
      url: "",
    },
    {
      id: 13,
      title: "Pusat Pengembangan Karir",
      url: "",
    },
    {
      id: 14,
      title: "Perpustakaan Universitas Hasanuddin",
      url: "",
    },
  ];
  return (
    <div className="w-full bg-[#4A0000] px-[70px] py-[64px]">
      <div className="text-white">
        <h1 className="font-semibold text-[32px]">Layanan Mahasiswa</h1>
        <Card data={data} />
      </div>
    </div>
  );
}
