import React from "react";
import { Play } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="relative py-24 px-4 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='37' cy='37' r='1'/%3E%3Ccircle cx='7' cy='37' r='1'/%3E%3Ccircle cx='37' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-8 bg-red-500"></div>
                <span className="text-sm font-medium text-gray-600 tracking-[0.2em] uppercase">
                  Our Story
                </span>
              </div>

              <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Your Vision Our Expertise Your Success Get Noticed Generate{" "}
                <span className="text-red-500">Leads Dominate.</span>
              </h1>
            </div>

            {/* Large Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Top Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Professional woman"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    Tech Blog
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    Trends
                  </span>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Team meeting"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    Tech Blog
                  </span>
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    Trends
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-gray-700  leading-relaxed mb-8">
                Today's expanded internet access has fueled the rise of numerous
                digital channels. It has changed the way people sell and
                purchase, and offline marketing is no longer as successful as it
                once was. So here is Digital Nawab a digital marketing company
                in lucknow to helping your business to grow.
              </p>
              <p className="text-gray-700  leading-relaxed mb-8">
                The primary method of reaching out to an audience or clients has
                changed from offline to online. Most advertisers today use new
                platforms, software, and strategies to communicate with their
                consumers, which is known as Digital Marketing Services.
              </p>

              

              {/* Watch Intro Section */}
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Team member"
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Team member"
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                    alt="Team member"
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                  />
                </div>

                <button className="flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 fill-white text-white ml-0.5" />
                  </div>
                  <span className="font-medium">WATCH INTRO</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Google Partner */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-lg">
            <span className="text-2xl md:text-3xl font-bold text-gray-900">
              No.1 Digital Marketing Company in Lucknow
            </span>
            <div className="w-px h-8 bg-gray-300"></div>
            <span className="text-lg text-gray-600">
              —A Google Partner Agency—
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
