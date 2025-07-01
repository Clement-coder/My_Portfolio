import React, { useState } from "react";

const blogPosts = [
  {
    title: "Building My Portfolio Website with React + Tailwind",
    summary:
      "A full breakdown of how I built a sleek and responsive portfolio using React and TailwindCSS. I used React for component-based UI and Tailwind for fast styling. The whole project was deployed on Vercel for a seamless dev experience.",
    date: "June 21, 2025",
  },
  {
    title: "JavaScript Tips for Beginners: Things I Wish I Knew",
    summary:
      "A beginner-friendly guide with practical JS tips I’ve learned along the way. This post covers variables, scoping, closures, async/await, and real-life debugging tips.",
    date: "May 12, 2025",
  },
  {
    title: "Deploying My First Project on Vercel",
    summary:
      "Step-by-step of how I pushed a React app live using GitHub and Vercel. Includes setting up the repo, adding environment variables, and auto-deploy using Git.",
    date: "April 5, 2025",
  },
];

const BlogPosts = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleReadMore = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-white dark:bg-[#0f172a] py-16 px-4 sm:px-6 lg:px-8" id="blog">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3460] dark:text-white mb-10">
          My Latest Blog Posts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md p-6 text-left hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-[#0f3460] dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>

              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                {expanded === index
                  ? post.summary
                  : post.summary.slice(0, 100) + "..."}
              </p>

              <button
                onClick={() => toggleReadMore(index)}
                className="text-[#766bdf] dark:text-blue-400 text-sm font-semibold hover:underline"
              >
                {expanded === index ? "Show Less ↑" : "Read More →"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
