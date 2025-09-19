import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const ContentStrategySection = () => {
  // Animation variants for text and stats
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
  };

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Content Engagement",
        data: [65, 59, 80, 81, 56, 75],
        borderColor: "#FFA500",
        backgroundColor: "rgba(255, 165, 0, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white text-black py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Content Strategy & <span className="text-orange-500">Calendars</span>
          </h1>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Plan, execute, and optimize your content marketing campaigns with interactive calendars and strategic insights.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-orange-500">Interactive Calendars</h3>
            <p className="text-gray-600 mt-2">Visualize and manage your content schedule effortlessly.</p>
          </div>
          <div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-orange-500">Strategic Insights</h3>
            <p className="text-gray-600 mt-2">Leverage data-driven strategies to maximize engagement.</p>
          </div>
          <div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-orange-500">Collaboration Tools</h3>
            <p className="text-gray-600 mt-2">Work seamlessly with your team to create impactful content.</p>
          </div>
          <div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-orange-500">Performance Tracking</h3>
            <p className="text-gray-600 mt-2">Monitor and analyze the success of your campaigns.</p>
          </div>
          <div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-orange-500">Custom Reports</h3>
            <p className="text-gray-600 mt-2">Generate detailed reports to showcase your progress.</p>
          </div>
          <div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-orange-500">Content Optimization</h3>
            <p className="text-gray-600 mt-2">Refine your content for maximum impact and reach.</p>
          </div>
        </div>

        {/* Chart Section */}
        <div className="mb-16">
          <h2 className="text-2xl custom-bold text-center mb-6">Engagement Trends</h2>
          <div className="max-w-4xl mx-auto">
            <Line data={chartData} />
          </div>
        </div>

        {/* Calendar Section */}
        {/* <div className="flex justify-center">
          <div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="relative w-full max-w-4xl h-[400px] bg-gray-200 rounded-lg flex items-center justify-center shadow-lg"
          >
            <p className="text-gray-500 text-center">[Placeholder for Interactive Calendar]</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContentStrategySection;