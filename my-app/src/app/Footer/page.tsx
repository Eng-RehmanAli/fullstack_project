"use client";
import Link from "next/link";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

function Footerpage() {
  return (
    <footer className="w-full bg-[#0f172a] text-[#e2e8f0] border-t border-[#1e293b] mt-0.5">

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-xl text-[#38bdf8]">
            Coffetech@
            <span className="text-sm font-light text-[#94a3b8] ml-2">
              Pvt Ltd
            </span>
          </h1>

          <p className="text-lg font-semibold text-white">
            What we provide
          </p>

          <p className="text-sm text-[#94a3b8] leading-relaxed">
            CoffeeTech develops scalable and innovative web applications,
            delivering clean design, strong performance, and reliable digital
            experiences.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Quick Links</h3>

          <ul className="text-sm space-y-2 text-[#94a3b8]">
            <li><Link href="/Home" className="hover:text-[#38bdf8]">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#38bdf8]">About</Link></li>
            <li><Link href="/profile" className="hover:text-[#38bdf8]">Profile</Link></li>
            <li><Link href="/Contact" className="hover:text-[#38bdf8]">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Contact</h3>

          <p className="text-sm text-[#94a3b8]">Email: abcxxx@gmail.com</p>
          <p className="text-sm text-[#94a3b8]">Phone: +92 xxx-xxxxxxx</p>

          <h3 className="font-semibold mt-5 mb-2 text-white">Follow Us</h3>

          <div className="flex gap-4 text-lg text-[#94a3b8]">
            <a href="#" className="hover:text-[#38bdf8]"><FiLinkedin /></a>
            <a href="#" className="hover:text-[#38bdf8]"><FiGithub /></a>
            <a href="#" className="hover:text-[#38bdf8]"><FiTwitter /></a>
          </div>
        </div>

      </div>

      {/* bottom */}
      <div className="text-center text-xs text-[#94a3b8] pb-4 border-t border-[#1e293b] pt-4">
        © 2026 Coffetech@. All rights reserved.
      </div>

    </footer>
  );
}

export default Footerpage;