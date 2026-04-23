"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const abcData = [
  { letter: "A", title: "Ambition", desc: "At Coffetech, ambition is our fuel. We dream big and work harder every day." },
  { letter: "B", title: "Background", desc: "Founded with a vision to create impact and grow with purpose." },
  { letter: "C", title: "Commitment", desc: "We are committed to quality and customer satisfaction." },
  { letter: "D", title: "Dedication", desc: "Every project is handled with care and attention to detail." },
  { letter: "E", title: "Expertise", desc: "We bring strong skills and experience to every solution." },
  { letter: "F", title: "Focus", desc: "We focus on delivering real value to users." },
  { letter: "G", title: "Goal", desc: "To become a trusted name in tech." },
  { letter: "H", title: "Honesty", desc: "Transparency and honesty guide everything we do." },
  { letter: "I", title: "Innovation", desc: "We adopt new ideas and technologies continuously." },
  { letter: "J", title: "Journey", desc: "A journey of growth, learning, and improvement." },
  { letter: "K", title: "Knowledge", desc: "We share practical and useful knowledge." },
  { letter: "L", title: "Legacy", desc: "Building a lasting positive impact." },
  { letter: "M", title: "Mission", desc: "Deliver quality with integrity and care." },
  { letter: "N", title: "Network", desc: "Growing a strong and supportive community." },
  { letter: "O", title: "Opportunity", desc: "Creating opportunities for growth and success." },
  { letter: "P", title: "Passion", desc: "Passion drives everything we build." },
  { letter: "Q", title: "Quality", desc: "Excellence is our standard." },
  { letter: "R", title: "Reliability", desc: "Consistent and dependable service." },
  { letter: "S", title: "Support", desc: "We support you at every step." },
  { letter: "T", title: "Teamwork", desc: "Success comes through collaboration." },
  { letter: "U", title: "Understanding", desc: "We deeply understand user needs." },
  { letter: "V", title: "Vision", desc: "Aiming to grow globally." },
  { letter: "W", title: "Work Ethic", desc: "Strong discipline and work ethic." },
  { letter: "X", title: "Excellence", desc: "We aim for excellence always." },
  { letter: "Y", title: "You", desc: "You are at the center of everything." },
  { letter: "Z", title: "Zeal", desc: "We work with full energy and enthusiasm." },
];

function Aboutpage() {
  return (
    <div className="bg-[#0f172a] text-[#e2e8f0] overflow-hidden">

      {/* HERO */}
      <div className="flex flex-col items-center px-6 py-20">

        <motion.p
          className="text-sm tracking-widest uppercase mb-3 text-[#38bdf8]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Welcome to
        </motion.p>

        <motion.h1
          className="font-extrabold text-5xl text-center"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          Coffetech
        </motion.h1>

        <div className="w-16 h-1 bg-[#38bdf8] rounded-full mt-4 mb-6" />

        <p className="text-center max-w-2xl text-[#94a3b8] leading-relaxed">
          We build modern, scalable, and intelligent digital products powered by
          innovation and strong engineering.
        </p>
      </div>

      {/* TEAM */}
      <div className="flex flex-col items-center py-16 px-6 bg-[#1e293b]">

        <h2 className="font-bold text-3xl mb-2 text-[#38bdf8]">
          Meet Our Team
        </h2>

        <div className="w-12 h-1 bg-[#38bdf8] mb-8" />

        <div className="rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/images/friend.png"
            alt="team"
            width={420}
            height={560}
          />
        </div>

        <p className="mt-6 text-[#94a3b8] text-center max-w-md">
          Passionate builders behind Coffetech.
        </p>
      </div>

      {/* BACKGROUND */}
      <div className="flex flex-col items-center py-16 px-6">

        <h2 className="font-bold text-3xl mb-2 text-[#38bdf8]">
          Our Background
        </h2>

        <div className="w-12 h-1 bg-[#38bdf8] mb-8" />

        <p className="text-center max-w-3xl text-[#94a3b8]">
          Coffetech started as a small idea and is growing into a strong tech
          platform focused on innovation, creativity, and real-world solutions.
        </p>
      </div>

      {/* A-Z */}
      <div className="py-16 px-6 bg-[#1e293b]">

        <h2 className="font-bold text-3xl text-center mb-10 text-[#38bdf8]">
          Coffetech A to Z
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {abcData.map((item, index) => (
            <motion.div
              key={item.letter}
              className="bg-[#0f172a] rounded-xl p-6 shadow-lg hover:shadow-xl transition border border-[#1e293b]"
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1 }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-[#38bdf8] text-black mb-3">
                {item.letter}
              </div>

              <h3 className="font-bold text-lg text-[#e2e8f0]">
                {item.title}
              </h3>

              <p className="text-sm text-[#94a3b8]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTER STRIP */}
      <div className="py-6 text-center text-sm text-[#94a3b8]">
        © {new Date().getFullYear()} Coffetech — Built with passion.
      </div>

    </div>
  );
}

export default Aboutpage;