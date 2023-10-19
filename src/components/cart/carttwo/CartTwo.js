import React from 'react';
import { BiSolidEditAlt, BiSolidTrashAlt } from 'react-icons/bi';

function Carttwo() {
  return (
    <>
      <div className="container mx-auto mt-10 lg:hidden">
        <div className="shadow-md my-10 p-4">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">3 Items</h2>

          <div className="mt-5">
            {/* Repeat this section for each item in the cart */}
            <div className="mb-6">
              <img className="w-1/2 mx-auto" src="https://images.unsplash.com/photo-1586968425481-3285b99f3b44?auto=format&fit=crop&q=80&w=300" alt="" />
              <span className="font-bold text-sm">Phi Phi Island & Khai Island Tours by Speedboat</span>
              <ul className="text-xs">
                <li>A ich bin nur test test test</li>
                <li>B ich bin nur test</li>
                <li>D ich bin nur test</li>
              </ul>
              <div className="flex items-center justify-between mt-3">
                <a href="#" className="text-sky-500">
                  <BiSolidEditAlt size={24} />
                </a>
                <a href="#" className="text-sky-500">
                  <BiSolidTrashAlt size={24} />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold text-sm">Date: 19.10.2566</span>
              <span className="font-semibold text-sm">THB 400.00</span>
            </div>

            <div className="flex items-center justify-between">
              <ul className="text-sm list-inside">
                <li>1 x Adult</li>
                <li>1 x Child</li>
              </ul>
            </div>
          </div>
          <div className="mt-5">
            {/* Repeat this section for each item in the cart */}
            <div className="mb-6">
              <img className="w-1/2 mx-auto" src="https://images.unsplash.com/photo-1586968425481-3285b99f3b44?auto=format&fit=crop&q=80&w=300" alt="" />
              <span className="font-bold text-sm">Phi Phi Island & Khai Island Tours by Speedboat</span>
              <ul className="text-xs">
                <li>A ich bin nur test test test</li>
                <li>B ich bin nur test</li>
                <li>D ich bin nur test</li>
              </ul>
              <div className="flex items-center justify-between mt-3">
                <a href="#" className="text-sky-500">
                  <BiSolidEditAlt size={24} />
                </a>
                <a href="#" className="text-sky-500">
                  <BiSolidTrashAlt size={24} />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold text-sm">Date: 19.10.2566</span>
              <span className="font-semibold text-sm">THB 400.00</span>
            </div>

            <div className="flex items-center justify-between">
              <ul className="text-sm list-inside">
                <li>1 x Adult</li>
                <li>1 x Child</li>
              </ul>
            </div>
          </div>
          <div className="mt-5">
            {/* Repeat this section for each item in the cart */}
            <div className="mb-6">
              <img className="w-1/2 mx-auto" src="https://images.unsplash.com/photo-1586968425481-3285b99f3b44?auto=format&fit=crop&q=80&w=300" alt="" />
              <span className="font-bold text-sm">Phi Phi Island & Khai Island Tours by Speedboat</span>
              <ul className="text-xs">
                <li>A ich bin nur test test test</li>
                <li>B ich bin nur test</li>
                <li>D ich bin nur test</li>
              </ul>
              <div className="flex items-center justify-between mt-3">
                <a href="#" className="text-sky-500">
                  <BiSolidEditAlt size={24} />
                </a>
                <a href="#" className="text-sky-500">
                  <BiSolidTrashAlt size={24} />
                </a>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold text-sm">Date: 19.10.2566</span>
              <span className="font-semibold text-sm">THB 400.00</span>
            </div>

            <div className="flex items-center justify-between">
              <ul className="text-sm list-inside">
                <li>1 x Adult</li>
                <li>1 x Child</li>
              </ul>
            </div>
          </div>
          {/* End of item section */}
          
          <div className="mt-10">
            <a href="#" className="font-semibold text-sky-600 text-sm">
              Continue Shopping
            </a>
          </div>
        </div>

        <div id="summary" className="p-4">
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
    </>
  );
}

export default Carttwo;
