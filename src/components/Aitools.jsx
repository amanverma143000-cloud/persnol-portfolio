import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const AITools = () => {
  const tools = [
    { name: "ChatGPT", desc: "AI chatbot for code & content assistance" },
    { name: "GitHub Copilot", desc: "AI code completion tool" },
    { name: "MidJourney", desc: "AI image generation" },
    { name: "DALL·E", desc: "AI-powered creative image tool" },
    { name: "Stable Diffusion", desc: "Open-source image generation" },
    { name: "Cursor AI", desc: "AI pair programmer" },
    { name: "Claude AI", desc: "Advanced AI assistant" },
    { name: "Tabnine", desc: "AI code suggestions" },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          AI Tools I Use
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-purple-400">{tool.name}</h3>
              <p className="text-gray-300 mt-2">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AITools;
