import React from "react";
import TechServicesHero from "./Hero";
import OrbitingLogos from "./TechOrbitHeroSection";
// import TechServicesOverview from "./TechServicesOverview ";
import WebDevelopmentSection from "./WebDevelopmentSection ";
import EcommerceTimeline from "./EcommerceTimeline ";
import MaintenanceSupport from "./MaintenanceSupport ";
import MobileAppDevelopment from "./MobileAppDevelopment ";
import ToolsAndTechnologies from "@/components/TechWeUse";
import TechServicesSection from "./TechServicesSection ";
import RotatingCircles from "./RotatingCircles";
import WebsiteDesignCornerstones from "./WebsiteDesignCornerstones";
import CornerstonesWebsite from "./CornerstonesWebsite";
import HowThisDone from "./HowThisDone";

const Technology = () => {
  return (
    <div>
      <TechServicesHero />
      {/* <RotatingCircles/> */}
      {/* <OrbitingLogos/> */}
      {/* <TechServicesOverview /> */}
      <section id="web-development">
        <WebDevelopmentSection />
      </section>
      <WebsiteDesignCornerstones/>
      <CornerstonesWebsite/>
      <HowThisDone />
      <EcommerceTimeline />
      <MaintenanceSupport />
      {/* <section id="mobile-app-development">
        <MobileAppDevelopment />
      </section>
      <section id="tools-and-technologies">
        <ToolsAndTechnologies />
      </section>
      <section id="tech-services">
        <TechServicesSection />
      </section> */}
    </div>
  );
};

export default Technology;
