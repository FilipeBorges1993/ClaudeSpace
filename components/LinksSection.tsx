"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LinksSection() {
  const links = [
    {
      name: "This is an Open source project\nso can you help us ?!",
      url: "https://github.com/BorisCorp",
      icon: "/white/Git Sticker.gif",
      position: "self-start",
      rotate: -5,
      color: "text-green-400",
    },
    {
      name: "Join our Discord \nand be part of the team!",
      url: "https://discord.gg/BorisCorp",
      icon: "/white/Video Games Logo Sticker by Discord.gif",
      position: "self-center ",
      rotate: 3,
      color: "text-purple-400",
    },
    {
      name: "Donate me please!\nI'm broke!",
      url: "https://donate.boriscorp.com",
      icon: "/white/Level Up Sticker Sticker by Percolate Galactic.gif",
      position: "self-end ",
      rotate: 5,
      color: "text-yellow-400",
    },
  ];

  return (
    <section className="w-full py-16 flex justify-center bg-[#1a1a2e]">
      <motion.div
        className="flex flex-row justify-between items-end w-full max-w-6xl px-1"
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
            className="group flex flex-col items-center gap-2 flex-1"
            whileHover={{ scale: 1.05, rotate: link.rotate + 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: link.rotate }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="relative">
              <Image
                src={link.icon}
                alt={link.name}
                width={120}
                height={120}
                className="h-20 object-contain"
                unoptimized
              />
            </div>
            <span className={`${link.color} font-medium transition-colors whitespace-pre-line text-center`}>
              {link.name}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
