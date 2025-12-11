"use client";

import { useEffect, useState, useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
}

export default function ParallaxSection({
  children,
  speed = 0.3,
}: ParallaxSectionProps) {
  const [offsetY, setOffsetY] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        const rect = wrapperRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Only apply parallax when section is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          const scrolled = window.scrollY;
          const elementTop = wrapperRef.current.offsetTop;
          
          // Calculate parallax offset
          const yPos = -(scrolled - elementTop) * speed;
          setOffsetY(yPos);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div
      ref={wrapperRef}
      style={{
        transform: `translateY(${offsetY}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

