 import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
// import { navItems } from "../constants";
import { Link } from "react-router-dom"
 

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  
    const toggleNavbar = () => {
      setMobileDrawerOpen(!mobileDrawerOpen);
    };
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg
     border-b border-neutral-700/80">
    <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
          <img className="h-10 w-10" src={logo} alt="Logo" />
          <span className="text-xl tracking-tight">Pitchers</span>
           </div>
           {/* <ul className="hidden lg:flex ml-14 space-x-12">
           {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
           ))}
           </ul> */}
           <div className="hidden lg:flex justify-center space-x-5 items-center">
           <Link to="/" className="py-2 px-3 border rounded-md">
              Home
            </Link>
            {/* <Link to="/login" className="py-2 px-3 border rounded-md">
              Log In
            </Link>
            <Link to ="/create-account"
className="py-2 px-3 border rounded-md"            >
              Create account
            </Link> */}
            <Link to="/about"       
             className="bg-gradient-to-r from-green-500 to-orange-800 py-2 px-3 rounded-md"
            >
              About Us
            </Link>
            <Link to ="/portfolio"
              className="bg-gradient-to-r from-green-500 to-orange-800 py-2 px-3 rounded-md"
            >
            Portfolio
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
  <div className="fixed inset-0 z-50 bg-neutral-900 bg-opacity-85 flex flex-col justify-center items-center h-screen w-full lg:hidden transition-opacity duration-300 ease-in-out opacity-100 scale-100">
    
    {/* Navigation Links */}
    <div className="flex flex-col space-y-5 text-center">
      <Link to="/" className="py-3 px-6 text-white text-lg border rounded-md">
        Home
      </Link>
      
      {/* <a href="#" className="py-3 px-6 text-white text-lg border rounded-md">
        Log In
      </a>

      <a
        href="#"
        className="py-3 px-6 text-lg font-semibold rounded-md bg-gradient-to-r from-green-500 to-orange-800 text-white"
      >
        Create an Account
      </a> */}

      <Link
        to="/about"
        className="py-3 px-6 text-lg font-semibold bg-gradient-to-r from-green-500 to-orange-800 text-white rounded-md"
      >
        About Us
      </Link>

      <Link
        to="/portfolio"
        className="py-3 px-6 text-lg font-semibold bg-gradient-to-r from-green-500 to-orange-800 text-white rounded-md"
      >
        Portfolio
      </Link>
    </div>
 <button
      onClick={() => setMobileDrawerOpen(false)}
      className="absolute top-6 right-6 text-white text-3xl"
    >
      ✕
    </button>
          </div>
        )}
      </div>
    </nav>
  );
};
            
    


  
export default Navbar