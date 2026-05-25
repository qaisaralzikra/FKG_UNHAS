import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout"

export function Kontak() {
  return (
    <>
      <PageHero title="Kontak" subtitle="Informasi kontak Fakultas Kedokteran Gigi" />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-[900px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100">
                <i className="ri-map-pin-line text-3xl text-[#b00000]"></i>
                <h3 className="font-semibold text-lg text-black mt-3">Alamat</h3>
                <p className="text-gray-600 mt-2">
                  Jl. Perintis Kemerdekaan No.KM.10, Tamalanrea Indah,<br />
                  Kec. Tamalanrea, Kota Makassar,<br />
                  Sulawesi Selatan 90245
                </p>
              </div>
              <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100">
                <i className="ri-mail-line text-3xl text-[#b00000]"></i>
                <h3 className="font-semibold text-lg text-black mt-3">Email</h3>
                <a href="mailto:info@dent.unhas.ac.id" className="text-[#b00000] hover:underline mt-2 block">info@dent.unhas.ac.id</a>
              </div>
              <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100">
                <i className="ri-global-line text-3xl text-[#b00000]"></i>
                <h3 className="font-semibold text-lg text-black mt-3">Website</h3>
                <a href="https://dent.unhas.ac.id" target="_blank" rel="noopener noreferrer" className="text-[#b00000] hover:underline mt-2 block">dent.unhas.ac.id</a>
              </div>
            </div>
            <div className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg text-black mb-4">Jam Kerja</h3>
              <div className="space-y-3">
                {[{ hari: "Senin - Kamis", jam: "08:00 - 16:00" }, { hari: "Jumat", jam: "08:00 - 16:30" }, { hari: "Sabtu - Minggu", jam: "Libur" }].map((item, i) => (
                  <div key={i} className="flex justify-between pb-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600">{item.hari}</span>
                    <span className="font-medium text-black">{item.jam}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  )
}
