import { Acara } from "../Component/Beranda/Acara";
import { Blog } from "../Component/Beranda/Blog";
import { HeroSection } from "../Component/Beranda/HeroSection";
import { Jurnal } from "../Component/Beranda/JurnalDanPublikasi";
import { Mitra } from "../Component/Beranda/Kemitraan";
import { Layanan } from "../Component/Beranda/Layanan";
import { VisiMisi } from "../Component/Beranda/VisiMisi";


export function Beranda() {
  return (
    <>
      <HeroSection />
      <Blog />
      <VisiMisi />
      <Jurnal />
      <Mitra />
      <Layanan />
      <Acara />
    </>
  );
}
