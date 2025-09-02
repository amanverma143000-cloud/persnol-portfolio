import React from "react";
import portfolio from "../assets/Personal-Portfolio - Creativ_ Agency.jpeg"
import gamming from "../assets/download (1).jpeg"


const Projects = () => {
  const projects = [
    {
      title: "Illustrator Portfolio",
      link: "https://amanverma143000-cloud.github.io/illustrate-portfolio/",
      github: "https://github.com/amanverma143000-cloud/illustrate-portfolio",
      desc: "A responsive illustrator portfolio created using HTML, CSS, JavaScript, and Bootstrap",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThe0icepDSQN9e1seeYZIffW36aZePsB4lRw&s"
    },
    {
      title: "Gaming Hub",
      link: "https://yourproject2.com",
      github: "https://github.com/username/project2",
      desc: "An interactive gaming website built using React.js with animations, smooth scrolling, and multi-page layout.",
      image: gamming
    },
    {
      title: "Portfolio",
      link: "https://yourproject3.com",
      github: "https://github.com/username/project3",
      desc: "Personal portfolio using React & Tailwind",
      image: portfolio
    },
    {
      title: "Smart School Manager",
      link: "https://yourproject4.com",
      github: "https://github.com/username/project4",
      desc: "A complete school management system built with MERN stack to manage students, teachers, classes, and exams efficiently.",
      image: "https://leadschool.in/wp-content/uploads/2024/01/Which-is-the-best-all-in-one-school-management-system-in-India.png"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-[#121221] text-white">
      <h2 className="text-3xl font-bold text-purple-400 mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#18182a] rounded-xl shadow-lg overflow-hidden hover:shadow-purple-500/40 transition duration-300 flex flex-col h-full"
          >
            {/* Project Cover Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Project Info */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.desc}</p>

              {/* Buttons → always bottom */}
              <div className="flex gap-4 mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-purple-500 text-white text-center py-2 rounded hover:bg-purple-600 transition"
                >
                  Open
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-700 text-white text-center py-2 rounded hover:bg-gray-800 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
