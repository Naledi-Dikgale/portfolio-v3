import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { projects } from '../projects';
import { FaReact } from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';

function getTechStackIcon(icon) {
  switch(icon) {
    case 'FaReact':
      return <FaReact />;
    case 'SiRails':
      return <SiRubyonrails />;
    case 'SiTailwindcss':
      return <SiTailwindcss />;
    default:
      return null;
  }
}

function Projects() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={` p-6 flex flex-col items-center justify-center ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-gradient-to-r from-slate-800 via-slate-850 to-slate-900 text-primary'}`}>
      <h1 className={`font-agbalumo text-4xl text-center ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
        My work
      </h1>
      <div className="md:w-7/12 h-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="card bg-transparent shadow-md rounded-lg p-4">
            <img className="w-[90%] h-[50%] object-cover rounded-t-lg" src={project.image} alt={project.title} />
            <h2 className="text-xl font-agbalumo font-bold text-center mt-2">{project.title}</h2>
            <p className="text-gray-700 mt-2 text-center px-8 font-andika">{project.description}</p>
            <div className="mt-4 text-center">
              <a className="text-button hover:underline" href={project.sourceCodeLink}>Source Code</a>
              <a className="ml-4 text-button hover:underline" href={project.liveLink}>Live Link</a>
            </div>
            <div className="flex mt-4 items-center justify-center">
              {project.techStack.map((icon, i) => (
                <div key={i} className="w-6 h-6 mr-2">
                  {getTechStackIcon(icon)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;