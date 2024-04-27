import React, { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FaBars, FaTimes } from 'react-icons/fa';
import Switch from "react-switch";
import { BsLightbulb, BsLightbulbOff } from 'react-icons/bs';

function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);

  const toggleTheme = (checked) => {
    setTheme(checked ? 'dark' : 'light');
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <nav className={`p-6 fixed w-full top-0 z-50 border-b-2 ${theme === 'light' ? 'bg-primary' : 'bg-secondary'}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="font-agbalumo text-2xl">
            <img src="/logo.png" alt="Logo" className="inline-block rounded-full p-1 h-12" />
          </span>
          <span className={`font-lobster font-bold text-xl ${theme === 'light' ? 'text-primary-dark' : 'text-primary'}`}>NALEDI</span>
        </div>
        <div className={`hidden md:flex space-x-4 font-agbalumo font-bold text-xl  ${theme === 'light' ? 'border-primary-light text-primary-dark' : 'border-secondary-light text-secondary-light'}`}>
          <a href="/" className="text-button">Home</a>
          <a href="#about" className="text-button">About</a>
          <a href="#contact" className="text-button">Contact</a>
        </div>
        <div className="flex items-center space-x-2">
          <Switch 
            onChange={toggleTheme} 
            checked={theme === 'dark'} 
            offColor="#ec4899" 
            onColor="#fff" 
            checkedIcon={<BsLightbulb color="#1e293b" />} 
            uncheckedIcon={<BsLightbulbOff color="#fff" />} 
            height={20} 
            width={48} 
            handleDiameter={24} 
            offHandleColor="#1e293b"
            onHandleColor="#ec4899"
          />
          <FaBars className={`md:hidden ${theme === 'light' ? 'text-primary-dark' : 'text-secondary-light'}`} onClick={toggleModal} />
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center md:hidden">
          <div className="bg-white rounded-lg p-6 w-full h-full flex flex-col justify-center items-center">
            <FaTimes className="text-4xl font-bold" onClick={toggleModal} />
            <div className="flex flex-col space-y-4 mt-4 font-agbalumo font-bold text-3xl p-4">
              <a href="/" className="text-button border-2 border-black p-2">Home</a>
              <a href="#about" className="text-button border-2 border-black p-2">About</a>
              <a href="#contact" className="text-button border-2 border-black p-2">Contact</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;