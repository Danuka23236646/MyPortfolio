export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-blue-50 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-semibold text-blue-600 dark:text-white mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-900 p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Ceylon Flavors</h3>
          <p className="text-gray-700 dark:text-gray-300">A restaurant management system built using MERN stack.</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Portfolio Website</h3>
          <p className="text-gray-700 dark:text-gray-300">Personal website showcasing my skills and projects.</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Task Manager</h3>
          <p className="text-gray-700 dark:text-gray-300">A to-do app built using React and Tailwind.</p>
        </div>
      </div>
    </section>
  );
}
