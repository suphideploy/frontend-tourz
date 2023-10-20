import React from 'react'

function FormRequest() {
 return (
        <div id="booking" className="section relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("your-background-image.jpg")' }}>
          <div className="container mx-auto flex">
            <div className="w-3/4 pr-4">
              <div className="bg-white p-0 rounded-md shadow-md">
                <div className="form-header text-center">
                  <h1 className="font-cardo bg-sky-700 py-2 px-5 text-left font-bold text-2xl capitalize text-white">Booking Informayion</h1>
                </div>
                <form>
                  <div className="px-5 py-3">
                    <div className="flex items-center">
                      <div className="w-1/4 mr-3">
                        <label htmlFor="checkIn" className="block text-sm font-bold text-gray-700">Date</label>
                        <input type="date" id="checkIn" className="form-input mt-1 w-full" required />
                      </div>
                      <span className="in-out hidden xs:hidden sm:text-3xl text-brown mx-3">&#8652;</span>
                      <div className="w-1/4 mr-3">
                        <label htmlFor="from" className="block text-sm font-bold text-gray-700">From</label>
                        <select id="from" className="form-input mt-1 w-full" required>
                          <option>Phuket</option>
                          <option>Bangkok</option>
                          <option>Krabi</option>
                          <option>Samui</option>
                        </select>
                        <span className="select-arrow"></span>
                      </div>
                      <div className="w-1/4 mr-3">
                        <label htmlFor="checkOut" className="block text-sm font-bold text-gray-700">To</label>
                        <select id="checkOut" className="form-input mt-1 w-full" required>
                          <option>Phuket</option>
                          <option>Bangkok</option>
                          <option>Krabi</option>
                          <option>Samui</option>
                        </select>
                        <span className="select-arrow"></span>
                      </div>
                      <span className="in-out hidden xs:hidden sm:text-3xl text-brown mx-3">&#8652;</span>
                      <div className="w-1/4 mr-3">
                        <label htmlFor="carType" className="block text-sm font-bold text-gray-700">Car Type</label>
                        <select id="carType" className="form-input  mt-1 w-full" required>
                          <option>Honda with 4 door</option>
                          <option>BMW with 2 door</option>
                          <option>BYD</option>
                          <option>Tesla</option>
                        </select>
                        <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-5 py-3">
                    <div className="flex items-center">
                      <div className="w-20 mr-2">
                        <label htmlFor="adults" className="block text-sm font-bold text-gray-700">Adults</label>
                        <select id="adults" className="form-input mt-1 w-full">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                        <span className="select-arrow"></span>
                      </div>
                      <div className="w-20 mr-2">
                        <label htmlFor="children" className="block text-sm font-bold text-gray-700">Children</label>
                        <select id="children" className="form-input mt-1 w-full">
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                        </select>
                        <span className="select-arrow"></span>
                      </div>
                      <div className="w-20 mr-2">
                        <label htmlFor="infant" className="block text-sm font-bold text-gray-700">Infant</label>
                        <select id="infant" className="form-input mt-1 w-full">
                          <option>0</option>
                          <option>1</option>
                          <option>2</option>
                        </select>
                        <span className="select-arrow"></span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/*Customer Information her */}
              <div className="bg-white p-0 rounded-md shadow-md mt-5">
                <div className="form-header text-center">
                  <h1 className="font-cardo bg-sky-700 py-2 px-5 text-left font-bold text-2xl capitalize text-white">Customer Information</h1>
                </div>
                </div>
            </div>
            <div id="summary" className="w-1/4">
              <h1 className="font-semibold text-2xl">Order Summary</h1>
              <div className="flex justify-between mt-3">
                <span className="font-semibold text-sm">Items 3</span>
                <span className="font-semibold text-sm">THB 1200</span>
              </div>
              <div className="border-t mt-6">
                <div className="flex font-semibold justify-between py-3 text-sm">
                  <span>Total cost</span>
                  <span>THB 1200</span>
                </div>
                <button className="bg-sky-500 font-semibold hover:bg-sky-600 py-2 text-sm text-white uppercase w-full">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    export default FormRequest;
    