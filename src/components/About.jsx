import React, { useContext } from 'react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { ThemeContext } from '../ThemeContext';

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="about" className={`h-screen mx-auto pb-8 pt-24 ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}>
      <h1 className={`font-agbalumo text-3xl font-bold mb-4 text-center underline-double ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
        About Me
      </h1>
      <div className="w-full h-auto space-y-4 max-w-3xl mx-auto">
        <p className="text-lg font-agbalumo">I love to design and code things from scratch.
            I can help you build a product, feature or website. Look through some of my work and experience!
            If you like what you see and have a project you need coded, don&apos;t hesitate to contact me.
        </p>
        <div className="flex justify-center space-x-4">
          <FaInstagram size={24} />
          <FaLinkedin size={24} />
          <FaFacebook size={24} />
        </div>
        <div className="flex justify-center space-x-4">
          <a href="resume.pdf" className={`px-4 py-2 border-2 rounded ${theme === 'light' ? 'border-secondary bg-button text-primary hover:bg-button hover:text-primary-light' : 'border-primary bg-button text-primary hover:bg-secondary-light hover:text-primary'}`}>Resume</a>
          <a href="https://portfolio.netlify.app" className={`px-4 py-2 border-2 rounded ${theme === 'light' ? 'border-secondary bg-button text-primary hover:bg-button hover:text-primary-light' : 'border-primary bg-button text-primary hover:bg-secondary-light hover:text-primary'}`}>Portfolio</a>
        </div>
      </div>
    </section>
  );
}

export default About;