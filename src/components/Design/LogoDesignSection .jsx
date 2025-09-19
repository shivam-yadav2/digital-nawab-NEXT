import React, { useState, useRef, useEffect } from "react";
import {
  Zap,
  Sparkles,
  Target,
  Compass,
  Filter,
  Grid3X3,
  Search,
} from "lucide-react";

const LogoDesignSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const [visibleLogos, setVisibleLogos] = useState(12); // Show 12 logos initially
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const logoPortfolio = [
    // General Category
    {
      id: 1,
      title: "Academy 1",
      category: "education",
      type: "Wordmark",
      // color: "from-blue-500 to-cyan-500",
      height: "h-48",
      img: "/assets/Logos/logo/academy 1.png",
    },
    {
      id: 2,
      title: "Bhalla Logo",
      category: "business",
      type: "Symbol + Text",
      // color: "from-purple-500 to-pink-500",
      height: "h-64",
      img: "/assets/Logos/logo/bhalla logo.jfif",
    },
    {
      id: 3,
      title: "BK N",
      category: "business",
      type: "Monogram",
      // color: "from-green-500 to-teal-500",
      height: "h-52",
      img: "/assets/Logos/logo/BK logo n.png",
    },
    {
      id: 4,
      title: "Divyanjali Logo",
      category: "fashion",
      type: "Wordmark",
      // color: "from-gray-500 to-gray-700",
      height: "h-54",
      img: "/assets/Logos/logo/Divyanjali LOGO .png",
    },
    {
      id: 5,
      title: "Jaya Logo 1",
      category: "personal",
      type: "Script Logo",
      // color: "from-yellow-500 to-orange-500",
      height: "h-50",
      img: "/assets/Logos/logo/JAYA LOGO1 (4) copy.png",
    },
    {
      id: 6,
      title: "KNK Logo Golden",
      category: "luxury",
      type: "Symbol",
      // color: "from-amber-500 to-orange-500",
      height: "h-58",
      img: "/assets/Logos/logo/KNK LOGO GOLDEN.png",
    },
  
    {
      id: 8,
      title: "ICS Logo",
      category: "tech",
      type: "Monogram",
      // color: "from-blue-500 to-cyan-500",
      height: "h-48",
      img: "/assets/Logos/logo/LCS LOGO.png",
    },
    {
      id: 9,
      title: "Logo Final 1",
      category: "general",
      type: "Wordmark",
      // color: "from-green-500 to-emerald-500",
      height: "h-52",
      img: "/assets/Logos/logo/logo final (1) (1).jpg",
    },
    {
      id: 10,
      title: "Logo Final",
      category: "general",
      type: "Symbol",
      // color: "from-red-500 to-pink-500",
      height: "h-52",
      img: "/assets/Logos/logo/lOGO FINAL.png",
    },
    {
      id: 11,
      title: "Logo High",
      category: "tech",
      type: "Symbol + Text",
      // color: "from-purple-500 to-pink-500",
      height: "h-64",
      img: "/assets/Logos/logo/logo high.png",
    },
    {
      id: 12,
      title: "Logo Thia Pink",
      category: "fashion",
      type: "Wordmark",
      // color: "from-pink-500 to-rose-500",
      height: "h-50",
      img: "/assets/Logos/logo/LOGO thia pink.png",
    },
    {
      id: 13,
      title: "Logo TTK Black",
      category: "business",
      type: "Monogram",
      // color: "from-gray-700 to-gray-900",
      height: "h-48",
      img: "/assets/Logos/logo/Logo TTK ( black).png",
    },
    {
      id: 14,
      title: "Logo DND",
      category: "gaming",
      type: "Symbol",
      // color: "from-red-500 to-orange-500",
      height: "h-56",
      img: "/assets/Logos/logo/LOGO_DNdd.png",
    },
    {
      id: 15,
      title: "Logo AA",
      category: "general",
      type: "Wordmark",
      // color: "from-blue-500 to-cyan-500",
      height: "h-48",
      img: "/assets/Logos/logo/logoaa.png",
    },
    {
      id: 16,
      title: "Logo 2",
      category: "general",
      type: "Symbol",
      // color: "from-green-500 to-teal-500",
      height: "h-52",
      img: "/assets/Logos/logo/logo2.png",
    },
    {
      id: 17,
      title: "Miqh Logo",
      category: "business",
      type: "Monogram",
      // color: "from-amber-500 to-orange-500",
      height: "h-54",
      img: "/assets/Logos/logo/Miqh Logoj.png",
    },
    {
      id: 18,
      title: "MK Black Logo",
      category: "fashion",
      type: "Wordmark",
      // color: "from-gray-700 to-black",
      height: "h-50",
      img: "/assets/Logos/logo/MK black logo .png",
    },
    {
      id: 19,
      title: "MK Logo Copy",
      category: "personal",
      type: "Symbol + Text",
      // color: "from-yellow-500 to-orange-500",
      height: "h-48",
      img: "/assets/Logos/logo/MK_Logo_ (1) - Copy.png",
    },
    {
      id: 20,
      title: "Mrs India Logo",
      category: "fashion",
      type: "Wordmark",
      // color: "from-rose-500 to-pink-500",
      height: "h-56",
      img: "/assets/Logos/logo/Mrs India Logo.png",
    },
    {
      id: 21,
      title: "Pardehi Logo PNG",
      category: "personal",
      type: "Symbol",
      // color: "from-green-500 to-lime-500",
      height: "h-58",
      img: "/assets/Logos/logo/pardehi logo png.png",
    },

    {
      id: 23,
      title: "Prerna Singh Logo",
      category: "personal",
      type: "Script Logo",
      // color: "from-purple-500 to-pink-500",
      height: "h-54",
      img: "/assets/Logos/logo/prerna singh logo.png",
    },
    {
      id: 24,
      title: "Rambler",
      category: "travel",
      type: "Symbol + Text",
      // color: "from-blue-500 to-cyan-500",
      height: "h-52",
      img: "/assets/Logos/logo/rambler.png",
    },
    {
      id: 25,
      title: "Ritu Roy Logo",
      category: "personal",
      type: "Wordmark",
      // color: "from-amber-500 to-orange-500",
      height: "h-50",
      img: "/assets/Logos/logo/ritu roy logo.png",
    },
    {
      id: 26,
      title: "SBSB Logo",
      category: "business",
      type: "Monogram",
      // color: "from-green-500 to-emerald-500",
      height: "h-48",
      img: "/assets/Logos/logo/SBSB logo.png",
    },
    {
      id: 27,
      title: "Season 3 Logo",
      category: "entertainment",
      type: "Symbol",
      // color: "from-red-500 to-pink-500",
      height: "h-56",
      img: "/assets/Logos/logo/season-3 logo.PNG",
    },
    {
      id: 28,
      title: "Signex Logo",
      category: "tech",
      type: "Wordmark",
      // color: "from-purple-500 to-pink-500",
      height: "h-64",
      img: "/assets/Logos/logo/signex logo.png",
    },
    {
      id: 29,
      title: "Skin Art Logo",
      category: "healthcare",
      type: "Symbol + Text",
      // color: "from-rose-500 to-red-500",
      height: "h-52",
      img: "/assets/Logos/logo/skin art logo.png",
    },
    {
      id: 30,
      title: "Sri Venu",
      category: "personal",
      type: "Monogram",
      // color: "from-green-500 to-teal-500",
      height: "h-48",
      img: "/assets/Logos/logo/sri venu.png",
    },
    {
      id: 31,
      title: "Tender Hearts School Logo",
      category: "education",
      type: "Wordmark",
      // color: "from-blue-500 to-cyan-500",
      height: "h-54",
      img: "/assets/Logos/logo/tender hearts school logo png.png",
    },
    {
      id: 32,
      title: "Tiska Logo Mail",
      category: "business",
      type: "Symbol",
      // color: "from-amber-500 to-orange-500",
      height: "h-50",
      img: "/assets/Logos/logo/TISKA LOGO MAIL.png",
    },
    {
      id: 33,
      title: "Vinod Sharraf",
      category: "personal",
      type: "Script Logo",
      // color: "from-gray-500 to-gray-700",
      height: "h-56",
      img: "/assets/Logos/logo/vinod sharraf png.png",
    },
    {
      id: 34,
      title: "WhatsApp Image",
      category: "general",
      type: "Symbol + Text",
      // color: "from-green-500 to-lime-500",
      height: "h-46",
      img: "/assets/Logos/logo/WhatsApp Image 2023-06-21 at 3.35.37 PM.jpeg",
    },
  ];

  const logoServices = [
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Brand Marks",
      description:
        "Distinctive symbols that represent your brand's core identity",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Wordmarks",
      description: "Typography-focused logos that make your name memorable",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Combination Marks",
      description: "Perfect harmony between symbol and text elements",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      icon: <Compass className="w-7 h-7" />,
      title: "Monograms",
      description: "Elegant letter combinations for sophisticated brands",
      gradient: "from-green-400 to-teal-500",
    },
  ];

  const handleLoadMore = () => {
    setVisibleLogos((prev) => prev + 6); // Load 6 more logos
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-orange-100 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent text-sm font-semibold mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-amber-600 to-orange-600"></div>
            LOGO DESIGN
            <div className="w-8 h-px bg-gradient-to-r from-amber-600 to-orange-600"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Iconic Logos That
            <span className="block bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Define Brands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every great brand starts with a powerful logo. We craft memorable
            marks that capture your essence and leave lasting impressions in the
            minds of your audience.
          </p>
        </div>

        {/* Logo Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {logoServices.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>
              <div
                className={`relative w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="relative text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="relative text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Masonry Logo Portfolio */}
        <div
          className={`transition-all duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-6 gap-6 space-y-6">
            {logoPortfolio.slice(0, visibleLogos).map((logo, index) => (
              <div
                key={logo.id}
                className={`break-inside-avoid group cursor-pointer transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onMouseEnter={() => setHoveredLogo(logo.id)}
                onMouseLeave={() => setHoveredLogo(null)}
              >
                <div
                  className={`relative h-40 bg-gradient-to-br bg-white  rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105`}
                >
                  {/* Logo Display Area */}
                  <div className="absolute inset-0 flex items-center justify-center p-4 ">
                    <img
                      src={logo?.img}
                      alt={logo.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Hover Overlay */}
                  {/* <div
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                      hoveredLogo === logo.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="text-center text-white p-4">
                      <h4 className="text-xl font-bold mb-2">{logo.title}</h4>
                      <p className="text-sm opacity-90 mb-3">{logo.type}</p>
                      <div className="flex items-center justify-center gap-2">
                        <Search className="w-4 h-4" />
                        <span className="text-sm">View Details</span>
                      </div>
                    </div>
                  </div> */}

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                      {logo.type}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        {visibleLogos < logoPortfolio.length && (
          <div
            className={`text-center mt-12 transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button
              onClick={handleLoadMore}
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-amber-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Load More
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Create Your Iconic Logo?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's craft a logo that captures your brand's essence and makes a
              lasting impression on your audience.
            </p>
            <button className="bg-white text-amber-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
              Start Your Logo Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoDesignSection;
