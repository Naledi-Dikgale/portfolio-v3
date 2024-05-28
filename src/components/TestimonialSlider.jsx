import React, { useState, useEffect, useContext } from 'react';
import TestimonialCard from '../Cards/TestimonialCard';
import { FaForwardFast, FaBackwardFast } from "react-icons/fa6";
import { ThemeContext } from '../ThemeContext';

const TestimonialSlider = ({ testimonials }) => {
  const { theme } = useContext(ThemeContext);

  const getCardCount = () => {
    return 1;
  };

  const initialIndices = testimonials ? Array.from({ length: getCardCount()}, (_, i) => i % testimonials.length) : [];
  const [current, setCurrent] = useState(initialIndices);
  const [displayCount, setDisplayCount] = useState(getCardCount());
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrent(current.map(index => (index + 1) % testimonials.length));
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent(current.map(index => (index - 1 + testimonials.length) % testimonials.length));
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setDisplayCount(getCardCount());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (testimonials) {
      setCurrent(Array.from({ length: displayCount }, (_, i) => i % testimonials.length));
    }
  }, [displayCount, testimonials]);

  if (!testimonials || testimonials.length === 0) return null;

  return (
  <div className="pt-8 pb-8 flex flex-col justify-center items-center">
    <div className="flex justify-between items-center">
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', paddingLeft: '1em' }}>
        <button className={currentIndex === 0 ? 'focus' : ''} onClick={handlePrev}><FaBackwardFast fill={theme === 'dark' ? '#dbeafe' : '#93c5fd'} size="2em" /></button>
      </div>
      {current.map((index, i) => {
        const { icon: img, name, job, country, testimonial: description } = testimonials[index];
        return (
          <div key={i} className={`testimonial-card ${index === currentIndex ? 'slide-in' : 'slide-out'}`} style={{ flex: 2 }}>
            <TestimonialCard
              img={img}
              name={name}
              job={job}
              country={country}
              description={description}
              theme={theme}
            />
          </div>
        );
      })}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', paddingRight: '1em' }}>
        <button className={currentIndex === testimonials.length - 1 ? 'focus' : ''} onClick={handleNext}><FaForwardFast fill={theme === 'dark' ? '#dbeafe' : '#93c5fd'} size="2em" /></button>
      </div>
    </div>
    <div className="pagination mt-4">
      {testimonials.map((_, index) => (
        <div key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} />
      ))}
    </div>
  </div>
);
};

export default TestimonialSlider;