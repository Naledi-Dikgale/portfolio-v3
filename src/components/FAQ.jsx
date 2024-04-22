import React, { useState, useContext } from 'react';
import FAQ_DATA from '../constants';
import { ThemeContext } from '../ThemeContext';

function FAQ() {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(Array(FAQ_DATA.length).fill(false));

  const toggleAccordion = (index) => {
    const newOpenState = [...isOpen];
    newOpenState[index] = !newOpenState[index];
    setIsOpen(newOpenState);
  };

  return (
    <div id="questions" className={`h-screen max-w-xl mx-auto pb-8 pt-24 ${theme === 'light' ? 'text-secondary' : ' text-primary'}`}>
      <h1 className={`font-agbalumo text-3xl font-bold mb-4  underline-double ${theme === 'light' ? 'underline-primary text-secondary' : 'underline-secondary text-secondary'}`}>
        FAQ
      </h1>
      <div className="w-full h-auto space-y-4">
        {FAQ_DATA.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleAccordion(index)}
              className={`flex justify-between w-full px-4 py-2 ${theme === 'light' ? 'bg-secondary-light text-primary hover:bg-button hover:text-primary-light' : 'bg-secondary-light text-primary-light hover:bg-button hover:text-secondary-light'} focus:outline-none`}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span>{isOpen[index] ? '-' : '+'}</span>
            </button>
            {isOpen[index] && (
              <div className={`px-4 py-2 ${theme === 'light' ? 'bg-primary-light text-secondary-light' : 'bg-secondary-light text-primary-light'}`}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;