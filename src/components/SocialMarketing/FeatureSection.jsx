import React from "react";

const SocialFeaturesSection = () => {
  const services = [
    {
      platform: "Facebook",
      icon: (
        <svg
          className="w-8 h-8 xl:w-10 xl:h-10 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      title: "Facebook Marketing",
      description:
        "Reach billions of users with targeted Facebook campaigns that drive engagement and conversions.",
      features: [
        "Targeted Advertising",
        "Content Strategy",
        "Community Management",
        "Analytics & Reporting",
      ],
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      delay: "0s",
    },
    {
      platform: "Instagram",
      icon: (
        <svg
          className="w-8 h-8 xl:w-10 xl:h-10 text-pink-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      title: "Instagram Marketing",
      description:
        "Create visually stunning campaigns that capture attention and build brand loyalty on Instagram.",
      features: [
        "Visual Content Creation",
        "Story Marketing",
        "Influencer Partnerships",
        "Hashtag Strategy",
      ],
      gradient: "from-pink-500 to-purple-600",
      bgColor: "bg-pink-50",
      delay: "0.2s",
    },
    {
      platform: "LinkedIn",
      icon: (
        <svg
          className="w-8 h-8 xl:w-10 xl:h-10 text-blue-700"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      title: "LinkedIn Marketing",
      description:
        "Connect with professionals and decision-makers through strategic LinkedIn marketing campaigns.",
      features: [
        "B2B Lead Generation",
        "Professional Content",
        "Network Building",
        "Thought Leadership",
      ],
      gradient: "from-blue-700 to-blue-800",
      bgColor: "bg-blue-50",
      delay: "0.4s",
    },
  ];

  return (
    <div className="bg-gray-50 relative overflow-hidden">
      <div className="py-16 xl:py-24 px-4 md:px-8 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 xl:mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">
              Social Media Marketing
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold text-gray-900 mb-6 xl:mb-8 leading-tight">
            Facebook, Instagram &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              LinkedIn Marketing
            </span>
          </h2>
          <p className="text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Amplify your brand presence across the world's most powerful social
            media platforms. Drive engagement, build communities, and convert
            followers into loyal customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
          {services.map((service) => (
            <div
              key={service.platform}
              className="group relative"
              style={{ animationDelay: service.delay }}
            >
              {/* Card Background with Hover Effect */}
              <div
                className={`relative ${service.bgColor} rounded-3xl xl:rounded-4xl p-8 xl:p-10 h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 border border-white/50 backdrop-blur-sm`}
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl xl:rounded-4xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 xl:mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 xl:w-20 xl:h-20 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl xl:text-3xl font-bold text-gray-900 mb-4 xl:mb-6">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base xl:text-lg mb-6 xl:mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 xl:space-y-4 mb-8 xl:mb-10">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} flex-shrink-0`}
                        ></div>
                        <span className="text-gray-700 text-sm xl:text-base font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full bg-gradient-to-r ${service.gradient} text-white font-semibold py-4 xl:py-5 px-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 transform`}
                  >
                    <span className="text-base xl:text-lg">
                      Get Started with {service.platform}
                    </span>
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 xl:w-24 xl:h-24 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  {service.icon}
                </div>

                {/* Animated Dots */}
                <div className="absolute bottom-4 left-4 flex gap-1">
                  <div
                    className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.gradient} animate-pulse`}
                  ></div>
                  <div
                    className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.gradient} animate-pulse`}
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.gradient} animate-pulse`}
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 xl:mt-24 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl xl:rounded-4xl p-8 xl:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-32 h-32 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl xl:text-4xl font-bold mb-4 xl:mb-6">
                Ready to Transform Your Social Media Presence?
              </h3>
              <p className="text-xl xl:text-2xl text-blue-100 mb-8 xl:mb-10 max-w-2xl mx-auto">
                Let's create a comprehensive social media strategy that drives
                real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 font-semibold py-4 xl:py-5 px-8 xl:px-10 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <span className="text-base xl:text-lg">
                    Start Free Consultation
                  </span>
                </button>
                <button className="border-2 border-white text-white font-semibold py-4 xl:py-5 px-8 xl:px-10 rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300">
                  <span className="text-base xl:text-lg">
                    View Our Portfolio
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialFeaturesSection;
