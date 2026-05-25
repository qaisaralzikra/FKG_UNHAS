import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";

const DataReferensi = [
  {
    id: 1,
    title: "CIOMS_Clinical Research in Resources-limited Settings 2021",
    url: "https://drive.google.com/file/d/1aygN1pYfDfcU4nrKyvNXa0CFpSqJYt1U/view",
  },
  {
    id: 2,
    title:
      "CIOMS_International Ethical Guideline for Health-related Research Involving Humans 2016",
    url: "https://dent.unhas.ac.id/uploads/files/1752635318_76aff79ff5c5d5a216f8.pdf",
  },
  {
    id: 3,
    title: "ICH-Guideline for Good Clinical Practice E6(R3) 2025",
    url: "https://drive.google.com/file/d/1K0GgRQSXJJ453Pj8ZqDwl_UdqkmeICfY/view",
  },
  {
    id: 4,
    title: "Indonesian Food and Drug Authority (FDA) BPOM Nomor 8 Tahun 2024",
    url: "https://dent.unhas.ac.id/uploads/files/1752635866_cd005dee0960bfed7974.pdf",
  },
  {
    id: 5,
    title:
      "KEPPKN Guideline 2021_Pedoman dan Standar Etik Penelitian dan Pengembangan Kesehatan Nasional",
    url: "https://drive.google.com/file/d/1yBaIYpiUQ-I8RGYdM-_XQic4KQxabqbH/view",
  },
  {
    id: 6,
    title: "Medical Devices Guideline_Permenkes Nomor 63 Tahun 2017",
    url: "https://drive.google.com/file/d/1eqvAghdblRq3Qnv7wbwrSVTnYBijEPRz/view",
  },
  {
    id: 7,
    title:
      "Permenkes 75 Tahun 2020_Komite Etik Penelitian dan Pengembangan Kesehatan Nasional",
    url: "https://drive.google.com/file/d/16C-bDZ3aJOLSQf5mLoOYvLpi_yewscwL/view",
  },
  {
    id: 8,
    title:
      "Permenkes Nomor 85 Tahun 2020_Pengalihan dan Penggunaan Material, Muatan Informasi, dan Data",
    url: "https://drive.google.com/file/d/1YWw7mht2BzeYjkHZ6m4-wRT5wHNCROhE/view",
  },
  {
    id: 9,
    title: "Universal Declaration on Bioethics and Human Rights (2005) EN",
    url: "",
  },
  {
    id: 10,
    title: "Universal Declaration on Bioethics and Human Rights (2005) IND",
    url: "",
  },
  {
    id: 11,
    title:
      "UU Nomor 11 Tahun 2019_Sistem Nasional Ilmu Pengetahuan dan Teknologi",
    url: "",
  },
  {
    id: 12,
    title: "WHO GBT 2023",
    url: "https://dent.unhas.ac.id/uploads/files/1752648013_4dd90a1812abcb3601da.pdf",
  },
  {
    id: 13,
    title: "WHO Standards and Operational Guidance for Ethics Review 2011",
    url: "https://dent.unhas.ac.id/uploads/files/1752648001_51f38fbe3c54a57d0c4f.pdf",
  },
  {
    id: 14,
    title: "WMA Declaration of Helsinki 2013",
    url: "https://dent.unhas.ac.id/uploads/files/1752647992_62e1331a223d525145fc.pdf",
  },
  {
    id: 15,
    title: "WMA Declaration of Helsinki 2024",
    url: "https://dent.unhas.ac.id/uploads/files/1752647982_d6ec51aa109d51a89880.pdf",
  },
];

export function Referensi() {
  return (
    <>
      <PageHero
        title="Referensi Komite Etik"
        subtitle="Daftar Referensi Komite Etik"
      />
      <ContentSection>
        <BackLink to="/komite-etik" />
        <div className="max-w-[900px]">
          <p className="max-w-[900px] text-gray-600 text-base lg:text-[18px] mb-8">
            Referensi yang digunakan oleh KEPK FKG-RSGMP UNHAS dalam
            melaksanakan review etik mencakup pedoman nasional (KEPPKN), pedoman
            internasional (CIOMS, Declaration of Helsinki, ICH-GCP), dan
            peraturan perundang-undangan terkait penelitian kesehatan.
          </p>
          <div className="bg-white p-6 rounded-[16px] shadow-sm border border-gray-100 space-y-4">
            {DataReferensi.map((item, j) => (
              <a
                key={j}
                href={`${item.url}`}
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
      </ContentSection>
    </>
  );
}
