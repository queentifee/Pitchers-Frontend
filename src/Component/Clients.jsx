
import {React, useState} from "react";
import CountUp from "react-countup";
 import { Fish, CakeSlice, Sandwich, EggFried, } from "lucide-react";


const Clients = () => {
  const [replay, setReplay] = useState(false);

  return (
    // <div
    //   className="relative flex justify-center items-center mt-20 px-5 md:px-20 py-10">
    <div className="relative mt-20 border-b border-neutral-800 min-h-[200px]">

       <div className="text-center">
        
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Our works{" "}
          <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
            in numbers
          </span>
        </h2>
        </div>
  
      <div className=" mt-5 relative z-10 grid grid-cols-2 gap-20 md:grid-cols-4 text-white">

      {/* <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-white text-center w-full max-w-5xl"> */}
        {/* Sea Foods */}
        <div
          className="group flex flex-col items-center"
          onMouseEnter={() => setReplay(!replay)}
        >
          <CountUp start={0} end={150} duration={2} key={replay} className="text-3xl text-gray-400 font-bold mt-2" />
          <h1 className="text-lg font-semibold mt-2">Projects</h1>
        </div>

        <div
          className="group flex flex-col items-center"
          onMouseEnter={() => setReplay(!replay)}
        >
          <CountUp start={0} end={130} duration={2} key={replay} className="text-3xl text-gray-400 font-bold mt-2" />
          <h1 className="text-lg font-semibold mt-2">Clients</h1>
        </div>

        <div
          className="group flex flex-col items-center"
          onMouseEnter={() => setReplay(!replay)}
        >
          <CountUp start={0} end={120} duration={2} key={replay} className="text-3xl text-gray-400 font-bold mt-2" />
          <h1 className="text-lg font-semibold mt-2">Countries</h1>
        </div>

        <div
          className="group flex flex-col items-center"
          onMouseEnter={() => setReplay(!replay)}
        >
          <CountUp start={0} end={100} duration={2} key={replay} className="text-3xl text-gray-400 font-bold mt-2" />
          <h1 className="text-lg font-semibold mt-2">Creatives</h1>
        </div>

       
      </div>
    </div>
  );
};

export default Clients;



