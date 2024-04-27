import React, { useContext } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiMediumFill } from "react-icons/ri";
import { ThemeContext } from '../ThemeContext';

function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <section id="about" className={`h-full mx-auto pb-16 pt-24 ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}>
      <h1 className={`font-agbalumo text-3xl font-bold mb-4 text-center ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
        About Me
      </h1>
      <div className="w-full h-auto space-y-4 max-w-3xl mx-auto">
        <p className="text-xl font-agbalumo pl-4 sm:pl-0">
            I love to design and code things from scratch.
            I can help you build a product, feature or website.
            Look through some of my work and experience!
            If you like what you see and have a project you need coded,
             don&apos;t hesitate to contact me.
        </p>
        <div className="flex justify-center space-x-4">
        <a href="https://github.com/Naledi-Dikgale" className="">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/naledi-dikgale/" className="">
            <FaLinkedin size={24} />
          </a>
          <a href="https://medium.com/@naledi1" className="">
            <RiMediumFill size={24} />
          </a>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://docs.google.com/document/d/1wR3kXk9uqbYAIzUEHH7A88pr0xJ_-VsMspL9PcTyViE/edit?usp=sharing" className={`px-4 py-2 border-2 rounded ${theme === 'light' ? 'border-secondary bg-button text-primary hover:bg-button hover:text-primary-light' : 'border-primary bg-button text-primary hover:bg-secondary-light hover:text-primary'}`}>Resume</a>
          <a href="https://naledi.netlify.app" className={`px-4 py-2 border-2 rounded ${theme === 'light' ? 'border-secondary bg-button text-primary hover:bg-button hover:text-primary-light' : 'border-primary bg-button text-primary hover:bg-secondary-light hover:text-primary'}`}>Portfolio</a>
        </div>
      </div>
    </section>
  );
}

export default About;