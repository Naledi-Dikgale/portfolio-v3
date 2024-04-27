import React, { useState, useContext } from 'react';
import FAQ_DATA from '../constants';
import { ThemeContext } from '../ThemeContext';
import { RiQuestionAnswerFill } from "react-icons/ri";

function FAQ() {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(Array(FAQ_DATA.length).fill(false));

  const toggleAccordion = (index) => {
    const newOpenState = [...isOpen];
    newOpenState[index] = !newOpenState[index];
    setIsOpen(newOpenState);
  };

  return (
    <div id="questions" className={` h-fit pb-16 pt-28 ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}>
      <h1 className={`font-agbalumo text-3xl font-bold mb-4 text-center underline-double ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
        FAQ
      </h1>
      <div className="w-full h-auto space-y-4 max-w-3xl mx-auto">
        {FAQ_DATA.map((faq, index) => (
          <div key={index}>
            <button
              onClick={() => toggleAccordion(index)}
              className={`flex justify-between w-full px-4 py-2 text-xl font-agbalumo ${theme === 'light' ? 'bg-secondary text-primary hover:bg-button hover:text-primary' : 'bg-primary text-secondary hover:bg-button hover:text-primary'} focus:outline-none`}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span>{isOpen[index] ? '-' : '+'}</span>
            </button>
            {isOpen[index] && (
              <div className={`px-4 py-2 text-xl font-agbalumo ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={`flex justify-center mt-4 ${theme === 'light' ? 'text-button' : 'text-button'}`}>
        {[...Array(3)].map((_, i) => (
          <RiQuestionAnswerFill key={i} className="text-4xl mx-2" />
        ))}
      </div>
    </div>
  );
}

export default FAQ;