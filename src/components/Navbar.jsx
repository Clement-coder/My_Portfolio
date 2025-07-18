import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import {
  Bars3Icon,
  XMarkIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact Me", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white dark:bg-[#0f172a] text-[#0f3460] dark:text-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-[#766bdf] dark:text-white">
          CR DEV
        </h1>

        <nav className="hidden md:flex gap-8 text-sm font-semibold">
          {links.map(({ label, href }) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `relative group transition-colors duration-300 ${
                  isActive ? "text-[#766bdf]" : "hover:text-[#766bdf]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="group-hover:scale-[1.05] transition">
                    {label}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 ${
                      isActive
                        ? "w-full bg-[#766bdf]"
                        : "w-0 bg-[#766bdf] group-hover:w-full"
                    } transition-all duration-300`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="mailto:chinexzy37@gmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#0f3460] dark:border-white bg-gradient-to-tr from-[#1f2937]/20 to-[#766bdf]/20 hover:from-[#766bdf]/40 hover:to-[#1f2937]/40 hover:border-[#766bdf] hover:shadow-lg transition-all duration-300 backdrop-blur-sm group"
          >
            <EnvelopeIcon className="h-5 w-5 text-[#0f3460] dark:text-white group-hover:text-[#766bdf]" />
            <span className="text-sm font-medium text-[#0f3460] dark:text-white group-hover:text-[#766bdf]">
              chinexzy37@gmail.com
            </span>
          </a>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-[#766bdf]" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-[#766bdf]" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black backdrop-blur-sm z-40"
              onClick={toggleMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              key="menu"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-[#0f172a] z-50 shadow-xl p-4"
            >
              <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h2 className="text-xl font-bold text-[#766bdf] dark:text-white">
                  Menu
                </h2>
                <button onClick={toggleMenu}>
                  <XMarkIcon className="h-6 w-6 text-[#766bdf]" />
                </button>
              </div>

              {/* Animated Nav Items */}
              <motion.nav
                className="flex flex-col gap-4 text-sm font-semibold"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
                }}
              >
                {links.map(({ label, href }) => (
                  <motion.div
                    key={href}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                      exit: { opacity: 0, x: -30 },
                    }}
                  >
                    <NavLink
                      to={href}
                      className={({ isActive }) =>
                        `block ${
                          isActive ? "text-[#766bdf]" : "hover:text-[#766bdf]"
                        } transition`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </NavLink>
                  </motion.div>
                ))}

                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -30 },
                  }}
                >
                  <a
                    href="mailto:chinexzy37@gmail.com"
                    className="flex items-center gap-2 mt-4 px-4 py-2 rounded-xl border border-[#0f3460] dark:border-white bg-gradient-to-tr from-[#1f2937]/20 to-[#766bdf]/20 hover:from-[#766bdf]/40 hover:to-[#1f2937]/40 hover:border-[#766bdf] hover:shadow-lg transition-all duration-300 backdrop-blur-sm group"
                  >
                    <EnvelopeIcon className="h-5 w-5 text-[#0f3460] dark:text-white group-hover:text-[#766bdf]" />
                    <span className="text-sm font-medium text-[#0f3460] dark:text-white group-hover:text-[#766bdf]">
                      chinexzy37@gmail.com
                    </span>
                  </a>
                </motion.div>
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
