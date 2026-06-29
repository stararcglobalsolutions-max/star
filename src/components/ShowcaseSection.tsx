"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  { id: 1, title: "Lumina", category: "Web3 Interface", color: "#1a1a24", type: "sequence" },
  { id: 2, title: "Aura", category: "Motion Identity", color: "#241a1a", video: "/STARARC_AI_Motion_Sensor_202606271700.mp4" },
  { id: 3, title: "Vault", category: "Smart Lock", color: "#1a241e", video: "/STARARC_Smart_Lock_product_comme…_202606271811.mp4" },
  { id: 4, title: "Reveal", category: "Product Architecture", color: "#222", video: "https://res.cloudinary.com/dsizhtxet/video/upload/v1782720859/Product_exploded_reveal_animation_202606211249_1_vfpr9p.mp4" },
];

const ImageSequence = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let frame = 1;
    let lastTime = 0;
    const fps = 30; // Assuming 30fps for the sequence
    const interval = 1000 / fps;
    let animationId: number;

    const render = (time: number) => {
      if (time - lastTime >= interval) {
        frame = frame >= 300 ? 1 : frame + 1;
        if (imgRef.current) {
          const paddedIndex = frame.toString().padStart(3, '0');
          imgRef.current.src = `/ezgif-82c39d5c449bf5a5-png-split/ezgif-frame-${paddedIndex}.png`;
        }
        lastTime = time;
      }
      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-black z-0 flex items-center justify-center">
      <img
        ref={imgRef}
        className="w-full h-full object-contain md:object-cover"
        alt="Lumina sequence"
        src="/ezgif-82c39d5c449bf5a5-png-split/ezgif-frame-001.png"
      />
    </div>
  );
};

export default function ShowcaseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // We are using a pure CSS snap slider instead of GSAP pinning 
  // for a more natural swiping/scrolling experience.

  return (
    <section ref={sectionRef} className="relative w-full bg-[#020202] pt-4 md:pt-8 pb-12 md:pb-20 overflow-hidden border-t border-white/[0.05]">


      {/* Auto-Sliding Infinite Marquee Container */}
      <style>{`
        @keyframes slideMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .auto-slide-track {
          display: flex;
          width: max-content;
          animation: slideMarquee 25s linear infinite;
        }
        .auto-slide-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="overflow-hidden w-full relative">
        <div className="auto-slide-track gap-4 md:gap-6 px-4 md:px-6">
          {/* Duplicating projects array to create a seamless infinite loop */}
          {[...projects, ...projects, ...projects, ...projects].map((project, i) => (
            <div
              key={`${project.id}-${i}`}
              className="group relative w-[280px] md:w-[400px] h-[300px] md:h-[400px] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 border border-white/5 bg-[#070707]"
            >
              {/* Conditional Keyframe Animation for Lumina */}
              {project.type === "sequence" && <ImageSequence />}

              {/* Video Background for cards with video */}
              {project.video && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
                  src={project.video}
                />
              )}

              {/* Content for text-based cards only */}
              {(!project.video && project.type !== "sequence") && (
                <>
                  {/* Glowing Accent using project color */}
                  <div
                    className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${project.color} 0%, transparent 70%)` }}
                  />

                  {/* Dark gradient at bottom to ensure text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

                  {/* Text Content */}
                  <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8 z-20 flex flex-col gap-1">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest translate-y-0 md:translate-y-2 opacity-100 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tighter translate-y-0 md:translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
                      {project.title}
                    </h3>
                  </div>
                </>
              )}

              {/* Floating Arrow Icon (Top Right) */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 bg-white/5 backdrop-blur-md">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white -rotate-45">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
