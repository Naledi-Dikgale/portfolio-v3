import React, { useContext } from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaMapPin } from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext';

const Contact = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="contact" className={`w-screen min-h-screen flex flex-col justify-center items-center pt-24 md:pt-20 bg-cover bg-center ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`} style={{ backgroundImage: 'url(/book.png)' }}>
      <h2 className={`text-3xl font-agbalumo font-bold mb-4 ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>Contact</h2>
      <div className="flex flex-col md:flex-row justify-between w-full max-w-screen-lg mx-auto bg-white bg-opacity-50 p-4 rounded-lg">
        <div className="flex flex-col space-y-4">
          <a href="https://instagram.com" className="flex items-center space-x-2 hover:text-button font-agbalumo">
            <FaInstagram size={24} />
            <span>Instagram</span>
          </a>
          <a href="https://linkedin.com" className="flex items-center space-x-2 hover:text-button font-agbalumo">
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a href="https://facebook.com" className="flex items-center space-x-2 hover:text-button font-agbalumo">
            <FaFacebook size={24} />
            <span>Facebook</span>
          </a>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2 hover:text-button font-agbalumo">
            <FaEnvelope size={24} />
            <p>Email: email@audioWise.co.za</p>
          </div>
          <div className="flex items-center space-x-2 hover:text-button font-agbalumo">
            <FaPhone size={24} />
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="flex items-center space-x-2 font-agbalumo">
            <FaMapPin size={24} className="text-red-700" />
            <p className="hover:text-button">
              Address: 123 Naledi Street
              Cape Town, North, 9745, South Africa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;