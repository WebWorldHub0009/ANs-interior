import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaUser,
} from "react-icons/fa";
import bgContact from "../assets/images/home/4.jpg";
import ContactHero from "../Components/ContactHero";
import MapSection from "../Components/MapSection";

const services = [
  { title: "Luxury Interior Design", slug: "luxury-interior-design" },
  { title: "Modular Kitchens & Wardrobes", slug: "modular-kitchens-wardrobes" },
  { title: "Home Renovation", slug: "home-renovation" },
  { title: "Custom Furniture & Decor", slug: "custom-furniture-decor" },
  { title: "Lighting & False Ceiling", slug: "lighting-false-ceiling" },
  { title: "Space Planning", slug: "space-planning" },
  { title: "Turnkey Interior Solutions", slug: "turnkey-interior-solutions" },
];

const colors = {
  gold: "#C5A46D",
  darkGray: "#2C2C2C",
  lightGray: "#F5F5F5",
  white: "#FFFFFF",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      {/* 🌟 Contact Section */}
      <section
        className="w-full min-h-screen flex flex-col lg:flex-row font-[Poppins] text-black relative overflow-hidden"
        style={{ backgroundColor: colors.white }}
      >
        {/* Decorative Glow Shapes */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#C5A46D]/15 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#2C2C2C]/10 blur-3xl rounded-full"></div>

        {/* 🔹 Left Info Section */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-16 flex flex-col justify-between relative z-10"
        >
          <div>
            <h1 className="text-4xl sm:text-5xl font-[Playfair_Display] font-bold leading-tight mb-6 uppercase flex items-center gap-3">
              <FaUser className="text-[#C5A46D]" />
              <span>
                <span className="text-[#C5A46D]">Let’s</span>{" "}
                <span className="text-[#928b8b]">Get in Touch</span>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-800 mb-10 leading-relaxed">
              Connect with{" "}
              <span className="text-[#C5A46D] font-semibold">
                Ans Interior
              </span>{" "}
              for bespoke interior design services that transform spaces into
              timeless works of art. Our experts blend{" "}
              <span className="text-[#C5A46D] font-semibold">luxury</span> and{" "}
              <span className="text-[#2C2C2C] font-semibold">precision</span>{" "}
              to make your dream home a reality.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 text-sm sm:text-base">
              <div>
                <h4 className="font-semibold flex items-center gap-2 text-[#C5A46D] text-lg mb-2">
                  <FaPhoneAlt className="text-[#C5A46D]" /> Phone
                </h4>
                <div className="flex flex-col gap-1 text-gray-800">
                  <a href="tel:+919540984553" className="hover:text-[#C5A46D] transition">
                    +91 95409 84553
                  </a>
                  <a href="tel:+919910330368" className="hover:text-[#C5A46D] transition">
                    +91 99103 30368
                  </a>
                  <a href="tel:+919811330368" className="hover:text-[#C5A46D] transition">
                    +91 98113 30368
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold flex items-center gap-2 text-[#928b8b] text-lg mb-2">
                  <FaEnvelope className="text-[#C5A46D]" /> Email
                </h4>
                <p>info@ansinteriors.in</p>
                <p>ansinteriors@gmail.com</p>
              </div>

              <div>
                <h4 className="font-semibold flex items-center gap-2 text-[#C5A46D] text-lg mb-2">
                  <FaMapMarkerAlt className="text-[#C5A46D]" /> Address
                </h4>
                <p>
                  House No. 2066, 5th Floor, Street Number 26,
                  <br />
                  Near Axis & Kotak Bank ATM, Tughlakabad Extension,
                  <br />
                  New Delhi, Delhi 110019
                </p>
              </div>

              <div>
                <h4 className="font-semibold flex items-center gap-2 text-[#928b8b] text-lg mb-2">
                  <FaClock className="text-[#C5A46D]" /> Office Hours
                </h4>
                <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex gap-5 text-2xl">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-[#C5A46D] transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-[#C5A46D] transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/919540984553"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-[#25D366] transition-all duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 🔸 Right Section - Contact Form */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative flex items-center justify-center"
        >
          <div
            id="contact-form"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgContact})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#2C2C2C]/70 to-black/90"></div>

          <form
            action="https://formsubmit.co/info@ansinteriors.in"
            method="POST"
            className="relative z-10 w-full px-6 sm:px-12 lg:px-16 py-16"
          >
            <h3 className="text-xl font-[Playfair_Display] font-semibold mb-6 border-b-2 border-[#C5A46D] pb-1 inline-block uppercase tracking-wide text-[#F5F5F5] flex items-center gap-2">
              <FaEnvelope className="text-[#C5A46D]" /> Send Us a Message
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="bg-transparent border-b border-gray-500 p-2 focus:outline-none text-white placeholder-gray-400 focus:border-[#C5A46D] transition-all"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="bg-transparent border-b border-gray-500 p-2 focus:outline-none text-white placeholder-gray-400 focus:border-[#C5A46D] transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="bg-transparent border-b border-gray-500 p-2 focus:outline-none text-white placeholder-gray-400 focus:border-[#C5A46D] transition-all"
              />
              <select
                name="service"
                required
                className="bg-transparent border-b border-gray-500 p-2 focus:outline-none text-white placeholder-gray-400 focus:border-[#C5A46D] transition-all"
              >
                <option value="" disabled selected>
                  Select Service
                </option>
                {services.map((s, idx) => (
                  <option key={idx} value={s.slug} className="text-black">
                    {s.title}
                  </option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="col-span-1 sm:col-span-2 bg-transparent border-b border-gray-500 p-2 focus:outline-none resize-none h-28 text-white placeholder-gray-400 focus:border-[#C5A46D] transition-all"
              ></textarea>

              <button
                type="submit"
                className="cursor-pointer col-span-1 sm:col-span-2 bg-gradient-to-r from-[#C5A46D] to-[#F5F5F5] text-[#0E0E0E] font-[Poppins] font-bold py-3 mt-6 rounded-full hover:scale-105 hover:shadow-[0_0_25px_rgba(197,164,109,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaEnvelope /> Send Message
              </button>
            </div>

            {/* Hidden Inputs */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://www.ansinteriors.in/"
            />
          </form>
        </motion.div>
      </section>

      {/* 🗺️ Map Section */}
      <MapSection />
    </>
  );
}
