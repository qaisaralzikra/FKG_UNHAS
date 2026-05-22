import { motion } from "motion/react";

function VideoPlayer() {
  return (
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover z-0" // 2. Video mengisi full wrapper
        >
          <source
            src="https://dent.unhas.ac.id/assets/web/video/wellcome_video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
  );
}

function Bg() {
  return (
    <div className="h-full w-full top-0 absolute z-1 bg-[#000000] opacity-[0.26]"></div>
  );
}

export function HeroSection() {
  return (
    <div className="min-h-svh relative overflow-hidden">
      <Bg />
      <VideoPlayer />
      <div className="mt-[300px] md:mt-[350px] relative flex flex-col items-start justify-center text-start z-1 gap-6 lg:gap-[36px] top-0 w-full h-full text-white px-4 sm:px-6 lg:px-[70px]">
        <div className="z-1 leading-tight lg:leading-[50px] w-full max-w-[600px] h-full">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-center md:text-start"
          >
            <h3 className="text-xl md:text-2xl lg:text-[28px] font-medium z-1">
              Universitas Hasanuddin
            </h3>
            <h1 className="text-3xl md:text-5xl lg:text-[48px] font-semibold z-1">
              Fakultas Kedokteran <br /> Gigi
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
