"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    num: "01",
    title: "Detect",
    desc: "Advanced sensors and AI cameras identify threats the moment they occur — motion, breach, smoke, or intrusion.",
  },
  {
    num: "02",
    title: "Verify",
    desc: "Our intelligent systems cross-reference multiple data points to confirm genuine threats and eliminate false alarms.",
  },
  {
    num: "03",
    title: "Alert",
    desc: "Instant notifications reach you and our monitoring centre simultaneously via app, SMS, and automated call.",
  },
  {
    num: "04",
    title: "Respond",
    desc: "Certified professionals assess the situation and dispatch emergency services or security personnel as required.",
  },
  {
    num: "05",
    title: "Protect",
    desc: "Continuous system learning and post-incident review ensure your security evolves to stay ahead of every threat.",
  }
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(2);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (containerRef.current) {
      gsap.fromTo(containerRef.current.children,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15, 
          ease: "power3.out", 
          scrollTrigger: { 
            trigger: containerRef.current, 
            start: "top 75%" 
          } 
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full bg-[#050505] text-white py-10 lg:py-16 overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 relative z-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-red-600"></span>
            <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-xs">The Process</span>
            <span className="w-8 h-[2px] bg-red-600"></span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A layered, intelligent approach to security — from the first signal to the final resolution.
          </p>
        </div>

        {/* Connecting Line Background (Desktop) */}
        <div className="hidden lg:block absolute top-[60%] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-red-600/30 to-transparent z-0"></div>

        {/* Flip Cards Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10 perspective-1000">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="relative w-full h-[320px] cursor-pointer [perspective:1000px]"
              onMouseEnter={() => setActiveIndex(idx)}
            >
              
              {/* Card Inner */}
              <div className={`w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${activeIndex === idx ? '[transform:rotateY(180deg)]' : ''}`}>
                
                {/* Front */}
                <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] border border-white/10 p-8 flex flex-col justify-between [backface-visibility:hidden] shadow-xl rounded-xl">
                  {/* Faint Background Number */}
                  <div className="absolute top-4 right-4 text-8xl font-extrabold text-white/[0.03] select-none z-0 tracking-tighter">
                    {step.num}
                  </div>
                  
                  <div className="w-12 h-12 bg-red-600 text-white font-bold flex items-center justify-center text-lg relative z-10">
                    {step.num}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white relative z-10">{step.title}</h3>
                </div>

                {/* Back */}
                <div className="absolute inset-0 w-full h-full bg-red-600 border border-red-500 p-8 flex flex-col justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-[0_0_40px_rgba(220,38,38,0.3)] rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/20 pb-3">{step.title}</h3>
                  <p className="text-white/95 text-[15px] leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
