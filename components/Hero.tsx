"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import StarsBackground from "./StarsBackground";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Dark purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/30 to-transparent pointer-events-none z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div
            className={`transition-all duration-1000 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="mb-3 overflow-visible">
              <p className="text-xl md:text-2xl text-cyan-400 mb-3 font-light tracking-wide">
                Hi I&apos;m
              </p>
              <h1 className="text-6xl md:text-8xl mb-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent overflow-visible" style={{
                fontFamily: 'var(--font-great-vibes), cursive',
                letterSpacing: '0.03em',
                fontWeight: 400,
                fontStyle: 'normal',
                lineHeight: '1.1',
                paddingRight: '1rem',
              }}>
                <span style={{ fontSize: '0.75em', display: 'inline-block', verticalAlign: 'baseline' }}>S</span>hriny
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl font-light tracking-wider text-gray-300 mb-8 uppercase letter-spacing-wider">
              Software Engineer
            </h2>

            {/* Social Links */}
            <div className="flex items-center space-x-6 mb-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope size={28} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-cyan-500/50 text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side - Image/Illustration */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              mounted
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Placeholder for image - You can replace this with an actual image */}
              <div className="relative w-full h-[500px] flex items-center justify-center">
                {/* Decorative circles */}
                <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                
                {/* Illustration container - Add your illustration here */}
                  {/* <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="relative w-38 h-38 md:w-30 md:h-30 rounded-full overflow-hidden border-1 border-cyan-400/50 shadow-2xl bg-gray-900/50">
                      <Image
                        src="/hero-illustration.png"
                        alt="Software Engineer Illustration"
                        width={240}
                        height={240}
                        className="object-contain w-full h-full drop-shadow-2xl"
                        priority
                        style={{
                          filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))',
                        }}
                      />
                    </div>
                  </div> */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="text-center w-40 h-40 text-white">
                    <Image
                      src="/hero-illustration.png"
                      alt="Software Engineer Illustration"
                      width={320}
                      height={320}
                      className="object-contain w-full h-full drop-shadow-2xl"
                      priority
                      style={{
                        filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.3))',
                      }}
                    />
                    </div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-10 right-10 w-16 h-16 bg-cyan-400/20 rounded-lg rotate-12 animate-bounce" />
                <div className="absolute bottom-20 left-10 w-12 h-12 bg-purple-400/20 rounded-lg -rotate-12 animate-bounce delay-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
            aria-label="Scroll down"
          >
            <FaArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
