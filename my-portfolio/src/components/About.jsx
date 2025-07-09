import { UserIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-semibold text-blue-600 dark:text-white mb-12">About Me</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Who I Am */}
        <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-6 shadow-md text-left">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <UserIcon className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-blue-600 dark:text-white mb-2">Who I Am</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            I am Danuka Barnett, an undergraduate student pursuing BSc (Hons) Software Engineering at SLIIT University.
            I am a dedicated individual with strong work ethics, quick learning abilities, and a positive attitude.
            I am eager to develop my skills and contribute value in a fast-paced work environment.
            I am a reliable team player with effective communication and a strong willingness to learn.
          </p>
        </div>

        {/* Projects & Experience */}
        <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-6 shadow-md text-left">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <BriefcaseIcon className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-blue-600 dark:text-white mb-2">Projects & Experience</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
            <strong>Finance Tracker Application</strong><br />
            Developed an Android app using Kotlin and XML. Implemented data storage with Shared Preferences.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
            <strong>Restaurant Management System</strong><br />
            Built a full-stack web app using MongoDB, Express, React, and Node.js with JSP, Tailwind CSS, and JS.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            <strong>Online Examination System</strong><br />
            Developed backend using Java, JSP, CSS, JS, and MySQL Workbench.
          </p>
        </div>

        {/* Education */}
        <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-6 shadow-md text-left">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <AcademicCapIcon className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-blue-600 dark:text-white mb-2">Education</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
            <strong>SLIIT University</strong><br />
            BSc (Hons) Software Engineering • 2023 - 2027
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
            <strong>Esoft Metro College</strong><br />
            completed Assured Diploma in Information Technology (DITEC) 2020
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
            <strong>M.D.H Jayawardhena maha vidyalaya Battaramulla</strong><br />
            A/L (Commerce stream) - 2022<br />
            O/L - 2019
          </p>
        </div>
      </div>
    </section>
  );
}
