import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

function Intro() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`p-6 flex flex-col items-center justify-center h-screen mt-4 ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}>
      <div className="flex flex-row items-center justify-center mt-4 space-x-6">
        <div className="md:w-1/2 md:mt-0 mt-4 px-4 flex flex-col items-center justify-center">
          <h1 className={`text-4xl text-center font-agbalumo font-bold mb-4 ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
            Hello, I'm Naledi
          </h1>
          <p className={`text-center font-agbalumo font-bold text-xl mb-4 ${theme === 'light' ? 'text-secondary' : 'text-secondary-light'}`}>
          Your one-stop destination for 
             turning ideas into pixel-perfect
              reality. I craft digital dreams with code! With a toolbox filled with React,
              Rails, Tailwind, and MySQL, I&apos;m on a mission to create
              awe-inspiring web experiences that leave a lasting
              impression. Let&apos;s turn your vision into a digital masterpiece!
          </p>
          <a href="https://naledi.netlify.app" className={`px-4 py-2 border-2 rounded ${theme === 'light' ? 'border-secondary bg-button text-primary hover:bg-button hover:text-primary-light' : 'border-primary bg-button text-primary hover:bg-secondary-light hover:text-primary'}`}>Hire Me</a>
        </div>
        <div className="flex flex-col items-center justify-center relative hidden md:block">
          <img src="profile0.png" alt="Profile" className="mb-6 w-full max-w-xs" />
          <div className={`absolute bottom-0 w-full h-3/4 ${theme === 'light' ? 'bg-primary' : 'bg-secondary'} transform skew-y-45 translate-y-48`}></div>
        </div>
      </div>
    </section>
  );
}

export default Intro;