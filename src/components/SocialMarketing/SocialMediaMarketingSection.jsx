import React, { useState, useEffect } from 'react';

import { ArrowRight, Users, TrendingUp, Shield, BarChart3, Target, Zap, Globe, CheckCircle, Star, Moon, Sun } from 'lucide-react';

const DigitalNawabSections = () => {
  const [isDark, setIsDark] = useState(false);
  const [benefits, setBenefits] = useState([]);

  const toggleTheme = () => setIsDark(!isDark);

  useEffect(() => {
    const fetchBenefits = async () => {
      try {
        const res = await fetch("https://dashboard.digitalnawab.com/api/getsmmbenefit");
        const json = await res.json();

        if (json.data) {
          const formatted = json.data.map((item, idx) => {
            const parts = item.description.split("\r\n\r\n"); // description → [main, additional]

            return {
              number: String(idx + 1).padStart(2, "0"),   // "01", "02" ...
              title: item.heading,                        // ✅ API heading → title
              description: parts[0] || "",                // पहला para
              additionalText: parts[1] || "",             // दूसरा para
              color: ["blue", "green", "purple", "orange"][idx % 4], // वही color rotation
              image: `https://dashboard.digitalnawab.com/${item.image}`, // ✅ full image path
            };
          });

          setBenefits(formatted);
        }
      } catch (error) {
        console.error("Error fetching benefits:", error);
      }
    };

    fetchBenefits();
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
        : 'bg-gradient-to-br from-slate-50 to-blue-50'
    }`}>
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]' 
            : 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]'
        }`}></div>
        
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={toggleTheme}
          className={`p-3 rounded-full transition-all duration-300 ${
            isDark 
              ? 'bg-white/10 hover:bg-white/20 backdrop-blur-md text-white' 
              : 'bg-black/10 hover:bg-black/20 backdrop-blur-md text-gray-900'
          }`}
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20' 
            : 'bg-gradient-to-r from-blue-600/10 to-purple-600/10'
        }`}></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl animate-pulse ${
            isDark ? 'bg-blue-500/20' : 'bg-blue-500/10'
          }`}></div>
          <div className={`absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl animate-pulse delay-700 ${
            isDark ? 'bg-purple-500/20' : 'bg-purple-500/10'
          }`}></div>
          <div className={`absolute top-1/2 left-1/2 w-24 h-24 rounded-full blur-3xl animate-pulse delay-1000 ${
            isDark ? 'bg-pink-500/20' : 'bg-pink-500/10'
          }`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className={`px-6 py-2 rounded-full text-sm font-medium ${
                isDark 
                  ? 'bg-white/10 text-white backdrop-blur-md' 
                  : 'bg-black/10 text-gray-900 backdrop-blur-md'
              }`}>
                Premier Digital Marketing Agency
              </div>
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Social Marketing Agency in{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Lucknow, India
              </span>
            </h1>
            <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Digital Nawab - Your premier social media marketing partner
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto">
            <div className={`relative rounded-3xl overflow-hidden shadow-2xl ${
              isDark ? 'bg-white/5 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className={`absolute inset-0 ${
                isDark 
                  ? 'bg-gradient-to-t from-black/60 to-transparent' 
                  : 'bg-gradient-to-t from-black/30 to-transparent'
              }`}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-300 hover:shadow-3xl ${
            isDark 
              ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10' 
              : 'bg-white/80 backdrop-blur-xl border border-black/5'
          }`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
                  isDark 
                    ? 'bg-blue-500/20 text-blue-300' 
                    : 'bg-blue-500/10 text-blue-600'
                }`}>
                  Understanding Your Audience
                </div>
                <h2 className={`text-3xl md:text-4xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Understanding Your Audience Through Social Networks
                </h2>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Social media networks are available to everybody, allowing businesses to track the activity of their customers or potential customers. This allows marketers to learn more about their target audience's likes, dislikes, and interests, allowing them to develop a stronger marketing plan to attract such clients.
                </p>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Learning these patterns allows you to focus on the areas you aren't paying attention to while producing content for your website, assisting you in getting better at your digital marketing techniques for attracting the correct clients and satisfying their requests. Digital Nawab Fulfill all your needs.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className={`absolute inset-0 rounded-full blur-xl ${
                    isDark ? 'bg-gradient-to-br from-blue-500/30 to-purple-600/30' : 'bg-gradient-to-br from-blue-500/20 to-purple-600/20'
                  }`}></div>
                  <div className="relative w-64 h-64 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-full flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                    <Users className="w-24 h-24 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-block px-6 py-2 rounded-full text-sm font-medium mb-6 ${
              isDark 
                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white backdrop-blur-md' 
                : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-gray-900 backdrop-blur-md'
            }`}>
              Why Choose Social Media Marketing
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Benefits of Social Media Marketing Agency
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className={`group rounded-3xl shadow-2xl p-8 transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 ${
                isDark 
                  ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10' 
                  : 'bg-white/80 backdrop-blur-xl border border-black/5'
              }`}>
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      benefit.color === 'blue' ? 'bg-blue-500/20' :
                      benefit.color === 'green' ? 'bg-green-500/20' :
                      benefit.color === 'purple' ? 'bg-purple-500/20' :
                      'bg-orange-500/20'
                    }`}>
                      <span className={`text-2xl font-bold ${
                        benefit.color === 'blue' ? 'text-blue-400' :
                        benefit.color === 'green' ? 'text-green-400' :
                        benefit.color === 'purple' ? 'text-purple-400' :
                        'text-orange-400'
                      }`}>
                        {benefit.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {benefit.title}
                    </h3>
                    <div className="mb-6 h-[250px] rounded-xl overflow-hidden">
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className={`leading-relaxed mb-4 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {benefit.description}
                    </p>
                    <p className={`leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {benefit.additionalText}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SMO Detailed Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className={`inline-block px-6 py-2 rounded-full text-sm font-medium mb-6 ${
              isDark 
                ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white backdrop-blur-md' 
                : 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-gray-900 backdrop-blur-md'
            }`}>
              Social Media Optimization
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Social Media Optimization (SMO)
            </h2>
          </div>

          <div className={`rounded-3xl shadow-2xl p-8 md:p-12 mb-12 ${
            isDark 
              ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10' 
              : 'bg-white/80 backdrop-blur-xl border border-black/5'
          }`}>
            <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <p className={`text-lg leading-relaxed mb-6 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  SMO involves deciding what content works best for your organization on social media channels and replicating that performance. It's much easier said than done. To do this, you will first determine what content your target audience is looking for, then determine where you belong in the social media landscape, and lastly implement (and then reevaluate) your approach.
                </p>
                <p className={`text-lg leading-relaxed mb-6 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  You may know it as a procedure comparable to search engine optimization (SEO). What's the main similarity? The idea is to get your material in front of as many individuals as possible.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                  alt="Social Media Optimization"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
            
            <div className={`rounded-2xl p-6 ${
              isDark 
                ? 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20' 
                : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50'
            }`}>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-200' : 'text-gray-700'
              }`}>
                When your prospects and customers are online, where do they go? They may use Pinterest or Facebook in their personal life. When they use social media for business, though, they are more likely to be found on sites like LinkedIn or Stack Exchange. According to the Content Marketing Institute, 66 percent of marketers consider LinkedIn to be the most successful B2B social media site.
              </p>
            </div>
          </div>

          <div className={`rounded-3xl p-8 md:p-12 ${
            isDark 
              ? 'bg-gradient-to-br from-gray-800/50 via-purple-900/20 to-gray-900/50 backdrop-blur-xl border border-white/10' 
              : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 backdrop-blur-xl border border-blue-200/50'
          }`}>
            <p className={`text-lg leading-relaxed mb-8 ${
              isDark ? 'text-gray-200' : 'text-gray-700'
            }`}>
              When it comes to social media optimization, you don't have to be on every site. However, you must select the appropriate platforms for your audience, then double down on your efforts and enhance your presence in those places.
            </p>

            <div className="mb-8">
              <h3 className={`text-3xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                5 Steps to Social Media Optimization
              </h3>
              <p className={`text-lg leading-relaxed mb-8 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                To improve your social media channels, you must first devise and then implement a social media optimization strategy. If you follow these five steps, you'll be well on your way to a search-friendly social network presence.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: 1, title: "Analyze your audience", icon: Users },
                { step: 2, title: "Perform competitive analysis", icon: BarChart3 },
                { step: 3, title: "Build a strategy based on findings", icon: Target },
                { step: 4, title: "Execute on that strategy", icon: Zap },
                { step: 5, title: "Analyze results and adjust accordingly", icon: TrendingUp }
              ].map(({ step, title, icon: Icon }) => (
                <div key={step} className="text-center group">
                  <div className={`rounded-2xl p-6 shadow-xl transition-all duration-300 mb-4 group-hover:scale-105 ${
                    isDark 
                      ? 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 backdrop-blur-xl border border-white/10' 
                      : 'bg-white/80 backdrop-blur-xl border border-black/5'
                  }`}>
                    <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${
                      isDark ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20' : 'bg-gradient-to-br from-blue-100 to-purple-100'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                    </div>
                    <div className={`text-2xl font-bold mb-2 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {step}
                    </div>
                  </div>
                  <h4 className={`font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default DigitalNawabSections;