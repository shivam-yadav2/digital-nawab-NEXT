import React from "react";
import { Users, Star, Rocket, Code, Target } from "lucide-react";

function AppDevelopmentPlatform() {
  const stats = [
    { label: "Rigorous Requirement Analysis", icon: Target },
    { label: "Competitive Rates & Project Quotes", icon: Code },
    { label: "Expert Mobile App Developers", icon: Users },
    { label: "Proven Delivery Methods", icon: Rocket },
    { label: "90% Client Satisfaction", icon: Star },
  ];

  const platforms = [
    {
      title: "Native Application",
      description:
        "A native application is a software application for use on a particular platform or device. Because a native app is designed for usage on a certain device and its operating system, it may make use of device-specific hardware and software.",
      gradient: "from-blue-300 to-blue-500",
      shadow: "shadow-blue-300/50",
    },
    {
      title: "Hybrid Application",
      description:
        "Hybrid mobile apps are programs that, like any other app, are loaded on a smartphone. What makes them different is that they blend native application elements, which are applications designed for a specific platform, for example, iOS and Android, with web app elements, which are app-like websites, but not installed on a device but viewed through a browser on the Internet.",
      gradient: "from-purple-300 to-purple-500",
      shadow: "shadow-purple-300/50",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-20 relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            User-Centric Mobile App Development Solutions
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Seamless experiences across devices. New platforms for online and
            mobile apps are constantly being developed, promising improved
            performance and compatibility for additional platforms.
          </p>
        </div>

        {/* Five Key Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-blue-300/50 transition-all duration-300"
            >
              <stat.icon className="w-10 h-10 text-blue-500 mb-3" />
              <span className="text-gray-800 font-medium text-sm">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* CTA - moved above platforms */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Seamless Mobile Experience On Any Platform
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            New platforms for online and mobile apps are constantly being developed, promising improved performance and compatibility for additional platforms. The mobile app environment will appear very different in ten years.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 text-white rounded-full font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105">
              <Rocket className="w-5 h-5 text-white" />
              Start Your Project
            </button>
            <button className="bg-white border border-gray-300 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all duration-300">
              <Users className="w-5 h-5 text-blue-500" />
              View Portfolio
            </button>
          </div>
        </div>

        {/* Platforms */}
        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${platform.gradient} p-8 rounded-3xl shadow-lg ${platform.shadow} hover:shadow-lg transition-all duration-300`}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{platform.title}</h3>
              <p className="text-white leading-relaxed">{platform.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AppDevelopmentPlatform;
