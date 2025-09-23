'use client';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  TrendingUp,
  BarChart3,
  Target,
  Award,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const BrandPerformanceHero = () => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const floatingIcons = [
    { icon: TrendingUp, color: "text-green-400", delay: 0 },
    { icon: BarChart3, color: "text-blue-400", delay: 0.5 },
    { icon: Target, color: "text-purple-400", delay: 1 },
    { icon: Award, color: "text-yellow-400", delay: 1.5 },
  ];

  const performanceMetrics = [
    {
      value: "150%",
      label: "ROI Increase",
      color: "from-green-400 to-emerald-500",
    },
    {
      value: "2.5M+",
      label: "Impressions",
      color: "from-blue-400 to-cyan-500",
    },
    {
      value: "85%",
      label: "Brand Recall",
      color: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <div className="relative pt-[80px] flex h-full w-full items-center justify-center bg-gradient-to-br from-[rgba(5,5,5,1)] via-[#1a0a2e] to-black overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div
        className={cn(
          "absolute inset-0 opacity-30",
          "[background-size:30px_30px]",
          "[background-image:radial-gradient(#8b5cf6_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#6366f1_1px,transparent_1px)]"
        )}
      />

      {/* Animated Background Elements */}
      {/* <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      /> */}
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full filter blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Floating Performance Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.color} opacity-20`}
          style={{
            top: `${20 + index * 15}%`,
            right: `${10 + index * 8}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <item.icon className="h-8 w-8" />
        </motion.div>
      ))}

      <div className="min-h-screen z-30 flex justify-start items-start lg:items-center lg:justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-5  lg:gap-16 items-center">
          {/* Left Text Section */}
          <motion.div
            className="text-center lg:text-left lg:col-span-3 space-y-5 xl:space-y-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Badge */}

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl mt-5 custom-bold lg:text-7xl font-bold text-white xl:leading-tight"
              variants={slideInLeft}
            >
              Elevate Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                Brand Performance
              </span>
              <br />
              Beyond Limits.
            </motion.h1>

            <motion.p
              className="text-lg xl:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              variants={textVariants}
            >
              Transform your brand's digital presence with data-driven insights,
              advanced analytics, and performance optimization strategies that
              deliver measurable results and sustainable growth.
            </motion.p>

            {/* Performance Metrics */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-6 py-3 xl:py-6"
              variants={staggerContainer}
            >
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  variants={textVariants}
                  whilehover={{ scale: 1.05 }}
                >
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
                  >
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
              variants={textVariants}
            >
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-4 px-8 rounded-full hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group"
                whilehover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                }}
                whiletap={{ scale: 0.95 }}
              >
                <span>GET PERFORMANCE AUDIT</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                href="#"
                className="text-white underline text-lg hover:text-purple-400 transition-colors flex items-center gap-2 group"
                whilehover={{ x: 5 }}
              >
                <span>VIEW SUCCESS STORIES</span>
                <TrendingUp className="h-4 w-4 group-hover:scale-110 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Visual Section */}
          <motion.div
            className="mt-10 lg:mt-0 lg:col-span-2 hidden lg:flex justify-center relative"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            <div className="relative">
              {/* Main Visual Container */}
              <motion.div
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center overflow-hidden"
                whilehover={{
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated Chart/Graph Visualization */}
                <div className="absolute inset-8 flex flex-col justify-end space-y-2">
                  {[65, 85, 45, 90, 75, 95, 70].map((height, index) => (
                    <motion.div
                      key={index}
                      className="flex items-end space-x-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <motion.div
                        className={`bg-gradient-to-t ${
                          index % 3 === 0
                            ? "from-purple-500 to-purple-300"
                            : index % 3 === 1
                            ? "from-pink-500 to-pink-300"
                            : "from-cyan-500 to-cyan-300"
                        } rounded-t`}
                        style={{ height: `${height}%`, width: "30px" }}
                        animate={{
                          height: [`${height * 0.3}%`, `${height}%`],
                          opacity: [0.5, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: 1.5 + index * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Floating Performance Indicators */}
                <motion.div
                  className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm rounded-full p-3 border border-green-500/30"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <TrendingUp className="h-6 w-6 text-green-400" />
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4 bg-blue-500/20 backdrop-blur-sm rounded-full p-3 border border-blue-500/30"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <BarChart3 className="h-6 w-6 text-blue-400" />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 left-4 bg-purple-500/20 backdrop-blur-sm rounded-full p-3 border border-purple-500/30"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <Target className="h-6 w-6 text-purple-400" />
                </motion.div>

                <div>
                  <img src="/assets/images/google.png" alt="" />
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Award className="h-8 w-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-6 w-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BrandPerformanceHero;
