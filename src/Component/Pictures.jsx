import React from "react";
import { Link } from "react-router-dom";


import mockupOne from '../assets/mockups/mockup1.png'
import mockupTwo from '../assets/mockups/mockup2.png'
import mockupThree from '../assets/mockups/mockup3.png'
import mockupFour from '../assets/mockups/mockup4.png'



const images = [
  { src: mockupOne, className: "w-[150px] sm:w-[100px] md:w-[200px] top-5 left-10 rotate-[-10deg] "},
  { src: mockupTwo ,  className: "w-[150px] sm:w-[150px] md:w-[250px] top-5 right-10 rotate-[10deg]"},
  { src: mockupThree, className: "w-[150px] sm:w-[150px] md:w-[250px] bottom-5 left-5 rotate-[5deg]" },
  { src: mockupFour, className: " w-[150px] sm:w-[100px] md:w-[200px] bottom-5 right-5 rotate-[-5deg]" },
  
];


function Pictures() {
    return (
<div className="relative bg-[#1A1A1A] h-[500px]  max-w-[1100px] mx-auto flex justify-center items-center mb-[32px] mt-[32px] rounded-3xl overflow-hidden">
{/* Floating Images */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`floating-${index}`}
            className={`absolute  rounded-xl shadow-lg object-cover ${image.className}`}
          />
        ))}
  
        {/* Content Section */}
        <div className="relative z-10 text-white text-center px-6">
          {/* <h2 className="text-3xl md:text-5xl font-bold"> */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-white">

            Transform Your Ideas <br />
            <span className="text-gray-400">into Impactful</span> Designs
          </h2>
          <Link
            to="/"
            className="mt-5 inline-block rounded-full bg-lime-400 px-6 py-3 text-black font-semibold hover:bg-orange-600 transition"
          >
            Connect With Us
          </Link>
        </div>
      </div>
    );
  }
  
  export default Pictures;