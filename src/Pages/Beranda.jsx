import { Blog } from "../Component/Beranda/Blog";
import { HeroSection } from "../Component/Beranda/HeroSection";
import { Jurnal } from "../Component/Beranda/JurnalDanPublikasi";
import { VisiMisi } from "../Component/Beranda/VisiMisi";

export function Beranda() {
  return (
    <>
      <HeroSection />
      <Blog />
      <VisiMisi />
      <Jurnal />
    </>
  );
}
