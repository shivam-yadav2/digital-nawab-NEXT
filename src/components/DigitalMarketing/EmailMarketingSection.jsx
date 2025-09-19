import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Workflow, 
  Newspaper, 
  Target, 
  BarChart3, 
  Users, 
  Zap,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock
} from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const EmailMarketingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const mainServices = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Campaign Design & Execution",
      description: "Strategic email campaigns that convert",
      color: "from-red-500 to-rose-600"
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Automation Funnels",
      description: "Smart workflows that nurture leads",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: <Newspaper className="h-8 w-8" />,
      title: "Newsletter Management",
      description: "Engaging content that builds loyalty",
      color: "from-blue-500 to-indigo-600"
    },
  ];

  const processSteps = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Strategy & Planning",
      description: "Define goals, segment audiences, and create compelling messaging strategies",
      step: "01"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "List Building & Segmentation",
      description: "Build quality subscriber lists with advanced segmentation for personalized targeting",
      step: "02"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Design & Automation",
      description: "Create responsive templates and set up automated workflows for maximum efficiency",
      step: "03"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics & Optimization",
      description: "Track performance metrics and continuously optimize for better results",
      step: "04"
    },
  ];

  const stats = [
    { value: "4.2B", label: "Daily Email Users", icon: <Users className="h-5 w-5" /> },
    { value: "42x", label: "Average ROI", icon: <TrendingUp className="h-5 w-5" /> },
    { value: "99%", label: "Delivery Rate", icon: <CheckCircle className="h-5 w-5" /> },
    { value: "24/7", label: "Support", icon: <Clock className="h-5 w-5" /> },
  ];

  const benefits = [
    "GDPR & CAN-SPAM Compliant",
    "Advanced A/B Testing",
    "Real-time Analytics Dashboard",
    "Mobile-Responsive Templates",
    "Automated Drip Campaigns",
    "Personalization at Scale"
  ];

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-slate-50 via-red-50 to-pink-50 text-gray-800 relative overflow-hidden"
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
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
            variants={childVariants}
          >
            Email{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-600 to-rose-600">
              Marketing
            </span>
          </h2>
          
          <p
            className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed"
            variants={childVariants}
          >
            Transform your business communication with data-driven email marketing strategies 
            that build relationships, drive engagement, and boost conversions.
          </p>

          {/* Main Services Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
            variants={containerVariants}
          >
            {mainServices.map((service, index) => (
              <div key={index} variants={cardVariants}>
                <Card className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm hover:bg-white">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      whilehover={{ rotate: 5 }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              variants={statsVariants}
              whilehover={{ y: -5 }}
            >
              <div className="flex items-center justify-center mb-2 text-red-500">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Left Column - Content */}
          <div variants={childVariants}>
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Beyond Just Sending Emails
            </h3>
            
            <div className="space-y-4 mb-8">
              <p
                className="text-lg text-gray-600 leading-relaxed"
                variants={childVariants}
              >
                Email marketing isn't just about composing messages and hitting send. 
                It's a sophisticated blend of strategy, technology, and creativity that requires 
                expertise in privacy compliance, deliverability optimization, and performance tracking.
              </p>
              
              <p
                className="text-lg text-gray-600 leading-relaxed"
                variants={childVariants}
              >
                From navigating GDPR regulations to managing high-volume campaigns and 
                analyzing complex metrics, we handle the technical complexities while 
                you focus on growing your business.
              </p>
            </div>

            {/* Benefits List */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
              variants={containerVariants}
            >
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3"
                  variants={childVariants}
                  whilehover={{ x: 5 }}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Process Steps */}
          <div variants={childVariants}>
            <h3 className="text-3xl font-bold mb-8 text-gray-900 text-center lg:text-left">
              Our Proven Process
            </h3>
            
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={cardVariants}
                  whilehover={{ x: 5 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-red-500">
                        {step.icon}
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto"
            variants={cardVariants}
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Ready to Boost Your Email ROI?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Let's create email campaigns that your customers actually want to receive
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-semibold group"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Start Your Campaign Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div
        className="absolute top-10 left-10 w-72 h-72 bg-red-300 rounded-full filter blur-3xl opacity-10"
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
        className="absolute bottom-10 right-10 w-80 h-80 bg-pink-300 rounded-full filter blur-3xl opacity-10"
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
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-rose-300 rounded-full filter blur-3xl opacity-5"
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
      
      {/* Floating Elements */}
      <div
        className="absolute top-20 right-20 text-red-200"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <Mail className="w-8 h-8" />
      </div>
      
      <div
        className="absolute bottom-32 left-16 text-pink-200"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <BarChart3 className="w-6 h-6" />
      </div>
    </section>
  );
};

export default EmailMarketingSection;