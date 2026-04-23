'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function HeroBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let dots: { x: number; y: number; o: number }[] = []
    let W: number, H: number

    function resize() {
      if (!canvas) return
      W = canvas.width = canvas.parentElement?.offsetWidth ?? window.innerWidth
      H = canvas.height = 460

      const cols = Math.ceil(W / 40) + 1
      const rows = Math.ceil(H / 40) + 1

      dots = []
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ x: c * 40, y: r * 40, o: Math.random() })
        }
      }
    }

    function draw(ts: number) {
      if (!ctx) return

      ctx.clearRect(0, 0, W, H)

      dots.forEach((d) => {
        d.o =
          0.03 +
          0.08 * Math.abs(Math.sin(ts * 0.0006 + d.x * 0.02 + d.y * 0.02))

        ctx.beginPath()
        ctx.arc(d.x, d.y, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(56,189,248,${d.o})`
        ctx.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    resize()
    animId = requestAnimationFrame(draw)

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative w-full h-[460px] bg-[#0b1220] overflow-hidden">

      {/* canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* premium glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0b1220] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_60%)]" />

      {/* content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">

        {/* badge */}
        <div className="mb-6 px-5 py-1 text-xs tracking-[4px] text-[#38bdf8] border border-[#38bdf8]/30 bg-[#0f172a]/40 backdrop-blur-md rounded-full">
          COFFETECH
        </div>

        {/* heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#e2e8f0] leading-tight">
          The future of <span className="text-[#38bdf8]">development</span>
        </h1>

        {/* AI line */}
        <div className="flex items-center justify-center gap-3 mt-4 flex-wrap">

          <span className="text-3xl md:text-5xl font-semibold text-[#cbd5e1]">
            is
          </span>

          {/* target */}
          <svg width="38" height="38" viewBox="0 0 44 44">
            <circle cx="22" cy="22" r="20" stroke="#38bdf8" strokeWidth="1.6" />
            <circle cx="22" cy="22" r="14" stroke="#38bdf8" strokeWidth="1.4" />
            <circle cx="22" cy="22" r="8" stroke="#38bdf8" strokeWidth="1.2" />
            <circle cx="22" cy="22" r="2.5" fill="#38bdf8" />
          </svg>

          <span className="text-[#38bdf8] text-4xl md:text-5xl font-bold">
            human
          </span>

          <span className="text-[#38bdf8] text-3xl md:text-4xl font-bold">
            +
          </span>

          {/* star */}
          <svg width="32" height="32" viewBox="0 0 30 30" className="animate-spin">
            <polygon
              points="15,2 18,11 28,11 20,17 23,27 15,21 7,27 10,17 2,11 12,11"
              fill="#38bdf8"
            />
          </svg>

          <span className="text-[#38bdf8] text-4xl md:text-5xl font-bold">
            AI
          </span>
        </div>

        {/* description */}
        <p className="text-[#94a3b8] text-sm md:text-base max-w-xl mt-6 leading-relaxed">
          We build modern, fast, and scalable digital experiences from design to deployment.
        </p>

        {/* CTA */}
        <Link href="/selection">
          <button className="mt-7 px-7 py-2 bg-[#38bdf8] text-black font-semibold text-sm rounded-md hover:bg-[#0ea5e9] transition shadow-lg shadow-[#38bdf8]/20">
            Get Started
          </button>
        </Link>

      </div>
    </section>
  )
}