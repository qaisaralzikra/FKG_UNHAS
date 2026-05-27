import { Routes, Route, Link, useParams } from "react-router-dom";
import {
  PageHero,
  ContentSection,
  SectionTitle,
  BackLink,
} from "../../Component/PageLayout";
import { LoadingPage } from "../../Component/LoadingPage";
import { useEffect, useState } from "react";
import apiService from "../../Services/api";

const items = [
  {
    // slug: "akreditasi",
    title: "Akreditasi",
    icon: "ri-award-line",
    category: "Informasi Akademik",
    desc: "Informasi akreditasi program studi di FKG Unhas.",
    content: "akreditasi",
  },
  {
    slug: "kontrak-kinerja",
    title: "SK & Kontrak Kinerja",
    icon: "ri-file-text-line",
    category: "Informasi Akademik",
    desc: "Surat keputusan dan kontrak kinerja.",
    content: "sk",
  },
  {
    slug: "pengabdian",
    title: "Pengabdian",
    icon: "ri-heart-line",
    category: "Informasi Akademik",
    desc: "Kegiatan Pengabdian kepada masyarakat.",
    content: "pengabdian",
  },
  {
    slug: "kemahasiswaan",
    title: "Kemahasiswaan",
    icon: "ri-user-community-line",
    category: "Kemahasiswaan",
    desc: "Informasi kegiatan kemahasiswaan.",
    content: "kemahasiswaan",
  },
  {
    slug: "ormawa",
    title: "Ormawa",
    icon: "ri-group-line",
    category: "Kemahasiswaan",
    desc: "Organisasi mahasiswa di FKG Unhas.",
    content: "ormawa",
  },
  {
    slug: "buku-pedoman",
    title: "Buku Pedoman",
    icon: "ri-book-open-line",
    category: "Lainnya",
    desc: "Buku pedoman akademik dan panduan.",
    content: "buku-pedoman",
  },
];

const contentMap = {
  akreditasi: {
    title: "Akreditasi",
    body: "Program studi di FKG Unhas telah terakreditasi oleh LAM-PTKes dan BAN-PT. Fakultas Kedokteran Gigi Universitas Hasanuddin meraih akreditasi UNGGUL sejak tahun 2021. Seluruh program studi terus diupayakan untuk mempertahankan dan meningkatkan peringkat akreditasi baik nasional maupun internasional.",
  },
  "sk-kontrak-kinerja": {
    title: "SK & Kontrak Kinerja",
    body: "Surat Keputusan dan Kontrak Kinerja merupakan dokumen yang memuat penetapan dan perjanjian kinerja antara pimpinan universitas, fakultas, dan program studi dalam rangka mewujudkan target kinerja yang telah ditetapkan.",
  },
  Kemahasiswaan: {
    title: "Kemahasiswaan",
    body: "Kegiatan Kemahasiswaan kepada masyarakat di FKG Unhas dilaksanakan oleh dosen dan mahasiswa sebagai implementasi Tri Dharma Perguruan Tinggi. Kegiatan meliputi penyuluhan kesehatan gigi, pemeriksaan gigi gratis, dan pemberdayaan masyarakat di bidang kesehatan gigi dan mulut.",
  },
  kemahasiswaan: {
    title: "Kemahasiswaan",
    body: "Bidang Kemahasiswaan FKG Unhas menaungi berbagai kegiatan pengembangan minat, bakat, dan penalaran mahasiswa. Program kemahasiswaan meliputi kegiatan ilmiah, seni, olahraga, dan organisasi yang bertujuan mengembangkan soft skills mahasiswa.",
  },
  ormawa: {
    title: "Ormawa",
    body: "Organisasi Mahasiswa (Ormawa) di FKG Unhas terdiri dari Badan Eksekutif Mahasiswa (BEM), Himpunan Mahasiswa (HIMA), dan Unit Kegiatan Mahasiswa (UKM) yang berperan aktif dalam mengembangkan potensi mahasiswa di berbagai bidang.",
  },
  "buku-pedoman": {
    title: "Buku Pedoman",
    body: "Buku Pedoman Akademik FKG Unhas memuat panduan lengkap mengenai kurikulum, sistem pembelajaran, penilaian, dan aturan akademik yang berlaku bagi mahasiswa di seluruh program studi.",
  },
};

function AkademikIndex() {
  const categories = ["Informasi Akademik", "Kemahasiswaan", "Lainnya"];

  return (
    <>
      <PageHero title="Akademik" subtitle="Informasi akademik FKG Unhas" />
      <ContentSection>
        <SectionTitle>Informasi Akademik</SectionTitle>
        <p className="text-gray-600 mt-2 text-base lg:text-[18px] max-w-[800px]">
          Informasi terkait kegiatan akademik, akreditasi, kemahasiswaan, dan
          buku pedoman di FKG Unhas.
        </p>
        {categories.map((cat) => (
          <div key={cat} className="mt-8">
            <h3 className="font-semibold text-xl text-[#b00000] mb-4">{cat}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {items
                .filter((i) => i.category === cat)
                .map((item) => (
                  <Link
                    key={item.slug}
                    to={`/akademik/${item.slug ? item.slug : ''}/${item.content}`}
                    className="bg-white p-6 rounded-[20px] shadow-sm border border-gray-100 hover:shadow-md hover:border-[#b00000] transition-all group"
                  >
                    <i className={`${item.icon} text-3xl text-[#b00000]`}></i>
                    <h3 className="font-semibold text-lg text-black group-hover:text-[#b00000] transition-colors mt-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </ContentSection>
    </>
  );
}

function AkademikDetail() {
  const { slug } = useParams();
  const content = contentMap[slug];
  const title =
    content?.title ||
    slug?.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) ||
    "Detail";

  return (
    <>
      <PageHero title={title} subtitle="Akademik FKG Unhas" />
      <ContentSection>
        <BackLink to="/akademik" />
        <div className="max-w-[900px]">
          <p className="text-gray-700 leading-relaxed">
            {content?.body || "Informasi tidak tersedia."}
          </p>
        </div>
      </ContentSection>
    </>
  );
}

function Akreditasi() {
  const [prodi, setProdi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    apiService
      .getAkreditasi()
      .then((response) => {
        const result = response.data || response;

        if (result) {
          setProdi(result.prodiList || []);
        }

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingPage />;
  if (error)
    return (
      <p className="text-center py-10 text-red-600">
        Gagal memuat data: {error}
      </p>
    );
  return (
    <>
      <PageHero title={"Akreditasi"} subtitle="Akademik FKG Unhas" />
      <ContentSection>
        <BackLink to="/akademik" />
        <div className="max-w-[350px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-full overflow-hidden">
          <div class="overflow-x-auto">
            <table class="$$table border-[2px] border-gray-200 rounded-[20px]">
              <thead className="border-[2px] border-gray-200">
                <tr>
                  <th className="py-[10px] px-[10px] text-start">No</th>
                  <th className="py-[10px] px-[10px] text-start">
                    Program Studi
                  </th>
                  <th className="py-[10px] px-[10px] text-center">LAMPT-KES</th>
                  <th className="py-[10px] px-[10px] text-center">
                    Internasional
                  </th>
                </tr>
              </thead>
              <tbody>
                {prodi.map((d, index) => (
                  <tr
                    key={d.Uniq}
                    className={`${index % 2 === 1 ? "bg-gray-100 hover:bg-gray-200" : "bg-white"}`}
                  >
                    <td className="py-[20px] px-[20px]">{index + 1}</td>
                    <td className="py-[20px] px-[20px]">{d.DeptNama}</td>
                    <td className="py-[20px] px-[20px] w-[200px] text-center">
                      {d.file_akreditasi ? (
                        <a
                          target="_blank"
                          href={`https://dent.unhas.ac.id/${d.file_akreditasi}`}
                          className="py-[10px] px-[20px] bg-[#b00000] rounded-[10px] text-white"
                        >
                          Lihat
                        </a>
                      ) : (
                        ""
                      )}
                    </td>
                    <td className="py-[20px] px-[20px] w-[200px] text-center">
                      {d.file_akreditasi_intl ? (
                        <a
                          target="_blank"
                          href={`https://dent.unhas.ac.id/${d.file_akreditasi}`}
                          className="py-[10px] px-[20px] bg-[#b00000] rounded-[10px] text-white"
                        >
                          Lihat
                        </a>
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ContentSection>
    </>
  );
}

function Sk() {
  const { content } = useParams();

  const [sk, setSK] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    apiService
      .getWebcontent(content)
      .then((response) => {
        const result = response.data || response;

        if (result) {
          setSK(result.webcontentList || []);
        }

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [content]);

  if (loading) return <LoadingPage />;
  if (error)
    return (
      <p className="text-center py-10 text-red-600">
        Gagal memuat data: {error}
      </p>
    );
  return (
    <>
      <PageHero title={"SK & Kontrak Kinerja"} subtitle="Akademik FKG Unhas" />
      <ContentSection>
      <BackLink to="/akademik" />
        <div className="max-w-[900px] lg:min-w-[800px] md:min-w-[600px] sm:min-w-[400px] min-w-[260px] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] rounded-[20px] p-[20px]">
          {sk.length > 0 ? (
            <div class="overflow-x-auto">
              <table class="$$table border-[2px] border-gray-200 rounded-[20px]">
                <thead className="border-[2px] border-gray-200">
                  <tr>
                    <th colSpan={5} className="py-[10px] px-[10px] text-start">
                      data belum di ambil
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sk.map((d, index) => (
                    <tr
                      key={d.Uniq}
                      className={`${index % 2 === 1 ? "bg-gray-100 hover:bg-gray-200" : "bg-white"}`}
                    >
                      <td
                        colSpan={5}
                        className="py-[10px] px-[10px] text-start"
                      >
                        data belum di ambil
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              Data <strong>{content}</strong> tidak ditemukan.
            </div>
          )}
        </div>
      </ContentSection>
    </>
  );
}

function Pengabdian() {
  const { content } = useParams();

  const [Kemahasiswaan, setKemahasiswaan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    apiService
      .getWebcontent(content)
      .then((response) => {
        const result = response.data || response;

        if (result) {
          setKemahasiswaan(result.webcontentList || []);
        }

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [content]);

  if (loading) return <LoadingPage />;
  if (error)
    return (
      <p className="text-center py-10 text-red-600">
        Gagal memuat data: {error}
      </p>
    );
  return (
    <>
      <PageHero title={"Pengabdian"} subtitle="Akademik FKG Unhas" />
      <ContentSection>
      <BackLink to="/akademik" />
        <div className="max-w-[900px] lg:min-w-[800px] md:min-w-[600px] sm:min-w-[400px] min-w-[260px] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] rounded-[20px] p-[20px]">
          {Kemahasiswaan.length > 0 ? (
            <div class="overflow-x-auto">
              <table class="$$table border-[2px] border-gray-200 rounded-[20px]">
                <thead className="border-[2px] border-gray-200">
                  <tr>
                    <th colSpan={5} className="py-[10px] px-[10px] text-start">
                      data belum di ambil
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Kemahasiswaan.map((d, index) => (
                    <tr
                      key={d.Uniq}
                      className={`${index % 2 === 1 ? "bg-gray-100 hover:bg-gray-200" : "bg-white"}`}
                    >
                      <td colSpan={5} className="py-[20px] px-[20px]">
                        Data Belum Di ambil
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              Data <strong>{content}</strong> tidak ditemukan.
            </div>
          )}
        </div>
      </ContentSection>
    </>
  );
}

function Kemahasiswaan() {
  const { content } = useParams();

  const [Kemahasiswaan, setKemahasiswaan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    apiService
      .getWebcontent(content)
      .then((response) => {
        const result = response.data || response;

        if (result) {
          setKemahasiswaan(result.webcontentList || []);
        }

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [content]);

  if (loading) return <LoadingPage />;
  if (error)
    return (
      <p className="text-center py-10 text-red-600">
        Gagal memuat data: {error}
      </p>
    );
  return (
    <>
      <PageHero title={"Kemahasiswaan"} subtitle="Kemahasiswaan FKG Unhas" />
      <ContentSection>
      <BackLink to="/akademik" />
        <div className="max-w-[900px] lg:min-w-[800px] md:min-w-[600px] sm:min-w-[400px] min-w-[260px] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] rounded-[20px] p-[20px]">
          {Kemahasiswaan.length > 0 ? (
            <div class="overflow-x-auto">
              <table class="$$table border-[2px] border-gray-200 rounded-[20px]">
                <thead className="border-[2px] border-gray-200">
                  <tr>
                    <th colSpan={5} className="py-[10px] px-[10px] text-start">
                      data belum di ambil
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Kemahasiswaan.map((d, index) => (
                    <tr
                      key={d.Uniq}
                      className={`${index % 2 === 1 ? "bg-gray-100 hover:bg-gray-200" : "bg-white"}`}
                    >
                      <td colSpan={5} className="py-[20px] px-[20px]">
                        Data Belum Di ambil
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              Data <strong>{content}</strong> tidak ditemukan.
            </div>
          )}
        </div>
      </ContentSection>
    </>
  );
}

function Ormawa() {
  const { content } = useParams();

  const [Ormawa, setOrmawa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    apiService
      .getWebcontent(content)
      .then((response) => {
        const result = response.data || response;

        if (result) {
          setOrmawa(result.webcontentList || []);
        }

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [content]);

  if (loading) return <LoadingPage />;
  if (error)
    return (
      <p className="text-center py-10 text-red-600">
        Gagal memuat data: {error}
      </p>
    );
  return (
    <>
      <PageHero title={"Ormawa"} subtitle="Kemahasiswaan FKG Unhas" />
      <ContentSection>
      <BackLink to="/akademik" />
        <div className="max-w-[900px] lg:min-w-[800px] md:min-w-[600px] sm:min-w-[400px] min-w-[260px] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] rounded-[20px] p-[20px]">
          {Ormawa.length > 0 ? (
            <div class="overflow-x-auto">
              <table class="$$table border-[2px] border-gray-200 rounded-[20px]">
                <thead className="border-[2px] border-gray-200">
                  <tr>
                    <th colSpan={5} className="py-[10px] px-[10px] text-start">
                      data belum di ambil
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Ormawa.map((d, index) => (
                    <tr
                      key={d.Uniq}
                      className={`${index % 2 === 1 ? "bg-gray-100 hover:bg-gray-200" : "bg-white"}`}
                    >
                      <td colSpan={5} className="py-[20px] px-[20px]">
                        Data Belum Di ambil
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              Data <strong>{content}</strong> tidak ditemukan.
            </div>
          )}
        </div>
      </ContentSection>
    </>
  );
}

function BukuPedoman() {
  const { content } = useParams();

  const [BukuPedoman, setBukuPedoman] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    apiService
      .getWebcontent(content)
      .then((response) => {
        const result = response.data || response;

        if (result) {
          setBukuPedoman(result.webcontentList || []);
        }

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [content]);

  if (loading) return <LoadingPage />;
  if (error)
    return (
      <p className="text-center py-10 text-red-600">
        Gagal memuat data: {error}
      </p>
    );
  return (
    <>
      <PageHero title={"Buku Pedoman"} subtitle="Akademik FKG Unhas" />
      <ContentSection>
        <div className="max-w-[900px] lg:min-w-[800px] md:min-w-[600px] sm:min-w-[400px] min-w-[260px] shadow-[0_0_20px_0_rgba(0,0,0,0.1)] rounded-[20px] p-[20px]">
          <BackLink to="/akademik" />
          {BukuPedoman.length > 0 ? (
            <div class="overflow-x-auto">
              <table class="$$table border-[2px] border-gray-200 rounded-[20px]">
                <thead className="border-[2px] border-gray-200">
                  <tr>
                    <th colSpan={5} className="py-[10px] px-[10px] text-start">
                      data belum di ambil
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {BukuPedoman.map((d, index) => (
                    <tr
                      key={d.Uniq}
                      className={`${index % 2 === 1 ? "bg-gray-100 hover:bg-gray-200" : "bg-white"}`}
                    >
                      <td colSpan={5} className="py-[20px] px-[20px]">
                        Data Belum Di ambil
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              Data <strong>Buku Pedoman</strong> tidak ditemukan.
            </div>
          )}
        </div>
      </ContentSection>
    </>
  );
}

export function Akademik() {
  return (
    <Routes>
      <Route index element={<AkademikIndex />} />
      <Route path=":slug" element={<AkademikDetail />} />
      <Route path="/akreditasi" element={<Akreditasi />} />
      <Route path="/kontrak-kinerja/:content" element={<Sk />} />
      <Route path="/pengabdian/:content" element={<Pengabdian />} />
      <Route path="/kemahasiswaan/:content" element={<Kemahasiswaan />} />
      <Route path="/ormawa/:content" element={<Ormawa />} />
      <Route path="/buku-pedoman/:content" element={<BukuPedoman />} />
    </Routes>
  );
}
