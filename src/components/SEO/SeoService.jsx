import React, { useEffect, useState } from "react";
// Icons from lucide-react
import {
  Users,
  Link,
  MapPin,
  BarChart,
  Mail,
  Search,
  Code,
  Flag,
} from "lucide-react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const SeoService = () => {
const [services, setServices] = useState([]);

useEffect(() => {
  const fetchServices = async () => {
    try {
      const response = await fetch(
        "https://dashboard.digitalnawab.com/api/getseodigital"
      );
      const result = await response.json();
      if (result?.data) {
        const formattedServices = result.data.map((item) => ({
          icon: (
            <span className="block text-4xl text-gray-600 group-hover:text-white transition-colors text-left">
              {item.icon}
            </span>
          ),  
          title: item.heading,
          description: item.description,
        }));
        setServices(formattedServices);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  fetchServices();
}, []);

console.log(services)


  return (
    <div>
      <div className="bg-gradient-to-r from-[rgba(5,5,5,1)] via-[#183630] to-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center flex-col items-center ">
            <h2 className="text-3xl sm:text-4xl font-bold text-white custom-bold ">
             Our SEO Process at Digital Nawab Best SEO Services in Lucknow, India
            </h2>
            <p className="text-sm lg:block hidden lg:text-lg  lg:w-4xl text-gray-100 mt-2 mb-8">
             Digital marketing agency or SEO service provider are different. Hence, you need to associate with a company that offers all the services which give you the maximum ROI on SEO. We at Digital Nawab are committed to providing all kinds of SEO services to help you grow the internet. Below are the seven things Digital Nawab as an SEO Company Includes:
            </p>
          </div>

          <div className=" mx-auto  lg:px-8">
            <HoverEffect items={services} />
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group rounded-lg p-6 flex flex-col items-start bg-white shadow-md hover:bg-[#6B46C1] transition-colors"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600 group-hover:text-gray-200 transition-colors">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="mt-4 flex items-center text-[#6B46C1] group-hover:text-white hover:group-hover:text-gray-200 transition-colors"
                >
                  View More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14m-6 6l6-6m-6-6l6 6" />
                  </svg>
                </a>
              </div>
            ))}
          </div> */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[#F6A623] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#E69520] transition">
              Free SEO Consultation
            </button>
            <button className="bg-[#6B46C1] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#5A3AB7] transition">
              Request a Free Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoService;
