export default function Home() {
  return (
    <section id="home" className="min-h-[70vh] bg-gradient-to-br from-white to-gray-100 dark:from-[#0f172a] dark:to-[#1e293b] text-gray-900 dark:text-white flex items-center justify-center px-6 py-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        {/* TEXT SECTION */}
        <div className="w-full md:w-1/2 bg-white/90 dark:bg-[#0f172a]/50 rounded-2xl p-8 border border-gray-300/30 dark:border-white/10 shadow-lg backdrop-blur-md">
          <p className="text-sm text-gray-600 dark:text-white/70 mb-1">
            <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full">
              Welcome to my portfolio
            </span>
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
            Hi, I'm <span className="text-purple-600 dark:text-purple-400">Danuka Barnett</span>
          </h1>
          <h2 className="text-lg text-purple-700 dark:text-purple-300 mb-3">
            Undergraduate Software Engineer
          </h2>
          <p className="text-gray-700 dark:text-white/70 mb-4">
            Passionate about crafting innovative solutions through code. I specialize in full-stack development for both web and mobile platforms, using modern technologies to deliver efficient, user-friendly applications.
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="\CV Resume.pdf"
              download
              className="bg-purple-600 hover:bg-purple-700 transition text-white px-5 py-2.5 rounded-full font-medium flex items-center gap-2"
            >
              <span>⬇️</span> Download CV
            </a>
            {/* Social icons */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-900 dark:text-white hover:text-purple-400 transition text-xl"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-900 dark:text-white hover:text-purple-400 transition text-xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="w-full md:w-1/2 relative flex justify-center md:ml-16">
          <div className="w-82 h-82 rounded-full overflow-hidden border-4 border-purple-600 dark:border-purple-400 shadow-xl ring-4 ring-purple-700/30">
            <img
              src="https://i.postimg.cc/SNs5szsP/IMG-20250507-WA0061-5.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Glow behind image */}
          <div className="absolute inset-0 flex justify-center items-center -z-10">
            <div className="w-48 h-48 bg-purple-600 dark:bg-purple-400 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
