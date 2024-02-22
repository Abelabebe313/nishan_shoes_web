import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Companylogo from "./components/Companylogo";
import ExperienceSection from "./components/ExperienceSection";
import ServiceSection from "./components/ServiceSection";
import Testimonial from "./components/Testimonial";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div>
      <div className="px-44 pt-14">
        <Navbar/>
        <Home/>
        <Companylogo/>
        <ExperienceSection/>
        <ServiceSection/>
        <ProductList/>
        <Testimonial/>
        <ContactUs/>
      </div>
        <Footer/>
    </div>
    
  );
}

export default App;
