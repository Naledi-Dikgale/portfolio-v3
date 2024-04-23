import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function Intro() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`p-6 flex flex-col items-center justify-center h-screen ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}>
      <h1 className={`font-agbalumo text-4xl text-center ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
        Hello, I'm Naledi
      </h1>
      <p className={`mt-4 text-center font-agbalumo ${theme === 'light' ? 'text-secondary' : 'text-secondary-light'}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt.
      </p>
    </section>
  );
}

export default Intro;