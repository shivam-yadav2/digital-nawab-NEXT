import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Layers, Database, ArrowRight, Sparkles, TrendingUp } from "lucide-react";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      duration: 0.6, 
      staggerChildren: 0.15,
      delayChildren: 0.2 
    },
  },
};

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.25, 0.25, 0, 1]
    } 
  },
};

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      duration: 0.7,
      ease: [0.25, 0.25, 0, 1]
    } 
  },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1]
    } 
  },
};

const EnhancedLeadGenerationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Data-Driven Targeting",
      description: "Leverage advanced analytics and AI-powered insights to identify and target your ideal prospects with precision. Our sophisticated algorithms analyze market trends and customer behavior patterns.",
      highlight: "99% Accuracy",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Funnel Creation & Management",
      description: "Build and optimize conversion funnels that guide prospects through their buyer journey. Our multi-touch campaigns nurture leads with personalized content at every stage.",
      highlight: "3x Conversion",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "CRM Integration",
      description: "Seamlessly integrate with your existing CRM and marketing stack. Real-time data synchronization ensures your sales team has the most up-to-date prospect information.",
      highlight: "Real-time Sync",
      color: "from-green-500 to-teal-500"
    },
  ];

  const stats = [
    { icon: <Target className="h-5 w-5" />, label: "Precision Targeting", value: "99%" },
    { icon: <TrendingUp className="h-5 w-5" />, label: "Lead Quality", value: "95%" },
    { icon: <Sparkles className="h-5 w-5" />, label: "Conversion Rate", value: "3.2x" },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full filter blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl"
          animate={{ 
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full filter blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div
          className="text-center mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6"
            variants={scaleVariants}
          >
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Lead Generation Excellence</span>
          </div>

          <h2
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            variants={fadeInUpVariants}
          >
            B2B & B2C{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 animate-pulse">
              Lead Generation
            </span>
          </h2>

          <p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
            variants={fadeInUpVariants}
          >
            Transform your business with our cutting-edge lead generation strategies. 
            We combine AI-powered targeting with human expertise to deliver qualified leads that convert.
          </p>

          {/* Stats Bar */}
          <div
            className="flex flex-wrap justify-center gap-8 mb-12"
            variants={fadeInUpVariants}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                whilehover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-blue-400">{stat.icon}</div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-lg text-gray-400 max-w-3xl mx-auto"
            variants={fadeInUpVariants}
          >
            Our comprehensive approach combines data-driven insights, advanced automation, 
            and personalized engagement to ensure sustainable growth for businesses of all sizes.
          </p>
        </div>

        {/* Enhanced Features Section */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              variants={slideInVariants}
              whilehover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-none shadow-2xl backdrop-blur-sm group h-full overflow-hidden">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg`} />
                <div className="absolute inset-[1px] bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-lg" />
                
                <div className="relative z-10 p-8">
                  <CardHeader className="pb-4">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 shadow-lg`}
                      whilehover={{ 
                        scale: 1.1, 
                        rotate: [0, -10, 10, 0],
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    
                    <div className="flex items-start justify-between mb-4">
                      <CardTitle className="text-2xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {feature.title}
                      </CardTitle>
                      <div
                        className={`px-3 py-1 rounded-full bg-gradient-to-r ${feature.color} text-xs font-semibold text-white shadow-lg`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        {feature.highlight}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    
                    <button
                      className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group-hover:gap-3"
                      whilehover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Learn more</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </CardContent>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUpVariants}
        >
          <button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            whilehover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
            }}
            whiletap={{ scale: 0.95 }}
          >
            Start Generating Leads Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnhancedLeadGenerationSection;