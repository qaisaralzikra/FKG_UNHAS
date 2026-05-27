import { useEffect, useState } from "react";
import { PageHero, ContentSection, BackLink } from "../../Component/PageLayout";
import apiService from "../../Services/api";
import { LoadingPage } from "../../Component/LoadingPage";

export function SambutanDekan() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiService
      .getSambutan()
      .then((response) => {
        const result = response.data?.webcontentList || response;
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingPage />;
  if (error)
    return (
      <p className="text-center py-10 text-red-600">
        Gagal memuat data: {error}
      </p>
    );

    // console.log(data);
  return (
    <>
      <PageHero
        title="Sambutan Dekan"
        subtitle="Kata sambutan dari Dekan Fakultas Kedokteran Gigi"
      />
      <ContentSection>
        <BackLink to="/profil" />
        <div className="max-w-[900px]">
          <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-[80px] h-[80px] rounded-full bg-[#4A0000] flex items-center justify-center shrink-0">
                <i className="ri-quote-text text-3xl text-white"></i>
              </div>
              <div>
                <h3 className="font-semibold text-xl text-black">
                  Irfan Sugianto, drg., Ph.D., M.Med., Sp.RKG.
                </h3>
                <p className="text-[#b00000] text-sm">
                  Dekan Fakultas Kedokteran Gigi - Universitas Hasanuddin
                </p>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data.ContentDesc1 }} className="text-gray-700 text-base lg:text-[18px] leading-relaxed space-y-4">
              
            </div>
            {/* <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="font-semibold text-black">Salam hangat,</p>
              <p className="text-gray-700 mt-2">
                Irfan Sugianto, drg., Ph.D., M.Med., Sp.RKG.
              </p>
              <p className="text-sm text-gray-500">
                Dekan Fakultas Kedokteran Gigi - Universitas Hasanuddin
              </p>
            </div> */}
          </div>
        </div>
      </ContentSection>
    </>
  );
}
