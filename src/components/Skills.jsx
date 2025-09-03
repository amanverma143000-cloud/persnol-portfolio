import React from "react";
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMysql, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Java", icon: <FaJava size={30} /> },
    { name: "MySQL", icon: <SiMysql size={30} /> },
    { name: "HTML", icon: <FaHtml5 size={30} /> },
    { name: "CSS3", icon: <FaCss3Alt size={30} /> },
    { name: "JavaScript", icon: <FaJs size={30} /> },
    { name: "React.js", icon: <FaReact size={30} /> },
    { name: "Express.js", icon: <SiExpress size={30} /> },
    { name: "Node.js", icon: <FaNodeJs size={30} /> },
    { name: "MongoDB", icon: <SiMongodb size={30} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={30} /> },
    { name: "Git", icon: <FaGitAlt size={30} /> },
    { name: "GitHub", icon: <FaGithub size={30} /> }
  ];

  return (
  
    <section
    id="skills"
    className="py-16 px-6 md:px-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h2 className=" text-purple-400 text-3xl font-bold text-center mb-12 relative block mx-auto after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2">
        My Skills
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-40 h-30 flex flex-col justify-center items-center bg-gray-800 border border-gray-700 p-5 rounded-xl transition-transform transform hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
          >
            <div className="mb-3 text-blue-400">{skill.icon}</div>
            <span className="text-sm md:text-base font-medium text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
