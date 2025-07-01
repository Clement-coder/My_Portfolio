import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      href: "https://github.com/Clement-coder",
      icon: <FaGithub />,
      label: "GitHub",
      color: "text-gray-600 dark:text-gray-300",
      hover: "hover:text-[#0f3460] dark:hover:text-white",
    },
    {
      href: "https://www.linkedin.com/in/clement-raymond-861154335/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      color: "text-blue-700",
      hover: "hover:text-blue-900",
    },
    {
      href: "https://wa.me/2348121090660",
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      color: "text-green-600",
      hover: "hover:text-green-800",
    },
  ];

  return (
    <div className="flex bg-white dark:bg-[#0f172a] justify-center flex-wrap gap-6 py-10">
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative group w-20 h-20 flex items-center justify-center rounded-full border border-[#0f3460] dark:border-white bg-gradient-to-tr from-[#1f2937]/30 to-[#766bdf]/20 backdrop-blur-md shadow-md transition-all duration-300 hover:border-[#766bdf] ${link.color} ${link.hover}`}
        >
          <span className="absolute top-2 left-2 text-sm text-[#766bdf] font-bold tracking-wide">{`<>`}</span>
          <span className="text-2xl z-10">{link.icon}</span>
          <span className="absolute bottom-2 right-2 text-sm text-[#766bdf] font-bold tracking-wide">{`</>`}</span>

          <span className="absolute inset-0 rounded-full before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-500 before:scale-0 group-hover:before:scale-110 before:bg-[#766bdf]/20 group-hover:before:blur-md" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
