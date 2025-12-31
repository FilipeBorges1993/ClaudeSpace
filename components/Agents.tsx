"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Agents() {
  return (
    <section className="w-full max-w-5xl px-4 py-16 relative">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left text */}
        <motion.p
          className="text-2xl md:text-3xl max-w-[200px] -rotate-[8deg]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          And we Need to See it to believe
        </motion.p>

        {/* Center - Agent illustration */}
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/Agents.svg"
              alt="Agent with parachute"
              width={200}
              height={250}
            />
          </motion.div>
          <p className="mt-4 text-lg italic">You rule this</p>
        </div>

        {/* Right text */}
        <motion.p
          className="text-xl md:text-2xl max-w-[220px] rotate-[5deg] italic text-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We all got to the point of not ever using it cause we dont see it ..&quot;
        </motion.p>
      </div>
    </section>
  );
}
