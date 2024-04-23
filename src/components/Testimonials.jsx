import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ThemeContext';

// Mock data
const mockData = [
  {
    name: 'John Doe',
    testimonial: 'Great work!'
  },
  {
    name: 'Jane Doe',
    testimonial: 'Excellent job!'
  }
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
      <h1 className={`font-agbalumo text-4xl text-center ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
        Testimonials
      </h1>
      {data.map((item, index) => (
        <div key={index} className="text-center mt-4">
          <h2 className="font-agbalumo text-lg">{item.name}</h2>
          <p>{item.testimonial}</p>
        </div>
      ))}
    </section>
  );
}

export default Testimonials;