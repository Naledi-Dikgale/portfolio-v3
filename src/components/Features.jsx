import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function Features() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`p-6 ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}>
      <h1 className={`text-4xl font-poppins ${theme === 'light' ? 'text-primary-light' : 'text-secondary-light'}`}>Featured Content</h1>
      {/*content */}
    </section>
  );
}

export default Features;