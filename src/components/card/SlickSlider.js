import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import LeftArrow from "@/public/assets/arrows/left-arrow.png";
import RightArrow from "@/public/assets/arrows/right-arrow.png";

import Clock from '@/public/cardimages/clock.png';
import Mappin from '@/public/cardimages/maps-and-flags.png';
export default function SlickSlider ({title,data})  {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Image src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <Image src={RightArrow} alt="nextArrow" {...props} />
  );
 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

  return (
    
    <div className="container card__container ">
    <h1>{title}</h1>
  <Slider {...settings} className="card__container--inner">
           {data.map((item, index) => {
             return (
               <div
               className="card__container--inner--card"
               key={index}>
                 
 
                 <img src={item.url} alt="hero_img" />
               
                 <div className="card__container--inner--card--date_time">
                   <Image src={Clock} width={16} height={16} className="time" alt="time" />
                   <p>4D-5D</p>
 
                   <Image src={Mappin} width={16} height={16}  alt="location" style={{marginLeft:10}}/>
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


