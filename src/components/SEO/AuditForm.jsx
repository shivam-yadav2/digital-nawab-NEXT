import React from "react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

const AuditForm = () => {
  return (
    <div>
      <HeroHighlight
        containerClassName={
          "bg-gradient-to-r  from-[rgba(5,5,5,1)] via-[#142b26] to-black "
        }
      >
        <div className=" py-12 grid lg:grid-cols-2 gap-4 lg:gap-12 px-4 sm:px-6  lg:px-8">
          <div className="hidden lg:flex items-center justify-center">
            <img src="/assets/images/seo/seo.avif" className="w-full rounded-2xl" alt="" />
          </div>
          <div className=" mx-auto flex flex-col justify-center ">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
              Free SEO Audit Form
            </h2>
            <p className="text-lg text-white text-center mt-2 mb-8">
              Get a FREE SEO Audit – See What’s Holding Your Website Back.
            </p>
            <form className="space-y-4">
              {/* Business Name Input */}
              <div>
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full px-4 py-3 rounded-lg bg-[#2A4A42] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D4FF66]"
                />
              </div>

              {/* Website URL Input */}
              <div>
                <input
                  type="url"
                  placeholder="Website URL"
                  className="w-full px-4 py-3 rounded-lg bg-[#2A4A42] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D4FF66]"
                />
              </div>

              {/* Email Address Input */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-[#2A4A42] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D4FF66]"
                />
              </div>

              {/* Current Traffic Dropdown */}
              <div>
                <select className="w-full px-4 py-3 rounded-lg bg-[#2A4A42] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D4FF66]">
                  <option disabled >
                    Current Traffic
                  </option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

              {/* SEO Goals Textarea */}
              <div>
                <textarea
                  placeholder="SEO Goals (e.g. 'More Traffic', 'Better Ranking')"
                  className="w-full px-4 py-3 rounded-lg bg-[#2A4A42] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D4FF66] resize-none h-24"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#D4FF66] text-black font-semibold py-3 rounded-lg hover:bg-[#C0E55A] transition"
                >
                  Analyze My Site
                </button>
              </div>
            </form>
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
};

export default AuditForm;