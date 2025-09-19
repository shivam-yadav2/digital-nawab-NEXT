import React from 'react';
import { Globe, Layout, Users, Zap, Target, ChartBar, Rocket, Check } from "lucide-react";
import { motion } from "framer-motion";

const FeatureCard = ({ title, description, icon: Icon }) => (
  <div 
    initial={{ opacity: 0, y: 20 }}
    //whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
    <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-gray-700 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

const ServicePackage = ({ title, price, features, isPopular }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    //whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
    <div className={`relative h-full ${isPopular ? 'bg-gradient-to-b from-gray-900/90 to-gray-800/90' : 'bg-gray-900/80'} backdrop-blur-sm border ${isPopular ? 'border-purple-500/50' : 'border-gray-800'} p-8 rounded-xl hover:border-gray-700 transition-all duration-300`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">${price}</span>
        <span className="text-gray-400 ml-2">/ page</span>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-300">
            <Check className="w-5 h-5 text-purple-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`mt-8 w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
        isPopular 
          ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/25' 
          : 'bg-gray-800 text-white hover:bg-gray-700'
      }`}>
        Get Started
      </button>
    </div>
  </motion.div>
);

const WebsiteCopywriting = () => {
  const features = [
    {
      icon: Globe,
      title: "SEO-Optimized Content",
      description: "Compelling copy that ranks high on search engines while maintaining a natural, engaging flow for your readers."
    },
    {
      icon: Layout,
      title: "Conversion-Focused",
      description: "Strategic placement of CTAs and persuasive elements that guide visitors through your sales funnel effectively."
    },
    {
      icon: Users,
      title: "Target Audience Research",
      description: "Deep understanding of your audience's pain points and desires to create copy that resonates and converts."
    },
    {
      icon: Target,
      title: "Brand Voice Development",
      description: "Consistent tone and messaging that reflects your brand's personality and connects with your audience."
    },
    {
      icon: ChartBar,
      title: "Data-Driven Approach",
      description: "Copy decisions backed by analytics and market research for maximum impact and engagement."
    },
    {
      icon: Rocket,
      title: "Performance Tracking",
      description: "Regular monitoring and optimization of copy performance to ensure the best possible results."
    }
  ];

  const packages = [
    {
      title: "Essential Website Copy",
      price: "149",
      features: [
        "Homepage & Landing Page",
        "Up to 5 pages",
        "2 rounds of revisions",
        "SEO optimization",
        "Basic keyword research",
        "Meta descriptions"
      ]
    },
    {
      title: "Professional Website Copy",
      price: "249",
      features: [
        "All Essential features",
        "Up to 10 pages",
        "4 rounds of revisions",
        "Advanced SEO optimization",
        "Competitor analysis",
        "Conversion optimization",
        "A/B testing recommendations"
      ],
      isPopular: true
    },
    {
      title: "Enterprise Website Copy",
      price: "449",
      features: [
        "All Professional features",
        "Unlimited pages",
        "Unlimited revisions",
        "Full SEO strategy",
        "UX writing",
        "Content strategy",
        "Monthly performance reports"
      ]
    }
  ];

  return (
    <div className="bg-gray-950 text-white py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          //whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Website & Landing Page Copywriting
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Transform visitors into customers with compelling website copy that tells your story, 
            showcases your value, and drives conversions through strategic messaging and persuasive content.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Process Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          //whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-6">Our Writing Process</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />
            <div className="space-y-12 relative">
              {[
                { title: "Research & Discovery", description: "Understanding your brand, audience, and objectives" },
                { title: "Content Strategy", description: "Developing a strategic plan for your website copy" },
                { title: "Writing & Optimization", description: "Creating compelling, SEO-friendly content" },
                { title: "Review & Refinement", description: "Perfecting the copy based on your feedback" }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  //whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 text-${index % 2 === 0 ? 'right' : 'left'} p-6`}>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  <div className="relative w-4 h-4 rounded-full bg-purple-500">
                    <div className="absolute inset-0 rounded-full bg-purple-400 animate-ping" />
                  </div>
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pricing Packages */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            //whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Choose Your Package
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <ServicePackage key={index} {...pkg} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          //whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
            Start Your Website Copy Project
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default WebsiteCopywriting;
