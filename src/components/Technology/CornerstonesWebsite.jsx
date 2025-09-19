import React from "react";

export default function CornerstonesWebsite() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-black"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(59,130,246,0.1),transparent)] opacity-40"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
      {/* Hero Section */}
      <div className="relative overflow-hidden z-10">
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 pb-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold bg-white bg-clip-text text-transparent mb-6 drop-shadow-2xl">
              Drive Growth
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto drop-shadow-lg">
              Transform your digital presence with cutting-edge strategies that
              convert visitors into customers
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Unique Content Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-2xl shadow-blue-900/20 hover:shadow-blue-600/40 hover:shadow-2xl">
              <div className="text-blue-400 text-sm font-semibold tracking-wide uppercase mb-4 transition-colors duration-300 group-hover:text-blue-300">
                Unique Content
              </div>
              <p className="text-slate-300 leading-relaxed transition-colors duration-300 group-hover:text-slate-200">
                The contents on your website must be read by people. If not, how
                long you have spent writing it doesn't matter. Using contrasting
                colors to make the text apparent to people, especially when
                reading a mobile phone, and make sure the font is large enough
                to see.
              </p>
            </div>
          </div>

          {/* Rich Visuals Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-2xl shadow-purple-900/20 hover:shadow-purple-600/40 hover:shadow-2xl">
              <div className="text-purple-400 text-sm font-semibold tracking-wide uppercase mb-4 transition-colors duration-300 group-hover:text-purple-300">
                Rich Visuals
              </div>
              <p className="text-slate-300 leading-relaxed transition-colors duration-300 group-hover:text-slate-200">
                To enable your visitors to understand their material on the
                website, the visual context is vital. More precisely, pictures
                assist you to transmit a message in detail, without writing an
                essay.
              </p>
            </div>
          </div>

          {/* Irresistible CTAs Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-2xl shadow-cyan-900/20 hover:shadow-cyan-600/40 hover:shadow-2xl">
              <div className="text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-4 transition-colors duration-300 group-hover:text-cyan-300">
                Irresistible CTAs
              </div>
              <p className="text-slate-300 leading-relaxed transition-colors duration-300 group-hover:text-slate-200">
                A major and required move towards quality management for your
                company is an irresistible call to action. You are quite likely
                to require a visitor to do some sort of action when you reach
                your landing page, normally to fill in the form to access an
                offer or buy a product.
              </p>
            </div>
          </div>

          {/* Periodic Blogs Card */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-full hover:transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 shadow-2xl shadow-indigo-900/20 hover:shadow-indigo-600/40 hover:shadow-2xl">
              <div className="text-indigo-400 text-sm font-semibold tracking-wide uppercase mb-4 transition-colors duration-300 group-hover:text-indigo-300">
                Periodic Blogs
              </div>
              <p className="text-slate-300 leading-relaxed transition-colors duration-300 group-hover:text-slate-200">
                An excellent company blog is a key driver for new website users
                who are looking for knowledge and solutions to questions. It is
                packed with professional insights and information that your
                audience finds important, ultimately contributing to the growth
                of your organization.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Integration Section */}
        {/* <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl transition-all duration-700"></div>
          <div className="relative bg-gradient-to-br from-slate-900/80 to-black/80 backdrop-blur-sm border border-slate-700/20 rounded-3xl p-12 shadow-2xl shadow-slate-900/30 hover:shadow-slate-900/50 transition-all duration-700 hover:-translate-y-1 hover:border-blue-500/30">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4 transition-all duration-500 drop-shadow-lg">
                Social Media Integration
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-300 leading-relaxed text-center transition-colors duration-500 group-hover:text-slate-200">
                If consumers can readily share your website content and information via social media, they will spread the word about what you can offer more easily. The idea is to incorporate buttons for social sharing in a visible place. Make tracking your social media profiles easy also to people. Did you get a best social media marketing agency?
              </p>
              <div className="flex justify-center mt-8 space-x-4">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-lg shadow-blue-900/30 hover:shadow-blue-600/50 hover:shadow-xl border border-blue-500/20 hover:border-blue-400/50">
                  Get Started
                </button>
                <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 px-8 py-3 rounded-full font-semibold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-lg shadow-purple-900/30 hover:shadow-purple-600/50 hover:shadow-xl border border-purple-500/20 hover:border-purple-400/50">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="fixed top-1/2 right-20 w-16 h-16 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </div>
  );
}
