import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import heroVideoBg from "../assets/images/main/h1.jpg"; // static background image

// 🎨 ANS Interiors Colors
const colors = {
  gold: "#C5A46D",
  darkGray: "#2C2C2C",
  lightGray: "#F5F5F5",
  white: "#FFFFFF",
};

export default function VideoHero() {
  // Smooth scroll handler
  const handleScroll = () => {
    const element = document.getElementById("videos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroVideoBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✨ Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70 z-0" />

      {/* 💫 Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 sm:px-12 max-w-4xl"
      >
        {/* Subtitle */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl sm:text-2xl italic mb-4 tracking-wide font-[Poppins]"
          style={{ color: colors.lightGray }}
        >
          Experience Luxury Like Never Before
        </motion.h4>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-5xl sm:text-6xl font-[Playfair_Display] font-bold mb-6"
          style={{
            color: colors.gold,
            
          }}
        >
          ANS Interiors Videos
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg sm:text-xl text-[#F5F5F5] mb-8 font-[Poppins]"
        >
          Explore our portfolio through videos and witness the transformation of spaces with elegance, luxury, and bespoke design.
        </motion.p>

        {/* Play Button */}
        <motion.button
          onClick={handleScroll}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="inline-flex items-center cursor-pointer gap-3 px-6 py-3 bg-gradient-to-r from-[#C5A46D] to-[#F5F5F5] text-[#0E0E0E] rounded-full text-lg font-[Poppins] font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <FaPlay className="text-[#0E0E0E]" /> Watch Videos
        </motion.button>
      </motion.div>

      {/* ✨ Optional Floating Gold Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[url('/src/assets/images/home/particles.png')] bg-no-repeat bg-center bg-contain opacity-30 animate-pulse"></div>
      </div>
    </section>
  );
}
