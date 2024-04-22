import React, { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <nav className={`p-6 fixed w-full top-0 z-50 ${theme === 'light' ? 'bg-primary' : 'bg-secondary'}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="font-agbalumo text-2xl">Logo</span>
          <span className="font-agbalumo text-2xl">NALEDI</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-button">Home</a>
          <a href="/about" className="text-button">About</a>
          <a href="/contact" className="text-button">Contact</a>
        </div>
        <div className="flex items-center space-x-2">
          <button onClick={toggleTheme} className="p-2 rounded-full">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
          <FaBars className="md:hidden" onClick={toggleModal} />
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center md:hidden">
          <div className="bg-white rounded-lg p-6">
            <FaTimes onClick={toggleModal} />
            <div className="flex flex-col space-y-4 mt-4">
              <a href="/" className="text-button">Home</a>
              <a href="/about" className="text-button">About</a>
              <a href="/contact" className="text-button">Contact</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;