import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        'service_e6bhw44',
        'template_51idbma',
        form.current,
        'YVSoiW7aprNu-pWzt'
      )
      .then(
        () => {
          setStatus('success');
          form.current.reset();
        },
        () => {
          setStatus('error');
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-blue-600 dark:text-white mb-4">Contact Me</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg max-w-xl mx-auto">
        Have a project in mind? Let's talk and build something great together!
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start text-left">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">
          {/* Address */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Address</h4>
              <p className="text-gray-600 dark:text-gray-300">Colombo, Battaramulla, Sri Lanka</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow flex items-center gap-4">
            <FaPhoneAlt className="text-blue-600 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h4>
              <p className="text-gray-600 dark:text-gray-300">+94 75 065 4139</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow flex items-center gap-4">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h4>
              <p className="text-gray-600 dark:text-gray-300">danukbarnett@gmail.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Social</h4>
            <div className="flex gap-6 text-3xl justify-start">
  <a
    href="https://www.facebook.com/danu.ka.560272"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#1877F2] hover:text-blue-800 transition duration-300"
  >
    <FaFacebook />
  </a>
  <a
    href="https://github.com/Danuka23236646"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#333] dark:text-white hover:text-black transition duration-300"
  >
    <FaGithub />
  </a>
  <a
    href="https://www.linkedin.com/in/danuka-barnett-54019a324/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#0A66C2] hover:text-blue-600 transition duration-300"
  >
    <FaLinkedin />
  </a>
</div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-xl grid gap-6"
        >
          <input
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            required
            placeholder="Your Message"
            rows="6"
            className="p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Send Message
          </button>

          {status === 'sending' && (
            <p className="text-blue-600 text-sm font-medium">Sending message...</p>
          )}
          {status === 'success' && (
            <p className="text-green-600 text-sm font-medium">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm font-medium">Oops! Something went wrong.</p>
          )}
        </form>
      </div>
    </section>
  );
}
