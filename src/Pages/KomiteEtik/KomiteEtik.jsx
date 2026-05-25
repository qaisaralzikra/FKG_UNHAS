import { Routes, Route, Link, useParams } from "react-router-dom"
import { PageHero, ContentSection, SectionTitle, BackLink } from "../../Component/PageLayout"
import { SPSM } from "./SPSM"
import { SPH } from "./SPH"
import { FormulirPanduan } from "./FormulirPanduan"
import { JadwalRapat } from "./JadwalRapat"
import { Protokol } from "./Protokol"
import { Referensi } from "./Referensi"

const items = [
  { slug: "pendahuluan", title: "Pendahuluan", icon: "ri-information-line" },
  { slug: "akreditasi-komite-etik", title: "Akreditasi Komite Etik", icon: "ri-award-line" },
  { slug: "struktur-organisasi-alur-pengajuan", title: "Struktur Organisasi & Alur Pengajuan", icon: "ri-organization-chart" },
  { slug: "anggota-komite-etik", title: "Anggota Komite Etik", icon: "ri-team-line" },
  { slug: "konsultan-independen-komite-etik", title: "Konsultan Independen Komite Etik", icon: "ri-user-search-line" },
  { slug: "sop-penelitian-subjek-manusia", title: "SOP Penelitian Subjek Manusia", icon: "ri-file-text-line" },
  { slug: "sop-penelitian-hewan", title: "SOP Penelitian Hewan", icon: "ri-flask-line" },
  { slug: "formulir-panduan-pengajuan-untuk-pi", title: "Formulir & Panduan Pengajuan untuk PI", icon: "ri-file-edit-line" },
  { slug: "jadwal-rapat", title: "Jadwal Rapat", icon: "ri-calendar-line" },
  { slug: "protokol-yang-disetujui", title: "Protokol yang Disetujui", icon: "ri-check-double-line" },
  { slug: "referensi-komite-etik", title: "Referensi Komite Etik", icon: "ri-bookmark-line" },
  { slug: "biaya-kontribusi-ethical-clearance", title: "Biaya Kontribusi Ethical Clearance", icon: "ri-money-dollar-circle-line" },
  { slug: "pelatihan-komite-etik", title: "Pelatihan Komite Etik", icon: "ri-graduation-cap-line" },
  { slug: "kontak-komite-etik", title: "Kontak Komite Etik", icon: "ri-contacts-line" },
]

const contentMap = {
  pendahuluan: {
    title: "Pendahuluan",
    body: "Komite Etik Penelitian Fakultas Kedokteran Gigi Universitas Hasanuddin (KEPK FKG-RSGMP UNHAS) didirikan pada tahun 2017. Komite ini bertugas melakukan review etik terhadap penelitian yang melibatkan subjek manusia, hewan, dan spesimen biologis yang diajukan oleh peneliti. KEPK FKG-RSGMP UNHAS berkomitmen untuk melindungi hak dan kesejahteraan subjek penelitian serta memastikan penelitian dilaksanakan sesuai dengan prinsip etika yang berlaku secara nasional dan internasional.",
  },
  "akreditasi-komite-etik": {
    title: "Akreditasi Komite Etik",
    body: "Akreditasi Komite Etik Penelitian FKG-RSGMP UNHAS diberikan oleh Komisi Akreditasi Komite Etik Penelitian (KAKEP) sebagai pengakuan bahwa komite telah memenuhi standar dalam melakukan review etik penelitian. Proses akreditasi mencakup evaluasi terhadap struktur organisasi, kompetensi anggota, prosedur operasional standar, dan dokumentasi kegiatan review etik.",
  },
  "struktur-organisasi-alur-pengajuan": {
    title: "Struktur Organisasi & Alur Pengajuan",
    body: "Struktur organisasi KEPK FKG-RSGMP UNHAS terdiri dari Ketua, Sekretaris, dan anggota yang berasal dari berbagai bidang ilmu. Alur pengajuan ethical clearance dimulai dari peneliti mengajukan dokumen, dilakukan review oleh sekretariat, dilanjutkan dengan review oleh reviewer, dan ditetapkan dalam rapat pleno komite etik.",
  },
  "anggota-komite-etik": {
    title: "Anggota Komite Etik",
    body: "Anggota Komite Etik Penelitian FKG-RSGMP UNHAS terdiri dari tenaga ahli di bidang kedokteran gigi, kedokteran, hukum, etika, dan perwakilan masyarakat. Setiap anggota memiliki kompetensi yang sesuai dengan bidangnya untuk melakukan review etik penelitian secara komprehensif.",
  },
  "konsultan-independen-komite-etik": {
    title: "Konsultan Independen Komite Etik",
    body: "Konsultan Independen Komite Etik adalah pihak eksternal yang dapat dimintakan pendapatnya oleh KEPK FKG-RSGMP UNHAS dalam melakukan review protokol penelitian yang memerlukan keahlian khusus di luar kompetensi anggota komite.",
  },
  "sop-penelitian-subjek-manusia": {
    title: "SOP Penelitian Subjek Manusia",
    body: "Standar Operasional Prosedur (SOP) Penelitian Subjek Manusia mengatur tata cara pengajuan, review, dan monitoring penelitian yang melibatkan manusia sebagai subjek penelitian. SOP ini mencakup persyaratan informed consent, perlindungan kerahasiaan data, dan prosedur penanganan adverse event.",
  },
  "sop-penelitian-hewan": {
    title: "SOP Penelitian Hewan",
    body: "Standar Operasional Prosedur (SOP) Penelitian Hewan mengatur tata cara pengajuan dan review penelitian yang menggunakan hewan coba. SOP ini memastikan bahwa penelitian hewan dilaksanakan sesuai dengan prinsip 3R (Replacement, Reduction, Refinement) dan kesejahteraan hewan.",
  },
  "formulir-panduan-pengajuan-untuk-pi": {
    title: "Formulir & Panduan Pengajuan untuk PI",
    body: "Formulir dan panduan pengajuan ethical clearance untuk Principal Investigator (PI) mencakup formulir permohonan review etik, informed consent, lembar informasi subjek, dan dokumen pendukung lainnya. Panduan ini membantu peneliti dalam menyusun dokumen pengajuan ethical clearance.",
  },
  "jadwal-rapat": {
    title: "Jadwal Rapat",
    body: "Jadwal rapat pleno Komite Etik Penelitian FKG-RSGMP UNHAS dilaksanakan secara berkala untuk melakukan review dan penetapan ethical clearance. Jadwal rapat dapat berubah sesuai dengan kebutuhan dan jumlah permohonan yang masuk.",
  },
  "protokol-yang-disetujui": {
    title: "Protokol yang Disetujui",
    body: "Daftar protokol penelitian yang telah disetujui oleh KEPK FKG-RSGMP UNHAS setelah melalui proses review etik. Protokol yang disetujui mendapatkan sertifikat ethical clearance yang berlaku untuk jangka waktu tertentu sesuai dengan ketentuan yang berlaku.",
  },
  "referensi-komite-etik": {
    title: "Referensi Komite Etik",
    body: "Referensi yang digunakan oleh KEPK FKG-RSGMP UNHAS dalam melaksanakan review etik mencakup pedoman nasional (KEPPKN), pedoman internasional (CIOMS, Declaration of Helsinki, ICH-GCP), dan peraturan perundang-undangan terkait penelitian kesehatan.",
  },
  "biaya-kontribusi-ethical-clearance": {
    title: "Biaya Kontribusi Ethical Clearance",
    body: "Metode pembayaran etik penelitian dengan transfer ke Rekening Bank BSI 7290113053 a.n KOMISI ETIK PENELITIAN KESEHATAN FKG UNHAS dengan rincian sebagai berikut:\n\n• D4/S1: Rp200.000\n• S2/PPDGS: Rp300.000\n• S3/DPJP: Rp500.000\n• Non UNHAS S1: Rp500.000\n• Non UNHAS Postgraduate : Rp1.000.000\n• Penelitian Kerjasama (Minimal Hibah Universitas): Rp1.500.000\n\nBiaya dapat berubah sewaktu-waktu sesuai kebijakan fakultas.",
  },
  "pelatihan-komite-etik": {
    title: "Pelatihan Komite Etik",
    body: "Pelatihan Komite Etik diselenggarakan secara berkala untuk meningkatkan kompetensi anggota komite etik dan peneliti dalam memahami prinsip etika penelitian. Pelatihan mencakup materi dasar etika penelitian, good clinical practice, dan prosedur review etik.",
  },
  "kontak-komite-etik": {
    title: "Kontak Komite Etik",
    body: "Untuk informasi lebih lanjut mengenai pengajuan ethical clearance, silakan menghubungi:\n\nSekretariat Komite Etik Penelitian FKG-RSGMP UNHAS\nGedung RSGMP Unhas Lantai 2\nJl. Perintis Kemerdekaan KM.10, Makassar\nEmail: kepk_fkgrsgm@unhas.ac.id",
  },
}

function KomiteEtikIndex() {
  return (
    <>
      <PageHero title="Komite Etik" subtitle="Komite Etik Penelitian FKG Unhas" />
      <ContentSection>
        <SectionTitle>Komite Etik Penelitian</SectionTitle>
        <p className="text-gray-600 mt-2 text-base lg:text-[18px] max-w-[800px]">
          Komite Etik Penelitian Fakultas Kedokteran Gigi Universitas Hasanuddin bertugas memastikan penelitian dilaksanakan sesuai dengan prinsip etika yang berlaku.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {items.map((item) => (
            <Link
              key={item.slug}
              to={`/komite-etik/${item.slug}`}
              className="bg-white p-5 rounded-[16px] shadow-sm border border-gray-100 hover:shadow-md hover:border-[#b00000] transition-all group"
            >
              <i className={`${item.icon} text-3xl text-[#b00000]`}></i>
              <h3 className="font-semibold text-black group-hover:text-[#b00000] transition-colors mt-2">{item.title}</h3>
            </Link>
          ))}
        </div>
      </ContentSection>
    </>
  )
}

function KomiteEtikDetail() {
  const { slug } = useParams()
  const content = contentMap[slug]

  if (!content) return <NotFound />

  return (
    <>
      <PageHero title={content.title} subtitle="Komite Etik Penelitian FKG Unhas" />
      <ContentSection>
        <BackLink to="/komite-etik" />
        <div className="max-w-[900px]">
          <div className="bg-white p-6 rounded-[16px] shadow-sm border border-gray-100">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content.body}</p>
          </div>
        </div>
      </ContentSection>
    </>
  )
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <i className="ri-error-warning-line text-6xl text-gray-300"></i>
        <h2 className="text-2xl font-semibold text-black mt-4">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-500 mt-2">Informasi yang Anda cari tidak tersedia.</p>
        <Link to="/komite-etik" className="inline-flex items-center gap-2 text-[#b00000] hover:underline mt-4">
          <i className="ri-arrow-left-line"></i> Kembali ke Komite Etik
        </Link>
      </div>
    </div>
  )
}

export function KomiteEtik() {
  return (
    <Routes>
      <Route index element={<KomiteEtikIndex />} />
      <Route path="sop-penelitian-subjek-manusia" element={<SPSM />} />
      <Route path="sop-penelitian-hewan" element={<SPH />} />
      <Route path="formulir-panduan-pengajuan-untuk-pi" element={<FormulirPanduan />} />
      <Route path="jadwal-rapat" element={<JadwalRapat />} />
      <Route path="protokol-yang-disetujui" element={<Protokol />} />
      <Route path="referensi-komite-etik" element={<Referensi />} />
      <Route path=":slug" element={<KomiteEtikDetail />} />
    </Routes>
  )
}
