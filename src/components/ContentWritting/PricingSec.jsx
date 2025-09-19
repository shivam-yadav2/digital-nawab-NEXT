"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Traffic Starter",
    keywords: 10,
    services: [
      "Keyword Research",
      "Dedicated SEO Specialist",
      "Comprehensive Link Building",
      "Search Engine Submissions",
      "Google Analytics + Review",
      "Google Webmaster Tools",
    ],
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
  },
  {
    name: "Traffic Boost",
    keywords: 20,
    services: [
      "Everything in Starter",
      "Full Website SEO Audit",
      "Meta Tags / H1-H2 / Sitemap",
      "Content Optimisation",
      "Detailed Online Reports",
    ],
    gradient: "from-green-400 via-emerald-500 to-teal-500",
    popular: true,
  },
  {
    name: "Traffic Power",
    keywords: 30,
    services: [
      "Everything in Boost",
      "Advanced Content Strategy",
      "Unlimited Keyword Targeting",
      "Priority Support",
    ],
    gradient: "from-orange-400 via-pink-500 to-rose-500",
  },
];

const PricingSec = () => {
  return (
    <section className="bg-gradient-to-b from-gray-950 via-black to-gray-950 py-24 px-6 text-white">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Our SEO Packages
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
          Unlock growth with strategic SEO plans tailored for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            // //whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl shadow-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:shadow-[0_0_30px] hover:shadow-white/10 transition duration-300"
          >
            <div
              className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 bg-gradient-to-tr ${plan.gradient} opacity-20 group-hover:opacity-40 blur-xl pointer-events-none transition-all duration-300`}
            />
            {plan.popular && (
              <div className="absolute top-5 right-5 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10">
                ⭐ Most Popular
              </div>
            )}
            <Card className="bg-transparent border-none z-10 relative">
              <CardContent className="p-8 relative z-10">
                <h3 className="text-3xl font-bold mb-3">{plan.name}</h3>
                <p className="text-sm text-gray-300 mb-6">
                  Target <span className="font-semibold text-white">{plan.keywords}</span> Keywords
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/90">
                      <CheckCircle2 className="text-green-400 w-4 h-4" />
                      {service}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-5 rounded-xl transition duration-300 shadow-inner hover:shadow-md">
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSec;
