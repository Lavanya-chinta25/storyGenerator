import React from 'react';
import Home from '../assets/home.png';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/bg1.jpg'
const header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex rounded-lg mt-10 px-20 sm:px-10 md:px-20 lg:px-20 md:mx-10 mb-10 overflow-hidden bg-opacity-80 relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 rounded-lg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      ></div>
  
      {/* Content */}
      <div className="relative flex flex-col w-full z-10">
        {/* Left Side */}
        <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
          <div className="py-10 text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white">
            <p className="font-semibold">Start Your Story Journey</p>
            <p className="mt-6 text-[32px]">
              Enhance your communication skills through captivating stories in diverse languages. Engage with narratives that inspire and empower your expression!
            </p>
          </div>
          <button 
            onClick={() => { navigate('/mythos'); scrollTo(0, 0); }}
            className="bg-white text-sm sm:text-base text-gray-600 px-8 py-4 mt-2 mb-4 rounded-full hover:scale-105 transition-all"
          >
            Begin Your Adventure
          </button>
        </div>
  
        {/* Right Side */}
        <div className="hidden md:flex md:justify-end md:w-0 lg:w-0 relative pr-10">
          <img 
            className="w-[300px] right-0 bottom-0 object-cover lg:scale-110" 
            src={Home} 
            alt="Home" 
          />
        </div>
      </div>
    </div>
  );
  
};
export default header;
