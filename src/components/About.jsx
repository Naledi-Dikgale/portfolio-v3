import React, { useContext, useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { RiMediumFill } from "react-icons/ri";
import { ThemeContext } from '../ThemeContext';
import { motion } from "framer-motion";

function About() {
  const { theme } = useContext(ThemeContext);
  const [linecolor, setlinecolor] = useState(theme === "light" ? "#23283e" : "#fcfcfc");

  useEffect(() => {
    if (theme === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [theme]);

  return (
    <section id="about" className={`h-full mx-auto pb-16 pt-24 px-12 ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-gradient-to-r from-slate-800 via-slate-850 to-slate-900 text-primary'}`}>
      <h1 className={`font-agbalumo text-3xl font-bold mb-4 text-center ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
        About Me
      </h1>
      <div className="w-full h-auto space-y-4 max-w-3xl mx-auto">
        <p className={`text-center font-andika text-xl mb-4 ${theme === 'light' ? 'text-secondary' : 'text-secondary-light'}`}>
          I love to design and code things from scratch.
          I can help you build a product, feature or website.
          Look through some of my work and experience!
          If you like what you see and have a project you need coded,
          don&apos;t hesitate to contact me.
        </p>
        <div className="border-t-2 border-b-2 border-gray-300 py-4">
          <h3 className="text-center font-bold">
            Software Engineer
          </h3>
          <h4 className="text-center text-gray-500">
            Microverse
          </h4>
          <p className="text-center">
            Spend 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux.
            Developed skills in remote pair programming using GitHub, industry-standard git-flow, and daily standups to communicate and collaborate with international remote developers. 
          </p>
        </div>
        <div className="border-t-2 border-b-2 border-gray-300 py-4">
          <h3 className="text-center font-bold">
            Student Mentor
          </h3>
          <h4 className="text-center text-gray-500">
            Microverse
          </h4>
          <p className="text-center">
            Mentor two junior web developers every week through Zoom and Slack, offering valuable guidance and support through code reviews and regular feedback sessions.
            Provide motivational advice and strategies, resulting in a 10% increase in program completion rates and improved participant retention amongst two previously discouraged mentees.
          </p>
        </div>
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
          <motion.a href="https://docs.google.com/document/d/1wR3kXk9uqbYAIzUEHH7A88pr0xJ_-VsMspL9PcTyViE/edit?usp=sharing" className={`px-4 py-2 border-2 rounded-full ${theme === 'light' ? 'bg-gradient-to-r from-rose-500 via-pink-400 to-pink-800 text-primary hover:bg-secondary-light hover:text-primary font-bold text-center text-lg' : 'bg-gradient-to-r from-rose-500 via-pink-400 to-pink-800 text-primary hover:bg-secondary-light hover:text-primary font-bold text-center text-lg'}`}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255, 182, 193)" }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          >
            Resume
          </motion.a>
          <motion.a href="https://naledi.netlify.app" className={`px-4 py-2 border-2 rounded-full ${theme === 'light' ? 'bg-gradient-to-r from-rose-500 via-pink-400 to-pink-800 text-primary hover:bg-secondary-light hover:text-primary font-bold text-center text-lg' : 'bg-gradient-to-r from-rose-500 via-pink-400 to-pink-800 text-primary hover:bg-secondary-light hover:text-primary font-bold text-center text-lg'}`}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255, 182, 193)" }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          >
            Portfolio
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default About;