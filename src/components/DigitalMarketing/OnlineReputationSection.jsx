import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Eye, BarChart, Shield, Search, AlertTriangle, TrendingUp } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.3 },
  },
};

const reputationServices = [
  {
    step: "01",
    title: "COMPREHENSIVE REVIEW MONITORING",
    desc: "We continuously monitor your online reviews across all major platforms including Google, Yelp, Facebook, and industry-specific sites. Our advanced tracking system alerts you instantly to new reviews, ensuring no feedback goes unnoticed.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    icon: Search,
    color: "from-blue-500 to-indigo-600"
  },
  {
    step: "02",
    title: "ADVANCED BRAND SENTIMENT ANALYSIS",
    desc: "Using AI-powered sentiment analysis tools, we analyze customer feedback, social media mentions, and online conversations to provide detailed insights into how your brand is perceived across digital channels.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    icon: BarChart,
    color: "from-green-500 to-emerald-600"
  },
  {
    step: "03",
    title: "STRATEGIC RECOVERY CAMPAIGNS",
    desc: "When reputation issues arise, we implement targeted recovery strategies including response management, positive content creation, SEO optimization, and proactive engagement to restore and enhance your brand's online image.",
    image: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=400&q=80",
    icon: Shield,
    color: "from-purple-500 to-pink-600"
  },
  {
    step: "04",
    title: "PROACTIVE REPUTATION BUILDING",
    desc: "Beyond damage control, we help build a robust positive online presence through strategic content marketing, customer testimonial campaigns, and thought leadership initiatives that strengthen your brand's credibility.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&q=80",
    icon: TrendingUp,
    color: "from-orange-500 to-red-600"
  },
  {
    step: "05",
    title: "CRISIS MANAGEMENT & RAPID RESPONSE",
    desc: "Our experienced team provides 24/7 crisis management support, with rapid response protocols to address negative publicity, manage viral content, and protect your brand during critical reputation threats.",
    image: "https://images.unsplash.com/photo-1584432743501-7d5c27a39189?auto=format&fit=crop&w=400&q=80",
    icon: AlertTriangle,
    color: "from-red-500 to-pink-600"
  },
];

const timelineItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const OnlineReputationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
            variants={timelineItemVariants}
          >
            Online{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Reputation Management
            </span>
          </h2>
          <p
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            variants={timelineItemVariants}
          >
            Protect, monitor, and enhance your brand's digital reputation with our comprehensive 
            suite of reputation management services. From review monitoring to crisis response, 
            we safeguard your online presence 24/7.
          </p>
        </div>

        {/* Timeline Section */}
        <div
          className="relative max-w-6xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="relative">
            {/* Central vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 lg:block hidden h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-30" />
            
            <div className="flex flex-col gap-20">
              {reputationServices.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? "lg:flex-row-reverse" : ""
                    }`}
                    variants={timelineItemVariants}
                  >
                    {/* Text Block */}
                    <div
                      className={`lg:w-1/2 px-4 lg:px-8 text-center lg:text-${
                        index % 2 === 0 ? "right" : "left"
                      }`}
                    >
                      <div
                        className="inline-flex items-center gap-2 mb-4"
                        whilehover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className={`p-2 rounded-full bg-gradient-to-r ${item.color} text-white shadow-lg`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                          {item.step}
                        </span>
                      </div>
                      
                      <h4 className="text-gray-900 text-xl lg:text-2xl font-bold mb-4 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Connector Dot */}
                    <div className="relative z-10 flex items-center justify-center">
                      <div
                        className="w-16 h-16 bg-white rounded-full shadow-2xl border-4 border-indigo-200 flex items-center justify-center"
                        whilehover={{ scale: 1.1, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${item.color} shadow-lg`} />
                      </div>
                      
                      {/* Animated rings */}
                      <div
                        className="absolute w-20 h-20 border-2 border-indigo-300 rounded-full"
                        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />
                      <div
                        className="absolute w-24 h-24 border border-purple-200 rounded-full"
                        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      />
                    </div>

                    {/* Image Block */}
                    <div 
                      className="lg:w-1/2 px-4 lg:px-8"
                      variants={imageVariants}
                    >
                      <div className="relative group">
                        <img
                          src={item.image}
                          alt={`${item.title} service`}
                          className="rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover h-64 lg:h-80 transition-all duration-300 group-hover:shadow-3xl"
                          loading="lazy"
                          whilehover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                        
                        {/* Overlay gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-all duration-300`} />
                        
                        {/* Floating icon */}
                        <div
                          className={`absolute -top-4 -right-4 p-3 rounded-full bg-gradient-to-r ${item.color} text-white shadow-lg`}
                          whilehover={{ y: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div variants={timelineItemVariants}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold"
            >
              <Eye className="w-5 h-5 mr-2" />
              Protect Your Brand Today
            </Button>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div
        className="absolute top-10 left-10 w-72 h-72 bg-indigo-300 rounded-full filter blur-3xl opacity-10"
        animate={{ 
          y: [0, -30, 0], 
          x: [0, 20, 0],
          scale: [1, 1.2, 1] 
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300 rounded-full filter blur-3xl opacity-10"
        animate={{ 
          y: [0, 30, 0], 
          x: [0, -20, 0],
          scale: [1, 1.3, 1] 
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-300 rounded-full filter blur-3xl opacity-5"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1] 
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
    </section>
  );
};

export default OnlineReputationSection;