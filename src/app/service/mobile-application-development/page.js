'use client';

import AppDevelopmentPlatform from "@/components/mobile/AppDevelopmentPlatform";
import MobileBanner from "@/components/mobile/MobileBanner";
import MobileAppDevelopment from "@/components/mobile/MobileAppDevelopment ";
import TechServicesSection from "@/components/mobile/TechServicesSection ";
import ToolsAndTechnologies from "@/components/TechWeUse";
import React from "react";

const page = () => {
  return (
    <div>
      <>
        <MobileBanner />
        <section id="mobile-app-development">
          <MobileAppDevelopment />
        </section>
        <section id="tools-and-technologies">
          <ToolsAndTechnologies />
        </section>
        <section id="app-development-process">
          <AppDevelopmentPlatform />
        </section>
        <section id="tech-services">
          <TechServicesSection />
        </section>
      </>
    </div>
  );
};

export default page;
