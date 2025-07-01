import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";

const Contact = () => {
  return (
    <section className="bg-white dark:bg-[#0f172a] py-20 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3460] dark:text-white">
          Contact Me
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-7xl mx-auto">
          Let’s connect and build something amazing together. I’m open to collaboration and remote work!
        </p>
      </div>

      <div className="mt-12">
        <ContactForm />
      </div>

      <div className="mt-12">
        <SocialLinks />
      </div>
                    <Footer/>

    </section>
  );
};

export default Contact;
