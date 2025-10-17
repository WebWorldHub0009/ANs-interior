// src/components/StatsSection.jsx
import React from "react";
import { motion, useAnimation, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bgImage from "../assets/images/home/3.jpg"; // Background image

const colors = {
  primary: "#011A3C",
  secondary: "#C5A46D",
  accent: "#E3C567",
  neutralDark: "#FFFFFF",
  highlight: "#D1D9E6",
  accentHighlight: "#E63946",
};

// Updated Stats Data for Ans Interior
const statsData = [
  { number: 98, label: "Customer Satisfaction" },
  { number: 94, label: "Client Retention" },
  { number: 92, label: "Projects Completed" },
  { number: 87, label: "Skilled Designers" },
  { number: 95, label: "Luxury Quality" },
];

// Smooth number counter animation
const AnimatedCounter = ({ target, inView }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  React.useEffect(() => {
    if (inView) {
      const controls = animate(count, target, { duration: 1.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [target, inView]);

  return <motion.span>{rounded}</motion.span>;
};

const StatsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  return (
    <section
      ref={ref}
      className="relative w-full py-16 flex flex-col items-center justify-center"
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full px-4">
        {/* Top Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm md:text-base text-white mb-3 tracking-widest uppercase font-semibold"
        >
          Ans Interior
        </motion.div>

        {/* Heading */}
        <div className="flex items-center mb-8 w-full justify-center">
          <div className="flex-1 h-1 bg-secondary rounded-full mr-4"></div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-[Playfair_Display] font-bold text-center text-white relative"
          >
            “Our Craft & Design Speak For Themselves”
            <span className="absolute -bottom-4 left-1/2 w-32 h-1 bg-accent rounded-full transform -translate-x-1/2"></span>
          </motion.h2>
          <div className="flex-1 h-1 bg-secondary rounded-full ml-4"></div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-3xl mb-12 text-white text-lg md:text-xl font-[Poppins]"
        >
          At Ans Interior, we blend luxury, functionality, and innovation to create spaces that reflect your style and elevate your lifestyle.
        </motion.p>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 w-full max-w-6xl mb-16">
          {statsData.map((stat, index) => {
            const offset = circumference - (circumference * stat.number) / 100;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={controls}
                variants={{
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: index * 0.3 },
                  },
                }}
                className="flex flex-col items-center justify-center"
              >
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg className="w-28 h-28 rotate-[-90deg]">
                    <circle
                      cx="50%"
                      cy="50%"
                      r={radius}
                      stroke={colors.highlight}
                      strokeWidth="10"
                      fill="none"
                    />
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r={radius}
                      stroke={colors.accent}
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference}
                      animate={
                        inView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }
                      }
                      transition={{
                        duration: 1.5,
                        delay: index * 0.3,
                        ease: "easeInOut",
                      }}
                      style={{ strokeLinecap: "round" }}
                    />
                  </svg>
                  <span className="absolute text-2xl md:text-3xl font-bold text-white font-[Poppins]">
                    <AnimatedCounter target={stat.number} inView={inView} />%
                  </span>
                </div>
                <p className="text-center text-white font-medium mt-4 text-base md:text-lg font-[Poppins]">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl px-4 font-[Poppins]"
        >
          <p className="text-white text-base md:text-lg leading-relaxed">
            Every project reflects our passion for excellence. From skilled designers to high-end materials, Ans Interior consistently delivers interiors that are luxurious, functional, and timeless.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
