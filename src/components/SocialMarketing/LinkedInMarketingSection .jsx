import React, { useState } from 'react';
import { 
  Target, 
  Users, 
  Mail, 
  TrendingUp, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Calendar,
  Settings
} from 'lucide-react';

const LinkedInMarketingSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Run Compelling LinkedIn Ads",
      description: "Run your marketing campaign around clearly defined goals, targeted audience and maximum engagement. Our LinkedIn Text Ads and Dynamic Ads are easy and precise to the platform and offers the flexibility to target niche audiences, drive traffic to a specific URL and can be personalized.",
      image: "/api/placeholder/400/300",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Be Visible With Sponsored Content",
      description: "Enable high-value interactions through customized, private messages with our LinkedIn Sponsored Content approach. Through sponsored content, we will help you promote an asset that you have already published on your LinkedIn Page which will attract users outside of your followers and visitors.",
      image: "/api/placeholder/400/300",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Mail className="w-12 h-12" />,
      title: "Personalized InMails",
      description: "Increase click-through rates and grow conversions. Send personalized messages to your target audience through our Sponsored InMail services. Our InMails have compelling content with unique presentations to catch the attention of the reader.",
      image: "/api/placeholder/400/300",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Prospect And List Building",
      description: "Narrow down leads before converting them to customers with the help of LinkedIn marketing strategies from Digital Nawab, one of best LinkedIn Marketing companies in Lucknow. LinkedIn strategy of Digital Nawab helps in narrowing down users and directly target the niche audience.",
      image: "/api/placeholder/400/300",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Integration",
      description: "We Digital Nawab, a top LinkedIn marketing companies Lucknow will implement advanced the analytics for deeper insights into customer behavior. As we offer integration of LinkedIn marketing with other platforms such as Google Analytics to obtain elaborate insights into customer behavior.",
      image: "/api/placeholder/400/300",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const processSteps = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Manage Segments of Target Audience",
      description: "Strategic audience segmentation for precise targeting"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Prospecting Ideal Clients with Connections",
      description: "Building meaningful professional relationships"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Develop A Consistent ribution Campaigns",
      description: "Systematic campaign management approach"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Execute and Promote the Campaigns with Relevant Hashtags",
      description: "Strategic content promotion and engagement"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Measure the Effectiveness",
      description: "Comprehensive analytics and performance tracking"
    }
  ];

  const navigationTabs = ['Platforms', 'Start a Pilot Program', 'Success Stories', 'Resources'];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
      

      {/* Navigation Tabs */}
      <section className="py-8 px-4 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {navigationTabs.map((tab, index) => (
              <button
                key={index}
                className="text-gray-600 hover:text-blue-600 font-medium py-2 px-4 border-b-2 border-transparent hover:border-blue-600 transition-all duration-300"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Engage with a Community of Professionals to Help Propel Your Business Ahead
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Digital Nawab, a LinkedIn marketing agency in Lucknow, will help you reach audiences that are most likely to convert to customers. 
              From making connections to establishing partnerships and networking, our LinkedIn marketing can build and promote your brand. 
              This <span className="text-blue-600 font-semibold">social media</span> tool exposes you to innumerable connections from where you can 
              find customers and partners to grow your business. You can segment the target audience on LinkedIn based on title, skills or location.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white transform transition-transform duration-300 ${hoveredService === index ? 'scale-110' : ''}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                  <button className="flex items-center gap-3 text-blue-600 font-semibold hover:gap-5 transition-all duration-300">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              LinkedIn Based Marketing
            </h2>
            <p className="text-xl text-gray-600">A step by step process</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="text-center space-y-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden xl:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your LinkedIn Strategy?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with Digital Nawab to unlock the full potential of LinkedIn marketing for your business growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Your Campaign
            </button>
            <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LinkedInMarketingSection;