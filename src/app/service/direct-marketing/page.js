'use client';
import DigialMarketing from "@/components/DigitalMarketing/DigialMarketing";
import React from "react";
import MediaBuyingSection from '@/components/BrandPerformance/MediaBuying';
import ABTestingSection from '@/components/BrandPerformance/Testing';
const page = () => {
  return (
    <div>
      <DigialMarketing />
      <ABTestingSection/>
        <MediaBuyingSection/>
    </div>
  );
};

export default page;
