import React from 'react';
import MyProjects from '../components/MyProjects';
import SocialLinks from '../components/SocialLinks';
import Footer from '../components/Footer';

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0f172a] transition-all duration-500">
      <main className="flex-grow">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <MyProjects />

          <div className="mt-14">
            <SocialLinks />
          </div>
        </section>
      </main>

      <div className="px-4 mb-10 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
};

export default Projects;
