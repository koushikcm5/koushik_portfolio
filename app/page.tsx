"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import MouseGlow from "@/components/ui/MouseGlow";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <MouseGlow />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
