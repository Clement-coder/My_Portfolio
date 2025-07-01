import React from "react";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript } from "react-icons/si";

const skills = [
  {
    icon: <FaReact size={40} className="text-blue-500" />,
    title: "React",
    description: "Building fast, dynamic UIs using React.js.",
  },
  {
    icon: <FaNodeJs size={40} className="text-green-600" />,
    title: "Node.js",
    description: "Backend APIs and logic with Node and Express.",
  },
  {
    icon: <SiJavascript size={40} className="text-yellow-500" />,
    title: "JavaScript",
    description: "Strong core knowledge of JS for frontend & backend.",
  },
  {
    icon: <SiTailwindcss size={40} className="text-cyan-500" />,
    title: "Tailwind CSS",
    description: "Clean, responsive and fast UI design with utility classes.",
  },
  {
    icon: <SiMongodb size={40} className="text-green-700" />,
    title: "MongoDB",
    description: "NoSQL database for flexible data management.",
  },
  {
    icon: <FaFigma size={40} className="text-pink-500" />,
    title: "UI/UX Design",
    description: "Crafting intuitive and appealing user experiences.",
  },
];

const Expertise = () => {
  return (
    <section className="w-full mb-10 bg-white dark:bg-[#0f172a] py-16 px-4 sm:px-6 lg:px-8" id="expertise">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3460] dark:text-white mb-4">
          My Expertise
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          I specialize in both frontend and backend technologies to build modern, scalable web applications.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-left hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-[#0f3460] dark:text-white mb-2">{skill.title}</h3>
              <p className="text-gray-700 dark:text-gray-400 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
