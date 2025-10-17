// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Local images
import h1 from "../assets/images/home/1.jpg";
import h2 from "../assets/images/home/2.jpg";
import h3 from "../assets/images/home/3.jpg";
import h4 from "../assets/images/home/4.jpg";

const slides = [
  {
    id: 1,
    image: h1,
    title: "Luxury Living Rooms",
    subtitle: "Elegance in Every Corner",
    desc: "Transform your living spaces with bespoke designs that reflect sophistication, comfort, and timeless beauty.",
  },
  {
    id: 2,
    image: h2,
    title: "Modern Bedrooms",
    subtitle: "Serenity & Style",
    desc: "Experience tranquility and elegance with bedrooms crafted for relaxation, style, and premium comfort.",
  },
  {
    id: 3,
    image: h3,
    title: "Exquisite Kitchens",
    subtitle: "Functional & Stunning",
    desc: "Blending functionality with aesthetic brilliance, our kitchens elevate daily living to an art form.",
  },
  {
    id: 4,
    image: h4,
    title: "Sophisticated Interiors",
    subtitle: "Tailored For You",
    desc: "Every detail, every finish, and every design element is thoughtfully created to reflect your unique taste.",
  },
];


const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#1A1A1A]">
      {/* Background Image */}
      <AnimatePresence>
        <motion.div
          key={slides[current].id}
          className="absolute inset-0"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${slides[current].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-[#F9F9F9]"
          >
            <p
              className="text-sm md:text-base mb-4 tracking-widest uppercase text-[#B0B0B0]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              0{slides[current].id}/0{slides.length}
            </p>
            <h1
              className="text-4xl md:text-6xl font-extrabold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {slides[current].title} <br />
              <span className="bg-gradient-to-r from-[#C9A44C] to-[#E3C567] bg-clip-text text-transparent">
                {slides[current].subtitle}
              </span>
            </h1>
            <p
              className="mt-6 text-base md:text-lg text-[#E5E5E5] max-w-xl"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {slides[current].desc}
            </p>
            <Link to="/showcase">
              <button
                className="cursor-pointer mt-8 px-6 py-3 border border-[#E3C567] text-[#F9F9F9] rounded-full hover:bg-gradient-to-r hover:from-[#C9A44C] hover:to-[#E3C567] hover:text-[#1A1A1A] transition"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                View More →
              </button>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Vertical Dots */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current
                ? "bg-gradient-to-r from-[#C9A44C] to-[#E3C567] scale-125"
                : "bg-[#B0B0B0]"
            }`}
          />
        ))}
      </div>

      {/* Bottom Left: Customers */}
      <div className="absolute bottom-6 left-6 flex items-center gap-3 z-20">
        <div className="flex -space-x-3">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <img
            src="https://randomuser.me/api/portraits/men/52.jpg"
            alt="user"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
        <p
          className="text-[#E5E5E5] text-sm md:text-base"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          7k+ Satisfied Customers
        </p>
      </div>
    </div>
  );
};

export default Hero;
