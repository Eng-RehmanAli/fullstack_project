"use client";

import {
  FiBookmark,
  FiShare2,
  FiExternalLink,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

function Profilepage() {
  const videoArray = [
    "/video/4k.mp4",
    "/video/amazon.mp4",
    "/video/comerical.mp4",
    "/video/nextflix.mp4",
    "/video/tech.mp4",
  ];

const videoRef = useRef<(HTMLVideoElement | null)[]>([]);

  const playRunner = (index: number) => {
    const video = videoRef.current[index];
    if (video) video.play();
  };

  const pauseRunner = (index: number) => {
    const video = videoRef.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER */}
      <header className="flex flex-col md:flex-row justify-between items-center px-4 py-4 gap-3">
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="font-semibold text-xl text-[#7B7770]">
            Coffetech@
          </span>
          <span className="font-extralight">by</span>

          <Image
            src="/images/rehman2.jpeg"
            alt="profile"
            width={28}
            height={28}
            className="rounded-full"
          />

          <a
            href="https://www.linkedin.com/in/rehman-ali3"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#7B7770]"
          >
            Rehman Ali <span className="text-xs">Pro</span>
          </a>

          <FiExternalLink />
        </div>

        <div className="flex gap-4">
          <FiBookmark className="cursor-pointer hover:text-[#7B7770]" />
          <FiShare2 className="cursor-pointer hover:text-[#7B7770]" />
        </div>
      </header>

      {/* HERO */}
      <main className="text-center px-4">
        <div className="mt-16">
          <p className="text-sm md:text-base">
            Rehman Ali <span className="text-xs">Pro</span> Developer
          </p>

          <h1 className="font-extrabold text-4xl sm:text-6xl md:text-8xl text-[#7B7770]">
            Coffetech@
          </h1>

          <div className="flex justify-center items-center gap-2 mt-3">
            <Image
              src="/images/rehman2.jpeg"
              alt="profile"
              width={28}
              height={28}
              className="rounded-full"
            />

            <a
              href="https://www.linkedin.com/in/rehman-ali3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:text-[#7B7770]"
            >
              Rehman Ali <span className="text-xs">Pro</span>
            </a>

            <FiExternalLink />
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center mt-10">
          <Link href="https://google.com">
            <Image
              src="/images/teck.jpg"
              alt="tech"
              width={600}
              height={300}
              className="rounded-3xl w-full max-w-2xl hover:translate-y-1 transition"
            />
          </Link>
        </div>

        {/* DESCRIPTION */}
        <p className="max-w-xl mx-auto mt-6 text-sm md:text-base leading-relaxed">
          CoffeeTech® develops scalable and innovative web applications,
          delivering clean design, strong performance, and reliable digital
          experiences.
        </p>

        {/* PROJECT TITLE */}
        <div className="mt-12">
          <p className="text-sm font-light">Projects</p>
          <h2 className="text-lg font-semibold">
            See the work in the videos below
          </h2>
        </div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {videoArray.map((src, index) => (
            <div key={index} className="relative">
              <video
                src={src}
                muted
                loop
                playsInline
                className="w-full h-48 sm:h-56 md:h-64 rounded-xl object-cover"

               ref={(el) => {
                    videoRef.current[index] = el;}}
                onMouseEnter={() => playRunner(index)}
                onMouseLeave={() => pauseRunner(index)}
                onClick={() => playRunner(index)}
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-sm rounded-xl opacity-0 hover:opacity-100 transition">
                Project {index + 1}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Profilepage;