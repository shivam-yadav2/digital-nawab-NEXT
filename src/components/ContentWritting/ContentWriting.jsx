import React from "react";
import ContentHero from "./ContentHero";
import TypingSolutionSection from "./TypingSolutionSec";
import WhatWeAccomplishSection from "./WhatWeAcomplishSec";
import PricingSection from "./PricingSec";
import OrderingProcessSection from "./OderingProcessSec";
import Banner from "../../components/Banner";
import ContentStrategySection from "./TypingSolutionSec";
import WebsiteCopywriting from "./WebsiteCopywriting";

const ContentWriting = () => {
  return (
    <>
  
      <ContentHero />
      <ContentStrategySection />
      <WhatWeAccomplishSection />
      <WebsiteCopywriting />
      <OrderingProcessSection />
      <PricingSection />
    </>
  );
};

export default ContentWriting;
