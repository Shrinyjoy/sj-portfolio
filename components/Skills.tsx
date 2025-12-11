import { FaReact, FaNode, FaDatabase, FaCode, FaTools, FaCloud, FaGitAlt, FaLaptopCode } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiAngular, SiMongodb, SiJest, SiCypress } from "react-icons/si";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Front End",
    icon: <FaReact className="text-4xl" />,
    skills: [
      "React/Redux/Saga",
      "Next.js",
      "TypeScript",
      "Angular2/4",
      "HTML5",
      "CSS3",
      "SASS",
      "Tailwind CSS",
      "Bootstrap",
      "Materialize",
      "jQuery",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Back End",
    icon: <FaNode className="text-4xl" />,
    skills: ["NodeJS"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Languages",
    icon: <FaCode className="text-4xl" />,
    skills: ["C", "C++", "C#", "JavaScript", "Python"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Testing",
    icon: <SiJest className="text-4xl" />,
    skills: ["Jest", "Cypress"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Database",
    icon: <FaDatabase className="text-4xl" />,
    skills: ["SQL Server", "MySQL", "MongoDB"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Tools",
    icon: <FaTools className="text-4xl" />,
    skills: ["JIRA"],
    color: "from-red-500 to-rose-500",
  },
  {
    title: "Deployment",
    icon: <FaCloud className="text-4xl" />,
    skills: ["Azure", "AWS", "Vercel", "Heroku"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Source Control",
    icon: <FaGitAlt className="text-4xl" />,
    skills: ["Git"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "IDE",
    icon: <FaLaptopCode className="text-4xl" />,
    skills: ["Cursor AI", "Antigravity AI", "VSCode"],
    color: "from-blue-600 to-indigo-600",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 bg-gray-900 dark:bg-black text-white"
    >
      {/* Dark purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent pointer-events-none z-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-700"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-700/50 text-gray-200 rounded-full text-sm font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

