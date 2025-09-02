import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-[#121221] text-center text-gray-300">
      <h2 className="text-3xl font-bold text-purple-400 mb-6 animate-fade-in-up">About Me</h2>
      <p className="max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
        I'm a passionate MERN Stack Developer skilled in React, Node.js, Express, and MongoDB.
        I create modern, responsive websites and web applications with clean UI and great user experience.
      </p>
    </section>
  );
};

export default About;
