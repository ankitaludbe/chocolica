"use client"
import Image from "next/image";

export const About = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 px-6 mx-auto p-6 w-full h-screen  justify-center">
      {/* Heading & Subtitle */}
      <h1 className="text-3xl md:text-4xl font-semibold text-yellow-800 mb-2">
        Freshly Baked!
      </h1>
      <div className="h-1 w-12 bg-blue-300 rounded-full mb-4"></div>
      <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
      We’ve been serving our guests the finest quality treats, traditionally made at home and carefully presented, now available for order across all of Mumbai, anytime.
      </p>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center mt-12 gap-8 max-w-6xl w-full px-4">
        
        {/* Left Features */}
        <div className="space-y-8 text-center lg:text-left">
          <div>
            <h3 className="text-lg font-bold text-yellow-800 font-mono text-center">Genuine Recipes</h3>
            <p className="text-gray-600 text-sm md:text-base text-center">
            Our products are crafted from time-honored home-style recipes, made with fresh, high-quality ingredients.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-yellow-800 font-mono text-center">Crafted with care</h3>
            <p className="text-gray-600 text-sm md:text-base text-center">
              Each recipe is infused with our love for baking, bringing joy to your table with every bite.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
        <video src="/media.mp4" height="345" width="345" autoPlay loop muted style={{ borderRadius: '20px' }} ></video>
 </div>

        {/* Right Features */}
        <div className="space-y-8 text-center lg:text-left">
          <div>
            <h3 className="text-lg font-bold text-yellow-800 font-mono text-center">Dedicated to excellence</h3>
            <p className="text-gray-600 text-sm md:text-base text-center">
            We prioritize excellence in every aspect, from sourcing the finest ingredients to ensuring top-notch kitchen operations and exceptional guest service.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-yellow-800 text-center">Value you can trust</h3>
            <p className="text-gray-600 text-sm md:text-base text-center">
            We believe in offering premium products at prices that reflect true worth, without compromise.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};


