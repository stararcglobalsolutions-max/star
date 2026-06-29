"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const capabilities = [
  {
    id: "01",
    title: "DIGITAL DIRECTION",
    category: "Web & Strategy",
    media: "/video_202606261504sss.mp4",
  },
  {
    id: "02",
    title: "MOTION IDENTITY",
    category: "3D & Animation",
    media: "/STARARC_AI_Motion_Sensor_202606271700.mp4",
  },
  {
    id: "03",
    title: "WEB3 EXPERIENCES",
    category: "Blockchain",
    media: "/video_202606261504.mp4",
  }
];

export default function CapabilitiesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const mediaContainerRef = useRef<HTMLDivElement>(null);
  const [activeMedia, setActiveMedia] = useState<string | null>(null);

  useGSAP(() => {
    // QuickTo for high-performance mouse tracking
    const xTo = gsap.quickTo(mediaContainerRef.current, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(mediaContainerRef.current, "y", { duration: 0.5, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half width (150px) and half height (200px) to center it on the cursor
      xTo(e.clientX - 150);
      yTo(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      // Added rounded top and a solid background to gracefully overlay the fixed transparent background
      className="relative w-full bg-black py-32 md:py-48 z-10 rounded-t-[3rem] md:rounded-t-[4rem] border-t border-white/[0.05]" 
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col gap-6 mb-20 md:mb-32">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[1px] bg-white/30"></div>
            <p className="font-mono text-xs tracking-widest text-gray-400 uppercase">Capabilities</p>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tighter text-white leading-[0.95]">
            Beyond standard. <br className="hidden md:block"/> Built for impact.
          </h2>
        </div>

        {/* Hover-Reveal List */}
        <div className="flex flex-col border-t border-white/[0.05]">
          {capabilities.map((cap, index) => (
            <div 
              key={cap.id}
              className="group relative flex flex-col md:flex-row md:items-center justify-between border-b border-white/[0.05] py-12 md:py-16 cursor-pointer overflow-hidden"
              onMouseEnter={() => setActiveMedia(cap.media)}
              onMouseLeave={() => setActiveMedia(null)}
            >
              <div className="flex items-center gap-8 md:gap-16 z-10">
                <span className="font-mono text-sm text-gray-600 transition-colors duration-500 group-hover:text-white">
                  {cap.id}
                </span>
                <h3 className="text-5xl md:text-[6rem] font-bold tracking-tighter text-white/20 transition-all duration-500 group-hover:text-white group-hover:translate-x-4">
                  {cap.title}
                </h3>
              </div>
              <div className="mt-4 md:mt-0 z-10 md:pr-8">
                <span className="font-mono text-xs tracking-widest text-gray-500 uppercase group-hover:text-white transition-colors duration-500">
                  {cap.category}
                </span>
              </div>

              {/* Background fill effect on hover */}
              <div className="absolute inset-0 w-full h-full bg-white/[0.02] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Media Container (Follows Cursor) */}
      {/* Hidden on mobile, only visible on md+ screens */}
      <div 
        ref={mediaContainerRef}
        className="fixed top-0 left-0 w-[300px] h-[400px] pointer-events-none z-50 overflow-hidden rounded-2xl hidden md:block"
        style={{ 
          opacity: activeMedia ? 1 : 0,
          transform: activeMedia ? "scale(1)" : "scale(0.8)",
          transition: "opacity 0.4s ease, transform 0.6s cubic-bezier(0.19,1,0.22,1)",
        }}
      >
        {/* Render all media absolutely and just change opacity for smooth crossfades */}
        {capabilities.map((cap) => (
          <video
            key={cap.id}
            src={cap.media}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: activeMedia === cap.media ? 1 : 0 }}
          />
        ))}
      </div>
    </section>
  );
}
