"use client";

import { useMemo } from "react";

// Generate star data once
const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 1, // 1-3px
    delay: Math.random() * 3, // 0-3s delay
    duration: Math.random() * 2 + 2, // 2-4s duration
  }));
};

export default function ScrollBackground() {
  const stars = useMemo(() => generateStars(75), []);

  return (
    <div className="absolute inset-0 -z-10 bg-[#eef0f3]">
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
    </div>
  );
}
