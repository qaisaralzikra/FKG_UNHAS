import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";

export function VisiMisi() {
  return (
    <>
      <PageHero
        title="Visi & Misi"
        subtitle="Visi, misi, dan tujuan FKG Unhas"
      />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-[900px] grid grid-cols-1 gap-8">
          <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
            <div className="w-[60px] h-[60px] rounded-full bg-[#b00000] flex items-center justify-center mb-4">
              <i className="ri-space-ship-line text-2xl text-white"></i>
            </div>
            <h3 className="font-semibold text-2xl text-black mb-3">Visi</h3>
            <p className="text-gray-700 text-base lg:text-[18px] leading-relaxed">
              Menjadi pusat pengembangan ilmu pengetahuan, teknologi, dan
              penelitian kedokteran gigi yang mampu bersaing di tingkat nasional
              dan internasional dalam bidang pendidikan, penelitian, dan
              pengabdian kepada masyarakat yang berbasis pada Benua Maritim
              Indonesia.
            </p>
          </div>
          <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
            <div className="w-[60px] h-[60px] rounded-full bg-[#b00000] flex items-center justify-center mb-4">
              <i className="ri-eye-line text-2xl text-white"></i>
            </div>
            <h3 className="font-semibold text-2xl text-black mb-3">Misi</h3>
            <ul className="text-gray-700 text-base lg:text-[18px] space-y-3 list-disc list-inside leading-relaxed">
              <li>
                Menyelenggarakan pembelajaran yang berkualitas untuk
                menghasilkan intelektual yang mandiri dan unggul di tingkat
                nasional serta mampu bersaing di tingkat internasional.
              </li>
              <li>
                Mengembangkan ilmu pengetahuan, teknologi dan seni di bidang
                Kedokteran Gigi.
              </li>
              <li>
                Menghasilkan dan melaksanakan penelitian dan pengabdian yang
                unggul di bidang Kedokteran Gigi yang bermanfaat bagi masyarakat.
              </li>
              <li>
                Menyelenggarakan tata kelola fakultas yang modern dan berbasis
                digital.
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
            <div className="w-[60px] h-[60px] rounded-full bg-[#b00000] flex items-center justify-center mb-4">
              <i className="ri-star-line text-2xl text-white"></i>
            </div>
            <h3 className="font-semibold text-2xl text-black mb-3">Tujuan</h3>
            <ul className="text-gray-700 text-base lg:text-[18px] space-y-3 list-disc list-inside leading-relaxed">
              <li>
                Menghasilkan Tenaga Kedokteran Gigi yang berkualitas,
                profesional dan bertanggung jawab sesuai dengan Karakter Sarjana
                Maritim.
              </li>
              <li>
                Membangun karakter peneliti bagi dosen dan mahasiswa serta
                kerjasama keduanya dengan memberikan dukungan maksimal dalam
                setiap keikutsertaannya dalam kompetisi karya ilmiah.
              </li>
              <li>
                Menerapkan dan Mendiseminasikan Ilmu Kedokteran Gigi untuk
                kepentingan masyarakat.
              </li>
              <li>
                Menciptakan tata kelola fakultas yang efektif dan efisien.
              </li>
            </ul>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
