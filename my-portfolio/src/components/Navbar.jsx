import { useEffect, useState, useRef } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  // Apply theme and store in localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Start a delay to close menu
  function handleMouseLeave() {
    closeTimeoutRef.current = setTimeout(() => {
      setMenuOpen(false);
    }, 150);
  }

  // Cancel the close if mouse re-enters
  function handleMouseEnter() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }

  return (
    <nav className="bg-white dark:bg-gray-900 shadow sticky top-0 z-10">
      <div className="px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-white">Danuka Barnett</h1>

        <div
          className="flex gap-4 items-center relative"
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
        >
          {/* Menu Icon Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center group"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-blue-600 dark:bg-white transform transition duration-300 ease-in-out ${
                menuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-blue-600 dark:bg-white my-1 transition duration-300 ease-in-out ${
                menuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-blue-600 dark:bg-white transform transition duration-300 ease-in-out ${
                menuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>

          {/* Dropdown Menu */}
          <div
            className={`absolute top-12 right-0 bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 origin-top-right z-20 ${
              menuOpen
                ? 'translate-y-0 opacity-100 scale-100'
                : '-translate-y-4 opacity-0 scale-95 pointer-events-none'
            }`}
          >
            <ul className="text-gray-700 dark:text-gray-200 w-40">
              <li>
                <a
                  href="#home"
                  className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 px-3 py-1 border border-blue-600 dark:border-white rounded text-blue-600 dark:text-white hover:bg-blue-600 dark:hover:bg-white hover:text-white dark:hover:text-blue-600 transition"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
}
