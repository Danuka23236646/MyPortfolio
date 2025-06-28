export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-blue-50 dark:bg-gray-800 text-center">
      <img
        src="https://i.postimg.cc/8zQPw0TD/1746635939219.jpg"
        alt="Danuka"
        className="w-80 h-80 rounded-full object-cover mb-6 border-4 border-blue-600 dark:border-white shadow-lg"
      />
      <h1 className="text-5xl font-bold text-blue-600 dark:text-white mb-4">Hello, I'm Danuka 👋</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">Web Developer | React | MERN Stack</p>
    </section>
  );
}
