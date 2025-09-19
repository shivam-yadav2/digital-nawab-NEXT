import React, { useState } from 'react';
import { Lightbulb, Calendar, Palette, TrendingUp, Users, Target } from 'lucide-react';

const ContentPlanningSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: Calendar,
      title: "Content Strategy",
      description: "Comprehensive content planning aligned with your brand goals and audience needs.",
      features: ["Editorial Calendar", "Content Audits", "Performance Analytics"]
    },
    {
      id: 2,
      icon: Palette,
      title: "Creative Design",
      description: "Visual storytelling that captures attention and drives engagement across platforms.",
      features: ["Brand Identity", "Social Media Graphics", "Campaign Visuals"]
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "Content Optimization",
      description: "Data-driven approach to maximize reach, engagement, and conversion rates.",
      features: ["SEO Integration", "A/B Testing", "Trend Analysis"]
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Campaigns Launched" },
    { icon: Target, value: "95%", label: "Client Satisfaction" },
    { icon: TrendingUp, value: "200%", label: "Average Growth" },
    { icon: Lightbulb, value: "1000+", label: "Creative Assets" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Lightbulb className="w-4 h-4" />
            Content Excellence
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            Content Planning &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Creatives
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            Transform your brand story into compelling content that resonates with your audience 
            and drives meaningful engagement across all digital platforms.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative p-8 bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden animate-fade-in-up ${
                activeCard === service.id ? 'scale-105 shadow-2xl' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-3 text-sm text-gray-700 transform translate-x-0 transition-transform duration-300 group-hover:translate-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Hover Button */}
                <div className={`mt-6 transform transition-all duration-300 ${
                  activeCard === service.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors duration-200">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-4">Ready to Elevate Your Content?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's create a content strategy that tells your story, engages your audience, 
            and drives real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Start Your Project
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
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
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </section>
  );
};

export default ContentPlanningSection;