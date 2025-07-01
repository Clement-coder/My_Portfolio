import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, onClick }) {
  const { title, image, description, tech, github, demo, type } = project;
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
        />
        <span className="absolute top-2 left-2 bg-[#766bdf] text-white px-2 py-0.5 text-xs rounded">
          {type}
        </span>
      </div>
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        <div className="flex flex-wrap gap-1">
          {tech.map((t, i) => (
            <span key={i} className="px-2 py-1 text-xs bg-[#766bdf]/10 text-[#766bdf] rounded-full">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-2">
          {demo !== "#" && (
            <a href={demo} target="_blank" rel="noopener" className="flex items-center text-blue-600 hover:underline">
              <FaExternalLinkAlt /> Live
            </a>
          )}
          <a href={github} target="_blank" rel="noopener" className="flex items-center text-gray-800 dark:text-white hover:underline">
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </div>
  );
}
