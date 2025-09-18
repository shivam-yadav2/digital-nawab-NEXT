"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChevronDown } from "lucide-react";

const WaveyPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    preserveAspectRatio="none"
    viewBox="0 0 1440 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="rgba(59, 130, 246, 0.05)"
      d="M0,160 C320,300 720,20 1440,160 L1440,320 L0,320 Z"
    />
    <path
      fill="rgba(147, 51, 234, 0.05)"
      d="M0,200 C360,50 780,300 1440,200 L1440,320 L0,320 Z"
    />
  </svg>
);

const FAQSection = () => {
  const [openItems, setOpenItems] = useState({ 0: true }); // ✅ match SSR + CSR
  const [faqData, setFaqData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // Ensure only client-side rendering for mismatch-prone parts
  useEffect(() => {
    setIsClient(true);

    const fetchFaqData = async () => {
      try {
        const response = await axios.get(
          "https://dashboard.digitalnawab.com/api/getfaq"
        );
        const formattedData = response.data.data.map((item) => ({
          question: item.question,
          answer: item.answer,
        }));
        setFaqData(formattedData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching FAQ data:", err);
        setError("Failed to load FAQs. Please try again later.");
        setLoading(false);
      }
    };

    fetchFaqData();
  }, []);

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-purple-900 relative overflow-hidden py-12 px-6">
      {/* Background Pattern */}
      <WaveyPattern />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span>COMMON QUESTIONS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent mb-4">
            Need Help? Start Here
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Popular Client Questions
          </h2>
        </div>

        {/* ✅ Client-only render to avoid hydration mismatch */}
        {isClient && (
          <>
            {loading && (
              <div className="text-center text-white text-lg">Loading FAQs...</div>
            )}
            {error && (
              <div className="text-center text-red-400 text-lg">{error}</div>
            )}
            {!loading && !error && faqData.length === 0 && (
              <div className="text-center text-white text-lg">
                No FAQs available.
              </div>
            )}
            {!loading && !error && faqData.length > 0 && (
              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:bg-gray-800/70 hover:shadow-lg"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      aria-expanded={!!openItems[index]}
                      aria-controls={`faq-content-${index}`}
                    >
                      <span className="text-white text-lg md:text-xl font-medium pr-8">
                        {item.question}
                      </span>
                      <div
                        className={`flex-shrink-0 transition-transform duration-300 ease-in-out ${
                          openItems[index] ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      </div>
                    </button>

                    <div
                      id={`faq-content-${index}`}
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openItems[index]
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-5 pt-2">
                        <div className="border-t border-gray-700/50 pt-4">
                          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl animate-pulse"></div>
      </div>
    </section>
  );
};

export default FAQSection;
