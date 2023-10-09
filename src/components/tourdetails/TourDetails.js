import React from 'react';

const TourDetails = () => {
  return (
    <div className="container mx-auto mt-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Tour Images Slider */}
      <div className="col-span-1 lg:col-span-2">
        {/* Add your image slider component here */}
      </div>

      {/* Tour Description */}
      <div className="col-span-1">
        <h1 className="text-3xl font-semibold mb-4">Tour Name</h1>
        <p className="text-gray-600 mb-4">Tour Description Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        {/* Other details like duration, highlights, activities, included, important information, what to bring */}
        {/* Add your details here */}
      </div>

      {/* Booking Form */}
      <div className="col-span-1">
        <div className="bg-blue-500 p-6">
          <h2 className="text-2xl text-white font-semibold mb-6">Book Now</h2>
          <form className="bg-white rounded-lg p-4 shadow-md">
            {/* Select travel date, option, time */}
            {/* Add your inputs here */}
            
            {/* Adult and Child counts */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-1/2">
                <label className="block text-gray-700 font-semibold mb-2">Adults</label>
                <div className="relative">
                  <input type="number" className="w-full border-gray-300 rounded-md p-2" />
                  <div className="absolute top-2 right-2">
                    <img src="/men-icon.png" alt="Adult Icon" className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 font-semibold mb-2">Children</label>
                <div className="relative">
                  <input type="number" className="w-full border-gray-300 rounded-md p-2" />
                  <div className="absolute top-2 right-2">
                    <img src="/child-icon.png" alt="Child Icon" className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Infant count */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Infants</label>
              <div className="relative">
                <input type="number" className="w-full border-gray-300 rounded-md p-2" />
                <div className="absolute top-2 right-2">
                  <img src="/baby-icon.png" alt="Infant Icon" className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Total prices */}
            {/* Display total prices here */}

            {/* Book now button */}
            <button type="submit" className="bg-blue-500 text-white  rounded-md px-4 py-2 w-full font-semibold hover:bg-blue-600">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;
