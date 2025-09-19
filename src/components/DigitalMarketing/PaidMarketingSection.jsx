import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Youtube, Linkedin, BarChart2, TrendingUp, Target, Zap, ArrowRight } from "lucide-react";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] // Custom easing for smoother animation
    } 
  },
};

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const PaidMarketingSection = () => {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const services = [
    {
      icon: <Facebook className="h-14 w-14 text-[#1877F2]" />,
      title: "Facebook & Instagram Ads",
      subtitle: "Awareness, Lead Generation & Conversion",
      description: "Targeted campaigns on Facebook and Instagram to increase awareness, generate leads, and drive conversions with engaging visuals and precise audience targeting.",
      metrics: ["2.8B+ Users", "95% Reach", "4.2x ROAS"],
      gradient: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverColor: "hover:bg-blue-100",
      accentColor: "#1877F2",
    },
    {
      icon: <Youtube className="h-14 w-14 text-[#FF0000]" />,
      title: "Google Ads",
      subtitle: "Search, Display, YouTube & Remarketing",
      description: "Leverage Google Ads for Search, Display, YouTube, and remarketing campaigns to maximize reach and re-engage potential customers effectively.",
      metrics: ["8.5B Searches/Day", "90% Market Share", "5.1x ROI"],
      gradient: "from-red-500 to-orange-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      hoverColor: "hover:bg-red-100",
      accentColor: "#FF0000",
    },
    {
      icon: <Linkedin className="h-14 w-14 text-[#0A66C2]" />,
      title: "LinkedIn Ads",
      subtitle: "Professional B2B Targeting",
      description: "Precision-targeted LinkedIn Ads to connect with B2B decision-makers, fostering professional relationships and generating high-quality leads.",
      metrics: ["900M+ Professionals", "80% B2B Leads", "6.1x CTR"],
      gradient: "from-blue-600 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverColor: "hover:bg-blue-100",
      accentColor: "#0A66C2",
    },
    {
      icon: <BarChart2 className="h-14 w-14 text-[#10B981]" />,
      title: "Performance Analytics",
      subtitle: "Data-Driven Optimization",
      description: "Real-time tracking and optimization of your campaigns to ensure maximum ROI, using advanced analytics and data-driven insights to refine strategies.",
      metrics: ["Real-time Data", "99% Accuracy", "24/7 Monitoring"],
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      hoverColor: "hover:bg-green-100",
      accentColor: "#10B981",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full filter blur-3xl opacity-20" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-pink-200 to-red-200 rounded-full filter blur-3xl opacity-15" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-green-200 to-cyan-200 rounded-full filter blur-3xl opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header Section */}
        <div
          ref={ref}
          className="text-center mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            variants={itemVariants}
          >
            <Zap className="h-4 w-4" />
            Paid Marketing Excellence
          </div>
          
          <h2
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
            variants={itemVariants}
          >
            Amplify Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
              Digital Reach
            </span>
          </h2>
          
          <p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Transform your business with strategic paid marketing campaigns that deliver measurable results 
            across the world's most powerful advertising platforms.
          </p>

          {/* Stats Row */}
          <div
            className="flex flex-wrap justify-center gap-8 mt-12"
            variants={containerVariants}
          >
            {[
              { icon: Target, value: "99%", label: "Targeting Accuracy" },
              { icon: TrendingUp, value: "4.5x", label: "Average ROAS" },
              { icon: BarChart2, value: "24/7", label: "Campaign Monitoring" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center"
                variants={itemVariants}
                whilehover={{ scale: 1.05 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-2">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl border-2 ${service.borderColor} ${service.bgColor} ${service.hoverColor} transition-all duration-500 overflow-hidden`}
              variants={itemVariants}
              whilehover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Floating Icon */}
              <div
                className="relative z-10 mb-6"
                variants={floatingVariants}
                animate="animate"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-gray-500 mb-4">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.metrics.map((metric, metricIndex) => (
                    <span
                      key={metricIndex}
                      className="inline-flex items-center px-3 py-1 bg-white/80 text-gray-700 text-xs font-medium rounded-full border"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div
                  whilehover={{ scale: 1.05 }}
                  whiletap={{ scale: 0.95 }}
                >
                  <Button
                    className={`group/btn bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all duration-300 text-white border-0`}
                  >
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-white/10 to-transparent rounded-full blur-xl" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div
            className="inline-flex flex-col sm:flex-row gap-4 items-center"
            variants={itemVariants}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Campaign
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold rounded-full border-2 hover:bg-gray-50 transition-all duration-300"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaidMarketingSection;