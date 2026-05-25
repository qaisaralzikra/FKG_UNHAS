import { Routes, Route } from "react-router-dom"
import { PageHero, ContentSection, SectionTitle, CardGrid, CardLink } from "../../Component/PageLayout"
import { BiologiOral } from "./BiologiOral"
import { IlmuBahanDanTeknologi } from "./IlmuBahanDanTeknologi"
import { IlmuKedokteranGigiAnak } from "./IlmuKedokteranGigiAnak"
import { IKGMPencegahan } from "./IKGMPencegahan"
import { IlmuPenyakitMulut } from "./IlmuPenyakitMulut"
import { KonservasiGigi } from "./KonservasiGigi"
import { OralMaxillofacialRadiology } from "./OralMaxillofacialRadiology"
import { Ortodonti } from "./Ortodonti"
import { Periodonsia } from "./Periodonsia"
import { Prostodonsia } from "./Prostodonsia"
import { OralMaxillofacialSurgery } from "./OralMaxillofacialSurgery"

const depts = [
  { to: "/departemen/biologi-oral", title: "Departemen Biologi Oral", icon: "ri-microscope-line" },
  { to: "/departemen/ilmu-bahan-dan-teknologi", title: "Departemen Ilmu Bahan dan Teknologi", icon: "ri-flask-line" },
  { to: "/departemen/ilmu-kedokteran-gigi-anak", title: "Departemen Ilmu Kedokteran Gigi Anak", icon: "ri-user-smile-line" },
  { to: "/departemen/ilmu-kedokteran-gigi-masyarakat-pencegahan", title: "Departemen Ilmu Kedokteran Gigi Masyarakat - Pencegahan", icon: "ri-team-line" },
  { to: "/departemen/ilmu-penyakit-mulut", title: "Departemen Ilmu Penyakit Mulut", icon: "ri-stethoscope-line" },
  { to: "/departemen/konservasi-gigi", title: "Departemen Konservasi Gigi", icon: "ri-tooth-line" },
  { to: "/departemen/oral-and-maxillofacial-radiology", title: "Departemen Oral and Maxillofacial Radiology", icon: "ri-x-ray-line" },
  { to: "/departemen/ortodonti", title: "Departemen Ortodonti", icon: "ri-brackets-line" },
  { to: "/departemen/periodonsia", title: "Departemen Periodonsia", icon: "ri-heart-pulse-line" },
  { to: "/departemen/prostodonsia", title: "Departemen Prostodonsia", icon: "ri-tools-line" },
  { to: "/departemen/oral-and-maxillofacial-surgery", title: "Departemen Oral and Maxillofacial Surgery", icon: "ri-surgical-mask-line" },
]

function DepartemenIndex() {
  return (
    <>
      <PageHero title="Departemen" subtitle="Departemen di lingkungan FKG Unhas" />
      <ContentSection>
        <SectionTitle>Departemen Fakultas Kedokteran Gigi</SectionTitle>
        <p className="text-gray-600 mt-2 text-base lg:text-[18px] max-w-[800px]">
          Fakultas Kedokteran Gigi Universitas Hasanuddin memiliki 11 departemen yang menaungi berbagai bidang ilmu kedokteran gigi.
        </p>
        <CardGrid>
          {depts.map((dept, i) => (
            <CardLink key={i} {...dept} description={""} />
          ))}
        </CardGrid>
      </ContentSection>
    </>
  )
}

export function Departemen() {
  return (
    <Routes>
      <Route index element={<DepartemenIndex />} />
      <Route path="biologi-oral" element={<BiologiOral />} />
      <Route path="ilmu-bahan-dan-teknologi" element={<IlmuBahanDanTeknologi />} />
      <Route path="ilmu-kedokteran-gigi-anak" element={<IlmuKedokteranGigiAnak />} />
      <Route path="ilmu-kedokteran-gigi-masyarakat-pencegahan" element={<IKGMPencegahan />} />
      <Route path="ilmu-penyakit-mulut" element={<IlmuPenyakitMulut />} />
      <Route path="konservasi-gigi" element={<KonservasiGigi />} />
      <Route path="oral-and-maxillofacial-radiology" element={<OralMaxillofacialRadiology />} />
      <Route path="ortodonti" element={<Ortodonti />} />
      <Route path="periodonsia" element={<Periodonsia />} />
      <Route path="prostodonsia" element={<Prostodonsia />} />
      <Route path="oral-and-maxillofacial-surgery" element={<OralMaxillofacialSurgery />} />
    </Routes>
  )
}
