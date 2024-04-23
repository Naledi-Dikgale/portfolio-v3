import React, { useContext } from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext';

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`relative p-4 mt-16 md:mt-0 ${theme === 'light' ? 'bg-secondary text-primary' : 'bg-primary text-secondary'} rounded-tl-3xl`}>
      <div className={`absolute top-0 right-0 w-16 h-16 ${theme === 'light' ? 'bg-secondary' : 'bg-primary'} rounded-full`}></div>
      <div className="container mx-auto flex flex-wrap justify-center">
        {/*name and logo */}
        <div className="w-full md:w-1/4 text-center mb-4 md:mb-0 mt-4 md:mt-0">
          <h3 className="text-lg font-agbalumo">Naledi</h3>
          <div className="diamond-shape relative w-12 h-12 transform rotate-45 overflow-hidden mx-auto">
            <img src="/logo.png" alt="Logo" className="absolute inset-0 w-full h-full object-cover transform -rotate-45" />
          </div>
        </div>

        {/* Contacts */}
        <div className="w-full md:w-1/4 text-center mb-4 md:mb-0 mt-4 md:mt-0 font-agbalumo">
          <h3 className="text-lg ">Contacts</h3>
          <p className="mt-2">Email: email@naledi.co.za</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Naledi Street, Cape Town, North, 9745, South Africa</p>
        </div>

        {/* Copyright */}
        <div className="w-full md:w-1/4 text-center mt-4 md:mt-0 font-agbalumo">
          <p>&copy; 2024 Naledi. All rights reserved.
          <br />Designed by <a href="https://naledi.netlify.app" className="text-amber-300 font-bold hover:bg-amber-200 hover:text-cyan-950">Naledi Dikgale</a>
          </p>
          <div className="mt-2">
          </div>
        </div>
      </div>
      <hr className="border-t border-amber-200 mt-4 md:hidden" />

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 my-4 md:flex-row md:items-center md:justify-between">
        <hr className="hidden md:block border-t border-amber-200 w-1/4 md:mx-2" />
        <div className="flex space-x-4">
          <a href="https://instagram.com" className="text-amber-200 hover:text-amber-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" className="text-amber-200 hover:text-amber-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://facebook.com" className="text-amber-200 hover:text-amber-300">
            <FaFacebook size={24} />
          </a>
        </div>
        <hr className="hidden md:block border-t border-amber-200 w-1/4 md:mx-2" />
      </div>

      <hr className="border-t border-amber-200 mb-4 md:hidden" />
    </footer>
  );
}

export default Footer;