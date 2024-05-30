import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FaReact, FaHtml5, FaCss3, FaJs, FaSass, FaGit, FaGithub } from 'react-icons/fa';
import { SiRuby, SiRubyonrails, SiRedux, SiTailwindcss, SiDaisyui, SiTypescript, SiEslint, SiPostman, SiPostgresql, SiMysql, SiWebpack } from 'react-icons/si';

const techStackIcons = {
  'React': <FaReact />,
  // 'Ruby': <SiRuby />,
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
  'Webpack': <SiWebpack/>,
  'Eslint': <SiEslint />,
  'Postman': <SiPostman />,
  'Postgresql': <SiPostgresql />,
  'Git': <FaGit />,
  'Github': <FaGithub />
};

function Skills() {
  const { theme } = useContext(ThemeContext);
  const techStack = [
    'React', 'Ruby', 'Rails', 'Tailwind', 'Html', 'CSS', 'JavaScript', 'SASS', 'Redux', 'TypeScript', 'MySQL', 'Eslint', 'Postman', 'Postgresql', 'Git', 'Github'
  ];

  return (
    <section className={`md:w-full h-auto p-6 flex flex-col items-center justify-center ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-gradient-to-r from-slate-800 via-slate-850 to-slate-900 text-primary'}`}>
      <h1 className={`font-agbalumo font-bold text-4xl text-center mb-12 ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
        Tools and Technologies
      </h1>
      <div className="md:w-[40%] h-auto grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
        {techStack.map((tech, index) => (
          <div key={index} className={`w-20 h-20 flex flex-col items-center justify-center ${theme === 'light' ?'bg-gradient-to-r from-slate-100 to-slate-300' : 'bg-gradient-to-r from-slate-600 to-slate-900'} shadow-md rounded-lg p-4`}>
            <div className="flex items-center justify-center">
              {techStackIcons[tech]}
            </div>
            <p className={`mt-2 text-center px-6 text-sm font-andika ${theme === 'light' ? 'text-gray-700' : 'text-primary'} `}>{tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;