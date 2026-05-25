import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout"
import StrukturOrganisasiIMG from "../../assets/StrukturOrganisasi.png"


export function StrukturOrganisasi() {
  return (
    <>
      <PageHero title="Struktur Organisasi" subtitle="Bagan organisasi FKG Unhas" />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-[900px]">
          <p className="text-gray-600 text-base lg:text-[18px] mb-8">
            Struktur organisasi Fakultas Kedokteran Gigi Universitas Hasanuddin terdiri dari:
          </p>
          <img src={StrukturOrganisasiIMG} alt="" />
        </div>
      </ContentSection>
    </>
  )
}
