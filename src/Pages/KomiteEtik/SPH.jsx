import { useState } from "react";
import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";

const sopItems = [
  {
    code: "Biodata Peneliti Utama",
    url: "https://dent.unhas.ac.id/uploads/files/1752648263_6a06ff57f8c008947089.pdf",
  },
  {
    code: "Dokumen Check List Protokol Uji Hewan",
    url: "https://dent.unhas.ac.id/uploads/files/1752648253_f21e50fa7825f60b6ca7.pdf",
  },
  {
    code: "Formulir Pengajuan Etik Untuk Uji Hewan Coba",
    url: "https://dent.unhas.ac.id/uploads/files/1752648242_2500da98c00dd89e0538.pdf",
  },
  {
    code: "Formulir Persetujuan Pembimbing",
    url: "https://dent.unhas.ac.id/uploads/files/1752648233_2799facf8fb5650be2f7.pdf",
  },
  {
    code: "Ringkasan Proposal",
    url: "https://dent.unhas.ac.id/uploads/files/1752648220_8de547339fbe70c83945.pdf",
  },
  {
    code: "Susunan Tim Peneliti Dan Keahlian",
    url: "https://dent.unhas.ac.id/uploads/files/1752648211_9489b5f6770517b6306c.pdf",
  },
];

export function SPH() {
  const [selected, setSelected] = useState(sopItems[0]);

  return (
    <>
      <PageHero
        title="SOP Penelitian Hewan"
        subtitle="Standar Operasional Prosedur Penelitian Hewan KEPK FKG Unhas"
      />
      <ContentSection>
        <BackLink to="/komite-etik" />
        <div className="max-w-[1100px]">
          <p className="text-gray-600 text-base lg:text-[18px] mb-8">
            Berikut adalah daftar Standar Operasional Prosedur (SOP) yang
            digunakan oleh Komite Etik Penelitian FKG-RSGMP UNHAS dalam
            melakukan review etik penelitian yang melibatkan Hewan.
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
