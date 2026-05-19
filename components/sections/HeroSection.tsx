"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown, MapPin, Zap } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

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
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, -110]);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="section-shell relative flex min-h-screen flex-col justify-center overflow-hidden bg-transparent"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/45 via-white/10 to-teal-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.88),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.12),transparent_28%)]" />

      {/* Floating blobs */}
      <motion.div
        style={{ y: orbY }}
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] h-96 w-96 rounded-full bg-emerald-200/15 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-[5%] h-72 w-72 rounded-full bg-teal-200/15 blur-3xl pointer-events-none"
      />
      <div className="absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-100/10 blur-3xl pointer-events-none" />
      <div className="absolute right-[8%] top-[18%] hidden h-72 w-72 xl:block">
        <motion.div
          animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-6 rounded-[2.5rem] border border-white/55 bg-white/16 shadow-[0_22px_60px_rgba(6,95,70,0.14)] backdrop-blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-14 rounded-[2.25rem] border border-emerald-200/60 bg-gradient-to-br from-white/70 to-emerald-100/20 shadow-[0_18px_54px_rgba(16,185,129,0.16)] backdrop-blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-2 top-10 h-20 w-20 rounded-[1.5rem] border border-white/60 bg-white/20 backdrop-blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 12, 0], x: [0, -10, 0] }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 left-4 h-24 w-24 rounded-[1.75rem] border border-emerald-200/70 bg-gradient-to-br from-emerald-100/40 to-white/20 backdrop-blur-3xl"
        />
      </div>

      <motion.div style={{ y: contentY }} className="container-custom relative z-10 pt-24">
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
            <Magnetic strength={16}>
              <button
                onClick={() => handleScroll("#projects")}
                className="btn-primary min-w-[170px]"
              >
                View Projects <ArrowRight size={16} />
              </button>
            </Magnetic>
            <Magnetic strength={14}>
              <button
                onClick={() => handleScroll("#contact")}
                className="btn-secondary min-w-[150px]"
              >
                Contact Me
              </button>
            </Magnetic>

          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div variants={itemVariants} className="relative">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4 flex items-center gap-2">
              <Zap size={12} className="text-brand-500" />
              Tech Stack
            </p>
            {/* Marquee wrapper */}
            <div className="overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />
              <div className="rounded-[1.75rem] border border-white/60 bg-white/45 px-4 py-4 shadow-[0_18px_54px_rgba(6,95,70,0.08)] backdrop-blur-2xl">
                <div className="flex w-max gap-3 animate-marquee">
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
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

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
