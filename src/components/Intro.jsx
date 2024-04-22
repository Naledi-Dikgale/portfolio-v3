import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function Intro() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`p-6 flex items-center space-x-4 ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}>
      <img src="profile.jpg" alt="Profile" className="w-24 h-24 rounded-full" />
      <div>
        <h1 className={`text-4xl font-poppins ${theme === 'light' ? 'text-primary-light' : 'text-secondary-light'}`}>Hello, I'm Naledi</h1>
        <p className="font-agbalumo text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt.</p>
      </div>
    </section>
  );
}

export default Intro;