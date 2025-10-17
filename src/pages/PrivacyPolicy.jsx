import React from "react";
import { motion } from "framer-motion";

// 🎨 ANS Interiors Color Palette
const colors = {
  gold: "#C5A46D",
  darkGray: "#2C2C2C",
  lightGray: "#F5F5F5",
  white: "#FFFFFF",
};

const PrivacyPolicy = () => {
  return (
    <section className="w-full min-h-screen bg-[#FFFFFF] text-[#2C2C2C] font-[Poppins] px-6 sm:px-12 lg:px-24 py-16">
      {/* 🌟 Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-[Playfair_Display] font-bold mb-8 text-center"
        style={{ color: colors.darkGray }}
      >
        Privacy Policy
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg sm:text-xl leading-relaxed text-justify mb-12"
      >
        At <span className="font-semibold text-[#C5A46D]">ANS Interiors</span>, your privacy and trust are our top priorities. This Privacy Policy outlines how we collect, use, and protect the personal information you provide while engaging with our website and services.
      </motion.p>

      {/* 🔹 Information Collection */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-[Playfair_Display] font-bold mb-3" style={{ color: colors.gold }}>
          Information We Collect
        </h2>
        <p className="text-lg leading-relaxed text-[#2C2C2C]">
          We collect personal information that you provide directly to us, such as your name, email address, phone number, and any other details necessary to provide you with our luxury interior design services.
        </p>
      </motion.div>

      {/* 🔹 Use of Information */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-[Playfair_Display] font-bold mb-3" style={{ color: colors.gold }}>
          How We Use Your Information
        </h2>
        <p className="text-lg leading-relaxed text-[#2C2C2C]">
          Your information is used to provide and improve our services, communicate with you about your projects, respond to inquiries, send service updates, and offer you personalized experiences. We never sell or share your personal data with third parties without consent.
        </p>
      </motion.div>

      {/* 🔹 Data Security */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-[Playfair_Display] font-bold mb-3" style={{ color: colors.gold }}>
          Data Security
        </h2>
        <p className="text-lg leading-relaxed text-[#2C2C2C]">
          We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our systems comply with industry standards for data protection.
        </p>
      </motion.div>

      {/* 🔹 Cookies */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-[Playfair_Display] font-bold mb-3" style={{ color: colors.gold }}>
          Cookies
        </h2>
        <p className="text-lg leading-relaxed text-[#2C2C2C]">
          Our website uses cookies to enhance your browsing experience. Cookies help us understand visitor preferences and provide a more personalized interaction with our content. You can manage or disable cookies through your browser settings.
        </p>
      </motion.div>

      {/* 🔹 Your Rights */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-[Playfair_Display] font-bold mb-3" style={{ color: colors.gold }}>
          Your Rights
        </h2>
        <p className="text-lg leading-relaxed text-[#2C2C2C]">
          You have the right to access, correct, or request deletion of your personal information. To exercise these rights, please contact us directly via email or phone. We respect your privacy choices and respond promptly to requests.
        </p>
      </motion.div>

      {/* 🔹 Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-12"
      >
        <h2 className="text-2xl sm:text-3xl font-[Playfair_Display] font-bold mb-3" style={{ color: colors.gold }}>
          Contact Us
        </h2>
        <p className="text-lg text-[#2C2C2C] mb-4">
          If you have any questions regarding this Privacy Policy, reach out to us at:
        </p>
        <p className="text-lg font-semibold text-[#C5A46D]">info@ansinteriors.in</p>
        <p className="text-lg font-semibold text-[#C5A46D]">+91 9540984553</p>
      </motion.div>
    </section>
  );
};

export default PrivacyPolicy;
