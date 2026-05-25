import { PageHero, ContentSection, SectionTitle, CardGrid, CardLink } from "../../Component/PageLayout"

export function Profil() {
  const items = [
    { to: "/profil/selayang-pandang", title: "Selayang Pandang", icon: "ri-eye-line", desc: "Informasi umum tentang Fakultas Kedokteran Gigi Universitas Hasanuddin" },
    { to: "/profil/sejarah", title: "Sejarah", icon: "ri-history-line", desc: "Perjalanan FKG Unhas sejak tahun 1968" },
    { to: "/profil/profil-fkg", title: "Profil FKG", icon: "ri-information-line", desc: "Profil lengkap Fakultas Kedokteran Gigi" },
    { to: "/profil/visi-misi", title: "Visi & Misi", icon: "ri-rocket-line", desc: "Visi, misi, dan tujuan FKG Unhas" },
    { to: "/profil/sambutan-dekan", title: "Sambutan Dekan", icon: "ri-quote-text", desc: "Sambutan Dekan Fakultas Kedokteran Gigi" },
    { to: "/profil/pimpinan-fakultas", title: "Pimpinan Fakultas", icon: "ri-team-line", desc: "Struktur pimpinan Fakultas Kedokteran Gigi" },
    { to: "/profil/struktur-organisasi", title: "Struktur Organisasi", icon: "ri-organization-chart", desc: "Bagan struktur organisasi fakultas" },
    { to: "/profil/data-dosen", title: "Data Dosen", icon: "ri-user-star-line", desc: "Informasi dosen FKG Unhas" },
    { to: "/profil/tenaga-pendidik", title: "Tenaga Pendidik", icon: "ri-user-heart-line", desc: "Informasi tenaga kependidikan" },
    { to: "/profil/sarana-prasarana", title: "Sarana Prasarana", icon: "ri-building-line", desc: "Fasilitas dan infrastruktur fakultas" },
    { to: "/profil/zona-integritas", title: "Zona Integritas", icon: "ri-shield-check-line", desc: "Zona Integritas menuju Wilayah Bebas Korupsi" },
    { to: "/profil/download-center", title: "Download Center", icon: "ri-download-cloud-line", desc: "Tempat unduh dokumen dan formulir" },
    { to: "/profil/kontak", title: "Kontak", icon: "ri-contacts-line", desc: "Informasi kontak fakultas" },
    { to: "/profil/perjanjian", title: "Perjanjian", icon: "ri-file-text-line", desc: "Dokumen perjanjian dan kerjasama" },
    { to: "/profil/galeri", title: "Galeri", icon: "ri-gallery-line", desc: "Galeri foto dan video kegiatan" },
  ]
  return (
    <>
      <PageHero title="Profil" subtitle="Informasi lengkap tentang Fakultas Kedokteran Gigi Universitas Hasanuddin" />
      <ContentSection>
        <SectionTitle>Profil Fakultas Kedokteran Gigi</SectionTitle>
        <p className="text-gray-600 mt-2 text-base lg:text-[18px] max-w-[800px]">
          Pelajari lebih lanjut tentang FKG Unhas melalui halaman-halaman berikut.
        </p>
        <CardGrid cols="md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <CardLink key={item.to} {...item} />
          ))}
        </CardGrid>
      </ContentSection>
    </>
  )
}
