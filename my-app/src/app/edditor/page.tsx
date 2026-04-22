"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Additerpage() {
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

  // ✅ Editor Technologies
  const techStack = [
    "Monaco Editor",
    "CodeMirror",
    "TipTap Editor",
    "Slate.js",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "WebSockets",
    "Real-time Collaboration",
    "Syntax Highlighting"
  ]

  // ✅ Development Steps
  const steps = [
    "Requirement Analysis",
    "Editor UI/UX Design",
    "Core Editor Development",
    "Real-time Features Integration",
    "Testing & Deployment"
  ]

  return (
    <div className="bg-[#FAF9F9] text-gray-800">

      {/* Hero Section */}
      <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          Editor Development Services
        </motion.h1>

        <motion.p
          className="text-lg max-w-2xl text-gray-600"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          We build powerful and customizable editors for code, content, and collaboration.
          Our solutions focus on performance, usability, and real-time editing experiences.
        </motion.p>

        <motion.button
          className="mt-6 px-8 py-3 bg-[#7B7770] text-white rounded-xl shadow-lg hover:scale-105 transition"
        >
          Get Started
        </motion.button>
      </div>

      {/* About */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Our Editors?</h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          We create advanced editor systems including code editors, rich text editors,
          and collaborative platforms. Our editors are fast, secure, and designed
          to enhance productivity with modern features like live preview,
          syntax highlighting, and real-time collaboration.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Technologies We Use
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-4">
          {techStack.map((tech, index) => (
            <button
              key={index}
              className="w-full py-3 bg-[#7B7770] text-white rounded-xl shadow hover:bg-[#5f5c56] transition"
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Editor Projects in Action
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
                Editor Project {index + 1}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Editor Development Process
        </h2>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto px-4">
          {steps.map((step, index) => (
            <button
              key={index}
              className="py-3 bg-[#7B7770] text-white rounded-xl shadow hover:bg-[#5f5c56] transition"
            >
              {step}
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center py-16">
        <Link href="/Contact/page">
          <h2 className="text-2xl font-bold text-[#7B7770] hover:underline cursor-pointer">
            Build Your Custom Editor With Us →
          </h2>
        </Link>
      </div>

    </div>
  )
}