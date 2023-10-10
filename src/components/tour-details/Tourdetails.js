import React from 'react';
import Link from 'next/link';
import TourCard from "@/src/components/card/TourCard";
import {BiSolidGrid} from 'react-icons/bi';
import { BiListUl } from 'react-icons/bi';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
const Tourdetails = () => {
  return (
    <>
      <section className="bg-gray-300 py-5 ">
        <div className="container mx-auto w-full">
          <h2 className="text-2xl font-semibold">Category products</h2>
          <nav>
          
            <ol className="breadcrumb text-black flex items-center space-x-2">
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
            <aside className="w-full md:w-1/4 px-0 border">
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
      className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
    >
      <span className="text-sm font-medium"> Availability </span>

      <span className="transition group-open:-rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </summary>

    <div className="border-t border-gray-200 bg-white">
      <header className="flex items-center justify-between p-4">
        <span className="text-sm text-gray-700"> 0 Selected </span>

        <button
          type="button"
          className="text-sm text-gray-900 underline underline-offset-4"
        >
          Reset
        </button>
      </header>

      <ul className="space-y-1 border-t border-gray-200 p-4">
        <li>
          <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              id="FilterInStock"
              className="h-5 w-5 rounded border-gray-300"
            />

            <span className="text-sm font-medium text-gray-700">
              In Stock (5+)
            </span>
          </label>
        </li>

        <li>
          <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              id="FilterPreOrder"
              className="h-5 w-5 rounded border-gray-300"
            />

            <span className="text-sm font-medium text-gray-700">
              Pre Order (3+)
            </span>
          </label>
        </li>

        <li>
          <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              id="FilterOutOfStock"
              className="h-5 w-5 rounded border-gray-300"
            />

            <span className="text-sm font-medium text-gray-700">
              Out of Stock (10+)
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
      className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
    >
      <span className="text-sm font-medium"> Price </span>

      <span className="transition group-open:-rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </summary>

    <div className="border-t border-gray-200 bg-white">
      <header className="flex items-center justify-between p-4">
        <span className="text-sm text-gray-700"> The highest price is $600 </span>

        <button
          type="button"
          className="text-sm text-gray-900 underline underline-offset-4"
        >
          Reset
        </button>
      </header>

      <div className="border-t border-gray-200 p-4">
        <div className="flex justify-between gap-4">
          <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
            <span className="text-sm text-gray-600">$</span>

            <input
              type="number"
              id="FilterPriceFrom"
              placeholder="From"
              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </label>

          <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
            <span className="text-sm text-gray-600">$</span>

            <input
              type="number"
              id="FilterPriceTo"
              placeholder="To"
              className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </label>
        </div>
      </div>
    </div>
  </details>
</div>
            </aside>

            <main className="w-full md:w-3/4 px-4">
              <header className="border-b mb-4 pb-3 flex justify-between items-center">
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
                          className="bg-white border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-100"
                          data-toggle="tooltip"
                          title="List view"
                        >
                          <BiListUl className="text-gray-500" />
                        </a>
                        <a
                          href="#"
                          className="bg-white border border-gray-300 px-3 py-2 rounded-md hover:bg-gray-100 active:bg-gray-200"
                          data-toggle="tooltip"
                          title="Grid view"
                        >
                          <BiSolidGrid className="text-gray-500" />
                        </a>
                      </div>
                </div>
              </header>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
                {/* Product cards */}
                      <TourCard
                      imageUrl="https://images.freeimages.com/images/large-previews/1a0/sydney-opera-house-1476036.jpg" // Replace with your image URL
                      title="Tour 1"
                      description="Explore amazing destinations with our guided tours."
                      discountPrice="$599"
                      salePrice="$499"
                      promotionText="sale"
                      />
                      <TourCard
                      imageUrl="https://images.freeimages.com/images/large-previews/1a0/sydney-opera-house-1476036.jpg" // Replace with your image URL
                      title="Tour 1"
                      description="Explore amazing destinations with our guided tours."
                      discountPrice="$599"
                      salePrice="$499"
                      promotionText="Recommand"
                      />
                      <TourCard
                      imageUrl="https://images.freeimages.com/images/large-previews/1a0/sydney-opera-house-1476036.jpg" // Replace with your image URL
                      title="Tour 1"
                      description="Explore amazing destinations with our guided tours."
                      discountPrice="$599"
                      salePrice="$499"
                      promotionText="new"
                      />
                       <TourCard
                      imageUrl="https://images.freeimages.com/images/large-previews/1a0/sydney-opera-house-1476036.jpg" // Replace with your image URL
                      title="Tour 1"
                      description="Explore amazing destinations with our guided tours."
                      discountPrice="$599"
                      salePrice="$499"
                      promotionText="new"
                      />

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
