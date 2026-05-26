import { useEffect, useState } from "react";
import {
  PageHero,
  ContentSection,
  BackLink,
  CardIMG,
} from "../../Component/PageLayout";

import IMG from "../../assets/dekan.png";
import apiService from "../../Services/api";
import { LoadingPage } from "../../Component/LoadingPage";

const prodi = [
  "Doktor Ilmu Kedokteran Gigi",
  "Magister Ilmu Kedokteran Gigi",
  "Pendidikan Dokter Gigi",
  "Pendidikan Profesi Dokter Gigi",
  "PPDGS Ilmu Bedah Mulut dan Maksilofasial",
  "PPDGS Kedokteran Gigi Anak",
  "PPDGS Konservasi Gigi",
  "PPDGS Ortodonti",
  "PPDGS Penyakit Mulut",
  "PPDGS Periodonsia",
  "PPDGS Prostodonsia",
  "PPDGS Radiologi Kedokteran Gigi",
];

export function ProfilFKG() {
  const [prodi, setProdi] = useState([]);
  const [dosen, setDosen] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    apiService
      .getProfil()
      .then((response) => {
        const result = response.data || response;

        if (result) {
          setProdi(result.prodiList || []);
          setDosen(result.dosenList || []);
        }

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

    if (loading) return <LoadingPage />;
    if (error) return <p className="text-center py-10 text-red-600">Gagal memuat data: {error}</p>;
  return (
    <>
      <PageHero
        title="Profil FKG"
        subtitle="Informasi lengkap Fakultas Kedokteran Gigi"
      />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-full space-y-8">
          <div className="max-w-[900px] space-y-8">
            <div>
              <h3 className="font-semibold text-xl text-[#b00000] mb-3">
                Sejarah Singkat
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Fakultas Kedokteran Gigi Universitas Hasanuddin (FKG Unhas)
                didirikan berdasarkan Surat Keputusan Rektor Universitas
                Hasanuddin No. 91/O/02/1983 dan resmi menjadi fakultas melalui
                Surat Keputusan Menteri Pendidikan dan Kebudayaan No.
                0563/O/1983. Sejak berdiri, FKG Unhas telah berkembang menjadi
                salah satu fakultas kedokteran gigi terkemuka di Indonesia
                Timur.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-[#b00000] mb-3">
                Akreditasi
              </h3>
              <div className="bg-white p-5 rounded-[16px] shadow-sm border border-gray-100 inline-block">
                <span className="inline-block bg-green-100 text-green-800 font-bold px-4 py-2 rounded-[10px] text-lg">
                  UNGGUL
                </span>
                <p className="text-gray-600 mt-2">
                  Terakreditasi UNGGUL oleh BAN-PT sejak tahun 2021.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-[#b00000] mb-3">
                Program Studi
              </h3>
              <p className="text-gray-600 mb-4">
                FKG Unhas menyelenggarakan {prodi.length} program studi:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {prodi.map((p, i) => (
                  <a
                    key={i, p.Uni1}
                    href={p.DeptDomain}
                    className="bg-white p-3 rounded-[10px] shadow-sm border border-gray-100 hover:border-[#b00000] duration-[0.3s] flex items-center gap-2 cursor-pointer"
                  >
                    <i className="ri-graduation-cap-line text-[#b00000]"></i>
                    <span className="text-gray-700">{p.DeptNama}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-[#b00000] mb-3">
              Pimpinan Fakultas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {dosen.map((item) => (
                  <CardIMG
                  key={item.id}
                    img={item.foto}
                    nama={item.nama}
                    jabatan={item.nama_jabatan}
                  />
                ))}
            </div>
          </div>
          <div className="bg-white p-5 rounded-[16px] shadow-sm border border-gray-100 max-w-[900px] space-y-8">
            <h3 className="font-semibold text-lg mb-2">Sumber Daya</h3>
            <p className="text-gray-600">
              FKG Unhas didukung oleh 84 dosen tetap dan puluhan tenaga
              kependidikan yang profesional, serta fasilitas laboratorium dan
              Rumah Sakit Gigi dan Mulut Pendidikan (RSGMP) yang lengkap.
            </p>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
