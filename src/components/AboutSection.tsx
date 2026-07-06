"use client";

import React, { useRef } from "react";
import { CheckCircle2, Shield, Smartphone, Eye, Wrench, Headphones, Building2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Ensure GSAP plugins are registered safely for Next.js SSR
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const trustIndicators = [
  { text: "24/7 Professional Monitoring", icon: Headphones },
  { text: "Smart Mobile Control", icon: Smartphone },
  { text: "AI Video Analytics", icon: Eye },
  { text: "Professional Installation", icon: Wrench },
  { text: "Fast Response Support", icon: Shield },
  { text: "Residential & Commercial", icon: Building2 },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const textElements = textRef.current?.children;
    const images = imageRef.current?.children;

    if (!section || !textElements || !images) return;

    gsap.fromTo(
      textElements,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      images,
      { scale: 0.9, opacity: 0, y: 50 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full bg-black text-white pt-16 pb-10 lg:pt-20 lg:pb-12 overflow-hidden border-t border-white/10">

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Text Content */}
          <div ref={textRef} className="flex flex-col items-start max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-[2px] bg-red-600"></span>
              <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm">
                Protecting What Matters Most
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold leading-[1.2] tracking-tight mb-8">
              AI-Powered Security. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Professionally Monitored.
              </span><br />
              Built for Peace of Mind.
            </h2>

            {/* Categories */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {['Residential', 'Commercial', 'Industrial'].map((tag, idx) => (
                <div key={idx} className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-bold tracking-wide text-gray-300">
                  {tag}
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-[17px] leading-relaxed mb-12">
              STARARC delivers intelligent security solutions combining intrusion detection, AI video surveillance, access control, smart automation, and 24/7 professional monitoring. From design and installation to ongoing protection, we safeguard homes and businesses with enterprise-grade technology and exceptional service.
            </p>

            {/* Trust Indicators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 w-full">
              {trustIndicators.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-4 group cursor-default">
                    <div className="flex items-center justify-center transition-all duration-300">
                      <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="font-semibold text-gray-300 group-hover:text-white transition-colors text-[15px]">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Image Composition */}
          <div ref={imageRef} className="relative h-[450px] lg:h-[600px] w-full mt-10 lg:mt-0 rounded-[32px] overflow-hidden border border-white/5 group shadow-2xl">
            <img 
              src="/canada img.jpeg" 
              alt="Stararc Canada Security"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/20 pointer-events-none z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
