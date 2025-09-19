import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import './youtube-animations.css';
import { 
  Youtube, 
  PlayCircle, 
  Users, 
  Video,
  LineChart,
  Bell,
  Target, 
  ThumbsUp,
  Award
} from "lucide-react";

// Animation variants
const youtubeContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 }
  }
};

const youtubeChildVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const YoutubeMarketing = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });
  const featuresInView = useInView(featuresRef, { once: true });

  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Professional Video Production",
      description: "High-quality video content creation with expert editing, stunning visuals, and compelling storytelling.",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Channel Optimization",
      description: "Strategic optimization of titles, descriptions, tags, and thumbnails for maximum visibility.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Analytics & Growth",
      description: "Detailed performance tracking, audience insights, and data-driven growth strategies.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Community Engagement",
      description: "Active community management, comment responses, and audience interaction strategy.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0F1B] via-[#1A1B3F] to-[#0F0F1B] text-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16 px-4"
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={youtubeContainerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <div variants={youtubeChildVariants} className="text-center mb-12">            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 to-purple-500 blur-xl opacity-30 animate-pulse"></div>
              <Youtube className="w-20 h-20 mx-auto mb-8 text-red-500 relative z-10 animate-float" />
            </div>
            <div className="space-y-6 relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text animate-gradient">
                  YouTube Channel
                </span>
                <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text animate-gradient-reverse">
                  Management & Growth
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Transform your YouTube presence with our expert channel management 
                <span className="bg-gradient-to-r from-red-500 to-purple-500 text-transparent bg-clip-text font-semibold"> and video marketing strategies.</span>
              </p>
              <div className="flex justify-center gap-4 mt-8">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white px-8 py-6 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/20"
                >
                  Get Started Now
                  <PlayCircle className="ml-2 w-6 h-6" />
                </Button>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white px-8 py-6 rounded-full text-lg font-semibold border border-gray-700 hover:border-gray-600 transform hover:scale-105 transition-all duration-300"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div
            ref={statsRef}
            variants={youtubeContainerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            <StatsCard icon={<PlayCircle />} value="10M+" label="Monthly Views" />
            <StatsCard icon={<Users />} value="500K+" label="Subscribers Growth" />
            <StatsCard icon={<ThumbsUp />} value="95%" label="Engagement Rate" />
            <StatsCard icon={<Award />} value="200+" label="Channels Managed" />
          </div>
        </div>        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-red-500 to-purple-500 rounded-full filter blur-[100px] animate-float opacity-20"></div>
          <div className="absolute top-60 right-20 w-64 h-64 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full filter blur-[80px] animate-float-delay opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full filter blur-[120px] animate-float-slow opacity-20"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          
          {/* Gradient Accent Lines */}
          <div className="absolute left-0 top-1/4 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-20"></div>
          <div className="absolute right-0 top-2/3 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-30"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-purple-500 rounded-full animate-ping opacity-30 animation-delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-30 animation-delay-2000"></div>
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1B] via-transparent to-transparent"></div>
      </section>      {/* Features Section */}
      <section
        ref={featuresRef}
        className="relative py-24 px-4 overflow-hidden"
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={youtubeContainerVariants}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 
            variants={youtubeChildVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight"
          >
            Comprehensive YouTube Marketing Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                variants={youtubeChildVariants}
                className="group"
              >                <Card className="bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full backdrop-blur-sm">
                  <CardContent className="p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-50"></div>
                    <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${feature.gradient}`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div
            variants={youtubeChildVariants}
            className="text-center mt-16"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600 text-white px-8 py-6 rounded-full text-lg font-semibold"
            >
              Start Growing Your Channel
              <PlayCircle className="ml-2 w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Stats Card Component
const StatsCard = ({ icon, value, label }) => (
  <Card className="bg-gradient-to-br from-gray-800/50 via-purple-900/30 to-gray-800/50 border-gray-800 backdrop-blur-sm hover:bg-gradient-to-br hover:from-gray-800/60 hover:via-purple-900/40 hover:to-gray-800/60 transition-all duration-300">
    <CardContent className="p-6 flex flex-col items-center text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-purple-500/10 opacity-30"></div>
      <div className="text-red-500 mb-4 w-12 h-12 flex items-center justify-center relative z-10">
        {icon}
      </div>
      <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-red-400 to-purple-400 text-transparent bg-clip-text">
        {value}
      </div>
      <div className="text-gray-400 text-sm">
        {label}
      </div>
    </CardContent>
  </Card>
);

export default YoutubeMarketing;