'use client'

import Link from "next/link"
import { useRef, useEffect } from "react"

function LoginPage() {
  const containerf = useRef<HTMLDivElement>(null)
  const sutileref = useRef<HTMLDivElement>(null)
  const formref = useRef<HTMLDivElement>(null)
  const paragraphref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const word = "WELCOME"

    const container = containerf.current
    const subtitle = sutileref.current
    const form = formref.current
    const parag = paragraphref.current

    if (!container || !subtitle || !form || !parag) return

    container.innerHTML = ""

    word.split("").forEach((char, i) => {
      const span = document.createElement("span")
      span.textContent = char
      span.className =
        "inline-block text-4xl font-bold text-[#38bdf8] opacity-0"

      container.appendChild(span)

      setTimeout(() => {
        span.classList.add("animate-pop")
      }, i * 120)
    })

    const done = word.length * 120 + 100

    setTimeout(() => {
      subtitle.style.opacity = "1"
    }, done)

    setTimeout(() => {
      form.style.opacity = "1"
    }, done + 150)

    setTimeout(() => {
      parag.style.opacity = "1"
    }, done + 250)
  }, [])

  return (
    <div className="bg-[#0f172a] w-full min-h-screen flex items-center justify-center px-4">

      <div className="flex flex-col bg-[#1e293b] w-full max-w-md p-10 rounded-2xl text-center shadow-xl border border-[#334155]">

        {/* Animated Title */}
        <div
          ref={containerf}
          className="flex justify-center gap-[2px] mb-4"
        />

        {/* Subtitle */}
        <p
          ref={paragraphref}
          className="text-[#94a3b8] text-sm font-light mb-2 transition-opacity duration-500"
          style={{ opacity: 0 }}
        >
          Welcome to <span className="font-bold text-[#38bdf8]">Coffetech</span> Tech Hub
        </p>

        <h1 className="font-extrabold text-3xl text-[#e2e8f0] mb-6">
          Login
        </h1>

        {/* Form */}
        <div
          ref={sutileref}
          className="flex flex-col gap-3 transition-opacity duration-500"
          style={{ opacity: 0 }}
        >
          <input
            type="text"
            placeholder="Username / Email"
            className="bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#38bdf8]"
          />

          <input
            type="password"
            placeholder="Password"
            className="bg-[#0f172a] border border-[#334155] rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#38bdf8]"
          />

          <button className="bg-[#38bdf8] text-black font-semibold w-full h-12 mt-2 rounded-2xl hover:scale-[1.02] transition">
            Log in
          </button>
        </div>

        {/* Footer */}
        <div
          ref={formref}
          className="mt-4 transition-opacity duration-500"
          style={{ opacity: 0 }}
        >
          <p className="text-[#94a3b8] text-sm font-light">
            Forgot password?{" "}
            <a href="#" className="underline text-[#38bdf8] font-semibold">
              Reset here
            </a>
          </p>

          <Link
            href="/signup/page"
            className="text-[#38bdf8] mt-2 inline-block text-sm hover:underline"
          >
            Go to Signup
          </Link>
        </div>

      </div>
    </div>
  )
}

export default LoginPage