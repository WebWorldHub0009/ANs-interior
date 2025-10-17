// src/components/WhatWeDo.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Images
import smartHomeImg from "../assets/images/main/home.jpg";
import furnitureImg from "../assets/images/main/fur.jpg";
import bedroomImg from "../assets/images/main/bed.jpg";
import livingImg from "../assets/images/main/interior.jpg";
import kitchenImg from "../assets/images/main/kit.jpg";

const colors = {
  gold: "#C5A46D",
  darkGray: "#2C2C2C",
  lightGray: "#F5F5F5",
  white: "#FFFFFF",
};

const services = [
  {
    title: "Smart Homes",
    img: smartHomeImg,
    desc: "Elevate your lifestyle with intelligent interior solutions designed for comfort, sophistication, and elegance.",
  },
  {
    title: "Our Product Range",
    img: furnitureImg,
    desc: "Explore custom furniture and bespoke décor — precision-crafted to match your vision and elevate your space.",
  },
  {
    title: "Bedroom Design",
    img: bedroomImg,
    desc: "Relax in a modern sanctuary — we blend luxury finishes and cozy elements for a tranquil bedroom retreat.",
  },
  {
    title: "Living Room Design",
    img: livingImg,
    desc: "Create a warm, inviting, and stylish living room where design meets functionality in every detail.",
  },
  {
    title: "Kitchen Design",
    img: kitchenImg,
    desc: "Crafted for beauty and practicality — modern kitchens with perfect balance of storage, lighting, and design.",
  },
];

const WhatWeDo = () => {
  return (
    <section
      className="relative py- px-6 md:px-16 overflow-hidden bg-[#F5F5F5]"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
    

      {/* Decorative background grid lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Branding */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-lg md:text-xl text-[#2C2C2C] mb-2 font-semibold tracking-wide uppercase"
      >
        Ans Interior
      </motion.p>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl lg:text-6xl text-center font-[Playfair_Display] font-bold mb-12 leading-tight text-[#2C2C2C]"
      >
        Experience the Elegance of{" "}
        <span className="text-[#C5A46D]">Premium Interiors</span>
      </motion.h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative z-10"
      >
        {services.map((service, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="flex flex-col items-center overflow-hidden  transition-all duration-500 border border-[#EAEAEA]"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[45vh] object-cover"
              />
              <div className="p-6 text-center">
                <h3
                  className="text-2xl font-[Playfair_Display] font-bold mb-2 text-[#C5A46D]"
                >
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-[#2C2C2C] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center mt-12"
      >
        <Link
          to="/contact"
          className="bg-[#C5A46D] text-[#FFFFFF] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#2C2C2C] transition-all duration-500 shadow-lg"
        >
          Contact Us Today
        </Link>
      </motion.div>

      {/* Subtext */}
      <p className="text-center text-sm md:text-base mt-4 text-[#2C2C2C] font-medium">
        Don’t hesitate — reach out to us for expert design guidance and tailored services.
      </p>
    </section>
  );
};

export default WhatWeDo;
