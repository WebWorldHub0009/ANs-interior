import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEye,
  FaDownload,
  FaTimes,
  FaShieldAlt,
  FaCheckCircle,
  FaUserTie,
} from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi2";

import gst from "../assets/images/doc/gst1.pdf";
import udyam1 from "../assets/images/doc/udyama1.pdf";
import udyam2 from "../assets/images/doc/udyama2.pdf";
import CertificatesHero from "../Components/CertificateHero";



// 🎨 ANS Interiors Colors
const colors = {
  gold: "#C5A46D",
  darkGray: "#2C2C2C",
  lightGray: "#F5F5F5",
  white: "#FFFFFF",
};

const certificates = [
  {
    id: 1,
    name: "GST Certificate",
    description: "Government-approved license ensuring legal compliance and taxation standards.",
    file: gst,
    tag: "Govt Approved",
  },
  {
    id: 2,
    name: "Udyam Registration 1",
    description: "Udyam Certificate under MSME proving ANS Interiors as a verified enterprise.",
    file: udyam1,
    tag: "MSME Verified",
  },
  {
    id: 3,
    name: "Udyam Registration 2",
    description: "Additional Udyam Certificate to showcase our MSME compliance and authenticity.",
    file: udyam2,
    tag: "MSME Verified",
  },
];

export default function CertificatePage() {
  const [previewFile, setPreviewFile] = useState(null);

  return (
    <>
      <CertificatesHero />

      {/* Certificates Section */}
      <section className="relative w-full bg-gradient-to-b from-[#F5F5F5] to-white py-20 px-6 font-[Poppins]">
        <div className="max-w-7xl mx-auto">

          {/* Page Title */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-[Playfair_Display] font-extrabold uppercase tracking-wide text-darkGray">
              Verified{" "}
              <span className="bg-gradient-to-r from-[#C5A46D] via-[#FFD700] to-[#FFB347] text-transparent bg-clip-text">
                Certificates
              </span>
            </h1>
            <p className="mt-4 text-lg text-darkGray max-w-3xl mx-auto">
              At <span className="font-bold text-[#C5A46D]">ANS Interiors</span>, we uphold{" "}
              <span className="text-[#C5A46D] font-semibold">transparency & trust</span>.
              Explore our official documents validating premium quality, authenticity, and compliance.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {certificates.map(({ id, name, description, file, tag }) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.05 }}
                className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-3xl"
              >
                {/* Ribbon */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FFD700] via-[#C5A46D] to-[#FFB347] text-darkGray text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {tag}
                </div>

                {/* Title */}
                <div className="flex items-center gap-4 mb-4">
                  <HiDocumentText className="text-[#FFD700] text-4xl drop-shadow-xl" />
                  <h2 className="text-xl font-[Playfair_Display] font-bold text-darkGray">{name}</h2>
                </div>

                {/* Description */}
                <p className="text-darkGray mb-6 text-base leading-relaxed flex-1">
                  {description}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                  <button
                    onClick={() => setPreviewFile(file)}
                    className="w-full sm:w-auto flex-1 bg-gradient-to-r from-[#C5A46D] to-[#FFD700] hover:from-[#A57C43] hover:to-[#FFD700] text-darkGray font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <FaEye className="animate-pulse" /> View
                  </button>

                  <a
                    href={file}
                    download
                    className="w-full sm:w-auto flex-1 border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-darkGray font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm md:text-base shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <FaDownload /> Download
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="relative bg-gradient-to-r from-black via-[#111111] to-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
            <FaShieldAlt className="text-[#FFD700] text-5xl mb-4 drop-shadow-lg" />
            <h3 className="text-xl font-[Playfair_Display] font-bold text-[#C5A46D]">Government Approved</h3>
            <p className="mt-2 text-gray-300 text-sm">All certificates are verified and approved by authorities.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
            <FaCheckCircle className="text-[#3CB371] text-5xl mb-4 drop-shadow-lg" />
            <h3 className="text-xl font-[Playfair_Display] font-bold text-[#C5A46D]">100% Authentic</h3>
            <p className="mt-2 text-gray-300 text-sm">Genuine documents ensuring trust and transparency.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center">
            <FaUserTie className="text-[#FF3333] text-5xl mb-4 drop-shadow-lg" />
            <h3 className="text-xl font-[Playfair_Display] font-bold text-[#C5A46D]">Trusted Brand</h3>
            <p className="mt-2 text-gray-300 text-sm">Serving premium clients with credibility for years.</p>
          </motion.div>
        </div>
      </section>

      {/* Preview Modal */}
      {previewFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg p-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={() => setPreviewFile(null)}
              className="absolute top-3 right-3 bg-red-600 text-white rounded-full p-2 shadow hover:bg-red-700 transition"
            >
              <FaTimes />
            </button>
            <iframe
              src={previewFile}
              title="Certificate Preview"
              className="w-full h-[80vh] border-0 rounded-b-2xl"
            />
          </motion.div>
        </div>
      )}
    </>
  );
}
