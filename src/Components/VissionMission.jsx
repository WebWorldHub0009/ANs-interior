// src/components/VisionMissionAns.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaBullseye } from "react-icons/fa";

const colors = {
  gold: "#C5A46D",
  darkGray: "#2C2C2C",
  lightGray: "#F5F5F5",
  green: "#239554",
  blue: "#1A609F",
};

export default function VisionMissionAns() {
  return (
    <section className="relative py-16 px-6 overflow-hidden bg-lightGray font-[Poppins]">
      
      {/* Floating premium shapes */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#C5A46D]/30 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#2C2C2C]/20 rounded-full blur-3xl animate-pulse-slow delay-500"></div>

      {/* SVG Background Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="premiumPattern" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="60" cy="60" r="2" fill={colors.gold} />
            <path d="M60 0 L120 60 L60 120 L0 60 Z" stroke={colors.gold} strokeWidth="0.4" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#premiumPattern)" />
      </svg>

      {/* Section Header */}
      <div className="relative text-center max-w-5xl mx-auto mb-20 z-10">
        <h3 className="text-xl uppercase tracking-[6px] mb-3" style={{ color: colors.darkGray }}>
          Our Belief
        </h3>
        <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: colors.darkGray }}>
          Vision <span style={{ color: colors.gold }}>&</span> Mission
        </h2>
        <p className="text-lg md:text-xl text-darkGray max-w-3xl mx-auto">
          At <span className="font-semibold text-[#C5A46D]">Ans Interior</span>, every creation is a masterpiece — combining 
          <span className="text-[#C5A46D] font-medium"> luxury</span>, 
          <span className="text-[#2C2C2C] font-medium"> elegance</span>, and 
          <span className="text-[#239554] font-medium"> comfort</span> to transform spaces into stories that resonate with beauty and harmony.
        </p>
      </div>

      {/* Cards */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Vision Card */}
        <motion.div
          whileHover={{ y: -12, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="group relative bg-white/70 backdrop-blur-lg p-10 rounded-3xl border border-[#C5A46D]/30 shadow-lg"
        >
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{ background: `linear-gradient(135deg, rgba(197,164,109,0.2), rgba(44,44,44,0.2))` }}
          ></div>
          <div className="relative flex flex-col items-center text-center z-10">
            <div
              className="flex items-center justify-center w-24 h-24 rounded-full mb-6 shadow-lg"
              style={{ background: `linear-gradient(135deg, ${colors.darkGray}, ${colors.gold})`, color: colors.lightGray }}
            >
              <FaEye size={40} />
            </div>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.darkGray }}>
              Our Vision
            </h3>
            <p className="text-base leading-relaxed text-darkGray">
              To be the most trusted interior design brand, renowned for turning every space into an enchanting story of sophistication, elegance, and personalized luxury.
              <br /><br />
              We envision a world where interiors not only impress visually but also elevate the way people live, work, and feel in every corner.
            </p>
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          whileHover={{ y: -12, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="group relative bg-white/70 backdrop-blur-lg p-10 rounded-3xl border border-[#C5A46D]/30 shadow-lg"
        >
          <div
            className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{ background: `linear-gradient(135deg, rgba(197,164,109,0.2), rgba(44,44,44,0.2))` }}
          ></div>
          <div className="relative flex flex-col items-center text-center z-10">
            <div
              className="flex items-center justify-center w-24 h-24 rounded-full mb-6 shadow-lg"
              style={{ background: `linear-gradient(135deg, ${colors.gold}, ${colors.darkGray})`, color: colors.lightGray }}
            >
              <FaBullseye size={40} />
            </div>
            <h3 className="text-2xl font-semibold mb-4" style={{ color: colors.darkGray }}>
              Our Mission
            </h3>
            <p className="text-base leading-relaxed text-darkGray">
              To craft interiors that are both visually stunning and highly functional, blending innovation, sustainability, and artistry.
              <br /><br />
              Every project reflects our commitment to excellence, attention to detail, and a seamless experience that turns dreams into reality.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
