import { useEffect, useState } from "react";
import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";
import { CardIMG } from "../../Component/PageLayout";

import IMG from "../../assets/dekan.png";
import apiService from "../../Services/api";
import { LoadingPage } from "../../Component/LoadingPage";

export function PimpinanFakultas() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiService
      .getPimpinan()
      .then((response) => {
        const result = response.data?.dosenList || response;
        setData(result);
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
      <PageHero
        title="Pimpinan Fakultas"
        subtitle="Struktur pimpinan FKG Unhas"
      />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-full">
          <div className="max-w-full">
            <p className="text-gray-600 text-base lg:text-[18px] mb-8">
              Berikut adalah daftar pimpinan Fakultas Kedokteran Gigi
              Universitas Hasanuddin.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.map((item, index) => (
              <CardIMG
                img={item.foto}
                nama={item.nama}
                jabatan={item.nama_jabatan}
              />
            ))}
          </div>
        </div>
      </ContentSection>
    </>
  );
}
