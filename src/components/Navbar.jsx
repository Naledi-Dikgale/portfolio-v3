import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className={`p-6 ${theme === 'light' ? 'bg-primary' : 'bg-secondary'}`}>
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="/" className="text-button">Home</a>
          <a href="/about" className="text-button">About</a>
          <a href="/contact" className="text-button">Contact</a>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={toggleTheme} className="p-2 rounded-full">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
          <FaBars className="md:hidden" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;