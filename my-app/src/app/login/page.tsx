'use client'
import Link from "next/link"
import { useRef, useEffect } from "react"

function LoginPage() {
  const containerf   = useRef<HTMLDivElement>(null)
  const sutileref    = useRef<HTMLDivElement>(null)
  const formref      = useRef<HTMLDivElement>(null)
  const paragraphref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const word      = "WELCOME"
    const container = containerf.current
    const subtitle  = sutileref.current
    const form      = formref.current
    const parag     = paragraphref.current

    if (!container || !subtitle || !form || !parag) return

    // animate letters one by one
    word.split('').forEach((char, i) => {
      const span = document.createElement('span')
      span.textContent = char
      span.className = 'inline-block text-4xl font-bold text-white opacity-0'
      container.appendChild(span)

      setTimeout(() => {
        span.classList.add('animate-pop')  // ✅ fixed name
      }, i * 150)
    })

    const done = word.length * 150 + 100  // ✅ + not *

    // fade in subtitle
    setTimeout(() => {
      subtitle.style.opacity = '1'
    }, done)

    // fade in form
    setTimeout(() => {
      form.style.opacity = '1'
    }, done + 100)

    // fade in paragraph
    setTimeout(() => {
      parag.style.opacity = '1'
    }, done + 200)

  }, [])

  return (
    <div className="bg-white w-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col bg-[#7B7770] w-[30rem] p-10 rounded-2xl text-center">

        {/* Letter animation renders here */}
        <div
          ref={containerf}
          className="flex justify-center gap-[2px] mb-4"
        />

        {/* Welcome textfades in */}
        <p
          ref={paragraphref}
          className="text-white text-sm font-extralight mb-2 transition-opacity duration-500"
          style={{ opacity: 0 }}
        >
          Welcome to <span className="font-bold">Coffetech@</span> a tech Hub
        </p>

        <h1 className="font-extrabold  text-3xl text-white mb-6 " >
          Login
        </h1>

        {/* Form fades in */}
        <div
          ref={sutileref}
          className="flex flex-col gap-3 transition-opacity duration-500"
          style={{ opacity: 0 }}
        >
          <input
            type="text"
            placeholder="Username / Email"
            className="border-2 border-black rounded-lg px-4 py-2 text-sm text-black focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-black rounded-lg px-4 py-2 text-sm text-black focus:outline-none"
          />
          <button className="text-white bg-black w-full h-12 mt-2 rounded-2xl hover:bg-[#242A27] transition-colors">
            Log in
          </button>
        </div>

        {/* Forgot password — fades in */}
        <div
          ref={formref}
          className="mt-4 transition-opacity duration-500"
          style={{ opacity: 0 }}
        >
          <p className="text-white text-sm font-extralight">
            Forgot password?{" "}
            <a href="#" className="underline font-bold">
              Reset here
            </a>
          </p>
          <Link href="/signup/page" >GO to the signup</Link>
        </div>

      </div>
    </div>
  )
}

export default LoginPage