import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";

const SyaratBerkas = [
  {
    id: 1,
    code: "Dokumen check list (Sesuai jenis penelitian)",
  },
  {
    id: 2,
    code: "Surat pengantar/rekomendasi dari institusi",
  },
  {
    id: 3,
    code: "Formulir pengajuan etik penelitian (Sesuai jenis penelitian)",
  },
  {
    id: 4,
    code: "Proposal asli yang telah disetujui pembimbing",
  },
  {
    id: 5,
    code: "Ringkasan proposal",
  },
  {
    id: 6,
    code: "Lampiran (Sesuai jenis penelitian)",
  },
  {
    id: 7,
    code: "Sertifikat pelatihan etik",
  },
  {
    id: 8,
    code: "Lembar bukti pembayaran",
  },
];

const MetodePembayaran = [
  {
    id: 1,
    code: "D4/S1",
    price: "Rp.200.000,-",
  },
  {
    id: 2,
    code: "S2/PPDGS ",
    price: "Rp.300.000,-",
  },
  {
    id: 3,
    code: "S3/DPJP",
    price: "Rp.500.000,-",
  },
  {
    id: 4,
    code: "Non UNHAS S1",
    price: "Rp.500.000,-",
  },
  {
    id: 5,
    code: "Non UNHAS Postgraduate",
    price: "Rp.1.000.000,-",
  },
  {
    id: 6,
    code: "Penelitian Kerjasama (Minimal Hibah Universitas)",
    price: "Rp.1.500.000,-",
  },
];

const ProsedurPengumpulan = [
  {
    id: 1,
    code: "Mengumpulkan 1 (satu) rangkap dokumen/berkas fisik ke Sekertariat KEPK FKG-RSGMP UNHAS (Ruang KEPK, Lantai 1 Gedung FKG UNHAS) dengan ketentuan warna map yakni:",
    hint: "",
  },
  {
    id: 2,
    code: "S1",
    hint: "Map Hijau Kancing",
  },
  {
    id: 3,
    code: "S2/PPDGS",
    hint: "Map Kuning Kancing",
  },
  {
    id: 4,
    code: "S3",
    hint: "Map Putih Kancing",
  },
  {
    id: 5,
    code: "Dosen/DPJP",
    hint: "Map Merah Kancing",
  },
  {
    id: 6,
    code: "Non-FKG UH",
    hint: "Map Biru Kancing",
  },
  {
    id: 7,
    code: "Mengirimkan 1 (satu) rangkap dokumen/berkas dalam bentuk soft file ke email etik.fkg@unhas.ac.id dengan subjek email (Permohonan Pengajuan Etik Penelitian_Nama Peneliti_Jenjang, Ex.: Permohonan Pengajuan Etik Penelitian_Si A_S1)",
    hint: "",
  },
];

const steps = [
  {
    step: 1,
    title: "Biodata Peneliti Utama",
  },
  {
    step: 2,
    title: "Dokumen Check List Protokol Uji Klinis",
  },
  {
    step: 3,
    title: "Formulir Pengajuan Etik Untuk Uji Klinis",
  },
  {
    step: 4,
    title: "Formulir Persetujuan Pembimbing",
  },
  {
    step: 5,
    title: "Lembar Informasi",
  },
  {
    step: 6,
    title: "Persetujuan Setelah Penjelasan (PSP) Untuk Orang Dewasa",
  },
  {
    step: 7,
    title: "Persetujuan Setelah Penjelasan (PSP) Untuk Orang Tua (Subjek Anak)",
  },
  {
    step: 8,
    title: "Persetujuan Setelah Penjelasan (PSP) Untuk Subjek Anak (Assent)",
  },
  {
    step: 9,
    title: "Persetujuan Setelah Penjelasan (PSP) Untuk Subjek Vulnerable",
  },
  {
    step: 10,
    title: "Ringkasan Proposal",
  },
  {
    step: 11,
    title: "Susunan Tim Peneliti dan Keahlian",
  },
];

export function FormulirPanduan() {
  return (
    <>
      <PageHero
        title="Formulir & Panduan Pengajuan untuk PI"
        subtitle="Dokumen dan prosedur pengajuan ethical clearance bagi Principal Investigator"
      />
      <ContentSection>
        <BackLink to="/komite-etik" />
        <div className="max-w-[1200px] space-y-10">
          <div className="max-w-[900px]">
            <h3 className="font-semibold text-xl text-[#b00000] mb-3">
              Panduan Pengajuan Ethical Clearance
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Principal Investigator (PI) yang akan mengajukan ethical clearance
              wajib menyiapkan dokumen kelengkapan sesuai dengan ketentuan KEPK
              FKG-RSGMP UNHAS. Berikut adalah tahapan pengajuan ethical
              clearance yang harus dilalui.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl text-[#b00000] mb-4">
              Formulir Uji Non Klinis
            </h3>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[40px]">
              {steps.map((s) => (
                <div
                  key={s.step}
                  className="flex items-center gap-4 bg-white p-4 rounded-[14px] shadow-sm border border-gray-100"
                >
                  <div className="w-8 h-8 bg-[#b00000] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <p className="font-semibold text-black">{s.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl text-[#b00000] mb-4">
              Persyaratan Dokumen / Berkas Pengajuan Etik Penelitian Kesehatan
              FKG-RSGMP UNHAS
            </h3>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[40px]">
              {SyaratBerkas.map((s, index) => (
                <div
                  key={s.id}
                  className="flex items-center gap-4 bg-white p-4 rounded-[14px] shadow-sm border border-gray-100"
                >
                  <div className="w-8 h-8 bg-[#b00000] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-black">{s.code}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl text-[#b00000] mb-4">
              Metode pembayaran etik penelitian dengan transfer ke Rekening Bank
              BSI 7290113053 a.n KOMISI ETIK PENELITIAN KESEHATAN FKG UNHAS
              dengan rincian sebagai berikut
            </h3>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[40px]">
              {MetodePembayaran.map((s, index) => (
                <div
                  key={s.id}
                  className="flex items-center gap-4 bg-white p-4 rounded-[14px] shadow-sm border border-gray-100"
                >
                  <div className="w-8 h-8 bg-[#b00000] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-black">{s.code}</p>
                    <p className="font-semibold text-gray-500">{s.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl text-[#b00000] mb-4">
              Prosedur pengumpulan dokumen/berkas:
            </h3>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-[40px]">
              {ProsedurPengumpulan.map((s, index) => (
                <div
                  key={s.id}
                  className={`flex items-center gap-4 bg-white p-4 rounded-[14px] shadow-sm border border-gray-100 ${index === 6 ? "lg:col-span-3 sm:col-span-2" : ""}`}
                >
                  <div className="w-8 h-8 bg-[#b00000] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-black">{s.code}</p>
                    <p className="font-semibold text-gray-500">{s.hint}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-[16px] shadow-sm border border-gray-100 max-w-[900px]">
            <div className="flex items-start gap-4">
              <i className="ri-information-line text-3xl text-[#b00000]"></i>
              <div>
                <h4 className="font-semibold text-lg text-black">
                  Catatan Penting
                </h4>
                <ul className="text-gray-600 text-sm space-y-1 mt-2">
                  <li>
                    • Pengajuan etik penelitian akan diproses lebih lanjut jika
                    Dokumen/berkas fisik dan soft file telah dinyatakan lengkap.
                  </li>
                  <li>
                    • Seluruh dokumen harus ditandatangani oleh PI dan
                    pembimbing (jika berlaku).
                  </li>
                  <li>
                    • Formulir yang tidak lengkap akan dikembalikan untuk
                    dilengkapi terlebih dahulu.
                  </li>
                  <li>
                    • Proses review etik membutuhkan waktu 2-4 minggu tergantung
                    kompleksitas protokol.
                  </li>
                  <li>
                    • Biaya kontribusi ethical clearance dibayarkan setelah
                    protokol dinyatakan lengkap.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
