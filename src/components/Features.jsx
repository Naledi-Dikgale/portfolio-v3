import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function Features() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`p-6 flex flex-col items-center justify-center h-screen ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}>
      <h1 className={`font-agbalumo text-4xl text-center ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
        Featured Content
      </h1>
      {/*content */}
    </section>
  );
}

export default Features;