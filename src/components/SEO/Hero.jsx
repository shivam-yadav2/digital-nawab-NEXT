"use client";
import React from "react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <>
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Your SEO Agency",
            "url": "https://yourwebsite.com",
            "description": "Data-driven SEO strategies that help businesses dominate search results and grow online.",
            "service": {
              "@type": "Service",
              "name": "SEO Services",
              "description": "Professional SEO audit and optimization services",
            },
          }),
        }}
      />

      <section
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#050505] to-[#17332c] overflow-hidden"
        role="banner"
        aria-label="SEO Services Hero Section"
      >
        {/* Gradient grid pattern */}
        <div
          className={cn(
            "absolute inset-0 opacity-20 [background-size:24px_24px]",
            "[background-image:radial-gradient(#22c55e_1.5px,transparent_1.5px)]"
          )}
        />

        {/* Core layout */}
        <div className="z-10 container px-4 py-24 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Text Content */}
          <div className="col-span-3 space-y-3 xl:space-y-6 text-center lg:text-left">
            <h1 className="text-4xl  lg:text-5xl 2xl:text-6xl font-extrabold leading-tight text-white">
              <span className="bg-gradient-to-r from-white via-[#D4FF66] via-[#4ade80] to-white bg-clip-text text-transparent">
              Best SEO Company in 
              </span>
              <br />                                                                      
              Lucknow for Organic Growth  <br />
              <span className="bg-gradient-to-r from-[#D4FF66] via-[#4ade80] to-[#22c55e] bg-clip-text text-transparent">
              – Digital Nawab
              </span>
            </h1>

            <p className="text-lg xl:text-xl text-gray-200 max-w-3xl mx-auto lg:mx-0">
            SEO services with ROI, Local Search engine optimisation, Increasing Website traffic, optimising keyword ranking, Technical analysis, Content strategy, E-commerce optimisation, and Digital marketing.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
                <button 
                  className="group relative bg-gradient-to-r from-[#D4FF66] via-[#4ade80] to-[#22c55e] text-black font-bold py-4 px-8 rounded-full hover:from-[#C0E55A] hover:via-[#22c55e] hover:to-[#16a34a] transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-2xl hover:shadow-[#4ade80]/30 animate-shimmer bg-[length:200%_100%]"
                  aria-label="Get your free SEO audit"
                >
                  <span className="relative z-10">CLAIM YOUR FREE SEO AUDIT</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-300"></div>
                </button>
                <a
                  href="#case-studies"
                  className="group text-white underline decoration-[#D4FF66] decoration-2 underline-offset-4 text-lg hover:text-[#D4FF66] transition-all duration-300 font-semibold relative"
                  aria-label="View our SEO case studies and results"
                >
                  <span className="relative z-10">SEE HOW WE RANK WEBSITES</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4FF66] to-[#4ade80] group-hover:w-full transition-all duration-300"></div>
                  <svg className="inline-block ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8 text-white text-center">
              <div>
                <div className="text-3xl font-bold text-[#D4FF66]">500+</div>
                <div className="text-sm text-gray-300">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#4ade80]">300%</div>
                <div className="text-sm text-gray-300">Avg. Traffic Boost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#22c55e]">98%</div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-span-2 hidden lg:flex justify-center">
            <div className="relative bg-gradient-to-br from-[#0a1f12] to-[#17332c] p-2 rounded-2xl shadow-2xl">
              <img
                src="/assets/images/bg/seoBanner.png"
                alt="SEO dashboard showing improved rankings"
                // width={600}
                // height={400}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
