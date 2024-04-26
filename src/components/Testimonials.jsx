import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FaThumbsUp, FaStar } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';


// Mock data
const mockData = [
  {
    name: 'John Doe',
    testimonial: 'Great work!',
    icon: 'test(3).png'
  },
  {
    name: 'Jane Doe',
    testimonial: 'Profound expertise and passion!',
    icon: 'test(1).png'
  },
  {
    name: 'Alice Smith',
    testimonial: 'Fantastic service!',
    icon: 'test(2).png'
  },
  // {
  //   name: 'Bob Johnson',
  //   testimonial: 'Loved the final product!',
  //   icon: 'test(4).png'
  // },
  // {
  //   name: 'Charlie Brown',
  //   testimonial: 'Very professional!',
  //   icon: 'test(2).png'
  // },
  // {
  //   name: 'David Williams',
  //   testimonial: 'Highly recommend!',
  //   icon: 'test(2).png'
  // }
];

function Testimonials() {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState(mockData);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 600px)' });

  useEffect(() => {
    // Fetch data from LinkedIn API
    fetch('https://api.linkedin.com/v2/recommendations')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <section className={`p-3 flex flex-col items-center justify-center h-full ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}>
  <div className="flex flex-col flex-grow items-center justify-between">
    <div>
      <h1 className={`font-agbalumo font-bold text-4xl text-center mb-8 ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
        Testimonials
      </h1>
      {data.map((item, index) => (
        <span key={index} className="text-center mt-4">
          <div className="flex flex-col items-center">
            <img src={item.icon} alt={item.name} className="w-12 h-12 rounded-full mx-auto"/>
            <h2 className="font-agbalumo text-xl">{item.name}</h2>
          </div>
          <p className="font-lobster text-lg">{item.testimonial}</p>
        </span>
      ))}
    </div>
    <div className={`flex ${isSmallScreen ? 'justify-center' : 'justify-end'} mb-4 mr-4`}>
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