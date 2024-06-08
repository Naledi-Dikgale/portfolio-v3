import React, { useContext } from 'react';
import { FaLinkedin, FaEnvelope, FaMapPin, FaGithub } from 'react-icons/fa';
import { RiMediumFill } from "react-icons/ri";
import { ThemeContext } from '../ThemeContext';

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="contact" className={`relative w-screen h-auto pt-28 pb-28 flex flex-col justify-center items-center md:pt-4 bg-cover bg-center ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-gradient-to-r from-slate-800 via-slate-850 to-slate-900 text-primary'}`} 
    style={{ backgroundImage: 'url(/contact.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundOrigin: 'border-box',
    backgroundRepeat: 'no-repeat',
     }}
    >
       <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: theme === 'light' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(55, 65, 81, 0.5)',
        zIndex: 1,
      }}></div>
      <h2 className={`text-4xl font-agbalumo font-bold mt-1 mb-12 ${theme === 'light' ? 'text-secondary' : 'text-primary'}`} style={{ position: 'relative', zIndex: 2 }}>Say Hello!</h2>
      <div className="flex flex-col md:flex-row justify-between w-8/12 max-w-screen-lg mx-auto px-8 md:px-16" style={{ position: 'relative', zIndex: 2 }}>
        <div className="flex flex-col space-y-4 border-r-2 border-gray-300 pr-4">
          <a href="https://github.com/Naledi-Dikgale" className="flex items-center space-x-2 hover:text-button font-agbalumo">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/naledi-dikgale/" className="flex items-center space-x-2 hover:text-button font-agbalumo">
            <FaLinkedin size={24} />
          </a>
          <a href="https://medium.com/@naledi1" className="flex items-center space-x-2 hover:text-button font-agbalumo">
            <RiMediumFill size={24} />
          </a>
        </div>

        <div className="flex flex-col space-y-4 pl-4">
          <p className="font-bold text-xl font-andika sm:w-full">I can't wait to hear you out! Whether it's about employment, a collaboration opportunity, a bug in my code or just a simple coffee chat, I'm excited to connect.</p>
          <a href="mailto:nalediaccc@gmail.com" className="flex items-center space-x-2 hover:text-button font-agbalumo">
            <FaEnvelope size={24} />
          </a>
          <div className="flex items-center space-x-2 hover:text-button font-agbalumo">
            <FaMapPin size={24} />
            <p className="hover:text-button">
              Cape Town, South Africa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;