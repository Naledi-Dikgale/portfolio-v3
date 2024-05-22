import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FaThumbsUp, FaStar } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import TestimonialSlider from './TestimonialSlider';


// Mock data
const mockData = [
  {
    name: 'John Doe',
    testimonial: 'Great work!',
    icon: 'test(3).png',
    date: '2022-03-01',
    country: 'USA'
  },
  {
    name: 'Jane Doe',
    testimonial: 'Profound expertise and passion!',
    icon: 'test(1).png',
    date: '2022-02-15',
    country: 'Canada'
  },
  {
    name: 'Alice Smith',
    testimonial: 'Fantastic service!',
    icon: 'test(2).png',
    date: '2022-01-20',
    country: 'UK'
  },
  {
    name: 'Bob Johnson',
    testimonial: 'Loved the final product!',
    icon: 'test(4).png',
    date: '2022-03-05',
    country: 'Australia'
  },
  {
    name: 'Charlie Brown',
    testimonial: 'Very professional!',
    icon: 'test(2).png',
    date: '2022-02-28',
    country: 'Germany'
  },
  {
    name: 'David Williams',
    testimonial: 'Highly recommend!',
    icon: 'test(2).png',
    date: '2022-02-10',
    country: 'France'
  }
];


function Testimonials() {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState(mockData);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <section className={`p-3 flex flex-col items-center justify-center h-full ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}>
      <div className="flex flex-col flex-grow items-center justify-between">
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
    <div className={`flex ${isSmallScreen ? 'justify-center' : 'justify-end'} mb-4 pt-8 mr-4`}>
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