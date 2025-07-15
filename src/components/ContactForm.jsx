import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setShowError(false);

    emailjs
      .send(
        "service_cywjpfk", // ✅ Your Service ID
        "template_9r89wxk", // ✅ Your Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
          title: "New Contact Request",
        },
        "sptXBJgMPx8p5uIFX" // ✅ Your VALID PUBLIC KEY from dashboard
      )
      .then(
        () => {
          setShowSuccess(true);
          setForm({ name: "", email: "", message: "" });
          setSending(false);
          setTimeout(() => setShowSuccess(false), 5000);
        },
        (err) => {
          console.error("❌ Email send failed:", err);
          setShowError(true);
          setSending(false);
          setTimeout(() => setShowError(false), 5000);
        }
      );
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

      {/* ✅ Success Message */}
      {showSuccess && (
        <div
          className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg border border-green-300 dark:border-green-600 shadow-sm flex justify-between items-center"
          data-aos="fade-down"
        >
          <span>✅ Your message was sent successfully!</span>
          <button
            className="text-sm font-semibold text-[#0f3460] dark:text-white hover:underline"
            onClick={() => setShowSuccess(false)}
          >
            Close
          </button>
        </div>
      )}

      {/* ❌ Error Message */}
      {showError && (
        <div
          className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg border border-red-300 dark:border-red-600 shadow-sm flex justify-between items-center"
          data-aos="fade-down"
        >
          <span>❌ Something went wrong. Please try again.</span>
          <button
            className="text-sm font-semibold text-[#0f3460] dark:text-white hover:underline"
            onClick={() => setShowError(false)}
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
          disabled={sending}
          className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#0f3460] to-[#766bdf] text-white font-semibold transition-all duration-300 shadow-lg ${
            sending ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"
          }`}
        >
          {sending ? "Sending..." : "🚀 Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
