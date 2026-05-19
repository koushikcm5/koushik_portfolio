"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Layers, Database, Smartphone, Palette, Zap } from "lucide-react";

const skillCategories = [
  {
    label: "Frontend",
    icon: Layers,
    color: "bg-green-50 text-green-700 border-green-100",
    accentBg: "from-green-500 to-teal-400",
    skills: [
      { name: "React JS", level: 95 },
      { name: "Next JS", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    label: "Backend",
    icon: Cpu,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    accentBg: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Spring Boot", level: 88 },
      { name: "Java", level: 90 },
      { name: "REST APIs", level: 92 },
      { name: "Firebase", level: 87 },
      { name: "Supabase", level: 82 },
    ],
  },
  {
    label: "Database",
    icon: Database,
    color: "bg-amber-50 text-amber-600 border-amber-100",
    accentBg: "from-amber-500 to-orange-500",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 85 },
    ],
  },
  {
    label: "Mobile",
    icon: Smartphone,
    color: "bg-pink-50 text-pink-600 border-pink-100",
    accentBg: "from-pink-500 to-rose-500",
    skills: [
      { name: "React Native", level: 88 },
      { name: "Flutter", level: 82 },
      { name: "Android (Java)", level: 80 },
    ],
  },
  {
    label: "Creative",
    icon: Palette,
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    accentBg: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Photoshop", level: 75 },
      { name: "Video Editing", level: 72 },
      { name: "Digital Marketing", level: 80 },
      { name: "UI/UX Design", level: 78 },
    ],
  },
];

function SkillBar({
  name,
  level,
  delay,
  accentBg,
  inView,
}: {
  name: string;
  level: number;
  delay: number;
  accentBg: string;
  inView: boolean;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-medium text-ink-secondary">{name}</span>
        <span className="text-xs font-mono text-ink-muted">{level}%</span>
      </div>
      <div className="h-1.5 bg-surface-3 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${accentBg}`}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-shell section-padding bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-[-6rem] top-1/3 h-72 w-72 rounded-full bg-teal-100/14 blur-3xl pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label">
            <Zap size={12} />
            Expertise
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink-primary leading-tight">
            Technical Skills
          </h2>
          <p className="text-ink-secondary mt-3 max-w-xl">
            A comprehensive skill set spanning web, mobile, backend, and creative
            disciplines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="glass-card-hover rounded-[1.75rem] p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border ${cat.color}`}
                >
                  <cat.icon size={18} />
                </div>
                <span className="font-display font-semibold text-lg text-ink-primary">
                  {cat.label}
                </span>
              </div>

              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={ci * 0.1 + si * 0.08}
                  accentBg={cat.accentBg}
                  inView={inView}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card-hover mt-12 rounded-[1.75rem] p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-5 text-center">
            All Technologies
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "React JS", "Next JS", "TypeScript", "JavaScript", "HTML5", "CSS3",
              "Tailwind CSS", "Spring Boot", "Java", "REST API", "Firebase",
              "Supabase", "MySQL", "PostgreSQL", "React Native", "Flutter",
              "Android", "Git", "GitHub", "Vercel", "Photoshop",
              "Digital Marketing", "SEO", "Video Editing",
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="tag-pill cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
