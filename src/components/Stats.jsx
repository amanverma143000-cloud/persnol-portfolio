import React from "react";

const Stats = () => {
  const stats = [
    { label: "Projects Completed", value: "4+" },
    // { label: "Happy Clients", value: "8+" },
    { label: "Years Experience", value: "Fresher" }
  ];

  return (
    <section className="bg-[#0f0f1a] py-16 text-center text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#18182a] p-8 rounded-xl shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition duration-300 animate-fade-in-up"
          >
            <h3 className="text-4xl font-bold text-purple-400">{stat.value}</h3>
            <p className="text-gray-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
