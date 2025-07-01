import React, { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const toggleAbout = () => setShowMore(!showMore);

  return (
    <section className=" mx-auto bg-white  dark:bg-[#0f172a] py-12 px-4 sm:px-6 lg:px-8 transition-all duration-500 w-full">
    <div className="max-w-7xl mx-auto">
        <div className=" grid grid-cols-1 group md:grid-cols-2 gap-10 lg:gap-20 items-center">

        {/* Image Section */}
        <div data-aos="zoom-in-right" className="w-full">
          <img
            src="src/assets/images/bloc.jpeg"
            alt="Clement Working"
            className="w-full h-auto object-cover rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.01] transition duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="space-y-3 text-left" data-aos="fade-left">

          {/* Label */}
          <div className="inline-block px-2 py-5 pr-20 bg-gradient-to-r from-[#766bdf]/50 to-gray-500/20 border-l-4 border-[#766bdf] rounded-xl text-sm font-semibold text-[#0f3460] dark:text-white transition-all duration-500 ease-in-out group-hover:-translate-y-5 group-hover:shadow-md group-hover:shadow-purple-500/20">
            About Me
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-xl lg:text-4xl font-bold text-[#3C3867] dark:text-white">
            Passionate Developer & Problem Solver
          </h2>

          {/* Short Paragraph */}
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-md leading-relaxed">
            I'm Clement Raymond, a creative developer who loves building beautiful digital products and solving real-world problems with tech.
            I have experience working with startups and big companies like Google.
          </p>

          {/* Extra Paragraph - Toggle */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              showMore ? "opacity-100 max-h-[500px] mt-2" : "opacity-0 max-h-0 overflow-hidden"
            }`}
          >
            <p className="text-gray-700 dark:text-gray-300 text-base sm:text-md leading-relaxed">
              Whether it’s frontend magic or backend logic, I enjoy bringing ideas to life.
              Outside work, I vibe with music, explore design trends, and share my knowledge with junior devs.
              Let’s build something powerful and impactful together 💪🔥.
            </p>
          </div>

          {/* Toggle Button */}
          <div className="pt-2">
            <button
              onClick={toggleAbout}
              className="px-5 py-2 rounded-xl border border-[#0f3460] dark:border-white dark:text-white bg-gradient-to-tr from-[#1f2937]/20 to-[#766bdf]/20 hover:from-[#766bdf]/40 hover:to-[#1f2937]/40 hover:border-[#766bdf] hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
            >
              {showMore ? "Show Less About Me" : "Show More About Me"}
            </button>
          </div>
        </div>
      </div>
<div className="grid sm:grid-cols-2 mt-6 gap-4 text-sm text-gray-700 dark:text-gray-300 pt-4" data-aos="fade-up">
  <p><span className="font-semibold text-[#766bdf]">Role:</span> Frontend Developer</p>
  <p><span className="font-semibold text-[#766bdf]">Location:</span> Jos, Nigeria 🌍</p>
  <p><span className="font-semibold text-[#766bdf]">Experience:</span> 3+ years</p>
  <p><span className="font-semibold text-[#766bdf]">Availability:</span> Open to Work 💼</p>
</div>

{/* ⚙️ Tech Stack */}
<div className="flex flex-wrap gap-3 pt-6" data-aos="zoom-in-up">
  {["React", "Next.js", "Tailwind", "JavaScript", "Git", "Firebase"].map((tech) => (
    <span
      key={tech}
      className="px-3 py-1 bg-[#766bdf]/10 text-[#766bdf] text-xs font-medium rounded-full border border-[#766bdf]/30"
    >
      {tech}
    </span>
  ))}
</div>

<p className="text-[#0f3460] dark:text-white pt-6 font-medium" data-aos="fade-out" data-aos-delay="300">
  Want to build something together?{" "}
  <a href="#contact" className="text-[#766bdf] underline hover:text-[#5a54c4] transition duration-300">
    Let’s connect!
  </a>
</p>


    </div>

        
    </section>
  );
};

export default About;
