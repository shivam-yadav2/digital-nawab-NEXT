import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Hash,
  TrendingUp,
  BarChart2,
  PieChart,
  Target,
  Users,
  Eye,
  Activity,
  Zap,
  LineChart,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const HashtagStrategy = () => {
  const insights = [
    {
      title: "Hashtag Performance",
      value: "85%",
      trend: "+12%",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Reach Increase",
      value: "2.5M",
      trend: "+28%",
      icon: <Eye className="w-5 h-5" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Engagement Rate",
      value: "6.8%",
      trend: "+15%",
      icon: <Activity className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Target Audience",
      value: "92%",
      trend: "+8%",
      icon: <Target className="w-5 h-5" />,
      color: "from-amber-500 to-orange-500"
    }
  ];

  const strategies = [
    {
      title: "Competitive Analysis",
      description: "Track and analyze competitor hashtag strategies",
      icon: <BarChart2 className="w-6 h-6" />
    },
    {
      title: "Trend Forecasting",
      description: "Predict upcoming hashtag trends and opportunities",
      icon: <LineChart className="w-6 h-6" />
    },
    {
      title: "Audience Insights",
      description: "Understand your audience's hashtag engagement patterns",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Performance Metrics",
      description: "Detailed analytics on hashtag performance",
      icon: <PieChart className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-20 relative z-10"
          >
            <div className="flex items-center justify-center mb-6">
              <Hash className="w-12 h-12 text-purple-500" />
              <span className="text-3xl text-purple-500 font-bold ml-2">#</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Hashtag Strategy & Insights
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Data-driven hashtag strategies to amplify your social media presence and engagement
            </p>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg">
              Get Your Strategy Report
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {insights.map((insight, index) => (
              <div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${insight.color}`}>
                      {insight.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-gray-400">{insight.title}</h3>
                      <div className="flex items-end gap-2">
                        <span className="text-3xl font-bold">{insight.value}</span>
                        <span className="text-green-500 text-sm">{insight.trend}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Strategy Visualization */}
          <div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left: Strategy List */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold mb-8">Strategic Approach</h2>
                    {strategies.map((strategy, index) => (
                      <div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                          {strategy.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{strategy.title}</h3>
                          <p className="text-gray-400 text-sm">{strategy.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>                  {/* Right: Visual Graph */}
                  <div className="relative p-4 bg-gray-800/50 rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl"></div>
                    <h3 className="text-xl font-semibold mb-6 text-gray-200">Hashtag Performance</h3>
                    <div className="h-[300px] relative">
                      {/* Simulated Graph Bars */}
                      <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-around px-2">
                        {[
                          { height: 65, label: 'Mon', value: '65K' },
                          { height: 80, label: 'Tue', value: '80K' },
                          { height: 45, label: 'Wed', value: '45K' },
                          { height: 90, label: 'Thu', value: '90K' },
                          { height: 70, label: 'Fri', value: '70K' },
                          { height: 85, label: 'Sat', value: '85K' }
                        ].map(({ height, label, value }, index) => (
                          <div key={index} className="relative w-12 group">
                            <div className="absolute bottom-0 w-full flex flex-col items-center">
                              <div className="relative w-full">
                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div className="bg-gray-900 text-white px-2 py-1 rounded text-sm whitespace-nowrap">
                                    {value}
                                  </div>
                                </div>
                                {/* Bar */}
                                <div 
                                  className="w-full bg-gradient-to-t from-purple-600 to-pink-500 rounded-lg transition-all duration-500 hover:from-purple-500 hover:to-pink-400 hover:scale-105 cursor-pointer"
                                  style={{ height: `${height * 2}px` }}
                                >
                                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="h-2 w-2 bg-pink-500 rotate-45 transform origin-bottom-left"></div>
                                  </div>
                                </div>
                              </div>
                              {/* Label */}
                              <span className="text-gray-400 text-sm mt-2">{label}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Graph Grid Lines */}
                      {[0, 25, 50, 75, 100].map((value, index) => (
                        <div key={index} className="absolute w-full flex items-center" style={{ bottom: `${value * 2}px` }}>
                          <div className="w-full border-t border-gray-700/30"></div>
                          <span className="text-gray-500 text-xs ml-2 whitespace-nowrap">{value}K</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 right-10 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </section>
    </div>
  );
};

export default HashtagStrategy;