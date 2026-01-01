"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
};

export default function Gallery() {
  const [stars, setStars] = useState<Star[]>([]);

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
      {/* Gradient transition with Gallery title centered inside */}
      <div
        className="w-full h-[50px] flex items-center justify-center"
        style={{
          background: "linear-gradient(to bottom, #eef0f300 0%, #1a1a2e 100%)"
        }}
      >
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >

        </motion.div>
      </div>

      {/* Fixed Dark Zone - continues after gradient */}
      <div className="w-full bg-[#1a1a2e] min-h-[200px] relative flex justify-center overflow-hidden">
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
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 mt-[50px]"
          style={{
            filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))",
          }}
        >
          <Image
            src="/Gallery.svg"
            alt="Gallery"
            width={334}
            height={122}
          />
        </motion.div>
      </div>

      {/* Gallery Content */}
      <div className="w-full bg-[#1a1a2e] py-12 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "/gallery/Screen Recording 2026-01-01 at 21.25.33.gif",
            "/gallery/Screen Recording 2026-01-01 at 21.26.27.gif",
            "/gallery/Screen Recording 2026-01-01 at 21.27.15.gif",
            "/gallery/Screen Recording 2026-01-01 at 21.27.49.gif",
            "/gallery/Screen Recording 2026-01-01 at 21.29.27.gif",
            "/gallery/Screen Recording 2026-01-01 at 21.30.02.gif",
          ].map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: (index % 2 === 0 ? -1 : 1) * (index % 3 + 1) }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              className="group"
            >
              <div className="relative transition-transform duration-300 group-hover:scale-105 rounded-2xl">
                <Image
                  src={src}
                  alt={`Gallery demo ${index + 1}`}
                  width={400}
                  height={225}
                  className="w-full h-auto rounded-xl"
                  unoptimized
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
