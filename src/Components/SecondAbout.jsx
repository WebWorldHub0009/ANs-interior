// src/components/AboutSectionAns.jsx
import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/images/home/3.jpg";

const colors = {
  gold: "#C5A46D",
  darkGray: "#2C2C2C",
  lightGray: "#F5F5F5",
  green: "#239554",
  blue: "#1A609F",
};

const AboutSectionAns = () => {
  return (
    <section className="relative w-full py-12 md:py-20 overflow-hidden font-[Poppins] bg-lightGray">
      {/* Background floating shapes */}
      <div className="absolute -top-40 -left-40 w-72 h-72 bg-[#C5A46D]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#2C2C2C]/10 rounded-full blur-3xl animate-pulse-slow delay-500"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-[Great_Vibes] font-extrabold text-darkGray leading-tight">
            Transforming Spaces into <span className="text-[#C5A46D]">Luxury</span> and <span className="text-[#2C2C2C]">Elegance</span>
          </h2>

          <p className="text-darkGray text-lg md:text-xl leading-relaxed">
            At <span className="font-semibold text-[#C5A46D]">Ans Interior</span>, we craft interiors that perfectly balance 
            <span className="text-[#C5A46D] font-medium"> style</span>, 
            <span className="text-[#2C2C2C] font-medium"> comfort</span>, and 
            <span className="text-[#239554] font-medium"> functionality</span>. 
            Every project is designed to exceed expectations and radiate sophistication.
          </p>

          <p className="text-darkGray text-lg md:text-xl leading-relaxed">
            From concept to completion, our team ensures <strong>premium quality, seamless execution, and a unique touch of elegance</strong> in every space.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="/services"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#C5A46D] to-[#239554] text-black font-semibold shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#2C2C2C] hover:bg-[#C5A46D] text-white font-semibold shadow-xl transition transform hover:-translate-y-1"
            >
              Request Quote
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full h-80 md:h-[500px] rounded-3xl shadow-2xl overflow-hidden ring-1 ring-[#C5A46D]/30"
        >
          <img
            src={aboutImg}
            alt="Ans Interior Showcase"
            className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
          />
          {/* Overlay Badge */}
          <div className="absolute bottom-6 left-6 bg-black/70 text-white px-6 py-4 rounded-xl shadow-md backdrop-blur-sm">
            <p className="text-sm uppercase tracking-wide text-[#C5A46D]">Since 2015</p>
            <h3 className="text-lg md:text-xl font-[Great_Vibes] font-bold">10+ Years of Excellence</h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSectionAns;
