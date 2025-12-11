import { FaCertificate } from "react-icons/fa";

const certifications = [
  "Machine Learning Model with AWS and React (2025)",
  "The Ultimate Full Stack Web Development Bootcamp (2022)",
  "Build Ecommerce Shopping Cart by React & Redux (2020)",
  "Become A Full Stack Web Developer – Beginner to Advanced (2020)",
  "Advanced Angular SPA (2017)",
  "Web Developer Bootcamp (2017)",
  ".Net Software Trainee (2011)",
  "Oracle (2011)",
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-20 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Certifications
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex items-start"
              >
                <div className="flex-shrink-0 mr-4">
                  <FaCertificate className="text-primary-600 dark:text-primary-400 text-2xl" />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

