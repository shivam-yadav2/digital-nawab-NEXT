'use client';

import React from 'react'
import BrandPerformanceHero from './Hero'
import PPCServicesSection from './PPcSection'
import MediaBuyingSection from './MediaBuying'
import AnalyticsIntegrationSection from './Analytics'
import ABTestingSection from './Testing'
import PPC from './PPC'

const BrandPerformance = () => {
  return (
    <div>
        <BrandPerformanceHero/>
        <PPC/>
        <PPCServicesSection/>
        <ABTestingSection/>
        <MediaBuyingSection/>
        {/* <AnalyticsIntegrationSection/> */}
    </div>
  )
}

export default BrandPerformance