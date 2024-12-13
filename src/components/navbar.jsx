import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation and closing the mobile menu
  const handleNavigate = (path) => {
    navigate(path);
    setShowMenu(false); // Close the menu when navigating
  };

  return (
    <div className="flex items-center justify-between text-sm pt-4 pb-3 mb-5 border-b border-gray-400">
      {/* Logo */}
      <img
        onClick={() => handleNavigate('/')}
        className="w-[200px] cursor-pointer"
        src={Logo}
        alt="Logo"
      />

      {/* Navigation */}
      <nav className="flex justify-center items-center w-full">
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center gap-6 text-[18px] font-medium">
          <NavLink
            exact
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'pt-5 pb-1 text-primary border-b-2 border-primary cursor-pointer'
                : 'pt-5 pb-1 hover:text-primary cursor-pointer'
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/mythos"
            className={({ isActive }) =>
              isActive
                ? 'pt-5 pb-1 text-primary border-b-2 border-primary cursor-pointer'
                : 'pt-5 pb-1 hover:text-primary cursor-pointer'
            }
          >
            MYTHOS
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'pt-5 pb-1 text-primary border-b-2 border-primary cursor-pointer'
                : 'pt-5 pb-1 hover:text-primary cursor-pointer'
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'pt-5 pb-1 text-primary border-b-2 border-primary cursor-pointer'
                : 'pt-5 pb-1 hover:text-primary cursor-pointer'
            }
          >
            CONTACT
          </NavLink>
        </ul>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-4xl text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {showMenu ? '×' : '≡'}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {showMenu && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-50">
          <ul className="flex flex-col items-center gap-5 py-3 text-lg font-medium">
            <NavLink
              exact
              to="/"
              onClick={() => setShowMenu(false)}
              className="cursor-pointer"
            >
              <li className="pt-3 pb-2">HOME</li>
            </NavLink>
            <NavLink
              to="/mythos"
              onClick={() => setShowMenu(false)}
              className="cursor-pointer"
            >
              <li className="pt-3 pb-2">MYTHOS</li>
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setShowMenu(false)}
              className="cursor-pointer"
            >
              <li className="pt-3 pb-2">ABOUT</li>
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setShowMenu(false)}
              className="cursor-pointer"
            >
              <li className="pt-3 pb-2">CONTACT</li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
