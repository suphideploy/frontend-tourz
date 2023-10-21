import React from 'react'

function CustomerForm() {
  return (
    <>
    <div className="bg-white p-0 rounded-md shadow-md mt-5">
        <div className="form-header text-center">
             <h1 className="font-cardo bg-sky-700 py-2 px-5 text-left font-bold text-2xl capitalize text-white">Customer Information</h1>
        </div>
    </div>
    <form>
        <div className="px-5 py-3">
            <div className="flex items-center">
                <div className="w-40 mr-2">
                        <label htmlFor="adults" className="block text-sm font-bold text-gray-700">Title</label>
                        <select id="adults" className="form-input mt-1 w-full">
                          <option>Mr.</option>
                          <option>Mrs.</option>
                          <option>Dr.</option>
                          <option>Professor</option>
                        </select>
                        <span className="select-arrow"></span>
                 </div>
            </div>
        </div>
        <div className="px-5 py-3">
                    <div className="flex items-center">
                      <div className="w-2/4 mr-3">
                        <label htmlFor="firstname" className="block text-sm font-bold text-gray-700">First Name</label>
                        <input type="text" id="first_name" className="form-input mt-1 w-full" required />
                      </div>
                      <span className="in-out hidden xs:hidden sm:text-3xl text-brown mx-3">&#8652;</span>
                      <div className="w-2/4 mr-3">
                        <label htmlFor="lastname" className="block text-sm font-bold text-gray-700">Last Name</label>
                        <input type="text" id="last_name" className="form-input mt-1 w-full" required />
                      </div>
                    </div>
         </div>
         <div className="px-5 py-3">
                    <div className="flex items-center">
                      <div className="w-1/3 mr-3">
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email Adress</label>
                        <input type="email" id="email" className="form-input mt-1 w-full" required />
                      </div>
                      <span className="in-out hidden xs:hidden sm:text-3xl text-brown mx-3">&#8652;</span>
                      <div className="w-1/3 mr-3">
                        <label htmlFor="nationality" className="block text-sm font-bold text-gray-700">Nationality</label>
                        <input type="text" id="nationality" className="form-input mt-1 w-full" required />
                      </div>
                      <span className="in-out hidden xs:hidden sm:text-3xl text-brown mx-3">&#8652;</span>
                      <div className="w-1/3 mr-3">
                        <label htmlFor="telefon" className="block text-sm font-bold text-gray-700">Tel Phone no/WhatsApp</label>
                        <input type="tel" id="telefon" className="form-input mt-1 w-full" required />
                      </div>
                    </div>
         </div>
         <div className="px-5 py-3">
                    <div className="flex items-center">
                      <div className="w-2/4 mr-3">
                        <label htmlFor="hotel" className="block text-sm font-bold text-gray-700">Hotels to pick & Drop off</label>
                        <input type="text" id="first_name" className="form-input mt-1 w-full" required />
                      </div>
                      <span className="in-out hidden xs:hidden sm:text-3xl text-brown mx-3">&#8652;</span>
                      <div className="w-2/4 mr-3">
                        <label htmlFor="roomno" className="block text-sm font-bold text-gray-700">Room no</label>
                        <input type="text" id="last_name" className="form-input mt-1 w-full" required />
                      </div>
                    </div>
         </div>
    </form>
    </>       
  
  );
}

export default CustomerForm
