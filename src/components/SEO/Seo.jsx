import React from "react";
import HeroSection from "./Hero";
import WhySeoUs from "./WhySeoUs";
import AuditForm from "./AuditForm";
import CaseStudies from "./CaseStudies";
import SeoService from "./SeoService";
import SeoAuditSection from "./SeoAuditSection";
import SeoPlanningProcess from "./EcomSeo";
import CROServices from "./Cro";
import BacklinkBuilding from "./BacklinkBuilding";
import GooglePenaltyRecovery from "./GooglePenaltyRecovery";
import LocalSEO from "./LocalSEO";
import SEOPackages from "./SEOPackages";

const Seo = () => {
  return (
    <div>
      <HeroSection />
      <WhySeoUs />
      <AuditForm />
      <BacklinkBuilding />                    
      {/* <SeoAuditSection /> */}
      <SeoService />
      <SEOPackages/>
      <CROServices />
      <SeoPlanningProcess />
      {/* <GooglePenaltyRecovery /> */}
      <LocalSEO />
      {/* <CaseStudies /> */}
    </div>
  );
};

export default Seo;
