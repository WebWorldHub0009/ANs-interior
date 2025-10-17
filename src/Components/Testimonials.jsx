// src/components/TestimonialSliderAns.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const colors = {
  gold: "#D4AF37",
  maroon: "#800000",
  taupe: "#D2B48C",
  cream: "#FDF5E6",
  charcoal: "#1C1C1C",
};

const testimonials = [
  { name: "Rohit Verma", title: "Homeowner, New Delhi", text: "Ans Interior completely transformed my living space with elegance and premium designs. Truly luxurious and functional!" },
  { name: "Simran Kaur", title: "Interior Designer, Delhi", text: "Their attention to detail, material quality, and craftsmanship is unmatched. Every project stands out!" },
  { name: "Ananya Sharma", title: "Architect, Delhi", text: "Perfect combination of aesthetics and practicality. Every room styled by Ans Interior feels premium and timeless." },
  { name: "Arvind Singh", title: "Office Owner, Gurugram", text: "Our workspace feels modern, classy, and professional thanks to Ans Interior. Excellent execution and style!" },
  { name: "Neha Patel", title: "Homeowner, Delhi", text: "Elegant, functional, and affordable. Every corner of my home reflects luxury and comfort." },
  { name: "Vikram Malhotra", title: "Café Owner, Delhi", text: "The decor and interior choices gave my café a unique and inviting vibe. Top-notch quality and service." },
  { name: "Priya Nair", title: "Interior Consultant, Delhi", text: "From custom furniture to lighting solutions, everything exudes sophistication. Highly recommended!" },
];

export default function TestimonialSliderAns() {
  return (
    <section className="relative w-full py-12 px-6 md:px-10 font-[Raleway] overflow-hidden">
      {/* Decorative SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill={colors.maroon}
          d="M0,64L80,74.7C160,85,320,107,480,138.7C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z"
        ></path>
      </svg>

      {/* Glowing Orbs */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-[#D4AF3725] blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#80000025] blur-3xl rounded-full animate-pulse" />

      {/* Heading */}
      <div className="relative max-w-6xl mx-auto text-center mb-10 z-10">
        <h2
          className="text-4xl md:text-5xl font-bold mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: colors.maroon,
          }}
        >
          What Our{" "}
          <span
            style={{
              color: colors.gold,
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Clients Say
          </span>
        </h2>
        <p
          className="italic mt-4 text-lg md:text-xl max-w-3xl mx-auto"
          style={{ color: colors.charcoal }}
        >
          “Elevating every space with luxury, style, and precision — trusted by homeowners, designers, and businesses alike.”
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={40}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto relative z-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative backdrop-blur-xl p-10 rounded-3xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
              style={{
                backgroundColor: "rgba(255,255,255,0.85)",
                borderColor: colors.gold,
              }}
            >
              {/* Verified Badge */}
              <span
                className="absolute -top-5 right-5 text-xs font-semibold px-4 py-1 rounded-full shadow-md"
                style={{
                  backgroundColor: colors.maroon,
                  color: colors.cream,
                }}
              >
                ★ Verified Client
              </span>

              {/* Quote Icon */}
              <div className="flex justify-center items-center mb-6" style={{ color: colors.maroon }}>
                <FaQuoteLeft className="text-4xl opacity-80" />
              </div>

              {/* Testimonial Text */}
              <p className="text-lg italic leading-relaxed mb-6" style={{ color: colors.charcoal }}>
                {item.text}
              </p>

              {/* Author Info */}
              <div className="text-center">
                <p
                  className="font-bold text-xl"
                  style={{ color: colors.gold, fontFamily: "'Playfair Display', serif" }}
                >
                  {item.name}
                </p>
                <p className="text-sm" style={{ color: colors.maroon, opacity: 0.8 }}>
                  {item.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Decorative Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill={colors.gold}
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,202.7C384,181,480,171,576,154.7C672,139,768,117,864,138.7C960,160,1056,224,1152,256C1248,288,1344,288,1392,288L1440,288V320H0Z"
        ></path>
      </svg>
    </section>
  );
}
