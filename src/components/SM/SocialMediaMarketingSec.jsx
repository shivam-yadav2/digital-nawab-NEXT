import React from 'react';
import { 
  Facebook, Instagram, Linkedin, 
  Users, Target, BarChart2, 
  ShoppingBag, Globe, Zap,
  MessageCircle, Heart, Share2,
  Briefcase, Building, UserCheck
} from 'lucide-react';

const getAccentColor = (gradient) => {
  if (!gradient) return '#6366f1'; // Default color fallback
  try {
    return gradient.split('to-')[1].split(' ')[0];
  } catch (e) {
    return '#6366f1'; // Default color fallback
  }
};

const PlatformCard = ({ platform, description, features, icon: Icon, stats, gradient }) => {
  return (
    <div className="relative group">
      <div 
        className="absolute inset-0 rounded-2xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity duration-300"
        style={{ background: gradient }}
      />
      <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-xl" style={{ background: gradient }}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{platform}</h3>
        </div>
        
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-xl">
              <div className="text-2xl font-bold" style={{ color: getAccentColor(gradient) }}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gray-50">
                {feature.icon}
              </div>
              <span className="text-gray-700">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SocialMediaMarketingSec = () => {
  const platforms = [
    {
      platform: "Facebook Marketing",
      icon: Facebook,
      gradient: "linear-gradient(to right, #1877F2, #0C63D4)",
      description: "Reach billions of active users with targeted Facebook campaigns that drive engagement and conversions.",
      stats: [
        { value: "2.9B+", label: "Active Users" },
        { value: "78%", label: "ROI Increase" },
        { value: "15x", label: "Engagement" },
        { value: "40%", label: "Cost Reduction" }
      ],
      features: [
        { icon: <Target className="w-5 h-5 text-blue-600" />, text: "Advanced Audience Targeting" },
        { icon: <ShoppingBag className="w-5 h-5 text-blue-600" />, text: "Shop & Product Catalogs" },
        { icon: <MessageCircle className="w-5 h-5 text-blue-600" />, text: "Community Management" }
      ]
    },
    {
      platform: "Instagram Marketing",
      icon: Instagram,
      gradient: "linear-gradient(to right, #E1306C, #C13584)",
      description: "Create visually stunning campaigns that resonate with your audience and drive brand awareness.",
      stats: [
        { value: "1.4B+", label: "Active Users" },
        { value: "4x", label: "Engagement Rate" },
        { value: "83%", label: "Brand Discovery" },
        { value: "65%", label: "Purchase Intent" }
      ],
      features: [
        { icon: <Heart className="w-5 h-5 text-pink-600" />, text: "Engaging Story Creation" },
        { icon: <Zap className="w-5 h-5 text-pink-600" />, text: "Reels & Video Content" },
        { icon: <Share2 className="w-5 h-5 text-pink-600" />, text: "Influencer Partnerships" }
      ]
    },
    {
      platform: "LinkedIn Marketing",
      icon: Linkedin,
      gradient: "linear-gradient(to right, #0077B5, #00548C)",
      description: "Connect with professionals and decision-makers through targeted B2B marketing campaigns.",
      stats: [
        { value: "875M+", label: "Professionals" },
        { value: "2.8x", label: "Lead Generation" },
        { value: "6x", label: "Conversion Rate" },
        { value: "45%", label: "B2B Traffic" }
      ],
      features: [
        { icon: <Briefcase className="w-5 h-5 text-blue-800" />, text: "Professional Networking" },
        { icon: <Building className="w-5 h-5 text-blue-800" />, text: "Company Page Growth" },
        { icon: <UserCheck className="w-5 h-5 text-blue-800" />, text: "Lead Generation" }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Strategic Social Media
            <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Marketing Solutions
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Transform your brand's social presence with our data-driven strategies. 
            We help you connect with your audience across all major platforms and drive measurable results.
          </p>
        </div>

        {/* Platform Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <PlatformCard key={index} {...platform} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-xl p-1 shadow-lg">
            <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              Start Your Social Media Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMarketingSec;