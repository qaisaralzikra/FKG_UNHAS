import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout"

export function DownloadCenter() {
  const downloads = [
    { icon: "ri-file-pdf-2-line", title: "Formulir Akademik", url: "#" },
    { icon: "ri-file-pdf-2-line", title: "Formulir Kemahasiswaan", url: "#" },
    { icon: "ri-file-pdf-2-line", title: "Formulir Penelitian", url: "#" },
    { icon: "ri-file-pdf-2-line", title: "Buku Pedoman Akademik", url: "#" },
    { icon: "ri-file-pdf-2-line", title: "Kalender Akademik", url: "#" },
    { icon: "ri-file-pdf-2-line", title: "Dokumen Mutu", url: "#" },
  ]
  return (
    <>
      <PageHero title="Download Center" subtitle="Tempat unduh dokumen dan formulir" />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-[900px]">
          <p className="text-gray-600 text-base lg:text-[18px] mb-8">
            Akses dan unduh berbagai dokumen, formulir, dan panduan yang tersedia.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {downloads.map((item, i) => (
              <a key={i} href={item.url} className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 hover:border-[#b00000] transition-colors group">
                <i className={`${item.icon} text-3xl text-[#b00000]`}></i>
                <h4 className="font-semibold text-black mt-2 group-hover:text-[#b00000] transition-colors">{item.title}</h4>
              </a>
            ))}
          </div>
        </div>
      </ContentSection>
    </>
  )
}
