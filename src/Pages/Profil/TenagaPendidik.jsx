import { useEffect, useState } from "react";
import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";
import Dekan from "../../assets/dekan.png";
import apiService from "../../Services/api";
import { LoadingPage } from "../../Component/LoadingPage";

export function TenagaPendidik() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiService
      .getDataPendidik()
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
        title="Tenaga Pendidik"
        subtitle="Informasi tenaga kependidikan FKG Unhas"
      />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-full">
          <p className="max-w-[900px] text-gray-600 text-base lg:text-[18px] mb-8">
            Tenaga kependidikan di lingkungan Fakultas Kedokteran Gigi
            Universitas Hasanuddin yang profesional dan berdedikasi dalam
            mendukung pelaksanaan Tri Dharma Perguruan Tinggi.
          </p>
          <div class="overflow-x-auto">
            <table class="$$table border-[2px] border-gray-200 rounded-[20px]">
              <thead className="border-[2px] border-gray-200">
                <tr>
                  <th className="py-[10px] px-[10px] text-start">No</th>
                  <th className="py-[10px] px-[10px] text-center">Foto</th>
                  <th className="py-[10px] px-[10px] text-start">Nama</th>
                  <th className="py-[10px] px-[10px] text-start">Unit Kerja</th>
                  <th className="py-[10px] px-[10px] text-cener">NIP</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, index) => (
                  <tr
                    key={d.Uniq}
                    className={`${index % 2 === 1 ? "bg-gray-100 hover:bg-gray-200" : "bg-white"}`}
                  >
                    <td className="py-[20px] px-[20px]">{index + 1}</td>
                    <td className="py-[20px] px-[20px]">
                      <div className="w-[80px] h-[100px] overflow-hidden rounded-[4px]">
                        <img src={`https://dent.unhas.ac.id/uploads/TenagaPendidik/${d.ContentDesc4}`} className="object-center" alt="" />
                      </div>
                    </td>
                    <td className="py-[20px] px-[20px]">{d.ContentDesc1}</td>
                    <td className="py-[20px] px-[20px]">{d.ContentUnitID}</td>
                    <td className="py-[20px] px-[20px]">{d.ContentDesc3}</td>
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
