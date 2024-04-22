import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeContext } from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme}`}>
        <Navbar />
        <Intro />
        <Features />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;