import Jurnal1 from "../../assets/Jurnal 1.jpg";
import Jurnal2 from "../../assets/jurnal 2.jpg";
import Vector1 from "../../assets/vector1.png";

export function Jurnal() {
  const data = [
    {
      id: 1,
      title: "Journal Of Dentomaxillofacial Science",
    },
    {
      id: 2,
      title: "Journal Of Case Reports In Dental Medicine",
    },
  ];
  return (
    <div className="px-[70px] py-[64px]">
      <div>
        <h1 className="font-medium text-[32px]">Jurnal & Publikasi</h1>
        <div className="grid grid-cols-2 gap-[40px] mt-[20px]">
          {data.map((item, index) => (
            <div key={item.id}>
              <a href="">
                <div className="w-[560px] h-[192px] bg-[#b00000] rounded-[20px] relative shadow-[0_0_20px_rgba(0,0,0,0.25)] overflow-hidden flex items-center justify-between">
                    <h1 className="text-white font-bold text-[96px] ms-[20px]">0{index + 1}</h1>
                    <img src={Vector1} className="absolute top-0 right-[-2px]" alt="" />
                    <p className="z-1 me-[40px] text-[32px] w-[312px] font-semibold">{item.title}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
