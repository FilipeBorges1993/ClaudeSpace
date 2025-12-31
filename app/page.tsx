"use client";

import Hero from "@/components/Hero";
import MindMap from "@/components/MindMap";
import Agents from "@/components/Agents";
import TraceHistory from "@/components/TraceHistory";
import PlanGallery from "@/components/PlanGallery";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center overflow-x-hidden relative">
      <Hero />

      {/* Canvas Drawing */}
      <div className="w-full max-w-4xl px-4 py-8">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[70%] mx-auto"
        >
          <Image
            src="/cnavas_drawing.svg"
            alt="Claude Code Architecture"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Connector 1 */}
      <svg className="w-64 h-24 text-gray-800 -mt-10 mb-[20px] hidden md:block" viewBox="0 0 100 50" fill="none">
         <path d="M20 0 Q 0 25 80 50" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Agents Section */}
      <Agents />

      {/* <Footer /> */}
    </main>
  );
}
