"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Homepage() {
  const services = [
    { img: "/images/web1.jpeg", title: "Web Development", desc: "Modern responsive websites with performance focus", page: "/web" },
    { img: "/images/Ai.jpg", title: "Artificial Intelligence", desc: "Smart AI-powered digital solutions", page: "/AI" },
    { img: "/images/LLM.jpg", title: "LLMs", desc: "Build intelligent text-based applications", page: "/LLM" },
    { img: "/images/app.jpg", title: "App Development", desc: "Android & iOS high-performance apps", page: "/app" },
    { img: "/images/additing.jpg", title: "Editing", desc: "Professional photo & video editing", page: "/edditor" },
    { img: "/images/markiting.png", title: "Marketing", desc: "Grow your brand with smart strategies", page: "/market" },
  ];

  return (
    <div className="bg-[#0f172a] text-[#e2e8f0]">

      {/* ================= HERO ================= */}
      <section className="relative w-full h-[520px] overflow-hidden flex items-center justify-center">

        {/* animated blobs */}
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-[#38bdf8]/10 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <motion.div
          className="absolute w-96 h-96 rounded-full bg-[#0ea5e9]/10 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative z-10 text-center px-4">

          {/* brand */}
          <div className="text-[#38bdf8] border border-[#38bdf8] text-xs tracking-[3px] px-4 py-1 mb-6 inline-block">
            Coffeetech@
          </div>

          {/* heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold"
          >
            The future of development
          </motion.h1>

          {/* animated line */}
          <div className="flex items-center justify-center gap-3 mt-3 flex-wrap">
            <span className="text-4xl font-bold">is</span>

            <motion.div
              className="w-10 h-10 rounded-full border border-[#38bdf8]"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <span className="text-4xl font-bold text-[#38bdf8]">human</span>
            <span className="text-[#38bdf8] text-3xl">+</span>
            <span className="text-4xl font-bold text-[#38bdf8]">AI</span>
          </div>

          {/* description */}
          <p className="text-[#94a3b8] text-sm max-w-xl mt-6 mx-auto">
            We are <span className="text-[#38bdf8] font-semibold">Coffeetech@</span> — building intelligent,
            scalable, and modern digital products powered by AI.
          </p>

          <p className="text-[#94a3b8] text-sm max-w-xl mt-3 mx-auto">
            From web apps to AI systems, we craft fast, clean, and future-ready experiences.
          </p>

          {/* buttons */}
          <motion.div
            className="flex gap-4 mt-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/selection">
              <button className="bg-[#38bdf8] text-black px-5 py-2 text-xs font-semibold rounded-md hover:bg-[#0ea5e9] transition">
                Lets work
              </button>
            </Link>

            <button className="border border-[#38bdf8] px-5 py-2 text-xs text-[#38bdf8] rounded-md hover:bg-[#38bdf8] hover:text-black transition">
              View projects
            </button>
          </motion.div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="p-6 md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {services.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl group shadow-lg bg-[#1e293b]"
          >

            {/* image */}
            <Image
              src={item.img}
              alt={item.title}
              width={600}
              height={400}
              className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-300"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90" />

            {/* content */}
            <div className="absolute bottom-0 p-4 z-10">
              <h2 className="font-bold text-lg text-[#e2e8f0]">{item.title}</h2>
              <p className="text-sm text-[#94a3b8]">{item.desc}</p>

              <Link href={item.page}>
                <button className="mt-3 bg-[#38bdf8] text-black px-4 py-1 text-xs rounded-md hover:bg-[#0ea5e9] transition">
                  Lets work
                </button>
              </Link>
            </div>

          </motion.div>
        ))}

      </section>
    </div>
  );
}