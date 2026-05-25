import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";

export function Pendahuluan() {
  return (
    <>
      <PageHero
        title="Pendahuluan"
        subtitle="Komite Etik Penelitian Fakultas Kedokteran Gigi"
      />
      <ContentSection>
        <BackLink to="/" />
        <div className="max-w-[900px]">
          <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
            <div className="text-gray-700 text-base lg:text-[18px] leading-relaxed space-y-4">
              <p>
                Komite Etika Fakultas Kedokteran Gigi - Rumah Sakit Gigi
                Universitas Hasanuddin (KEPK FKG-RSGMP UNHAS) dibentuk pada
                tahun 2017 melalui Keputusan Dekan Fakultas Kedokteran Gigi No.
                1864/UN/413/KP.19/2017.
              </p>
              <p>
                Dari Fakultas Kedokteran Gigi No. 1864/UN/413/KP.19/2017.
                Prosedur Operasi Standar (SOP) ini merupakan hasil dari upaya
                yang luas dan berdedikasi, didorong oleh niat tulus dan komitmen
                yang kuat untuk menetapkan pedoman etika yang andal untuk
                penelitian kesehatan. Gugus tugas SOP telah mencurahkan waktu,
                energi, dan dedikasi yang tak tergoyahkan untuk merumuskan
                dokumen ini secara komprehensif dan sistematis.
              </p>
              <p>
                Harapan terbesar kami adalah agar SOP ini dapat berfungsi
                sebagai panduan referensi untuk pelaksanaan penelitian yang
                etis, tidak hanya dalam menjaga keselamatan dan hak-hak peserta
                penelitian, tetapi juga dalam memastikan kualitas layanan medis
                yang etis, profesional, dan akuntabel.
              </p>
              <p>
                Kami menyampaikan rasa terima kasih yang sebesar-besarnya kepada
                semua pihak yang telah berkontribusi dalam upaya ini—khususnya
                pimpinan Fakultas Kedokteran Gigi, Fakultas Kedokteran sebagai
                lembaga induk kami, Universitas Hasanuddin sebagai badan
                pengawas, dan semua kontributor lain yang namanya tidak dapat
                disebutkan satu per satu. Dukungan dan kolaborasi mereka telah
                memberikan fondasi yang kuat dalam upaya kami untuk menghasilkan
                penelitian berkualitas tinggi dan berdampak.
              </p>
              <p>
                Kami sangat berharap bahwa keberadaan Komite Etika ini akan
                membawa manfaat signifikan bagi para peneliti, institusi, dan
                masyarakat luas, serta memberikan kontribusi yang berarti bagi
                kemajuan ilmu pengetahuan dan peningkatan kesejahteraan bangsa.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="font-semibold text-black">Chairman</p>
              <p className="text-gray-700 mt-2">
                Erni Marlina
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
