import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const bannerData = [
  {
    image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    title: 'Banner 1',
  },
  {
    image: 'https://images.unsplash.com/photo-1550951298-5c7b95a66bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80',
    title: 'Banner 2',
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto.format&fit=crop&w=2073&q=80',
    title: 'Banner 3',
  },
];

const BannerSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const nextSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
    };

    const interval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    controls.start({ x: -activeIndex * 100 + 'vw', transition: { duration: 0.6, ease: 'easeInOut' } });
  }, [activeIndex]);

  return (
    <motion.div className="slider" animate={controls}>
      {bannerData.map((banner, index) => (
        <div key={index} className="banner object-fill">
          <img src={banner.image} alt={banner.title} />
        </div>
      ))}
    </motion.div>
  );
};

export default BannerSlider;

