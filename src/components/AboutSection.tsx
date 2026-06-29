"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    tl.fromTo(".about-elem", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-[#020202] py-24 md:py-40 px-6 md:px-12 border-t border-white/[0.05] overflow-hidden">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] md:w-[50%] h-[80%] bg-white opacity-[0.015] blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 md:gap-24 items-start z-10 relative">
        
        {/* Left side: Heading */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6 about-elem">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[1px] bg-gray-500"></div>
            <p className="font-mono text-xs tracking-widest text-gray-400 uppercase">Our Identity</p>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-none">
            About Us.
          </h2>
        </div>

        {/* Right side: Paragraph content */}
        <div className="w-full lg:w-2/3 about-elem">
          <p className="text-xl md:text-3xl lg:text-[2.2rem] font-light text-gray-300 leading-[1.5] tracking-tight">
            <span className="text-white font-medium">Stararc Solutions Inc.</span> is a premier security systems company specialising in advanced intrusion detection, CCTV surveillance, access control, fire alarm systems, and 24/7 remote monitoring solutions.
          </p>
          <div className="w-full h-[1px] bg-white/10 my-10 md:my-14"></div>
          <p className="text-lg md:text-2xl font-light text-gray-400 leading-[1.6] tracking-tight">
            With over <span className="text-white font-medium">15 years of combined industry expertise</span> across Canada and India, Stararc delivers end-to-end security infrastructure for commercial, industrial, and residential properties — protecting what matters most with precision, performance, and professionalism.
          </p>
        </div>
        
      </div>
    </section>
  );
}
