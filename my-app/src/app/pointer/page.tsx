"use client"
import { useRef, useEffect } from "react"

function PointerChaser() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const trail = trailRef.current

    if (!cursor || !trail) return

    let mousex = 0
    let mousey = 0

    let trailx = 0
    let traily = 0

    let rafId: number

    const onMouse = (e: MouseEvent) => {
      mousex = e.clientX
      mousey = e.clientY

      cursor.style.left = `${mousex}px`
      cursor.style.top = `${mousey}px`
    }

    const animate = () => {
      // smoother easing (more modern feel)
      trailx += (mousex - trailx) * 0.15
      traily += (mousey - traily) * 0.15

      trail.style.left = `${trailx}px`
      trail.style.top = `${traily}px`

      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", onMouse)
    animate()

    return () => {
      window.removeEventListener("mousemove", onMouse)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      {/* MAIN CURSOR */}
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-[#38bdf8] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#38bdf8]"
        style={{ left: 0, top: 0 }}
      />

      {/* TRAIL */}
      <div
        ref={trailRef}
        className="fixed w-10 h-10 border border-[#38bdf8] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-60"
        style={{ left: 0, top: 0 }}
      />
    </>
  )
}

export default PointerChaser