import React from "react";

const testimonials = [
  {
    name: "Longs Penum Gotar",
    role: "Founder of Blockfuse Labs",
    message: "Clement is one of the most dedicated developers I’ve mentored. He tackles challenges with passion and creativity.",
    image: "https://res.cloudinary.com/dcl3ecscw/image/upload/v1732253199/team/bjshox10yihirj51ynbs.png",
  },
  {
    name: "Adaaku Peter",
    role: "Mentor at Blockfuse Labs/CEO @Blockfuse Labs",
    message: "He delivers his work with quality and speed. A great team player who thinks outside the box.",
    image: "https://res.cloudinary.com/dcl3ecscw/image/upload/v1732253422/team/mzy3zcycnai0hiqhwirc.png",
  },
  {
    name: "Samuel Victor",
    role: "Top engineer @Blockfuse Labs",
    message: "His frontend work is beautiful and user-friendly. He always considers design principles in implementation.",
    image: "https://res.cloudinary.com/dcl3ecscw/image/upload/v1732253873/team/kjpr6rroqix2qefrekuo.png",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-[#0f172a] py-16 px-4 sm:px-6 lg:px-8" id="testimonials">
      <div className="max-w-7xl mx-auto text-left">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0f3460] dark:text-white mb-10">
          What People Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold text-[#0f3460] dark:text-white">{item.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.role}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">“{item.message}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
