'use client';
import React from 'react';
import { BarChart3, TrendingUp, Target, Users, Zap, ArrowRight, LineChart, Activity } from 'lucide-react';

const ABTestingSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Split Testing",
      description: "Run controlled experiments to compare different versions of your pages and identify what converts better.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track key metrics and conversion rates with detailed insights into user behavior patterns.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: Target,
      title: "Funnel Analysis",
      description: "Identify bottlenecks in your conversion funnel and optimize each step for maximum results.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: Users,
      title: "Audience Segmentation",
      description: "Test different approaches for various user segments to personalize the experience.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  const stats = [
    { number: "87%", label: "Average Conversion Increase", color: "text-blue-600" },
    { number: "2.4x", label: "ROI Improvement", color: "text-purple-600" },
    { number: "15+", label: "Testing Variables", color: "text-emerald-600" },
    { number: "48hrs", label: "Results Delivery", color: "text-orange-600" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-200 to-pink-200 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-white/50 shadow-lg mb-6 group hover:shadow-xl hover:bg-white/90 transition-all duration-300">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Data-Driven Optimization
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            A/B Testing &{' '}
            <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Funnel Optimization
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transform scale-x-0 hover:scale-x-100 transition-transform duration-700"></div>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Make data-driven decisions with comprehensive testing and optimization tools. 
            Increase conversions through systematic experimentation and funnel analysis.
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-white/50 text-center group hover:shadow-2xl hover:-translate-y-2 hover:bg-white/80 transition-all duration-500 relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium relative z-10">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${feature.bgGradient} p-8 rounded-3xl border border-white/50 group hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 relative overflow-hidden`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Process Flow */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/50 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
          
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12 relative z-10">
            Our Testing Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { step: "01", title: "Hypothesis", description: "Define clear testing objectives and expected outcomes", color: "from-blue-500 to-cyan-500" },
              { step: "02", title: "Design", description: "Create variations and set up controlled experiments", color: "from-purple-500 to-pink-500" },
              { step: "03", title: "Execute", description: "Run tests with proper traffic allocation and monitoring", color: "from-emerald-500 to-teal-500" },
              { step: "04", title: "Analyze", description: "Review results and implement winning variations", color: "from-orange-500 to-red-500" }
            ].map((process, index) => (
              <div key={index} className="relative group">
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${process.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <span className="text-2xl font-bold text-white">
                      {process.step}
                    </span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {process.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {process.description}
                  </p>
                </div>
                
                {/* Enhanced Arrow */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 -right-4 transform translate-x-full">
                    <div className="w-8 h-8 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Start Testing Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          </button>
          
          <p className="text-gray-500 mt-6 text-sm">
            No setup fees • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default ABTestingSection;