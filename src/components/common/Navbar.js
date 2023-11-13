import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navbar = ({ isAuthenticated, onSignOut }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const  handleSignOut = () => {
    onSignOut();
    navigate('/signin');
  };
  return (
    <nav className="flex items-center bg-gray-800 p-3 flex-wrap">
      <Link to="/" className="p-2 mr-4 inline-flex items-center">
        <span className="text-xl text-white font-bold uppercase tracking-wide">
          Speed-Delivery
        </span>
      </Link>
      <button
        className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <IoMenu className="h-5 w-5" />
      </button>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
          {/* Static links */}
          <Link to="/" className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">Home</Link>
          {/* ... other static links ... */}

          {/* Conditional links based on authentication */}
          {isAuthenticated ? (
            <>
              <button
                onClick={handleSignOut}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;