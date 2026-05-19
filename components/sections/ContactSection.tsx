"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  Send,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Phone,
} from "lucide-react";

const projectTypes = [
  "Web Application",
  "Mobile App",
  "Full Stack Project",
  "Business Website",
  "API Development",
  "Consultation",
  "Other",
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    // Construct WhatsApp message
    const text = `Hi Koushik, I'm ${form.name}.%0A%0AEmail: ${form.email}%0AProject Type: ${form.projectType || 'Not specified'}%0A%0AMessage:%0A${form.message}`;
    const whatsappUrl = `https://wa.me/917339217119?text=${text}`;
    
    window.open(whatsappUrl, '_blank');
    
    setStatus("success");
    setForm({ name: "", email: "", projectType: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-surface-1 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label">
            <Mail size={12} />
            Contact
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-ink-primary leading-tight">
            Let's Build Something
          </h2>
          <p className="text-ink-secondary mt-3 max-w-xl">
            Have a project in mind? Reach out and let's discuss how we can bring
            your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Contact info cards */}
            {[
              {
                icon: Mail,
                label: "Email",
                value: "koushik@growaitech.com",
                href: "mailto:koushik@growaitech.com",
                color: "text-green-600 bg-green-50 border-green-100",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "+91 73392 17119",
                href: "https://wa.me/917339217119",
                color: "text-emerald-600 bg-emerald-50 border-emerald-100",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Salem, Tamil Nadu, India",
                href: null,
                color: "text-teal-600 bg-teal-50 border-teal-100",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:shadow-glass-lg transition-all"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${item.color} flex-shrink-0`}>
                  <item.icon size={18} />
                </div>
                <div>
                  <div className="text-xs font-medium text-ink-muted">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-medium text-ink-primary transition-colors ${
                        item.label === "Email" ? "hover:text-green-600" :
                        item.label === "WhatsApp" ? "hover:text-emerald-600" : "hover:text-teal-600"
                      }`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-ink-primary">{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted mb-4">
                Social Profiles
              </p>
              <div className="flex gap-3">
                {[
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/in/koushikm",
                    label: "LinkedIn",
                    color: "hover:bg-green-50 hover:border-green-200 hover:text-green-600",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/koushikm",
                    label: "GitHub",
                    color: "hover:bg-surface-2 hover:border-surface-4 hover:text-ink-primary",
                  },
                  {
                    icon: MessageCircle,
                    href: "https://wa.me/917339217119",
                    label: "WhatsApp",
                    color: "hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-600",
                  },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-surface-4 text-ink-tertiary text-xs font-medium transition-all ${s.color}`}
                  >
                    <s.icon size={15} />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-ink-secondary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface-1 border border-surface-4 text-sm text-ink-primary placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-ink-secondary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-surface-1 border border-surface-4 text-sm text-ink-primary placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink-secondary mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-1 border border-surface-4 text-sm text-ink-primary focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-400 transition-all appearance-none"
                  >
                    <option value="">Select project type...</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-ink-secondary mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-surface-1 border border-surface-4 text-sm text-ink-primary placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-400 transition-all resize-none"
                  />
                </div>

                {/* Status messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-sm font-medium"
                  >
                    <CheckCircle2 size={16} />
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary flex-1 justify-center"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={15} />
                      </>
                    )}
                  </button>

                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
