"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Agents() {
  return (
    <section className="w-full max-w-5xl px-4 py-16 relative min-h-[500px]">
      {/* Right text - top */}
      <motion.p
        className="absolute right-[15%]  top-[-10%] text-xl md:text-2xl max-w-[220px] rotate-[3deg] italic text-right"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        We all got to the point of not ever using it cause we dont see it ..&quot;
      </motion.p>

      {/* Left text - middle */}
      <motion.p
        className="absolute left-[15%] top-[10%] text-2xl md:text-3xl max-w-[200px] -rotate-[5deg]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        And we Need to See it to believe
      </motion.p>

      {/* Center - Agent illustration */}
      <motion.div
        className="absolute left-[50%] -translate-x-1/2 mt-[-50px]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
            times: [0, 0.5, 1]
          }}
        >
          <Image
            src="/Agents.svg"
            alt="Agent with parachute"
            width={180}
            height={220}
          />
        </motion.div>
      </motion.div>

      {/* Second Agent illustration */}
      <motion.div
        className="absolute left-[50%] -translate-x-1/2 top-[50%]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <Image
          src="/agents2.svg"
          alt="Agent 2"
          width={350}
          height={180}
        />
      </motion.div>
    </section>
  );
}
