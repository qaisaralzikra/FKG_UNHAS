import { Acara } from "../Component/Beranda/Acara";
import { Blog } from "../Component/Beranda/Blog";
import { HeroSection } from "../Component/Beranda/HeroSection";
import { Jurnal } from "../Component/Beranda/JurnalDanPublikasi";
import { Mitra } from "../Component/Beranda/Kemitraan";
import { Layanan } from "../Component/Beranda/Layanan";
import { VisiMisi } from "../Component/Beranda/VisiMisi";
import { useState, useEffect } from "react";
import { LoadingPage } from "../Component/LoadingPage";

import apiService from "../Services/api";

export function Beranda() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiService
      .getDashboardData()
      .then((response) => {
        // Axios + helper di atas langsung mengembalikan response data utuh dari CI4
        // Jika CI4 kamu membungkusnya lagi dalam objek 'data', gunakan response.data
        setData(response.data || response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingPage />;
  if (error) return <p>Gagal memuat data: {error}</p>;

  // console.log(data);
  return (
    <>
      <HeroSection />
      <Blog data={data} />
      <VisiMisi />
      <Jurnal />
      <Mitra />
      <Layanan />
      <Acara data={data} />
    </>
  );
}
