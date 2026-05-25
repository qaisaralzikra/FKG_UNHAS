import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout"

export function ZonaIntegritasProfil() {
  return (
    <>
      <PageHero title="Zona Integritas" subtitle="Menuju Wilayah Bebas Korupsi" />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-[900px]">
          <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <i className="ri-shield-check-line text-4xl text-[#b00000]"></i>
              <h3 className="font-semibold text-xl text-black">Zona Integritas FKG Unhas</h3>
            </div>
            <p className="text-gray-700 text-base lg:text-[18px] leading-relaxed">
              FKG Unhas berkomitmen untuk mewujudkan Wilayah Bebas Korupsi (WBK) dan Wilayah Birokrasi Bersih Melayani (WBBM) melalui penerapan Zona Integritas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="https://drive.google.com/drive/folders/10aXnTs6uWai-dHupZPPz_tZKGYd1F169?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 hover:border-[#b00000] transition-colors flex items-center gap-4">
              <i className="ri-folder-open-line text-3xl text-[#b00000]"></i>
              <div>
                <h4 className="font-semibold text-black">Dokumen Zona Integritas</h4>
                <p className="text-sm text-gray-500">Akses dokumen pendukung</p>
              </div>
            </a>
            <a href="https://dent.unhas.ac.id/webcontent/sarpras" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 hover:border-[#b00000] transition-colors flex items-center gap-4">
              <i className="ri-file-search-line text-3xl text-[#b00000]"></i>
              <div>
                <h4 className="font-semibold text-black">Informasi Layanan</h4>
                <p className="text-sm text-gray-500">Informasi pelayanan publik</p>
              </div>
            </a>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
