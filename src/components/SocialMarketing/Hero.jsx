import React from 'react';
import { Play, Sparkles, Hash, Users, MessageCircle } from 'lucide-react';

const SocialMediaHero = () => {
  const socialIcons = [
    { name: 'Facebook', color: 'bg-blue-600', position: 'top-20 left-20', delay: '0s' },
    { name: 'Discord', color: 'bg-indigo-600', position: 'top-40 left-40', delay: '0.5s' },
    { name: 'Telegram', color: 'bg-blue-400', position: 'bottom-40 left-32', delay: '1s' },
    { name: 'YouTube', color: 'bg-red-600', position: 'top-16 right-20', delay: '1.5s' },
    { name: 'Snapchat', color: 'bg-yellow-400', position: 'top-32 right-40', delay: '2s' },
    { name: 'Twitter', color: 'bg-blue-500', position: 'bottom-20 right-24', delay: '2.5s' }
  ];

  const profileImages = [
    { src: '/api/placeholder/40/40', position: 'top-32 left-48', delay: '0.8s' },
    { src: '/api/placeholder/40/40', position: 'top-24 right-64', delay: '1.8s' },
    { src: '/api/placeholder/40/40', position: 'bottom-32 right-48', delay: '2.8s' }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br py-24 from-rose-100 via-pink-50 to-orange-100 relative overflow-hidden flex items-center px-4 md:px-8">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 hidden sm:block">
        {/* Floating Social Icons */}
        {socialIcons.map((icon, index) => (
          <div
            key={index}
            className={`absolute ${icon.position} animate-bounce`}
            style={{ animationDelay: icon.delay, animationDuration: '3s' }}
          >
            <div className={`w-10 h-10 md:w-12 md:h-12 ${icon.color} rounded-xl shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300`}>
              {icon.name === 'Facebook' && <span className="text-white font-bold text-lg">f</span>}
              {icon.name === 'Discord' && <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />}
              {icon.name === 'Telegram' && <span className="text-white font-bold text-lg">t</span>}
              {icon.name === 'YouTube' && <Play className="w-5 h-5 md:w-6 md:h-6 text-white" />}
              {icon.name === 'Snapchat' && <span className="text-white font-bold text-lg">👻</span>}
              {icon.name === 'Twitter' && <span className="text-white font-bold text-lg">𝕏</span>}
            </div>                  
          </div>
        ))}

        {/* Profile Images */}
        {/* {profileImages.map((profile, index) => (
          <div
            key={index}
            className={`absolute ${profile.position} animate-pulse`}
            style={{ animationDelay: profile.delay }}
          >
            <img
              src={profile.src}
              alt="User profile"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover bg-gray-300 shadow-lg border-2 border-white hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))} */}

        {/* Decorative Stars */}
        <div className="absolute top-16 left-16 animate-spin" style={{ animationDuration: '8s' }}>
          <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-rose-400" />
        </div>
        <div className="absolute top-20 right-16 animate-spin" style={{ animationDuration: '6s', animationDelay: '2s' }}>
          <Hash className="w-5 h-5 md:w-6 md:h-6 text-orange-400" />
        </div>
        <div className="absolute bottom-24 left-20 animate-spin" style={{ animationDuration: '10s', animationDelay: '1s' }}>
          <Users className="w-5 h-5 md:w-7 md:h-7 text-pink-400" />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-rose-200/40 to-pink-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-orange-200/40 to-yellow-300/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          The best use of{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              social media marketing
            </span>
            <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 rounded-full"></span>
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
          Transform your brand's online presence with strategic social media campaigns. Drive engagement,
          build communities, and convert followers into loyal customers across all major platforms.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="inline-flex items-center gap-3 bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-gray-800 hover:scale-105 hover:shadow-xl transition-all duration-300">
            Start 14 days free trial
          </button>
          <button className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg border border-gray-200 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-900 rounded-full flex items-center justify-center">
              <Play className="w-4 h-4 text-white" />
            </div>
            Watch a demo
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {[
            { number: '500M+', label: 'Social Reach' },
            { number: '25K+', label: 'Active Campaigns' },
            { number: '98%', label: 'Client Satisfaction' },
            { number: '15+', label: 'Platforms' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-0.5">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Divider */}
      {/* <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-rose-300/30 to-transparent transform -translate-x-1/2"></div> */}
    </section>
  );
};

export default SocialMediaHero;
