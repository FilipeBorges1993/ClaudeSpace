"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import localFont from "next/font/local";

const honkFont = localFont({
  src: "../public/fonts/Honk-Regular.ttf",
  display: "swap",
});

const excalifont = localFont({
  src: "../public/fonts/Excalifont-Regular.woff2",
  display: "swap",
});

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
};

const galleryItems = [
  { src: "/gallery/Screen Recording 2026-01-01 at 21.25.33.gif", label: ".. Your own Claude code agents !" },
  { src: "/gallery/Screen Recording 2026-01-01 at 21.26.27.gif", label: ".. Your own Claude code agents (With rain) !" },
  { src: "/gallery/Screen Recording 2026-01-01 at 21.27.15.gif", label: "..thadaa Agent canvas!" },
  { src: "/gallery/Screen Recording 2026-01-01 at 21.27.49.gif", label: ".. Agent canvas! (With skill panel)!" },
  { src: "/gallery/Screen Recording 2026-01-01 at 21.29.27.gif", label: "Setting up with your own stuff !" },
  { src: "/gallery/Screen Recording 2026-01-01 at 21.30.02.gif", label: ".. Then the chat, where we can talk!" },
];

export default function Gallery() {
  const [stars, setStars] = useState<Star[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    // Generate stars only on client to avoid hydration mismatch
    setStars(
      Array.from({ length: 75 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 2,
      }))
    );
  }, []);

  return (
    <>
      {/* Sketchy Wave Divider */}
      <div className="relative w-full overflow-hidden" style={{ marginTop: "-2px" }}>
        <motion.svg
          viewBox="0 0 2880 120"
          className="h-auto block"
          style={{ width: "200%" }}
          preserveAspectRatio="none"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        >
          {/* Dark fill below the wave - repeated for seamless loop */}
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 C1680,100 1920,20 2160,60 C2400,100 2640,20 2880,60 L2880,120 L0,120 Z"
            fill="#1a1a2e"
          />
        </motion.svg>
      </div>

      {/* Fixed Dark Zone - continues after gradient */}
      <div data-section="dark" className="w-full bg-[#1a1a2e] min-h-[200px] relative flex justify-center overflow-hidden">
        {/* Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
        <motion.div
          className="relative z-20 mt-[50px] flex flex-col items-center"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{
            filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))",
          }}
        >

          <span
            className={`text-white ${honkFont.className}`}
            style={{
              fontSize: "5rem",
            }}
          >
            {"Claude Space !".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
          <Image
            src="/Space Farting Sticker by bangerooo.gif"
            alt="Space sticker"
            width={150}
            height={150}
            unoptimized
          />
        </motion.div>
      </div>

      {/* Clouds sticker on left, Thunder on right */}
      <div className="w-full bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            className="absolute left-[-70px] rotate-[-15deg] mt-[-50px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/white/Clouds Sticker by Belisol Rotterdam.gif"
              alt="Clouds sticker"
              width={120}
              height={120}
              unoptimized
            />
          </motion.div>
          <motion.div
            className="absolute right-[-50px]  rotate-1 mt-[-250px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/white/Clouds Sticker by Belisol Rotterdam.gif"
              alt="Thunder sticker"
              width={80}
              height={120}
              unoptimized
            />
          </motion.div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="w-full bg-[#1a1a2e] py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-20">
          {galleryItems.map((item, index) => {
            const rotation = (index % 2 === 0 ? -1 : 1) * (index % 3 + 1);
            const isTopRow = index < 3;

            return (
              <motion.div
                key={item.src}
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Label - positioned based on row */}
                {hoveredIndex === index && (
                  <motion.div
                    className={`absolute left-0 z-20 ${excalifont.className}`}
                    style={{
                      [isTopRow ? 'bottom' : 'top']: '100%',
                      [isTopRow ? 'marginBottom' : 'marginTop']: '20px',
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span
                      className="text-yellow-300 text-xl whitespace-nowrap"
                      style={{
                        textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                      }}
                    >
                      {item.label.split("").map((char, charIndex) => (
                        <motion.span
                          key={charIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.01,
                            delay: charIndex * 0.02,
                            ease: "easeOut",
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                  </motion.div>
                )}

                <div className="relative transition-transform duration-300 group-hover:scale-105 rounded-2xl">
                  <Image
                    src={item.src}
                    alt={`Gallery demo ${index + 1}`}
                    width={400}
                    height={225}
                    className="w-full h-auto rounded-xl"
                    unoptimized
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}
