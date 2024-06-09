import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { motion } from "framer-motion";

function Intro() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`sm:h-screen ss:h-auto md:h-auto pt-32 md:pt-16 pb-12 p-6 flex flex-col items-center justify-center ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-gradient-to-r from-slate-800 via-slate-850 to-slate-900 text-primary'}`}>
      <div className="flex flex-row items-center justify-center mt-4 space-x-6">
        <div className="md:w-1/2 md:mt-0 mt-4 px-4 flex flex-col md:pl-8 ">
          <h1 className={`text-4xl font-agbalumo font-bold mb-4 ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
          <span className="text-button">Hello,</span> I'm Naledi
          </h1>
          <p className={` font-andika text-xl mb-4 ${theme === 'light' ? 'text-secondary' : 'text-secondary-light'}`}>
          Your one-stop destination for 
             turning ideas into pixel-perfect
              reality. I craft digital dreams with code! With a toolbox filled with React,
              Rails, Tailwind, and MySQL, I&apos;m on a mission to create
              awe-inspiring web experiences that leave a lasting
              impression. Let&apos;s turn your vision into a digital masterpiece!
          </p>
            <motion.div className=""
            whileHover={{ scale: 1.1}}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
            >
              <a 
                href="https://naledi.netlify.app" 
                className={`px-4 py-2 p-2 border-2 rounded-full font-bold text-lg ${theme === 'light' ? 'bg-gradient-to-r from-rose-500 via-pink-400 to-pink-800 text-primary hover:bg-secondary-light hover:text-primary font-bold text-center text-lg' : 'bg-gradient-to-r from-rose-500 via-pink-400 to-pink-800 text-primary hover:bg-secondary-light hover:text-primary font-bold text-center'}`}
                
              >
                Hire Me
              </a>
            </motion.div>
        </div>
         <div className="flex flex-col items-center justify-center relative hidden md:block rounded-full border-1 overflow-hidden transform scale-50 ">
          <div className="flex items-center justify-center diagonal-lines">
            <img src="prof.png" alt="Profile" className="mt-12 w-full h-full " />
          </div>
            <div className={`w-full ${theme === 'light' ? 'bg-primary' : 'bg-secondary'}`}></div>
          </div>
      </div>
    </section>
  );
}

export default Intro;