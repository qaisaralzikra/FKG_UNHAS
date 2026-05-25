import { PageHero, ContentSection, BackLink, CardIMG } from "../../Component/PageLayout";
import Dosen from "../../assets/dosen.jpg";

export function Periodonsia() {
  return (
    <>
      <PageHero
        title="Departemen Periodonsia"
        subtitle="Periodonsia FKG Unhas"
      />
      <ContentSection>
        <BackLink to="/departemen" />
        <div className="max-w-full space-y-6">
          <p className="max-w-[900px] text-gray-700 leading-relaxed">
            Departemen Periodonsia mempelajari kesehatan jaringan pendukung gigi
            (gingiva, ligamen periodontal, sementum, dan tulang alveolar), serta
            diagnosis dan perawatan penyakit periodontal.
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
