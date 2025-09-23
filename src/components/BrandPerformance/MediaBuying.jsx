'use client';
import React, { useState, useEffect } from 'react';
import { Monitor, Smartphone, Play, Radio, CheckCircle2, ArrowRight, Globe } from 'lucide-react';

const MediaBuyingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeChannel, setActiveChannel] = useState(0);
  const [mediaChannels, setMediaChannels] = useState([]);

  useEffect(() => {
    setIsVisible(true);

    // Fetch dynamic media channels
    const fetchMediaChannels = async () => {
      try {
        const res = await fetch("https://dashboard.digitalnawab.com/api/googlemedia");
        const json = await res.json();
        if (json?.data?.length) {
          const mappedChannels = json.data.map((item, index) => ({
            id: item.id,
            title: item.heading,
            description: item.description,
            reach: "2.5B+ Users", // keep static reach
            platforms: item.platform ? item.platform.split(",").map(p => p.trim()) : [],
            benefits: item.benefit ? item.benefit.split(",").map(b => b.trim()) : [],
            // Map icons manually based on title (you can customize)
            icon: item.heading.includes("Display") ? Monitor
                 : item.heading.includes("Mobile") ? Smartphone
                 : item.heading.includes("Video") ? Play
                 : item.heading.includes("Audio") ? Radio
                 : Monitor
          }));
          setMediaChannels(mappedChannels);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchMediaChannels();
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Globe className="w-4 h-4" />
            Media Buying
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
            Strategic Media Buying for
            <span className="block">Maximum Brand Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leverage our expertise in programmatic advertising and media planning to reach your target audience across all digital channels with precision and efficiency.
          </p>
        </div>

        {/* Media Channels */}
        <div className={`mb-20 transition-all duration-300 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Media Channels We Specialize In
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {mediaChannels.map((channel, index) => (
              <div 
                key={channel.id}
                className={`group relative p-8 bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-200 hover:border-purple-300 transition-all duration-500 hover:shadow-2xl cursor-pointer ${
                  activeChannel === index ? 'ring-2 ring-purple-500 shadow-2xl transform scale-105' : 'hover:scale-102'
                }`}
                onMouseEnter={() => setActiveChannel(index)}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                    <channel.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {channel.title}
                      </h4>
                      <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                        {channel.reach}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {channel.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Platforms:</h5>
                    <div className="flex flex-wrap gap-2">
                      {channel.platforms.map((platform, pIndex) => (
                        <span key={pIndex} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Key Benefits:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {channel.benefits.map((benefit, bIndex) => (
                        <div key={bIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-purple-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaBuyingSection;
