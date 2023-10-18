import React, { useState } from 'react';
import Image from 'next/image';
import Family from '@/public/family.png';
import Children from '@/public/children.png';
import Baby from '@/public/baby.png';
import ExtraContent from './ExtraContent/ExtraContent';
import ImageSlider from './ImageSlider/ImageSlider';
import TB from '../tables/TB';


const TourSingle = () => {
    const [Accorditionopen, setAccorditionOpen] = useState(false);
    const toggle = (index) => {
      if (Accorditionopen == index){
        return setAccorditionOpen(null)
      }
      setAccorditionOpen(index)
    }
    const accordionData = [
      {
        title: "This is demo title 1",
        desc: "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      },
      {
        title: "This is demo title 1",
        desc: "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      },
      {
        title: "This is demo title 1",
        desc: "is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      },
  
    ];
    return (
      <>
      <section className="py-5 bg-gray-300 ">
      <div className='flex items-center justify-center'>
        <div className="container w-full mx-auto ">
          <div className='text-center'>
          <h2 className="font-cabin text-2xl font-semibold">Phi Phi Island 1</h2>
          <nav className='flex justify-center'>
          <ol className="flex items-center space-x-2 breadcrumb">
            <li className="breadcrumb-item text-gray-200">
              <a href="#">Home</a>
            </li>
            <li>
              <span class="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
            </li>
            <li className="breadcrumb-item text-gray-200 " aria-current="page">
              Sea Tours
            </li>
          
            <li>
              <span class="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Phi Phi Islands 1
            </li>
          </ol>
        </nav>
        </div>
        </div>
        </div>
      </section>
      <div className="container grid gap-8 mx-auto mt-4 grid-col-4 lg:grid-cols-3">
        {/* Tour Images Slider */}
        <div className="col-span-3 lg:col-span-2">
          {/* Add your image slider component here */}
          {/*<h1 className="mb-4 text-3xl font-semibold">Tour Name</h1>*/}
          <div className='container'>
          <div className='carousel'>
              <ImageSlider 
              />  
          </div>
          </div>
          <div className='mt-5'>
            <TB />
          </div>
          {/* Add Accordition */}
           <div className='px-[0px] max-w-[1000px] mt-5'>
            {accordionData.map((data, index) => {
              return (
                <ExtraContent 
                key={index}
                 open={index === Accorditionopen}
                 title={data.title}
                 desc={data.desc}
                 toggle={() => toggle(index)}
              
              />
              );
            })}
           </div>
          {/* Other details like duration, highlights, activities, included, important information, what to bring */}
          {/* Add your details here */}
        </div>
      
  
        
        {/* Booking Form */}

  <div class="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden lg:max-h-860"  >
    <div class="text-2xl py-4 px-6 bg-orange-700 hover:bg-orange-900 text-white text-center font-bold uppercase">
      Book an Appointment
    </div>
  <form class="py-4 px-6" action="" method="POST">
    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="name">
        Name
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name" type="text" placeholder="Enter your name" />
    </div>
    <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
                Email
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" placeholder="Enter your email"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="phone">
                Phone Number
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="tel" placeholder="Enter your phone number"/>
        </div>
        
       
    <div class="md:flex -mx-2 ">
      <div class="md:w-1/2 px-2 mb-4 ">
        <label class="block text-gray-700 font-bold mb-2" for="date">
          Date
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="date" type="date" placeholder="Select a date" />
      </div>
      <div class="md:w-1/2 px-2 mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="time">
          Time
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="time" type="time" placeholder="Select a time" />
      </div>
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="service">
        Service
      </label>
      <select
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="service" name="service">
        <option value="">Select a service</option>
        <option value="haircut">Haircut</option>
        <option value="coloring">Coloring</option>
        <option value="styling">Styling</option>
        <option value="facial">Facial</option>
      </select>
    </div>
    
     {/* Adult and Child counts */}
     <div className="flex flex-col items-center mb-4 ml-0 md:flex-row">
          {/* Adult count */}
          <div className="flex items-center w-full mb-4 ml-0 md:w-1/2 md:mb-0">
            <div>
              {/* Replace with the actual path to your adult icon image */}
              <Image
                src={Family}
                alt="Adult Icon"
                height={48}
                width={48}
                className="w-6 h-6 ml-2"
              />
            </div>
            <div className="flex items-center ml-3 border rounded-full">
              <button className="px-4 py-2">+</button>
              <span className="px-2">0</span>
              <button className="px-4 py-2">-</button>
            </div>
          </div>

          {/* Child count */}
          <div className="flex items-center w-full ml-0 md:w-1/2 ">
            <div>
              {/* Replace with the actual path to your adult icon image */}
              <Image
                src={Children}
                alt="Child Icon"
                height={48}
                width={48}
                className="w-6 h-6 ml-2"
              />
            </div>
            <div className="flex items-center ml-3 border rounded-full">
              <button className="px-4 py-2">+</button>
              <span className="px-2">0</span>
              <button className="px-4 py-2">-</button>
            </div>
          </div>
        </div>
         {/* Infant count */}
         <div className="flex items-center mb-4 ml-0">
          <div className='flex items-center w-full ml-0 md:w-1/2'>
            <div>
              <Image
                src={Baby} // Replace with the actual path to your adult icon image
                alt="Baby Icon"
                height={48}
                width={48}
                className="w-6 h-6 ml-2"
              />
            </div>
            <div className="flex items-center ml-3 border rounded-full">
              <button className="px-4 py-2">+</button>
              <span className="px-2">0</span>
              <button className="px-4 py-2">-</button>
            </div>
          </div>
        </div>


    <div class="mb-4">
      <label class="block text-gray-700 font-bold mb-2" for="message">
        Message
      </label>
      <textarea
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="message" rows="4" placeholder="Enter any additional information"></textarea>
    </div>
  </form>
  <div class="text-2xl py-4 px-6 bg-orange-700 hover-bg-orange-900 text-white text-center font-bold uppercase">
    Book an Appointment
  </div>
</div>

  
  
    
      </div>
      </>
    );


};
export default TourSingle

{/*
 <div class="max-w-md mx-auto mt-10 shadow-lg rounded-lg overflow-hidden bg-no-repeat bg-gradient-to-b from-orange-100 ">
    <div class="text-2xl py-4 px-6 bg-orange-700 hover:bg-orange-900 text-white text-center font-bold uppercase">
        Book an Appointment
    </div>
    <form class="py-4 px-6" action="" method="POST">
        
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="name">
                Name
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name" type="text" placeholder="Enter your name" />
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
                Email
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email" type="email" placeholder="Enter your email"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="phone">
                Phone Number
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone" type="tel" placeholder="Enter your phone number"/>
        </div>
        
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="date">
                Date
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date" type="date" placeholder="Select a date"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="time">
                Time
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="time" type="time" placeholder="Select a time"/>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="service">
                Service
            </label>
            <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service" name="service">
                <option value="">Select a service</option>
                <option value="haircut">Haircut</option>
                <option value="coloring">Coloring</option>
                <option value="styling">Styling</option>
                <option value="facial">Facial</option>
            </select>
        </div>
       
        <div className="flex flex-col items-center mb-4 ml-0 md:flex-row">
         
          <div className="flex items-center w-full mb-4 ml-0 md:w-1/2 md:mb-0">
            <div>
            
              <Image
                src={Family}
                alt="Adult Icon"
                height={48}
                width={48}
                className="w-6 h-6 ml-2"
              />
            </div>
            <div className="flex items-center ml-3 border rounded-full">
              <button className="px-4 py-2">+</button>
              <span className="px-2">0</span>
              <button className="px-4 py-2">-</button>
            </div>
          </div>

         
          <div className="flex items-center w-full ml-0 md:w-1/2 ">
            <div>
           
              <Image
                src={Children}
                alt="Child Icon"
                height={48}
                width={48}
                className="w-6 h-6 ml-2"
              />
            </div>
            <div className="flex items-center ml-3 border rounded-full">
              <button className="px-4 py-2">+</button>
              <span className="px-2">0</span>
              <button className="px-4 py-2">-</button>
            </div>
          </div>
        </div>
        
         <div className="flex items-center mb-4 ml-0">
          <div className='flex items-center w-full ml-0 md:w-1/2'>
            <div>
              <Image
                src={Baby} // Replace with the actual path to your adult icon image
                alt="Baby Icon"
                height={48}
                width={48}
                className="w-6 h-6 ml-2"
              />
            </div>
            <div className="flex items-center ml-3 border rounded-full">
              <button className="px-4 py-2">+</button>
              <span className="px-2">0</span>
              <button className="px-4 py-2">-</button>
            </div>
          </div>
        </div>

        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="message">
                Message
            </label>
            <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message" rows="4" placeholder="Enter any additional information"></textarea>
        </div>
        


    </form>
    <div class="text-2xl py-4 px-6 bg-orange-700 hover:bg-orange-900 text-white text-center font-bold uppercase">
        Book an Appointment
    </div>
</div>





*/}