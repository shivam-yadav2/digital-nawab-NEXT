import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BarChart, Users, Zap } from "lucide-react";

// Variants for animations
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const DigitalMarketingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b pt-[180px] from-gray-900 to-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={childVariants}
          >
            Skyrocketing Your Brand with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Digital Marketing
            </span>
          </h2>
          <p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            variants={childVariants}
          >
            Unleash the power of data-driven strategies, engaging content, and
            cutting-edge campaigns to dominate the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {[
            {
              icon: <Zap className="h-8 w-8 text-yellow-400" />,
              title: "SEO Optimization",
              description:
                "Boost your visibility with tailored SEO strategies that rank you higher on search engines.",
            },
            {
              icon: <Users className="h-8 w-8 text-blue-400" />,
              title: "Social Media Marketing",
              description:
                "Engage your audience with vibrant campaigns across platforms like Instagram, X, and LinkedIn.",
            },
            {
              icon: <BarChart className="h-8 w-8 text-green-400" />,
              title: "PPC Advertising",
              description:
                "Maximize ROI with precision-targeted ads that drive clicks and conversions.",
            },
          ].map((service, index) => (
            <div key={index} variants={childVariants}>
              <Card
                className="bg-gray-800 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <CardHeader>
                  <div
                    className="mb-4"
                    whilehover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Stats Section with Aceternity-inspired Animation */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "1M+", label: "Impressions" },
            { value: "300%", label: "ROI Growth" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center"
              variants={childVariants}
            >
              <div
                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
                whilehover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </div>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className="text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={childVariants}
        >
          <Button
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg"
            asChild
          >
            <a
              href="#contact"
              whilehover={{ scale: 1.1 }}
              whiletap={{ scale: 0.95 }}
            >
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Background Floating Elements for Visual Flair */}
      <div
        className="absolute top-0 left-0 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 bg-pink-500 rounded-full filter blur-3xl opacity-20"
        animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default DigitalMarketingSection;