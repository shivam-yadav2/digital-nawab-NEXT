import React from "react";

const CaseStudies = () => {
  return (
    <div>
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Results and Case Studies
          </h2>
          <p className="text-lg text-gray-600 mt-2 mb-8">
            Real Results for Real Businesses
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* eCommerce Business Card */}
            <div className="bg-[#E6F4E8] rounded-lg p-6 flex flex-col items-start">
              <div className="flex items-center justify-between w-full mb-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h10v2H7v-2z" />
                </svg>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14m-6 6l6-6m-6-6l6 6" />
                  </svg>
                </a>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                eCommerce Business
              </h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li>
                  <strong>Traffic:</strong> "Increased by 150% in 6 months"
                </li>
                <li>
                  <strong>Rankings:</strong> "Ranked #1 for sustainable
                  clothing" within 3 months.
                </li>
              </ul>
            </div>

            {/* Local Service Provider Card */}
            <div className="bg-[#E6F4E8] rounded-lg p-6 flex flex-col items-start">
              <div className="flex items-center justify-between w-full mb-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                </svg>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14m-6 6l6-6m-6-6l6 6" />
                  </svg>
                </a>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Local Service Provider
              </h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li>
                  <strong>Leads:</strong> "Generated 500+ local leads in under
                  90 days."
                </li>
              </ul>
            </div>

            {/* SaaS Startup Card */}
            <div className="bg-[#E6F4E8] rounded-lg p-6 flex flex-col items-start">
              <div className="flex items-center justify-between w-full mb-4">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm4 2h6v2H9V7zm0 4h6v2H9v-2zm0 4h6v2H9v-2z" />
                </svg>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14m-6 6l6-6m-6-6l6 6" />
                  </svg>
                </a>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                SaaS Startup
              </h3>
              <ul className="text-gray-700 mt-2 space-y-1">
                <li>
                  <strong>ROI:</strong> "Achieved 10X ROI through organic lead
                  generation."
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <a href="#" className="text-gray-600 underline hover:text-gray-900">
              See Full Success Stories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
