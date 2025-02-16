"use client";
import React, { useState } from "react";
import OrderForm from "../components/OrderForm"; // Import Order Form
import { Footer } from "../components/Footer";

const Cakes = () => {
  const [selectedCake, setSelectedCake] = useState(null); // Track selected cake
  const [selectedSize, setSelectedSize] = useState("250g"); // Default size

  const cakes = [
    { id: 1, name: "Black Forest Cake", prices: { "250g": 400, "500g": 750 }, imageUrl: "/black-forest.jpeg" },
    { id: 2, name: "Dutch Truffle Cake", prices: { "250g": 500, "500g": 900 }, imageUrl: "/dutch truffle.jpeg" },
    { id: 3, name: "Swiss Chocolate", prices: { "250g": 450, "500g": 900 }, imageUrl: "/swiss-choco.jpeg" },
    { id: 4, name: "Nutella Cake", prices: { "250g": 650, "500g": 1250 }, imageUrl: "/nutella-cakes.jpeg" },
    { id: 5, name: "Ferrero Rocher Cake", prices: { "250g": 750, "500g": 1350 }, imageUrl: "/forrero.jpg" },
    { id: 6, name: "Red Velvet Cake", prices: { "250g": 750, "500g": 1350 }, imageUrl: "/red-velvet.jpeg" },
    { id: 7, name: "Fresh Mango Cake (Seasonal)", prices: { "250g": 650, "500g": 1200 }, imageUrl: "/mango.jpeg" },
    { id: 8, name: "Gulab Jamun Cake", prices: { "250g": 650, "500g": 1200 }, imageUrl: "/gulab-jamun.jpeg" },
    { id: 9, name: "Kitkat Cake", prices: { "250g": 650, "500g": 1200 }, imageUrl: "/kitkat cake.jpeg" },
    { id: 10, name: "Caramel/Butterscotch Cake", prices: { "250g": 650, "500g": 1200 }, imageUrl: "/Butterscotch cake.jpeg" },
    { id: 11, name: "Cookies and Cream", prices: { "250g": 600, "500g": 1200 }, imageUrl: "/cookie.jpeg" },
    { id: 12, name: "Chocolate Chip Truffle Cake", prices: { "250g": 600, "500g": 1100 }, imageUrl: "/choco.jpeg" },
  ];

  const handleOrder = (cake) => {
    console.log("Selected Cake:", cake); // Debugging Log
    setSelectedCake(cake);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-8">
      {/* Heading */}
      <section className="flex flex-col items-center text-center py-16 px-6 mx-auto p-6 w-full justify-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-yellow-800 mb-2">Cakes</h1>
        <div className="h-1 w-12 bg-blue-300 rounded-full mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          "Indulge in our wide range of delicious, rich-quality cakes, crafted with love and the finest ingredients.
          Whether you crave classic flavors or something unique, we have the perfect treat for every occasion.
          Choose from our freshly baked selection and experience the taste of pure bliss!"
        </p>
      </section>

      {/* Cake Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {cakes.map((cake) => (
          <CakeCard
            key={cake.id}
            cake={cake}
            selectedSize={selectedSize} // Pass selectedSize here
            setSelectedSize={setSelectedSize} // Pass setter function here
            onOrder={() => handleOrder(cake)}
          />
        ))}
      </div>

      {/* Order Form Modal */}
      {selectedCake && (
        <OrderForm
          cake={selectedCake}
          selectedSize={selectedSize}
          selectedPrice={selectedCake.prices[selectedSize]}
          onClose={() => setSelectedCake(null)}
        />
      )}

      {/* Special Order Section */}
      <div className="flex flex-col items-center text-center py-16 px-6 mx-auto p-10 w-full justify-center">
        <div className="mt-12 text-center bg-[#f8f3f1] p-6 rounded-lg shadow-md max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Need a cake that's 1kg or bigger?</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-4">
            You can now order your favorite Chocolica cakes in sizes starting from 1kg and beyond!
          </p>
          <a
            href="/contact"
            className="mt-4 inline-block px-6 py-2 bg-[#56423e] text-white text-sm sm:text-base font-medium rounded-full shadow-md hover:bg-[#3d2c29] transition duration-300"
          >
            Contact Us Now
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Cake Card Component
const CakeCard = ({ cake, selectedSize, setSelectedSize, onOrder }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img src={cake.imageUrl} alt={cake.name} className="w-full sm:max-h-56 object-cover" />

      <div className="p-3 sm:p-4 text-center">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800">{cake.name}</h3>

        {/* Size Selection */}
        <div className="mt-1 flex items-center justify-center space-x-2">
          <label className="text-gray-600 text-xs sm:text-sm">Select Size:</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)} // Update selected size
            className="w-24 p-1 text-xs sm:text-sm border rounded-md focus:ring focus:ring-[#56423e]"
          >
            <option value="250g">250g</option>
            <option value="500g">500g</option>
          </select>
        </div>

        <p className="text-sm sm:text-base text-gray-700 font-mono mt-1">
          ₹{cake.prices[selectedSize]}
        </p>

        {/* Order Button */}
        <button
          onClick={() => {
            const selectedPrice = cake.prices[selectedSize]; // Get price for selected size
            onOrder({ ...cake, selectedSize, selectedPrice }); // Pass size and price
          }}
          className="mt-2 px-3 py-1 sm:px-4 sm:py-2 bg-[#56423e] text-white rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-md hover:bg-[#3d2c29] transition duration-300"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Cakes;
