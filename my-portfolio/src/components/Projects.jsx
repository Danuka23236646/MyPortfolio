import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projects = [
  {
    title: "Ceylon Flavours - Restaurant Management",
    description:
      "An end-to-end restaurant management system featuring online ordering, menu browsing, and seamless delivery processing.",
    image: "/images/ceylon-flavours.png",
    type: "Full Stack",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    liveDemo: "https://your-live-link.com",
    codeLink: "https://github.com/your-repo",
  },
  {
    title: "My Portfolio Website",
    description:
      "A personal portfolio showcasing projects, skills, and contact options. Built with React and styled with Tailwind CSS.",
    image: "/images/portfolio.png",
    type: "Frontend",
    tech: ["React", "Tailwind CSS", "EmailJS", "JavaScript"],
    liveDemo: "https://your-portfolio.com",
    codeLink: "https://github.com/your-portfolio",
  },
  {
    title: "Money Tracker Mobile Application",
    description:
      "A finance tracking app built using Kotlin and Java for Android. Manages income, expenses and savings.",
    image: "/images/money-tracker.png",
    type: "Mobile",
    tech: ["Kotlin", "Java", "SharedPreferences"],
    liveDemo: "https://your-link.com",
    codeLink: "https://github.com/your-repo",
  },
  {
    title: "Lotus Award Ceremony",
    description:
      "A dynamic web app for award events built using PHP, HTML, JS, and MySQL.",
    image: "/images/lotus-award.png",
    type: "Full Stack",
    tech: ["PHP", "MySQL", "HTML", "JavaScript", "CSS"],
    liveDemo: "https://your-link.com",
    codeLink: "https://github.com/your-repo",
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
                    className="flex items-center gap-1 text-sm text-gray-700 dark:text-white hover:underline"
                  >
                    <FaCode /> Code
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
