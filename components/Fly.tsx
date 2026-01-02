"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

export default function Fly() {
  const [position, setPosition] = useState({ x: 1200, y: 80 }); // Top right (will be clamped to screen)
  const [velocity, setVelocity] = useState({ x: 1, y: 1 });
  const [currentScroll, setCurrentScroll] = useState(0);
  const [galleryBounds, setGalleryBounds] = useState<{ top: number; bottom: number } | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const scrollRef = useRef(0);
  const animationRef = useRef<number | null>(null);

  const FLEE_DISTANCE = 100;
  const FLEE_SPEED = 9;
  const WANDER_SPEED = 1;
  const FLY_SIZE = 25;
  const SCROLL_DRIFT = 0.01;
  const EDGE_MARGIN = 500; // Prefer staying within this margin from edges
  const CENTER_REPEL = 0; // Force pushing fly away from center content

  // Compute if in dark section
  const isInDarkSection = useMemo(() => {
    if (!galleryBounds) return false;
    const flyScreenY = position.y - currentScroll;
    return flyScreenY >= galleryBounds.top && flyScreenY <= galleryBounds.bottom;
  }, [position.y, currentScroll, galleryBounds]);

  useEffect(() => {
    const updateGalleryBounds = () => {
      const darkSections = document.querySelectorAll('[data-section="dark"]');
      if (darkSections.length > 0) {
        // Get the combined bounds of all dark sections
        let minTop = Infinity;
        let maxBottom = -Infinity;
        darkSections.forEach(section => {
          const rect = section.getBoundingClientRect();
          minTop = Math.min(minTop, rect.top);
          maxBottom = Math.max(maxBottom, rect.bottom);
        });
        setGalleryBounds({ top: minTop, bottom: maxBottom });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY + window.scrollY
      };
    };

    const handleScroll = () => {
      const newScroll = window.scrollY;
      const scrollDelta = newScroll - scrollRef.current;

      if (scrollDelta > 0) {
        setPosition(prev => ({
          x: prev.x,
          y: prev.y + scrollDelta * SCROLL_DRIFT
        }));
      }

      scrollRef.current = newScroll;
      setCurrentScroll(newScroll);
      updateGalleryBounds();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Initial bounds check
    updateGalleryBounds();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let lastTime = Date.now();

    const animate = () => {
      const now = Date.now();
      const delta = Math.min((now - lastTime) / 16, 2);
      lastTime = now;

      setPosition((prev) => {
        const mouse = mouseRef.current;
        const dx = prev.x - mouse.x;
        const dy = prev.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let newVelX = velocity.x;
        let newVelY = velocity.y;

        if (distance < FLEE_DISTANCE && distance > 0) {
          const fleeX = (dx / distance) * FLEE_SPEED;
          const fleeY = (dy / distance) * FLEE_SPEED;
          newVelX = fleeX;
          newVelY = fleeY;
        } else {
          if (Math.random() < 0.02) {
            newVelX = (Math.random() - 0.5) * WANDER_SPEED * 2;
            newVelY = (Math.random() - 0.5) * WANDER_SPEED * 2;
          }
        }

        // Push fly towards edges, away from center content
        const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
        const centerX = screenWidth / 2;
        const contentWidth = Math.min(screenWidth * 0.6, 600); // Approximate content area
        const leftEdge = centerX - contentWidth / 2;
        const rightEdge = centerX + contentWidth / 2;

        // If fly is in the content zone, gently push it to nearest edge
        if (prev.x > leftEdge && prev.x < rightEdge) {
          const distToLeft = prev.x - leftEdge;
          const distToRight = rightEdge - prev.x;
          if (distToLeft < distToRight) {
            newVelX -= CENTER_REPEL; // Push left
          } else {
            newVelX += CENTER_REPEL; // Push right
          }
        }

        // Also prefer staying within edge margins
        if (prev.x > EDGE_MARGIN && prev.x < screenWidth - EDGE_MARGIN) {
          // In the middle horizontally - add slight drift to edges
          if (prev.x < centerX) {
            newVelX -= 0.1;
          } else {
            newVelX += 0.1;
          }
        }

        let newX = prev.x + newVelX * delta;
        let newY = prev.y + newVelY * delta;

        const maxX = (typeof window !== 'undefined' ? window.innerWidth : 1000) - FLY_SIZE;

        if (newX < 0) {
          newX = 0;
          newVelX = Math.abs(newVelX);
        } else if (newX > maxX) {
          newX = maxX;
          newVelX = -Math.abs(newVelX);
        }

        const scrollY = scrollRef.current;
        const minY = scrollY + 50;
        const maxY = scrollY + (typeof window !== 'undefined' ? window.innerHeight : 800) - FLY_SIZE;

        if (newY < minY) {
          newY = minY;
          newVelY = Math.abs(newVelY);
        } else if (newY > maxY) {
          newY = maxY;
          newVelY = -Math.abs(newVelY);
        }

        setVelocity({ x: newVelX, y: newVelY });
        return { x: newX, y: newY };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [velocity]);

  return (
    <motion.div
      className="absolute pointer-events-none z-10"
      style={{
        left: position.x,
        top: position.y,
      }}
      animate={{
        left: position.x,
        top: position.y,
      }}
      transition={{
        type: "tween",
        duration: 0.05,
        ease: "linear",
      }}
    >
      {/* Simple Dot with drawing effect */}
      <svg width="16" height="16" viewBox="0 0 16 16" className="overflow-visible">
        <defs>
          <filter id="sketchy" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" seed="1" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
          </filter>
        </defs>
        <circle cx="8" cy="8" r="5" fill={isInDarkSection ? "#4ade80" : "black"} filter="url(#sketchy)">
          <animate
            attributeName="r"
            values="5;7;5"
            dur="0.8s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
          />
        </circle>
      </svg>
    </motion.div>
  );
}
