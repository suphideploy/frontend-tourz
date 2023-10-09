import React, { useState } from 'react';
import Family from "@/public/family.png";
import Image from 'next/image';

function TourPriceCalculator() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Define the price per adult and child
  const pricePerAdult = 100; // Change this to your actual price
  const pricePerChild = 50; // Change this to your actual price

  // Function to calculate the total price
  const calculateTotalPrice = () => {
    const adultCost = adults * pricePerAdult;
    const childCost = children * pricePerChild;
    const total = adultCost + childCost;
    setTotalPrice(total);
  };

  return (
    <div>
      <h2>Tour Price Calculator</h2>
      <div className="form-group">
        <label htmlFor="adults">Adults:</label>
        <input
          type="number"
          id="adults"
          value={adults}
          onChange={(e) => setAdults(parseInt(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label htmlFor="children">Children:</label>
        <Image
            src={Family} // Replace with the actual path to your adult icon image
            alt="Adult Icon"
            className="ml-2 w-6 h-6"
        />
        <input
          type="number"
          id="children"
          value={children}
          onChange={(e) => setChildren(parseInt(e.target.value))}
        />
      </div>
      <button onClick={calculateTotalPrice}>Calculate Total Price</button>
      <div className="total-price">
        Total Price: ${totalPrice}
      </div>
    </div>
  );
}

export default TourPriceCalculator;
