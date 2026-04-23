"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Marktpage() {
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
    "SEO Optimization",
    "Google Analytics",
    "Google Ads",
    "Facebook Ads",
    "Content Marketing",
    "Email Marketing",
    "Social Media Strategy",
    "Conversion Rate Optimization (CRO)",
    "Marketing Automation",
    "CRM Systems",
    "Brand Strategy",
    "Performance Marketing"
  ]

  const steps = [
    "Market Research",
    "Strategy Planning",
    "Campaign Creation",
    "Execution & Optimization",
    "Analytics & Reporting"
  ]

  return (
    <div className="bg-[#0f172a] text-[#e2e8f0]">

      {/* HERO */}
      <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          Digital Marketing Services
        </motion.h1>

        <motion.p
          className="text-lg max-w-2xl text-[#94a3b8]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          We help businesses grow with powerful data-driven digital marketing strategies
          that increase visibility, engagement, and revenue.
        </motion.p>

        <Link href="/selection">
          <motion.button
            className="mt-6 px-8 py-3 bg-[#38bdf8] text-black font-semibold rounded-xl shadow-lg hover:scale-105 transition"
          >
            Get Started
          </motion.button>
        </Link>
      </div>

      {/* ABOUT */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">

        <h2 className="text-3xl font-bold mb-6 text-[#38bdf8]">
          Why Choose Our Marketing?
        </h2>

        <p className="text-[#94a3b8] leading-relaxed">
          We combine creativity and analytics to build high-performing marketing campaigns
          that deliver real business growth across digital channels.
        </p>
      </div>

      {/* TOOLS */}
      <div className="py-16 bg-[#1e293b]">

        <h2 className="text-3xl font-bold text-center mb-8 text-[#38bdf8]">
          Tools & Technologies We Use
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-4">
          {techStack.map((tech, index) => (
            <button
              key={index}
              className="py-3 bg-[#0f172a] text-[#e2e8f0] rounded-xl border border-[#1e293b] hover:border-[#38bdf8] transition"
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <div className="py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10 text-[#38bdf8]">
          Marketing Campaigns in Action
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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

              <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-[#e2e8f0] opacity-0 group-hover:opacity-100 transition rounded-xl">
                Campaign {index + 1}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* STEPS */}
      <div className="py-16 bg-[#1e293b]">

        <h2 className="text-3xl font-bold text-center mb-8 text-[#38bdf8]">
          Marketing Process
        </h2>

        <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto px-4">
          {steps.map((step, index) => (
            <button
              key={index}
              className="py-3 bg-[#0f172a] text-[#e2e8f0] rounded-xl border border-[#1e293b] hover:border-[#38bdf8] transition"
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
            Grow Your Business With Us →
          </h2>
        </Link>

      </div>

    </div>
  )
}