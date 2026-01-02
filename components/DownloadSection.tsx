"use client";

import { motion } from "framer-motion";
import localFont from "next/font/local";
import Image from "next/image";

const excalifont = localFont({
  src: "../public/fonts/Excalifont-Regular.woff2",
  display: "swap",
});

export default function DownloadSection() {
  return (
    <div className="w-full bg-[#1a1a2e] py-20 flex flex-col items-center gap-8">
      {/* Platform Icons */}
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8 mt-[-5px]">
          <Image
            src="/white/apple-xxl.png"
            alt="Apple"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-8 h-8">
          <Image
            src="/white/os-windows-xxl.png"
            alt="Windows"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Download Button */}
      <motion.a
        href="#"
        className={`relative px-44 py-4 ${excalifont.className} mt-[-15px]`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Sketchy border */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 300 60"
          preserveAspectRatio="none"
        >
          <rect
            x="2"
            y="2"
            width="296"
            height="56"
            fill="url(#grid)"
            stroke="#f08c00"
            strokeWidth="2"
            rx="4"
            style={{
              filter: "url(#sketchy)",
            }}
          />
          <defs>
            <pattern
              id="grid"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="6"
                stroke="#7950f2"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="0"
                x2="6"
                y2="0"
                stroke="#7950f2"
                strokeWidth="1"
              />
            </pattern>
            <filter id="sketchy">
              <feTurbulence
                type="turbulence"
                baseFrequency="0.05"
                numOctaves="2"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="2"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>
        <span className="text-[#f08c00]  text-1xl tracking-widest relative z-10">
          DOWNLOAD
        </span>
      </motion.a>
    </div>
  );
}
