'use client';
import React, { useEffect, useState } from "react";
import {
  MousePointer,
  Search,
  TrendingUp,
  Target,
  BarChart3,
  Zap,
  DollarSign,
  Eye,
  Users,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Monitor,
  Globe,
  Award,
  Play,
  Star,
} from "lucide-react";



const PPC = () => {
    const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const res = await fetch(
          "https://dashboard.digitalnawab.com/api/googlecampaigns"
        );
        const json = await res.json();
        if (json?.data) {
          setCampaigns(json.data);
        }
      } catch (err) {
        console.error("Error fetching campaigns:", err);
      }
    };

    fetchCampaigns();
  }, []);

  const gradientColors = [
    "from-blue-500 to-cyan-500",
    "from-green-500 to-emerald-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-blue-500",
    "from-teal-500 to-cyan-500",
  ];
  return (
    <div className="min-h-screen bg-black overflow-hidden ">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-white backdrop-blur-sm"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-green-400 rounded-full animate-bounce delay-1000"></div>

        <div className="relative z-10 max-w-7xl py-10 mx-auto text-center">
          <div className="mb-8">
            <div className="hidden lg:inline-flex items-center gap-3 bg-white backdrop-blur-xl border border-white/20 text-black px-8 py-4 rounded-full text-md xl:text-lg font-semibold mb-12 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 group">
              <MousePointer className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              Best PPC Services in Lucknow
            </div>

            <h1 className="text-6xl md:text-8xl xl:text-9xl font-black mb-8 leading-none">
              <span className="bg-gradient-to-r from-black via-blue-600 to-black bg-clip-text text-transparent  ">
                Google Ads
              </span>
              <br />
              <span className="bg-gradient-to-r from-black via-blue-600 to-black bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <div className="max-w-6xl mx-auto mb-16">
              <p className="text-lg xl:text-xl text-black leading-relaxed max-w-6xl mx-auto">
                The technique of marketing a business through paid adverts that
                display on search engine results pages is known as search engine
                marketing or PPC advertising. Advertisers bid on keywords that
                users of search engines like Google and Bing may input when
                seeking certain items or services, giving the advertiser the
                possibility for their adverts to show alongside the results for
                such search queries.
              </p>
              <p className="text-lg mt-2 xl:text-xl text-black leading-relaxed max-w-6xl mx-auto">
                These advertising, often known as pay-per-click advertisements,
                are available in several forms. Some are modest text-based
                advertising, and others, such as product listing advertising
                (PLAs, also known as Shopping advertising), are more visual,
                product-based promotions that allow users to see key
                information, such as pricing and reviews, at a glance.
              </p>
            </div>

            
          </div>
        </div>
      </section>

      {/* What is PPC - Enhanced Layout */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 md:max-w-6xl xl:max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black"></div>
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-green-400 rounded-full animate-bounce delay-1000"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Content Side */}
            <div className="space-y-12">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-indigo-500/30">
                  <Target className="w-4 h-4" />
                  Core Concept
                </div>

                <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight">
                  <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                    What is PPC
                  </span>
                  <br />
                  <span className="text-white/80 text-4xl md:text-5xl font-light">
                    (Pay Per Click)?
                  </span>
                </h2>
              </div>

              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                  <p className="text-lg xl:text-xl text-gray-300 leading-relaxed pl-8">
                    PPC is an abbreviation for pay-per-click, an online
                    marketing technique in which advertisers pay a charge each
                    time one of their ads is clicked. It is essentially a method
                    of purchasing visitors to your website rather than
                    attempting to "earn" those views naturally.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <p className="text-lg xl:text-xl text-gray-300 leading-relaxed pl-8">
                    Search engine advertising one of the most popular kinds of
                    PPC. It enables marketers to bid for ad placement in a
                    search engine's sponsored links when a customer searches for
                    a term related to their company offering. For example, if we
                    bid on the term "PPC software," our ad may appear at the top
                    of the Google results page.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Side */}
            <div className="space-y-8">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-500">
                  {/* Header */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                      <Award className="w-4 h-4" />
                      Premium Features
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      PPC Excellence
                    </h3>
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Feature Cards */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="group text-center hover:transform hover:scale-110 transition-all duration-500">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                          <Search className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-white mb-3 text-xl">
                        Search Ads
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        Appear on search results
                      </p>
                    </div>

                    <div className="group text-center hover:transform hover:scale-110 transition-all duration-500">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl">
                          <TrendingUp className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <h3 className="font-bold text-white mb-3 text-xl">
                        Performance
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        Track every click & conversion
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-12 grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">
                        98%
                      </div>
                      <div className="text-xs text-gray-400">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        24/7
                      </div>
                      <div className="text-xs text-gray-400">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">
                        500+
                      </div>
                      <div className="text-xs text-gray-400">Campaigns</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Paid Campaigns Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
        {/* Light Theme Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-pink-100/30 to-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-sm">
              <Target className="w-4 h-4" />
              Campaign Benefits
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Why Paid Campaigns?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Paid advertising usually has a fee attached to it, but offers
              targeted reach and measurable results that organic methods cannot
              match.
            </p>
          </div>

          {/* Introduction Content */}
          <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 md:p-12 shadow-lg mb-16">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We've already discussed the differences between free and paid
                web advertising. Paid advertising usually has a fee attached to
                it. Paid advertising examples include internet collaborations,
                website takeovers, and PPC campaigns (search, display & more).
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                The majority of people associate sponsored advertising with
                pay-per-click (PPC). PPC advertising includes Google AdWords,
                Facebook, and Twitter, among other social and digital channels.
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => {
              const cardGradient = gradientColors[index % gradientColors.length];

              return (
                <div
                  key={campaign.id}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative mb-6">
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r ${cardGradient} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                    ></div>
                    <div
                      className={`relative w-16 h-16 bg-gradient-to-r ${cardGradient} rounded-2xl flex items-center justify-center shadow-lg text-2xl`}
                    >
                      {campaign.icon} {/* Render emoji or string directly */}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {campaign.heading}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{campaign.description}</p>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Launch Your Campaign?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Start seeing results with targeted, measurable paid advertising
                campaigns designed for your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Start Campaign
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                  View Examples
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How PPC Works Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-black to-cyan-400/30"></div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-500/30 text-cyan-300 px-6 py-3 rounded-full text-sm font-medium mb-8">
              <Monitor className="w-4 h-4" />
              How It Works
            </div>

            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                How does Pay Per Click
              </span>
              <br />
              <span className="text-white/80 text-4xl md:text-5xl font-light">
                Ads work?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              PPC is a sort of online advertising in which marketers get
              compensated each time a user clicks on one of their
              advertisements.
            </p>
          </div>

          {/* Main Content Card */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 md:p-16 shadow-2xl mb-16">
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                PPC advertising comes in a variety of forms, but one of the most
                frequent is the sponsored search ad. These adverts display when
                individuals search for items online using a search engine like
                Google - particularly when they make commercial queries,
                indicating that they are looking to buy something.
              </p>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                This might range from a mobile search (someone looking for
                "pizza near me" on their phone) to a local service search
                (someone searching for a dentist or a plumber in their
                neighborhood) to someone buying for a present ("Mother's Day
                flowers") or a high-end item such as business software. All of
                these queries result in pay-per-click advertisements.
              </p>

              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 md:p-8">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium">
                  Businesses who run advertisements in pay-per-click advertising
                  are only compensated when a user clicks on their ad, hence the
                  name "pay-per-click."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PPC;
