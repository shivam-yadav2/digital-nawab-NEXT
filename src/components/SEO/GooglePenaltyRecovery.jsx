import React from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  ArrowUpCircle,
  Search,
  Shield,
  FileWarning,
  TrendingUp,
  Activity,
  RefreshCcw,
} from "lucide-react";

const GooglePenaltyRecovery = () => {
  const penaltyTypes = [
    {
      title: "Manual Penalties",
      icon: AlertCircle,
      description:
        "Google's manual actions imposed for violations of webmaster guidelines",
      symptoms: [
        "Sudden traffic drop",
        "Manual action notice in GSC",
        "Specific page deindexing",
      ],
      color: "from-red-600 to-orange-600",
    },
    {
      title: "Algorithmic Penalties",
      icon: RefreshCcw,
      description:
        "Automated penalties from algorithm updates like Penguin, Panda, or Core Updates",
      symptoms: ["Gradual traffic decline", "Ranking fluctuations", "Category-wide drops"],
      color: "from-yellow-600 to-amber-600",
    },
    {
      title: "Technical Penalties",
      icon: FileWarning,
      description: "Issues related to technical SEO problems and site structure",
      symptoms: ["Crawl errors", "Indexing issues", "Site performance problems"],
      color: "from-blue-600 to-cyan-600",
    },
  ];

  const recoverySteps = [
    {
      step: 1,
      title: "Penalty Analysis",
      description:
        "Deep dive into Google Search Console to identify penalty types and affected areas",
      icon: Search,
      color: "from-purple-600 to-indigo-600",
    },
    {
      step: 2,
      title: "Issue Resolution",
      description: "Systematic fixing of identified problems and guideline violations",
      icon: Shield,
      color: "from-green-600 to-emerald-600",
    },
    {
      step: 3,
      title: "Recovery & Monitoring",
      description: "Implementation of recovery strategies and continuous performance tracking",
      icon: TrendingUp,
      color: "from-blue-600 to-violet-600",
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-r from-[rgba(5,5,5,1)] via-[#183a32] to-black text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute h-full w-full bg-[radial-gradient(circle_500px_at_50%_200px,#3B82F6,transparent)]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23FFFFFF\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          initial="hidden"
          
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Activity className="w-4 h-4" />
            Recovery Solutions
          </span>
          <h2 className="text-5xl sm:text-6xl custom-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6">
            Google Penalty Recovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert solutions to identify, analyze, and recover from Google penalties,
            restoring your website's rankings and organic traffic.
          </p>
        </div>

        {/* Penalty Types Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {penaltyTypes.map((penalty, index) => {
            const IconComponent = penalty.icon;
            return (
              <div
                key={index}
                initial="hidden"
                
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.2, duration: 0.6 },
                  },
                }}
                className="relative group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${penalty.color} mb-6`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{penalty.title}</h3>
                  <p className="text-gray-300 mb-6">{penalty.description}</p>
                  <ul className="space-y-3">
                    {penalty.symptoms.map((symptom, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute -inset-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Recovery Process Section */}
        <div
          initial="hidden"
          
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="relative"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Recovery Process</h3>
            <p className="text-gray-300">Our systematic approach to penalty recovery</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform -translate-y-1/2 hidden lg:block" />

            <div className="grid lg:grid-cols-3 gap-8">
              {recoverySteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={index}
                    initial="hidden"
                    
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: index * 0.3, duration: 0.6 },
                      },
                    }}
                    className="relative z-10"
                  >
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} mb-6`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-2xl font-bold border-4 border-gray-800">
                        {step.step}
                      </div>
                      <h4 className="text-xl font-bold mb-4">{step.title}</h4>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          initial="hidden"
          
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-white/5 via-white/10 to-green-600 rounded-3xl p-12 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23FFFFFF\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
                backgroundSize: "60px 60px",
              }}
            />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Recover Your Rankings?</h3>
              <p className="text-xl mb-8 text-blue-100">
                Let our experts help you identify and recover from Google penalties
              </p>
              <button
                whilehover={{ scale: 1.05 }}
                whiletap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Recovery Process
                <ArrowUpCircle className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GooglePenaltyRecovery;
