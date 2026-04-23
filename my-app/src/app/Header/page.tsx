"use client"
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import { useEffect, useRef } from "react";
import Link from "next/link";

function Headerpage() {
  const containerf = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const word = "WELCOME";
    const container = containerf.current;
    if (!container) return;

    word.split("").forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.className =
        "inline-block text-4xl font-bold text-[#38bdf8] opacity-0";

      container.appendChild(span);

      setTimeout(() => {
        span.classList.add("animated-pop");
      }, i * 150);
    });
  }, []);

  return (
    <header className="bg-[#0f172a] shadow-lg">
      <div className="w-full px-6 py-4 flex justify-between items-center">

        {/* LEFT SECTION */}
        <div className="flex flex-col">
          <h1 className="font-extrabold text-lg text-[#38bdf8] cursor-pointer hover:scale-105 transition">
            CoffeTech@ Developer_Hub
          </h1>

          <div className="flex gap-4 mt-2 text-[#94a3b8] text-lg">
            <a href="https://linkedin.com" target="_blank">
              <FiLinkedin className="hover:text-[#38bdf8] transition" />
            </a>
            <a href="https://github.com" target="_blank">
              <FiGithub className="hover:text-[#38bdf8] transition" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FiTwitter className="hover:text-[#38bdf8] transition" />
            </a>
          </div>
        </div>

        {/* CENTER ANIMATION */}
        <div ref={containerf} className="flex gap-1"></div>

        {/* NAVIGATION */}
        <ul className="flex gap-6 text-sm font-semibold text-[#e2e8f0]">
          <Link href="/Home">
            <li className="hover:text-[#38bdf8] cursor-pointer transition">Home</li>
          </Link>
          <Link href="/Contact">
            <li className="hover:text-[#38bdf8] cursor-pointer transition">Contact</li>
          </Link>
          <Link href="/about">
            <li className="hover:text-[#38bdf8] cursor-pointer transition">About</li>
          </Link>
          <Link href="/profile">
            <li className="hover:text-[#38bdf8] cursor-pointer transition">Profile</li>
          </Link>
        </ul>

        {/* BUTTONS */}
        <div className="flex gap-3">
          <button className="bg-[#38bdf8] text-black px-4 py-1.5 rounded-md font-semibold hover:bg-[#0ea5e9] transition">
            Login
          </button>

          <button className="border border-[#38bdf8] text-[#38bdf8] px-4 py-1.5 rounded-md font-semibold hover:bg-[#38bdf8] hover:text-black transition">
            Signup
          </button>
        </div>

      </div>
    </header>
  );
}

export default Headerpage;