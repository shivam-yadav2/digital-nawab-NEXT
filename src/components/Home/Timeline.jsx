import React, { useState, useEffect } from "react";

import { Timeline } from "@/components/ui/timeline";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight-new";
import WaveyPattern from "../../components/WaveyPattern";
import axios from "axios";
import toast from "react-hot-toast";

export function TimelineDemo() {
  const [services, setServices] = useState([]);
  const [subServices, setSubServices] = useState([]);
  // Fetch services on component mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: "https://dashboard.digitalnawab.com/api/get_service",
          headers: {},
        };

        const response = await axios.request(config);
        console.log(response.data);
        setServices(response.data);
      } catch (error) {
        toast.error("Failed to fetch services");
        console.error(error);
      }
    };

    fetchServices();
  }, []);

  const data3 = [
    {
      title: "Digital Marketing Services",
      content: (
        <div>
          <p className="mb-4 text-xl custom text-neutral-800 dark:text-neutral-200">
            We offer full-stack digital marketing solutions designed to increase
            website traffic, generate high-quality leads, improve brand
            visibility, and boost your ROI. From SEO services to email
            automation and social media campaigns, we’ve got everything to grow
            your business online.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/assets/images/services/1.webp"
                alt="Social Media Ads"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Social Media Marketing Campaigns
              </h3>
            </div>
            <div className="relative">
              <img
                src="/assets/images/services/2.webp"
                alt="SEO Analytics"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                SEO Services & Analytics Dashboard
              </h3>
            </div>
            <div className="relative">
              <img
                src="/assets/images/services/3.webp"
                alt="Email Marketing"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Email Marketing Automation
              </h3>
            </div>
            <div className="relative">
              <img
                src="/assets/images/services/4.webp"
                alt="Marketing Strategy"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Marketing Strategy & Planning
              </h3>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Creative Graphic Design & Branding Services",
      content: (
        <div>
          <p className="mb-4 text-xl custom text-neutral-800 dark:text-neutral-200">
            We offer a full range of graphic design and branding services to
            help your business stand out. From stunning logo designs and
            intuitive UI/UX designs to high-impact video content and compelling
            ad creatives, we bring your brand vision to life with creativity and
            strategy.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/assets/images/services/8.webp"
                alt="Branding Design"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Logo & Branding Design Services
              </h3>
            </div>
            <div className="relative">
              <img
                src="/assets/images/services/7.webp"
                alt="UI/UX Design"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Website & Mobile UI/UX Design
              </h3>
            </div>
            <div className="relative">
              <img
                src="/assets/images/services/5.webp"
                alt="Video Production"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Ad Creatives & Campaign Design
              </h3>
            </div>
            <div className="relative">
              <img
                src="/assets/images/services/6.webp"
                alt="Ad Creatives"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <p className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Ad Creatives Design
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: " Development Services",
      content: (
        <div>
          <p className="mb-4 text-xl custom text-neutral-800 dark:text-neutral-200">
            We offer comprehensive custom software development services,
            including responsive websites, mobile applications, ReactJS
            development, and scalable cloud solutions. Our development team
            builds secure, high-performance digital products tailored to your
            business needs.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Website Development"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Custom Website Development
              </h3>
            </div>
            <div className="relative">
              <img
                src="/assets/images/services/mobile.png"
                alt="Mobile App Development"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Mobile App Development
              </h3>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500&auto=format&fit=crop"
                alt="ReactJS Development"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                ReactJS Development
              </h3>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop"
                alt="Cloud Services"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Cloud Solutions
              </h3>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const data2 = services.map((service) => ({
    title: service.name,
    content: (
      <div>
        <p className="mb-4 text-xl custom text-neutral-800 dark:text-neutral-200">
          {service.description}
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {service.subservices.map((subservice) => (
            <div key={subservice.id} className="relative">
              <img
                src={subservice.image}
                alt={subservice.name}
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                {subservice.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    ),
  }));
  return (
    <>
      <div className="relative w-full overflow-clip">
        {/* <WaveyPattern/> */}
        <Spotlight />
        <Timeline data={data3} />
      </div>
    </>
  );
}
