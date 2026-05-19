"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-6"
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
