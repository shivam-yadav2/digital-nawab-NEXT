'use client';
import BrandPerformanceHero from '@/components/BrandPerformance/Hero';
import MediaBuyingSection from '@/components/BrandPerformance/MediaBuying';
import PPC from '@/components/BrandPerformance/PPC';
import PPCServicesSection from '@/components/BrandPerformance/PPcSection';
import ABTestingSection from '@/components/BrandPerformance/Testing';
// import BrandPerformance from '@/components/BrandPerformance/BrandPerformance'
import React from 'react'

const page = ({ params }) => {
     console.log("Params received:", params);
  return (
    <div>
        {/* <BrandPerformance/> */}
        <BrandPerformanceHero/>
        <PPC/>
        <PPCServicesSection/>
        <ABTestingSection/>
        <MediaBuyingSection/>
    </div>
  )
}

export default page