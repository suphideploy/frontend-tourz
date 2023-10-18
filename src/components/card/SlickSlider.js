import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import '@/src/styles/slickslider.module.css';

import { BsChevronDoubleLeft } from 'react-icons/bs';
import { BsChevronDoubleRight } from 'react-icons/bs';

import Clock from '@/public/cardimages/clock.png';
import Mappin from '@/public/cardimages/maps-and-flags.png';
export default function SlickSlider ({title,data})  {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <BsChevronDoubleLeft  alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <BsChevronDoubleRight alt="nextArrow" {...props} />
  );
 
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      };

  return (
    <div className="container card__container">
    <h1>{title}</h1>
  <Slider {...settings} className="card__container--inner">
           {data.map((item, index) => {
             return (
               <div
               className="card__container--inner--card"
               key={index}>
                 
 
                 <img src={item.url} alt="hero_img" />
               
                 <div className="card__container--inner--card--date_time">
                   <Image src={Clock} width={16} height={16} alt="time" />
                   <p>4D-5D</p>
 
                   <Image src={Mappin} width={16} height={16} alt="location" style={{marginLeft:10}}/>
                   <p>Delhi</p>
                 </div>
 
 
                 <h2>Meghalaya Backpacking</h2>
                 <p>starts at <span>₹15,999/-</span></p>
               </div>
             );
           })}
         </Slider>
      </div>
  );
};


