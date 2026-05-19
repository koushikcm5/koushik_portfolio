"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, CheckCircle2, ExternalLink, Rocket } from "lucide-react";

const services = [
  "Startup Product Development",
  "Mobile App Development",
  "Business Automation",
  "AI Solutions",
  "Website Development",
  "Digital Branding",
  "SEO & Marketing",
];

const companyStats = [
  { label: "Live Projects", value: "10+" },
  { label: "Clients", value: "100+" },
  { label: "Mobile Apps", value: "10+" },
  { label: "Web Applications", value: "6+" },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            <Building2 size={12} />
            Experience
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink-primary mb-4 leading-tight">
            Where I Build
          </h2>
          <p className="text-ink-secondary max-w-xl mb-16">
            Co-founding and engineering at the intersection of technology and
            business growth.
          </p>
        </motion.div>

        {/* Company Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="glass-card rounded-3xl overflow-hidden">
            {/* Header band */}
            <div className="relative bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 md:p-10 overflow-hidden">
              <div className="absolute inset-0 bg-noise opacity-30" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="relative flex flex-wrap items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <Rocket size={22} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white/70 text-xs font-medium uppercase tracking-widest">
                        Current Role
                      </div>
                      <div className="text-white font-semibold text-sm">
                        Co-Founder & Full Stack Developer
                      </div>
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-white">
                    Grow AI Tech
                  </h3>
                  <p className="text-white/70 text-sm mt-1">2022 — Present · Salem, Tamil Nadu</p>
                </div>
                <a
                  href="https://growaitech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-sm text-white text-sm font-medium rounded-xl border border-white/20 hover:bg-white/25 transition-colors"
                >
                  Visit Website <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Body */}
            <div className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-10">
                {/* Left */}
                <div>
                  <p className="text-ink-secondary leading-relaxed mb-8">
                    Grow AI Tech is a technology company focused on software
                    development, business growth solutions, AI-integrated
                    systems, and startup digital transformation. We help
                    businesses modernize, scale, and compete in the digital era.
                  </p>

                  {/* Services */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">
                      What We Build
                    </p>
                    <div className="space-y-2.5">
                      {services.map((service, i) => (
                        <motion.div
                          key={service}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + i * 0.06 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0" />
                          <span className="text-sm text-ink-secondary">{service}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Stats */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">
                    By the Numbers
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {companyStats.map((stat, i) => {
                      const colorMap = [
                        { text: "text-emerald-600", border: "hover:border-emerald-300/80" },
                        { text: "text-green-600", border: "hover:border-green-300/80" },
                        { text: "text-teal-600", border: "hover:border-teal-300/80" },
                        { text: "text-teal-600", border: "hover:border-teal-300/80" },
                      ];
                      const theme = colorMap[i % colorMap.length];
                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.35 + i * 0.08 }}
                          className={`bg-surface-1 rounded-2xl p-5 border border-surface-3 transition-all duration-300 hover:shadow-soft ${theme.border} group`}
                        >
                          <div className={`font-display font-bold text-2xl group-hover:scale-105 transition-transform ${theme.text}`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-ink-tertiary mt-1">{stat.label}</div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Timeline */}
                  <div className="mt-6 p-5 bg-surface-1 rounded-2xl border border-surface-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-3">
                      Milestones
                    </p>
                    <div className="space-y-3">
                      {[
                        { year: "2022", event: "Founded Grow AI Tech" },
                        { year: "2023", event: "First 5 client projects delivered" },
                        { year: "2024", event: "Launched 2 mobile applications" },
                        { year: "2025", event: "Expanded to AI-integrated solutions" },
                      ].map((item) => (
                        <div key={item.year} className="flex items-start gap-3">
                          <span className="font-mono text-xs text-emerald-600 font-medium w-10 flex-shrink-0 pt-0.5">
                            {item.year}
                          </span>
                          <span className="text-sm text-ink-secondary">{item.event}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
