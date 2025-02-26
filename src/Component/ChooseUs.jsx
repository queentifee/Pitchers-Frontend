import { CheckCircle2 } from "lucide-react";
import sidee from "../assets/sidee.jpg";
import { choose } from "../constants";

const ChooseUs = () => {
  return (
    <div className="container mx-auto px-2 lg:px0 py-5">
<div className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 text-center tracking-wide">
          
          <span className="bg-gradient-to-r from-orange-500 to-green-800 text-transparent bg-clip-text">
            Why Choose Us
          </span>
        </div>
        <div className="flex flex-wrap  mt-10">
        
        <div className="pt-12 w-full lg:w-1/2">
          {choose.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" w-full lg:w-1/2 hidden lg:block ">
        <img src={sidee} alt="Why Choose Us" className="w-full h-[500px]  mt-10 rounded-lg shadow-lg object-cover" />
        </div> 
      </div>
    </div>
  );
};

export default ChooseUs;