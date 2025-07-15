import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
    const links = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact Me", href: "/contact" },
  ];
  const [glowEffect, setGlowEffect] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowEffect((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative min-h-[40vh] border rounded-2xl bg-white dark:border-white border-[#766bdf] dark:bg-[#0f172a] rounded-t-3xl text-white py-16 px-4 md:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: "4s",
            }}
          >
            <Star className="w-10 h-10 text-pink-400 opacity-20" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div data-aos="fade-up" data-aos-delay="100" className="space-y-4">
          <h2
            className={`text-2xl font-bold ${
              glowEffect ? "text-[#766bdf]" : "text-[#0f3460]"
            } transition duration-500`}
          >
            Clement Raymond
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Building clean, scalable solutions that spark real-world impact. Powered by 💻 + ☕ = 🔥
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-col gap-3 md:items-center"
        >
          <h3 className="text-lg font-semibold text-[#766bdf]">Quick Links</h3>
               <nav className="flex flex-col md:flex-row gap-8 text-sm font-semibold">
          {links.map(({ label, href }) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `relative group transition-colors text-[#0f3460] dark:text-white duration-300 ${
                  isActive ? "text-[#766bdf]" : "hover:text-[#766bdf]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="group-hover:scale-[1.05] transition">{label}</span>
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 ${
                      isActive
                        ? "w-full bg-[#766bdf]"
                        : "w-0 bg-[#766bdf] ] group-hover:w-full"
                    } transition-all duration-300`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        </div>

        <div data-aos="fade-up" data-aos-delay="500" className="space-y-4">
          <h3 className="text-lg font-semibold text-[#766bdf]">Connect</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Clement-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <FaGithub className="text-2xl dark:text-white text-black group-hover:text-[#766bdf] transition" />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100  text-white text-xs px-2 py-1 rounded transition-all">
                GitHub
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/clement-raymond-861154335/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <FaLinkedin className="text-2xl text-blue-600 group-hover:text-[#766bdf] transition" />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 bg-black text-white text-xs px-2 py-1 rounded transition-all">
                LinkedIn
              </span>
            </a>
            <a
              href="https://wa.me/2348121090660"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <FaWhatsapp className="text-2xl text-green-500 group-hover:text-[#766bdf] transition" />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 bg-black text-white text-xs px-2 py-1 rounded transition-all">
                WhatsApp
              </span>
            </a>
          </div>
        </div>
      </div>

      <div
        data-aos="zoom-in"
        data-aos-delay="700"
        className="text-center text-sm text-gray-500 mt-12 relative z-10"
      >
        &copy; {new Date().getFullYear()} Clement Raymond. All rights reserved. 🧠⚡
      </div>
    </footer>
  );
};

export default Footer;
