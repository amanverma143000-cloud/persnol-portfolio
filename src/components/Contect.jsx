import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line
import { FiMail, FiPhone } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ContactCard = () => {
  const gmailHref =
    "https://mail.google.com/mail/?view=cm&fs=1&to=amanverma33445@gmail.com";
  const mailtoHref = "mailto:amanverma33445@gmail.com";

  const handleEmailClick = () => {
    const opened = window.open(gmailHref, "_blank", "noopener,noreferrer");
    if (!opened) {
      window.location.href = mailtoHref;
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 md:px-20 bg-[#0f0f1a] text-white overflow-hidden"
    >
      {/* Background Glow Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500 opacity-30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink-500 opacity-20 blur-3xl rounded-full"></div>
      </div>

      {/* Section Heading */}
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-10 text-center animate-fade-in-up">
        Ready to Start a Project?
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 animate-fade-in-up delay-100">
        Whether you have a project in mind or just want to chat about technology,
        I'd love to hear from you. Let's create something amazing together!
      </p>

      <div className="max-w-2xl mx-auto bg-[#18182a] p-10 rounded-2xl shadow-xl space-y-6 animate-fade-in-up delay-200">
        {/* Send Email Button */}
        <button
          onClick={handleEmailClick}
          className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 text-white font-semibold shadow-md flex items-center justify-center gap-3 hover:scale-105 transition-transform duration-300"
        >
          <FiMail />
          <span>Send an Email</span>
        </button>

        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-block py-3 rounded-full border border-purple-600 text-purple-300 font-semibold text-center hover:scale-105 transition-transform duration-300"
        >
          <span className="inline-flex items-center gap-2 justify-center">
            <FaLinkedin /> Connect on LinkedIn
          </span>
        </a>
      </div>

      {/* Footer Contact Bar */}
      <div className="mt-20 bg-[#18182a] py-6 px-6 md:px-20 rounded-t-2xl shadow-inner hover:bg-[#1f1f2f] transition-colors duration-300">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-gray-300 text-sm md:text-base">
          <div className="flex items-center gap-3">
            <FiPhone className="text-purple-400 text-lg" />
            <span>+91 7441121492</span>
          </div>

          <div className="flex items-center gap-3">
            <FiMail className="text-purple-400 text-lg" />
            <a href="mailto:amanverma33445@gmail.com" className="hover:text-purple-400">
              amanverma33445@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaLinkedin className="text-purple-400 text-lg" />
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              linkedin.com/in/amanverma999
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaGithub className="text-purple-400 text-lg" />
            <a
              href="https://github.com/amanverma143000-cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400"
            >
              github.com/amanverma143000-cloud
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;