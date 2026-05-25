import { PageHero, ContentSection, BackLink, CardIMG } from "../../Component/PageLayout";
import Dosen from "../../assets/dosen.jpg";

export function KonservasiGigi() {
  return (
    <>
      <PageHero
        title="Departemen Konservasi Gigi"
        subtitle="Konservasi Gigi FKG Unhas"
      />
      <ContentSection>
        <BackLink to="/departemen" />
        <div className="max-w-full space-y-6">
          <p className="max-w-[900px] text-gray-700 leading-relaxed">
            Departemen Konservasi Gigi berfokus pada perawatan restorasi gigi,
            perawatan saluran akar (endodontik), dan estetika gigi untuk
            mempertahankan struktur gigi alami.
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
