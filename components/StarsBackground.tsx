"use client";

import { useEffect, useRef, useState } from "react";

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size - make it taller for full page coverage
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight || window.innerHeight * 3;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Create stars
    const stars: Array<{
      x: number;
      y: number;
      radius: number;
      velocityX: number;
      velocityY: number;
      opacity: number;
    }> = [];

    const numStars = 300;
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        velocityX: (Math.random() - 0.5) * 0.5,
        velocityY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random(),
      });
    }

    // Scroll handler for parallax
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Animation loop
    const animate = () => {
      ctx.fillStyle = "#0a0a0f";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Update position
        star.x += star.velocityX;
        star.y += star.velocityY;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw star with parallax offset
        const parallaxY = star.y + scrollY * 0.3;
        ctx.beginPath();
        ctx.arc(star.x, parallaxY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Add twinkle effect
        star.opacity += (Math.random() - 0.5) * 0.02;
        if (star.opacity > 1) star.opacity = 1;
        if (star.opacity < 0.3) star.opacity = 0.3;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ 
        background: "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
        height: "100vh",
        minHeight: "100%"
      }}
    />
  );
}

