import React from "react";
import { motion } from "framer-motion";
import VideoHero from "../Components/VideoHero";
import vid from "../assets/images/main/vidp.mp4"


// 🎨 ANS Interiors Colors
const colors = {
  gold: "#C5A46D",
  darkGray: "#2C2C2C",
  lightGray: "#F5F5F5",
  white: "#FFFFFF",
};

export default function VideoPage() {
  return (
    <div className="w-full min-h-screen bg-[#0E0E0E] text-white font-[Poppins]">
      {/* Hero Section */}
      <VideoHero/>

      {/* Video Section */}
      <section
        id="videos"
        className="w-full flex flex-col items-center justify-center py-10 px-6 sm:px-12 lg:px-24"
      >
        {/* Small Heading */}
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg sm:text-xl text-[#C5A46D] font-[Playfair_Display] mb-3 uppercase tracking-wide"
        >
          Explore Our Work
        </motion.h4>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-lg sm:text-xl md:text-2xl font-[Playfair_Display] text-[#F5F5F5] max-w-3xl mb-12 italic"
        >
          "Transforming spaces into luxurious, timeless works of art with precision and elegance."
        </motion.p>

        {/* Video Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full max-w-4xl rounded-3xl overflow-hidden "
        >
          <iframe
            className="w-full h-[500px] md:h-[600px] lg:h-[700px]"
            src={vid} // Replace with your ANS Interiors video
            title="ANS Interiors Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
}
