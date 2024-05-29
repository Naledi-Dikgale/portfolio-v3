import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FaThumbsUp, FaStar } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import TestimonialSlider from './TestimonialSlider';


const mockData = [
  {
    name: 'Kaleb Bekele',
    testimonial: "Naledi is a standout JavaScript developer who consistently impressed me with her skills and dedication. Throughout our project, she demonstrated a deep understanding of JavaScript's intricacies and an innate ability to solve complex problems efficiently. What truly set Naledi apart was her collaborative spirit and excellent teamwork. She was always ready to brainstorm ideas, provide valuable insights, and offer a helping hand when needed. Her ability to communicate clearly and work seamlessly within our team significantly contributed to our project's success.",
    icon: 'testa.png',
    job: "Full-Stack Developer",
    country: 'Ethiopia'
  },
  {
    name: 'Mucha Julius',
    testimonial: 'Not only is Naledi a talented developer, but she also possesses excellent communication skills, making her an asset to any team. She was always willing to lend a hand and provided valuable insights during our team discussions. I have no doubt that Naledi will make an excellent addition to any organization and would highly recommend her.',
    icon: 'mucha.PNG',
    job: "Full-Stack Developer",
    country: 'Kenya'
  },
  {
    name: "Zuwaira Sadiq",
    testimonial: "I wholeheartedly recommend Naledi Dikgale, an exceptional mentor and software engineer. Her profound expertise and passion have greatly advanced my full-stack development skills. Naledi's ability to demystify complex concepts and her mastery of technologies like JavaScript and React have significantly impacted my professional growth. Her exceptional ability to foster team collaboration and her dedication to excellence were evident when we worked on projects together. She creates an inclusive environment that nurtures innovation and ensures every team member feels valued."
    ,
    icon: 'test.png',
    job: "Full-Stack Developer",
    country: "Nigeria"
  },
  {
    name: 'Berhanu Baye',
    testimonial: 'I would like to recommend Naledi Dikgale, my remarkable coding partner.Her ability to analyze complex problems and devise elegant solutions is truly impressive, and she consistently demonstrates strong attention to detail in her work. Naledis exceptional communication and teamwork skills have greatly contributed to our effective collaboration, fostering a positive and dynamic work environment. Her passion for coding and continuous learning is evident in her proactive approach to staying up-to-date with the latest technologies and industry trends. I wholeheartedly recommend Naledi to any organization seeking a talented and dedicated coder who consistently delivers outstanding results.',
    icon: 'bran.PNG',
    job: "Full-Stack Developer",
    country: 'Addis Ababa, Ethiopia'
  },
  // {
  //   name: 'Charlie Brown',
  //   testimonial: 'Very professional!',
  //   icon: 'test(2).png',
  //   job: "Full-Stack Developer",
  //   country: 'Germany'
  // },
  // {
  //   name: 'David Williams',
  //   testimonial: 'Highly recommend!',
  //   icon: 'test(2).png',
  //   job: "Full-Stack Developer",
  //   country: 'France'
  // }
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
      <FaThumbsUp className={`text-2xl ${theme === 'light' ? 'text-slate-300' : 'text-pink-400'}`} />
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={`text-2xl ml-2 ${theme === 'light' ? 'text-slate-300' : 'text-pink-400'}`} />
      ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;