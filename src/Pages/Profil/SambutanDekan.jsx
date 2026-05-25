import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";

export function SambutanDekan() {
  return (
    <>
      <PageHero
        title="Sambutan Dekan"
        subtitle="Kata sambutan dari Dekan Fakultas Kedokteran Gigi"
      />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-[900px]">
          <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-[80px] h-[80px] rounded-full bg-[#4A0000] flex items-center justify-center shrink-0">
                <i className="ri-quote-text text-3xl text-white"></i>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-black">
                  Irfan Sugianto, drg., Ph.D., M.Med., Sp.RKG.
                </h3>
                <p className="text-[#b00000] text-sm">
                  Dekan Fakultas Kedokteran Gigi - Universitas Hasanuddin
                </p>
              </div>
            </div>
            <div className="text-gray-700 text-base lg:text-[18px] leading-relaxed space-y-4">
              <p>
                Selamat datang di Website Program Studi Doktor Ilmu Kedokteran
                Gigi Fakultas Kedokteran Gigi Universitas Hasanuddin. Untuk
                mewujudkan Program Studi yang baik dan berkualitas, diperlukan
                sarana informasi yang interaktif dan dinamis agar Visi, Misi dan
                Tujuan Program Studi dapat terwujud dengan baik dan benar, salah
                satunya melalui Website.
              </p>
              <p>
                Dengan bangga kami mempersembahkan sebuah program studi yang
                berkomitmen untuk menghasilkan mahasiswa yang profesional di
                bidang kedokteran gigi yang kompeten, beretika dan berdedikasi
                tinggi dalam memberikan pelayanan kesehatan gigi yang terbaik
                bagi masyarakat.
              </p>
              <p>
                Visi Program Studi Doktor Kedokteran Gigi Fakultas Kedokteran
                Gigi Universitas Hasanuddin adalah menjadi pusat pengembangan
                ilmu pengetahuan, teknologi dan penelitian kedokteran gigi yang
                mampu bersaing di tingkat nasional dan internasional dalam
                bidang pendidikan, penelitian dan pengabdian kepada masyarakat
                yang berbasis Benua Maritim Indonesia.
              </p>
              <p>
                Sebagai Ketua Program Studi Doktor Kedokteran Gigi, saya merasa
                sangat terhormat dapat memimpin tim yang berdedikasi untuk
                memberikan pendidikan kedokteran gigi yang berkualitas. Kami
                memiliki staf pengajar yang berpengalaman dan fasilitas mutakhir
                yang mendukung pembelajaran, penelitian, pelayanan, dan praktik
                klinis para mahasiswa. Program Studi Doktor Kedokteran Gigi
                dirancang untuk menciptakan dokter gigi masa depan yang mampu
                menghadapi tantangan yang kompleks dalam perawatan kesehatan
                mulut. Kami menekankan kombinasi antara pengetahuan ilmiah yang
                kuat, keterampilan klinis tingkat lanjut, serta nilai-nilai
                etika dan profesionalisme yang tinggi.
              </p>
              <p>
                Dalam program ini, mahasiswa tidak hanya akan menerima
                pendidikan akademis yang kuat, tetapi juga memiliki kesempatan
                untuk berpartisipasi dalam penelitian inovatif di bidang
                kedokteran gigi. Kami percaya bahwa penelitian yang baik adalah
                landasan untuk kemajuan dalam perawatan kesehatan gigi.Kami
                mengundang Anda untuk mengeksplorasi lebih lanjut tentang
                Program Studi Doktor Kedokteran Gigi melalui situs web ini. Kami
                menyediakan informasi rinci tentang kurikulum, staf pengajar,
                fasilitas, dan informasi lain yang tersedia bagi mahasiswa kami.
              </p>
              <p>
                Terima kasih atas minat Anda pada Program Studi Doktor
                Kedokteran Gigi kami. Kami berharap dapat menjawab pertanyaan
                Anda dan membantu Anda dalam perjalanan pendidikan kedokteran
                gigi Anda. Semoga website ini dapat menjadi media informasi yang
                informatif dan bermanfaat.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="font-semibold text-black">Salam hangat,</p>
              <p className="text-gray-700 mt-2">
                Irfan Sugianto, drg., Ph.D., M.Med., Sp.RKG.
              </p>
              <p className="text-sm text-gray-500">
                Dekan Fakultas Kedokteran Gigi - Universitas Hasanuddin
              </p>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
