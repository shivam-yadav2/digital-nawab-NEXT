import React from 'react';
import { Play, Edit, MessageSquare, Download } from "lucide-react";

const ConnectingLine = () => (
  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 w-8">
    <div className="relative h-0.5 bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-pink-500/50">
      <div className="absolute h-2 w-2 -top-[3px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-moveInfinite" />
    </div>
  </div>
);

const Step = ({ step, isLast }) => (
  <div className="relative group animate-fadeIn">
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
      <div className="flex items-center gap-4 mb-4">
        <div className={`${step.color} text-white p-3 rounded-lg transform transition-transform duration-200 hover:scale-110 active:scale-95`}>
          {step.icon}
        </div>
        <span className="text-2xl font-bold text-gray-300">
          {String(step.number).padStart(2, '0')}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-gray-800">
        {step.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {step.description}
      </p>

      {!isLast && <ConnectingLine />}
    </div>
  </div>
);

const OrderingProcessSection = () => {
  const processSteps = [
    {
      number: 1,
      title: "Script Brief Submission",
      description: "Share your vision with us! Tell us about your video concept, target audience, tone, and key messages. We'll carefully analyze your requirements to create the perfect script.",
      icon: <Edit className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      number: 2,
      title: "Creative Development",
      description: "Our expert scriptwriters craft your story, incorporating compelling narratives, engaging dialogues, and precise timing. We ensure your message resonates with your audience.",
      icon: <Play className="w-6 h-6" />,
      color: "bg-purple-500"
    },
    {
      number: 3,
      title: "Review & Refinement",
      description: "Review the draft and provide feedback. We'll fine-tune the script until it perfectly matches your vision, ensuring every word serves your video's purpose.",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "bg-pink-500"
    },
    {
      number: 4,
      title: "Final Script Delivery",
      description: "Receive your production-ready script with proper formatting, timing marks, and technical notes. Ready to bring your video vision to life!",
      icon: <Download className="w-6 h-6" />,
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading and Description */}
        <div className="text-center space-y-6 mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Crafting Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Video Script
            </span>{' '}
            Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Transform your video vision into compelling scripts through our streamlined creative process. 
            Each step is crafted to ensure your message captivates your audience.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {processSteps.map((step, index) => (
            <Step 
              key={step.number} 
              step={step} 
              isLast={index === processSteps.length - 1} 
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fadeIn [animation-delay:400ms]">
          <button className="group bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            Start Your Script Writing Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderingProcessSection;