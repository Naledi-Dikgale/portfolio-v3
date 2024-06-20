import React, { useEffect, useContext } from 'react';
import GitHubCalendar from 'react-github-calendar';
import { ThemeContext } from '../ThemeContext';
import { FaReact, FaHtml5, FaCss3, FaJs, FaSass, FaGit, FaGithub } from 'react-icons/fa';
import { SiRuby, SiRubyonrails, SiRedux, SiTailwindcss, SiDaisyui, SiTypescript, SiEslint, SiPostman, SiPostgresql, SiMysql, SiWebpack } from 'react-icons/si';

const techStackIcons = {
  'React': <FaReact />,
  'Ruby': <SiRuby />,
  'Rails': <SiRubyonrails />,
  'Tailwind': <SiTailwindcss />,
  'Html': <FaHtml5 />,
  'CSS': <FaCss3 />,
  'JavaScript': <FaJs />,
  'SASS': <FaSass />,
  'Redux': <SiRedux />,
  'TypeScript': <SiTypescript />,
  'MySQL': <SiMysql />,
  'Daisyui': <SiDaisyui />,
  'Webpack': <SiWebpack />,
  'Eslint': <SiEslint />,
  'Postman': <SiPostman />,
  'Postgresql': <SiPostgresql />,
  'Git': <FaGit />,
  'Github': <FaGithub />
};

const selectLastYear = contributions => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 12;

  return contributions.filter(activity => {
    const date = new Date(activity.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

function Skills() {
  const { theme } = useContext(ThemeContext);
  const techStack = [
    'React', 'Ruby', 'Rails', 'Tailwind', 'Html', 'CSS', 'JavaScript', 'SASS', 'Redux', 'TypeScript', 'MySQL', 'Eslint', 'Postman', 'Postgresql', 'Git', 'Github'
  ];

  const customTheme = {
    background: 'transparent',
    text: theme === 'light' ? '#000' : '#fff',
    light: ['#fbcfe8', '#f472b6', '#db2777', '#9d174d', '#500724'],
    dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
  };

  return (
    <section className={`md:w-full h-auto p-6 flex flex-col items-center justify-center pb-8 ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-gradient-to-r from-slate-800 via-slate-850 to-slate-900 text-primary'}`}>
      <h1 className={`font-agbalumo text-4xl text-center mb-12 ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
        Tools and Technologies
      </h1>
      <div className="md:w-[40%] h-auto grid grid-cols-3 md:grid-cols-4 gap-y-2 gap-x-2 md:gap-x-4 lg:gap-x-2 items-center justify-center">
        {techStack.map((tech, index) => (
          <div key={index} className={`w-20 h-20 flex flex-col items-center justify-center ${theme === 'light' ? 'bg-gradient-to-r from-slate-100 to-slate-300' : 'bg-gradient-to-r from-slate-600 to-slate-900'} shadow-md rounded-lg p-4`}>
            <div className="flex items-center justify-center">
              {techStackIcons[tech]}
            </div>
            <p className={`mt-2 text-center px-6 text-sm font-andika ${theme === 'light' ? 'text-gray-700' : 'text-primary'}`}>{tech}</p>
          </div>
        ))}
      </div>
      <h2 className={`font-tang text-3xl font-bold text-center mt-12 p-6 ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
        How often I write code
      </h2>
      <GitHubCalendar 
        username="Naledi-Dikgale" 
        transformData={selectLastYear} 
        colorScheme='light'
        labels={{
          totalCount: '{{count}} contributions in the last year',
        }}
        theme={customTheme}
      />
    </section>
  );
}

export default Skills;
