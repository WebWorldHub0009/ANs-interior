import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/images/main/c1.jpg"; // Replace with your certificates hero background

// 🎨 ANS Interiors Colors
const colors = {
  gold: "#C5A46D",
  darkGray: "#2C2C2C",
  lightGray: "#F5F5F5",
  white: "#FFFFFF",
};

export default function CertificatesHero() {
  return (
    <section
      className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✨ Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-0" />

      {/* 💫 Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6 sm:px-12 max-w-3xl"
      >
        {/* Small Heading */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg sm:text-xl font-[Playfair_Display] uppercase tracking-wider mb-3"
          style={{ color: colors.gold }}
        >
          Our Achievements
        </motion.h4>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-[Playfair_Display] font-bold mb-6"
          style={{
            color: colors.white,
            
          }}
        >
          Certified Excellence
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl font-[Poppins] text-[#F5F5F5] max-w-2xl mx-auto"
        >
          At ANS Interiors, every project is backed by recognized certifications
          ensuring our commitment to quality, precision, and luxury design.
        </motion.p>
      </motion.div>

      {/* ✨ Optional Floating Gold Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[url('/src/assets/images/home/particles.png')] bg-no-repeat bg-center bg-contain opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
}
