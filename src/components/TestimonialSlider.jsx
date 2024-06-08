import React, { useState, useEffect, useContext } from 'react';
import TestimonialCard from '../Cards/TestimonialCard';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
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
    <div className="flex justify-between items-center w-full">
      <div className="flex justify-start pl-2 md:pl-1">
        <button className={currentIndex === 0 ? 'focus' : ''} onClick={handlePrev}><MdArrowBackIos fill={theme === 'dark' ? '#dbeafe' : '#94a3b8'} size="2em" /></button>
      </div>
      <div className="flex-1 flex justify-center">
        {current.map((index, i) => {
          const { icon: img, name, job, country, testimonial: description } = testimonials[index];
          return (
            <div key={i} className={`testimonial-card `}>
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
      </div>
      <div className="flex justify-end pr-2 md:pr-1">
        <button className={currentIndex === testimonials.length - 1 ? 'focus' : ''} onClick={handleNext}><MdArrowForwardIos fill={theme === 'dark' ? '#dbeafe' : '#94a3b8'} size="2em" /></button>
      </div>
    </div>
    <div className="pagination mt-8">
      {testimonials.map((_, index) => (
        <div key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} />
      ))}
    </div>
  </div>
);
};

export default TestimonialSlider;