import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TourCard from './TourCard';

const TourSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1,
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
    <Slider {...settings}>
      {/* Add tour cards as individual slides */}
      <div className="p-4">
        {/* Tour Card Content */}
        <TourCard
        imageUrl="https://images.freeimages.com/images/large-previews/1a0/sydney-opera-house-1476036.jpg" // Replace with your image URL
        title="Tour 1"
        description="Explore amazing destinations with our guided tours."
        discountPrice="$599"
        salePrice="$499"
        promotionText="sale"
      />
      </div>
      <div className="p-4">
        {/* Tour Card Content */}
        <TourCard
        imageUrl="https://images.freeimages.com/images/large-previews/1a0/sydney-opera-house-1476036.jpg" // Replace with your image URL
        title="Tour 1"
        description="Explore amazing destinations with our guided tours."
        discountPrice="$599"
        salePrice="$499"
        promotionText="sale"
      />
      </div>
      <div className="p-4">
        {/* Tour Card Content */}
        <TourCard
        imageUrl="https://images.freeimages.com/images/large-previews/1a0/sydney-opera-house-1476036.jpg" // Replace with your image URL
        title="Tour 1"
        description="Explore amazing destinations with our guided tours."
        discountPrice="$599"
        salePrice="$499"
        promotionText="sale"
      />
      </div>
      <div className="p-4">
        {/* Tour Card Content */}
        <TourCard
        imageUrl="https://images.freeimages.com/images/large-previews/1a0/sydney-opera-house-1476036.jpg" // Replace with your image URL
        title="Tour 1"
        description="Explore amazing destinations with our guided tours."
        discountPrice="$599"
        salePrice="$499"
        promotionText="sale"
      />
      </div>
      {/* Add more tour cards */}
    </Slider>
  );
};

export default TourSlider;
