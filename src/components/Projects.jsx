import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { projects } from '../projects';
import { FaReact } from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { FaHtml5, FaCss3 } from 'react-icons/fa';

function getTechStackIcon(icon) {
  switch(icon) {
    case 'FaReact':
      return <FaReact />;
    case 'SiRails':
      return <SiRubyonrails />;
    case 'SiTailwindcss':
      return <SiTailwindcss />;
    case 'FaHtml5':
      return <FaHtml5 />;
    case 'FaCss3':
      return <FaCss3 />;  
    default:
      return null;
  }
}

function Projects() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`p-6 flex flex-col items-center justify-center ${theme === 'light' ? 'bg-primary text-secondary' : 'bg-gradient-to-r from-slate-800 via-slate-850 to-slate-900 text-primary'}`}>
      <h1 className={`font-agbalumo text-4xl text-center pb-4 ${theme === 'light' ? 'text-secondary' : 'text-primary'}`}>
        My work
      </h1>
      <div className="md:w-7/12 h-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="card bg-transparent shadow-md rounded-lg p-4 flex flex-col">
            <img className="w-full h-auto object-cover rounded-t-lg" src={project.image} alt={project.title} />
            <h2 className="text-xl font-agbalumo font-bold text-center mt-2">{project.title}</h2>
            <p className="text-gray-700 mt-2 text-center px-8 font-andika">{project.description}</p>
            <div className="mt-4 text-center flex flex-wrap justify-center">
              <a className="text-button hover:underline mr-4" href={project.sourceCodeLink}>Code</a>
              <a className="ml-4 text-button hover:underline" href={project.liveLink}>Live</a>
            </div>
            <div className="flex mt-4 items-center justify-center flex-wrap">
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