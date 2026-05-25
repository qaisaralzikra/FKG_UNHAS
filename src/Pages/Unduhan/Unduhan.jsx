import {
  PageHero,
  ContentSection,
  SectionTitle,
} from "../../Component/PageLayout";

const files = [
  { name: "Pembimbingan Tugas Akhir", icon: "ri-file-text-line" },
  { name: "Peraturan Akademik", icon: "ri-file-list-3-line" },
  { name: "RENSTRA", icon: "ri-file-chart-line" },
  { name: "RENOP", icon: "ri-file-settings-line" },
  { name: "LKIT", icon: "ri-file-info-line" },
  { name: "Perjanjian Kinerja Rektor-Dekan", icon: "ri-file-text-line" },
  { name: "Perjanjian Kinerja Dekan-Kaprodi", icon: "ri-file-text-line" },
  { name: "Laporan Kinerja", icon: "ri-bar-chart-line" },
  { name: "Laporan Keuangan", icon: "ri-money-dollar-circle-line" },
  { name: "Laporan Barang Milik Negara", icon: "ri-box-3-line" },
  { name: "Laporan Kinerja Dosen", icon: "ri-user-check-line" },
  { name: "Kinerja Keuangan", icon: "ri-line-chart-line" },
];

export function Unduhan() {
  return (
    <>
      <PageHero title="Unduhan" subtitle="Download dokumen dan peraturan" />
      <ContentSection>
        <SectionTitle>Unduhan</SectionTitle>
        <p className="text-gray-600 mt-2 text-base lg:text-[18px] max-w-[800px]">
          Akses dan unduh berbagai dokumen, peraturan, laporan kinerja, dan
          perjanjian di lingkungan FKG Unhas.
        </p>
        <div className="mt-8 space-y-3">
          {files.map((f, i) => (
            <a
              key={i}
              href="https://sci.unhas.ac.id/download"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white p-4 rounded-[14px] shadow-sm border border-gray-100 hover:border-[#b00000] transition-colors group"
            >
              <div className="w-10 h-10 bg-[#f8f0f0] rounded-lg flex items-center justify-center shrink-0">
                <i className={`${f.icon} text-lg text-[#b00000]`}></i>
              </div>
              <span className="flex-1 font-medium text-black group-hover:text-[#b00000] transition-colors">
                {f.name}
              </span>
              <i className="ri-download-line text-gray-400 group-hover:text-[#b00000] transition-colors"></i>
            </a>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
