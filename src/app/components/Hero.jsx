"use client";
import React, { useState, useEffect } from "react";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/homepage.jpg')" }}
    >
      {/* Navbar */}
      <nav
        className={`p-6 fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-[#56423e] shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <a href="/">Chocolica</a>
          </div>
          <div className="hidden md:flex space-x-20">
            <a href="#Hero" className="text-gray-300 hover:text-white">Home</a>
            <a href="#Products" className="text-gray-300 hover:text-white">Products</a>
            <a href="#About" className="text-gray-300 hover:text-white">About Us</a>
            <a href="#Contact" className="text-gray-300 hover:text-white">Contact Us</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-[#56423e] p-4 rounded-lg shadow-lg">
            <a href="#Hero" className="block text-gray-300 hover:text-white py-2">Home</a>
            <a href="#Products" className="block text-gray-300 hover:text-white py-2">Products</a>
            <a href="#About" className="block text-gray-300 hover:text-white py-2">About Us</a>
            <a href="#Contact" className="block text-gray-300 hover:text-white py-2">Contact Us</a>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-white px-2 sm:px-8 md:px-16">
        <p className="mt-4 ml-8 text-left text-base sm:text-lg md:text-xl font-mono leading-snug">
          Indulge in Sweet Perfection. Freshly
        </p>
        <p className="mt-4 ml-8 text-left text-base sm:text-lg md:text-xl font-mono leading-snug">
          baked, beautifully crafted, and irresistibly
        </p>
        <p className="mt-4 ml-8 text-left text-base sm:text-lg md:text-xl font-mono leading-snug">
          delicious homemade cakes.
        </p>
        <p className="mt-4 ml-8 text-left text-base sm:text-lg md:text-xl font-mono leading-snug">
          ~ Persis Engineer
        </p>
      </div>
    </div>
  );
};
