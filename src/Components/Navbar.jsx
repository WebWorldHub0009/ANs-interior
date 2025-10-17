import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
  FaCouch,
  FaInfoCircle,
  FaPhoneAlt,
  FaAward,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import LogoImg from "../assets/ans.png"
/* Premium ANS INTERIOR Color Palette */
const colors = {
  primary: "#0C0C0C", // Luxury Black
  gold: "#D4AF37", // Premium Touch
  beige: "#F5E8C7", // Champagne Elegance
  charcoal: "#2E2E2E", // Balance Gray
  ivory: "#FAFAFA", // Text Contrast
  maroon: "#800000", // Luxury Accent
  white:"000000"
};

const navItems = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "About", path: "/about", icon: <FaInfoCircle /> },
  { name: "Services", path: "/services", icon: <FaCouch /> },
  { name: "Gallery", path: "/gallery", icon: <FaAward /> },
  { name: "Contact", path: "/contact", icon: <FaPhoneAlt /> },
];

const socialLinks = {
  facebook: "https://www.facebook.com/ansinterior",
  instagram: "https://www.instagram.com/ansinterior/",
  linkedin: "https://www.linkedin.com/company/ansinterior/",
};

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navLinkStyle = (path) => ({
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 10px",
    cursor: "pointer",
    fontFamily: "'Poppins', sans-serif",
    color: pathname === path ? colors.gold : colors.ivory,
    fontWeight: pathname === path ? "600" : "400",
    transition: "all 0.3s ease",
    position: "relative",
    letterSpacing: "0.5px",
  });

  return (
    <>
      {/* 🔹 Top Info Bar */}
     {/* 🔹 Top Info Bar */}
<div
  className="hidden md:block"
  style={{
    background: colors.charcoal,
    color: colors.beige,
    fontFamily: "'Poppins', sans-serif",
    fontSize: "14px",
    borderBottom: `1px solid ${colors.gold}`,
  }}
>
  <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-2">
    <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-1">
      <p className="flex items-center gap-2">
        <MdEmail style={{ color: colors.gold }} />
        <a
          href="mailto:info@ansinterior.com"
          className="hover:text-gold transition"
        >
          info@ansinterior.com
        </a>
      </p>
      <p className="flex items-center gap-2">
        <FaPhoneAlt style={{ color: colors.gold }} />
        <a href="tel:+919540984553" className="hover:text-gold transition">
          +91 9540984553
        </a>
      </p>
    </div>

    <div className="hidden md:flex flex-col md:flex-row md:items-center md:gap-6 gap-1 text-right leading-tight">
      <p className="flex items-center gap-2 text-[12px]">
        <FaAward style={{ color: colors.gold }} /> NCS ID: <b>E19K75-1423123646319</b>
      </p>
      <p className="flex items-center gap-2 text-[12px]">
        <FaAward style={{ color: colors.gold }} /> GST No: <b>07FHJPS7778L3Z3</b>
      </p>
      <p className="flex items-center gap-2 text-[12px]">
        <FaAward style={{ color: colors.gold }} /> UDYAM-DL-03-0053545
      </p>
    </div>
  </div>
</div>

<nav
  style={{
    backgroundColor: "#FFFFFF", // White background
    color: "#0C0C0C", // Black text
    zIndex: 50,
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)", // Subtle shadow for premium look
  }}
  className="w-full px-4 py-3 md:px-12 transition-shadow duration-300"
>
  <div className="max-w-7xl mx-auto flex justify-between items-center">
  
      <Link to="/" className="flex items-center gap-2">
      <img
        src={LogoImg}
        alt="ANS Interior Logo"
        className="w-full h-12 md:w-full md:h-14 object-contain" 
      />
    </Link>

    {/* Desktop Nav */}
    <ul className="hidden md:flex gap-3 text-sm uppercase">
      {navItems.map((item) => (
        <li key={item.path}>
          <Link
            to={item.path}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 10px",
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              color: "#0C0C0C",
              fontWeight: pathname === item.path ? "600" : "400",
              transition: "all 0.3s ease",
            }}
          >
            {item.icon}
            {item.name}
          </Link>
        </li>
      ))}
    </ul>

    {/* Desktop Social Icons */}
    <div className="hidden md:flex items-center gap-3">
      {Object.entries(socialLinks).map(([k, url]) => {
        const Icon =
          k === "facebook"
            ? FaFacebookF
            : k === "instagram"
            ? FaInstagram
            : FaLinkedinIn;
        return (
          <a
            key={k}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "34px",
              height: "34px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF", // White background
              color: "#0C0C0C", // Black icon
              border: `1px solid ${colors.gold}`,
              transition: "all 0.3s ease",
            }}
            className="hover:bg-gold hover:text-white"
          >
            <Icon size={14} />
          </a>
        );
      })}
    </div>

    {/* Mobile Hamburger */}
    <div style={{ color: "#0C0C0C" }} className="md:hidden">
      <FaBars onClick={toggleMenu} className="cursor-pointer text-2xl" />
    </div>
  </div>

  {/* 📱 Mobile Menu */}
  {isMenuOpen && (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        ref={panelRef}
        style={{
          width: "75vw",
          maxWidth: "20rem",
          background: "#FFFFFF", // Mobile menu white bg
          color: "#0C0C0C", // Mobile text black
          boxShadow: "-2px 0 12px rgba(0,0,0,0.25)", // stronger shadow for depth
        }}
        className="h-full px-6 py-4 flex flex-col transition-all duration-300"
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
      <img
        src={LogoImg}
        alt="ANS Interior Logo"
        className="w-full h-12 md:w-full md:h-14 object-contain" 
      />
    </Link>
          <FaTimes
            style={{ color: "#0C0C0C" }}
            className="text-xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        <hr className="my-4 border-gray-300" />

        {/* Mobile Nav Links */}
        <nav className="flex flex-col gap-3 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: pathname === item.path ? colors.gold : "#0C0C0C",
                fontWeight: pathname === item.path ? "600" : "400",
                fontFamily: "'Poppins', sans-serif",
              }}
              onClick={toggleMenu}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        {/* WhatsApp Button */}
        <div className="mt-6">
          <a
            href="https://wa.me/+919540984553"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "100%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              borderRadius: "9999px",
              backgroundColor: "#25D366",
              color: "#FFFFFF",
              fontWeight: "600",
              padding: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.15)", // subtle shadow for button
            }}
            className="hover:opacity-90 transition"
          >
            <FaWhatsapp /> WhatsApp Us
          </a>
        </div>

        {/* Mobile Footer Info */}
        <div className="mt-auto pt-6 border-t border-gray-300 flex flex-col gap-2 text-sm">
          <p className="flex items-center gap-2">
            <MdEmail style={{ color: colors.gold }} />
            <a
              href="mailto:info@ansinterior.com"
              className="hover:text-gold transition"
            >
              info@ansinterior.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt style={{ color: colors.gold }} />
            <a href="tel:+919540984553" className="hover:text-gold transition">
              +91 9540984553
            </a>
          </p>
          <div className="text-[12px] mt-2">
            <p>NCS ID: E19K75-1423123646319</p>
            <p>GST No: 07FHJPS7778L3Z3</p>
            <p>UDYAM-DL-03-0053545</p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className="flex-1"
        style={{
          background: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(6px)",
        }}
        onClick={() => setIsMenuOpen(false)}
      />
    </div>
  )}
</nav>


    </>
  );
};

export default ModernNavbar;
