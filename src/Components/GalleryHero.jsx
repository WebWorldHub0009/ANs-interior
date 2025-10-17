// src/components/GalleryHero.jsx
import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/images/home/w2.jpg"; // Background image

export default function GalleryHero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden ">
      
      {/* 🔹 Background with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="ANS Interior Gallery"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-b bg-black/40"></div>
      </div>

      {/* 🔹 Floating Light Glows */}
      <div className="absolute top-12 left-16 w-40 h-40 bg-[#C5A46D]/25 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-24 right-24 w-48 h-48 bg-[#F5F5F5]/15 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-[#C5A46D]/20 rounded-full blur-2xl animate-pulse-slow delay-700"></div>

      {/* 🔹 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 sm:px-12 lg:px-24 max-w-5xl"
      >
        <h2
          className="text-sm sm:text-base uppercase tracking-[6px] text-[#C5A46D] mb-4 font-[Poppins]"
        >
          Our Premium Gallery
        </h2>

        <h1
          className="text-4xl sm:text-5xl lg:text-5xl font-[Playfair_Display] font-extrabold leading-tight text-[#F5F5F5]"
        >
          Explore the{" "}
          <span className="text-[#C5A46D]">Art of Interior Elegance</span>
        </h1>

        <p
          className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed font-[Poppins] max-w-3xl mx-auto"
        >
          Experience the <span className="text-[#C5A46D] font-semibold">beauty of craftsmanship </span> 
          and the <span className="text-white font-semibold">essence of luxury</span> in every design. 
          Each corner of our work tells a story of <span className="text-[#C5A46D]">artistry</span>, 
          <span className="text-white"> precision</span>,  and <span className="text-[#C5A46D]">elegance</span>.
        </p>

        {/* 🔹 CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(197,164,109,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#C5A46D] to-[#F5F5F5] text-black font-semibold tracking-wide shadow-lg transition-all duration-300"
          >
            Book a Consultation
          </motion.a>

          <motion.a
            href="/projects"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(255,255,255,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-[#C5A46D] bg-[#2C2C2C] text-[#C5A46D] font-semibold tracking-wide shadow-md transition-all duration-300"
          >
            View Projects
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
