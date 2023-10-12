import React from 'react'
import { useEffect, useState } from 'react';
import BannerSlider from './BannerSlider';
function Herobanner() {
    const [isBannerActive, setIsBannerActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
        setIsBannerActive(true);
      } else {
        setIsBannerActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <BannerSlider />
      {/* Other content */}
      <div id="roto" className={`banner-slider-container ${isBannerActive ? 'active' : ''}`}>
        {/* Content */}
      </div>
    </div>
   
  );
};

export default Herobanner
