import React, { useState } from 'react';
import Family from "@/public/family.png";
import Children from "@/public/children.png";
import Image from 'next/image';

const TourDetails = () => {
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const tourPrice = 100; // Replace with the actual tour price

  const totalAdultPrice = adultCount * tourPrice;
  const totalChildPrice = childCount * (tourPrice / 2); // Assuming children pay half the price

  const totalPrice = totalAdultPrice + totalChildPrice;

  return (
    <div>
      <h1>Tour Details</h1>
      <div>
        <h2>Number of Adults</h2>
         <div className='flex items-center'>
            <div>
            <Image
            src={Family} // Replace with the actual path to your adult icon image
            alt="Adult Icon"
            className="ml-2 w-6 h-6"
            />
            </div>
            <div className='ml-2'>
            <button onClick={() => setAdultCount(adultCount + 1)}>+</button>
            <span>{adultCount}</span>
            <button onClick={() => setAdultCount(adultCount - 1)}>-</button>
            </div>
           
        </div>
      </div>
      <div>
        <h2>Number of Children</h2>
        <div className='flex items-center'>
            <div>
            <Image
            src={Children} // Replace with the actual path to your adult icon image
            alt="Adult Icon"
            className="ml-2 w-6 h-6"
            />
            </div>
            <div className='ml-2'>
            <button onClick={() => setChildCount(childCount + 1)}>+</button>
            <span>{childCount}</span>
            <button onClick={() => setChildCount(childCount - 1)}>-</button>
            </div>
      </div>
      </div>
      <div>
        <h2>Total Price</h2>
        <p>Adults: ${totalAdultPrice}</p>
        <p>Children: ${totalChildPrice}</p>
        <p>Total: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default TourDetails;
