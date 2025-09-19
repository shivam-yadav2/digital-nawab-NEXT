    import React, { useState, useRef, useEffect } from 'react';
import { 
  Monitor, Code, Palette, Zap, ArrowRight, CheckCircle, 
  Globe, Smartphone, Search, ShoppingCart, Database, 
  Layers, Target, Award, Users, TrendingUp
} from 'lucide-react';

const WebDevelopmentSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const sectionRef = useRef(null);

  const services = [
    { id: 'corporate', icon: Globe, title: 'Corporate Websites', color: 'blue' },
    { id: 'ecommerce', icon: ShoppingCart, title: 'E-commerce Solutions', color: 'green' },
    { id: 'wordpress', icon: Database, title: 'WordPress Websites', color: 'purple' },
    { id: 'cms', icon: Layers, title: 'CMS Development', color: 'orange' },
    { id: 'mobile', icon: Smartphone, title: 'Mobile App Development', color: 'pink' },
    { id: 'ui-ux', icon: Palette, title: 'UI/UX Design', color: 'indigo' },
    { id: 'graphics', icon: Target, title: 'Graphics Design', color: 'red' },
    { id: 'digital-marketing', icon: TrendingUp, title: 'Digital Marketing', color: 'cyan' }
  ];

  const highlights = [
    { icon: Award, text: 'Expert Developers', color: 'blue' },
    { icon: Zap, text: 'Cutting-edge Technology', color: 'purple' },
    { icon: Users, text: 'User-friendly Design', color: 'green' },
    { icon: Search, text: 'SEO Optimized', color: 'orange' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-100/40 to-cyan-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
                <Monitor className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-600">Web Development</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Website Development
                <span className="block text-3xl md:text-4xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Company in Lucknow
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6 mb-8 text-slate-600 leading-relaxed">
              <p className="text-lg">
                Discover excellence with <span className="font-semibold text-slate-900">Digital Nawab</span>, your premier choice for web design and 
                website development company in Lucknow. We craft stunning, high-performance websites 
                tailored for startups, businesses, and enterprises. Experience the perfect blend of 
                <span className="font-semibold text-blue-600"> creativity, innovation, and functionality</span>.
              </p>

              <p>
                Looking for the best website development company in Lucknow? Look no further than Digital Nawab. 
                Our website development agency in Lucknow is backed by a team of expert developers and 
                cutting-edge technology, specializing in creating responsive, user-friendly, and SEO-optimized 
                websites that enhance your brand's online presence.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <div 
                    key={index}
                    className={`
                      flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl
                      transition-all duration-500 hover:shadow-md hover:border-${highlight.color}-200
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                    `}
                    style={{ transitionDelay: `${index * 200 + 600}ms` }}
                  >
                    <div className={`p-2 bg-${highlight.color}-50 rounded-lg`}>
                      <IconComponent className={`w-5 h-5 text-${highlight.color}-500`} />
                    </div>
                    <span className="font-medium text-slate-700">{highlight.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className={`transition-all duration-300 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                <span>LET'S PLAN YOUR WEBSITE</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Content - Services */}
          <div className={`transition-all duration-300 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Services Description */}
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Comprehensive Services</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                From corporate websites, e-commerce solutions, WordPress websites, ecommerce websites, 
                software development, CMS website development, mobile app development, UI/UX design & development, 
                graphics design, digital marketing, social media marketing and custom web applications, 
                we offer a wide range of services to meet your business needs.
              </p>
              
              <div className="flex items-center gap-2 text-blue-600 font-medium">
                <CheckCircle className="w-5 h-5" />
                <span>Contact us today to transform your digital vision into reality!</span>
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isHovered = hoveredService === service.id;
                
                return (
                  <div
                    key={service.id}
                    className={`
                      group relative p-6 bg-white border border-slate-200 rounded-xl cursor-pointer
                      transition-all duration-300 hover:shadow-lg hover:border-${service.color}-200
                      ${isHovered ? `shadow-lg border-${service.color}-200 scale-105` : ''}
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                    `}
                    style={{ transitionDelay: `${index * 100 + 800}ms` }}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className={`
                      inline-flex p-3 rounded-xl mb-3 transition-all duration-300
                      ${isHovered 
                        ? `bg-gradient-to-r from-${service.color}-500 to-${service.color}-600 text-white transform scale-110` 
                        : `bg-${service.color}-50 text-${service.color}-500 group-hover:bg-${service.color}-100`
                      }
                    `}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    
                    <h4 className="font-semibold text-slate-900 text-sm leading-tight">
                      {service.title}
                    </h4>

                    {/* Hover Effect */}
                    <div className={`
                      absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
                      bg-gradient-to-br from-${service.color}-50/50 to-${service.color}-100/50
                      ${isHovered ? 'opacity-100' : 'opacity-0'}
                    `} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-slate-100 {
          background-image: linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>
    </section>
  );
};

export default WebDevelopmentSection;