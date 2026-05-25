import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";
import Dekan from "../../assets/dekan.png";

const dosen = [
  {
    id: 1,
    foto: Dekan,
    nama: "Prof. Dr. Susilowati, drg., SU",
    unit_kerja: "Ortodonti",
    nip: "19550415198010 001",
  },
  {
    id: 2,
    foto: Dekan,
    nama: "Prof. Dr. Burhanuddin Daeng Pasiga, drg.",
    unit_kerja: "IKGM-Pencegahan",
    nip: "19550415198010 001",
  },
  {
    id: 3,
    foto: Dekan,
    nama: "Prof. Dr. Edy Machmud, drg., Sp.Pros",
    unit_kerja: "Prostodonsia",
    nip: "19550415198010 001",
  },
  {
    id: 4,
    foto: Dekan,
    nama: "Erni Marlina, drg., Ph.D., Sp.PM",
    Unit_kerja: "Penyakit Mulut",
    nip: "19550415198010 001",
  },
  {
    id: 5,
    foto: Dekan,
    nama: "Irfan Sugianto, drg., M.Med.Ed., Ph.D., Sp.RKG",
    unit_kerja: "Oral Radiology",
    nip: "19550415198010 001",
  },
];

export function TenagaPendidik() {
  return (
    <>
      <PageHero
        title="Tenaga Pendidik"
        subtitle="Informasi tenaga kependidikan FKG Unhas"
      />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-full">
          <p className="max-w-[900px] text-gray-600 text-base lg:text-[18px] mb-8">
            Tenaga kependidikan di lingkungan Fakultas Kedokteran Gigi
            Universitas Hasanuddin yang profesional dan berdedikasi dalam
            mendukung pelaksanaan Tri Dharma Perguruan Tinggi.
          </p>
          <div class="overflow-x-auto">
            <table class="$$table border-[2px] border-gray-200 rounded-[20px]">
              <thead className="border-[2px] border-gray-200">
                <tr>
                  <th className="py-[10px] px-[10px] text-start">No</th>
                  <th className="py-[10px] px-[10px] text-center">Foto</th>
                  <th className="py-[10px] px-[10px] text-start">Nama</th>
                  <th className="py-[10px] px-[10px] text-start">Unit Kerja</th>
                  <th className="py-[10px] px-[10px] text-cener">NIP</th>
                </tr>
              </thead>
              <tbody>
                {dosen.map((d, index) => (
                  <tr
                    key={d.id}
                    className={`${index % 2 === 1 ? "bg-gray-100 hover:bg-gray-200" : "bg-white"}`}
                  >
                    <td className="py-[20px] px-[20px]">{index + 1}</td>
                    <td className="py-[20px] px-[20px]">
                      <div className="w-[80px] h-[100px] overflow-hidden rounded-[4px]">
                        <img src={Dekan} className="object-center" alt="" />
                      </div>
                    </td>
                    <td className="py-[20px] px-[20px]">{d.nama}</td>
                    <td className="py-[20px] px-[20px]">{d.unit_kerja}</td>
                    <td className="py-[20px] px-[20px]">{d.nip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
