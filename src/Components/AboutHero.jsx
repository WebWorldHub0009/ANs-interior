// src/components/AboutHeroAns.jsx
import React from "react";
import { motion } from "framer-motion";
import aboutBg from "../assets/images/home/4.jpg";

const colors = {
  gold: "#C5A46D",
  darkGray: "#2C2C2C",
  lightGray: "#F5F5F5",
  white: "#FFFFFF",
};

export default function AboutHeroAns() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden font-[Poppins]">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={aboutBg}
          alt="Ans Interior Background"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50"></div>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6 sm:px-16 lg:px-24 z-10 max-w-4xl"
      >
        <h2
          className="text-sm sm:text-lg tracking-widest uppercase mb-4 font-[Great_Vibes]"
          style={{ color: colors.gold }}
        >
          Ans Interior
        </h2>
        <h1
          className="text-3xl sm:text-5xl lg:text-6xl font-[Great_Vibes] font-extrabold text-white mb-6 leading-tight"
        >
          Transforming Spaces into <span style={{ color: colors.gold }}>Luxury</span> and <span style={{ color: colors.darkGray }}>Elegance</span>
        </h1>
        <p
          className="text-lightGray sm:text-lg mb-8 leading-relaxed"
          style={{ color: colors.lightGray }}
        >
          We specialize in creating premium interiors that combine <span style={{ color: colors.gold, fontWeight: "600" }}>style</span>, 
          <span style={{ color: colors.darkGray, fontWeight: "600" }}> comfort</span>, and 
          <span style={{ color: colors.gold, fontWeight: "600" }}> functionality</span>. 
          Your dream space, realized with precision and luxury.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(197,164,109,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C5A46D] to-[#2C2C2C] text-black font-semibold shadow-lg transition"
          >
            Explore Services
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(44,44,44,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-[#2C2C2C] hover:bg-[#C5A46D] text-white font-semibold shadow-lg transition"
          >
            Request Quote
          </motion.a>
        </div>

        {/* Floating Premium Shapes */}
        <div className="absolute top-10 left-5 w-16 h-16 bg-[#C5A46D]/30 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#2C2C2C]/25 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </motion.div>
    </section>
  );
}
