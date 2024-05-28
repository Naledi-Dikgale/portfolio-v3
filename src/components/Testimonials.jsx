import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FaThumbsUp, FaStar } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import TestimonialSlider from './TestimonialSlider';


// Mock data
const mockData = [
  {
    name: "Zuwaira Sadiq",
    testimonial: "I wholeheartedly recommend Naledi Dikgale, an exceptional mentor and software engineer. Her profound expertise and passion have greatly advanced my full-stack development skills. Naledi's ability to demystify complex concepts and her mastery of technologies like JavaScript and React have significantly impacted my professional growth. Her exceptional ability to foster team collaboration and her dedication to excellence were evident when we worked on projects together. She creates an inclusive environment that nurtures innovation and ensures every team member feels valued."
    ,
    icon: 'test.png',
    job: "Full-Stack Developer",
    country: "Nigeria"
  },
  {
    name: 'Kaleb Bekele',
    testimonial: "Naledi is a standout JavaScript developer who consistently impressed me with her skills and dedication. Throughout our project, she demonstrated a deep understanding of JavaScript's intricacies and an innate ability to solve complex problems efficiently. What truly set Naledi apart was her collaborative spirit and excellent teamwork. She was always ready to brainstorm ideas, provide valuable insights, and offer a helping hand when needed. Her ability to communicate clearly and work seamlessly within our team significantly contributed to our project's success.",
    icon: 'testa.png',
    job: "Full-Stack Developer",
    country: 'Ethiopia'
  },
  {
    name: 'Alice Smith',
    testimonial: 'Fantastic service!',
    icon: 'test(2).png',
    job: "Full-Stack Developer",
    country: 'UK'
  },
  {
    name: 'Bob Johnson',
    testimonial: 'Loved the final product!',
    icon: 'test(4).png',
    job: "Full-Stack Developer",
    country: 'Australia'
  },
  {
    name: 'Charlie Brown',
    testimonial: 'Very professional!',
    icon: 'test(2).png',
    job: "Full-Stack Developer",
    country: 'Germany'
  },
  {
    name: 'David Williams',
    testimonial: 'Highly recommend!',
    icon: 'test(2).png',
    job: "Full-Stack Developer",
    country: 'France'
  }
];


function Testimonials() {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState(mockData);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <section className={`p-3 flex flex-col items-center justify-center h-full ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-gradient-to-r from-slate-800 via-slate-850 to-slate-900 text-primary'}`}>
      <div className="flex flex-col items-center justify-between">
        <div>
          <h1 className={`font-agbalumo font-bold text-4xl text-center mb-8 ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
            Testimonials
          </h1>
      {/* {data.map((item, index) => (
        <span key={index} className="text-center mt-4">
          <div className="flex flex-col items-center pb-4">
            <img src={item.icon} alt={item.name} className="w-12 h-12 rounded-full mx-auto"/>
            <h2 className="font-agbalumo text-xl">{item.name}</h2>
          </div>
          <p className="font-lobster text-lg">{item.testimonial}</p>
        </span>
      ))} */}

      <TestimonialSlider testimonials={data} />
    </div>
    <div className={`flex ${isSmallScreen ? 'justify-center' : 'justify-end'} mb-4 pt-8`}>
      <FaThumbsUp className={`text-2xl ${theme === 'light' ? 'text-button' : 'text-button'}`} />
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={`text-2xl ml-2 ${theme === 'light' ? 'text-button' : 'text-button'}`} />
      ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;