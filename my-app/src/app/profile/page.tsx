"use client";

import {
  FiBookmark,
  FiShare2,
  FiExternalLink,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

function Profilepage() {
  const videoArray = [
    "/video/4k.mp4",
    "/video/amazon.mp4",
    "/video/comerical.mp4",
    "/video/nextflix.mp4",
    "/video/tech.mp4",
  ];

  const videoRef = useRef<(HTMLVideoElement | null)[]>([]);

  const playRunner = (index: number) => {
    const video = videoRef.current[index];
    if (video) video.play();
  };

  const pauseRunner = (index: number) => {
    const video = videoRef.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="bg-[#0f172a] min-h-screen text-[#e2e8f0] ">

      {/* HEADER */}
      <header className="flex flex-col md:flex-row justify-between items-center px-6 py-5 gap-4 border-b border-[#1e293b]">

        <div className="flex flex-wrap items-center gap-2 text-sm">

          <span className="font-semibold text-xl text-[#38bdf8]">
            Coffetech@
          </span>

          <span className="text-[#94a3b8]">by</span>

          <Image
            src="/images/rehman2.jpeg"
            alt="profile"
            width={30}
            height={30}
            className="rounded-full"
          />

          <a
            href="https://www.linkedin.com/in/rehman-ali3"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#38bdf8]"
          >
            Rehman Ali <span className="text-xs text-[#94a3b8]">Pro</span>
          </a>

          <FiExternalLink className="text-[#94a3b8]" />
        </div>

        <div className="flex gap-4 text-lg text-[#94a3b8]">
          <FiBookmark className="cursor-pointer hover:text-[#38bdf8]" />
          <FiShare2 className="cursor-pointer hover:text-[#38bdf8]" />
        </div>
      </header>

      {/* HERO */}
      <main className="text-center px-6">

        <div className="mt-20">

          <p className="text-sm md:text-base text-[#94a3b8]">
            Rehman Ali <span className="text-xs">Pro</span> Developer
          </p>

          <h1 className="font-extrabold text-5xl sm:text-7xl md:text-8xl text-[#38bdf8] tracking-tight">
            Coffetech@
          </h1>

        </div>

        {/* BRAND CARD */}
        <div className="flex justify-center mt-12">

          <Link href="/about">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl cursor-pointer border border-[#1e293b]"
            >

              {/* background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-black" />

              {/* glow */}
              <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#38bdf8]/10 blur-3xl rounded-full" />
              <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#38bdf8]/10 blur-3xl rounded-full" />

              <div className="relative p-10 text-center">

                <h2 className="text-4xl md:text-5xl font-bold tracking-widest text-[#e2e8f0]">
                  Coffetech@
                </h2>

                <p className="mt-3 text-[#94a3b8] text-sm md:text-base">
                  Modern Web • AI Systems • Scalable Engineering
                </p>

                <p className="mt-4 text-[#94a3b8] text-sm max-w-xl mx-auto">
                  We build intelligent digital products combining AI + engineering for scalable solutions.
                </p>

                <div className="mt-6">
                  <span className="inline-block px-6 py-2 border border-[#38bdf8] text-[#38bdf8] rounded-xl text-sm tracking-widest hover:bg-[#38bdf8]/10 transition">
                    Explore About →
                  </span>
                </div>

              </div>

            </motion.div>

          </Link>

        </div>

        {/* DESCRIPTION */}
        <p className="max-w-2xl mx-auto mt-10 text-sm md:text-base leading-relaxed text-[#94a3b8]">
          <b className="text-[#e2e8f0]">Coffetech@</b> develops scalable web applications, AI systems,
          and modern digital products focused on performance and design.
        </p>

        <p className="max-w-2xl mx-auto mt-4 text-sm text-[#94a3b8]">
          Full-stack development • AI integration • Automation • Modern UI systems
        </p>

        {/* PROJECT SECTION */}
        <div className="mt-16">
          <p className="text-sm font-light text-[#94a3b8]">Projects</p>
          <h2 className="text-xl font-semibold text-[#e2e8f0]">
            Explore our live work & experiments
          </h2>
        </div>

        {/* VIDEOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

          {videoArray.map((src, index) => (
            <div key={index} className="relative group">

              <video
                src={src}
                muted
                loop
                playsInline
                className="w-full h-52 sm:h-60 md:h-64 rounded-xl object-cover shadow-md"
                ref={(el) => {
                  videoRef.current[index] = el;
                }}
                onMouseEnter={() => playRunner(index)}
                onMouseLeave={() => pauseRunner(index)}
                onClick={() => playRunner(index)}
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-[#e2e8f0] text-sm rounded-xl opacity-0 group-hover:opacity-100 transition">
                Project {index + 1}
              </div>

            </div>
          ))}

        </div>

        {/* FOOTER */}
        <div className="mt-20 mb-10 text-center text-[#94a3b8] text-sm">
          Built with passion by <b className="text-[#38bdf8]">Coffetech@</b> — Rehman Ali
        </div>

      </main>
    </div>
  );
}

export default Profilepage;