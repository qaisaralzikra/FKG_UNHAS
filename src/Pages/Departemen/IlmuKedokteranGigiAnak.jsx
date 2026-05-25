import { PageHero, ContentSection, BackLink, CardIMG } from "../../Component/PageLayout";
import Dosen from "../../assets/dosen.jpg";

export function IlmuKedokteranGigiAnak() {
  return (
    <>
      <PageHero
        title="Departemen Ilmu Kedokteran Gigi Anak"
        subtitle="Ilmu Kedokteran Gigi Anak FKG Unhas"
      />
      <ContentSection>
        <BackLink to="/departemen" />

        <div className="max-w-full space-y-6">
          <p className="max-w-[900px] text-gray-700 leading-relaxed">
            Departemen Ilmu Kedokteran Gigi Anak (Pedodonsia) berfokus pada
            perawatan kesehatan gigi dan mulut pada anak-anak, termasuk
            penanganan masalah pertumbuhan dan perkembangan gigi serta perilaku
            anak dalam perawatan gigi.
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
