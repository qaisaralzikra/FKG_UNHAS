import { Routes, Route, Link, useParams } from "react-router-dom"
import { PageHero, ContentSection, SectionTitle, BackLink } from "../../Component/PageLayout"

const items = [
  { slug: "wbs", title: "WBS (Whistle Blowing System)", icon: "ri-shield-check-line", desc: "Sistem pengaduan pelanggaran dan penyimpangan." },
  { slug: "upg", title: "UPG (Unit Pengendalian Gratifikasi)", icon: "ri-service-line", desc: "Unit pengendalian gratifikasi di FKG Unhas." },
  { slug: "bk", title: "BK (Benturan Kepentingan)", icon: "ri-scales-line", desc: "Pengelolaan benturan kepentingan." },
  { slug: "am", title: "AM (Aduan Masyarakat)", icon: "ri-feedback-line", desc: "Saluran pengaduan masyarakat." },
  { slug: "ikm", title: "IKM (Indeks Kepuasan Masyarakat)", icon: "ri-survey-line", desc: "Hasil survey indeks kepuasan masyarakat." },
]

const contentMap = {
  wbs: {
    title: "Whistle Blowing System (WBS)",
    body: "Whistle Blowing System (WBS) merupakan sistem pengaduan pelanggaran yang memungkinkan sivitas akademika dan masyarakat untuk melaporkan indikasi penyimpangan, korupsi, atau pelanggaran di lingkungan FKG Unhas. Laporan dapat disampaikan secara anonim dan terjamin kerahasiaannya.",
  },
  upg: {
    title: "Unit Pengendalian Gratifikasi (UPG)",
    body: "Unit Pengendalian Gratifikasi bertugas melakukan sosialisasi, monitoring, dan evaluasi penerimaan gratifikasi di lingkungan FKG Unhas sesuai dengan peraturan perundang-undangan yang berlaku.",
  },
  bk: {
    title: "Benturan Kepentingan (BK)",
    body: "Pengelolaan benturan kepentingan bertujuan untuk mencegah terjadinya situasi di mana kepentingan pribadi dapat mempengaruhi objektivitas dan profesionalitas dalam pengambilan keputusan di FKG Unhas.",
  },
  am: {
    title: "Aduan Masyarakat (AM)",
    body: "Saluran pengaduan masyarakat menyediakan wadah bagi masyarakat untuk menyampaikan keluhan, saran, dan masukan terkait pelayanan publik di lingkungan FKG Unhas.",
  },
  ikm: {
    title: "Indeks Kepuasan Masyarakat (IKM)",
    body: "Indeks Kepuasan Masyarakat merupakan data dan informasi tentang tingkat kepuasan masyarakat terhadap pelayanan publik di FKG Unhas yang diukur secara berkala.",
  },
}

function ZonaIntegritasIndex() {
  return (
    <>
      <PageHero title="Zona Integritas" subtitle="Menuju Wilayah Bebas Korupsi (WBK) dan Wilayah Birokrasi Bersih Melayani (WBBM)" />
      <ContentSection>
        <SectionTitle>Zona Integritas FKG Unhas</SectionTitle>
        <p className="text-gray-600 mt-2 text-base lg:text-[18px] max-w-[800px]">
          FKG Unhas berkomitmen untuk mewujudkan Zona Integritas menuju Wilayah Bebas Korupsi dan Wilayah Birokrasi Bersih Melayani.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {items.map((item) => (
            <Link
              key={item.slug}
              to={`/zona-integritas/${item.slug}`}
              className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 hover:shadow-md hover:border-[#b00000] transition-all group"
            >
              <i className={`${item.icon} text-3xl text-[#b00000]`}></i>
              <h3 className="font-semibold text-lg text-black group-hover:text-[#b00000] transition-colors mt-3">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
            </Link>
          ))}
        </div>
      </ContentSection>
    </>
  )
}

function ZonaIntegritasDetail() {
  const { slug } = useParams()
  const content = contentMap[slug]
  const title = content?.title || "Detail"

  return (
    <>
      <PageHero title={title} subtitle="Zona Integritas FKG Unhas" />
      <ContentSection>
        <BackLink to="/zona-integritas" />
        <div className="max-w-[900px]">
          <p className="text-gray-700 leading-relaxed">{content?.body || "Informasi tidak tersedia."}</p>
        </div>
      </ContentSection>
    </>
  )
}

export function ZonaIntegritas() {
  return (
    <Routes>
      <Route index element={<ZonaIntegritasIndex />} />
      <Route path=":slug" element={<ZonaIntegritasDetail />} />
    </Routes>
  )
}
