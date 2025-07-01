import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Sample projects
const projects = [
  {
    title: "Cash-Hub (Money App)",
    image: "https://via.placeholder.com/600x400.png?text=Cash+Hub",
    description: "A simple peer-to-peer money transfer app built with JavaScript and localStorage.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/yourusername/cash-hub",
    demo: "https://cashhub.vercel.app",
  },
    {
    title: "E-Commerce (Shopping Cart)",
    image: "https://via.placeholder.com/600x400.png?text=Cash+Hub",
    description: "A simple peer-to-peer money transfer app built with JavaScript and localStorage.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Clement-coder/E_Commerce_Cart",
    demo: "https://e-commerce-cart-otwr.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: "https://via.placeholder.com/600x400.png?text=Portfolio",
    description: "My personal portfolio site built with React, showcasing my work and blog.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/yourusername/portfolio",
    demo: "",
  },
  {
    title: "News Blog API",
    image: "https://via.placeholder.com/600x400.png?text=News+API",
    description: "A simple REST API for posting and reading blog articles. Built with Node.js and Express.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/yourusername/news-api",
    demo: "#",
  },
];

const MyProjects = () => {
  return (
    <section className="bg-white dark:bg-[#0f172a] py-16 px-4 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3460] dark:text-white">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
            Here are some of the real-world projects I’ve built — solving problems with code and creativity.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-[#0f3460] dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-[#766bdf]/10 dark:bg-white/10 text-[#766bdf] dark:text-white rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4 pt-2">
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-gray-800 dark:text-white hover:underline"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
