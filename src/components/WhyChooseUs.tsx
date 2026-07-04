"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Crosshair, Cpu, Zap, Expand, CircleDollarSign, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const reasons = [
  { title: "Canadian Standards", icon: ShieldCheck, desc: "Adhering strictly to national security benchmarks for total reliability." },
  { title: "End-to-End Design", icon: Crosshair, desc: "From custom blueprints to 24/7 professional surveillance, we do it all." },
  { title: "Enterprise Technology", icon: Cpu, desc: "Utilizing the world's most advanced AI and hardware solutions." },
  { title: "Fast Pro Support", icon: Zap, desc: "Rapid response teams ensuring you are never left vulnerable." },
  { title: "Scalable Solutions", icon: Expand, desc: "Protecting everything from single homes to industrial warehouses." },
  { title: "Transparent Pricing", icon: CircleDollarSign, desc: "Honest, upfront costs with zero hidden fees. Pure transparency." },
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !gridRef.current) return;

    ScrollTrigger.refresh();

    // Fade in Header
    gsap.fromTo(".why-header",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
    );

    // Stagger Cards
    gsap.fromTo(gridRef.current.children,
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 75%",
        }
      }
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] text-white py-10 lg:py-16 overflow-hidden border-t border-white/5">
      {/* Background Cinematic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="why-header flex flex-col items-center text-center mb-10 lg:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-red-600"></span>
            <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm">The StarArc Advantage</span>
            <span className="w-8 h-[2px] bg-red-600"></span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">STARARC?</span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-2xl leading-relaxed">
            We don't just install cameras. We engineer comprehensive, intelligent ecosystems designed to anticipate and neutralize threats before they happen.
          </p>
        </div>

        {/* Bento Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="group relative w-full h-full rounded-[24px] p-8 lg:p-10 bg-white/[0.02] border border-white/10 hover:border-red-500/50 transition-all duration-500 overflow-hidden cursor-default shadow-xl hover:shadow-[0_0_40px_rgba(220,38,38,0.15)] hover:-translate-y-1">
                
                {/* Number Watermark */}
                <div className="absolute -bottom-6 -right-4 text-[120px] font-black text-white/[0.02] group-hover:text-red-500/[0.05] transition-colors duration-500 pointer-events-none select-none z-0">
                  0{idx + 1}
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 shadow-[0_0_20px_rgba(220,38,38,0.2)] group-hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                </div>
              </div>
            );
          })}

          {/* Removed CTA Block as requested */}

        </div>
      </div>
    </section>
  );
}
