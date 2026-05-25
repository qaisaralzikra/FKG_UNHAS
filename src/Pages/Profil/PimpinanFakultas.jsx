import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";
import { CardIMG } from "../../Component/PageLayout";

import IMG from "../../assets/dekan.png";

export function PimpinanFakultas() {
  return (
    <>
      <PageHero
        title="Pimpinan Fakultas"
        subtitle="Struktur pimpinan FKG Unhas"
      />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-full">
          <div className="max-w-[900px]">
            <p className="text-gray-600 text-base lg:text-[18px] mb-8">
              Berikut adalah daftar pimpinan Fakultas Kedokteran Gigi
              Universitas Hasanuddin.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <CardIMG
              img={IMG}
              nama="Irfan Sugianto, drg., Ph.D., M.Med., Sp.RKG"
              jabatan="Dekan"
            />
            <CardIMG
              img={IMG}
              nama="Acing Habibie Mude, drg., Ph.D., Sp.Pros., Subsp.OGST(K)"
              jabatan="Wakil Dekan Bidang Akademik"
            />
            <CardIMG
              img={IMG}
              nama="Dr. Juni Jekti Nugroho, drg., Sp.KG., Subsp., KE (K)"
              jabatan="Wakil Dekan Bidang Umum dan Keuangan"
            />
            <CardIMG
              img={IMG}
              nama="Erni Marlina,drg., Ph.D., Sp.PM, Subsp.Inf(K)"
              jabatan="Wakil Dekan Bidang Kemahasiswaan dan Alumni"
            />
          </div>
        </div>
      </ContentSection>
    </>
  );
}
