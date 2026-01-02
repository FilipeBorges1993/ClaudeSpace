"use client";

import Hero from "@/components/Hero";
import Agents from "@/components/Agents";
import ChatDebug from "@/components/ChatDebug";
import Gallery from "@/components/Gallery";
import DownloadSection from "@/components/DownloadSection";
import LinksSection from "@/components/LinksSection";
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


        <Image
        src="/connector_1.svg"
        alt="Connector"
        width={400}
        height={300}
        className="w-64 h-auto hidden md:block self-start ml-8 mt-[-100px]"
      />
      </div>

      <Agents />
      <div className="w-full max-w-4xl px-4 py-8 flex justify-end">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/connector2.svg"
            alt="Connector"
            width={400}
            height={300}
            className="w-64 h-auto hidden md:block mr-[5%] mt-[-100px]"
          />
        </motion.div>
      </div>

      <ChatDebug />

      <div className="w-full max-w-4xl px-4 py-8 flex justify-center mt-[300px]">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src="/connector3.svg"
            alt="Connector"
            width={900}
            height={20}
            className="w-[500px] h-auto hidden md:block mr-[5%]"
          />
        </motion.div>
      </div>

      {/* Art Brushing Sticker */}
      <motion.div
        className="py-1"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Image
          src="/Look Drawing Sticker.gif"
          alt="Art Brushing Sticker"
          width={100}
          height={200}
          className="mt-[-100px] "
          unoptimized
        />
      </motion.div>

      <Gallery />
      <LinksSection />
      <DownloadSection />
    </main>
  );
}
