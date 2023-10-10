import React, { useState } from 'react';
import Link from 'next/link';
import TourCard from "@/src/components/card/TourCard";
import {BiSolidGrid} from 'react-icons/bi';
import { BiListUl } from 'react-icons/bi';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
const Tourdetails = () => {
  const [isListView, setIsListView] = useState(true);

  const toggleView = () => {
    setIsListView(!isListView);
  };

  
  return (
    <>
      <section className="py-5 bg-gray-300 ">
        <div className="container w-full mx-auto">
          <h2 className="text-2xl font-semibold">Category products</h2>
          <nav>
          
            <ol className="flex items-center space-x-2 text-black breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li>
              <span class="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Best category</a>
              </li>
              <li>
              <span class="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Great articles
              </li>
            </ol>
            
          </nav>
        </div>
      </section>

      <section className="py-6">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <aside className="w-full px-0 md:w-1/4">
             {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<div className="space-y-1">
  <details
    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary
      className="flex items-center justify-between gap-2 p-4 text-gray-900 transition bg-white cursor-pointer"
    >
      <span className="text-sm font-medium"> Sea Tour Categories </span>

      <span className="transition group-open:-rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </summary>

    <div className="bg-white border-t border-gray-200">
      <header className="flex items-center justify-between p-4">
        <span className="text-sm text-gray-700"> 0 Selected </span>

        <button
          type="button"
          className="text-sm text-gray-900 underline underline-offset-4"
        >
          Reset
        </button>
      </header>

      <ul className="p-4 space-y-1 border-t border-gray-200">
        <li>
          <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              id="FilterInStock"
              className="w-5 h-5 border-gray-300 rounded"
            />

            <span className="text-sm font-medium text-gray-700">
              Phi Phi Islands
            </span>
          </label>
        </li>

        <li>
          <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              id="FilterPreOrder"
              className="w-5 h-5 border-gray-300 rounded"
            />

            <span className="text-sm font-medium text-gray-700">
              James Bond Island Tours
            </span>
          </label>
        </li>

        <li>
          <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              id="FilterOutOfStock"
              className="w-5 h-5 border-gray-300 rounded"
            />

            <span className="text-sm font-medium text-gray-700">
              Khai Islands Tours
            </span>
          </label>
        </li>
        <li>
          <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              id="FilterOutOfStock"
              className="w-5 h-5 border-gray-300 rounded"
            />

            <span className="text-sm font-medium text-gray-700">
             Racha & Coral Island Tours
            </span>
          </label>
        </li>
      </ul>
    </div>
  </details>
  <details
    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary
      className="flex items-center justify-between gap-2 p-4 text-gray-900 transition bg-white cursor-pointer"
    >
      <span className="text-sm font-medium"> Time of Day </span>

      <span className="transition group-open:-rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </summary>

    <div className="bg-white border-t border-gray-200">
      <header className="flex items-center justify-between p-4">
        <span className="text-sm text-gray-700"> 0 Selected </span>

        <button
          type="button"
          className="text-sm text-gray-900 underline underline-offset-4"
        >
          Reset
        </button>
      </header>

      <ul className="p-4 space-y-1 border-t border-gray-200">
        <li>
          <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              id="FilterInStock"
              className="w-5 h-5 border-gray-300 rounded"
            />

            <span className="text-sm font-medium text-gray-700">
              Morning
            </span>
            <span className="text-sm font-medium text-gray-400">
              Starts before 12pm
            </span>
            
          </label>
        </li>

        <li>
          <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              id="FilterPreOrder"
              className="w-5 h-5 border-gray-300 rounded"
            />

            <span className="text-sm font-medium text-gray-700">
              Afternoon
            </span>
            <span className="text-sm font-medium text-gray-400">
              Starts after 12pm
            </span> 
          </label>
        </li>

        <li>
          <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              id="FilterOutOfStock"
              className="w-5 h-5 border-gray-300 rounded"
            />

            <span className="text-sm font-medium text-gray-700">
              Evening and night
            </span>
            <span className="text-sm font-medium text-gray-400">
              Starts after 5pm
            </span> 
          </label>
        </li>
        
      </ul>
    </div>
  </details>
  <details
    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary
      className="flex items-center justify-between gap-2 p-4 text-gray-900 transition bg-white cursor-pointer"
    >
      <span className="text-sm font-medium"> Price </span>

      <span className="transition group-open:-rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </summary>

    <div className="bg-white border-t border-gray-200">
      <header className="flex items-center justify-between p-4">
        <span className="text-sm text-gray-700"> The highest price is $600 </span>

        <button
          type="button"
          className="text-sm text-gray-900 underline underline-offset-4"
        >
          Reset
        </button>
      </header>

      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between gap-4">
          <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
            <span className="text-sm text-gray-600">$</span>

            <input
              type="number"
              id="FilterPriceFrom"
              placeholder="From"
              className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
            />
          </label>

          <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
            <span className="text-sm text-gray-600">$</span>

            <input
              type="number"
              id="FilterPriceTo"
              placeholder="To"
              className="w-full border-gray-200 rounded-md shadow-sm sm:text-sm"
            />
          </label>
        </div>
      </div>
    </div>
  </details>
  <details
    className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary
      className="flex items-center justify-between gap-2 p-4 text-gray-900 transition bg-white cursor-pointer"
    >
      <span className="text-sm font-medium"> Duration </span>

      <span className="transition group-open:-rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </summary>

    <div className="bg-white border-t border-gray-200">
      <header className="flex items-center justify-between p-4">
        <span className="text-sm text-gray-700"> 0 Selected </span>

        <button
          type="button"
          className="text-sm text-gray-900 underline underline-offset-4"
        >
          Reset
        </button>
      </header>

      <ul className="p-4 space-y-1 border-t border-gray-200">
        <li>
          <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              id="FilterInStock"
              className="w-5 h-5 border-gray-300 rounded"
            />

            <span className="text-sm font-medium text-gray-700">
              Up to 1 hour
            </span>        
          </label>
        </li>

        <li>
          <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              id="FilterPreOrder"
              className="w-5 h-5 border-gray-300 rounded"
            />

            <span className="text-sm font-medium text-gray-700">
              1 to 4 hours
            </span> 
          </label>
        </li>

        <li>
          <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              id="FilterOutOfStock"
              className="w-5 h-5 border-gray-300 rounded"
            />

            <span className="text-sm font-medium text-gray-700">
              1 to 3 days
            </span> 
          </label>
        </li>

        <li>
          <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              id="FilterOutOfStock"
              className="w-5 h-5 border-gray-300 rounded"
            />

            <span className="text-sm font-medium text-gray-700">
              3+ days
            </span> 
          </label>
        </li>
      </ul>
    </div>
  </details>
</div>
            </aside>

            <main className="w-full px-4 md:w-3/4">
              <header className="flex items-center justify-between pb-3 mb-4 border-b">
                 <span>32 Items found</span>
                <div className="flex items-center space-x-2">
                 
                  <select className="form-select">
                    <option>Latest items</option>
                    <option>Trending</option>
                    <option>Most Popular</option>
                    <option>Cheapest</option>
                  </select>
                  <div className="flex items-center space-x-2">
                  <a
                          href="#"
                          className="px-3 py-3 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
                          data-toggle="tooltip"
                          title="List view"
                          onClick={toggleView}
                        >
                           {isListView ? <BiListUl /> : <BiSolidGrid />}
                        </a>
                        {/*<a
                          href="#"
                          className="px-3 py-3 bg-white border border-gray-300 rounded-md hover:bg-gray-100 active:bg-gray-200"
                          data-toggle="tooltip"
                          title="Grid view"
                          onClick={toggleView}
                        >
                           {isListView ?  <BiSolidGrid /> : <BiSolidGrid/>}
                         </a>*/}
                        
                       
                       
                      </div>
                </div>
              </header>
              

          <div className={isListView ? 'list-view' : 'grid-view'}>
          {/* Product cards */}
          {isListView ? (
            
            <div className="p-4 bg-white rounded-lg shadow-md">
            <TourCard
              imageUrl="https://images.freeimages.com/images/large-previews/1a0/sydney-opera-house-1476036.jpg"
              title="Tour 1"
              description="Explore amazing destinations with our guided tours."
              discountPrice="$599"
              salePrice="$499"
              promotionText="sale"
            />
            </div>
         
          ) : (
            <>
            
                {/* Product cards */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              
                      <TourCard
                      imageUrl="https://images.freeimages.com/images/large-previews/1a0/sydney-opera-house-1476036.jpg" // Replace with your image URL
                      title="Tour 1"
                      description="Explore amazing destinations with our guided tours."
                      discountPrice="$599"
                      salePrice="$499"
                      promotionText="sale"
                      />
                      
                </div>
                </>
                  )}
            </div>

              <nav class="flex flex-row flex-nowrap justify-between md:justify-center items-center" aria-label="Pagination">
                <a class="flex w-10 h-10 mr-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" href="#" title="Previous Page">
                    <span class="sr-only">Previous Page</span>
                    <svg class="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
                        <path d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path>
                    </svg>
                </a>
                <a class="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" href="#" title="Page 1">
                    1
                </a>
                <a class="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" href="#" title="Page 2">
                    2
                </a>
                <a class="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-black bg-black text-white pointer-events-none" href="#" aria-current="page" title="Page 3">
                    3
                </a>
                <a class="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" href="#" title="Page 4">
                    4
                </a>
                <a class="hidden md:flex w-10 h-10 mx-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" href="#" title="Page 5">
                    5
                </a>
                <a class="flex w-10 h-10 ml-1 justify-center items-center rounded-full border border-gray-200 bg-white text-black hover:border-gray-300" href="#" title="Next Page">
                <span class="sr-only">Next Page</span>
                <svg class="block w-4 h-4 fill-current" viewBox="0 0 256 512" aria-hidden="true" role="presentation">
                <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                  </svg>
              </a>
            </nav>
            </main>
          </div>
        </div>
      </section>
    </>
  );

};

export default Tourdetails;