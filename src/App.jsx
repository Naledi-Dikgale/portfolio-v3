import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeContext } from './ThemeContext';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme}`} style={{
        backgroundImage: `url(/pattern.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        // backgroundBlendMode: 'soft-light',
        backgroundPosition: 'center',
        backgroundOrigin: 'border-box',
        // backgroundPosition: 'center',
        // backgroundPositionY: 'center',
        zIndex: 9999
      }}>
        <Navbar />
        <Intro />
        {/* <Features /> */}
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;