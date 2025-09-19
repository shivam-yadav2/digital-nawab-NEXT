'use client';

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import DesignServicesHero from "./Hero";
import BrandingSection from "./BrandingSection ";
import LogoDesignSection from "./LogoDesignSection ";
import AdCreativesSection from "./AdCreativesSection ";
import MotionGraphicsSection from "./MotionGraphicsSection ";
import PackagingDesignSection from "./PackagingDesignSection ";
import { NewHero } from "./NewHero";
import { ThreeDMarqueeDemoSecond } from "../Home/ThreeDMarqueeDemoSecond";
import GraphicPackages from "./GraphicPackages";

const Design = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Extract hash manually (Next.js doesn’t auto-handle it like react-router)
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const timeoutId = setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);

      return () => clearTimeout(timeoutId);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, searchParams]);

  return (
    <div>
      {/* <DesignServicesHero /> */}
      <NewHero />

      <section id="brand-design">
        <BrandingSection />
      </section>

      <ThreeDMarqueeDemoSecond />
      <AdCreativesSection />

      <section id="motion-graphics">
        <MotionGraphicsSection />
      </section>

      <LogoDesignSection />

      <section id="packaging-design">
        <PackagingDesignSection />
      </section>

      <section>
        <GraphicPackages />
      </section>
    </div>
  );
};

export default Design;
