import { Routes, Route, Link, useParams } from "react-router-dom";
import {
  PageHero,
  ContentSection,
  SectionTitle,
  BackLink,
} from "../../Component/PageLayout";
import { useEffect, useState } from "react";
import apiService from "../../Services/api";
import { LoadingPage } from "../../Component/LoadingPage";

const items = [
  {
    slug: "serta-merta",
    cat: "serta_merta",
    title: "Informasi Serta Merta",
    icon: "ri-alarm-line",
    desc: "Informasi yang harus segera disampaikan kepada publik.",
  },
  {
    slug: "dikecualikan",
    cat: "dikecualikan",
    title: "Informasi Dikecualikan",
    icon: "ri-lock-line",
    desc: "Informasi yang dikecualikan dari akses publik.",
  },
  {
    slug: "setiap-saat",
    cat: "setiap_saat",
    title: "Informasi Setiap Saat",
    icon: "ri-time-line",
    desc: "Informasi yang tersedia setiap saat bagi publik.",
  },
  {
    slug: "berkala",
    cat: "berkala",
    title: "Informasi Berkala",
    icon: "ri-calendar-line",
    desc: "Informasi yang disediakan secara berkala.",
  },
];

const contentMap = {
  "serta-merta": {
    title: "Informasi Serta Merta",
    body: "Informasi Serta Merta adalah informasi publik yang harus segera disampaikan kepada publik tanpa penundaan karena dapat mengancam jiwa, kesehatan, atau kepentingan publik. PPID FKG Unhas menyediakan akses cepat terhadap informasi tersebut melalui portal resmi dan papan pengumuman.",
  },
  dikecualikan: {
    title: "Informasi Dikecualikan",
    body: "Informasi Dikecualikan adalah informasi publik yang bersifat rahasia sesuai dengan ketentuan peraturan perundang-undangan. Informasi ini tidak dapat diakses oleh publik karena berkaitan dengan keamanan nasional, rahasia pribadi, atau rahasia bisnis yang dilindungi.",
  },
  "setiap-saat": {
    title: "Informasi Setiap Saat",
    body: "Informasi Setiap Saat adalah informasi publik yang tersedia dan dapat diakses oleh publik setiap saat tanpa perlu permohonan. PPID FKG Unhas menyediakan informasi ini melalui berbagai media termasuk website dan layanan informasi publik.",
  },
  berkala: {
    title: "Informasi Berkala",
    body: "Informasi Berkala adalah informasi publik yang disediakan secara berkala oleh PPID FKG Unhas, termasuk laporan kinerja, laporan keuangan, dan dokumen perencanaan yang dipublikasikan secara rutin setiap tahun atau semester.",
  },
};

function PPIDIndex() {
  return (
    <>
      <PageHero
        title="PPID"
        subtitle="Pejabat Pengelola Informasi dan Dokumentasi FKG Unhas"
      />
      <ContentSection>
        <SectionTitle>PPID FKG Unhas</SectionTitle>
        <p className="text-gray-600 mt-2 text-base lg:text-[18px] max-w-[800px]">
          PPID bertugas mengelola dan memberikan pelayanan informasi publik di
          lingkungan Fakultas Kedokteran Gigi Universitas Hasanuddin.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {items.map((item) => (
            <Link
              key={item.slug}
              to={`/ppid/${item.title}/${item.cat}`}
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
      </ContentSection>
    </>
  );
}

function PPIDDetail() {
  const { title, cat } = useParams();

  const [Ppid, setPpid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    apiService
      .getPpid(cat)
      .then((response) => {
        const resData = response.data || response;

        if (resData && resData.ppidContent) {
          const rawData = resData.ppidContent;
          let selectedHTMLContent = "";

          // Kondisi pencocokan berdasarkan parameter 'cat' ke field kolom database masing-masing
          if (cat === "serta_merta") {
            selectedHTMLContent = rawData.ContentDesc1;
          } else if (cat === "dikecualikan") {
            selectedHTMLContent = rawData.ContentDesc2;
          } else if (cat === "setiap_saat") {
            selectedHTMLContent = rawData.ContentDesc3;
          } else if (cat === "berkala") {
            selectedHTMLContent = rawData.ContentDesc4;
          }

          // Simpan string HTML yang sesuai saja ke dalam state
          setPpid(selectedHTMLContent || "<p>Data konten belum diisi.</p>");
        } else {
          setPpid(null);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [cat]);

  if (loading) return <LoadingPage />;
  if (error)
    return (
      <p className="text-center py-10 text-red-600">
        Gagal memuat Data: {error}
      </p>
    );

  if (!Ppid) return <p className="text-center py-10">Data tidak ditemukan</p>;
  return (
    <>
      <PageHero
        title={`${decodeURIComponent(title)}`}
        subtitle="PPID FKG Unhas"
      />
      <ContentSection>
        <div className="max-w-[900px]">
          <div className="p-[24px] md:p-[48px] sm:min-w-[500px] min-w-[200px] md:min-w-[600px] lg:min-w-[900px] bg-white shadow-[0_0_20px_0_rgba(0,0,0,0.1)] rounded-[20px]">
            <BackLink to="/ppid" />

            {/* Render isi HTML yang sudah disaring secara kondisional */}
            <div
              dangerouslySetInnerHTML={{ __html: Ppid }}
              className="text-gray-700 leading-relaxed prose max-w-none mt-6"
            ></div>
          </div>
        </div>
      </ContentSection>
    </>
  );
}

export function PPID() {
  return (
    <Routes>
      <Route index element={<PPIDIndex />} />
      <Route path=":title/:cat" element={<PPIDDetail />} />
    </Routes>
  );
}
