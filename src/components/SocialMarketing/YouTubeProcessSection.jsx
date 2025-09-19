import React, { useState, useEffect } from "react";
import { 
  Search, 
  Target, 
  PenTool, 
  Video, 
  TrendingUp, 
  Users, 
  Play, 
  ArrowRight,
  CheckCircle,
  MessageCircle,
  BarChart3,
  Lightbulb,
  Rocket,
  Eye
} from 'lucide-react';

  const iconMap = {
    1: Search,
    2: Target,
    3: PenTool,
    4: Video,
    5: Play,
  };
  const colorMap = {
    1: "bg-blue-500",
    2: "bg-cyan-500",
    3: "bg-purple-500",
    4: "bg-red-500",
    5: "bg-orange-500",
  };

const YouTubeProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [processSteps, setProcessSteps] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    const fetchProcessSteps = async () => {
      try {
        const res = await fetch("https://dashboard.digitalnawab.com/api/getsmmyoutube");
        const data = await res.json();
        if (data?.data) {
          const mappedSteps = data.data.map((step, index) => ({
            ...step,
            id: step.id,
            title: step.heading,
            description: step.description,
            image: step.image.startsWith("http")
              ? step.image
              : `https://dashboard.digitalnawab.com/${step.image}`,
            features: step.features || [],
            icon: iconMap[index + 1] || Search, // fallback icon
            color: colorMap[index + 1] || "bg-gray-500",
          }));
          setProcessSteps(mappedSteps);
        }
      } catch (err) {
        console.error("Error fetching YouTube process steps:", err);
      }
    };

    fetchProcessSteps();
  }, []);



  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our YouTube Marketing
            <span className="text-red-500 block">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategy to execution, we follow a proven methodology that delivers exceptional results for your YouTube channel
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12 mb-20">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              className={`transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveStep(index)}
            >
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                
                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} space-y-6`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                      Step {step.id}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {index < processSteps.length - 1 && (
                    <div className="flex items-center gap-2 text-gray-400 pt-4">
                      <span className="text-sm">Next Step</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Image Side */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} relative`}>
                  <div className="relative group">
                    <div className={`absolute inset-0 ${step.color} opacity-20 rounded-3xl blur-2xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500">
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      
                      <div className="mt-4">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-48 object-cover rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Mock Interface Elements */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg ${step.color} flex items-center justify-center`}>
                              <step.icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="h-2 bg-gray-200 rounded-full">
                                <div 
                                  className={`h-2 ${step.color} rounded-full transition-all duration-300`}
                                  style={{ width: `${((index + 1) / processSteps.length) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                            <div className="text-sm font-semibold text-gray-600">
                              {Math.round(((index + 1) / processSteps.length) * 100)}%
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2 pt-2">
                            {[1, 2, 3].map((_, idx) => (
                              <div key={idx} className="h-2 bg-gray-200 rounded-full">
                                <div 
                                  className={`h-2 ${step.color} rounded-full transition-all duration-700`}
                                  style={{ 
                                    width: `${activeStep === index ? Math.random() * 100 : 60}%`,
                                    transitionDelay: `${idx * 100}ms`
                                  }}
                                ></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Best YouTube Marketing
                    <span className="block">Company in Lucknow</span>
                  </h3>
                  <p className="text-xl opacity-90 mb-6">
                    Ready to transform your YouTube presence? Let's create something amazing together.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-white text-red-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Get Started With Us
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-red-500 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                      <Eye className="w-5 h-5" />
                      View Our Work
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold">500+</div>
                        <div className="text-sm opacity-80">Channels Grown</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">2M+</div>
                        <div className="text-sm opacity-80">Views Generated</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">95%</div>
                        <div className="text-sm opacity-80">Client Satisfaction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">24/7</div>
                        <div className="text-sm opacity-80">Support</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <button className="bg-orange-400 hover:bg-orange-300 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 uppercase tracking-wide text-sm">
                        Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-orange-300/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeProcessSection;