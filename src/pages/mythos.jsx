import React, { useState} from 'react';
import adventureImage from '../assets/t_adventure.jpg';
import friendshipImage from '../assets/t_friendship.jpg';
import loveImage from '../assets/t_love.jpg';
import devotionImage from '../assets/t_devotion.jpg';
import mysteryImage from '../assets/t_mystery.jpg';
import fantasyImage from '../assets/t_fantasy.jpg';
import horrorImage from '../assets/t_horror.jpg';
import socialIssuesImage from '../assets/t_social_issues.jpg';
import courageImage from '../assets/t_courage.jpg';
import culturalHeritageImage from '../assets/t_cultural_heritage.jpg';
import scienceFictionImage from '../assets/t_science_fiction.jpg';
import historicalFictionImage from '../assets/t_historical_fiction.jpg';
import storyData from '../stories.json'
function Mythos() {
  const [selectedTheme, setSelectedTheme] = useState('');
  const [selectedLength, setSelectedLength] = useState('short'); // Default length
  const [selectedLanguage, setSelectedLanguage] = useState('english'); // Default language
  const [storyOutput, setStoryOutput] = useState('');

  const handleThemeChange = (event) => {
    setSelectedTheme(event.target.value);
  };

  const handleLengthChange = (event) => {
    setSelectedLength(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const themeDetails = {
    adventure: { description: "Embark on thrilling journeys filled with unexpected challenges and discoveries.", image: adventureImage },
    friendship: { description: "Celebrate the bonds that withstand time and bring joy to every moment.", image: friendshipImage },
    love: { description: "Experience the depth and beauty of connections that move the heart.", image: loveImage },
    devotion: { description: "Delve into stories of loyalty, commitment, and selfless dedication.", image: devotionImage },
    mystery: { description: "Uncover secrets and unravel puzzles that keep you on the edge of your seat.", image: mysteryImage },
    fantasy: { description: "Step into realms of magic, mythical beings, and wondrous adventures.", image: fantasyImage },
    horror: { description: "Dive into a world of chills and thrilling encounters that haunt the mind.", image: horrorImage }  
  /* ,social_issues: { description: "Explore tales that raise awareness and challenge the status quo.", image: socialIssuesImage },
    courage_resilience: { description: "Witness the power of bravery in the face of seemingly insurmountable odds.", image: courageImage },
    cultural_heritage: { description: "Honor traditions, values, and stories that define our shared past.", image: culturalHeritageImage },
    science_fiction: { description: "Imagine futures shaped by technology, innovation, and boundless curiosity.", image: scienceFictionImage },
    historical_fiction: { description: "Step back in time with tales that bring history and its characters to life.", image: historicalFictionImage },
 */
  };


  const generateStory = () => {
    if (!selectedTheme) {
      alert("Please select a theme before generating a story.");
      return; // Stop further execution
    }
    
    if (
      selectedTheme &&
      storyData[selectedTheme] &&
      storyData[selectedTheme][selectedLength] &&
      storyData[selectedTheme][selectedLength][selectedLanguage]
    ) {
      setStoryOutput(storyData[selectedTheme][selectedLength][selectedLanguage]);
    } else {
      setStoryOutput('Story not available for the selected options.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Filter Section */}
      <div className="flex flex-col items-center p-4 ml-8 mr-3 mb-10 bg-gray-100">
        <p className="mb-6 text-gray-700 text-lg text-center">
          Select the story length, theme, and language to customize your experience.
        </p>

        <div className="flex flex-wrap justify-around w-full">
          {/* Select theme of the story */}
          <div className="mb-4">
            <label className="block p-2 text-gray-800 text-xl font-semibold">Theme</label>
            <select className="border border-gray-300 p-2 rounded-md font-semibold" onChange={handleThemeChange} value={selectedTheme}>
              <option value="" disabled selected>Select Theme</option>
              {Object.keys(themeDetails).map((key) => (
                <option key={key} value={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</option>
              ))}
            </select>
          </div>
          {/* Select length of the story */}
          <div className="mb-4">
            <label className="block p-2 text-gray-800 text-xl font-semibold">Length</label>
            <select className="border border-gray-300 p-2 rounded-md font-semibold" onChange={handleLengthChange}>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
            </select>
          </div>
          {/* Select language of the story */}
          <div className="mb-4">
            <label className="block p-2 text-gray-800 text-xl font-semibold">Language</label>
            <select className="border border-gray-300 p-2 rounded-md font-semibold" onChange={handleLanguageChange}>
              <option value="english">English</option>
              <option value="telugu">Telugu</option>
              <option value="hindi">Hindi</option>
              <option value="tamil">Tamil</option>
              <option value="kannada">Kannada</option>
              <option value="malayalam">Malayalam</option>
            </select>
          </div>
        </div>
        <button 
          className="mt-6 w-full md:w-auto px-6 py-3 bg-primary text-white font-semibold rounded-md shadow-md transform transition duration-300 ease-in-out hover:bg-purple-500 hover:scale-105 active:scale-95"
          onClick={generateStory}
        >
          Generate Story!
        </button>
      </div>

      {/* Content Section */}
      <main className="flex-grow flex flex-col md:flex-row md:space-x-4 p-4">
        {/* Image Related to Theme */}
        <div className="flex-1 md:p-10 md:w-1/3 lg:w-1/5 flex flex-col">
          <div className="bg-gray-200 mb-20 flex flex-col items-center justify-center text-center min-h-[300px] p-4 rounded-md">
            {selectedTheme && themeDetails[selectedTheme] ? (
              <>
                <h2 className="text-2xl md:text-[36px] font-bold p-2 mb-2 mt-2 text-primary">
                  {selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)}
                </h2>
                <p className="text-base md:text-[20px] text-gray-600 mb-2 mx-4">
                  {themeDetails[selectedTheme].description}
                </p>
                <img
                  src={themeDetails[selectedTheme].image}
                  alt={`${selectedTheme} theme`}
                  className="object-cover w-full px-20 pb-10 pt-5"
                />
              </>
            ) : (
              <p className="text-lg text-gray-600">Select a theme to view details</p>
            )}
          </div>
        </div>

        {/* Story Representation */}
        <div className="flex-1 p-4 bg-white shadow-md rounded-md flex flex-col min-h-full">
          <h2 className="text-2xl font-bold mb-4">Story Representation</h2>
          <div className="overflow-y-auto max-h-[800px] pt-6 pb-6 pl-4 pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {storyOutput ? (
              <p
                className={`
                  text-justify
                  ${selectedLength === 'short' ? 'text-2xl' : ''}
                  ${selectedLength === 'medium' ? 'text-2xl' : ''}
                  ${selectedLength === 'long' ? 'text-2xl' : ''}
                `}
              >
                {storyOutput}
              </p>
            ) : (
              <p>No story generated yet.</p>
            )}
          </div>
        </div>
      </main>

    </div>
  );
}

export default Mythos;