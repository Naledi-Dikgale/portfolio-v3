import React, { useState, useEffect, useContext } from "react";
import TestimonialCard from "../Cards/TestimonialCard";
import { TbArrowBigRightLines, TbArrowBigLeftLines } from "react-icons/tb";
import { ThemeContext } from "../ThemeContext";

const TestimonialSlider = ({ testimonials }) => {
  const { theme } = useContext(ThemeContext);

  const getCardCount = () => {
  const width = window.innerWidth;
  // if 
  // (width > 1200) {
  //   return 3;
  // } else
   if (width > 900) {
  //   return 2;
  // } else {
    return 1;
  }
};

const initialIndices = testimonials ? Array.from({ length: getCardCount() }, (_, i) => i % testimonials.length) : [];
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

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
  if (testimonials) {
    setCurrent(Array.from({ length: displayCount }, (_, i) => i % testimonials.length));
  }
}, [displayCount, testimonials]);
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="pt-8 pb-8 w-[90%] flex flex-col items-center" style={{ width: '50vw' }}>
      <div className="flex justify-between items-center w-full">
        <TbArrowBigLeftLines
          className={`text-${theme}-text-2 cursor-pointer`}
          onClick={handlePrev}
        />
        <div className="flex flex-wrap justify-center items-center w-full">
          {current.map((index, i) => {
            const { icon: img, name, country, date, testimonial: description } = testimonials[index];
            return (
              <TestimonialCard
                key={i}
                img={img}
                name={name}
                country={country}
                date={date}
                description={description}
                theme={theme}
              />
            );
          })}
        </div>
        <TbArrowBigRightLines
          className={`text-${theme}-text-2 cursor-pointer`}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default TestimonialSlider;