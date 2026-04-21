"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"

export default function Homepage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const el = canvasRef.current
    if (!el) return
    const canvas: HTMLCanvasElement = el

    const ctxRaw = canvas.getContext("2d")
    if (!ctxRaw) return
    const ctx: CanvasRenderingContext2D = ctxRaw  // ✅ locked non-null

    let animationId: number
    let dots: { x: number; y: number }[] = []
    let W = 0
    let H = 0

    const gap = 40

    function resize() {
      const parent = canvas.parentElement
      W = canvas.width = parent?.offsetWidth ?? window.innerWidth
      H = canvas.height = 420

      const cols = Math.ceil(W / gap)
      const rows = Math.ceil(H / gap)

      dots = []
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          dots.push({ x: x * gap, y: y * gap })
        }
      }
    }

    function draw(time: DOMHighResTimeStamp) {
      ctx.clearRect(0, 0, W, H)

      for (const d of dots) {
        const opacity =
          0.05 +
          0.08 * Math.abs(Math.sin(time * 0.001 + d.x * 0.02 + d.y * 0.02))

        ctx.beginPath()
        ctx.arc(d.x, d.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(123,119,112,${opacity})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()
    animationId = requestAnimationFrame(draw)
    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  const services = [
    { img: "/images/web1.jpeg",     title: "Web Development",        desc: "Modern responsive websites with performance focus" },
    { img: "/images/Ai.jpg",        title: "Artificial Intelligence", desc: "Smart AI-powered digital solutions" },
    { img: "/images/LLM.jpg",       title: "LLMs",                   desc: "Build intelligent text-based applications" },
    { img: "/images/app.jpg",       title: "App Development",        desc: "Android & iOS high-performance apps" },
    { img: "/images/additing.jpg",  title: "Editing",                desc: "Professional photo & video editing" },
    { img: "/images/markiting.png", title: "Marketing",              desc: "Grow your brand with smart strategies" },
  ]

  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="relative w-100vw h-[420px] bg-[#ded3d3] overflow-hidden font-mono ml-4 mr-4">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
          <div className="text-[#7B7770] border border-[#7B7770] text-xs tracking-[3px] px-4 py-1 mb-6">
            Coffetech@
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#3a3836] font-serif">
            The future of development
          </h1>

          <div className="flex items-center gap-3 mt-3 flex-wrap justify-center">
            <span className="text-4xl md:text-5xl font-bold text-[#3a3836] font-serif">
              is
            </span>

            <div className="w-10 h-10 rounded-full border border-[#7B7770] flex items-center justify-center" />

            <span className="text-4xl md:text-5xl font-bold text-white font-serif">
              human
            </span>

            <span className="text-[#7B7770] text-3xl">+</span>

            <span className="text-4xl md:text-5xl font-bold text-white font-serif">
              AI
            </span>
          </div>

          <p className="text-[#5a5754] text-sm max-w-xl mt-6">
            We build modern, responsive, and high-performance digital experiences.
          </p>

          <div className="flex gap-4 mt-6">
            <button type="button" className="bg-[#7B7770] px-5 py-2 text-xs tracking-widest hover:opacity-80">
              Lets work
            </button>
            <button type="button" className="border border-[#7B7770] px-5 py-2 text-xs tracking-widest text-[#7B7770] hover:bg-[#7B7770]/10">
              View projects
            </button>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="p-6 md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white text-black">
        {services.map((item) => (
          <div
            key={item.title}
            className="relative overflow-hidden rounded-lg group shadow-md"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={600}
              height={400}
              className="w-full h-[260px] object-cover group-hover:scale-105 transition"
            />

            <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h2 className="font-bold text-lg">{item.title}</h2>
              <p className="text-sm opacity-80">{item.desc}</p>

              <button type="button" className="mt-3 bg-[#7B7770] px-4 py-1 text-xs">
                Lets work
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}