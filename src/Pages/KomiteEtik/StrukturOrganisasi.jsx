import StrukturOrganisasiIMG from "../../assets/StrukturOrganisasiKomiteEtik.png";
import AlurPengajuan from "../../assets/Alur_pengajuan.png";
import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";

export function StrukturOrganisasiKomiteEtik() {
  return (
    <>
      <PageHero
        title="Struktur Organisasi"
        subtitle="Struktur Organisasi Komite Etik"
      />
      <ContentSection>
        <BackLink to="/" />
        <div className="max-w-[900px]">
          <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100 grid gap-[40px] grid-cols-1 lg:grid-cols-2">
            <img className="rounded-[20px] lg:max-h-[900px]" loading="lazy" src={AlurPengajuan} alt="" />
            <img className="rounded-[20px] lg:max-h-[900px]" loading="lazy" src={StrukturOrganisasiIMG} alt="" />
          </div>
        </div>
      </ContentSection>
    </>
  );
}
