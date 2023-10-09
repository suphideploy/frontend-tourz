import React from 'react';

const BookingForm = () => {
  return (
    <div className="w-full md:w-2/3 lg:w-1/3">
      <div className="bg-blue-500 p-6 h-full">
        <h1 className="text-3xl text-white font-semibold mb-6">Booking Details</h1>
        
        <form className="bg-white rounded-lg p-4 shadow-md">
          <div className="flex flex-wrap -mx-2">
            <div className="w-1/2 px-2 mb-4">
              <label htmlFor="travelDate" className="block text-gray-700 font-semibold mb-2">Travel Date</label>
              <input type="date" id="travelDate" className="w-full border-gray-300 rounded-md p-2" />
            </div>

            <div className="w-1/2 px-2 mb-4">
              <label htmlFor="selectOption" className="block text-gray-700 font-semibold mb-2">Select Option</label>
              <select id="selectOption" className="w-full border-gray-300 rounded-md p-2">
                {/* Add options here */}
              </select>
            </div>

            <div className="w-1/2 px-2 mb-4">
              <label htmlFor="selectTime" className="block text-gray-700 font-semibold mb-2">Select Time</label>
              <input type="time" id="selectTime" className="w-full border-gray-300 rounded-md p-2" />
            </div>

            <div className="w-1/2 px-2 mb-4">
              <label htmlFor="adultCount" className="block text-gray-700 font-semibold mb-2">Adult Count</label>
              <input type="number" id="adultCount" className="w-full border-gray-300 rounded-md p-2" />
            </div>

            <div className="w-1/2 px-2 mb-4">
              <label htmlFor="childCount" className="block text-gray-700 font-semibold mb-2">Child Count</label>
              <input type="number" id="childCount" className="w-full border-gray-300 rounded-md p-2" />
            </div>

            <div className="w-1/2 px-2 mb-4">
              <label htmlFor="infantCount" className="block text-gray-700 font-semibold mb-2">Infant Count</label>
              <input type="number" id="infantCount" className="w-full border-gray-300 rounded-md p-2" />
            </div>

            <div className="w-full px-2 mb-4">
              <p className="text-gray-700 font-semibold mb-2">Total Prices:</p>
              {/* Display total prices here */}
            </div>
          </div>

          <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 w-full font-semibold hover:bg-blue-600">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

