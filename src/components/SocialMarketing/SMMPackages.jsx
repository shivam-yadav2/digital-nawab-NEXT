import React, { useState } from 'react';
import { Check, X, Rocket, Zap, Flame, Briefcase, Target, TrendingUp, BarChart3, Eye, Users, MousePointer, DollarSign, Clock, Settings, PieChart, Video, Globe } from 'lucide-react';

const SMMPackages = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currency, setCurrency] = useState('INR');

  const packages = [
    {
      id: 'launch',
      name: 'Launch',
      icon: <Rocket className="w-6 h-6" />,
      emoji: '🚀',
      priceINR: '8,000',
      priceUSD: '100',
      adSpendINR: '₹10k–20k',
      adSpendUSD: '$150–300',
      popular: false,
      description: 'Perfect start for businesses new to paid advertising',
      campaignTypes: ['Awareness', 'Traffic'],
      platforms: ['Meta (FB & IG)'],
      features: {
        'Ad Creatives (Design)': 'Up to 5 Static Ads',
        'Ad Copywriting': '2 Versions',
        'Audience Targeting': 'Basic Interest-Based',
        'Pixel & Conversion Setup': false,
        'Landing Page Suggestion': false,
        'Campaign Management': 'Basic Daily Checks',
        'Ad Optimization Frequency': 'Weekly',
        'Reports & Insights': 'Performance Summary',
        'Consultation Call': 'Monthly',
        'Remarketing Ads': false,
        'Video Ads': false,
        'Custom Conversion Goals': false,
        'A/B Testing': false,
        'Multi-Language Support': false
      }
    },
    {
      id: 'accelerate',
      name: 'Accelerate',
      icon: <Zap className="w-6 h-6" />,
      emoji: '⚡',
      priceINR: '20,000',
      priceUSD: '250',
      adSpendINR: '₹20k–50k',
      adSpendUSD: '$300–600',
      popular: true,
      description: 'Scale your business with advanced targeting and optimization',
      campaignTypes: ['Engagement', 'Leads'],
      platforms: ['Meta', 'LinkedIn'],
      features: {
        'Ad Creatives (Design)': '10 Ads (Static + Carousel)',
        'Ad Copywriting': '6 Variations',
        'Audience Targeting': 'Interest + Lookalike',
        'Pixel & Conversion Setup': 'Basic Setup',
        'Landing Page Suggestion': true,
        'Campaign Management': 'Daily + A/B Testing',
        'Ad Optimization Frequency': 'Bi-weekly',
        'Reports & Insights': 'ROI/ROAS Metrics',
        'Consultation Call': 'Bi-weekly',
        'Remarketing Ads': '1 Ad Set',
        'Video Ads': 'Basic Clips',
        'Custom Conversion Goals': false,
        'A/B Testing': 'Limited',
        'Multi-Language Support': false
      }
    },
    {
      id: 'scale',
      name: 'Scale',
      icon: <Flame className="w-6 h-6" />,
      emoji: '🔥',
      priceINR: '35,000',
      priceUSD: '450',
      adSpendINR: '₹50k–100k',
      adSpendUSD: '$600–1200',
      popular: false,
      description: 'Maximum growth with comprehensive multi-platform campaigns',
      campaignTypes: ['Conversion', 'Video Views'],
      platforms: ['Meta', 'LinkedIn', 'YouTube', 'Twitter'],
      features: {
        'Ad Creatives (Design)': '20 Mixed (Image, Video, Reels, Stories)',
        'Ad Copywriting': '9 A/B Variants',
        'Audience Targeting': 'Custom + Retargeting',
        'Pixel & Conversion Setup': 'Full Funnel Tracking',
        'Landing Page Suggestion': true,
        'Campaign Management': 'Real-Time Monitoring',
        'Ad Optimization Frequency': 'Every 3–4 days',
        'Reports & Insights': 'Deep Analytics (CPC, CTR, CPL)',
        'Consultation Call': 'Weekly',
        'Remarketing Ads': 'Multi-Layered',
        'Video Ads': 'Motion Graphics / Reels',
        'Custom Conversion Goals': true,
        'A/B Testing': true,
        'Multi-Language Support': 'Available on Request'
      }
    },
    {
      id: 'dominate',
      name: 'Dominate',
      icon: <Briefcase className="w-6 h-6" />,
      emoji: '💼',
      priceINR: '50,000+',
      priceUSD: '625+',
      adSpendINR: '₹100k+',
      adSpendUSD: '$1200+',
      popular: false,
      description: 'Enterprise-level campaigns with dedicated account management',
      campaignTypes: ['Full-Funnel (Brand to Sales)'],
      platforms: ['All Platforms (Snapchat, Pinterest, Threads etc.)'],
      features: {
        'Ad Creatives (Design)': 'Unlimited Creative Variants',
        'Ad Copywriting': 'Full Funnel Copy Set',
        'Audience Targeting': 'Advanced Segmentation & Funnel Mapping',
        'Pixel & Conversion Setup': 'Advanced Custom Events',
        'Landing Page Suggestion': true,
        'Campaign Management': 'Dedicated Account Manager',
        'Ad Optimization Frequency': 'Daily & Dynamic Scaling',
        'Reports & Insights': 'Custom Dashboard + KPIs',
        'Consultation Call': 'Weekly + Funnel Strategy',
        'Remarketing Ads': 'Dynamic Retargeting Campaigns',
        'Video Ads': 'High-Impact Videos / Shorts',
        'Custom Conversion Goals': 'Multi-step Conversions',
        'A/B Testing': 'Multi-Ad Testing Strategy',
        'Multi-Language Support': true
      }
    }
  ];

  const formatPrice = (inr, usd) => {
    return currency === 'INR' ? `₹${inr}` : `$${usd}`;
  };

  const formatAdSpend = (inr, usd) => {
    return currency === 'INR' ? inr : usd;
  };

  const getCampaignIcons = (types) => {
  const iconMap = {
    'Awareness': <Eye className="w-4 h-4" />,
    'Traffic': <MousePointer className="w-4 h-4" />,
    'Engagement': <Users className="w-4 h-4" />,
    'Leads': <Target className="w-4 h-4" />,
    'Conversion': <DollarSign className="w-4 h-4" />,
    'Video Views': <Video className="w-4 h-4" />,
    'Full-Funnel (Brand to Sales)': <TrendingUp className="w-4 h-4" />
  };
  
  return types.map((type) => (
    <span key={type}>
      {iconMap[type] || <Target className="w-4 h-4" />}
    </span>
  ));
};


  return (
    <section className="py-20 px-4 bg-gradient-to-b from-red-50 via-orange-50 to-yellow-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            SMM Packages
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Performance-driven paid campaigns
            <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mt-2">
              for maximum ROI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Tailored advertising strategies for awareness, engagement, lead generation, and conversion optimization
          </p>
          
          {/* Currency Toggle */}
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setCurrency('INR')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                currency === 'INR' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              INR (₹)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                currency === 'USD' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => {
            console.log(pkg)
            return (
            <div
              key={pkg.id}
              onMouseEnter={() => setHoveredCard(pkg.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative group transition-all duration-500 ${
                hoveredCard === pkg.id ? 'scale-105 z-10' : ''
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className={`relative h-full bg-white rounded-2xl shadow-lg border transition-all duration-500 overflow-hidden ${
                pkg.popular 
                  ? 'border-red-200 shadow-xl' 
                  : 'border-gray-200 group-hover:border-red-200 group-hover:shadow-xl'
              }`}>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 ${
                  pkg.id === 'launch' ? 'from-blue-500/5 to-purple-500/5' :
                  pkg.id === 'accelerate' ? 'from-red-500/5 to-orange-500/5' :
                  pkg.id === 'scale' ? 'from-orange-500/5 to-yellow-500/5' :
                  'from-purple-500/5 to-pink-500/5'
                } ${hoveredCard === pkg.id ? 'opacity-100' : ''}`} />
                <div className="relative p-6">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${
                      pkg.id === 'launch' ? 'bg-blue-100 text-blue-600' :
                      pkg.id === 'accelerate' ? 'bg-red-100 text-red-600' :
                      pkg.id === 'scale' ? 'bg-orange-100 text-orange-600' :
                      'bg-purple-100 text-purple-600'
                    }`}>
                      {pkg.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                      <span className="text-2xl">{pkg.emoji}</span>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {formatPrice(pkg.priceINR, pkg.priceUSD)}
                      <span className="text-sm font-normal text-gray-500">/month</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Management Fee + Ad Spend
                    </div>
                    <div className="mt-2 p-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                      <div className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                        Recommended Ad Spend
                      </div>
                      <div className="text-sm font-bold text-orange-700">
                        {formatAdSpend(pkg.adSpendINR, pkg.adSpendUSD)}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>

                  {/* Campaign Types */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Campaign Focus
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                      {getCampaignIcons(pkg.campaignTypes)}
                      <span className="text-sm text-gray-700 ml-1">
                        {pkg.campaignTypes.join(' / ')}
                      </span>
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Ad Platforms
                    </div>
                    <div className="text-sm text-gray-700 bg-gradient-to-r from-gray-50 to-red-50 rounded-lg p-3">
                      {pkg.platforms.join(', ')}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3 mb-6">
                    {Object.entries(pkg.features).slice(0, 6).map(([feature, value]) => {
                      console.log('Rendering feature:', feature, 'with value:', value);
                      return (
                      <div key={feature} className="flex items-start gap-3">
                        {value === false ? (
                          <X className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        ) : (
                          <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            pkg.id === 'launch' ? 'text-blue-500' :
                            pkg.id === 'accelerate' ? 'text-red-500' :
                            pkg.id === 'scale' ? 'text-orange-500' :
                            'text-purple-500'
                          }`} />
                        )}
                        <div  className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-gray-900">{feature}</div>
                          {value !== false && (
                            <div className="text-xs text-gray-600 mt-1">{value.toString()}</div>
                          )}
                        </div>
                      </div>
                    )
                    })}
                  </div>

                  {/* Performance Metrics */}
                  <div className="mb-6 p-3 bg-gradient-to-r from-gray-50 to-yellow-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-4 h-4 text-orange-600" />
                      <span className="text-sm font-medium text-gray-900">What's Included</span>
                    </div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div>• {pkg.features['Ad Creatives (Design)']}</div>
                      <div>• {pkg.features['Ad Copywriting']}</div>
                      <div>• {pkg.features['Reports & Insights']}</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700 shadow-lg hover:shadow-xl'
                      : `border-2 hover:text-white ${
                          pkg.id === 'launch' ? 'border-blue-500 text-blue-600 hover:bg-blue-500' :
                          pkg.id === 'accelerate' ? 'border-red-500 text-red-600 hover:bg-red-500' :
                          pkg.id === 'scale' ? 'border-orange-500 text-orange-600 hover:bg-orange-500' :
                          'border-purple-500 text-purple-600 hover:bg-purple-500'
                        }`
                  }`}>
                    Start Campaign
                  </button>
                </div>
              </div>
            </div>
          )
          })}
        </div>

        {/* Performance Metrics Section */}
        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">ROAS Focused</h4>
              </div>
              <p className="text-sm text-gray-600">Every campaign optimized for maximum return on ad spend</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Settings className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Real-time Optimization</h4>
              </div>
              <p className="text-sm text-gray-600">Continuous monitoring and adjustment for peak performance</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <PieChart className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Advanced Analytics</h4>
              </div>
              <p className="text-sm text-gray-600">Detailed insights and KPI tracking for informed decisions</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              All packages include comprehensive setup, ongoing optimization, and transparent reporting
            </p>
            <button className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium">
              View Campaign Case Studies & Results
              <Target className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMMPackages;