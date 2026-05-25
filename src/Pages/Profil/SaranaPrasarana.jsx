import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout"

export function SaranaPrasarana() {
  const fasilitas = [
    { icon: "ri-building-4-line", title: "Gedung Kuliah", desc: "Ruang kuliah yang nyaman dan dilengkapi peralatan multimedia." },
    { icon: "ri-flask-line", title: "Laboratorium", desc: "Laboratorium keterampilan klinis, laboratorium biomedik, dan laboratorium penelitian." },
    { icon: "ri-hospital-line", title: "RSGMP", desc: "Rumah Sakit Gigi dan Mulut Pendidikan untuk praktik klinis mahasiswa." },
    { icon: "ri-book-open-line", title: "Perpustakaan", desc: "Perpustakaan dengan koleksi buku dan jurnal kedokteran gigi." },
    { icon: "ri-computer-line", title: "Ruang Komputer", desc: "Fasilitas komputer dan akses internet untuk pembelajaran." },
    { icon: "ri-group-line", title: "Ruang Seminar", desc: "Aula dan ruang seminar untuk kegiatan akademik." },
  ]
  return (
    <>
      <PageHero title="Sarana Prasarana" subtitle="Fasilitas dan infrastruktur FKG Unhas" />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-[900px]">
          <p className="text-gray-600 text-base lg:text-[18px] mb-8">
            FKG Unhas menyediakan berbagai fasilitas untuk mendukung proses pembelajaran dan penelitian.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fasilitas.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100">
                <i className={`${f.icon} text-3xl text-[#b00000]`}></i>
                <h3 className="font-semibold text-lg text-black mt-3">{f.title}</h3>
                <p className="text-gray-600 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
    </>
  )
}
