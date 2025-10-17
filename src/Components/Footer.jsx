// src/components/FooterAnsInterior.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaLayerGroup,
  FaCogs,
  FaAngleDoubleUp,
  FaLightbulb,
  FaCertificate,
  FaClipboardList,
  FaImage,
  FaVideo,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import footerBg from "../assets/images/main/cbg.jpg"; // ✅ your bg image

const colors = {
  gold: "#C5A46D",
  darkGray: "#2C2C2C",
  lightGray: "#F5F5F5",
  white: "#FFFFFF",
};

const serviceItems = [
  { title: "Luxury Interior Design", slug: "luxury-interior-design", icon: FaLayerGroup },
  { title: "Modular Kitchens & Wardrobes", slug: "modular-kitchens-wardrobes", icon: FaCogs },
  { title: "Home Renovation", slug: "home-renovation", icon: FaHome },
  { title: "Custom Furniture & Decor", slug: "custom-furniture-decor", icon: FaAngleDoubleUp },
  { title: "Lighting & False Ceiling", slug: "lighting-false-ceiling", icon: FaLightbulb },
  { title: "Space Planning", slug: "space-planning", icon: FaLayerGroup },
  { title: "Turnkey Interior Solutions", slug: "turnkey-interior-solutions", icon: FaCogs },
];

export default function FooterAnsInterior() {
  return (
    <footer
      className="relative pt-12 pb-4 px-6 md:px-16 overflow-hidden"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* 🔹 Background Image + Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/80  z-0" />

      {/* 🔹 Content Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-white">
        {/* About Section */}
        <div className="flex flex-col space-y-4">
          <h3
            className="text-4xl md:text-3xl font-[Playfair_Display] font-bold"
            style={{ color: colors.gold }}
          >
            ANS INTERIOR
          </h3>
          <p className="leading-relaxed text-[#F5F5F5]/90">
            Transforming spaces into luxurious, functional, and timeless interiors.
            From bespoke design to modular solutions — redefining spaces with elegance.
          </p>

          {/* Social Icons */}
          <div className="mt-5 flex space-x-4">
            {[
              ["https://www.instagram.com", FaInstagram],
              ["https://www.facebook.com", FaFacebookF],
              ["https://api.whatsapp.com/send/?phone=919540984553&text=Hello%20Ans%20Interiors", FaWhatsapp],
            ].map(([url, Icon], i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#C5A46D] text-white hover:text-[#2C2C2C] transition duration-300 shadow-lg"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Email CTA */}
          <div className="mt-3">
            <a
              href="mailto:Info@ansinteriors.in"
              className="inline-flex items-center gap-2 bg-[#C5A46D] text-[#2C2C2C] px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#2C2C2C] transition duration-300 shadow-md"
            >
              <FaEnvelope /> Email Us
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            className="text-2xl font-[Playfair_Display] font-semibold mb-2"
            style={{ color: colors.gold }}
          >
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Services", "/services", <FaLayerGroup />],
              ["Gallery", "/gallery", <FaImage />],
              ["Video", "/video", <FaVideo />],
              ["Certificates", "/certificates", <FaCertificate />],
              ["Privacy Policy", "/privacy-policy", <FaClipboardList />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 text-[#F5F5F5] hover:text-[#C5A46D] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Emails */}
          <div className="mt-8">
            <h4
              className="text-2xl font-[Playfair_Display] font-semibold mb-2"
              style={{ color: colors.gold }}
            >
              Email
            </h4>
            <a href="mailto:Info@ansinteriors.in" className="text-[#F5F5F5] hover:text-[#C5A46D] block">
              Info@ansinteriors.in
            </a>
            <a href="mailto:ansinteriors@gmail.com" className="text-[#F5F5F5] hover:text-[#C5A46D] block mt-1">
              ansinteriors@gmail.com
            </a>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h4
            className="text-2xl font-[Playfair_Display] font-semibold mb-4"
            style={{ color: colors.gold }}
          >
            Our Services
          </h4>
          <ul className="space-y-3">
            {serviceItems.map(({ title, slug, icon: Icon }, i) => (
              <li key={i} className="flex items-center gap-2">
                <Icon style={{ color: colors.gold }} />
                <Link
                  to={`/services/${slug}`}
                  className="text-[#F5F5F5] hover:text-[#C5A46D] transition duration-300"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Business Info */}
          <div className="mt-4">
            <h4
              className="text-2xl font-[Playfair_Display] font-semibold mb-2"
              style={{ color: colors.gold }}
            >
              Business Numbers
            </h4>
            <div className="text-[#F5F5F5]/90 text-sm space-y-1">
              <p><strong>NCS ID:</strong> E19K75-1423123646319</p>
              <p><strong>GST No:</strong> 07FHJPS7778L3Z3</p>
              <p><strong>UDYAM No:</strong> UDYAM-DL-03-0053545</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4
            className="text-2xl font-[Playfair_Display] font-semibold mb-2"
            style={{ color: colors.gold }}
          >
            Contact Info
          </h4>
          <address className="not-italic leading-relaxed mb-4 text-[#F5F5F5]/90">
            House No. 2066, 5th Floor, Street Number 26, <br />
            Near Axis & Kotak Bank ATM, Tughlakabad Extension, <br />
            New Delhi, Delhi 110019
          </address>

          {["+91 9540984553", "+91 9910330368", "+91 9811330368"].map((num, i) => (
            <p key={i} className="text-sm mb-2 flex items-center gap-2 text-[#F5F5F5]/90">
              <FaPhoneAlt style={{ color: colors.gold }} />
              <a href={`tel:${num.replace(/\s/g, "")}`} className="hover:text-[#C5A46D] transition duration-300">
                {num}
              </a>
            </p>
          ))}

          <div className="mt-4">
            <Translator />
          </div>
        </div>
      </div>

      {/* 🔹 Footer Bottom */}
      <div className="mt-10 text-center border-t border-white/10 pt-6 text-sm relative z-10 text-[#F5F5F5]/90 space-y-2">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} ANS Interior. All Rights Reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#C5A46D] hover:text-white transition duration-300"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </footer>
  );
}
