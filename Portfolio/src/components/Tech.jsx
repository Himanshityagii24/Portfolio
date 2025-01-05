import React, { useState } from 'react';
import reactIcon from '../assets/tech/reactjs.png';
import reduxIcon from '../assets/tech/redux.png';
import jsIcon from '../assets/tech/javascript.png';
import cssIcon from '../assets/tech/css.png';
import htmlIcon from '../assets/tech/html.png';
import tailwindIcon from '../assets/tech/tailwind.png';
import nodeIcon from '../assets/tech/nodejs.png';
import expressIcon from '../assets/tech/Express.png';
import sqlIcon from '../assets/tech/sql.png';
import mongodbIcon from '../assets/tech/mongodb.png';
import FirebaseIcon from '../assets/tech/Firebase.png';
import MongooseIcon from '../assets/tech/Mongoose.js.png';
import PythonIcon from '../assets/tech/Python.png';
import CIcon from '../assets/tech/C++ (CPlusPlus).png';
import JavascriptIcon from '../assets/tech/javascript.png';
import Vscode from '../assets/tech/Visual Studio Code (VS Code).png';
import Github from '../assets/tech/GitHub.png';
import Postman from '../assets/tech/Postman.png';

const Tech = () => {
  const [section, setSection] = useState(0);

  const sections = [
    {
      title: "Frontend",
      icons: [reactIcon, reduxIcon, jsIcon, cssIcon, htmlIcon, tailwindIcon]
    },
    {
      title: "Backend",
      icons: [nodeIcon, expressIcon, MongooseIcon]
    },
    {
      title: "Database",
      icons: [sqlIcon, mongodbIcon, FirebaseIcon]
    },
    {
      title: "Languages",
      icons: [CIcon, JavascriptIcon, PythonIcon]
    },
    {
      title: "Developer Tools",
      icons: [Vscode, Github, Postman]
    }
  ];

  const handleNext = () => {
    if (section < sections.length - 1) setSection(section + 1);
  };

  const handlePrevious = () => {
    if (section > 0) setSection(section - 1);
  };

  return (
    <section className="w-full min-h-screen bg-[#020617] flex flex-col items-center justify-center p-8">
      <div className="max-w-6xl w-full relative">
        {/* Main content */}
        <div className="text-center">
          <h2 className="text-6xl font-bold mb-12 text-[#129eaf]">Technologies & Skills</h2>
          <h3 className="text-4xl font-semibold mb-16 text-[#129eaf]">{sections[section].title}</h3>
          
          {/* Icons grid with responsive layout */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 mb-16">
            {sections[section].icons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`${sections[section].title} icon`}
                className="w-20 sm:w-28 h-20 sm:h-28 object-contain animate-rotate-icon"
              />
            ))}
          </div>
        </div>

        {/* Navigation buttons positioned absolutely */}
        <div className="absolute w-full flex justify-between items-center" style={{ top: '50%', transform: 'translateY(-50%)' }}>
          <button
            onClick={handlePrevious}
            disabled={section === 0}
            className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed -ml-6"
            style={{ position: 'relative', left: '-40px' }}
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            disabled={section === sections.length - 1}
            className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed -mr-6"
            style={{ position: 'relative', right: '-40px' }}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tech;
