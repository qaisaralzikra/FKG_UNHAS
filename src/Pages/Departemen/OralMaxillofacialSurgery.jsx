import { useParams } from "react-router-dom";
import {
  PageHero,
  ContentSection,
  BackLink,
  CardIMG,
  CardDept,
} from "../../Component/PageLayout";
import Dosen from "../../assets/dosen.jpg";
import { useEffect, useState } from "react";
import apiService from "../../Services/api";
import { LoadingPage } from "../../Component/LoadingPage";

export function OralMaxillofacialSurgery() {
  const { uniq } = useParams();

  // State untuk menampung objek 'dept' dan array 'dosenList'
  const [departemen, setDepartemen] = useState(null);
  const [dosenList, setDosenList] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    apiService
      .getDetailDepartemen(uniq)
      .then((response) => {
        // Ambil wrapper utama 'data' dari response CI4
        const resData = response.data || response;

        if (resData) {
          setDepartemen(resData.dept || null);
          setDosenList(resData.dosenList || []);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [uniq]);

  if (loading) return <LoadingPage />;
  if (error)
    return (
      <p className="text-center py-10 text-red-600">
        Gagal memuat Data: {error}
      </p>
    );

  // Jika objek departemen tidak ditemukan dari API
  if (!departemen)
    return <p className="text-center py-10">Departemen tidak ditemukan</p>;
  return (
    <>
      <PageHero
        title={`${departemen.DeptNama || "Fakultas"}`}
        subtitle={
          departemen.DeptNamaEn
            ? `${departemen.DeptNamaEn} Department`
            : "Informasi Lengkap Departemen"
        }
      />
      <ContentSection>
        <BackLink to="/departemen" />
        <div className="max-w-full space-y-6">
          <p className="max-w-[900px] text-gray-700 leading-relaxed">
            Departemen Oral and Maxillofacial Surgery (Bedah Mulut dan
            Maksilofasial) mempelajari diagnosis dan perawatan bedah pada
            penyakit, cedera, dan kelainan pada area mulut, rahang, dan wajah,
            termasuk pencabutan gigi impaksi, kista, tumor, dan rekonstruksi.
          </p>
          <div className="space-y-4">
            {dosenList.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {dosenList.map((dosen) => (
                  <CardDept
                    key={dosen.Uniq}
                    img={dosen.ContentDesc4}
                    nama={dosen.ContentDesc1} // Nama Dosen beserta gelar
                    jabatan={dosen.nama_jabatan || "Staf Pengajar"} // Jabatan Fungsional hasil JOIN table
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl text-gray-400 border border-dashed border-gray-200">
                <i className="ri-user-search-line text-3xl block mb-2"></i>
                <p className="text-sm font-medium">
                  Belum ada data dosen pada departemen ini.
                </p>
              </div>
            )}
          </div>
        </div>
      </ContentSection>
    </>
  );
}
