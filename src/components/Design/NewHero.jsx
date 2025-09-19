import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Play, Eye, Zap, Layers, Sparkles } from "lucide-react";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export function NewHero() {
  const images = [
    "/assets/images/creatives/1.webp",
    "/assets/images/creatives/2.webp",
    "/assets/images/creatives/3.webp",
    "/assets/images/creatives/4.webp",
    "/assets/images/creatives/5.webp",
    "/assets/images/creatives/6.webp",
    "/assets/images/creatives/7.webp",
    "/assets/images/creatives/8.webp",
    "/assets/images/creatives/9.webp",
    "/assets/images/creatives/10.webp",
    "/assets/images/creatives/11.webp",
    "/assets/images/creatives/12.webp",
    "/assets/images/creatives/13.webp",
    "/assets/images/creatives/14.webp",
    "/assets/images/creatives/1.webp",
    "/assets/images/creatives/2.webp",
    "/assets/images/creatives/3.webp",
    "/assets/images/creatives/4.webp",
    "/assets/images/creatives/5.webp",
    "/assets/images/creatives/6.webp",
    "/assets/images/creatives/7.webp",
    "/assets/images/creatives/8.webp",
    "/assets/images/creatives/9.webp",
    "/assets/images/creatives/10.webp",
    "/assets/images/creatives/11.webp",
    "/assets/images/creatives/12.webp",
    "/assets/images/creatives/13.webp",
    "/assets/images/creatives/14.webp",
    "/assets/images/creatives/2.webp",
    "/assets/images/creatives/3.webp",
    "/assets/images/creatives/4.webp",
    "/assets/images/creatives/5.webp",
    "/assets/images/creatives/6.webp",
    "/assets/images/creatives/7.webp",
    "/assets/images/creatives/8.webp",
    "/assets/images/creatives/9.webp",
    "/assets/images/creatives/10.webp",
    "/assets/images/creatives/11.webp",
    "/assets/images/creatives/12.webp",
    "/assets/images/creatives/13.webp",
    "/assets/images/creatives/14.webp",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const portfolioSlides = [
    {
      title: "Brand Identity",
      subtitle: "Tech Startup",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Mobile App UI",
      subtitle: "E-commerce Platform",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Motion Graphics",
      subtitle: "Product Launch",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Packaging Design",
      subtitle: "Premium Brand",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
      color: "from-orange-500 to-red-500",
    },
  ];

  const creativityWords = [
    "Creativity",
    "Innovation",
    "Vision",
    "Design",
    "Art",
  ];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % creativityWords.length);
    }, 2000);
    return () => clearInterval(wordInterval);
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden rounded-3xl">
      <div className="relative z-20 min-h-screen flex flex-col 2xl:grid 2xl:grid-cols-2 xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2">
        {/* Left Content Panel */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 2xl:p-16">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
            {/* Studio Badge */}
            {/* <div
              className={`inline-flex items-center gap-2 px-3 sm:px-4 md:px-5 lg:px-6 xl:px-6 2xl:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3.5 2xl:py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/80 text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-10 transform transition-all duration-300 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="w-1.5 sm:w-2 md:w-2 lg:w-2.5 xl:w-2.5 2xl:w-3 h-1.5 sm:h-2 md:h-2 lg:h-2.5 xl:h-2.5 2xl:h-3 rounded-full bg-green-400 animate-pulse" />
              Design Studio • Available for Projects
            </div> */}

            {/* Main Headline with Word Animation */}
            <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-8 2xl:mb-10">
              <div
                className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white leading-none mb-2 sm:mb-3 md:mb-3 lg:mb-4 xl:mb-4 2xl:mb-5 transform transition-all duration-300 delay-200`}
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-700 ease-in-out">
                    <ContainerTextFlip
                      words={creativityWords}
                    />{" "}
                    Meets
                  </div>
                </div>
                <div className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Communication
                </div>
              </div>
            </div>

            {/* Description */}
            <p
              className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-300 mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-8 2xl:mb-10 leading-relaxed transform transition-all duration-300 delay-400 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              We craft visual experiences that don't just look beautiful—they
              communicate, engage, and drive results. From brand identity to
              digital interfaces, every pixel has purpose.
            </p>

            {/* Action Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4 xl:gap-5 2xl:gap-6 mb-4 sm:mb-6 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-10 transform transition-all duration-300 delay-600 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <button className="group relative px-4 sm:px-6 md:px-6 lg:px-7 xl:px-8 2xl:px-10 py-2 sm:py-3 md:py-3 lg:py-3.5 xl:py-4 2xl:py-5 bg-white text-black rounded-none font-bold text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl overflow-hidden transition-all duration-300 hover:bg-gray-100">
                <span className="relative z-10 flex items-center gap-1 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-3 2xl:gap-4">
                  Explore Our Work
                  <ArrowRight className="w-3 sm:w-4 md:w-4 lg:w-4.5 xl:w-5 2xl:w-6 h-3 sm:h-4 md:h-4 lg:h-4.5 xl:h-5 2xl:h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
              <button className="group flex items-center gap-1 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-3 2xl:gap-4 px-4 sm:px-6 md:px-6 lg:px-7 xl:px-8 2xl:px-10 py-2 sm:py-3 md:py-3 lg:py-3.5 xl:py-4 2xl:py-5 border border-white/30 text-white rounded-none font-bold text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl hover:bg-white/10 transition-all duration-300">
                <Play className="w-3 sm:w-4 md:w-4 lg:w-4.5 xl:w-5 2xl:w-6 h-3 sm:h-4 md:h-4 lg:h-4.5 xl:h-5 2xl:h-6" />
                Watch Our Process
              </button>
            </div>

            {/* Quick Stats */}
            <div
              className={`grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-6 xl:gap-8 2xl:gap-10 transform transition-all duration-300 delay-800 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {[
                { number: "500+", label: "Projects" },
                { number: "150+", label: "Clients" },
                { number: "99%", label: "Success Rate" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-black text-white mb-1 sm:mb-1.5 md:mb-1.5 lg:mb-2 xl:mb-2 2xl:mb-3">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Visual Panel */}
        <div className="hidden lg:flex flex-1 relative">
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-8 xl:p-10 2xl:p-12">
            {/* Main Portfolio Showcase */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg 2xl:max-w-xl flex items-center justify-center">
              {/* Background Cards */}
              <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-[24rem]">
                {portfolioSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                      index === currentSlide
                        ? "opacity-100 scale-100 rotate-0"
                        : index === (currentSlide + 1) % portfolioSlides.length
                        ? "opacity-60 scale-95 rotate-3 translate-x-4 translate-y-4"
                        : index === (currentSlide + 2) % portfolioSlides.length
                        ? "opacity-30 scale-90 rotate-6 translate-x-8 translate-y-8"
                        : "opacity-0 scale-85 rotate-12"
                    }`}
                    style={{
                      zIndex:
                        portfolioSlides.length -
                        Math.abs(
                          (index - currentSlide + portfolioSlides.length) %
                            portfolioSlides.length
                        ),
                    }}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${slide.color} rounded-2xl p-1`}
                    >
                      <div className="w-full h-full bg-black rounded-xl overflow-hidden relative">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-5 xl:bottom-6 2xl:bottom-8 left-3 sm:left-4 md:left-5 lg:left-5 xl:left-6 2xl:left-8 right-3 sm:right-4 md:right-5 lg:right-5 xl:right-6 2xl:right-8">
                          <h3 className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl mb-1">
                            {slide.title}
                          </h3>
                          <p className="text-gray-300 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base 2xl:text-lg">
                            {slide.subtitle}
                          </p>
                        </div>
                        <div className="absolute top-3 sm:top-4 md:top-5 lg:top-5 xl:top-6 2xl:top-8 right-3 sm:right-4 md:right-5 lg:right-5 xl:right-6 2xl:right-8">
                          <div className="w-8 sm:w-10 md:w-10 lg:w-11 xl:w-12 2xl:w-14 h-8 sm:h-10 md:h-10 lg:h-11 xl:h-12 2xl:h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Eye className="w-4 sm:w-5 md:w-5 lg:w-5.5 xl:w-6 2xl:w-7 h-4 sm:h-5 md:h-5 lg:h-5.5 xl:h-6 2xl:h-7 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 sm:-top-5 md:-top-6 lg:-top-6 xl:-top-8 2xl:-top-10 -left-4 sm:-left-5 md:-left-6 lg:-left-6 xl:-left-8 2xl:-left-10 w-10 sm:w-12 md:w-14 lg:w-14 xl:w-16 2xl:w-20 h-10 sm:h-12 md:h-14 lg:h-14 xl:h-16 2xl:h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center animate-bounce">
                <Sparkles className="w-5 sm:w-6 md:w-7 lg:w-7 xl:w-8 2xl:w-10 h-5 sm:h-6 md:h-7 lg:h-7 xl:h-8 2xl:h-10 text-white" />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 lg:-bottom-6 xl:-bottom-8 2xl:-bottom-10 -right-4 sm:-right-5 md:-right-6 lg:-right-6 xl:-right-8 2xl:-right-10 w-12 sm:w-14 md:w-16 lg:w-16 xl:w-20 2xl:w-24 h-12 sm:h-14 md:h-16 lg:h-16 xl:h-20 2xl:h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center animate-pulse">
                <Zap className="w-6 sm:w-7 md:w-8 lg:w-8 xl:w-10 2xl:w-12 h-6 sm:h-7 md:h-8 lg:h-8 xl:h-10 2xl:h-12 text-white" />
              </div>
              <div className="absolute top-1/2 -right-8 sm:-right-9 md:-right-10 lg:-right-10 xl:-right-12 2xl:-right-14 w-8 sm:w-10 md:w-10 lg:w-11 xl:w-12 2xl:w-14 h-8 sm:h-10 md:h-10 lg:h-11 xl:h-12 2xl:h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center animate-spin">
                <Layers className="w-4 sm:w-5 md:w-5 lg:w-5.5 xl:w-6 2xl:w-7 h-4 sm:h-5 md:h-5 lg:h-5.5 xl:h-6 2xl:h-7 text-white" />
              </div>
            </div>

            {/* Portfolio Navigation */}
            <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-6 xl:bottom-8 2xl:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-2.5 2xl:gap-3">
              {portfolioSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-1.5 sm:w-2 md:w-2.5 lg:w-2.5 xl:w-3 2xl:w-4 h-1.5 sm:h-2 md:h-2.5 lg:h-2.5 xl:h-3 2xl:h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay and Marquee */}
      <div className="absolute inset-0 z-10 h-full w-full bg-black/90 dark:bg-black/80" />
      <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
    </div>
  );
}

