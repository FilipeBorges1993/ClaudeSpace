"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LinksSection() {
  const links = [
    {
      name: "This is an Open source project\nso can you help us ?!",
      url: "https://github.com/BorisCorp",
      icon: "/white/Git Sticker.gif",
    },
  ];

  return (
    <section className="w-full py-16 flex justify-center bg-[#1a1a2e]">
      <motion.div
        className="flex flex-wrap gap-8 w-full max-w-6xl px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 "
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -10 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="relative">
              <Image
                src={link.icon}
                alt={link.name}
                width={120}
                height={120}
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
                unoptimized
              />
            </div>
            <span className="text-green-400 group-hover:text-white font-medium transition-colors whitespace-pre-line text-center">
              {link.name}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
