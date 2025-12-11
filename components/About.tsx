"use client";

import { FaDownload } from "react-icons/fa";

const roles = [
  {
    title: "Software Engineer",
    items: [
      "Ecommerce and banking level projects",
      "Next.js and MongoDB platform development",
      "API integrations and third-party API integrations (KYC/KYB, geolocation)",
      "Frontend development with React, Redux, and TypeScript",
      "Code reviews and pull request management",
      "CI/CD pipeline implementation",
      "Unit and Functional testings (Jest, Cypress)",
      "Deployment management (Heroku, Azure, AWS)",
    ],
  },
  {
    title: "Freelancer",
    items: [
      "Full stack apps like MERN and MEAN",
      "Weather app, game app and Quiz app development",
      "CMS projects and web maintenance",
      "AWS ML image detection applications",
      "ChatGPT and OpenAI integration apps",
      "E-commerce platforms with payment integration",
      "Updating latest technologies and bootcamp participation",
    ],
  },
  {
    title: "Internship",
    items: [
      "Small level applications",
      "ASP.Net and SQL based projects",
      "Web layouts using html and css",
      "Customer based admin level applications",
    ],
  },
];

export default function About() {
  const handleDownloadResume = () => {
    // Download resume Word document
    const link = document.createElement("a");
    link.href = "/resume.docx"; // Word document path
    link.download = "resume.docx";
    link.click();
  };

  return (
    <section
      id="about"
      className="relative py-20 bg-gray-900 dark:bg-black text-white"
    >
      {/* Dark purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent pointer-events-none z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          About Me
        </h2>
        
        {/* Main Description */}
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-lg text-gray-300 leading-relaxed justify-center">
          Full-stack Developer / Web Developer with 5+ years of experience delivering scalable solutions across fintech, banking, AI, and e-commerce. Experienced in building React, ML, and JavaScript applications, with 20+ frontend and 10+ backend projects using React, 
          Node.js, Angular, .NET, PHP, and Next.js. Experienced in designing, coding, deployment, and maintaining applicationsfor both personal and client projects. Strong in API integrations, CI/CD, testing, and deployments, with a proactive mindset and the ability to multitask and 
          work effectively in both team and independent roles.
          </p>
        </div>

        {/* Download Resume Button */}
        <div className="flex justify-center mb-16">
          <button
            onClick={handleDownloadResume}
            className="flex items-center gap-2 px-8 py-3 border-2 border-blue-500 text-white font-semibold rounded hover:bg-blue-500 transition-colors"
          >
            <FaDownload />
            DOWNLOAD RESUME
          </button>
        </div>

        {/* Three Role Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-gray-800 dark:bg-gray-900 rounded-lg p-6 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 border border-gray-700"
            >
              <h3 className="text-xl font-bold text-white mb-5 pb-3 border-b border-gray-700">
                {role.title}
              </h3>
              <ul className="space-y-2.5">
                {role.items.map((item, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start text-sm leading-relaxed">
                    <span className="text-teal-400 mr-3 mt-1.5 flex-shrink-0">•</span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

