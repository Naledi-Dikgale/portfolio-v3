import React, { useContext } from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext';
import { RiMediumFill } from "react-icons/ri";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`relative p-4 pt-16 md:mt-0 ${theme === 'light' ? 'bg-secondary text-primary' : 'bg-primary text-secondary'} rounded-tl-3xl`}>
      <div className={`absolute top-0 right-0 w-16 h-16 ${theme === 'light' ? 'bg-secondary' : 'bg-primary'} rounded-full`}></div>
      <div className="container mx-auto flex flex-wrap justify-center">
        {/*name and logo */}
        <div className="w-full md:w-1/4 text-center mb-4 md:mb-0 mt-4 md:mt-0">
          <h3 className="text-lg font-agbalumo">Naledi</h3>
          <div className="diamond-shape relative w-12 h-12  overflow-hidden mx-auto">
            <img src="/logo.png" alt="Logo" className="absolute inset-0 w-full h-full object-cover " />
          </div>
        </div>

        {/* Contacts */}
        <div className="w-full md:w-1/4 text-center mb-4 md:mb-0 mt-4 md:mt-0 font-agbalumo">
          <h3 className="text-lg ">Contacts</h3>
          <p className="mt-2">Email: nalediaccc@mail.com</p>
          {/* <p>Phone: 123-456-7890</p> */}
          <p>Location: Cape Town, South Africa</p>
        </div>

        {/* Copyright */}
        <div className="w-full md:w-1/4 text-center mt-4 md:mt-0 font-agbalumo">
          <p>&copy; 2024 Naledi. All rights reserved.
          <br />Designed by <a href="https://naledi.netlify.app" className="text-button font-bold hover:text-secondary-light">Naledi Dikgale</a>
          </p>
          <div className="mt-2">
          </div>
        </div>
      </div>
      <hr className="border-t border-secondary-light mt-4 md:hidden" />

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 my-4 md:flex-row md:items-center md:justify-between">
        <hr className={`hidden md:block border-t ${theme === 'light' ? 'border-primary' : 'border-secondary'} w-1/4 md:mx-2`} />
        <div className="flex space-x-4">
          <a href="https://github.com/Naledi-Dikgale" className={`${theme === 'light' ? 'text-primary' : 'text-secondary'} hover:text-button`}>
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/naledi-dikgale/" className={`${theme === 'light' ? 'text-primary' : 'text-secondary'} hover:text-button`}>
            <FaLinkedin size={24} />
          </a>
          <a href="https://medium.com/@naledi1" className={`${theme === 'light' ? 'text-primary' : 'text-secondary'} hover:text-button`}>
            <RiMediumFill size={24} />
          </a>
        </div>
        <hr className={`hidden md:block border-t ${theme === 'light' ? 'border-primary' : 'border-secondary'} w-1/4 md:mx-2`} />
      </div>

      <hr className={`border-t ${theme === 'light' ? 'border-primary' : 'border-secondary'} mb-4 md:hidden`} />
    </footer>
  );
}

export default Footer;