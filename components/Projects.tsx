import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    name: "Weather App",
    description: "Front-end React application with API configuration for real-time weather data",
    technologies: ["React", "API Integration", "Weather API"],
    demo: "https://shrinyjoy.github.io/weatherapp/",
  },
  {
    name: "E-Commerce App",
    description: "Full-stack e-commerce platform with shopping cart, product management, and payment integration",
    technologies: ["React", "Node.js", "MongoDB", "E-Commerce"],
    demo: "https://ecommerce-app-frontend-brown.vercel.app/",
  },
  {
    name: "ChatGPT Clone",
    description: "AI-powered chat application using OpenAI API with modern UI and real-time messaging",
    technologies: ["React", "OpenAI API", "AI Integration"],
    demo: "https://fluffy-crostata-8daadb.netlify.app/",
  },
  {
    name: "Calculator",
    description: "Interactive calculator application with modern design and smooth user experience",
    technologies: ["React", "JavaScript", "UI/UX"],
    demo: "https://calculator-lovat-xi.vercel.app/",
  },
  {
    name: "To-Do List App",
    description: "Full-stack task management application with custom API for creating and managing tasks",
    technologies: ["React", "Node.js", "REST API", "Task Management"],
    demo: "https://todolistapp-jet.vercel.app/",
  },
  {
    name: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills with modern design",
    technologies: ["React", "Next.js", "Portfolio"],
    demo: "https://sjportfolio-swart.vercel.app/",
  },
  {
    name: "Quiz App",
    description: "Interactive quiz application with multiple choice questions and score tracking",
    technologies: ["JavaScript", "HTML", "CSS", "Quiz"],
    demo: "https://shrinyjoy.github.io/quiz-app/",
  },
  {
    name: "Color Game",
    description: "Fun and interactive color guessing game with engaging gameplay",
    technologies: ["JavaScript", "HTML", "CSS", "Game"],
    demo: "https://shrinyjoy.github.io/colorgame",
  },
  {
    name: "Email Survey App",
    description: "Full-stack application using React with Google OAuth2. Integrated third party libraries like Passport.js, Stripe and SendGrid",
    technologies: ["React", "Node.js", "OAuth2", "Passport.js", "Stripe", "SendGrid"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Applications Developed
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-sm font-medium transition-colors shadow-md hover:shadow-lg"
                  >
                    <FaExternalLinkAlt size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors"
                  >
                    <FaGithub size={14} />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

