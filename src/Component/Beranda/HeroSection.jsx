import Logo from "../../../public/logo unhas.png";
function VideoPlayer() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-[100%] overflow-hidden h-[100%] z-0 absolute top-0 left-0 object-cover"
    >
      <source
        src="https://dent.unhas.ac.id/assets/web/video/wellcome_video.mp4"
        type="video/mp4"
      />
    </video>
  );
}

function Bg() {
  return (
    <div className="h-full w-full top-0 absolute z-1 bg-[#000000] opacity-[0.26]"></div>
  );
}

export function HeroSection() {
  return (
    <div className="h-dvh overflow-hidden">
      <Bg />
      <VideoPlayer />
      <div className="flex flex-col items-start justify-center text-start z-1 gap-[36px] top-0 w-full h-[100%] text-white mx-[70px]">
        <div className="z-1 leading-[50px] w-[600px]">
          <h3 className="text-[28px] font-medium z-1">
            Universitas Hasanuddin
          </h3>
          <h1 className="text-[48px] font-semibold z-1">
            Fakultas Kedokteran <br /> Gigi
          </h1>
        </div>
      </div>
    </div>
  );
}
