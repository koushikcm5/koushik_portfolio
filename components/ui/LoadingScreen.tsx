"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_26%),linear-gradient(180deg,#f4fbf7_0%,#ffffff_55%,#f0fbf5_100%)]"
    >
      <div className="absolute inset-0 bg-noise opacity-10" />
      <div className="absolute top-[12%] h-64 w-64 rounded-full bg-emerald-200/20 blur-3xl" />
      <div className="absolute bottom-[10%] h-56 w-56 rounded-full bg-teal-200/15 blur-3xl" />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative flex flex-col items-center gap-6 rounded-[2rem] border border-white/60 bg-white/55 px-12 py-10 shadow-[0_24px_70px_rgba(6,95,70,0.10)] backdrop-blur-2xl"
      >
        {/* Logo */}
        <div className="relative">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-display font-bold text-2xl shadow-soft">
            K
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-1 rounded-[18px] border-2 border-transparent border-t-brand-400 border-r-brand-300"
          />
        </div>

        {/* Loading bar */}
        <div className="w-48 h-0.5 bg-surface-3 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/2 bg-gradient-to-r from-transparent via-brand-500 to-transparent"
          />
        </div>

        <p className="text-xs font-medium text-ink-muted tracking-widest uppercase">
          Loading Portfolio
        </p>
      </motion.div>
    </motion.div>
  );
}
