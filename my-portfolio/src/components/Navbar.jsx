import { useEffect, useState } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-10">
      <div className="px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-white">Danuka Barnett</h1>
        <div className="flex gap-4 items-center">
          <ul className="flex gap-6 font-medium text-gray-700 dark:text-gray-200">
            <li><a href="#home" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 border border-blue-600 dark:border-white rounded text-blue-600 dark:text-white hover:bg-blue-600 dark:hover:bg-white hover:text-white dark:hover:text-blue-600 transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
