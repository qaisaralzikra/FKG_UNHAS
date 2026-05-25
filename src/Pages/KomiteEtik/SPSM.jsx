import { useState } from "react";
import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";

const sopItems = [
  {
    code: "Halaman Depan",
    title: "",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20001%20%28Persiapan%20Penyusunan%20Panduan%29.pdf",
  },
  {
    code: "SOP 001",
    title: "Persiapan Penyusunan Panduan",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20001%20%28Persiapan%20Penyusunan%20Panduan%29.pdf",
  },
  {
    code: "SOP 002",
    title: "Pembentukan KEPK",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20002%20%28Pembentukan%20KEPK%29.pdf",
  },
  {
    code: "SOP 003",
    title: "Pelatihan",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20003%20%28Pelatihan%29.pdf",
  },
  {
    code: "SOP 004",
    title: "Pemilihan Konsultan Independen",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20004%20%28Pemilihan%20Konsultan%20Idependen%29.pdf",
  },
  {
    code: "SOP 005",
    title: "Manajemen Penerimaan Protokol",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20005%20%28Manajemen%20Penerimaan%20Protokol%29.pdf",
  },
  {
    code: "SOP 006",
    title: "Penggunaan Penilaian Formulir Protokol",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20006%20%28Penggunaan%20Penilaian%20Formulir%20Protokol%29.pdf",
  },
  {
    code: "SOP 007",
    title: "Penentuan Jenis Review (Expedited Review)",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20007%20%28Penentuan%20Jenis%20Review%20%28Expedited%20Review%29%29.pdf",
  },
  {
    code: "SOP 008",
    title: "Review Awal (Initial Review)",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20008%20%28Review%20Awal%20%28Initial%20Review%29.pdf",
  },
  {
    code: "SOP 009",
    title: "Review Protokol Penelitian Peralatan Kesehatan",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20009%20%28Review%20Protokol%20Penelitian%20Peralatan%20Kesehatan%29.pdf",
  },
  {
    code: "SOP 010",
    title: "Telaah Protokol Yang Diajukan Kembali (Resubmission)",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20010%20%28Telaah%20Protokol%20Yang%20Diajukan%20Kembali%20%28Resubmission%29%29.pdf",
  },
  {
    code: "SOP 011",
    title: "Telaah Amandemen Protokol",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20011%20%28Telaah%20Amandemen%20Protokol%29.pdf",
  },
  {
    code: "SOP 012",
    title: "Telaah Lanjutan Protokol Penelitian (Continuing Review)",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20012%20%28Telaah%20Lanjutan%20Protokol%20Penelitian%20%28Continuing%20Review%29%29.pdf",
  },
  {
    code: "SOP 013",
    title: "Telaah Laporan Akhir Penelitian",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20013%20%28Telaah%20Laporan%20Akhir%20Penelitian%29.pdf",
  },
  {
    code: "SOP 014",
    title:
      "Intervensi Terhadap Kesalahan, Penyimpangan Protokol, Non Compliance",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20014%20%28Intervensi%20Terhadap%20Kesalahan%2CPenyimpangan%20Protokol%2CNon-Compliance%29.pdf",
  },
  {
    code: "SOP 015",
    title: "Menanggapi Keinginan Subjek Penelitian",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20015%20%28Menanggapi%20Keinginan%20Subjek%20Penelitian%29.pdf",
  },
  {
    code: "SOP 016",
    title: "Manajemen Penghentian Penelitian",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20016%20%28Manajemen%20Penghentian%20Penelitian%29.pdf",
  },
  {
    code: "SOP 017",
    title: "Telaah Laporan SAE",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20016%20%28Manajemen%20Penghentian%20Penelitian%29.pdf",
  },
  {
    code: "SOP 018",
    title: "Kunjungan Pemantauan Ke Lokasi Penelitian",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20016%20%28Manajemen%20Penghentian%20Penelitian%29.pdf",
  },
  {
    code: "SOP 019",
    title: "Agenda Rapat & Minutes",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20019%20%28Agenda%20Rapat%20%26%20Minutes%29.pdf",
  },
  {
    code: "SOP 020",
    title: "Rapat Luar Biasa",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20020%20%28Rapat%20Luar%20Biasa%29.pdf",
  },
  {
    code: "SOP 021",
    title: "Rekaman Komunikasi",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20021%20%28Rekaman%20Komunikasi%29.pdf",
  },
  {
    code: "SOP 022",
    title: "Pengelolaan Dokumen Penelitian",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20022%20%28Pengelolaan%20Dokumen%20Penelitian%29.pdf",
  },
  {
    code: "SOP 023",
    title: "Pengarsipan, Pencarian Dan Pemusnahan Dokumen",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20023%20%28Pengarsipan%2C%20Pencarian%20dan%20Pemusnahan%20Dokumen%29.pdf",
  },
  {
    code: "SOP 024",
    title: "Pernyataan Kerahasiaan Dan Pernyataan Konflik Kepentingan",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20024%20%28Pernyataan%20Kerahasiaan%20dan%20Pernyataan%20Konflik%20Kepentingan%29.pdf",
  },
  {
    code: "SOP 025",
    title: "Audit Dan Inspeksi",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20024%20%28Pernyataan%20Kerahasiaan%20dan%20Pernyataan%20Konflik%20Kepentingan%29.pdf",
  },
  {
    code: "SOP 026",
    title: "Penulisan, Telaah (Review), Distribusi Dan Perbaikan SOP",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20026%20%28Penulisan%2C%20Telaah%20%28Review%29%2C%20Distribusi%20dan%20Perbaikan%20Standar%20Operasional%20Prosedur%20%28SOP%29.pdf",
  },
  {
    code: "SOP 027",
    title: "Telaah Case Report & Series",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20026%20%28Penulisan%2C%20Telaah%20%28Review%29%2C%20Distribusi%20dan%20Perbaikan%20Standar%20Operasional%20Prosedur%20%28SOP%29.pdf",
  },
  {
    code: "SOP KEPK",
    title: "KEPK FKG RSGMP UNHAS Full 2022",
    url: "https://dent.unhas.ac.id/assets/web/files/human/SOP%20KEPK%20FKG-RSGMP%20UNHAS_Full%202022.pdf",
  },
];

export function SPSM() {
  const [selected, setSelected] = useState(sopItems[0]);

  return (
    <>
      <PageHero
        title="SOP Penelitian Subjek Manusia"
        subtitle="Standar Operasional Prosedur Penelitian Subjek Manusia KEPK FKG Unhas"
      />
      <ContentSection>
        <BackLink to="/komite-etik" />
        <div className="max-w-[1100px]">
          <p className="text-gray-600 text-base lg:text-[18px] mb-8">
            Berikut adalah daftar Standar Operasional Prosedur (SOP) yang
            digunakan oleh Komite Etik Penelitian FKG-RSGMP UNHAS dalam
            melakukan review etik penelitian yang melibatkan subjek manusia.
          </p>

          {/* mobile select */}
          <div className="lg:hidden mb-6">
            <select
              className="w-full p-3 border border-gray-300 rounded-[10px] text-gray-700 bg-white"
              value={selected ? selected.code : ""}
              onChange={(e) => {
                const found = sopItems.find((s) => s.code === e.target.value);
                if (found) window.open(found.url || "#", "_blank");
              }}
            >
              <option value="">Pilih dokumen</option>
              {sopItems.map((s) => (
                <option key={s.code} value={s.code}>
                  {s.code} — {s.title}
                </option>
              ))}
            </select>
          </div>

          {/* desktop layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-[380px] shrink-0">
              <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 overflow-hidden">
                <div className="bg-[#b00000] text-white px-4 py-3 font-semibold">
                  Daftar SOP
                </div>
                <div className="max-h-[500px] overflow-y-auto">
                  {sopItems.map((s) => (
                    <button
                      key={s.code}
                      onClick={() => setSelected(s)}
                      className={`w-full text-left px-4 py-3 border-b border-gray-100 hover:bg-[#f8f0f0] transition-colors ${
                        selected?.code === s.code
                          ? "bg-[#f8f0f0] text-[#b00000] font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      <span className="font-semibold text-sm">{s.code}</span>
                      <p className="text-sm leading-snug">{s.title}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Area Preview Berkas */}
            <div className="flex-1">
              {selected ? (
                <div className="bg-white p-6 rounded-[16px] shadow-sm border border-gray-100 flex flex-col h-full min-h-[650px]">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="font-semibold text-xl text-[#b00000]">
                        {selected.code}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {selected.title || "Halaman Dokumen Utama"}
                      </p>
                    </div>

                    {/* Tombol Aksi */}
                    <div className="flex gap-2">
                      <a
                        href={selected.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#b00000] text-white px-4 py-2 rounded-[8px] hover:bg-[#8a0000] transition-colors text-xs font-medium shadow-sm"
                      >
                        <i className="ri-external-link-line"></i> Buka Penuh /
                        Download
                      </a>
                    </div>
                  </div>

                  {/* KUNCI PREVIEW: Menggunakan iframe responsif */}
                  <div className="flex-1 w-full bg-gray-100 rounded-[12px] overflow-hidden border border-gray-200 shadow-inner min-h-[550px]">
                    {selected.url ? (
                      <iframe
                        src={`${selected.url}#toolbar=1&navpanes=0`}
                        title={selected.code}
                        className="w-full h-full min-h-[550px]"
                        style={{ border: "none" }}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full p-6 text-center text-gray-400">
                        <i className="ri-file-unknow-line text-5xl"></i>
                        <p className="mt-2">
                          URL berkas tidak valid atau tidak ditemukan.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white p-10 rounded-[16px] shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center min-h-[400px]">
                  <i className="ri-file-search-line text-6xl text-gray-300"></i>
                  <p className="text-gray-500 text-lg mt-4">
                    Silakan pilih dokumen untuk melihat pratinjau.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </ContentSection>
    </>
  );
}
