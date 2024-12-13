import React from 'react';
import { useNavigate } from 'react-router-dom';
import Mystery from '../assets/mystery.jpg';
import Love from '../assets/love.jpg';
import Friendship from '../assets/friendship.jpg';
import Science from '../assets/science.jpg';
import Devotion from '../assets/devotion.jpg';
import Social from '../assets/social.jpg';

const themes = () => {
  const navigate = useNavigate();

  return (
    <div className="w-4/5 mx-auto text-center">
      <p className="text-lg font-semibold text-gray-600 mx-19 text-center">
      Select a <span className='font-bold text-primary'>THEME</span> to add depth to your story journey:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-10 place-items-center">
        <div className="flex flex-col items-center">
          <img src={Love} alt="Love" className="w-16 h-16 sm:w-20 sm:h-20 md:w-40 md:h-40 rounded transform transition-transform duration-300 hover:scale-110" />
          <p className="text-center mt-2 text-sm md:text-base font-semibold">Love</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Science} alt="Science" className="w-16 h-16 sm:w-20 sm:h-20 md:w-40 md:h-40 rounded transform transition-transform duration-300 hover:scale-110" />
          <p className="text-center mt-2 text-sm md:text-base font-semibold">Science</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Friendship} alt="Friendship" className="w-16 h-16 sm:w-20 sm:h-20 md:w-40 md:h-40 rounded transform transition-transform duration-300 hover:scale-110" />
          <p className="text-center mt-2 text-sm md:text-base font-semibold">Friendship</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Social} alt="Social" className="w-16 h-16 sm:w-20 sm:h-20 md:w-40 md:h-40 rounded transform transition-transform duration-300 hover:scale-110" />
          <p className="text-center mt-2 text-sm md:text-base font-semibold">Social Issues</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Devotion} alt="Devotion" className="w-16 h-16 sm:w-20 sm:h-20 md:w-40 md:h-40 rounded transform transition-transform duration-300 hover:scale-110" />
          <p className="text-center mt-2 text-sm md:text-base font-semibold">Devotion</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={Mystery} alt="Mystery" className="w-16 h-16 sm:w-20 sm:h-20 md:w-40 md:h-40 rounded transform transition-transform duration-300 hover:scale-110" />
          <p className="text-center mt-2 text-sm md:text-base font-semibold">Mystery</p>
        </div>
      </div>

      <button
        className="px-4 py-2 bg-primary mx-auto text-white rounded transform transition-all duration-300 hover:bg-primary-dark hover:scale-105"
        onClick={() => navigate('/mythos')}
      >
        Select Theme
      </button>
    </div>
  );
}

export default themes;
