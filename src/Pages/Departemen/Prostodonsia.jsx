import { PageHero, ContentSection, BackLink, CardIMG } from "../../Component/PageLayout";
import Dosen from "../../assets/dosen.jpg";

export function Prostodonsia() {
  return (
    <>
      <PageHero
        title="Departemen Prostodonsia"
        subtitle="Prostodonsia FKG Unhas"
      />
      <ContentSection>
        <BackLink to="/departemen" />
        <div className="max-w-full space-y-6">
          <p className="max-w-[900px] ext-gray-700 leading-relaxed">
            Departemen Prostodonsia mempelajari diagnosis, perencanaan
            perawatan, dan pembuatan prostesis gigi untuk menggantikan gigi yang
            hilang serta jaringan rongga mulut terkait, termasuk gigi tiruan
            lepasan dan cekat.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <CardIMG
              img={Dosen}
              nama="Prof. Dr. Irene Edith Rieuwpassa, drg., M.Si., PBO"
              jabatan="Guru Besar / Profesor"
            />
            <CardIMG
              img={Dosen}
              nama="Prof. Dr. Irene Edith Rieuwpassa, drg., M.Si., PBO"
              jabatan="Guru Besar / Profesor"
            />
            <CardIMG
              img={Dosen}
              nama="Prof. Dr. Irene Edith Rieuwpassa, drg., M.Si., PBO"
              jabatan="Guru Besar / Profesor"
            />
            <CardIMG
              img={Dosen}
              nama="Prof. Dr. Irene Edith Rieuwpassa, drg., M.Si., PBO"
              jabatan="Guru Besar / Profesor"
            />
          </div>
        </div>
      </ContentSection>
    </>
  );
}
