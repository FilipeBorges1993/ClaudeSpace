"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-col items-center pt-20 pb-10 text-center">
      <h1 className="text-5xl md:text-6xl mb-6 relative inline-block">
        For all the
        <br />
        ClaudeCode
        <br />
        <motion.span
          className="inline-block relative"
          animate={{ rotate: [-10, -12, -10, -8, -10] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Lovers !
          <svg className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-4 text-red-500" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
          </svg>
        </motion.span>
      </h1>

      <div className="mt-4 flex flex-col items-center">
        <motion.div
          animate={{ x: [0, -3, 3, -3, 3, 0], rotate: [0, -2, 2, -2, 2, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        >
          <Image src="/Prototype.svg" alt="BorisCorp Logo" width={120} height={100} />
        </motion.div>
        <p className="text-sm font-semibold mt-[-20px] ml-[20px] -rotate-[10deg]">@Borix<br />presents</p>
      </div>
    </div>
  );
}

