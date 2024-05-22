import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { motion } from "framer-motion";

function Intro() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`p-6 flex flex-col items-center justify-center h-screen mt-4 ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}>
      <div className="flex flex-row items-center justify-center mt-4 space-x-6">
        <div className="md:w-1/2 md:mt-0 mt-4 px-4 flex flex-col items-center justify-center">
          <h1 className={`text-4xl text-center font-agbalumo font-bold mb-4 ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
          <span className="text-button">Hello,</span> I'm Naledi
          </h1>
          <p className={`text-center font-agbalumo font-bold text-xl mb-4 ${theme === 'light' ? 'text-secondary' : 'text-secondary-light'}`}>
          Your one-stop destination for 
             turning ideas into pixel-perfect
              reality. I craft digital dreams with code! With a toolbox filled with React,
              Rails, Tailwind, and MySQL, I&apos;m on a mission to create
              awe-inspiring web experiences that leave a lasting
              impression. Let&apos;s turn your vision into a digital masterpiece!
          </p>
          <motion.a 
            href="https://naledi.netlify.app" 
            className={`w-1/4 h-12 p-2 border-2 rounded ${theme === 'light' ? 'bg-gradient-to-r from-rose-500 via-pink-400 to-pink-800 text-primary hover:bg-secondary-light hover:text-primary font-bold text-center text-lg' : 'bg-gradient-to-r from-rose-500 via-pink-400 to-pink-800 text-primary hover:bg-secondary-light hover:text-primary font-bold text-center text-lg'}`}
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255, 182, 193)" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Hire Me
          </motion.a>
        </div>
         <div className="flex flex-col items-center justify-center relative hidden md:block rounded-full border-1 overflow-hidden transform scale-50">
          <div className="flex items-center justify-center">
            <img src="prof.png" alt="Profile" className="mt-12 w-full h-full " />
          </div>
            <div className={`w-full ${theme === 'light' ? 'bg-primary' : 'bg-secondary'}`}></div>
          </div>
      </div>
    </section>
  );
}

export default Intro;