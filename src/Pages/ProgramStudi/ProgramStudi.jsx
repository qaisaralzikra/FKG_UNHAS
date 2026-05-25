import {
  PageHero,
  ContentSection,
  SectionTitle,
} from "../../Component/PageLayout";

const prodi = [
  {
    level: "Doktor",
    items: [
      {
        title: "Doktor Ilmu Kedokteran Gigi",
        slug: "doktor-ilmu-kedokteran-gigi",
      },
    ],
  },
  {
    level: "Magister",
    items: [
      {
        title: "Magister Ilmu Kedokteran Gigi",
        slug: "magister-kedokteran-gigi",
      },
    ],
  },
  {
    level: "Sarjana & Profesi",
    items: [
      {
        title: "Pendidikan Dokter Gigi",
        slug: "sarjana-pendidikan-dokter-gigi",
      },
      { title: "Pendidikan Profesi Dokter Gigi", slug: "profesi-dokter-gigi" },
    ],
  },
  {
    level: "PPDGS",
    items: [
      {
        title: "PPDGS Ilmu Bedah Mulut dan Maksilofasial",
        slug: "ppdgs-bedah-mulut-dan-maksilofasial",
      },
      {
        title: "PPDGS Kedokteran Gigi Anak",
        slug: "ppdgs-ilmu-kedokteran-gigi-anak",
      },
      { title: "PPDGS Konservasi Gigi", slug: "ppdgs-ilmu-konservasi-gigi" },
      { title: "PPDGS Ortodonti", slug: "ppdgs-ortodonti" },
      { title: "PPDGS Penyakit Mulut", slug: "ppdgs-ilmu-penyakit-mulut" },
      { title: "PPDGS Periodonsia", slug: "ppdgs-dokter-gigi-periodonsia" },
      { title: "PPDGS Prostodonsia", slug: "ppdgs-prostodonsia" },
      {
        title: "PPDGS Radiologi Kedokteran Gigi",
        slug: "ppdgs-radiologi-kedokteran-gigi",
      },
    ],
  },
];

export function ProgramStudi() {
  return (
    <>
      <PageHero
        title="Program Studi"
        subtitle="Program pendidikan di FKG Unhas"
      />
      <ContentSection>
        <SectionTitle>Program Studi FKG Unhas</SectionTitle>
        <p className="text-gray-600 mt-2 text-base lg:text-[18px] max-w-[800px]">
          FKG Unhas menyelenggarakan berbagai program pendidikan dari jenjang
          sarjana hingga spesialis.
        </p>
        <div className="space-y-8 mt-8">
          {prodi.map((group, i) => (
            <div key={i}>
              <h3 className="font-semibold text-xl text-[#b00000] mb-4">
                {group.level}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((item, j) => (
                  <a
                    key={j}
                    href={`https://prodi.unhas.ac.id/${item.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-5 rounded-[16px] shadow-sm border border-gray-100 hover:border-[#b00000] transition-colors flex items-center gap-3 group"
                  >
                    <i className="ri-graduation-cap-line text-2xl text-[#b00000]"></i>
                    <span className="font-medium text-black group-hover:text-[#b00000] transition-colors">
                      {item.title}
                    </span>
                    <i className="ri-external-link-line text-gray-400 ml-auto text-sm"></i>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
