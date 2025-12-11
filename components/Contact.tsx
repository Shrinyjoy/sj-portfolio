"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // You can integrate with a service like Formspree, EmailJS, or your own backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-black text-white"
    >
      {/* Dark purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent pointer-events-none z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Contact
        </h2>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name and Last Name - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm text-gray-400 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-white focus:border-cyan-400 outline-none pb-2 text-white placeholder-gray-500 transition-colors"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm text-gray-400 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b-2 border-white focus:border-cyan-400 outline-none pb-2 text-white placeholder-gray-500 transition-colors"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Email - Full Width */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-400 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b-2 border-white focus:border-cyan-400 outline-none pb-2 text-white placeholder-gray-500 transition-colors"
                placeholder="Enter your email"
              />
            </div>

            {/* Message - Full Width */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-400 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-transparent border-b-2 border-white focus:border-cyan-400 outline-none pb-2 text-white placeholder-gray-500 transition-colors resize-none"
                placeholder="Enter your message"
              />
            </div>

            {/* Send Mail Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-8 rounded transition-colors duration-300"
              >
                SEND MAIL
              </button>
            </div>
          </form>

          {/* Social Links */}
          <div className="mt-12 flex justify-center space-x-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
              <span className="text-lg">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
              <span className="text-lg">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

