import React from 'react';

function TB() {
  return (

    <div className='font-cabin flex flex-col items-center justify-center'>
       <div className='container'>
      <div className="bg-sky-100  flex flex-col px-5 md:flex-row border border-sky-200">
        <div className='w-full md:w-1/2 py-5 md:border-r-2  '>
          <h1 className='text-xl text-sky-400'>Test</h1>
          <ul className='list-disc list-inside text-sm'>
            <li>A ich bin nur test test test</li>
            <li>B ich bin nur test</li>
            <li>D ich bin nur test</li>
          </ul>
        </div>
        <div className='w-full md:w-1/2 py-10 px-5'>
          <div className='text-sm whitespace-nowrap lg:text-center p-2'>
            <p className="text-gray-700 dark:text-gray-200 line-through decoration-gray-500">Adult: THB 1900, Children: THB 1000</p>
            <p className="text-red-500 dark:text-gray-400">Adult: THB 1700, Children: THB 800</p>
          </div>
        </div>
      </div>

      {/* Add more sections as needed */}
      <div className="bg-sky-100 flex flex-col px-5 md:flex-row border border-sky-200">
        <div className='w-full md:w-1/2 py-5 md:border-r-2'>
          <h1 className='text-xl text-sky-400'>Test</h1>
          <ul className='list-disc list-inside text-sm'>
            <li>A ich bin nur test test test</li>
            <li>B ich bin nur test</li>
            <li>D ich bin nur test</li>
          </ul>
        </div>
        <div className='w-full md:w-1/2 py-10 px-5 '>
          <div className='text-sm whitespace-nowrap lg:text-center p-2'>
            <p className="text-gray-700 dark:text-gray-200 line-through decoration-gray-500">Adult: THB 1900, Children: THB 1000</p>
            <p className="text-red-500 dark:text-gray-400">Adult: THB 1700, Children: THB 800</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default TB;


