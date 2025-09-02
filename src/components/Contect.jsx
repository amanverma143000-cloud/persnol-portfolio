import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (data.success) {
        alert("Your message has been sent successfully!");
      } else {
        alert("Failed to send message: " + data.error);
      }
    } catch (err) {
      alert("Error: " + err.message);
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
        Contact
      </h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 animate-fade-in-up delay-100">
        Have an idea or a project in mind? Let's collaborate and bring it to life.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-[#18182a] p-10 rounded-2xl shadow-xl space-y-6 animate-fade-in-up delay-200"
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-[#0f0f1a] border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-[#0f0f1a] border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 rounded-lg bg-[#0f0f1a] border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            rows="6"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          ></textarea>
        </div>
        <button
          className="text-center w-full px-5 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-md"
        >
          Send message
        </button>
      </form>
    </section>
  );
};

export default Contact;
