import React, { useContext } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext';

function ScrollToTop() {
  const { theme } = useContext(ThemeContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button onClick={scrollToTop} className={`fixed bottom-4 right-4 px-4 py-2 border-2 rounded ${theme === 'light' ? 'border-button text-button hover:bg-button hover:text-primary' : 'border-secondary-light text-secondary-light hover:bg-button hover:text-primary'}`}>
      <FaArrowUp size={24} />
    </button>
  );
}

export default ScrollToTop;