import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import screenshotOne from "../assets/screenshots/screenshot1.png";
import screenshotTwo from "../assets/screenshots/screenshot2.png";
import screenshotThree from "../assets/screenshots/screenshot3.png";
import screenshotFour from "../assets/screenshots/screenshot4.png";
import screenshotFive from "../assets/screenshots/screenshot5.png";
import screenshotSix from "../assets/screenshots/screenshot6.png";
import screenshotSeven from "../assets/screenshots/screenshot7.png";
import screenshotEight from "../assets/screenshots/screenshot8.png";
import screenshotNine from "../assets/screenshots/screenshot9.png";
import Loader from "../assets/loader";
import { ArrowLeft } from "lucide-react";


// const disableScreenshots = () => {
//     document.addEventListener("contextmenu", (e) => e.preventDefault()); // Disable right-click
//     document.addEventListener("keydown", (e) => {
//       if (e.key === "PrintScreen" || (e.ctrlKey && e.key === "p")) {
//         e.preventDefault();
//       }
//     });
//   };
  
  const screenshots = {
    1: screenshotOne,
    2: screenshotTwo,
    3: screenshotThree,
    4: screenshotFour,
    5: screenshotFive,
    6: screenshotSix,
    7: screenshotSeven,
    8: screenshotEight,
    9: screenshotNine,
  };
  const ProjectPreview = () => {
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

  useEffect(() => {
    // disableScreenshots();
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        
        <div className="flex flex-col items-center justify-center min-h-screen ">
          <ArrowLeft
            className="absolute top-1 left-4 h-16 w-16 text-orange-400 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <div className="max-w-full p-6 shadow-lg rounded-lg">
            {/* Screenshot Image */}
            <img
              src={screenshots[id]}
              alt="Project Preview"
            />
          </div>

          {/* Back Button */}
          <button
            className="mt-6 bg-orange-700 text-white px-4 py-2 rounded-md hover:bg-orange-800"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectPreview;