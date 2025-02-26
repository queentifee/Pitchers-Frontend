import React from "react";
import side from "../assets/side.jpg"

    
    const WhoWeAre = () => {
      return (
        <div className="w-full px-0 lg:px-0 py-10 ">
        <div className="flex flex-col lg:flex-row mt-20 items-center gap-12">
          
            {/* Left Section - 60% */}
            {/* <div className="w-full lg:w-[60%]"> */}
            <div className="w-full lg:w-1/2">

            <div className=" overflow-hidden rounded-lg shadow-lg group">
                      <img
                        src={side}
                        className="w-screen h-auto object-cover transition-all duration-500 grayscale group-hover:grayscale-0"

                       />
                      </div>
            </div>
    
            {/* Right Section - 40% */}
            <div className="w-full lg:w-1/2 space-y-6">
          <div className="text-lg font-semibold text-green-600 uppercase tracking-wider">
            Who We Are
          </div>

          <h2 className="text-4xl font-extrabold text-gray-300 leading-tight">
            Innovate. Build. Scale.  
            <span className="bg-gradient-to-r from-green-500 to-orange-800 text-transparent bg-clip-text">
              {" "}We Turn Ideas into Reality.
            </span>
          </h2>

          <p className="text-lg text-gray-400">
            We are a team of highly skilled software engineers with expertise in 
            web development, mobile applications, cloud computing, and AI-driven solutions.  
            Whether you're a startup looking to launch your MVP or an enterprise aiming to scale,  
            we bring innovative ideas to life.
          </p>
        </div>

      </div>
    </div>
  
      );
    };
    
    export default WhoWeAre;