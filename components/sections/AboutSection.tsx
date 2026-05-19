"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Smartphone,
  TrendingUp,
  Palette,
  Video,
  Megaphone,
  Globe,
  Layers,
} from "lucide-react";

const extras = [
  { icon: TrendingUp, label: "Digital Marketing" },
  { icon: Layers, label: "UI/UX Thinking" },
  { icon: Palette, label: "Photoshop" },
  { icon: Video, label: "Video Editing" },
  { icon: Globe, label: "Creative Design" },
  { icon: Megaphone, label: "Brand Enhancement" },
];

const stats = [
  { value: "15+", label: "Projects Delivered" },
  { value: "100+", label: "Clients Served" },
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Mobile Apps Live" },
];

function AnimatedCounter({ value }: { value: string }) {
  return <span>{value}</span>;
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-surface-1 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            <Code2 size={12} />
            About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-ink-primary mb-6 leading-tight">
              Building products that{" "}
              <span className="gradient-text">matter</span>
            </h2>

            <div className="space-y-4 text-ink-secondary leading-relaxed mb-8">
              <p>
                I'm a passionate full-stack and mobile application developer
                focused on building scalable, user-friendly digital solutions
                for businesses and startups.
              </p>
              <p>
                I specialize in React JS, Next JS, React Native, Flutter, Spring
                Boot, Firebase, MySQL, and cloud-integrated applications — 
                building end-to-end products from concept to deployment.
              </p>
              <p>
                As Co-Founder of{" "}
                <a
                  href="https://growaitech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 font-medium hover:underline underline-offset-2"
                >
                  Grow AI Tech
                </a>
                , I work on real-world software products, business automation
                systems, mobile applications, and startup digital solutions.
              </p>
            </div>

            {/* Extra Skills */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">
                Beyond Development
              </p>
              <div className="flex flex-wrap gap-2">
                {extras.map((item) => (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm font-medium bg-white border border-surface-4 text-ink-secondary hover:border-emerald-300 hover:text-emerald-600 transition-colors shadow-soft"
                  >
                    <item.icon size={13} />
                    {item.label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats + Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
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
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                    className={`glass-card rounded-2xl p-6 text-center border-white/60 transition-all duration-300 hover:shadow-glass-lg ${theme.border}`}
                  >
                    <div className={`font-display font-bold text-3xl mb-1 ${theme.text}`}>
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-sm text-ink-tertiary">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* Profile card */}
            <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/30 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 via-green-500 to-teal-500 flex items-center justify-center text-white font-display font-bold text-xl flex-shrink-0 shadow-soft">
                    K
                  </div>
                  <div>
                    <div className="font-display font-semibold text-lg text-ink-primary">
                      Koushik M
                    </div>
                    <div className="text-sm text-emerald-600 font-medium">
                      Co-Founder, Grow AI Tech
                    </div>
                    <div className="text-xs text-ink-tertiary mt-1">
                      Salem, Tamil Nadu, India
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-surface-3 flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-ink-tertiary">Open to work</span>
                  </div>
                  <span className="text-surface-4">•</span>
                  <div className="flex items-center gap-1.5">
                    <Smartphone size={12} className="text-ink-muted" />
                    <span className="text-xs text-ink-tertiary">Mobile &amp; Web</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
