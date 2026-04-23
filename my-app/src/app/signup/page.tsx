"use client"

import Image from "next/image"
import React, { useRef, useEffect } from "react"
import Link from "next/link"

function Signpage() {
  const containerf = useRef<HTMLDivElement>(null)
  const sutileref = useRef<HTMLParagraphElement>(null)
  const formref = useRef<HTMLDivElement>(null)

  const [user, setuser] = React.useState({
    Username: "",
    Email: "",
    Password: ""
  })

  useEffect(() => {
    const word = "WELCOME"

    const container = containerf.current
    const subtitle = sutileref.current
    const form = formref.current

    if (!container || !subtitle || !form) return

    container.innerHTML = ""

    word.split("").forEach((char, i) => {
      const span = document.createElement("span")
      span.textContent = char
      span.className =
        "inline-block text-4xl font-bold text-[#38bdf8] opacity-0"

      container.appendChild(span)

      setTimeout(() => {
        span.classList.add("animated-pop")
      }, i * 120)
    })

    const done = word.length * 120 + 300

    setTimeout(() => {
      subtitle.style.opacity = "1"
    }, done)

    setTimeout(() => {
      form.style.opacity = "1"
    }, done + 150)
  }, [])

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#0f172a] text-[#e2e8f0]">

      {/* LEFT SIDE */}
      <div className="flex-1 flex items-center justify-center p-10">

        <div className="text-center md:text-left">

          <h1 className="font-extrabold text-6xl md:text-7xl text-[#38bdf8] hover:scale-105 transition cursor-pointer">
            Coffetech@
          </h1>

          <div className="flex flex-wrap gap-3 mt-4 items-center justify-center md:justify-start text-[#94a3b8]">

            <p className="underline">
              Rehman Ali <span className="text-xs">Pro</span>
            </p>

            <Image
              src="/images/icon.jpg"
              alt="icon"
              width={35}
              height={35}
              className="rounded-full"
            />

            <p className="underline">
              Developers <span className="text-xs">Mood</span>
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">

        {/* Animated text */}
        <div
          ref={containerf}
          className="flex gap-[2px] mb-4"
        />

        {/* Subtitle */}
        <p
          ref={sutileref}
          className="text-sm text-[#94a3b8] mb-6 transition-opacity duration-500 opacity-0"
        >
          Welcome to Coffetech@
        </p>

        {/* FORM */}
        <div
          ref={formref}
          className="flex flex-col gap-3 w-full max-w-sm p-6 rounded-xl bg-[#1e293b] border border-[#334155] opacity-0 transition-opacity duration-500"
        >

          <input
            type="text"
            value={user.Username}
            onChange={(e) =>
              setuser({ ...user, Username: e.target.value })
            }
            placeholder="Username"
            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-[#334155] text-white focus:border-[#38bdf8] outline-none"
          />

          <input
            type="email"
            value={user.Email}
            onChange={(e) =>
              setuser({ ...user, Email: e.target.value })
            }
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-[#334155] text-white focus:border-[#38bdf8] outline-none"
          />

          <input
            type="password"
            value={user.Password}
            onChange={(e) =>
              setuser({ ...user, Password: e.target.value })
            }
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-[#334155] text-white focus:border-[#38bdf8] outline-none"
          />

          <button className="w-full py-2 bg-[#38bdf8] text-black font-semibold rounded-lg hover:scale-[1.02] transition">
            Sign Up
          </button>

          <Link
            href="/login"
            className="text-sm text-[#38bdf8] text-center hover:underline"
          >
            Go to Login Page ?
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Signpage