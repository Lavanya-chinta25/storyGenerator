import React from 'react';
import { useNavigate } from 'react-router-dom';
import English from '../assets/english.jpg';
import Telugu from '../assets/telugu.jpg';
import Hindi from '../assets/hindi.jpg';
import Tamil from '../assets/tamil.jpg';
import Malayalam from '../assets/malayalam.jpg';
import Kannada from '../assets/kannada.jpg';

const languages = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-20 mt-20 w-full flex flex-col items-center">
      {/* Introductory Text */}
      <p className="text-lg font-semibold text-gray-700 mx-4 text-center">
        Choose a <span className='font-bold text-primary'>LANGUAGE</span> to start your story journey:
      </p>
      
      <div className="flex items-center justify-center flex-wrap gap-6 my-10">
        {/* Language Images */}
        <div className="w-20 h-20 md:w-32 md:h-32 lg:w-30 lg:h-30 bg-gray-300 rounded-full transform hover:scale-110 transition duration-300 ease-in-out">
          <img src={English} alt="English" className="rounded-full w-full h-full object-cover" />
        </div>
        <div className="w-24 h-24 md:w-32 md:h-32 lg:w-30 lg:h-30 bg-gray-300 rounded-full transform hover:scale-110 transition duration-300 ease-in-out">
          <img src={Telugu} alt="Telugu" className="rounded-full w-full h-full object-cover" />
        </div>
        <div className="w-24 h-24 md:w-32 md:h-32 lg:w-30 lg:h-30 bg-gray-300 rounded-full transform hover:scale-110 transition duration-300 ease-in-out">
          <img src={Hindi} alt="Hindi" className="rounded-full w-full h-full object-cover" />
        </div>
        <div className="w-24 h-24 md:w-32 md:h-32 lg:w-30 lg:h-30 bg-gray-300 rounded-full transform hover:scale-110 transition duration-300 ease-in-out">
          <img src={Tamil} alt="Tamil" className="rounded-full w-full h-full object-cover" />
        </div>
        <div className="w-24 h-24 md:w-32 md:h-32 lg:w-30 lg:h-30 bg-gray-300 rounded-full transform hover:scale-110 transition duration-300 ease-in-out">
          <img src={Malayalam} alt="Malayalam" className="rounded-full w-full h-full object-cover" />
        </div>
        <div className="w-24 h-24 md:w-32 md:h-32 lg:w-30 lg:h-30 bg-gray-300 rounded-full transform hover:scale-110 transition duration-300 ease-in-out">
          <img src={Kannada} alt="Kannada" className="rounded-full w-full h-full object-cover" />
        </div>
      </div>
      
      <button
        className="px-4 py-2 md:px-8 md:py-3 lg:px-4 lg:py-2 bg-primary text-white rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
        onClick={() => navigate('/storyGenerator/mythos')}
      >
        Select Language
      </button>
      <hr className='bg-blend-color-burn'/>
    </div>
  );
};

export default languages;
