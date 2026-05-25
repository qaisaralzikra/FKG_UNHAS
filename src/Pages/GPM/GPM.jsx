import { Routes, Route, Link, useParams } from "react-router-dom";
import {
  PageHero,
  ContentSection,
  SectionTitle,
  BackLink,
} from "../../Component/PageLayout";

const subItems = [
  {
    id: "spmi",
    label: "Sistem Penjaminan Mutu Internal",
    children: [
      "Audit Mutu Internal",
      "Tinjauan Manajemen Fakultas",
      "Evaluasi Proses Belajar Mengajar",
      "Laporan Permintaan Tindakan Koreksi",
      "Bukti Pelaksanaan AMI",
      "Laporan Benchmarking",
    ],
  },
  {
    id: "spme",
    label: "Sistem Penjaminan Mutu Eksternal",
    children: [
      "Akreditasi Nasional",
      "Akreditasi Internasional",
      "Sertifikasi ISO",
      "Sertifikasi Laboratorium",
    ],
  },
  {
    id: "survey",
    label: "Hasil Survey",
    children: ["Hasil Survey 2025", "Hasil Survey 2024", "Hasil Survey 2023"],
  },
  {
    id: "dokumen",
    label: "Dokumen Mutu",
    children: [
      "Dokumen SPMI Standar",
      "Dokumen SPMI Kebijakan",
      "Dokumen SPMI Manual",
      "Dokumen SPMI Formulir",
    ],
  },
  {
    id: "lain",
    label: "Dokumen Lainnya",
    children: [
      "Laporan Kinerja",
      "Renstra Unhas Dan FKG",
      "Standar Pelayanan Publik",
      "Kebijakan SPMI",
      "Dasar Hukum",
      "Dokumen",
      "QS.WUR & The WUR 2025",
      "Proses Bisnis",
      "Kegiatan GPM",
      "Instrumen",
      "Sistem Audit",
      "Akreditasi",
      "Gallery",
      "Bench Marking",
    ],
  },
];

const contentMap = {
  "audit-mutu-internal": {
    title: "Audit Mutu Internal",
    body: "Audit Mutu Internal (AMI) merupakan kegiatan evaluasi sistematis dan mandiri terhadap pelaksanaan Sistem Penjaminan Mutu Internal (SPMI) di lingkungan FKG Unhas. AMI dilaksanakan secara berkala untuk memastikan kesesuaian antara pelaksanaan dengan standar yang telah ditetapkan.",
  },
  "tinjauan-manajemen-fakultas": {
    title: "Tinjauan Manajemen Fakultas",
    body: "Tinjauan Manajemen Fakultas dilaksanakan untuk mengevaluasi efektivitas penerapan sistem penjaminan mutu di tingkat fakultas. Hasil tinjauan digunakan sebagai dasar perbaikan berkelanjutan.",
  },
  "evaluasi-proses-belajar-mengajar": {
    title: "Evaluasi Proses Belajar Mengajar",
    body: "Evaluasi Proses Belajar Mengajar (EPBM) dilakukan setiap semester untuk mengukur kualitas pembelajaran. Evaluasi mencakup aspek perencanaan, pelaksanaan, dan penilaian pembelajaran.",
  },
  "laporan-permintaan-tindakan-koreksi": {
    title: "Laporan Permintaan Tindakan Koreksi",
    body: "Permintaan Tindakan Koreksi (PTK) merupakan mekanisme perbaikan terhadap ketidaksesuaian yang ditemukan dalam pelaksanaan proses akademik dan non-akademik di FKG Unhas.",
  },
  "bukti-pelaksanaan-ami": {
    title: "Bukti Pelaksanaan AMI",
    body: "Dokumentasi dan bukti pelaksanaan Audit Mutu Internal di lingkungan FKG Unhas, termasuk laporan hasil audit, tindak lanjut, dan verifikasi perbaikan.",
  },
  "laporan-benchmarking": {
    title: "Laporan Benchmarking",
    body: "Kegiatan benchmarking dilakukan untuk membandingkan praktik terbaik dengan institusi lain guna meningkatkan kualitas penyelenggaraan pendidikan di FKG Unhas.",
  },
  "akreditasi-nasional": {
    title: "Akreditasi Nasional",
    body: "Akreditasi nasional program studi di FKG Unhas dilaksanakan oleh LAM-PTKes dan BAN-PT. Seluruh program studi telah terakreditasi dengan peringkat yang baik.",
  },
  "akreditasi-internasional": {
    title: "Akreditasi Internasional",
    body: "FKG Unhas terus mengupayakan akreditasi internasional untuk meningkatkan daya saing global dan pengakuan internasional terhadap kualitas pendidikan.",
  },
  "sertifikasi-iso": {
    title: "Sertifikasi ISO",
    body: "FKG Unhas menerapkan sistem manajemen mutu berbasis ISO untuk menjamin konsistensi kualitas layanan akademik dan administrasi.",
  },
  "sertifikasi-laboratorium": {
    title: "Sertifikasi Laboratorium",
    body: "Laboratorium di lingkungan FKG Unhas terus diupayakan untuk mendapatkan sertifikasi guna menjamin kualitas layanan penelitian dan pengujian.",
  },
  "hasil-survey-2025": {
    title: "Hasil Survey 2025",
    body: "Hasil survey kepuasan layanan FKG Unhas tahun 2025 menunjukkan tingkat kepuasan yang baik dari mahasiswa, dosen, dan tenaga kependidikan.",
  },
  "hasil-survey-2024": {
    title: "Hasil Survey 2024",
    body: "Hasil survey kepuasan layanan FKG Unhas tahun 2024 digunakan sebagai bahan evaluasi dan perbaikan mutu layanan secara berkelanjutan.",
  },
  "hasil-survey-2023": {
    title: "Hasil Survey 2023",
    body: "Hasil survey kepuasan layanan FKG Unhas tahun 2023 menjadi baseline dalam pengukuran peningkatan mutu layanan di tahun-tahun berikutnya.",
  },
  "dokumen-spmi-standar": {
    title: "Dokumen SPMI Standar",
    body: "Dokumen SPMI Standar berisi standar-standar mutu yang ditetapkan oleh FKG Unhas sebagai acuan dalam penyelenggaraan pendidikan tinggi.",
  },
  "dokumen-spmi-kebijakan": {
    title: "Dokumen SPMI Kebijakan",
    body: "Dokumen SPMI Kebijakan memuat kebijakan mutu Fakultas Kedokteran Gigi Universitas Hasanuddin yang menjadi landasan dalam implementasi SPMI.",
  },
  "dokumen-spmi-manual": {
    title: "Dokumen SPMI Manual",
    body: "Manual SPMI berisi panduan teknis pelaksanaan sistem penjaminan mutu internal di lingkungan FKG Unhas.",
  },
  "dokumen-spmi-formulir": {
    title: "Dokumen SPMI Formulir",
    body: "Formulir-formulir yang digunakan dalam pelaksanaan SPMI di FKG Unhas untuk mendokumentasikan setiap proses penjaminan mutu.",
  },
  "laporan-kinerja": {
    title: "Laporan Kinerja",
    body: "Laporan kinerja FKG Unhas disusun setiap tahun sebagai bentuk akuntabilitas dan transparansi penyelenggaraan pendidikan.",
  },
  "renstra-unhas-dan-fkg": {
    title: "Renstra Unhas dan FKG",
    body: "Rencana Strategis (Renstra) Universitas Hasanuddin dan Fakultas Kedokteran Gigi memuat visi, misi, tujuan, dan program kerja dalam jangka waktu tertentu.",
  },
  "standar-pelayanan-publik": {
    title: "Standar Pelayanan Publik",
    body: "Standar Pelayanan Publik FKG Unhas merupakan tolok ukur yang digunakan sebagai pedoman dalam penyelenggaraan pelayanan publik di lingkungan fakultas.",
  },
  "kebijakan-spmi": {
    title: "Kebijakan SPMI",
    body: "Kebijakan SPMI FKG Unhas memuat kebijakan penjaminan mutu yang mengikat seluruh sivitas akademika dalam penyelenggaraan pendidikan.",
  },
  "dasar-hukum": {
    title: "Dasar Hukum",
    body: "Dasar hukum penyelenggaraan Sistem Penjaminan Mutu Internal di FKG Unhas merujuk pada peraturan perundang-undangan dan kebijakan universitas.",
  },
  dokumen: {
    title: "Dokumen",
    body: "Kumpulan dokumen terkait penjaminan mutu di FKG Unhas yang dapat diakses oleh sivitas akademika dan masyarakat umum.",
  },
  "qs-wur-the-wur-2025": {
    title: "QS.WUR & The WUR 2025",
    body: "Informasi pemeringkatan QS World University Rankings dan THE World University Rankings sebagai indikator daya saing global FKG Unhas.",
  },
  "proses-bisnis": {
    title: "Proses Bisnis",
    body: "Diagram dan deskripsi proses bisnis di lingkungan FKG Unhas yang menggambarkan alur kerja dan hubungan antar unit kerja.",
  },
  "kegiatan-gpm": {
    title: "Kegiatan GPM",
    body: "Dokumentasi kegiatan Gugus Penjaminan Mutu FKG Unhas dalam mengimplementasikan dan mengembangkan sistem penjaminan mutu.",
  },
  instrumen: {
    title: "Instrumen",
    body: "Instrumen yang digunakan dalam pengukuran dan evaluasi mutu di FKG Unhas, termasuk kuesioner dan rubrik penilaian.",
  },
  "sistem-audit": {
    title: "Sistem Audit",
    body: "Sistem audit internal dan eksternal yang diterapkan di FKG Unhas untuk menjamin kepatuhan terhadap standar mutu.",
  },
  akreditasi: {
    title: "Akreditasi",
    body: "Informasi akreditasi program studi di FKG Unhas baik tingkat nasional maupun internasional.",
  },
  gallery: {
    title: "Gallery",
    body: "Dokumentasi foto dan video kegiatan penjaminan mutu di lingkungan FKG Unhas.",
  },
  "bench-marking": {
    title: "Bench Marking",
    body: "Kegiatan benchmarking FKG Unhas dengan institusi lain dalam rangka pengembangan dan peningkatan mutu.",
  },
};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

const slugOverrides = {
  "qs.wur & the wur 2025": "qs-wur-the-wur-2025",
};

function getSlug(text) {
  const base = slugify(text);
  return slugOverrides[base] || base;
}

function GPMIndex() {
  return (
    <>
      <PageHero title="GPM" subtitle="Gugus Penjaminan Mutu FKG Unhas" />
      <ContentSection>
        <SectionTitle>Gugus Penjaminan Mutu</SectionTitle>
        <p className="text-gray-600 mt-2 text-base lg:text-[18px] max-w-[800px]">
          Sistem penjaminan mutu internal dan eksternal di lingkungan Fakultas
          Kedokteran Gigi Universitas Hasanuddin.
        </p>
        <div className="space-y-6 mt-8">
          {subItems.map((section) => (
            <div
              key={section.id}
              className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100"
            >
              <h3 className="font-semibold text-lg text-[#b00000] mb-3">
                {section.label}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {section.children.map((child, i) => (
                  <Link
                    key={i}
                    to={`/gpm/${getSlug(child)}`}
                    className="flex items-center gap-2 p-3 rounded-[10px] hover:bg-[#f8f0f0] text-gray-700 hover:text-[#b00000] transition-colors"
                  >
                    <i className="ri-file-text-line text-sm"></i>
                    {child}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContentSection>
    </>
  );
}

function GPMDetail() {
  const { slug } = useParams();
  const content = contentMap[slug];
  const title =
    content?.title ||
    slug?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) ||
    "Detail";

  return (
    <>
      <PageHero title={title} subtitle="Gugus Penjaminan Mutu FKG Unhas" />
      <ContentSection>
        <BackLink to="/gpm" />
        <div className="max-w-[900px]">
          <p className="text-gray-700 leading-relaxed">
            {content?.body ||
              `Halaman ini menyajikan informasi mengenai ${title} dalam kerangka sistem penjaminan mutu di Fakultas Kedokteran Gigi Universitas Hasanuddin.`}
          </p>
        </div>
      </ContentSection>
    </>
  );
}

export function GPM() {
  return (
    <Routes>
      <Route index element={<GPMIndex />} />
      <Route path=":slug" element={<GPMDetail />} />
    </Routes>
  );
}
