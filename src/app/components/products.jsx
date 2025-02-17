"use client"
import Link from "next/link";
export const Products = () => {
  return (
    <div id="Products" className=" mx-auto py-16 px-6  p-6 w-full h-screen flex flex-col items-center justify-center" >
      <h1 className="text-4xl font-serif text-center mb-12" style={{ color: "#56423e" }}>Our Products</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl bg-[#f3eed9] p-8 rounded-lg shadow-lg">
  {/* Cheesecake Card */}
        <div className="relativ rounded-lg shadow-lg overflow-hidden group" style={{background:"#bea6a1"}}>
          <div 
            className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
            style={{ backgroundImage: "url('/Blueberry Cheesecake.jpeg')" }}
          ></div>
          <div className="p-6 text-center">
          <Link href="/cheesecake" className="text-3xl font-serif mb-2  hover:underline" style={{ color: "#56423e" }}>
              Cheesecakes
            </Link>
          </div>
        </div>

        {/* Cakes Card */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group"style={{background:"#bea6a1"}}>
          <div 
            className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
            style={{ backgroundImage: "url('/cakes.jpeg')" }}
          ></div>
          <div className="p-6 text-center">
            <Link href="/cake" className="text-3xl font-serif mb-2  hover:underline" style={{ color: "#56423e" }}>
              Cakes
            </Link>
          </div>
        </div>

        {/* Chocolates Card */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden group" style={{background:"#bea6a1"}}>
          <div 
            className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
            style={{ backgroundImage: "url('/chocolates.jpeg')" }}
          ></div>
          <div className="p-6 text-center">
          <Link href="/chocolate" className="text-3xl font-serif mb-2  hover:underline" style={{ color: "#56423e" }}>
              Chocolates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
