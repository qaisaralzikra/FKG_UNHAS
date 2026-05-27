import { useEffect, useState } from "react";
import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";
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
        <div className="max-w-[340px] sm:max-w-[600px] md:max-w-[800px] lg:max-w-full overflow-hidden">
          <p className="max-w-[900px] text-gray-600 text-base lg:text-[18px] mb-8">
            Tenaga kependidikan di lingkungan Fakultas Kedokteran Gigi
            Universitas Hasanuddin yang profesional dan berdedikasi dalam
            mendukung pelaksanaan Tri Dharma Perguruan Tinggi.
          </p>
          <div
            className="w-full rounded-2xl border border-gray-200 shadow-sm bg-white"
            style={{
              overflowX: "auto",
              display: "block",
              maxWidth: "100%",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <table
              className="text-sm text-left text-gray-500"
              style={{
                width: "100%",
                minWidth: "760px",
                tableLayout: "fixed",
              }}
            >
              <thead>
                <tr className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                  <th className="py-4 px-6 text-start" style={{ width: "70px" }}>No</th>
                  <th className="py-4 px-6 text-center" style={{ width: "120px" }}>Foto</th>
                  <th className="py-4 px-6 text-start" style={{ width: "250px" }}>Nama</th>
                  <th className="py-4 px-6 text-start" style={{ width: "200px" }}>Unit Kerja</th>
                  <th className="py-4 px-6 text-start" style={{ width: "170px" }}>NIP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.map((d, index) => (
                  <tr
                    key={d.Uniq}
                    className={`${index % 2 === 1 ? "bg-gray-50/50" : "bg-white"} hover:bg-gray-50 transition-colors`}
                  >
                    <td className="py-4 px-6 font-medium text-gray-900" style={{ whiteSpace: "nowrap" }}>{index + 1}</td>
                    <td className="py-4 px-6 text-center">
                      <div className="w-[60px] h-[75px] overflow-hidden rounded-md border border-gray-100 shadow-sm bg-gray-50 mx-auto">
                        <img
                        loading="lazy"
                          src={`https://dent.unhas.ac.id/uploads/TenagaPendidik/${d.ContentDesc4}`}
                          className="w-full h-full object-cover object-center"
                          alt={d.ContentDesc1}
                          onError={(e) => {
                            e.target.src = "https://placehold.co/150x200?text=No+Image";
                          }}
                        />
                      </div>
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900" style={{ wordBreak: "break-word" }}>{d.ContentDesc1}</td>
                    <td className="py-4 px-6 text-gray-600" style={{ wordBreak: "break-word" }}>{d.ContentUnitID}</td>
                    <td className="py-4 px-6 text-gray-600 font-mono tracking-wider" style={{ whiteSpace: "nowrap" }}>{d.ContentDesc3}</td>
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
