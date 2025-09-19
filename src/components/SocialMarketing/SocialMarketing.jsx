import React from "react";
import SocialMediaHero from "./Hero";
import SocialMediaServices from "./Second";
import SocialFeaturesSection from "./FeatureSection";
import ServicesSection from "./Ytsection";
import YouTubeProcessSection from "./YouTubeProcessSection";
import FacebookMarketingSection from "./FacebookMarketingSection ";
import LinkedInMarketingSection from "./LinkedInMarketingSection ";
import ContentPlanningSection from "./ContentPlanningSection ";
import SMOPackages from "./SMOPackages";
import SMMPackages from "./SMMPackages";
import DigitalNawabSections from "./SocialMediaMarketingSection";

const SocialMarketing = () => {
  return (
    <div>
      <SocialMediaHero />
      <SocialMediaServices />
      {/* <SocialFeature        sSection/> */}
      <DigitalNawabSections/>                                                         
      <SMOPackages/>
      <YouTubeProcessSection />
      <ServicesSection />                                                                                       
      <FacebookMarketingSection />                                
      <SMMPackages/>
      <LinkedInMarketingSection />
      <ContentPlanningSection />
    </div>
  );
};

export default SocialMarketing;
