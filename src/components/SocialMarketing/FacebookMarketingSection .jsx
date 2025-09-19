import React, { useState, useEffect } from 'react';
import { CheckCircle, Target, Users, TrendingUp, Zap, BarChart3, Eye, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

const FacebookMarketingSection = () => {
  const [activeTab, setActiveTab] = useState(0);
    const [services, setServices] = useState([]);


  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('https://dashboard.digitalnawab.com/api/getsmmfacebook');
        const data = await response.json();
        if (data && data.data) {
          const formattedServices = data.data.map((service) => ({
            icon: service.icon, // class name like "fa-solid fa-cloud"
            title: service.heading,
            description: service.description,
          }));
          setServices(formattedServices);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);


  const strategies = [
    {
      title: "Facebook Page Creation",
      description: "We start with creating a professional business page as the foundation of your Facebook advertising journey. This is essential for building brand credibility and trust.",
      highlight: "Foundation Building"
    },
    {
      title: "Audience Targeting",
      description: "We recognize your products and services to generate eye-catching Facebook ads that reach the right audience. Strategic targeting ensures maximum ROI.",
      highlight: "Smart Targeting"
    },
    {
      title: "Strategic Planning", 
      description: "Our coordinated approach ensures your company's efforts deliver results. We understand Facebook algorithms and handle campaign execution professionally.",
      highlight: "Expert Execution"
    },
    {
      title: "Ad Creation & Optimization",
      description: "High-end Facebook marketing with professional ad creation. We handle everything from design to copy, ensuring your ads stand out in the feed.",
      highlight: "Creative Excellence"
    }
  ];

  const techniques = [
    "Ad Spending - ROI-focused budget management",
    "Custom Audiences - Targeted reach based on customer data", 
    "Lookalike Audiences - Find similar potential customers",
    "Remarketing Setup - Re-engage previous visitors",
    "FB Pixel Implementation - Track user behavior and conversions",
    "Dynamic Ads - Personalized product recommendations",
    "Campaign Optimization - Continuous performance improvement",
    "Detailed Reporting - Comprehensive analytics and insights"
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Hero Section - Centered Design */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Premium Facebook Marketing
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Brand with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Facebook Ads</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Looking for a premium company to promote your business on Facebook? 
            Digital Nawab is your best choice for effective Facebook advertising in Lucknow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Your Campaign
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-orange-500 hover:text-orange-500 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid - Card Layout */}
      <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Facebook Marketing Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver premium benefits with the best results, focusing on your company's promotion on Facebook
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border hover:border-orange-200"
            >
              <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${service.icon} text-2xl`}></i> {/* <-- This will render the icon */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <div className="mt-6 flex items-center text-orange-500 font-medium group-hover:translate-x-2 transition-transform duration-300">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Strategy Section - Tab Design */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Growth Strategies That Drive Results
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Points that influence your company's growth and build customer trust through our proven methods
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {strategies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === index 
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {strategies[index].highlight}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {strategies[activeTab].title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {strategies[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques Section - Modern List */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Facebook Advertising Techniques
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We implement cutting-edge methods to maximize your Facebook advertising ROI and reach your target audience effectively
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {techniques.map((technique, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-2 border-l-4 border-orange-500"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <p className="text-gray-800 font-medium">{technique}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust Digital Nawab for their Facebook marketing success
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default FacebookMarketingSection;