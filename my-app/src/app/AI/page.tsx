"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Aipage() {
  const videoRef = useRef<HTMLVideoElement[]>([]);

  const videoArray = [
    "/video/4k.mp4",
    "/video/amazon.mp4",
    "/video/comerical.mp4",
    "/video/nextflix.mp4",
    "/video/tech.mp4",
    "/video/youtube.mp4",
  ];

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

  const techStack = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "OpenAI API",
    "Computer Vision",
    "NLP",
    "Deep Learning",
    "Machine Learning",
    "FastAPI",
    "Docker",
    "Cloud AI",
  ];

  const steps = [
    "Problem Identification",
    "Data Collection",
    "Model Training",
    "Evaluation & Optimization",
    "Deployment & Monitoring",
  ];

  return (
    <div className="bg-[#0f172a] text-[#e2e8f0]">

      {/* HERO */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          Artificial Intelligence Solutions
        </motion.h1>

        <motion.p
          className="text-lg max-w-2xl text-[#94a3b8]"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          We build intelligent systems that learn, adapt, and automate complex tasks.
          Helping businesses improve efficiency and create smarter experiences.
        </motion.p>

        <Link href="/selection">
          <motion.button
            className="mt-6 px-8 py-3 bg-[#38bdf8] text-black rounded-md font-semibold hover:bg-[#0ea5e9] transition"
            whileHover={{ scale: 1.05 }}
          >
            Get Started
          </motion.button>
        </Link>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#38bdf8]">
          Why Choose AI Solutions?
        </h2>

        <p className="text-[#94a3b8] leading-relaxed">
          From automation and predictive analytics to chatbots and computer vision,
          we deliver scalable, secure, and high-performance AI solutions tailored
          to your business needs.
        </p>
      </section>

      {/* TECH STACK */}
      <section className="py-12 bg-[#1e293b]">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#38bdf8]">
          Technologies We Use
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="py-3 text-center bg-[#0f172a] border border-[#38bdf8]/20 rounded-md hover:border-[#38bdf8] transition"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#38bdf8]">
          AI Projects in Action
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {videoArray.map((src, index) => (
            <div key={index} className="relative group">

              <video
                src={src}
                muted
                loop
                playsInline
                className="w-full h-48 object-cover rounded-md"
                ref={(el) => {
                  if (el) videoRef.current[index] = el;
                }}
                onMouseEnter={() => playRunner(index)}
                onMouseLeave={() => pauseRunner(index)}
              />

              <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition rounded-md">
                AI Project {index + 1}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-12 bg-[#1e293b]">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#38bdf8]">
          AI Development Process
        </h2>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto px-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="py-3 text-center bg-[#0f172a] border border-[#38bdf8]/20 rounded-md hover:border-[#38bdf8] transition"
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <Link href="/Contact">
          <h2 className="text-2xl font-bold text-[#38bdf8] hover:underline cursor-pointer">
            Build Smart AI Solutions With Us →
          </h2>
        </Link>
      </section>

    </div>
  );
}