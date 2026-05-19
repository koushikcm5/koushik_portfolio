"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section tracking
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/45 backdrop-blur-2xl border-b border-white/45 shadow-[0_16px_48px_rgba(6,95,70,0.10)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Magnetic strength={10}>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="font-display font-bold text-xl tracking-tight text-ink-primary hover:text-brand-600 transition-colors"
            >
              K<span className="text-brand-600">.</span>M
            </a>
          </Magnetic>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/50 bg-white/50 px-2 py-1.5 backdrop-blur-2xl shadow-[0_10px_34px_rgba(6,95,70,0.08)]">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-brand-700"
                    : "text-ink-secondary hover:text-ink-primary hover:bg-white/65"
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg border border-emerald-200/70 bg-gradient-to-br from-emerald-50/90 to-white/80 shadow-[0_8px_24px_rgba(16,185,129,0.12)] -z-10"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Magnetic strength={12}>
              <a
                href="https://growaitech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/55 bg-white/55 px-4 py-2 text-sm font-medium text-ink-secondary shadow-[0_10px_30px_rgba(6,95,70,0.06)] backdrop-blur-xl hover:text-brand-600 transition-colors"
              >
                Grow AI Tech <ExternalLink size={13} />
              </a>
            </Magnetic>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-2xl border border-white/60 bg-white/55 p-2.5 text-ink-secondary shadow-[0_10px_26px_rgba(6,95,70,0.08)] backdrop-blur-xl transition-colors hover:text-brand-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-4 right-4 z-40 rounded-3xl border border-white/60 bg-white/70 p-4 shadow-[0_24px_80px_rgba(6,95,70,0.12)] backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 rounded-2xl text-sm font-medium text-ink-secondary hover:text-brand-600 hover:bg-white/80 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-2 flex border-t border-emerald-100/70 pt-3">
                <a
                  href="https://growaitech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-2xl border border-emerald-200/60 bg-white/70 py-2.5 text-center text-sm font-medium text-ink-secondary transition-colors hover:border-brand-300"
                >
                  Grow AI Tech
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
