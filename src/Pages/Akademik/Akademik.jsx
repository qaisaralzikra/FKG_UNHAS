import { Routes, Route, Link, useParams } from "react-router-dom"
import { PageHero, ContentSection, SectionTitle, BackLink } from "../../Component/PageLayout"

const items = [
  { slug: "akreditasi", title: "Akreditasi", icon: "ri-award-line", category: "Informasi Akademik", desc: "Informasi akreditasi program studi di FKG Unhas." },
  { slug: "sk-kontrak-kinerja", title: "SK & Kontrak Kinerja", icon: "ri-file-text-line", category: "Informasi Akademik", desc: "Surat keputusan dan kontrak kinerja." },
  { slug: "pengabdian", title: "Pengabdian", icon: "ri-heart-line", category: "Informasi Akademik", desc: "Kegiatan pengabdian kepada masyarakat." },
  { slug: "kemahasiswaan", title: "Kemahasiswaan", icon: "ri-user-community-line", category: "Kemahasiswaan", desc: "Informasi kegiatan kemahasiswaan." },
  { slug: "ormawa", title: "Ormawa", icon: "ri-group-line", category: "Kemahasiswaan", desc: "Organisasi mahasiswa di FKG Unhas." },
  { slug: "buku-pedoman", title: "Buku Pedoman", icon: "ri-book-open-line", category: "Lainnya", desc: "Buku pedoman akademik dan panduan." },
]

const contentMap = {
  akreditasi: {
    title: "Akreditasi",
    body: "Program studi di FKG Unhas telah terakreditasi oleh LAM-PTKes dan BAN-PT. Fakultas Kedokteran Gigi Universitas Hasanuddin meraih akreditasi UNGGUL sejak tahun 2021. Seluruh program studi terus diupayakan untuk mempertahankan dan meningkatkan peringkat akreditasi baik nasional maupun internasional.",
  },
  "sk-kontrak-kinerja": {
    title: "SK & Kontrak Kinerja",
    body: "Surat Keputusan dan Kontrak Kinerja merupakan dokumen yang memuat penetapan dan perjanjian kinerja antara pimpinan universitas, fakultas, dan program studi dalam rangka mewujudkan target kinerja yang telah ditetapkan.",
  },
  pengabdian: {
    title: "Pengabdian",
    body: "Kegiatan pengabdian kepada masyarakat di FKG Unhas dilaksanakan oleh dosen dan mahasiswa sebagai implementasi Tri Dharma Perguruan Tinggi. Kegiatan meliputi penyuluhan kesehatan gigi, pemeriksaan gigi gratis, dan pemberdayaan masyarakat di bidang kesehatan gigi dan mulut.",
  },
  kemahasiswaan: {
    title: "Kemahasiswaan",
    body: "Bidang Kemahasiswaan FKG Unhas menaungi berbagai kegiatan pengembangan minat, bakat, dan penalaran mahasiswa. Program kemahasiswaan meliputi kegiatan ilmiah, seni, olahraga, dan organisasi yang bertujuan mengembangkan soft skills mahasiswa.",
  },
  ormawa: {
    title: "Ormawa",
    body: "Organisasi Mahasiswa (Ormawa) di FKG Unhas terdiri dari Badan Eksekutif Mahasiswa (BEM), Himpunan Mahasiswa (HIMA), dan Unit Kegiatan Mahasiswa (UKM) yang berperan aktif dalam mengembangkan potensi mahasiswa di berbagai bidang.",
  },
  "buku-pedoman": {
    title: "Buku Pedoman",
    body: "Buku Pedoman Akademik FKG Unhas memuat panduan lengkap mengenai kurikulum, sistem pembelajaran, penilaian, dan aturan akademik yang berlaku bagi mahasiswa di seluruh program studi.",
  },
}

function AkademikIndex() {
  const categories = ["Informasi Akademik", "Kemahasiswaan", "Lainnya"]

  return (
    <>
      <PageHero title="Akademik" subtitle="Informasi akademik FKG Unhas" />
      <ContentSection>
        <SectionTitle>Informasi Akademik</SectionTitle>
        <p className="text-gray-600 mt-2 text-base lg:text-[18px] max-w-[800px]">
          Informasi terkait kegiatan akademik, akreditasi, kemahasiswaan, dan buku pedoman di FKG Unhas.
        </p>
        {categories.map((cat) => (
          <div key={cat} className="mt-8">
            <h3 className="font-semibold text-xl text-[#b00000] mb-4">{cat}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.filter(i => i.category === cat).map((item) => (
                <Link
                  key={item.slug}
                  to={`/akademik/${item.slug}`}
                  className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 hover:shadow-md hover:border-[#b00000] transition-all group"
                >
                  <i className={`${item.icon} text-3xl text-[#b00000]`}></i>
                  <h3 className="font-semibold text-lg text-black group-hover:text-[#b00000] transition-colors mt-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </ContentSection>
    </>
  )
}

function AkademikDetail() {
  const { slug } = useParams()
  const content = contentMap[slug]
  const title = content?.title || slug?.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()) || "Detail"

  return (
    <>
      <PageHero title={title} subtitle="Akademik FKG Unhas" />
      <ContentSection>
        <BackLink to="/akademik" />
        <div className="max-w-[900px]">
          <p className="text-gray-700 leading-relaxed">{content?.body || "Informasi tidak tersedia."}</p>
        </div>
      </ContentSection>
    </>
  )
}

export function Akademik() {
  return (
    <Routes>
      <Route index element={<AkademikIndex />} />
      <Route path=":slug" element={<AkademikDetail />} />
    </Routes>
  )
}
