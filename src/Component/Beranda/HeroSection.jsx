import { motion } from "motion/react";

function VideoPlayer() {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[#4A0000]">
      <video
        autoPlay
        loop
        muted
        playsInline
        /* 1. OPTIMASI CLS & LCP:
          - Hapus loading="lazy" (tidak valid untuk video)
          - Gunakan preload="auto" agar browser segera mencadangkan memori pemutaran
          - Tambahkan 'poster' (bisa berupa gambar/screenshot frame pertama video yang dikompres)
            agar tidak ada blank hitam saat loading awal.
        */
        preload="auto"
        className="w-full h-full object-cover z-0"
      >
        <source
          src="https://dent.unhas.ac.id/api/assets/web/video/wellcome_video.mp4"
          type="video/mp4"
        />
        {/* Fallback teks jika browser jadul tidak mendukung video */}
        Fakultas Kedokteran Gigi Universitas Hasanuddin
      </video>
    </div>
  );
}

function Bg() {
  return (
    // Menggunakan tailwind backdrop-blur dikombinasikan dengan opacity agar transisi visual lebih halus
    <div className="h-full w-full top-0 absolute z-1 bg-black/30 backdrop-blur-[1px]"></div>
  );
}

export function HeroSection() {
  return (
    // OPTIMASI SEO: Menggunakan tag semantik <header> atau <section> untuk komponen paling atas
    <header className="min-h-screen relative overflow-hidden flex items-center bg-[#4A0000]">
      <VideoPlayer />
      <Bg />
      
      {/* 2. OPTIMASI CLS: 
        - Menghilangkan mt-[300px] yang rawan menggeser layout jika tinggi container beruba-ubah.
        - Menggunakan flexbox alignment (items-center) bawaan parent untuk memposisikan konten di tengah secara presisi.
      */}
      <div className="relative z-10 w-full text-white px-4 sm:px-6 lg:px-[70px] py-20 md:py-32">
        <div className="w-full max-w-[600px]">
          <motion.div
            initial={{ opacity: 0, y: 40 }} // Jarak y dikurangi dari 100 ke 40 agar animasi lebih smooth dan cepat (LCP friendly)
            animate={{ opacity: 1, y: 0 }} // Gunakan 'animate' untuk komponen above-the-fold daripada 'whileInView' agar langsung jalan tanpa nunggu scroll
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="text-center md:text-start"
          >
            <h2 className="text-xl md:text-2xl lg:text-[28px] font-medium tracking-wide drop-shadow-md">
              Universitas Hasanuddin
            </h2>
            <h1 className="text-3xl md:text-5xl lg:text-[48px] font-bold leading-tight mt-2 drop-shadow-lg">
              Fakultas Kedokteran <br className="hidden md:block" /> Gigi
            </h1>
          </motion.div>
        </div>
      </div>
    </header>
  );
}