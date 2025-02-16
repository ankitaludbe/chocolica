import React from "react";
import { Hero } from "./components/Hero";
import { Products } from "./components/products";
import {About} from "./components/About";
import { Info } from "./components/Info";
import { Footer } from "./components/Footer";
import ContactForm from "./components/Contact";

export default function Home() {
  return ( 
    <div>
      <Hero/>
      <About/>
      <Products/>
      <Info/>
      {/* <ContactForm/> */}
      <Footer/>
    </div>
    
  );
}
