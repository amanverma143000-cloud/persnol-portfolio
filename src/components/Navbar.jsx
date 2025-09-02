import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#0f0f1a] px-6 md:px-8 py-4 md:py-5 flex justify-between items-center z-50 shadow-lg">
      {/* Logo / Title */}
      <h1 className="text-lg md:text-xl font-bold text-white tracking-wide">
        MERN Stack Developer
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
        <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
        <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
        <li><a href="#skills" className="hover:text-purple-400 transition">Skills</a></li>
        <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-300 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0f0f1a] text-gray-300 flex flex-col items-center gap-4 py-4 md:hidden">
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#skills" className="hover:text-purple-400">Skills</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
