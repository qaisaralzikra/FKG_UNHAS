import { Routes, Route, Link, useParams } from "react-router-dom"
import { PageHero, ContentSection, SectionTitle, BackLink } from "../../Component/PageLayout"

const items = [
  { slug: "serta-merta", title: "Informasi Serta Merta", icon: "ri-alarm-line", desc: "Informasi yang harus segera disampaikan kepada publik." },
  { slug: "dikecualikan", title: "Informasi Dikecualikan", icon: "ri-lock-line", desc: "Informasi yang dikecualikan dari akses publik." },
  { slug: "setiap-saat", title: "Informasi Setiap Saat", icon: "ri-time-line", desc: "Informasi yang tersedia setiap saat bagi publik." },
  { slug: "berkala", title: "Informasi Berkala", icon: "ri-calendar-line", desc: "Informasi yang disediakan secara berkala." },
]

const contentMap = {
  "serta-merta": {
    title: "Informasi Serta Merta",
    body: "Informasi Serta Merta adalah informasi publik yang harus segera disampaikan kepada publik tanpa penundaan karena dapat mengancam jiwa, kesehatan, atau kepentingan publik. PPID FKG Unhas menyediakan akses cepat terhadap informasi tersebut melalui portal resmi dan papan pengumuman.",
  },
  dikecualikan: {
    title: "Informasi Dikecualikan",
    body: "Informasi Dikecualikan adalah informasi publik yang bersifat rahasia sesuai dengan ketentuan peraturan perundang-undangan. Informasi ini tidak dapat diakses oleh publik karena berkaitan dengan keamanan nasional, rahasia pribadi, atau rahasia bisnis yang dilindungi.",
  },
  "setiap-saat": {
    title: "Informasi Setiap Saat",
    body: "Informasi Setiap Saat adalah informasi publik yang tersedia dan dapat diakses oleh publik setiap saat tanpa perlu permohonan. PPID FKG Unhas menyediakan informasi ini melalui berbagai media termasuk website dan layanan informasi publik.",
  },
  berkala: {
    title: "Informasi Berkala",
    body: "Informasi Berkala adalah informasi publik yang disediakan secara berkala oleh PPID FKG Unhas, termasuk laporan kinerja, laporan keuangan, dan dokumen perencanaan yang dipublikasikan secara rutin setiap tahun atau semester.",
  },
}

function PPIDIndex() {
  return (
    <>
      <PageHero title="PPID" subtitle="Pejabat Pengelola Informasi dan Dokumentasi FKG Unhas" />
      <ContentSection>
        <SectionTitle>PPID FKG Unhas</SectionTitle>
        <p className="text-gray-600 mt-2 text-base lg:text-[18px] max-w-[800px]">
          PPID bertugas mengelola dan memberikan pelayanan informasi publik di lingkungan Fakultas Kedokteran Gigi Universitas Hasanuddin.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {items.map((item) => (
            <Link
              key={item.slug}
              to={`/ppid/${item.slug}`}
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

function PPIDDetail() {
  const { slug } = useParams()
  const content = contentMap[slug]
  const title = content?.title || "Detail"

  return (
    <>
      <PageHero title={title} subtitle="PPID FKG Unhas" />
      <ContentSection>
        <BackLink to="/ppid" />
        <div className="max-w-[900px]">
          <p className="text-gray-700 leading-relaxed">{content?.body || "Informasi tidak tersedia."}</p>
        </div>
      </ContentSection>
    </>
  )
}

export function PPID() {
  return (
    <Routes>
      <Route index element={<PPIDIndex />} />
      <Route path=":slug" element={<PPIDDetail />} />
    </Routes>
  )
}
