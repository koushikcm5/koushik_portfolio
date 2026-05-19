"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown, MapPin, Zap } from "lucide-react";

const techPills = [
  "React JS", "Next JS", "Spring Boot", "React Native",
  "Flutter", "Firebase", "MySQL", "PostgreSQL",
  "Supabase", "Java", "TypeScript",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-transparent to-teal-50/30" />

      {/* Floating blobs */}
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-96 h-96 bg-emerald-200/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-[5%] w-72 h-72 bg-teal-200/15 rounded-full blur-3xl pointer-events-none"
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 pt-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for Projects
              <MapPin size={12} className="ml-1" />
              Salem, Tamil Nadu
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold leading-[1.05] tracking-tight mb-6"
          >
            <span className="block text-5xl md:text-7xl lg:text-8xl text-ink-primary">
              Koushik M
            </span>
            <span className="block text-4xl md:text-6xl lg:text-7xl mt-2">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #10b981 0%, #34d399 50%, #059669 100%)",
                  backgroundSize: "200% auto",
                  animation: "gradientShift 6s ease infinite",
                }}
              >
                Full Stack Builder
              </span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-ink-secondary max-w-2xl leading-relaxed mb-10 font-body font-light"
          >
            Co-Founder of{" "}
            <a
              href="https://growaitech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-600 hover:text-brand-700 underline underline-offset-2"
            >
              Grow AI Tech
            </a>
            . Crafting scalable web and mobile applications with modern
            technologies — turning ambitious ideas into real digital products.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-3 mb-16"
          >
            <button
              onClick={() => handleScroll("#projects")}
              className="btn-primary"
            >
              View Projects <ArrowRight size={16} />
            </button>
            <button
              onClick={() => handleScroll("#contact")}
              className="btn-secondary"
            >
              Contact Me
            </button>

          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div variants={itemVariants} className="relative">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4 flex items-center gap-2">
              <Zap size={12} className="text-brand-500" />
              Tech Stack
            </p>
            {/* Marquee wrapper */}
            <div className="overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
              <div className="flex gap-3 animate-marquee w-max">
                {[...techPills, ...techPills].map((tech, i) => (
                  <span
                    key={i}
                    className="tag-pill whitespace-nowrap flex-shrink-0"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => handleScroll("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-muted hover:text-brand-600 transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
}
