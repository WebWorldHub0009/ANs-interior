// src/components/OurStory.jsx
import React from "react";
import imgLeft from "../assets/images/home/1.jpg";
import imgRight from "../assets/images/home/2.jpg";

const OurStory = () => {
  const stats = [
    {
      value: "10+",
      label: "Years of Expertise",
      desc: "Crafting interiors & delivering excellence since 2010.",
    },
    {
      value: "500+",
      label: "Clients Served",
      desc: "Trusted by families, architects & businesses across India.",
    },
    {
      value: "1000+",
      label: "Projects Delivered",
      desc: "Interiors, construction & material solutions — all under one roof.",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] text-[#0C0C0C] px-6 md:px-12 lg:px-20 py-8 font-['Poppins']">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="flex flex-col justify-start space-y-6">
          {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-playfair leading-snug tracking-wide">
  Transforming Visions into Reality with{" "}
  <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent font-semibold">
    ANS Interior
  </span>
</h2>


          {/* Content */}
          <p className="text-[#2E2E2E] max-w-lg font-['Poppins']">
            Since 2010, ANS Interior has been a trusted name in premium interior design and
            construction. We combine creativity, craftsmanship, and attention to detail
            to deliver spaces that inspire and elevate lifestyles.
          </p>
          <p className="text-[#2E2E2E] max-w-lg font-['Poppins']">
            More than just interiors, we provide{" "}
            <span className="text-[#0C0C0C] font-medium">
              bespoke solutions, luxury material sourcing, and full-scale construction services
            </span>{" "}
            tailored to your vision.
          </p>
          <p className="text-[#2E2E2E] max-w-lg font-['Poppins']">
            Every project is a masterpiece, crafted with precision and passion, ensuring
            your dream space becomes a lasting reality.
          </p>
        </div>

        {/* Right Large Image with Caption */}
        <div className="flex flex-col space-y-4">
          <div className="relative rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
            <img
              src={imgRight}
              alt="ANS Interior Showcase"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
          <p className="text-sm italic text-[#2E2E2E] max-w-md font-['Poppins']">
            Crafting interiors that blend luxury, functionality, and style — ANS Interior
            transforms spaces into experiences.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#C9A44C]/40 mt-12"></div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-center">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="py-6 px-6 flex flex-col items-center rounded-xl bg-[#FFFFFF] shadow-lg hover:shadow-2xl transition-transform duration-500 transform hover:-translate-y-2"
          >
            <h3 className="text-4xl font-bold text-gradient bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent font-['Playfair Display']">
              {stat.value}
            </h3>
            <p className="mt-2 font-semibold text-[#0C0C0C] font-['Poppins']">
              {stat.label}
            </p>
            <p className="mt-1 text-sm text-[#2E2E2E] font-['Poppins']">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurStory;
