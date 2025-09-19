import {
  BarChart3,
  Code2,
  Video,
  Edit,
  Users,
  MousePointerClick,
} from "lucide-react";
import WavyPattern from "../../components/WaveyPattern";

const ServicesSection = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8 text-pink-700" />,
      title: "Search Engine Optimization",
    },
    {
      icon: <Code2 className="w-8 h-8 text-pink-700" />,
      title: "Website Design & Development",
    },
    {
      icon: <Video className="w-8 h-8 text-pink-700" />,
      title: "Video Editing & Production",
    },
    {
      icon: <Edit className="w-8 h-8 text-pink-700" />,
      title: "Content Writing",
    },
    {
      icon: <Users className="w-8 h-8 text-pink-700" />,
      title: "Social Media Marketing",
    },
    {
      icon: <MousePointerClick className="w-8 h-8 text-pink-700" />,
      title: "Pay Per Click (PPC)",
    },
  ];

  return (
    <>
      <WavyPattern backgroundColor="#0a0a0a" waveColor="#fff" />
      <div className="bg-white text-black py-12 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-4 h-4 bg-blue-500 opacity-50 rounded"></div>
        <div className="absolute bottom-4 right-4 w-4 h-4 bg-orange-500 opacity-50 rounded"></div>

        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 gap-8">
          {/* Left Side: Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-2/3">
            {services.map((service, index) => (
              <div
                key={index}
                className="gradient-to-br from-[#C73673] via-[#8F5AFF] to-[#FF6FD8] p-6 rounded-lg flex items-start space-x-4"
              >
                {service.icon}
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
            ))}
          </div>

          {/* Right Side: Heading and Description */}
          <div className="w-full lg:w-1/3 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Our Digital Marketing Expertise
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
              nonummy eiermod tempor Lorem ipsum dolor sit amet consectetur
              adipiscing elit.
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default ServicesSection;
