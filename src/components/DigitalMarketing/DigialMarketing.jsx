import React from "react";

import ServicesSection from "./ServiceSec";
import WhyChooseSection from "./WhyChooseSec";
import Testimonial from "../Home/Testimonial";
import LatestWorkSection from "./WorkSec";
import FooterSection from "./FooterSec";
import PricingSection from "./PricingSection";
import Banner from "../../components/Banner";
import HeroSection from "./Hero";
import DigitalMarketingSection from "./DigitalMarketingSection";
import EmailMarketingSection from "./EmailMarketingSection";
import OurProcessSection from "./OurProcessSection";
import EnhancedLeadGenerationSection from "./LeadGenerationSection";
import OnlineReputationSection from "./OnlineReputationSection";
import PaidMarketingSection from "./PaidMarketingSection";
import WhatsAppMarketingSection from "./WhatsAppMarketingSection";
import GoogleAdsPackages from "./GoogleAdsPackages";

const DigialMarketing = () => {
  return (
    <>
      {/* <DigitalMarketingSection/> */}
      <HeroSection />
      <EmailMarketingSection />
      {/* <OurProcessSection/> */}
      <EnhancedLeadGenerationSection />
      <OnlineReputationSection />
      {/* <ServicesSection/> */}
      <GoogleAdsPackages />
      <PaidMarketingSection />
      <WhatsAppMarketingSection />
      {/* <FooterSection/> */}
    </>
  );
};

export default DigialMarketing;
