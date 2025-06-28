export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-semibold text-blue-600 dark:text-white mb-6">Contact Me</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">Have a project in mind? Let's connect!</p>
      <a
        href="mailto:your-email@example.com"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 dark:hover:bg-white dark:hover:text-blue-600 transition"
      >
        Send Email
      </a>
    </section>
  );
}
