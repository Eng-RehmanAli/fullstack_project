"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Webpage() {
  const videoRef = useRef<HTMLVideoElement[]>([])

  const videoArray = [
    "/video/4k.mp4",
    "/video/amazon.mp4",
    "/video/comerical.mp4",
    "/video/nextflix.mp4",
    "/video/tech.mp4",
    "/video/youtube.mp4"
  ]

  const playRunner = (index: number) => {
    const video = videoRef.current[index]
    if (video) video.play()
  }

  const pauseRunner = (index: number) => {
    const video = videoRef.current[index]
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }

  const techStack = [
    "HTML", "CSS", "React", "Next.js",
    "PostgreSQL", "MongoDB", "TypeScript",
    "GitHub", "User Interaction", "Problem Solving",
    "SQL & NoSQL"
  ]

  const steps = [
    "Requirement Gathering",
    "Design",
    "Development",
    "Testing",
    "Deployment"
  ]

  return (
    <div className="bg-[#0f172a] text-[#e2e8f0]">

      {/* Hero Section */}
      <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          className="text-4xl font-bold mb-4 text-[#38bdf8]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          Web Development Services
        </motion.h1>

        <motion.p
          className="text-lg max-w-2xl text-[#94a3b8]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          We transform ideas into high-performing web applications using modern technologies.
          Our focus is on responsive, scalable, and user-friendly solutions.
        </motion.p>

        <motion.button
          className="mt-6 px-8 py-3 bg-[#38bdf8] text-black font-semibold rounded-xl shadow-lg hover:scale-105 transition"
        >
          Get Started
        </motion.button>
      </div>

      {/* About */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">
          Why Choose Us?
        </h2>

        <p className="text-lg text-[#94a3b8] leading-relaxed">
          We provide full-stack web development solutions including frontend,
          backend, APIs, and databases. Our goal is to deliver secure,
          efficient, and scalable applications tailored to your business.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Technologies We Use
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-4">
          {techStack.map((tech, index) => (
            <button
              key={index}
              className="w-full py-3 bg-[#1e293b] text-[#e2e8f0] rounded-xl shadow hover:bg-[#334155] transition"
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Our Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          {videoArray.map((src, index) => (
            <div key={index} className="relative group">

              <video
                src={src}
                muted
                loop
                playsInline
                className="w-full h-48 object-cover rounded-xl"
                ref={(el) => {
                  if (el) videoRef.current[index] = el
                }}
                onMouseEnter={() => playRunner(index)}
                onMouseLeave={() => pauseRunner(index)}
              />

              <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition rounded-xl">
                Project {index + 1}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Development Process
        </h2>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto px-4">
          {steps.map((step, index) => (
            <button
              key={index}
              className="py-3 bg-[#1e293b] text-[#e2e8f0] rounded-xl shadow hover:bg-[#334155] transition"
            >
              {step}
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-16">
        <Link href="/Contact">
          <h2 className="text-2xl font-bold text-[#38bdf8] hover:underline cursor-pointer">
            Connect with Us →
          </h2>
        </Link>
      </div>

    </div>
  )
}