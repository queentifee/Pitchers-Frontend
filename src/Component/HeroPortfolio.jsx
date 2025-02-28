import React from "react";
import Heroo from "../assets/Heroo.jpg";

const HeroPortfolio = () => {
  return (
    <div className="relative h-[60vh] md:h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-2000"
        style={{ backgroundImage: `url(${Heroo})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Centered Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-white tracking-wide">
          Explore our 
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            {" "} recent works
          </span>
        </h1>
        <h1 className="text-2xl sm:text-4xl lg:text-3xl text-white tracking-wide mt-3">
          Created by 
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            {" "} creative people
          </span>
        </h1>
      </div>
    </div>
  );
};

export default HeroPortfolio;
