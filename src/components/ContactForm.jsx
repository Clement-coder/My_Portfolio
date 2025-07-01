import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [messages, setMessages] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      ...form,
      time: new Date().toLocaleString(),
    };

    setMessages([newMessage, ...messages]);
    setShowSuccess(true);

    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <div
      className="max-w-7xl mx-auto px-4 py-10"
      id="contact"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl font-bold text-left text-[#0f3460] dark:text-white mb-8"
        data-aos="zoom-in"
      >
        Let’s Connect
      </h2>

      {showSuccess && (
        <div
          className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg border border-green-300 dark:border-green-600 shadow-sm flex justify-between items-center"
          data-aos="fade-down"
        >
          <span>Thank you for your message! 🙌</span>
          <button
            className="text-sm font-semibold text-[#0f3460] dark:text-white hover:underline"
            onClick={() => setShowSuccess(false)}
          >
            Close
          </button>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white dark:bg-[#1f2937] shadow-xl rounded-xl p-8 border border-[#0f3460] dark:border-[#766bdf] backdrop-blur-sm"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div>
          <label className="block mb-2 text-sm font-medium text-[#0f3460] dark:text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg border-gray-300 dark:border-[#444] bg-gray-100 dark:bg-gray-800 text-[#0f3460] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#766bdf]"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-[#0f3460] dark:text-gray-300">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg border-gray-300 dark:border-[#444] bg-gray-100 dark:bg-gray-800 text-[#0f3460] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#766bdf]"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-[#0f3460] dark:text-gray-300">
            Your Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 dark:border-[#444] bg-gray-100 dark:bg-gray-800 text-[#0f3460] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#766bdf]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#0f3460] to-[#766bdf] text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg"
        >
          🚀 Send Message
        </button>
      </form>

      {/* Show Inbox */}
      {messages.length > 0 && (
        <div className="mt-10 space-y-4" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-2xl font-semibold text-[#0f3460] dark:text-white mb-4">
            🔒 Message Inbox (Private)
          </h3>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className="p-4 bg-white dark:bg-gray-900 border-l-4 border-[#766bdf] shadow rounded"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                <strong>{msg.name}</strong> • {msg.email}
              </p>
              <p className="text-gray-800 dark:text-white">{msg.message}</p>
              <p className="text-xs text-gray-500 mt-2">{msg.time}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
