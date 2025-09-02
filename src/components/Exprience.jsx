import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const WorkExperience = () => {
  const experiences = [
    {
      title: "Frontend Development",
      description: [
        "Proficient in HTML and CSS for creating responsive and visually appealing web interfaces.",
        "Basic to intermediate skills in React.js for building interactive and dynamic web pages.",
        "Proficient with Formik and Yup for seamless form handling and validation.",
        "Familiarity with component-based architecture in React for better code reusability and maintainability."
      ]
    },
    {
      title: "UI Designing",
      description: [
        "Skilled in creating responsive and user-friendly interfaces using HTML and CSS.",
        "Able to design clean and structured layouts that enhance user experience (UI/UX).",
        "Experience in user flow creation and interface optimization.",
        "Familiar with React.js for dynamic and interactive web components.",
        "Capable of integrating basic animations and transitions for improved interactivity."
      ]
    },
    {
      title: "Backend Development",
      description: [
        "Basic to intermediate skills in Node.js for building server-side applications.",
        "Familiarity with Express.js for creating RESTful APIs and handling routes.",
        "Hands-on experience with MongoDB for data storage and retrieval.",
        "Able to integrate backend logic with frontend applications for dynamic web solutions.",
        "Basic understanding of database modeling and working with JSON-based data structures."
      ]
    }
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-[#0f0f1a] text-white">
      <h2 className="text-4xl font-extrabold text-center mb-16">
        What I Have Done So Far<br />
        <span className="text-purple-400">Training & Self-Learning Journey.</span>
      </h2>

      <div className="relative border-l-4 border-purple-500 ml-4 md:ml-20 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative pl-8 md:pl-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.4 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-5 top-2 w-8 h-8 bg-purple-500 rounded-full border-4 border-[#0f0f1a]"></div>
            <motion.div
              className="bg-[#18182a] p-6 rounded-xl shadow-lg hover:shadow-purple-500/40 transition duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.4 + 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {exp.description.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.4 + i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
