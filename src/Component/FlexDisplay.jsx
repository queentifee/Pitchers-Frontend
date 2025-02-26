import React from "react";
import { useNavigate } from "react-router-dom";
import mockupOne from '../assets/mockups/mockup1.png'
import mockupTwo from '../assets/mockups/mockup2.png'
import mockupThree from '../assets/mockups/mockup3.png'
import mockupFour from '../assets/mockups/mockup4.png'
import mockupFive from '../assets/mockups/mockup5.png'
import mockupSix from '../assets/mockups/mockup6.png'
import mockupSeven from '../assets/mockups/mockup7.png'
import mockupEight from '../assets/mockups/mockup8.png'
import mockupNine from '../assets/mockups/mockup9.png'

const projects = [
    { id: 1, mockup: mockupOne, name: "Project One" },
    { id: 2, mockup: mockupTwo, name: "Project Two" },
    { id: 3, mockup: mockupThree, name: "Project Three" },
    { id: 4, mockup: mockupFour, name: "Project Four" },
    { id: 5, mockup: mockupFive, name: "Project Five" },
    { id: 6, mockup: mockupSix, name: "Project Six" },
    { id: 7, mockup: mockupSeven, name: "Project Seven" },
    { id: 8, mockup: mockupEight, name: "Project Eight" },
    { id: 9, mockup: mockupNine, name: "Project Nine" }

];

const FlexDisplay = () => {

    const navigate = useNavigate();
  return (
    <div className="container mx-auto px-6 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col items-center shadow-md rounded-lg">
            <img
              src={project.mockup}
              alt={project.name}
              className="w-full h-70 object-cover rounded-md"
            />
<button className="mt-2 bg-[#064e3b] text-white px-4 py-2 rounded-md border-6 border-[#043d2a] hover:bg-[#043d2a] w-full "
onClick={() => navigate(`/preview/${project.id}`)}>

              PREVIEW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlexDisplay;
