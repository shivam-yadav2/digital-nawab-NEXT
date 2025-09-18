'use client';
import WhyChooseUsSection from "../Home/WhychooseUs";
import VisionMissionSection from "../Home/VIsion&Mission";
import AboutIntro from "./AboutIntro";
import AboutTimeline from "./AboutTimeline";
import TeamSection from "./Ourteam";
import Banner from "../../components/Banner";
import FAQSection from "../../components/FAQSec";

const About = () => {
  return (
    <>
      <Banner
        title="About Us"
        subtitle="Learn more about our company"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" },
        ]}
      />
      <AboutIntro />
      <AboutTimeline />
      <VisionMissionSection />
      <WhyChooseUsSection />
      <TeamSection />
      <FAQSection />

    </>
  );
};

export default About;
