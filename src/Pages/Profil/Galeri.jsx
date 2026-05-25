import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";

const photos = [
  { label: "Kegiatan Akademik", icon: "ri-graduation-cap-line" },
  { label: "Penelitian dan Laboratorium", icon: "ri-flask-line" },
  { label: "Pengabdian Masyarakat", icon: "ri-heart-pulse-line" },
  { label: "Kemahasiswaan", icon: "ri-user-community-line" },
  { label: "Fasilitas Kampus", icon: "ri-building-line" },
  { label: "Kerjasama Internasional", icon: "ri-earth-line" },
];

import GaleryIMG from "../../assets/galery.jpg";

export function Galeri() {
  return (
    <>
      <PageHero
        title="Galeri"
        subtitle="Galeri foto dan video kegiatan FKG Unhas"
      />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-[900px]">
          <p className="text-gray-600 text-base lg:text-[18px] mb-8">
            Dokumentasi kegiatan dan momen-momen penting di lingkungan Fakultas
            Kedokteran Gigi Universitas Hasanuddin.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {photos.map((p, i) => (
              <div
                key={i}
                className="bg-white h-48 rounded-[16px] shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow"
              >
                <i className={`${p.icon} text-5xl text-[#b00000]`}></i>
                <p className="font-medium text-gray-700">{p.label}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 p-6 h-[450px] rounded-[16px] border-gray-300 text-center relative overflow-hidden">
            {/* PERBAIKAN: Mengganti z-1 menjadi relative z-10 pada wrapper utama teks */}
            <div className="relative z-10 text-white flex flex-col items-center justify-end h-full">
              <a
                href="https://regpmb.unhas.ac.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#b00000] text-white px-6 py-3 rounded-[10px] hover:bg-[#8a0000] transition-colors font-medium"
              >
                Buka Galeri Lengkap <i className="ri-external-link-line"></i>
              </a>
            </div>

            {/* Gambar tetap berada di background dengan z-0 */}
            <img
              src={GaleryIMG}
              className="z-0 absolute top-0 left-0 w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </ContentSection>
    </>
  );
}
