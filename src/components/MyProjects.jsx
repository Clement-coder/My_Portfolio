import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import projectsData from "./ProjectsData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const MyProjects = () => {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const allTechs = [
    "All",
    ...new Set(projectsData.flatMap((project) => project.tech)),
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.tech.includes(filter));

  return (
    <section
      className="bg-white dark:bg-[#0f172a] py-20 px-4 sm:px-6 lg:px-8"
      id="projects"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-10" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3460] dark:text-white">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2 mx-auto text-sm sm:text-base">
            Real-world apps built with love, solving real-world problems through clean code.
          </p>
        </div>

        <div
          className="flex flex-wrap justify-start gap-3 mb-10"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          {allTechs.map((tech, index) => (
            <button
              key={index}
              onClick={() => setFilter(tech)}
              className={`px-4 py-1 text-sm rounded-2xl border ${
                filter === tech
                  ? "bg-gradient-to-t from-[#0f3460] to-gray-500 text-white"
                  : "px-4 py-2 rounded-xl dark:text-white border border-[#0f3460] dark:border-white bg-gradient-to-tr from-[#1f2937]/20 to-[#766bdf]/20 hover:from-[#766bdf]/40 hover:to-[#1f2937]/40 hover:border-[#766bdf] hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-[#0f3460] dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-[#766bdf]/10 dark:bg-white/10 text-[#766bdf] dark:text-white rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-3">
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

        {filteredProjects.length === 0 && (
          <p
            className="text-center text-gray-500 dark:text-gray-400 mt-10"
            data-aos="fade-in"
          >
            No project found under "{filter}" category.
          </p>
        )}
      </div>
    </section>
  );
};

export default MyProjects;
