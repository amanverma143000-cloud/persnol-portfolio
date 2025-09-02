import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="py-16 bg-gray-900 text-white" id="education">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-6">
          {/* 12th Education */}
          <motion.div
            className="bg-gray-800 p-6 rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold">Gyanganga School, Harda (M.P)</h3>
            <p className="mt-2 text-gray-300">
              Completed 12th (Science Stream) with 68%
            </p>
          </motion.div>

          {/* College Education */}
          <motion.div
            className="bg-gray-800 p-6 rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold">Singaji College</h3>
            <p className="mt-2 text-gray-300">
              Currently pursuing IT (Information Technology)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
