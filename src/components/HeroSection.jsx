import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-white dark:bg-[#0f172a] overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <img
          src="https://blockfuselabs.com/assets/zigzag-q2OLhjMn.svg"
          alt="background"
          className="absolute bottom-10 top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[900px] opacity-20 select-none"
        />
      </div>

      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-8 grid md:grid-cols-2 items-center gap-12">
        <div className="space-y-6 text-center md:text-left" data-aos="fade-up">
          <p className="text-[#766bdf] font-bold text-lg">Clement Raymond here 👋</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#3C3867] dark:text-white leading-tight">
            I Enjoy Designing Tech Websites <br className="hidden sm:block" /> And Digital Products
          </h1>

          <p className="text-[#3C3867] dark:text-gray-300 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            I have 10 years of experience in startups and big companies like Google and more.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
          <a
  href="mailto:chinexzy37@gmail.com?subject=Let's Work Together!"
  className="px-6 py-2 rounded-xl bg-gradient-to-t from-[#766bdf]/70 to-gray-500/70 text-white hover:bg-[#6956dc] transition duration-300 shadow-md hover:shadow-purple-500/40"
>
  Hire Me
</a>

            <a
              href="/images/CV.png"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-xl bg-gradient-to-t from-[#0f3460]/70 to-gray-500/70 text-white hover:bg-[#09243f] transition duration-300 shadow-md hover:shadow-blue-900/40"
            >
              View CV
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end" data-aos="zoom-in">
          <div className="bg-gray-200/60 dark:bg-white/10 p-2 rounded-full shadow-[#6956dc]/40 w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 shadow-xl transition-all duration-300">
            <img
  src="/images/profile-removebg-preview.png"
                alt="Clement Raymond"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
