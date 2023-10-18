import React from 'react';

function TB() {
  return (

    <div className='flex flex-col items-center justify-center'>
        <div className='container'>
      <div className="flex flex-col px-4 border md:px-12 bg-sky-100 md:flex-row">
        <div className='w-full py-5 md:w-1/2 md:border-r-2'>
          <h1 className='text-xl text-sky-400'>Test</h1>
          <ul className='text-sm list-disc list-inside'>
            <li>A ich bin nur test test test</li>
            <li>B ich bin nur test</li>
            <li>D ich bin nur test</li>
          </ul>
        </div>
        <div className='w-full md:py-10 md:px-5 md:w-1/2'>
          <div className='p-2 text-xs text-center md:text-sm whitespace-nowrap '>
            <p className="text-gray-700 line-through dark:text-gray-200 decoration-gray-500">Adult: THB 1900, Children: THB 1000</p>
            <p className="text-red-500 dark:text-gray-400">Adult: THB 1700, Children: THB 800</p>
          </div>
        </div>
      </div>

      {/* Add more sections as needed */}
      <div className="flex flex-col px-4 border md:px-12 bg-sky-100 md:flex-row">
        <div className='w-full py-5 md:border-r-2 md:w-1/2'>
          <h1 className='text-xl text-sky-400'>Test</h1>
          <ul className='text-sm list-disc list-inside'>
            <li>A ich bin nur test test test</li>
            <li>B ich bin nur test</li>
            <li>D ich bin nur test</li>
          </ul>
        </div>
        <div className='w-full md:py-10 md:px-5 md:w-1/2'>
          <div className='p-2 text-xs text-center md:text-sm whitespace-nowrap'>
            <p className="text-gray-700 line-through dark:text-gray-200 decoration-gray-500">Adult: THB 1900, Children: THB 1000</p>
            <p className="text-red-500 dark:text-gray-400">Adult: THB 1700, Children: THB 800</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default TB;


