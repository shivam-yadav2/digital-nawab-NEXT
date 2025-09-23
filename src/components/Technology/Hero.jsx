import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Smartphone,
  Cloud,
  Database,
  Cpu,
  Zap,
  ArrowRight,
  Monitor,
  Layers,
  Globe,
} from "lucide-react";
import RotatingCircles from "./RotatingCircles";

const TechServicesHero = () => {
  const [currentService, setCurrentService] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);

    // Generate random particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);

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

  const services = [
    {
      icon: Code,
      title: "Web Development",
      desc: "Modern web solutions",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Smartphone,
      title: "App Development",
      desc: "Native & cross-platform",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      desc: "Scalable infrastructure",
      gradient: "from-emerald-500 to-teal-400",
    },
    {
      icon: Database,
      title: "Database Solutions",
      desc: "Data management",
      gradient: "from-orange-500 to-red-400",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const techStack = ["React", "Node.js", "Python", "AWS", "Docker", "MongoDB"];

  return (
    <section
      ref={containerRef}
      className="relative pt-[80px] min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, 
                rgba(59, 130, 246, 0.3) 0%, 
                rgba(147, 51, 234, 0.2) 25%, 
                rgba(16, 185, 129, 0.1) 50%, 
                transparent 70%
              ),
              linear-gradient(45deg, 
                rgba(59, 130, 246, 0.1) 0%, 
                rgba(147, 51, 234, 0.1) 25%, 
                rgba(16, 185, 129, 0.1) 50%, 
                rgba(239, 68, 68, 0.1) 75%, 
                transparent 100%
              )
            `,
            animation: "gradientShift 8s ease-in-out infinite alternate",
          }}
        />
      </div>

      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(30deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%, transparent),
            linear-gradient(-30deg, transparent 24%, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,0.05) 75%, rgba(255,255,255,0.05) 76%, transparent 77%, transparent)
          `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              animation: `float ${particle.speed * 3
                }s ease-in-out infinite alternate`,
              animationDelay: `${particle.id * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl xl:container 2xl:px-16 xl:px-12 lg:px-8 md:px-6 px-4 min-h-screen flex items-center">
        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 2xl:gap-20 xl:gap-16 lg:gap-12 md:gap-8 gap-6 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Animated Badge */}
            <div
              className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 text-sm font-medium transition-all duration-300 ${isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                }`}
            >
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-green-400" />
              </div>
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Innovation Hub • Live Projects
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1
                className={`text-3xl md:text-4xl xl:text-6xl 2xl:text-8xl font-black leading-none transition-all duration-300 delay-200 ${isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                  }`}
              >
                <span className="block">
                  <span className="text-white">Build</span>
                  <span className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text animate-gradient">
                    {" "}
                    Tomorrow
                  </span>
                </span>
                <span className="block text-white">Today</span>
              </h1>

              <div
                className={`text-lg lg:text-xl 2xl:text-2xl text-gray-400 font-light transition-all duration-300 delay-400 ${isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                  }`}
              >
                Transforming ideas into digital reality with cutting-edge
                technology
              </div>
            </div>

            {/* Dynamic Service Display */}

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-300 delay-800 ${isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                }`}
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <span className="relative z-10 flex items-center gap-2">
                  Start Building
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>

              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                Explore Solutions
              </button>
            </div>

            {/* Tech Stack Marquee */}
            <div
              className={`transition-all duration-300 delay-1000 ${isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
                }`}
            >
              <div className="text-sm text-gray-500 mb-3">
                Technologies we master:
              </div>
              <div className="flex gap-4 overflow-hidden">
                <div className="flex gap-4 animate-scroll">
                  {[...techStack, ...techStack].map((tech, index) => {
                    // Generate random color for each badge
                    const randomColor = `#${Math.floor(Math.random() * 16777215)
                      .toString(16)
                      .padStart(6, "0")}`;
                    return (
                      <div
                        key={index}
                        className="flex-shrink-0 px-4 py-2 rounded-full border text-gray-300 text-sm"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${randomColor}20, ${randomColor}40)`,
                          borderColor: `${randomColor}33`,
                        }}
                      >
                        {tech}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Tech Stack Orbit */}
          <div className="relative hidden lg:flex items-center justify-center">

            <RotatingCircles />

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-black/50 via-black/80 to-black/50 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="flex items-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span>500+ Projects Delivered</span>
            </div>
            <div className="w-px h-4 bg-gray-600" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>24/7 Technical Support</span>
            </div>
            <div className="w-px h-4 bg-gray-600" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span>Enterprise Ready</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            transform: scale(1) rotate(0deg);
          }
          100% {
            transform: scale(1.1) rotate(5deg);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-20px);
          }
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg) translateX(120px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(120px) rotate(-360deg);
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes animate-gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: animate-gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default TechServicesHero;
