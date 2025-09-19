import React from 'react';
import { ArrowRight, MessageSquare, Smartphone, Search } from 'lucide-react';

const SocialMediaServices = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Digital marketing plan",
      description: "Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit amet consectetur. Cras"
    },
    {
      icon: Smartphone,
      title: "Social media strategy",
      description: "Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit amet consectetur. Cras"
    },
    {
      icon: Search,
      title: "Search engine optimization",
      description: "Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit amet consectetur. Cras"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-100 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-200 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Take the lead in smartly{' '}
              <span className="relative">
                social media marketing
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gray-300 rounded-full transform scale-x-0 hover:scale-x-100 transition-transform duration-700"></div>
              </span>
            </h2>
          </div>
          
          <div className="lg:pl-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque 
              tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit 
              amet consectetur. Cras feugiat massa pellentesque tortor. Sed massa sit 
              vehicula in ut id donec urna.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-3xl border-2 border-gray-200 group hover:shadow-xl hover:-translate-y-2 hover:border-gray-300 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-gray-900 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
                
                {/* CTA Button */}
                <button className="inline-flex items-center gap-2 text-gray-900 font-medium group-hover:gap-3 transition-all duration-300">
                  <span className="text-sm">Discover more</span>
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center group-hover:bg-gray-900 group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="w-3 h-3 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Divider */}
      {/* <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent transform -translate-x-1/2"></div> */}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default SocialMediaServices;