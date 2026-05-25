import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";

export function AnggotaKE() {
  return (
    <>
      <PageHero
        title="Anggota Komite Etik"
        subtitle="Daftar Anggota Komite Etik Fakultas Kedokteran Gigi"
      />
      <ContentSection>
        <BackLink to="/" />
        <div className="max-w-[900px]">
          <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100 grid gap-[40px] grid-cols-1 lg:grid-cols-2">
            <a
              href="https://drive.google.com/file/d/1y9dcukwqO9Xj86azkLjxQzPV9cOZOZXY/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-5 rounded-[16px] shadow-sm border border-gray-100 hover:border-[#b00000] transition-colors flex items-center gap-3 group"
            >
              <i className="ri-graduation-cap-line text-2xl text-[#b00000]"></i>
              <span className="font-medium text-black group-hover:text-[#b00000] transition-colors">
                Anggota Komite Etik
              </span>
              <i className="ri-external-link-line text-gray-400 ml-auto text-sm"></i>
            </a>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
