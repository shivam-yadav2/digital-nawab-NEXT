"use client";


import React from 'react';

const WavyPattern = ({ backgroundColor = '#0a0a0a', waveColor = '#fff' }) => {
  return (
    <div className="relative w-full" style={{ backgroundColor }}>
      {/* Section Content */}
      
      {/* Wavy Bottom */}
      <div className=" w-full ">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 1440 126"
          preserveAspectRatio="none"
          className="w-full lg:h-[60px] h-[20px] 2xl:h-[126px]"
        >
          <path
            className="st0"
            fill={waveColor}
            d="M685.6,38.8C418.7-11.1,170.2,9.9,0,30v96h1440V30C1252.7,52.2,1010,99.4,685.6,38.8z"
          />
        </svg>
      </div>
    </div>
  );
};

export default WavyPattern;