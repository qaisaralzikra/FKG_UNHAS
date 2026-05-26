import { useParams } from "react-router-dom";
import {
  PageHero,
  ContentSection,
  SectionTitle,
} from "../../Component/PageLayout";
import { useEffect, useState } from "react";
import apiService from "../../Services/api";
import { LoadingPage } from "../../Component/LoadingPage";

export function ProgramStudi() {
  const [prodiList, setProdiList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    apiService
      .getProdi()
      .then((response) => {
        const resData = response.data || response;
        if (resData) {
          // Masukkan array flat prodiList dari API CI4
          setProdiList(resData.prodiList || []);
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
        Gagal memuat Data: {error}
      </p>
    );

  if (!prodiList || prodiList.length === 0)
    return <p className="text-center py-10">Program studi tidak ditemukan</p>;

  // --- LOGIKA GROUPING BERDASARKAN KATA PERTAMA ---
  const groupedProdi = prodiList.reduce((groups, item) => {
    // Ambil kata pertama dari DeptNama (contoh: "Doktor", "Magister", "Pendidikan", "PPDGS")
    const namaProdi = item.DeptNama || "";
    const kataPertama = namaProdi.trim().split(" ")[0];

    // Jika kata pertamanya adalah "Pendidikan", kita gabungkan menjadi satu grup "Sarjana & Profesi" agar lebih rapi secara UX
    let groupKey = kataPertama;
    if (kataPertama === "Pendidikan") {
      groupKey = "Sarjana & Profesi";
    }

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(item);
    return groups;
  }, {});

  // Urutan tampil grup yang diinginkan secara manual agar rapi secara akademis
  const urutanGrup = ["Doktor", "Magister", "Sarjana & Profesi", "PPDGS"];

  // Dapatkan sisa grup jika ada kata pertama lain yang tidak terdaftar di urutanGrup
  const semuaGrupTersedia = Object.keys(groupedProdi);
  const grupTampil = [
    ...urutanGrup.filter((g) => semuaGrupTersedia.includes(g)),
    ...semuaGrupTersedia.filter((g) => !urutanGrup.includes(g)),
  ];
  return (
    <>
      <PageHero
        title="Program Studi"
        subtitle="Program pendidikan di FKG Unhas"
      />
      <ContentSection>
        <SectionTitle>Program Studi FKG Unhas</SectionTitle>
        <p className="text-gray-600 mt-2 text-base lg:text-[18px] max-w-[800px]">
          FKG Unhas menyelenggarakan berbagai program pendidikan dari jenjang
          sarjana hingga spesialis.
        </p>
        <div className="space-y-8 mt-8">
          {grupTampil.map((namaGrup) => (
            <div>
              <h3 className="font-semibold text-xl text-[#b00000] mb-4">
                {namaGrup}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {groupedProdi[namaGrup].map((item) => (
                  <a
                    key={item.Uniq}
                    href={`${item.DeptDomain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-5 rounded-[16px] shadow-sm border border-gray-100 hover:border-[#b00000] transition-colors flex items-center gap-3 group"
                  >
                    <i className="ri-graduation-cap-line text-2xl text-[#b00000]"></i>
                    <span className="font-medium text-black group-hover:text-[#b00000] transition-colors">
                      {item.DeptNama}
                    </span>
                    <i className="ri-external-link-line text-gray-400 ml-auto text-sm"></i>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContentSection>
    </>
  );
}
