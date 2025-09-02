import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Use official download pages
const codeEditors = [
  {
    name: "Visual Studio Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    link: "https://code.visualstudio.com/"
  },
  {
    name: "Notepad++",
    icon: "https://notepad-plus-plus.org/images/logo.svg",
    link: "https://notepad-plus-plus.org/"   // official site
  },
];

const CodeEditors = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Code Editors I Use</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-8">
          {codeEditors.map((editor, index) => (
            <motion.a
              key={index}
              href={editor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={editor.icon}
                alt={editor.name}
                className="w-16 h-16 mb-4"
              />
              <p className="text-lg font-medium">{editor.name}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeEditors;
