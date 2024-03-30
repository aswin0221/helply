import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu after clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Navitems
  const navItems = [
    { link: "Home", path: "/" },
    { link: "Register", path: "/register" },
    { link: "UploadOpportunities", path: "/uploadopportunities" },
    { link: "viewsingleopportunities ", path: "/viewsingleopportunities" },
    { link: "VolunteerDirectory", path: "/volunteerdirectory" },
    { link: "BloodDonors", path: "/blooddonors" },
    { link: "About", path: "/about" },
    { link: "Login", path: "/login" },
  ];

  return (
    <header className="bg-white drop-shadow-lg">
      <nav className="flex items-center justify-between py-4 px-6 lg:px-24">
        <Link to="/" className="text-white font-bold text-lg">
          <img src={logo} alt="" className="w-36" />
        </Link>

        {/* Hamburger menu icon */}
        <div>
          <button
            onClick={toggleMenu}
            className="text-teal-600 lg:hidden focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navbar items */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              onClick={closeMenu} // Close the menu on click
              className="text-teal-600 hover:text-black transition ease-in duration-600"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden mobile-menu">
          <div className="flex flex-col items-center bg-white transition-opacity duration-800 ease-in-out">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                onClick={closeMenu} // Close the menu on click
                className="text-teal-600 py-3 hover:text-black transition duration-300"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
