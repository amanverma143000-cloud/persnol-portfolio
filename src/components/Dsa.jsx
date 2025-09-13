import React from "react";

// GitHub Button Component
const DSAGitHubButton = () => {
  const githubURL = "https://github.com/amanverma143000-cloud/DSA-Problem-Solving-Achievements.git";

  return (
    <div className="flex justify-center mt-8">
      <a
        href={githubURL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-600 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.01-1.05-.016-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.334-1.753-1.334-1.753-1.09-.746.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.303-5.467-1.335-5.467-5.933 0-1.31.47-2.38 1.236-3.22-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.137 3.003.404 2.288-1.552 3.294-1.23 3.294-1.23.654 1.653.242 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.814 1.096.814 2.21 0 1.595-.015 2.88-.015 3.27 0 .323.216.701.824.582C20.565 21.795 24 17.296 24 12c0-6.63-5.373-12-12-12z"/>
        </svg>
        View DSA Source Code
      </a>
    </div>
  );
};

// Main DSA Section Component
const DSA = () => {
  const dsaData = {
    title: "DSA Achievements",
    subtitle: "Showcasing my Data Structures & Algorithms journey in JavaScript",
    highlights: [
      "Practicing DSA problems in JavaScript",
      "Covered core topics: Arrays, Linked Lists, Stacks, Queues, Trees, Graphs",
      "Practiced Searching & Sorting algorithms (Binary Search, Merge Sort, Quick Sort)",
      "Focused on Recursion, Problem Decomposition, and Edge Case Analysis",
      "Organized solutions in a structured GitHub repository"
    ]
  };

  return (
    <section id="dsa" className="py-20 px-6 md:px-20 bg-[#121221] text-white">
      <h2 className="text-3xl font-bold text-purple-400 mb-4 text-center">{dsaData.title}</h2>
      <p className="text-gray-300 text-center mb-10">{dsaData.subtitle}</p>
      <ul className="list-disc list-inside text-gray-300 max-w-3xl mx-auto space-y-3 text-lg">
        {dsaData.highlights.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {/* GitHub Button */}
      <DSAGitHubButton />
    </section>
  );
};

export default DSA;
