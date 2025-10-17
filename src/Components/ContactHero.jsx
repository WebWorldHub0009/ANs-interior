import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/images/main/h2.jpg"; // Ans Interior background

export default function ContactHero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden ">
      
      {/* 🔹 Background with Black-Gold Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt="Ans Interior Background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b bg-black/40"></div>
      </div>

      {/* 🔹 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-6 sm:px-12 lg:px-24 z-10 max-w-5xl"
      >
        <h2
          className="text-sm sm:text-base uppercase tracking-[6px] text-[#C5A46D] mb-5 font-[Poppins] font-semibold"
          style={{ letterSpacing: "5px" }}
        >
          Get in Touch
        </h2>

        <h1
          className="text-4xl sm:text-5xl lg:text-5xl text-white leading-tight mb-6 font-[Playfair_Display] font-bold"
        >
          Let’s Design Your{" "}
          <span className="text-[#C5A46D]">Dream Space</span>
          <br />
          With <span className="text-[#F5F5F5]">Ans Interior</span>
        </h1>

        <p
          className="text-[#E0E0E0] sm:text-lg mb-10 leading-relaxed max-w-3xl mx-auto font-[Inter]"
        >
          Experience <span className="text-[#C5A46D] font-semibold">premium interior design</span> with
          a touch of sophistication. Each project reflects{" "}
          <span className="text-white font-semibold">luxury</span>,
          <span className="text-[#C5A46D] font-semibold"> comfort</span>, and a seamless blend of art and architecture.
        </p>

        {/* 🔹 Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6 font-[Poppins]">
          <motion.a
            href="tel:+919540984553"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(197,164,109,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-[#2C2C2C] hover:bg-[#000000] border border-[#C5A46D] text-[#C5A46D] font-semibold tracking-wide shadow-md transition-all duration-300"
          >
            📞 Call Now
          </motion.a>

          <motion.a
            href="mailto:ansinteriors@gmail.com"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(197,164,109,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#C5A46D] to-[#F5F5F5] text-black font-semibold tracking-wide shadow-lg transition-all duration-300"
          >
            ✉️ Email Us
          </motion.a>
        </div>

        {/* 🔹 Floating Glow Effects */}
        <div className="absolute top-16 left-12 w-28 h-28 bg-[#C5A46D]/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-16 w-36 h-36 bg-[#F5F5F5]/10 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#C5A46D]/10 rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
      </motion.div>
    </section>
  );
}
