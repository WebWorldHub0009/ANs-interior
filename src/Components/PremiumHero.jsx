// src/components/ServicesSection.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import smartHomeImg from "../assets/images/main/home.jpg";
import furnitureImg from "../assets/images/main/fur.jpg";
import bedroomImg from "../assets/images/main/bed.jpg";
import kitchenImg from "../assets/images/main/kit.jpg";
import falseImg from "../assets/images/main/false.jpg"
import wallpaper from "../assets/images/main/u.jpg"
import curtain from "../assets/images/main/p6.jpg"

const services = [
  { title: "Premium Curtains", img: curtain, route: "/services/curtains" },
  { title: "Smart Homes", img: smartHomeImg, route: "/services/smart-homes" },
  { title: "Custom Furniture", img: furnitureImg, route: "/services/furniture" },
  { title: "Bedroom Design", img: bedroomImg, route: "/services/bedroom-design" },
  { title: "Luxury Kitchen Design", img: kitchenImg, route: "/services/luxury-kitchen" },
  { title: "False Ceiling / POP Design", img: falseImg, route: "/services/false-ceiling" },
  { title: "Wallpaper Design", img: wallpaper, route: "/services/wallpaper-design" },
];

const ServicesSection = () => {
  const [startIdx, setStartIdx] = useState(0);

  // rotate services every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx(prev => (prev + 3) % services.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // get 3 services for current view
  const currentServices = [
    services[startIdx % services.length],
    services[(startIdx + 1) % services.length],
    services[(startIdx + 2) % services.length],
  ];

  return (
    <section className="flex flex-col md:flex-row min-h-screen w-full text-[#1C1C1C] font-['Poppins'] relative overflow-hidden">
      {/* Left Panel */}
      <div className="bg-[#F5F5F5] w-full md:w-[30%] flex flex-col justify-between p-8 md:p-10 relative z-10 shadow-xl">
        <div className="flex flex-col gap-6 mb-6">
          <span className="text-xl font-bold tracking-wide">
            Ans{" "}
            <span className="bg-gradient-to-r from-[#C5A46D] to-[#E3C567] bg-clip-text text-transparent">
              Interior
            </span>
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Playfair_Display'] leading-tight">
            Premium <br />
            <span className="bg-gradient-to-r from-[#C5A46D] to-[#E3C567] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
        </div>

        <div className="flex flex-col justify-end h-full">
          <p className="text-[#515151] max-w-xs mb-4 text-sm sm:text-base leading-relaxed">
            Explore our wide range of interior solutions — bedroom & living designs, luxury kitchens, curtains, smart homes, false ceilings, wallpapers, furniture, and more.
          </p>
          <Link to="/contact">
            <button className="cursor-pointer group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#C5A46D] to-[#E3C567] text-black rounded-md shadow-lg hover:opacity-90 transition font-semibold text-sm sm:text-base w-fit">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>

      {/* Right Panels */}
      <div className="flex-1 flex flex-col md:flex-row transition-all duration-700">
        {currentServices.map((service, idx) => (
          <Link
            key={idx}
            to={service.route}
            className="relative flex-1 group overflow-hidden h-full  shadow-lg cursor-pointer"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 transition duration-700"></div>
            <div className="absolute bottom-6 left-6 opacity-90 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-[1px] h-10 bg-[#E5E5E5]/60 mb-3"></div>
              <span className="text-sm text-[#B0B0B0]">{`0${idx + 1}`}</span>
              <h3 className="text-2xl font-['Playfair_Display'] mt-1 text-white">
                {service.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
