import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout"
import PerjanjianIMG from "../../assets/Perjanjian.jpg"

export function Perjanjian() {
  return (
    <>
      <PageHero title="Perjanjian" subtitle="Dokumen perjanjian dan kerjasama FKG Unhas" />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-[900px]">
          <p className="text-gray-600 text-base lg:text-[18px] mb-8">
            Fakultas Kedokteran Gigi Universitas Hasanuddin menjalin kerjasama dengan berbagai institusi pendidikan dan penelitian di dalam dan luar negeri.
          </p>
          <div>
            <img src={PerjanjianIMG} alt="" />
          </div>
        </div>
      </ContentSection>
    </>
  )
}
