"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Smartphone,
  Globe,
  CheckCircle2,
  FolderOpen,
  Filter,
} from "lucide-react";

type ProjectType = "all" | "web" | "mobile";

interface Project {
  id: number;
  title: string;
  type: "web" | "mobile";
  category: string;
  description: string;
  url?: string;
  tech: string[];
  features: string[];
  color: string;
  accent: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sittha Viruthi Yoga App",
    type: "mobile",
    category: "Mobile Application",
    description:
      "A complete yoga tracking and monitoring application designed for yoga practice management, user progress tracking, session monitoring, and wellness analytics.",
    tech: ["React Native", "Spring Boot", "MySQL"],
    features: [
      "Real-time Progress Tracking",
      "Session Analytics Dashboard",
      "User Performance Reports",
      "Daily Practice Monitoring",
      "Push Notifications",
      "Secure Authentication",
    ],
    color: "from-emerald-500 to-teal-600",
    accent: "emerald",
  },
  {
    id: 2,
    title: "J Impact Website",
    type: "web",
    category: "Business Platform",
    description:
      "Business enhancement platform focused on improving digital presence and customer engagement for modern enterprises.",
    url: "https://impactmaker.in",
    tech: ["React JS"],
    features: [
      "SEO Optimized Architecture",
      "Dynamic Landing Sections",
      "Lead Capture System",
      "Business Growth UI",
      "Performance Optimized",
    ],
    color: "from-emerald-500 to-green-600",
    accent: "green",
  },
  {
    id: 3,
    title: "Femtech Solution Salem",
    type: "web",
    category: "Corporate Website",
    description:
      "Professional corporate website designed for business branding, digital presence, and showcasing services to potential clients.",
    url: "https://www.femtechsolutionslm.co.in",
    tech: ["React JS"],
    features: [
      "Corporate UI Design",
      "Responsive Architecture",
      "Fast Performance",
      "SEO Friendly Pages",
      "Service Showcase Modules",
    ],
    color: "from-pink-500 to-rose-600",
    accent: "pink",
  },
  {
    id: 4,
    title: "KPR Legacy Awards",
    type: "web",
    category: "Event Platform",
    description:
      "Modern awards platform developed for event management, nominee handling, and public engagement with real-time data capabilities.",
    url: "https://www.kprlegacyawards.com",
    tech: ["React JS", "PostgreSQL", "Supabase"],
    features: [
      "Dynamic Nomination System",
      "Real-time Data Management",
      "Event Showcase",
      "Admin Dashboard",
      "Cloud Database Integration",
    ],
    color: "from-amber-500 to-orange-600",
    accent: "amber",
  },
  {
    id: 5,
    title: "BizDir",
    type: "web",
    category: "Directory Platform",
    description:
      "Modern business directory platform for discovering and managing businesses digitally with advanced search and filtering capabilities.",
    url: "https://bizdir-rust.vercel.app",
    tech: ["React JS", "Firebase"],
    features: [
      "Business Listings",
      "Advanced Search Filters",
      "Firebase Authentication",
      "Cloud Data Storage",
      "Responsive Directory UI",
    ],
    color: "from-emerald-500 to-teal-600",
    accent: "teal",
  },
  {
    id: 6,
    title: "KonguKalyanam App",
    type: "mobile",
    category: "Android Application",
    description:
      "A matrimonial mobile application currently available on Play Store designed for community-based matchmaking with secure profiles.",
    tech: ["Flutter", "Firebase"],
    features: [
      "Secure User Profiles",
      "Match Recommendations",
      "Firebase Realtime Database",
      "Chat Integration",
      "Image Upload System",
      "Notification System",
    ],
    color: "from-red-500 to-pink-600",
    accent: "red",
  },
];

const foundationalProjects = [
  {
    title: "Library Management System",
    description: "Full-featured library management with book cataloging, member management, and borrowing system.",
    tech: ["Java", "MySQL"],
  },
  {
    title: "Grocery Application",
    description: "E-commerce grocery app with product listings, cart management, and order processing.",
    tech: ["React JS", "Firebase"],
  },
  {
    title: "Online Job Portal",
    description: "Job search and recruitment platform with listings, applications, and employer dashboards.",
    tech: ["React JS", "Spring Boot", "MySQL"],
  },
];

const filters: { label: string; value: ProjectType }[] = [
  { label: "All Projects", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "Mobile Apps", value: "mobile" },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass-card-hover rounded-2xl overflow-hidden group flex flex-col"
    >
      {/* Color header */}
      <div className={`relative h-40 bg-gradient-to-br ${project.color} overflow-hidden flex-shrink-0`}>
        <div className="absolute inset-0 bg-noise opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          {project.type === "mobile" ? (
            <Smartphone size={52} className="text-white/30" />
          ) : (
            <Globe size={52} className="text-white/30" />
          )}
        </div>

        {/* Floating type badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/20">
            {project.type === "mobile" ? (
              <Smartphone size={11} />
            ) : (
              <Globe size={11} />
            )}
            {project.category}
          </span>
        </div>

        {/* Link button */}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors border border-white/20"
          >
            <ExternalLink size={13} className="text-white" />
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-xl text-ink-primary mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-ink-tertiary leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="tag-pill text-[11px]">
              {t}
            </span>
          ))}
        </div>

        {/* Features — shown on hover or always */}
        <div className="space-y-1.5">
          {project.features.slice(0, hovered ? project.features.length : 3).map((f) => (
            <div key={f} className="flex items-center gap-2 text-xs text-ink-tertiary">
              <CheckCircle2 size={11} className="text-brand-400 flex-shrink-0" />
              {f}
            </div>
          ))}
          {!hovered && project.features.length > 3 && (
            <div className="text-xs text-ink-muted">
              +{project.features.length - 3} more features
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectType>("all");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="section-padding bg-surface-1 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-brand-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">
            <FolderOpen size={12} />
            Portfolio
          </span>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-ink-primary leading-tight">
                Projects & Work
              </h2>
              <p className="text-ink-secondary mt-3 max-w-xl">
                A selection of web and mobile applications built for real clients
                and businesses.
              </p>
            </div>

            {/* Filter */}
            <div className="flex items-center gap-2 bg-white rounded-xl p-1 border border-surface-4 shadow-soft">
              <Filter size={14} className="text-ink-muted ml-2" />
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === f.value
                      ? "bg-brand-600 text-white shadow-brand"
                      : "text-ink-secondary hover:text-ink-primary"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Early Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="border-t border-surface-3 pt-16">
            <h3 className="font-display font-semibold text-2xl text-ink-primary mb-2">
              Early Projects & Foundations
            </h3>
            <p className="text-ink-secondary text-sm mb-8 max-w-xl">
              Foundational projects that built strong backend and frontend
              development knowledge — the roots of everything built since.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {foundationalProjects.map((p, i) => {
                const borderHoverMap = [
                  "hover:border-emerald-300/80",
                  "hover:border-green-300/80",
                  "hover:border-teal-300/80",
                ];
                const hoverClass = borderHoverMap[i % borderHoverMap.length];
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className={`bg-white rounded-2xl p-5 border border-surface-4 transition-all duration-300 shadow-soft ${hoverClass}`}
                  >
                    <h4 className="font-semibold text-ink-primary mb-2 text-sm">{p.title}</h4>
                    <p className="text-xs text-ink-tertiary leading-relaxed mb-3">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className="tag-pill text-[11px]">{t}</span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
