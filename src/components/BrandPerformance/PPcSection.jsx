'use client';
import React, { useEffect, useState } from "react";
import {
  Search,
  Target,
  Globe,
  Zap,
  DollarSign,
  HeadphonesIcon,
  TestTube,
  BarChart3,
  MousePointer,
  TrendingUp,
  Settings,
  Sparkles,
  Users,
  ArrowRight,
  Monitor,
  Eye,
  Play,
} from "lucide-react";

  const iconMap = {
    "fa-solid fa-cloud": Search,
    "fa-solid fa-tv": Monitor,
    "fa-solid fa-users": Users,
    "fa-solid fa-bullseye": Target,
    "fa-solid fa-chart-bar": BarChart3,
    "fa-solid fa-eye": Eye,
    "fa-solid fa-play": Play,
    "fa-solid fa-cog": Settings,
  };

const PPCServicesSection = () => {
  const [adsData, setAdsData] = useState([]);
    useEffect(() => {
      const fetchAdsData = async () => {
        try {
          const res = await fetch("https://dashboard.digitalnawab.com/api/googleppc");
          const data = await res.json();
          console.log("Fetched PPC services data:", data);
          if (data?.data) {
            setAdsData(data.data);
          }
        } catch (err) {
          console.error("Error fetching PPC services:", err);
        }
      };
    fetchAdsData();
}, []);


  const benefits = [
    {
      icon: Target,
      title: "Targeted Customers",
      description:
        "Analyze your audience's statistics across all digital channels to uncover similar elements such as keywords, localities, demographics, job titles, interests, and popular subjects.",
    },
    {
      icon: Globe,
      title: "Local or Global: You Choose",
      description:
        "Use PPC to display text advertising to individuals in your target markets, whether local or global, with proper cultural adaptation.",
    },
    {
      icon: Zap,
      title: "Speedy Results",
      description:
        "Paid advertising ensures reach and allows you to enhance your brand with particular targeting and generate more qualified leads instantly.",
    },
    {
      icon: DollarSign,
      title: "You Control the Budget",
      description:
        "Reach a wide and diverse audience with complete control over your advertising spend based on your goals and objectives.",
    },
    {
      icon: HeadphonesIcon,
      title: "Superb Campaign Support",
      description:
        "A marketing campaign collection with consistent tone and content that can promote across multiple platforms effectively.",
    },
    {
      icon: TestTube,
      title: "Test your Ads",
      description:
        "Track outcomes for each ad, phrase, and user. Connect campaigns to Google Analytics to determine what works and what doesn't.",
    },
  ];

  const services = [
    {
      icon: BarChart3,
      title: "PPC Campaign Management and Analysis",
      description:
        "Regular account activity and performance optimization including keyword analysis, negative keywords, and ad group refinements.",
    },
    {
      icon: BarChart3,
      title: "Keyword Research",
      description:
        "Keyword research for PPC may be extremely time-consuming, but it is also vital. The foundation of any PPC campaign is keywords, and the most successful Google Ads marketers are always growing and refining their PPC keyword list. If you simply conduct keyword research once, when you establish your initial campaign, you are likely to lose out on hundreds of thousands of useful, long-tail, low-cost, and highly relevant phrases that may drive traffic to your site.",
    },
    {
      icon: Settings,
      title: "Pay Per Click (PPC) Online Advertising",
      description:
        "Advertisers cannot simply spend more to ensure that their advertising displays more prominently than their competitors' advertising on a search engine (often referred to as a Search Engine Results Page, or SERP). Ads are instead subject to the Ad Auction, a fully automated procedure used by Google and other major search engines to assess the relevancy and legitimacy of adverts that show on their SERPs.",
    },
  ];

  // Line pattern component
  const LinePattern = () => (
    <div className="absolute inset-0 opacity-10">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="seo-lines"
            patternUnits="userSpaceOnUse"
            width="20"
            height="20"
          >
            <path
              d="M 0,20 l 20,-20 M -5,5 l 10,-10 M 15,25 l 10,-10"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#seo-lines)" />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Our PPC Services Section */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in">
              Our Best PPC Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
              When you're new to search engine marketing, it will be very hard
              to know which type of ads will work for your business. Here's how
              we can help.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Additional details based on service type */}
                {index === 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Add PPC Keywords to increase reach</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Add Negative Keywords to prevent wasted spend</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Split Ad Groups for better targeting</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Best PPC Services Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <LinePattern />

          {/* Subtle background elements */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        </div>
        {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div> */}

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-300/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-cyan-500/20 to-blue-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 text-purple-300 px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Premium Services
            </div>

            <h2 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Our Best
              </span>
            </h2>
            <h3 className="text-5xl md:text-7xl font-black mb-6 lg:mb-12 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                PPC services
              </span>
            </h3>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                When you're new to search engine marketing, it will be very hard
                to know which type of ads will work for your business and which
                method will drive you more traffic. Here, we've explained the
                different types of PPC ads that you can consider for your
                business and how we can help.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {adsData.map((ad) => {
            console.log(ad)
            const Icon = iconMap[ad.icon] || Search; 
            return (
              <div
                key={ad.id}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl 
                  border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-blue-500/25 
                  transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative mb-6">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blue-500 to-cyan-500 
                    rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 
                    rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 
                    transition-transform duration-500">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 
                  group-hover:text-blue-300 transition-colors duration-300">
                  {ad.heading}
                </h3>
                <p className="text-gray-300 leading-relaxed">{ad.description}</p>
              </div>
            );
          })}
        </div>

          {/* Bottom Section */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Choose Your PPC Strategy?
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Our experts will help you determine which PPC services are best
                suited for your business goals and target audience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <Users className="w-5 h-5" />
                  Get Free Consultation
                </button>
                <button className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-xl">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-slide-left {
          animation: slide-left 0.8s ease-out forwards;
        }

        .animate-slide-right {
          animation: slide-right 0.8s ease-out forwards;
        }

        .animate-fade-in-stagger {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-in {
          animation: bounce-in 1s ease-out forwards;
        }
      `}</style> */}
    </div>
  );
};

export default PPCServicesSection;
