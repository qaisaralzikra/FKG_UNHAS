import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout"

export function SelayangPandang() {
  return (
    <>
      <PageHero title="Selayang Pandang" subtitle="Gambaran umum Fakultas Kedokteran Gigi Universitas Hasanuddin" />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-[900px] prose prose-lg text-gray-700">
          <p className="text-base lg:text-[18px] leading-relaxed">
            Fakultas Kedokteran Gigi (FKG) Universitas Hasanuddin merupakan salah satu fakultas terkemuka di Indonesia dalam bidang pendidikan kedokteran gigi. Berdiri sejak tahun 1983, FKG Unhas telah melahirkan ribuan dokter gigi yang berkompeten dan berdedikasi tinggi.
          </p>
          <p className="text-base lg:text-[18px] leading-relaxed mt-4">
            FKG Unhas berkomitmen untuk menjadi pusat pengembangan ilmu pengetahuan, teknologi, dan penelitian kedokteran gigi yang mampu bersaing secara nasional dan internasional dalam bidang pendidikan, penelitian, dan pengabdian kepada masyarakat yang berbasis pada Benua Maritim Indonesia.
          </p>
          <p className="text-base lg:text-[18px] leading-relaxed mt-4">
            Dengan dukungan tenaga pengajar yang berkualitas dan fasilitas yang memadai, FKG Unhas terus berupaya meningkatkan kualitas pendidikan dan pelayanan kesehatan gigi dan mulut kepada masyarakat. Fakultas ini memiliki berbagai program studi mulai dari jenjang Sarjana, Profesi, Magister, Doktor, hingga Program Pendidikan Dokter Gigi Spesialis (PPDGS).
          </p>
          <div className="mt-8 p-6 bg-[#f8f0f0] rounded-[20px] border border-[#e0c0c0]">
            <h3 className="font-semibold text-xl text-[#b00000] mb-3">Informasi Kontak</h3>
            <p className="text-base"><strong>Alamat:</strong> Jl. Perintis Kemerdekaan No.KM.10, Tamalanrea Indah, Kec. Tamalanrea, Kota Makassar, Sulawesi Selatan 90245</p>
            <p className="text-base mt-2"><strong>Email:</strong> info@dent.unhas.ac.id</p>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
