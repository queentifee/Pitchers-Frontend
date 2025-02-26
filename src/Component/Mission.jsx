import React from "react";
import mission from "../assets/mission.jpg"

    
    const Mission = () => {
      return (
        <div className="w-full px-0 lg:px-0 py-10 ">
        <div className="flex flex-col lg:flex-row mt-20 items-center gap-12">
          
            {/* Left Section - 60% */}
            {/* <div className="w-full lg:w-[60%]"> */}
            <div className="w-full lg:w-[70%]">

            <div 
    className="overflow-hidden rounded-lg shadow-lg group bg-cover bg-center h-[500px] relative"
                      
 style={{ backgroundImage: `url(${mission})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        
        <div className="absolute inset-0 w-full flex flex-col justify-center text-white max-w-full transition-all duration-1000 px-5 mt-20">
        <div className="text-lg font-semibold text-orange-800 uppercase tracking-wider">
            Our Value
          </div>
          <h2 className="text-4xl font-bold text-gray-300 leading-tight">
          Smart Designs, Sharp Results  

<span className="bg-gradient-to-r from-green-500 to-orange-800 text-transparent bg-clip-text">
              {" "}Choose Pitchers for Digital Excellence.
            </span>
          </h2>
          <br/>
          <p className="text-lg text-gray-300">

          At Pitchers, we believe that great software is built on a foundation of innovation, precision,
           and user-centric design. Our commitment to excellence ensures that every solution we create is not 
           just functional but also intuitive, scalable, and impactful.
</p>    </div>
     </div>
    </div>
            
    
            {/* Right Section - 30% */}
           {/* Right Section - 30% */}
<div className="w-full lg:w-[30%] space-y-6  h-[500px] relative ">
  {/* Vision Box */}
  <div className="bg-gradient-to-r from-orange-800 to-green-800 text-white p-6 rounded-lg shadow-lg h-[250px]">
    <h2 className="text-xl font-bold"> Our Vision</h2>
    <p className="mt-2">
      We strive to redefine the digital landscape by creating innovative, scalable, and high-performance solutions that drive businesses forward.
    </p>
  </div>

  {/* Mission Box */}
  <div className="bg-gradient-to-r from-green-800 to-orange-800 text-white p-8 rounded-lg shadow-lg h-[250px]">
    <h2 className="text-xl font-bold"> Our Mission</h2>
    <p className="mt-2">
      To empower businesses with cutting-edge technology, smart designs, and seamless user experiences that foster growth and efficiency.
    </p>
  </div>
</div>


      </div>
    </div>
  
      );
    };
    
    export default Mission;