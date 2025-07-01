import React from 'react';
import Expertise from '../components/Expertise';
import Testimonials from '../components/Testimonial';
import BlogPosts from '../components/BlogPost';
import SocialLinks from '../components/SocialLinks';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0f172a] transition-all duration-500">
      <main className="flex-grow">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          <Expertise />
          <Testimonials />
          <BlogPosts />
          <SocialLinks />
        </section>
      </main>

      <div className="px-4 mb-10 sm:px-6 lg:px-8">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
