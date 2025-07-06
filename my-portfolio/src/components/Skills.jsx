import { CodeBracketIcon, DevicePhoneMobileIcon, ComputerDesktopIcon, ServerStackIcon } from '@heroicons/react/24/solid';

const skillsData = [
 
  {
    category: "Frontend Development",
    icon: <ComputerDesktopIcon className="h-6 w-6 text-white" />,
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React (MERN)", level: 80 },
      { name: "JSP", level: 70 },
      { name: "XML", level: 65 },
    ],
  },
   {
    category: "Programming Languages",
    icon: <CodeBracketIcon className="h-6 w-6 text-white" />,
    skills: [
      { name: "C / C++", level: 85 },
      { name: "Java", level: 90 },
      { name: "C#", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Kotlin", level: 85 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    category: "Mobile & Design",
    icon: <DevicePhoneMobileIcon className="h-6 w-6 text-white" />,
    skills: [
      { name: "Android (Kotlin)", level: 85 },
      { name: "C# (Windows Forms)", level: 75 },
      { name: "Figma", level: 80 },
    ],
  },
  {
    category: "Database & Tools",
    icon: <ServerStackIcon className="h-6 w-6 text-white" />,
    skills: [
      { name: "MySQL / Workbench", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "SQL Server", level: 70 },
      { name: "Git & GitHub", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-semibold text-blue-600 dark:text-white mb-4">My Skills</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto mb-12 rounded"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-4">
        {skillsData.map((group, index) => (
          <div
            key={index}
            className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-6 shadow-md text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 p-2 rounded-full">
                {group.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-600 dark:text-white">
                {group.category}
              </h3>
            </div>

            {group.skills.map((skill, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded">
                  <div
                    className="bg-blue-600 h-2 rounded"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
