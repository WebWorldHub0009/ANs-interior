// src/pages/ServiceDetailPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import services from "../data/serviceData";
import ServicesSection from "../Components/PremiumHero";

export default function ServiceDetailPage() {
  const { route } = useParams();
  const service = services.find((s) => s.route === `/services/${route}`);

  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen bg-lightGray">
        <h2 className="text-3xl font-[Playfair_Display] font-bold text-darkGray">
          Service Not Found
        </h2>
      </div>
    );
  }

  return (
    <>
    <div className="relative bg-lightGray font-[Poppins]">
      {/* SVG Grid Background */}
    {/* SVG Grid Background */}
<div className="absolute inset-0 w-full h-full pointer-events-none">
  <svg
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 800 800"
  >
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M40 0H0V40" stroke="#C5A46D" strokeWidth="0.3" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
</div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold text-center text-darkGray mb-4">
          {service.title}
        </h1>

        {/* Quote */}
        <p className="text-center text-lg md:text-xl italic text-darkGray/70 mb-8">
          "{service.quote}"
        </p>

        {/* Subtitle */}
        <h3 className="text-center text-2xl md:text-3xl font-[Playfair_Display] font-medium text-darkGray/80 mb-12">
          {service.subtitle}
        </h3>

        {/* Image + Overview */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
          <div className="md:w-1/2">
            <img
              src={service.img}
              alt={service.title}
              className="w-full rounded-3xl shadow-2xl border border-lightGray hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2 ">
            <h4 className="text-3xl font-[Playfair_Display] font-semibold mb-6 text-darkGray">
              Overview
            </h4>
            <p className="text-darkGray text-base md:text-lg leading-relaxed">
              {service.overview}
            </p>
          </div>
        </div>

        {/* Features + Why Us */}
        <div className="flex flex-col md:flex-row items-start gap-12 mb-4">
          {/* Features */}
          <div className="md:w-1/2">
            <h4 className="text-3xl font-[Playfair_Display] font-semibold mb-4 text-darkGray">
              Features
            </h4>
            <ul className="list-disc list-inside space-y-3 text-darkGray text-base md:text-lg">
              {service.features.map((feat, idx) => (
                <li key={idx}>{feat}</li>
              ))}
            </ul>
          </div>

          {/* Why Us */}
          <div className="md:w-1/2 ">
            <h4 className="text-3xl font-[Playfair_Display] font-semibold mb-4 text-darkGray">
              Why Choose Us
            </h4>
            <p className="text-darkGray text-base md:text-lg leading-relaxed">
              {service.whyUs}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-[#C5A46D] via-[#F5F5F5] to-[#C5A46D] text-darkGray font-[Playfair_Display] font-semibold px-10 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </div>
<ServicesSection/>
    </>
  );
}
