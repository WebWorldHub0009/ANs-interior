// src/components/HowWeWork.jsx
import React from "react";

export default function HowWeWork() {
  const steps = [
    {
      title: "PLANNING",
      desc: "We analyze your space in detail and craft customized interior solutions for optimal aesthetics, functionality, and luxury.",
    },
    {
      title: "DESIGN",
      desc: "Our skilled designers create realistic 3D previews of rooms, furniture, ceilings, and decor, helping you visualize your dream space.",
    },
    {
      title: "INSTALLATION",
      desc: "With precision and high-quality materials, we execute every installation flawlessly—from furniture to false ceilings and custom finishes.",
    },
    {
      title: "AFTER-SALES SERVICE",
      desc: "We ensure long-term satisfaction with reliable maintenance, support, and guidance for all your interior needs.",
    },
  ];

  return (
    <section className="w-full bg-[#F5F7FA] py-12 px-6 md:px-12 lg:px-20 font-[Poppins]">
      {/* Title */}
      <div className="text-center mb-4">
        <h2 className="text-2xl md:text-4xl font-[Playfair_Display] font-semibold text-[#011A3C] tracking-wide relative inline-block">
          HOW WE WORK
          <span className="block w-16 h-[2px] bg-gradient-to-r from-[#C5A46D] to-[#E3C567] mx-auto mt-3"></span>
        </h2>
        {/* Quote */}
        <p className="mt-4 text-[#515151] text-sm md:text-base italic max-w-xl mx-auto">
          "Transforming spaces into luxurious, functional, and timeless interiors—one step at a time."
        </p>
      </div>

      {/* Steps with connecting line */}
      <div className="relative mt-10">
        {/* Horizontal Line (only for large screens) */}
        <div className="hidden lg:block absolute top-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C5A46D] to-[#E3C567]"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Dot */}
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#C5A46D] to-[#E3C567] mx-auto mb-6"></div>
              {/* Title */}
              <h3 className="text-lg font-[Playfair_Display] font-semibold text-[#011A3C] mb-4 tracking-wide">
                {step.title}
              </h3>
              {/* Description */}
              <p className="text-[#1E1E1E] leading-relaxed text-sm md:text-base">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
