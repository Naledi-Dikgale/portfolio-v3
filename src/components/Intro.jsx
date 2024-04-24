import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FaLaptop, FaHeadphones, FaCoffee, FaBook, FaCode } from 'react-icons/fa';

function Intro() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`p-6 flex flex-col items-center justify-center h-screen ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}>
      <h1 className={`text-4xl text-center ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
        Hello, I'm Naledi
      </h1>
      <div className="flex flex-row items-center justify-center mt-4">
        <p className={`text-center ${theme === 'light' ? 'text-secondary' : 'text-secondary-light'}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt.
        </p>
        <div className="flex flex-col items-center justify-center ml-6 w-1/2 relative">
          <div className="flex flex-row items-center justify-center">
            <FaLaptop className={`icon ${theme === 'light' ? 'text-secondary' : 'text-primary'}`} />
            <FaHeadphones className={`icon ${theme === 'light' ? 'text-secondary' : 'text-primary'}`} />
            <FaCoffee className={`icon ${theme === 'light' ? 'text-secondary' : 'text-primary'}`} />
            <FaBook className={`icon ${theme === 'light' ? 'text-secondary' : 'text-primary'}`} />
            <FaCode className={`icon ${theme === 'light' ? 'text-secondary' : 'text-primary'}`} />
          </div>
          <div className="relative">
            <img src="profile.png" alt="Profile" className="mt-4 w-full max-w-xs" />
            <div className={`absolute bottom-0 w-full h-3/4 ${theme === 'light' ? 'bg-primary' : 'bg-secondary'} transform skew-y-45  translate-y-40`}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;