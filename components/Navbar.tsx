"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";

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
            ? "py-3 bg-white/90 backdrop-blur-xl shadow-soft border-b border-surface-3"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-display font-bold text-xl tracking-tight text-ink-primary hover:text-brand-600 transition-colors"
          >
            K<span className="text-brand-600">.</span>M
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-brand-600 bg-brand-50"
                    : "text-ink-secondary hover:text-ink-primary hover:bg-surface-2"
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg bg-brand-50 -z-10"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://growaitech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-secondary hover:text-brand-600 transition-colors"
            >
              Grow AI Tech <ExternalLink size={13} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-ink-secondary hover:bg-surface-2 transition-colors"
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
            className="fixed top-[60px] left-4 right-4 z-40 glass-card rounded-2xl p-4 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium text-ink-secondary hover:text-brand-600 hover:bg-brand-50 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="border-t border-surface-3 pt-3 mt-2 flex">
                <a
                  href="https://growaitech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 rounded-xl text-sm font-medium border border-surface-4 text-ink-secondary hover:border-brand-300 transition-colors"
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
