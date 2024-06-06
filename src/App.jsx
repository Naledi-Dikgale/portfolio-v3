import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import { ThemeContext } from './ThemeContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme === 'light' ? 'bg-primary' : 'bg-gradient-to-r from-slate-800 via-slate-850 to-slate-900'}`} style={{
       
      }}>
        <Navbar />
        <Intro />
        <Skills />
        <Testimonials />
        <About />
        <FAQ />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;