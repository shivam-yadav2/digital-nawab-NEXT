import React, {useEffect, useState}from "react";


const WhySeoUs = () => {
  const [seoData, setSeoData] = useState([]);
  useEffect(() => {
    const fetchSeoData = async () => {
      try {
        const response = await fetch("https://dashboard.digitalnawab.com/api/getseohighlight");
        const result = await response.json();
        if (result.data && result.data.length > 0) {
          setSeoData(result.data[0]); 
        }
      } catch (error) {
        console.error("Error fetching SEO data:", error);
      }
    };
    fetchSeoData();
  }, []);

  return (
    <div>
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Card Section */}
          <div className="lg:w-1/2  flex flex-col items-center">
            <div className="flex justify-center items-center bg-[#eaeaea] shadow-lg rounded-lg p-12">
              <div className="rounded-lg bg-white shadow-xl p-6 flex flex-col items-center">
                <div className="flex items-center space-x-2 mb-4">
                  <svg
                    className="w-8 h-8 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7v5c0 6 10 11 10 11s10-5 10-11V7L12 2zm0 2.5l7 3.5v4c0 4.5-7 9-7 9s-7-4.5-7-9v-4l7-3.5z" />
                  </svg>
                  <span className="text-lg font-bold text-gray-800">2024</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  TOTAL SITES RANKED
                </h3>
                <p className="text-3xl font-bold text-gray-900 mb-4">
                  15,000+ BUSINESSES
                </p>
                <div className="w-full  rounded-lg flex items-center justify-center">
                  <img src={`https://dashboard.digitalnawab.com/${seoData.image}`} alt={seoData.heading || ""} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Section */}
          <div className="lg:w-1/2 !custom space-y-6">
            <h2 className="text-3xl custom-bold sm:text-5xl leading-12 font-bold text-gray-900">
              {seoData.heading}
            </h2>
            <div
              className="text-black"
              dangerouslySetInnerHTML={{ __html: seoData.description }}
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySeoUs;
