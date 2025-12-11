"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ParallaxSection from "@/components/ParallaxSection";
import StarsBackground from "@/components/StarsBackground";

export default function Home() {
  return (
    <div className="relative">
      {/* Persistent Stars Background */}
      <StarsBackground />
      
      <div className="relative z-0">
        {/* Hero - HAS parallax */}
        <ParallaxSection speed={0.5}>
          <Hero />
        </ParallaxSection>
        
        {/* About - NO parallax */}
        <About />
        
        {/* Experience - HAS parallax */}
        <ParallaxSection speed={0.4}>
          <Experience />
        </ParallaxSection>
        
        {/* Skills - NO parallax */}
        <Skills />
        
        {/* Projects (Applications Developed) - HAS parallax */}
        <ParallaxSection speed={0.4}>
          <Projects />
        </ParallaxSection>
        
        {/* Education - NO parallax */}
        <Education />
        
        {/* Certifications - HAS parallax */}
        <ParallaxSection speed={0.4}>
          <Certifications />
        </ParallaxSection>
        
        {/* Contact - NO parallax */}
        <Contact />
      </div>
    </div>
  );
}

