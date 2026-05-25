import {
  PageHero,
  ContentSection,
  BackLink,
  CardIMG,
} from "../../Component/PageLayout";
import Dosen from "../../assets/dosen.jpg";

export function OralMaxillofacialSurgery() {
  return (
    <>
      <PageHero
        title="Departemen Oral and Maxillofacial Surgery"
        subtitle="Bedah Mulut dan Maksilofasial FKG Unhas"
      />
      <ContentSection>
        <BackLink to="/departemen" />
        <div className="max-w-full space-y-6">
          <p className="max-w-[900px] text-gray-700 leading-relaxed">
            Departemen Oral and Maxillofacial Surgery (Bedah Mulut dan
            Maksilofasial) mempelajari diagnosis dan perawatan bedah pada
            penyakit, cedera, dan kelainan pada area mulut, rahang, dan wajah,
            termasuk pencabutan gigi impaksi, kista, tumor, dan rekonstruksi.
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
