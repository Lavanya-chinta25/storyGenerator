import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-between text-sm pt-4 pb-3 mb-5 border-b border-b-gray-400">
      <img onClick={() => navigate('/')} className="w-[250px] cursor-pointer" src={Logo} alt="Logo" />
      
      <nav className="flex justify-center items-center w-full">
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center gap-5 text-[18px] font-medium">
          <NavLink to="/storyGenerator/">
            <li className="pt-5 pb-1">HOME</li>
            <hr className="border-none outline-none h-[2.75px] bg-primary w-3/5 margin-auto hidden" />
          </NavLink>
          <NavLink to="/storyGenerator/mythos">
            <li className="pt-5 pb-1">MYTHOS</li>
            <hr className="border-none outline-none h-[2.75px] bg-primary w-3/5 margin-auto hidden" />
          </NavLink>
          <NavLink to="/storyGenerator/about">
            <li className="pt-5 pb-1">ABOUT</li>
            <hr className="border-none outline-none h-[2.75px] bg-primary w-3/5 margin-auto hidden" />
          </NavLink>
          <NavLink to="/storyGenerator/contact">
            <li className="pt-5 pb-1">CONTACT</li>
            <hr className="border-none outline-none h-[2.75px] bg-primary w-3/5 margin-auto hidden" />
          </NavLink>
        </ul>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-6xl text-gray-700 focus:outline-none"
          >
            {showMenu ? '×' : '≡'} {/* Hamburger Icon or Close Icon */}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {showMenu && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-10">
          <ul className="flex flex-col items-center gap-5 py-3 text-lg font-medium">
            <NavLink to="/storyGenerator/" onClick={() => setShowMenu(false)}>
              <li className="pt-3 pb-2">HOME</li>
            </NavLink>
            <NavLink to="/storyGenerator/mythos" onClick={() => setShowMenu(false)}>
              <li className="pt-3 pb-2">MYTHOS</li>
            </NavLink>
            <NavLink to="/storyGenerator/about" onClick={() => setShowMenu(false)}>
              <li className="pt-3 pb-2">ABOUT</li>
            </NavLink>
            <NavLink to="/storyGenerator/contact" onClick={() => setShowMenu(false)}>
              <li className="pt-3 pb-2">CONTACT</li>
            </NavLink>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
