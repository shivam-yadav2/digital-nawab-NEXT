"use client";


import React from "react";
import WaveyPattern from "@/components/WaveyPattern";

const NawabMap = () => (
  <>
        {/* <WaveyPattern backgroundColor='#fff' waveColor="#0a0a0a"  /> */}
  
    <div className="w-full  overflow-hidden shadow-lg border border-gray-100  animate-fade-in-up">
      <iframe
        title="Digital Nawab Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.858964857799!2d80.9545270754066!3d26.87213417666809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2a2e2e2e2e2%3A0x123456789abcdef!2sB12%20A%2C%20L%20Rd%2C%20Mahanagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226006!5e0!3m2!1sen!2sin!4v1718030000000!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </>
);

export default NawabMap;