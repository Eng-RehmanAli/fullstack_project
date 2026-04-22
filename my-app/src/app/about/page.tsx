"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const abcData = [
  { letter: "A", title: "Ambition", desc: "At Coffetech, ambition is our fuel. We dream big and work harder every day to turn vision into reality." },
  { letter: "B", title: "Background", desc: "Founded with a vision to create impact, Coffetech started small and continues to grow with purpose and passion." },
  { letter: "C", title: "Commitment", desc: "Coffetech is committed to consistency, quality, and customer satisfaction in every project we deliver." },
  { letter: "D", title: "Dedication", desc: "Every project at Coffetech is handled with full dedication, care, and attention to detail." },
  { letter: "E", title: "Expertise", desc: "We bring deep skills, knowledge, and experience to serve you better at Coffetech." },
  { letter: "F", title: "Focus", desc: "Coffetech stays focused on delivering real value that truly helps our audience grow." },
  { letter: "G", title: "Goal", desc: "Our goal at Coffetech is to become a trusted and respected name in the tech industry." },
  { letter: "H", title: "Honesty", desc: "At Coffetech, we believe in full transparency and honest communication with our users." },
  { letter: "I", title: "Innovation", desc: "Coffetech constantly improves and adopts new ideas, tools, and technologies to stay ahead." },
  { letter: "J", title: "Journey", desc: "The Coffetech journey is built on continuous learning, growth, and meaningful improvement." },
  { letter: "K", title: "Knowledge", desc: "We share useful, practical knowledge that empowers every Coffetech user." },
  { letter: "L", title: "Legacy", desc: "Coffetech aims to build a lasting positive impact that future generations can be proud of." },
  { letter: "M", title: "Mission", desc: "Our mission at Coffetech is to serve with quality, integrity, and genuine care." },
  { letter: "N", title: "Network", desc: "Coffetech is growing a strong, supportive community of users, partners, and supporters." },
  { letter: "O", title: "Opportunity", desc: "We create opportunities for learning, growth, and success through everything Coffetech builds." },
  { letter: "P", title: "Passion", desc: "Passion is the heartbeat of Coffetech — it drives everything we create and deliver." },
  { letter: "Q", title: "Quality", desc: "At Coffetech, we never compromise on quality. Excellence is our standard, not our goal." },
  { letter: "R", title: "Reliability", desc: "You can always rely on Coffetech for consistent, dependable service and support." },
  { letter: "S", title: "Support", desc: "Coffetech is here to support you every step of the way, whenever you need us." },
  { letter: "T", title: "Teamwork", desc: "At Coffetech, we believe real success only comes through collaboration and teamwork." },
  { letter: "U", title: "Understanding", desc: "We deeply understand user needs and design every Coffetech solution accordingly." },
  { letter: "V", title: "Vision", desc: "Coffetech's vision is to grow globally and make a meaningful difference in people's lives." },
  { letter: "W", title: "Work Ethic", desc: "Strong work ethics and discipline are the foundation of everything done at Coffetech." },
  { letter: "X", title: "Excellence", desc: "Coffetech aims for excellence in every single task, no matter how big or small." },
  { letter: "Y", title: "You", desc: "You — our users — are the center of everything Coffetech does. We exist to serve you." },
  { letter: "Z", title: "Zeal", desc: "Coffetech works with full energy, enthusiasm, and zeal in every project we take on." },
];

function Aboutpage() {
  return (
    <div className="bg-white overflow-hidden">

      {/* ===== HERO SECTION ===== */}
      <div className="flex flex-col items-center px-6 py-16 bg-white">

        <motion.p
          className="text-sm font-semibold tracking-widest uppercase mb-3"
          style={{ color: "#7B7770" }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to
        </motion.p>

        <motion.h1
          className="font-extrabold text-5xl text-center"
          style={{ color: "#7B7770" }}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Coffetech
        </motion.h1>

        <motion.div
          className="w-16 h-1 rounded-full mt-4 mb-6"
          style={{ backgroundColor: "#7B7770" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <motion.p
          className="mt-3 text-center max-w-2xl text-gray-600 leading-relaxed"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          Welcome to Coffetech — a place where ideas, quality, and passion come together.
          We are dedicated to providing valuable content, services, and solutions that make a real difference.
          Our mission is to deliver excellence with simplicity, trust, and innovation at the core of everything we do.
          Whether youre here to learn, explore, or connect, we are glad to have you with us.
        </motion.p>
      </div>

      {/* ===== TEAM PHOTO SECTION ===== */}
      <div className="flex flex-col items-center py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>

        <motion.h2
          className="font-bold text-3xl mb-2"
          style={{ color: "#7B7770" }}
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          Meet Our Team
        </motion.h2>

        <motion.div
          className="w-12 h-1 rounded-full mb-8"
          style={{ backgroundColor: "#7B7770" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        <motion.div
          className="rounded-2xl overflow-hidden shadow-2xl"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.2 }}
        >
          <Image
            src="/images/friend.png"         
            alt="Coffetech Team"
            width={420}
            height={560}
            className="object-cover"
          />
        </motion.div>

        <motion.p
          className="mt-6 text-center text-gray-500 max-w-md"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          The people behind Coffetech — passionate, dedicated, and always building.
        </motion.p>
      </div>

      {/* ===== BACKGROUND SECTION ===== */}
      <div className="flex flex-col items-center py-16 px-6 bg-white">

        <motion.h2
          className="font-bold text-3xl mb-2"
          style={{ color: "#7B7770" }}
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          Our Background
        </motion.h2>

        <motion.div
          className="w-12 h-1 rounded-full mb-8"
          style={{ backgroundColor: "#7B7770" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        <motion.p
          className="text-center max-w-3xl text-gray-600 leading-relaxed"
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 12 }}
        >
          Founded with a vision to drive meaningful impact, Coffetech began as a small idea and
          continues to grow with purpose and passion. We started with a simple goal: to build
          innovative solutions that solve real-world problems. What began as a small startup has
          evolved into a growing force committed to innovation, creativity, and progress. From humble
          beginnings, we are steadily shaping a future driven by technology, dedication, and
          continuous growth. We believe in starting small, thinking big, and growing responsibly
          with a clear mission at Coffetech.
        </motion.p>
      </div>

      {/* ===== A TO Z SECTION ===== */}
      <div className="py-16 px-6" style={{ backgroundColor: "#f9f9f9" }}>

        <motion.h2
          className="font-bold text-3xl text-center mb-2"
          style={{ color: "#7B7770" }}
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          Coffetech A to Z
        </motion.h2>

        <motion.div
          className="w-12 h-1 rounded-full mx-auto mb-12"
          style={{ backgroundColor: "#7B7770" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {abcData.map((item, index) => (
            <motion.div
              key={item.letter}
              className="bg-white rounded-2xl p-6 shadow-md border-l-4 hover:shadow-xl transition-shadow duration-300"
              style={{ borderColor: "#7B7770" }}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: (index % 3) * 0.1,
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-white text-lg mb-3"
                style={{ backgroundColor: "#7B7770" }}
              >
                {item.letter}
              </div>
              <h3 className="font-bold text-lg mb-1" style={{ color: "#7B7770" }}>
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== FOOTER STRIP ===== */}
      <motion.div
        className="py-8 text-center text-white text-sm"
        style={{ backgroundColor: "#7B7770" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        © {new Date().getFullYear()} Coffetech — Built with passion & purpose.
      </motion.div>

    </div>
  );
}

export default Aboutpage;