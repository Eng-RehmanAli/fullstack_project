"use client";

import { FaHome, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import React, { useState } from "react";
import { motion } from "framer-motion";

const BRAND = "#38bdf8";
const BG = "#0f172a";
const CARD = "#1e293b";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const contactInfo = [
  {
    icon: FaHome,
    label: "Address",
    lines: ["Mohallah Hajji Park, Street No. 1", "Sangla Hill, Punjab, Pakistan"],
  },
  {
    icon: FaPhone,
    label: "Phone",
    lines: ["03xx-xxxxxxx"],
  },
  {
    icon: FaEnvelope,
    label: "Email",
    lines: ["abc@gmail.com"],
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1000));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#e2e8f0]">

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-black text-[#38bdf8]"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="mt-6 text-[#94a3b8] max-w-xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          We respond within 24 hours. Let’s build something great together.
        </motion.p>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 pb-24">

        {/* LEFT */}
        <div className="space-y-6">

          {contactInfo.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                className="flex gap-4 p-5 rounded-xl bg-[#1e293b] border border-[#334155]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#38bdf8] text-black">
                  <Icon size={18} />
                </div>

                <div>
                  <p className="text-xs text-[#94a3b8] uppercase">
                    {item.label}
                  </p>
                  {item.lines.map((l) => (
                    <p key={l} className="text-sm">
                      {l}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT */}
        <motion.div
          className="p-8 rounded-2xl bg-[#1e293b] border border-[#334155]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {submitted ? (
            <div className="text-center py-10">
              <FaPaperPlane className="mx-auto text-[#38bdf8] text-3xl mb-3" />
              <h2 className="text-xl font-bold">Message Sent</h2>
              <p className="text-sm text-[#94a3b8] mt-2">
                We will contact you soon.
              </p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", message: "" });
                }}
                className="mt-4 text-[#38bdf8] underline"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                placeholder="Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155]"
              />

              <input
                placeholder="Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155]"
              />

              <textarea
                placeholder="Message"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                rows={5}
                className="w-full p-3 rounded-lg bg-[#0f172a] border border-[#334155]"
              />

              <button
                disabled={loading}
                className="w-full py-3 rounded-lg bg-[#38bdf8] text-black font-bold hover:scale-[1.02] transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          )}
        </motion.div>

      </section>
    </div>
  );
}