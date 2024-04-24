import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ThemeContext';

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

  useEffect(() => {
    // Fetch data from LinkedIn API
    fetch('https://api.linkedin.com/v2/recommendations')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <section className={`p-6 flex flex-col items-center justify-center h-screen ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}>
      <h1 className={`font-agbalumo font-bold text-4xl text-center ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
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
    </section>
  );
}

export default Testimonials;