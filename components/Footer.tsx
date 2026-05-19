"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, MessageCircle, ExternalLink, Heart } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const social = [
  { icon: Github, href: "https://github.com/koushikm", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/koushikm", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/919XXXXXXXXX", label: "WhatsApp" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ink-primary text-white relative overflow-hidden">
      {/* Top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      {/* Subtle bg */}
      <div className="absolute inset-0 bg-noise opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display font-bold text-2xl mb-3">
              K<span className="text-emerald-400">.</span>M
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-5">
              Building scalable digital experiences with modern technologies.
              Co-Founder of Grow AI Tech.
            </p>
            <div className="flex gap-2">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-emerald-600 hover:text-white transition-all"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-white/60 hover:text-emerald-400 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-5">
              Company
            </p>
            <a
              href="https://growaitech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-emerald-400 transition-colors group mb-4"
            >
              Grow AI Tech
              <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <p className="text-xs text-white/30 leading-relaxed">
              Technology company focused on software development, business growth
              solutions, and AI-integrated systems.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-white/30 flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} Koushik M. Built with
            <Heart size={11} className="text-red-400 fill-red-400" />
            in Salem, India.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-xs font-medium text-white/40 hover:text-emerald-400 transition-colors group"
          >
            Back to top
            <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-emerald-600 transition-colors">
              <ArrowUp size={13} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
