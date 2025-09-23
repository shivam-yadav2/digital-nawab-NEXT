import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Link,
  TrendingUp,
  Users,
  Globe,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";

const BacklinkBuilding = () => {
  const [konamiCode, setKonamiCode] = useState([]);
  const [isRainbow, setIsRainbow] = useState(false);
  const [hoverCount, setHoverCount] = useState({});
  const [sections, setSections] = useState([]);

  // Konami code sequence
  const konamiSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      const newCode = [...konamiCode, event.key];
      if (newCode.length > konamiSequence.length) {
        newCode.shift();
      }
      setKonamiCode(newCode);

      if (newCode.join(",") === konamiSequence.join(",")) {
        setIsRainbow(true);
        setTimeout(() => setIsRainbow(false), 5000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [konamiCode]);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await fetch(
          "https://dashboard.digitalnawab.com/api/getseoservice"
        );
        const result = await response.json();
        console.log(result);
        if (result?.data) {
          const formattedSections = result.data.map((item, index) => ({
            title: item.heading,
            subtitle: item.subheading,
            description: item.description,
            features: item.features?.filter((f) => f),
            icon: [Link, Globe, TrendingUp, Users][index % 4],
            gradient: [
              "from-cyan-500 to-blue-700",
              "from-blue-600 to-purple-600",
              "from-green-600 to-emerald-600",
              "from-yellow-500 to-orange-500",
              "from-pink-600 to-rose-600",
              "from-orange-600 to-red-600",
            ][index % 6],
            stats: { number: "95%", label: "Authority Increase" },
            image: item.image?.startsWith("http")
              ? item.image
              : `https://dashboard.digitalnawab.com/${item.image}`,
          }));
          console.log(formattedSections);

          setSections(formattedSections);
        }
      } catch (error) {
        console.error("Error fetching sections:", error);
      }
    };

    fetchSections();
  }, []);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleImageHover = (index) => {
    setHoverCount((prev) => {
      const count = (prev[index] || 0) + 1;
      if (count === 5) {
        const img = document.querySelector(`#image-${index}`);
        if (img) {
          img.style.animation = "shake 0.5s cubic-bezier(.36,.07,.19,.97) both";
          setTimeout(() => {
            img.style.animation = "";
          }, 500);
        }
      }
      return { ...prev, [index]: count };
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className={`relative bg-gradient-to-br ${
        isRainbow ? "animate-rainbow" : "from-slate-50 via-white to-slate-100"
      } py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-500`}
    >
      <style jsx global>{`
        @keyframes shake {
          10%,
          90% {
            transform: translate3d(-1px, 0, 0);
          }
          20%,
          80% {
            transform: translate3d(2px, 0, 0);
          }
          30%,
          50%,
          70% {
            transform: translate3d(-4px, 0, 0);
          }
          40%,
          60% {
            transform: translate3d(4px, 0, 0);
          }
        }
        @keyframes rainbow {
          0% {
            background: linear-gradient(to right, #ff0000, #ff7f00);
          }
          25% {
            background: linear-gradient(to right, #ff7f00, #ffff00);
          }
          50% {
            background: linear-gradient(to right, #00ff00, #0000ff);
          }
          75% {
            background: linear-gradient(to right, #0000ff, #4b0082);
          }
          100% {
            background: linear-gradient(to right, #4b0082, #ff0000);
          }
        }
        .animate-rainbow {
          animation: rainbow 5s linear infinite;
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Specialized SEO Services
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent mb-6">
            Best SEO Services in Lucknow
          </h2>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Search Engine Optimization is a technique for increasing traffic to
            a website through organic search searches & its totally different
            from PPC Advertising. By using SEO services from Digital Nawab :
            well known Best SEO Company in Lucknow, India, you will begin to see
            an increase in qualified visitors to your website.
          </p>
          <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            You hire a website development company to creat your website. After
            that it comes to SEO. We're professionals at offering search engine
            optimization tailored to your company goals, from link building and
            keyword research to page optimization and technical SEO. We've taken
            the mystery out of SEO strategy by using tried-and-true strategies
            to boost your website traffic.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-24">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div
                key={index}
                variants={itemVariants}
                className={`relative group`}
              >
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-12 lg:gap-16`}
                >
                  {/* Image Section with Easter Egg */}
                  <div className="w-full lg:w-1/2 relative">
                    <div
                      id={`image-${index}`}
                      className="relative overflow-hidden rounded-2xl shadow-2xl"
                    >
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                      {/* Floating Stats Card with Confetti Easter Egg */}
                      <div
                        initial={{ opacity: 0, scale: 0.8 }}
                        //whileInView={{ opacity: 1, scale: 1 }}
                        whiletap={{ scale: 0.95 }}
                        onClick={triggerConfetti}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg cursor-pointer"
                      >
                        <div className="text-center">
                          <div
                            className={`text-2xl font-bold bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}
                          >
                            {section.stats.number}
                          </div>
                          <div className="text-sm text-gray-600 font-medium">
                            {section.stats.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    {/* Icon and Title */}
                    <div className="space-y-4">
                      <div
                        whilehover={{ rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${section.gradient} shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      <div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-2">
                          {section.title}
                        </h3>
                        <p
                          className={`text-lg font-medium bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}
                        >
                          {section.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="text-gray-700 text-lg leading-relaxed">
                      {section.description}
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {section.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          //whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 + 0.3 }}
                          className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-gray-100"
                        >
                          <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>{" "}
                {/* Decorative Elements */}
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-transparent via-gray-50/50 to-transparent blur-3xl"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div
          initial={{ opacity: 0, y: 30 }}
          //whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-[rgba(5,5,5,1)] via-[#183a32] to-black rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Boost Your Rankings?
              </h3>
              <p className="text-xl mb-8 text-blue-100">
                Let's discuss how our SEO services can transform your online
                presence
              </p>
              <button
                whilehover={{ scale: 1.05 }}
                whiletap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BacklinkBuilding;
