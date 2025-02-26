import React from "react";
import word from "../assets/word.jpg";

const LogoSection = () => {
  return (
    <div       className="relative  h-[400px] flex justify-center items-center mt-10"
>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-2000"

        style={{ backgroundImage: `url(${word})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Centered Text Content */}
      <div className="absolute mt-10 inset-0 flex flex-col text-center px-4 z-10">
        <h1 className="text-2xl sm:text-6xl lg:text-4xl text-white tracking-wide">
        We use over 300,000+ tools 
         
          <br/>
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            {" "} to create unique brand designs.
          </span>
        </h1>
      </div>
    </div>
  );
};

export default LogoSection;
