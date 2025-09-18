import React from "react";
import Banner from "../../components/Banner";
import CompanyCultureSection from "./Whyus";
import HiringCTASection from "./CarrerBanner"; 
import OpenPositionsSection from "./OpenPositionsSection";
const Career = () => {

  

  return (
    <div className="bg-white">
      <Banner
        title="Join the team"
        subtitle="We'd love to hear from you!"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Career", href: "/career" },
        ]}
      />

      <CompanyCultureSection />
      <HiringCTASection/>
      <OpenPositionsSection/>
    </div>
  );
};

export default Career;
