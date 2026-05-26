import { useEffect, useState } from "react";
import { LoadingPage } from "../../Component/LoadingPage";
import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";
import Dekan from "../../assets/dekan.png";
import apiService from "../../Services/api";

// 1. Terima data dosen melalui props { data }
function StatistikDosen({ data }) {
  const listDosen = Array.isArray(data) ? data : [];

  const countByJabatan = (targetJabatan, isDekan = false) => {
    return listDosen.filter((dosen) => {
      if (isDekan) {
        const jabatanStruktural = (dosen.nama_jabatan || "")
          .toLowerCase()
          .trim();
        const unitKerja = (dosen.DeptNama || "").toLowerCase().trim();
        return jabatanStruktural === "dekan" || unitKerja.includes("dekan");
      }
      const jabatanFungsional = (dosen.nama_jabatan || "").toLowerCase().trim();
      return jabatanFungsional === targetJabatan.toLowerCase().trim();
    }).length;
  };

  const dataStatistik = [
    {
      label: "Guru Besar / Profesor",
      count: countByJabatan("Guru Besar / Profesor"),
      icon: "ri-honor-flash-line",
    },
    {
      label: "Lektor Kepala",
      count: countByJabatan("Lektor Kepala"),
      icon: "ri-award-line",
    },
    {
      label: "Lektor",
      count: countByJabatan("Lektor"),
      icon: "ri-user-star-line",
    },
    {
      label: "Asisten Ahli",
      count: countByJabatan("Asisten Ahli"),
      icon: "ri-user-shared-line",
    },
    {
      label: "Dekan",
      count: countByJabatan("Dekan", true),
      icon: "ri-briefcase-line",
    },
  ];

  return (
    // PERBAIKAN: Menghapus min-w-[900px] kaku yang merusak lebar halaman, diganti w-full murni
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4 mb-8 w-full">
      {dataStatistik.map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden bg-white border border-gray-100 p-4 lg:p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[110px] lg:min-h-[120px] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(176,0,0,0.08)] hover:-translate-y-1 group w-full"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#b00000] rounded-l-2xl transition-all duration-300 group-hover:w-[6px]"></div>

          <div className="flex justify-between items-start pl-1 lg:pl-2">
            <h3 className="font-semibold text-gray-500 text-[10px] lg:text-xs tracking-wide uppercase leading-tight max-w-[85%]">
              {item.label}
            </h3>
            <i
              className={`${item.icon} text-gray-300 text-base lg:text-xl transition-colors duration-300 group-hover:text-[#b00000]`}
            ></i>
          </div>

          <div className="pl-1 lg:pl-2 mt-3 flex items-baseline gap-1">
            <span className="text-2xl lg:text-4xl font-extrabold text-gray-800 tracking-tight transition-colors duration-300 group-hover:text-[#b00000]">
              {item.count}
            </span>
            <span className="text-gray-400 text-[10px] lg:text-xs font-medium">
              Orang
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function DataDosen() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiService
      .getDataDosen()
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
      <PageHero title="Data Dosen" subtitle="Informasi dosen FKG Unhas" />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-[340px] sm:max-w-[600px] md:max-w-[900px] overflow-hidden">
          <div className="max-w-[900px]">
            <p className="text-gray-600 text-sm lg:text-base mb-6">
              Fakultas Kedokteran Gigi Universitas Hasanuddin memiliki{" "}
              <span className="font-bold text-gray-900">
                {data?.length || 0}
              </span>{" "}
              dosen tetap yang berkompeten di bidangnya masing-masing.
            </p>
          </div>

          <div className="max-w-full">
            {/* Komponen statistik sekarang aman tidak akan mendesak layout keluar screen */}
            <StatistikDosen data={data} />

            {/* PERBAIKAN MUTLAK TABLE WRAPPER: Mengunci lebar maksimal kotak pembungkus */}
            <div className="w-full overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-sm mt-4">
              <table className="w-full text-sm text-left text-gray-500">
                <thead>
                  <tr className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                    <th className="py-4 px-6 text-start">No</th>
                    <th className="py-4 px-6 text-center">Foto</th>
                    <th className="py-4 px-6 text-start">Nama</th>
                    <th className="py-4 px-6 text-start">Unit Kerja</th>
                    <th className="py-4 px-6 text-start">NIP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data &&
                    data.map((d, index) => (
                      <tr
                        key={d.Uniq}
                        className={`${index % 2 === 1 ? "bg-gray-50/50" : "bg-white"} hover:bg-gray-50 transition-colors`}
                      >
                        <td className="py-4 px-6 font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="w-[60px] h-[75px] overflow-hidden rounded-md border border-gray-100 shadow-sm bg-gray-50 mx-auto">
                            <img
                              src={`https://dent.unhas.ac.id/uploads/dosen/${d.ContentDesc4}`}
                              className="w-full h-full object-cover object-center"
                              alt={d.ContentDesc1}
                              onError={(e) => {
                                e.target.src =
                                  "https://placehold.co/150x200?text=No+Image";
                              }}
                            />
                          </div>
                        </td>
                        <td className="py-4 px-6 font-semibold text-gray-900">
                          {d.ContentDesc1}
                        </td>
                        <td className="py-4 px-6 text-gray-600">
                          {d.DeptNama}
                        </td>
                        <td className="py-4 px-6 text-gray-600 font-mono tracking-wider">
                          {d.ContentDesc3}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
