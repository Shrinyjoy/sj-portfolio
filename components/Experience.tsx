"use client";

import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  location: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "July 2025 - Nov 2025",
    title: "Software Engineer",
    company: "Gallantree",
    location: "Brisbane, Australia",
    responsibilities: [
      "Developed features for the platform using Next.js and MongoDB",
      "Integrated and enhanced APIs to extend platform functionality",
      "Created, tracked, and resolved Epics, Stories, and Bugs in Jira",
      "Performed code reviews, created pull requests, and merged code into the main branch",
      "Managed deployments on Heroku, ensuring smooth staging, UAT, and production workflows",
      "Performed QA and unit testing within the development team, validating bug fixes, ensuring code stability, and updating task status in Jira",
      "Collaborated with the finance team on CRE and CLO modules for Platform v2.0 / v2.0.1", 
      "Integrated CreditorWatch and BronID KYC/KYB APIs, created a local tunnel for BronID, tested via Postman, and saved results to the database",
      "Utilized CursorAI to streamline development tasks and improve workflow efficiency",
      "Built the loan lifecycle flow from creation through credit approval and disbursement",
    ],
  },
  {
    period: "Aug 2022 - May 2023",
    title: "Software Engineer",
    company: "Autobahn (German based)",
    location: "Chennai, India",
    responsibilities: [
      "Worked on a ticket-based projects using React, Redux, Saga and Typescript",
      "Designed and developed user interfaces, including forms and data tables",
      "Building reusable libraries, code, and there by performing form validation checks and error handling to improve application quality",
      "Connected front-end features with server-side logic by handling HTTP requests to fetch and update data from API",
      "Implemented solutions using CI/CD pipeline and worked under Azure environment",
      "Worked on a banking and ecommerce level projects",
      "Implemented Unit Testing using Jest, and functional testing using Cypress",
    ],
  },
  {
    period: "Dec 2017 - Jan 2018",
    title: "Web Developer (Contract)",
    company: "IM Advertising (IMAB2B)",
    location: "Campbelltown, Australia",
    responsibilities: [
      "Developed WordPress CMS project and integrated external APIs",
      "Translated mock-ups and wireframes into functional front-end code",
      "Delivered end-to-end solutions with digital marketing manager",
    ],
  },
  {
    period: "June 2013 - August 2024",
    title: "Web Developer (Part time)",
    company: "Freelancing",
    location: "Australia",
    responsibilities: [
      "Delivered end-to-end web and software solutions for clients across e-commerce, gaming, and education domains",
      "Built and maintained projects including AWS ML image detection, ChatGPT apps, and full-stack e-commerce platforms",
      "Developed websites and applications using React, Next.js, .NET, PHP CMS, Laravel, and Django",
      "Resolved server issues, optimized builds, and modernized legacy systems",
      "Designed responsive, user-focused websites tailored to business needs",
      "Integrated APIs, third-party libraries, and frameworks to extend application functionality",
      "Maintained long-term projects with continuous support and upgrades",
    ],
  },
  {
    period: "July 2012 - May 2013",
    title: "Junior .Net Developer",
    company: "Python Technologies",
    location: "Sydney, Australia",
    responsibilities: [
      "Built ASP.NET and SQL Server web applications using MVC framework and LINQ",
      "Designed web forms and interactive features with Ajax and jQuery",
      "Proficient in SQL querying, CMS design, and ongoing maintenance",
      "Delivered high-quality results while meeting tight deadlines",
    ],
  },
  {
    period: "Oct 2011 - Dec 2011",
    title: "Software Trainee (Internship)",
    company: "Capella InfoTech",
    location: "Chennai, India",
    responsibilities: [
      "Assisted in a mini project using C++ and C#",
      "Assisted in designing website layouts using ASP.Net",
      "Worked with database connections and queries using SQL Server",
      "Developed web layouts using HTML and CSS",
    ],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="py-20 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Experience
        </h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-all"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-6 flex flex-col md:flex-row md:items-center md:justify-between hover:bg-gray-50/50 dark:hover:bg-gray-700/50 transition-colors text-left"
              >
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {exp.company}
                  </p>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-gray-600 dark:text-gray-400 text-sm">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex-shrink-0">
                  {openIndex === index ? (
                    <FaChevronUp className="text-gray-600 dark:text-gray-400 text-xl" />
                  ) : (
                    <FaChevronDown className="text-gray-600 dark:text-gray-400 text-xl" />
                  )}
                </div>
              </button>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <ul className="space-y-2 mt-4">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                        <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1 flex-shrink-0">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

