
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; // update this import


const projects = [
  {
    title: "Ceylon Flavours - Restaurant Management",
    description:
      "Ceylon Flavours is a full-stack restaurant management system developed as a group project using the MERN stack — MongoDB, Express.js, React.js, and Node.js.",
    image: "/images/ceylon-flavours.png",
    type: "Full Stack",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveDemo: "https://your-live-link.com",
    codeLink: "https://github.com/Danuka23236646/Ceylon_Flavours-Restaurant-Management-System--MERN",
  },
  {
    title: "Stress Management Application",
    description:
      "designed to help users manage stress, enhance mindfulness, and support their overall mental well-being. The app offers personalized and science-based strategies to empower individuals in developing long-term resilience and inner peace.",
    image: "/images/stress.png",
    type: "Mobile",
    tech: ["Java", "Kotlin"],
    liveDemo: "https://your-portfolio.com",
    codeLink: "https://github.com/Danuka23236646/Stress_Management_Application-Kotlin",
  },
  {
    title: "Money Tracker Mobile Application",
    description:
      "Money Tracker is a personal finance management mobile app developed using Kotlin + Java for Android. It helps users track their income, expenses, set budgets, and stay financially organized — all offline, with smart local storage using SharedPreferences.",
    image: "/images/Money.jpg",
    type: "Mobile",
    tech: ["Kotlin", "Java", "SharedPreferences"],
    liveDemo: "https://your-link.com",
    codeLink: "https://github.com/Danuka23236646/FinancialTracker-Kotlin",
  },
  {
    title: "Examination Management System",
    description:
      "This is a comprehensive Online Examination Management System built using Java and MySQL Workbench. The system handles exam scheduling, question creation, student participation, payments, and ticket-based issue reporting",
    image: "/images/exam.jpg",
    type: "Full Stack",
    tech: ["PHP", "MySQL", "HTML", "JavaScript", "CSS"],
    liveDemo: "https://your-link.com",
    codeLink: "https://github.com/Danuka23236646/Online_Examination_Management_System-JAVA",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-blue-50 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold text-blue-600 dark:text-white mb-10">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        {projects.map((project, index) => {
          const card = (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition flex flex-col w-full max-w-md mx-auto"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {project.type}
                </span>
              </div>

              <div className="p-5 text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 truncate">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition"
                  >
                    <FaGithub className="text-lg" /> Code
                  </a>
                </div>
              </div>
            </div>
          );

          // If it's the 4th card, center it across the grid
          if (index === 3) {
            return (
              <div key={index} className="col-span-full flex justify-center">
                {card}
              </div>
            );
          }

          return card;
        })}
      </div>
    </section>
  );
}
