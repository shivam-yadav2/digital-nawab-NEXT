import React, { useState, useEffect } from 'react';
import { Smartphone, Apple, Bot, Code, Zap, Rocket, Users, Star, Download, Play, ChevronRight, Layers, Target, Globe } from 'lucide-react';

const MobileAppDevelopment = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());


  const developmentProcess = [
    {
      phase: "01",
      title: "iPhone App Development",
      description: "We make powerful applications for all Apple devices, assisting the world's biggest companies in becoming mobile. Regardless of complexity, depending on our considerable experience in the creation of iOS applications to create a stylish, attractive, and consistent application for your industry.",
      icon: Target,
      duration: "1-2 weeks"
    },
    {
      phase: "02",
      title: "iPad App Development",
      description: "Using the iOS SDK, we have successfully created high-performance iPad applications that take full use of iPad devices’ power, simplicity, and security. Our professional iPad developers leverage iPadOS and its latest features intelligently to provide quicker and more responsive app experiences.",
      icon: Layers,
      duration: "2-3 weeks"
    },
    {
      phase: "03",
      title: "Android App Development",
      description: "We lead an Android App development firm that assists in the creation of strong Android applications that help your business grow enormously. Our team of experienced developers has years of expertise in creating full-fledged, scalable, resilient, and high-quality Android applications.",
      icon: Code,
      duration: "6-12 weeks"
    },
    {
      phase: "04",
      title: "Web App Development",
      description: "Our web application development services range from creating a simple CMS-enabled website to creating sophisticated progressive web apps, custom business apps, e-commerce portals, and SaaS systems. Bring the functionality and performance we expect from native apps to any browser and across devices, with no interruptions or slowdowns.",
      icon: Star,
      duration: "2-3 weeks"
    },
    {
      phase: "05",
      title: "Mobile App Design",
      description: "Mobile application design is known as the task of development. Even though mobile apps have a wide range of applications, they all have in common the necessity for maximum usability, accessibility, engagement, and overall user experience.",
      icon: Rocket,
      duration: "1-2 weeks"
    },
    {
      phase: "06",
      title: "Cross-platform Mobile Apps",
      description: "Mobile applications have become a must-have for many organizations in a variety of sectors. These applications need to function perfectly on several platforms like iOS, Android, and Windows. You may construct such solutions fast and cheaply by utilizing the cross-platform mobile development methodology.",
      icon: Zap,
      duration: "Ongoing"
    }
  ];

  const appStats = [
    { label: "Apps Developed", value: "200+", icon: Smartphone },
    { label: "App Store Rating", value: "4.8★", icon: Star },
    { label: "Total Downloads", value: "10M+", icon: Download },
    { label: "Client Satisfaction", value: "98%", icon: Users }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, parseInt(entry.target.dataset.index)]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-32 left-20 animate-bounce delay-300">
          <Smartphone className="w-8 h-8 text-blue-400/30" />
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce delay-700">
          <Apple className="w-8 h-8 text-gray-400/30" />
        </div>
        <div className="absolute top-1/3 right-20 animate-bounce delay-1000">
          <Bot className="w-8 h-8 text-green-400/30" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl xl:container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-20 animate-on-scroll" data-index="0">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <Smartphone className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 text-sm font-medium tracking-wider">MOBILE APP DEVELOPMENT</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Build Apps That
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Users Love
            </span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From ideation to deployment, we build intuitive and feature-rich mobile apps 
            for all platforms with cutting-edge technology and user-centric design.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-on-scroll" data-index="1">
          {appStats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 ${
                visibleItems.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        
        {/* Development Process */}
        <div className="animate-on-scroll" data-index="3">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mobile App Development Services
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A proven methodology that ensures your app is delivered on time, within budget, and exceeds expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProcess.map((step, index) => (
              <div
                key={index}
                className={`relative group transition-all duration-500 ${
                  visibleItems.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 h-full">
                  {/* Phase Number */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold">{step.phase}</span>
                    </div>
                    <div className="text-sm text-gray-400">{step.duration}</div>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-blue-400" />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Line */}
                {index < developmentProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 animate-on-scroll" data-index="4">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your App?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's transform your innovative ideas into powerful mobile applications that users love and businesses trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                <Rocket className="w-5 h-5" />
                <span>Start Your Project</span>
              </button>
              <button className="inline-flex items-center gap-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>View Portfolio</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppDevelopment;