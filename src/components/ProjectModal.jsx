import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen) return null;
  const { title, description, tech, demo, github } = project;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl max-w-lg w-full relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-xl">×</button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span key={i} className="px-2 py-1 text-xs bg-[#766bdf]/10 text-[#766bdf] rounded-full">{t}</span>
          ))}
        </div>
        <div className="flex gap-4">
          {demo !== "#" && (
            <a href={demo} target="_blank" rel="noopener" className="flex items-center gap-1 text-blue-600 hover:underline">
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
          <a href={github} target="_blank" rel="noopener" className="flex items-center gap-1 text-gray-800 dark:text-white hover:underline">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
