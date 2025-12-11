import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

const education: EducationItem[] = [
  {
    degree: "Master of Computer Engineering",
    institution: "Bharath University",
    period: "Sep 2009 - Apr 2011",
    location: "India",
  },
  {
    degree: "Bachelor of Engineering",
    institution: "Anna University",
    period: "Sep 2005 - May 2009",
    location: "India",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-20 bg-gray-900 dark:bg-black text-white"
    >
      {/* Dark purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent pointer-events-none z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Education
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white">
                    <FaGraduationCap size={24} />
                  </div>
                </div>
                <div className="ml-6 flex-grow">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-primary-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center text-gray-300 space-x-4">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

