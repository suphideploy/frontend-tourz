import React from 'react';
import { BiSolidEditAlt,BiSolidTrashAlt } from 'react-icons/bi';

function Cart() {
  return (
    <>
    <div className="container mx-auto mt-10 hidden md:block">
    <div className="flex shadow-md my-10">
      <div className="w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-8">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">3 Items</h2>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Tour Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Date</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">NO. OF people</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">subTotal</h3>
        </div>
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div className="flex w-2/5">
          <div className="w-20">
            <img className="h-24" src="https://images.unsplash.com/photo-1586968425481-3285b99f3b44?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">Phi Phi Island & Khai Island Tours by Speedboat</span>
              <ul className='text-xs list-disc list-inside mb-1'>
              <li>A ich bin nur test test test</li>
              <li>B ich bin nur test</li>
              <li>D ich bin nur test</li>
            </ul>
            <div className='flex items-left justify-left flex-col md:flex-row'>
            <a href="#" className="font-semibold hover:text-sky-500 text-gray-500 text-xs pr-2 ">
              
              <BiSolidEditAlt size={24}  />
              
          
              
              </a>
            <a href="#" className="font-semibold hover:text-sky-500 text-gray-500 text-xs">
               <BiSolidTrashAlt size={24} />
              </a>
            </div>
          </div>
        </div>

          <div className="flex justify-center w-1/5">
             <span className="font-semibold text-sm">19.10.2566</span>
            {/*<svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>

            <input className="mx-2 border text-center w-8" type="text" value="1"/>

            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
             </svg>*/}
          </div>
          <div className="flex justify-center w-1/5">
          <ul className='text-sm list-none list-inside mb-1'>
              <li>1 x Adult</li>
              <li>1 x Child</li>
          </ul>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm"> THB 400.00</span>
        </div>
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div className="flex w-2/5">
          <div className="w-20">
            <img className="h-24" src="https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=1674&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">Phi Phi Island & Khai Island Tours by Speedboat</span>
              <ul className='text-xs list-disc list-inside mb-1'>
              <li>A ich bin nur test test test</li>
              <li>B ich bin nur test</li>
              <li>D ich bin nur test</li>
            </ul>
            <div className='flex items-left justify-left flex-col md:flex-row'>
            <a href="#" className="font-semibold hover:text-sky-500 text-gray-500 text-xs pr-2 ">
              
              <BiSolidEditAlt size={24}  />
              
          
              
              </a>
            <a href="#" className="font-semibold hover:text-sky-500 text-gray-500 text-xs">
               <BiSolidTrashAlt size={24} />
              </a>
            </div>
          </div>
        </div>

          <div className="flex justify-center w-1/5">
             <span className="font-semibold text-sm">19.10.2566</span>
            {/*<svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>

            <input className="mx-2 border text-center w-8" type="text" value="1"/>

            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
             </svg>*/}
          </div>
          <div className="flex justify-center w-1/5">
          <ul className='text-sm list-none list-inside mb-1'>
              <li>1 x Adult</li>
              <li>1 x Child</li>
          </ul>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm"> THB 400.00</span>
        </div>
         <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div className="flex w-2/5">
          <div className="w-20">
            <img className="h-24" src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&q=80&w=1602&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm">Phi Phi Island & Khai Island Tours by Speedboat</span>
              <ul className='text-xs list-disc list-inside mb-1'>
              <li>A ich bin nur test test test</li>
              <li>B ich bin nur test</li>
              <li>D ich bin nur test</li>
            </ul>
            <div className='flex items-left justify-left flex-col md:flex-row'>
            <a href="#" className="font-semibold hover:text-sky-500 text-gray-500 text-xs pr-2 ">
              
              <BiSolidEditAlt size={24}  />
              
          
              
              </a>
            <a href="#" className="font-semibold hover:text-sky-500 text-gray-500 text-xs">
               <BiSolidTrashAlt size={24} />
              </a>
            </div>
          </div>
        </div>

          <div className="flex justify-center w-1/5">
             <span className="font-semibold text-sm">19.10.2566</span>
            {/*<svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
            </svg>

            <input className="mx-2 border text-center w-8" type="text" value="1"/>

            <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
             </svg>*/}
          </div>
          <div className="flex justify-center w-1/5">
          <ul className='text-sm list-none list-inside mb-1'>
              <li>1 x Adult</li>
              <li>1 x Child</li>
          </ul>
          </div>
          <span className="text-center w-1/5 font-semibold text-sm"> THB 400.00</span>
        </div>


        <a href="#" className="flex font-semibold text-sky-600 text-sm mt-10">
      
          <svg className="fill-current mr-2 text-sky-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a>
      </div>

      <div id="summary" className="w-1/4 px-8 py-10">
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Items 3</span>
          <span className="font-semibold text-sm">THB 1200</span>
        </div>
       {/* <div>
          <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select className="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div className="py-10">
          <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full"/>
        </div>
        <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>*/}
        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>THB 1200</span>
          </div>
          <button className="bg-sky-500 font-semibold hover:bg-sky-600 py-3 text-sm text-white uppercase w-full">Book Now</button>
        </div>
      </div>

    </div>
  </div>
  </>
  );
};
export default Cart

       