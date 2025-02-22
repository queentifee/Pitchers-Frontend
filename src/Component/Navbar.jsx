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
            <Link to="/login" className="py-2 px-3 border rounded-md">
              Log In
            </Link>
            <Link to ="/create-account"
              className="bg-gradient-to-r from-green-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </Link>
            <Link to ="/portfolio"
              className="bg-gradient-to-r from-green-500 to-orange-800 py-2 px-3 rounded-md"
            >
              View Portfolio
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
             {/* <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul> */}
            <div className="flex space-x-6">
            <Link to="/" className="py-2 px-3 border rounded-md">
              Home
            </Link>
              <a href="#" className="py-2 px-3 border rounded-md">
                Log In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-green-500 to-orange-800"
              >
                Create an account
              </a>
              <Link to ="/portfolio"
              className="bg-gradient-to-r from-green-500 to-orange-800 py-2 px-3 rounded-md"
            >
              View Portfolio
            </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
            
    


  
export default Navbar