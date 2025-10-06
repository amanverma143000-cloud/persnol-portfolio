import React from "react";
import image1 from "../assets/aman.webp";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#0f0f1a] flex flex-col md:flex-row justify-center md:justify-between items-center text-white text-center md:text-left px-6 md:px-20 relative overflow-hidden pt-24 md:pt-28">
      {/* Left Content */}
      <div className="flex-1 space-y-6 z-10 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
          Hi👋, I'm <span className="text-purple-500">Aman</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-md text-gray-300 leading-relaxed">
          I develop <span className="text-purple-400 font-semibold">Full Stack Web Applications</span>, using <br />
          <span className="text-green-400 font-bold">MERN Stack</span>
        </p>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0 z-10">
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border-4 border-purple-500 overflow-hidden shadow-lg shadow-purple-700/40 transition-transform duration-700 hover:scale-105">
          <img
            src={image1}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
