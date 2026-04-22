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
      H = canvas.height = 420

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
          0.04 +
          0.07 * Math.abs(Math.sin(ts * 0.0005 + d.x * 0.03 + d.y * 0.02))

        ctx.beginPath()
        ctx.arc(d.x, d.y, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(123,119,112,${d.o})`
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
    <section className="relative w-full h-[420px] bg-[#0d0d0d] overflow-hidden font-mono">

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">

        <div className="text-[#7B7770] border border-[#7B7770] text-xs tracking-[3px] px-4 py-1 rounded-sm mb-6 animate-fadeUp">
          Coffetech@
        </div>

        <div className="text-center leading-tight mb-5">

          <span className="block text-5xl font-bold text-[#3a3836] font-serif animate-fadeUp animation-delay-200">
            The future
          </span>

          <span className="block text-5xl font-bold text-[#3a3836] font-serif animate-fadeUp animation-delay-400">
            of development
          </span>

          <div className="flex items-center justify-center gap-3 mt-1 animate-fadeUp animation-delay-600">

            <span className="text-5xl font-bold text-[#3a3836] font-serif">
              is
            </span>

            {/* target icon */}
            <svg width="36" height="36" viewBox="0 0 44 44" fill="none">
              <circle cx="22" cy="22" r="20" stroke="#7B7770" strokeWidth="1.8" />
              <circle cx="22" cy="22" r="14" stroke="#7B7770" strokeWidth="1.6" />
              <circle cx="22" cy="22" r="8" stroke="#7B7770" strokeWidth="1.5" />
              <circle cx="22" cy="22" r="2.5" fill="#7B7770" />
            </svg>

            <span className="text-5xl font-bold text-white font-serif">
              human
            </span>

            <span className="text-4xl text-[#7B7770] font-serif">+</span>

            {/* spinning star */}
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              className="animate-spin-slow"
            >
              <polygon
                points="15,2 18,11 28,11 20,17 23,27 15,21 7,27 10,17 2,11 12,11"
                fill="#7B7770"
              />
            </svg>

            <span className="text-5xl font-bold text-white font-serif">
              AI
            </span>
          </div>
        </div>

        <p className="text-[#5a5754] text-sm text-center max-w-lg mb-7 animate-fadeUp animation-delay-700">
          We build modern, responsive, and high-performance websites tailored to your needs.
          From design to deployment — seamless digital experiences.
        </p>

      
      </div>
    </section>
  )
}