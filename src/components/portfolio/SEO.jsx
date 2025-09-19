import React, { useState, useEffect } from 'react';
import { Search, TrendingUp, Target, Award, ChevronRight, ExternalLink, Globe, ArrowUp } from 'lucide-react';

const SEOShowcase = () => {
  const [activeTab, setActiveTab] = useState('rankings');
  const [isVisible, setIsVisible] = useState(false);

  // Sample client data
  const clientRankings = [
    {
      clientName: "TechCorp Solutions",
      domain: "techcorp.com",
      industry: "Software Development",
      keywords: 45,
      topRankings: 32,
      traffic: "+285%",
      timeline: "6 months",
      featured: true,
      beforeAfter: {
        before: { position: "Page 3-5", traffic: "2.1K/month" },
        after: { position: "#1-3", traffic: "8.1K/month" }
      },
      topKeywords: [
        { keyword: "custom software development", position: 1, volume: "8.1K" },
        { keyword: "enterprise app solutions", position: 2, volume: "5.2K" },
        { keyword: "software consulting services", position: 1, volume: "3.8K" }
      ]
    },
    {
      clientName: "MediCare Plus",
      domain: "medicareplus.com",
      industry: "Healthcare",
      keywords: 38,
      topRankings: 28,
      traffic: "+340%",
      timeline: "8 months",
      featured: false,
      beforeAfter: {
        before: { position: "Not in top 50", traffic: "850/month" },
        after: { position: "#1-2", traffic: "3.7K/month" }
      },
      topKeywords: [
        { keyword: "healthcare services near me", position: 1, volume: "6.5K" },
        { keyword: "medical insurance plans", position: 2, volume: "4.2K" },
        { keyword: "family doctor consultation", position: 1, volume: "2.8K" }
      ]
    },
    {
      clientName: "EcoGreen Solutions",
      domain: "ecogreen.com",
      industry: "Environmental Services",
      keywords: 52,
      topRankings: 41,
      traffic: "+420%",
      timeline: "10 months",
      featured: true,
      beforeAfter: {
        before: { position: "Page 4-6", traffic: "1.2K/month" },
        after: { position: "#1-3", traffic: "6.2K/month" }
      },
      topKeywords: [
        { keyword: "sustainable energy solutions", position: 1, volume: "7.3K" },
        { keyword: "solar panel installation", position: 2, volume: "9.1K" },
        { keyword: "green technology consulting", position: 1, volume: "3.4K" }
      ]
    },
    {
      clientName: "FoodieHub Restaurant",
      domain: "foodiehub.com",
      industry: "Food & Beverage",
      keywords: 29,
      topRankings: 24,
      traffic: "+195%",
      timeline: "4 months",
      featured: false,
      beforeAfter: {
        before: { position: "Page 2-4", traffic: "3.2K/month" },
        after: { position: "#1-2", traffic: "9.4K/month" }
      },
      topKeywords: [
        { keyword: "best restaurant downtown", position: 1, volume: "4.1K" },
        { keyword: "fine dining experience", position: 2, volume: "2.7K" },
        { keyword: "organic food restaurant", position: 1, volume: "3.5K" }
      ]
    }
  ];

  const overallStats = [
    { label: "Clients Served", value: "150+", icon: Target },
    { label: "Top 3 Rankings", value: "1,850+", icon: TrendingUp },
    { label: "Avg Traffic Growth", value: "285%", icon: ArrowUp },
    { label: "Success Rate", value: "98%", icon: Award }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Line pattern component
  const LinePattern = () => (
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="seo-lines" patternUnits="userSpaceOnUse" width="20" height="20">
            <path d="M 0,20 l 20,-20 M -5,5 l 10,-10 M 15,25 l 10,-10" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seo-lines)" />
      </svg>
    </div>
  );

  const tabs = [
    { id: 'rankings', label: 'Client Results', icon: TrendingUp },
    { id: 'keywords', label: 'Keyword Performance', icon: Target }
  ];

  return (
    <section className="relative pt-[120px] px-4 min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <LinePattern />
        
        {/* Subtle background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 px-6 py-3 rounded-full border border-blue-500/30 mb-8 backdrop-blur-sm">
            <Search className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">SEO Excellence</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent leading-tight">
            Search Engine
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Domination
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We've helped 150+ businesses achieve top rankings with proven SEO strategies that deliver 
            <span className="text-blue-400 font-semibold"> measurable results</span>
          </p>
        </div>

        {/* Stats Overview */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 transition-all duration-300 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {overallStats.map((stat, index) => (
            <div 
              key={index}
              className="group bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className={`flex justify-center gap-4 mb-12 transition-all duration-300 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-black/20 text-gray-300 hover:bg-black/30 border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Sections */}
        {activeTab === 'rankings' && (
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 transition-all duration-300 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {clientRankings.map((client, index) => (
              <div
                key={index}
                className={`group relative bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 overflow-hidden ${
                  client.featured ? 'ring-1 ring-blue-500/30' : ''
                }`}
              >
                {client.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1.5 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Client Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {client.clientName}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                        <Globe className="w-4 h-4" />
                        <span>{client.domain}</span>
                      </div>
                      <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30">
                        {client.industry}
                      </span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors cursor-pointer" />
                  </div>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 rounded-xl border border-green-500/20">
                      <div className="text-2xl font-bold text-green-400">{client.topRankings}</div>
                      <div className="text-sm text-gray-300">Top 3 Rankings</div>
                      <div className="text-xs text-gray-500">of {client.keywords} keywords</div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 p-4 rounded-xl border border-blue-500/20">
                      <div className="text-2xl font-bold text-blue-400">{client.traffic}</div>
                      <div className="text-sm text-gray-300">Traffic Growth</div>
                      <div className="text-xs text-gray-500">in {client.timeline}</div>
                    </div>
                  </div>

                  {/* Before/After */}
                  <div className="bg-black/30 rounded-xl p-4 mb-6 border border-white/10">
                    <h4 className="font-semibold text-white mb-3">Results</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-gray-400 mb-1">BEFORE</div>
                        <div className="text-sm font-medium text-red-400">{client.beforeAfter.before.position}</div>
                        <div className="text-xs text-gray-500">{client.beforeAfter.before.traffic}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 mb-1">AFTER</div>
                        <div className="text-sm font-medium text-green-400">{client.beforeAfter.after.position}</div>
                        <div className="text-xs text-gray-500">{client.beforeAfter.after.traffic}</div>
                      </div>
                    </div>
                  </div>

                  {/* Top Keywords */}
                  <div>
                    <h4 className="font-semibold text-white mb-3">Top Keywords</h4>
                    <div className="space-y-3">
                      {client.topKeywords.map((kw, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm bg-black/20 p-3 rounded-lg">
                          <span className="text-gray-300 flex-1">{kw.keyword}</span>
                          <div className="flex items-center gap-3">
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                              kw.position === 1 ? 'bg-yellow-500 text-black' :
                              kw.position === 2 ? 'bg-gray-400 text-white' :
                              'bg-orange-500 text-white'
                            }`}>
                              {kw.position}
                            </span>
                            <span className="text-gray-400 text-xs">{kw.volume}/mo</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'keywords' && (
          <div className={`space-y-8 transition-all duration-300 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {clientRankings.slice(0, 2).map((client, clientIndex) => (
              <div key={clientIndex} className="bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 p-6 border-b border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-2">{client.clientName}</h3>
                  <p className="text-blue-200">Keyword performance breakdown</p>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <div className="min-w-full space-y-3">
                      {client.topKeywords.map((keyword, kwIndex) => (
                        <div key={kwIndex} className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-white/10 hover:border-blue-500/30 transition-colors">
                          <div className="flex-1">
                            <div className="text-white font-medium">{keyword.keyword}</div>
                            <div className="text-gray-400 text-sm">{keyword.volume}/month searches</div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                              keyword.position === 1 ? 'bg-yellow-500 text-black' :
                              keyword.position === 2 ? 'bg-gray-400 text-white' :
                              keyword.position === 3 ? 'bg-orange-500 text-white' : 'bg-green-500 text-white'
                            }`}>
                              #{keyword.position}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-300 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 p-8 sm:p-12 rounded-3xl border border-blue-500/30 backdrop-blur-sm">
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Dominate Search?</span>
              </h3>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Join our successful clients and watch your website climb to the top of search results. 
                Let's turn your website into a <span className="text-blue-300 font-semibold">lead generation machine</span>.
              </p>
              
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 inline-flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105">
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Start SEO Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOShowcase;