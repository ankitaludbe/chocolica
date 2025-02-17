"use client"
import React from "react";
import ContactForm from "./Contact";
import { useState } from "react";

export const Info =()=>{
  const [showContactForm, setShowContactForm] = useState(false);

    return (
        <div id="Contact" className="flex flex-col items-center text-center py-16 px-6 mx-auto p-6 w-full h-screen  justify-center">
         <div className="mt-12 text-center bg-[#f8f3f1] p-6 rounded-lg shadow-md max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Looking for Something Special?</h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-4">
                  At Chocolica, we don’t just bake cakes – we craft edible works of art that are as unique as you are! Here’s what we can do:
                </p>
        
                <ul className="text-left text-gray-700 text-sm sm:text-base max-w-3xl mx-auto mb-6 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-xl text-[#56423e]">✔️</span> Customized cake designs made just for you! 🎨
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-xl text-[#56423e]">✔️</span> Have a special theme in mind? We’ll bring it to life! 🎉
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-xl text-[#56423e]">✔️</span> Need a two-tier cake for a grand celebration? We've got you covered! 🎂
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-xl text-[#56423e]">✔️</span> Want a cake that's a true showstopper? Just tell us your dream cake, and we’ll make it happen! ✨
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-xl text-[#56423e]">✔️</span> Get it home delivered across Mumbai!
                  </li>
                </ul>
        
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Whether it’s for a birthday, wedding, or any special occasion, we are here to create the "cake of your dreams" that will leave everyone in awe! 🎂✨
                </p>
        
                {/* <a
                  href="/contact"
                  className="mt-4 inline-block px-6 py-2 bg-[#56423e] text-white text-sm sm:text-base font-medium rounded-full shadow-md hover:bg-[#3d2c29] transition duration-300"
                > */}
                  {/* Contact Us Now */}
                  <button 
                  onClick={()=>setShowContactForm(true)}
                  className="mt-4 inline-block px-6 py-2 bg-[#56423e] text-white text-sm sm:text-base font-medium rounded-full shadow-md hover:bg-[#3d2c29] transition duration-300"
                >
                    contact us now
                  </button>
                  {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
       
                {/* </a> */}
              </div>
              </div>
    )
}