import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For animations (Aceternity UI often uses Framer Motion)
import { Button } from "@/components/ui/button"; // Shadcn Button component
import { BarChart, TestTube, Users, Target } from "lucide-react"; // Icons for list items

const CROServices = () => {

   const [offerings, setOfferings] = useState([]);

  useEffect(() => {
    const fetchOfferings = async () => {
      try {
        const response = await fetch(
          "https://dashboard.digitalnawab.com/api/getseo_optimization"
        );
        const result = await response.json();
        if (result?.data) {
          const formattedOfferings = result.data.map((item) => ({
            icon: (
              <span className="text-4xl text-[#6B46C1]">
                {item.icon}
              </span>
            ),
            title: item.heading,
            description: item.description,
            expertise: 90, 
          }));
          setOfferings(formattedOfferings);
        }
      } catch (error) {
        console.error("Error fetching offerings:", error);
      }
    };

    fetchOfferings();
  }, []);


  // Animation variants for list items
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  // Progress bar animation
  const progressVariants = (width) => ({
    hidden: { width: 0 },
    visible: { width: `${width}%`, transition: { duration: 1, ease: "easeInOut" } },
  });

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading and Subheading */}
        <div
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          What Digital Nawab provides as a Conversion Rate Optimisation (CRO) Services Provider Agency
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-4xl mx-auto">
          Digital Nawab develops personalised CRO techniques in collaboration with professional SEO services in Lucknow to convert visitors into leads, reduce bounce rates, enhance user experience, and optimise ROI, ultimately driving measurable business growth with website design & development.
          </p>
        </div>

        {/* List of Offerings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
          {offerings.map((offering, index) => (
            <div
              key={index}
              variants={itemVariants}
              initial="hidden"
              
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">{offering.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {offering.title}
                </h3>
              </div>
              <p className="text-gray-600 mt-3">{offering.description}</p>
              {/* Progress Bar */}
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-1">Expertise Level</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-[#6B46C1] h-2.5 rounded-full"
                    variants={progressVariants(offering.expertise)}
                    initial="hidden"
                    
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          initial={{ opacity: 0, y: 20 }}
          //whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <Button className="bg-[#6B46C1] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#5A3AB7] transition">
            Start Optimizing with Digital Nawab
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CROServices;