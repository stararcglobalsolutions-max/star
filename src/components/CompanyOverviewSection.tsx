"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CompanyOverviewSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    // Animate text content
    gsap.fromTo(
      ".overview-text",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );

    // Animate stats bar
    gsap.fromTo(
      ".stats-bar",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );

    // Animate numbers
    gsap.from(".stat-number", {
      textContent: 0,
      duration: 2,
      ease: "power2.out",
      snap: { textContent: 1 },
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".stats-bar",
        start: "top 85%",
      },
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-[#050505] text-white py-16 md:py-20 px-6 md:px-12 relative z-10 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16 mb-16">
          
          <div className="overview-text flex-1">
            <div className="w-10 h-1 bg-red-600 mb-6"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight">
              We don't just install <br className="hidden md:block"/> security. We <br className="hidden md:block"/> engineer peace of <br className="hidden md:block"/> mind.
            </h2>
          </div>

          <div className="overview-text flex-1 lg:max-w-xl pt-2 lg:pt-6">
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
              STARARC Global is a trusted provider of integrated security solutions, combining advanced technology, professional installation, and continuous monitoring to protect people, property, and businesses. With operations across India and Canada, we deliver enterprise-grade protection tailored to every environment — from luxury residences to large-scale industrial facilities.
            </p>
          </div>

        </div>

        {/* Stats Bar */}
        <div className="stats-bar bg-[#111111] rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 relative overflow-hidden">
          
          <div className="flex flex-col items-center justify-center text-center relative z-10">
            <div className="flex items-center">
              <span className="stat-number text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">10000</span>
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">+</span>
            </div>
            <span className="text-gray-500 uppercase tracking-[0.2em] text-xs font-semibold mt-3">INSTALLATIONS</span>
          </div>

          <div className="w-px h-12 bg-white/10 hidden md:block"></div>
          <div className="w-full h-px bg-white/10 block md:hidden"></div>

          <div className="flex flex-col items-center justify-center text-center relative z-10">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">24/7</span>
            <span className="text-gray-500 uppercase tracking-[0.2em] text-xs font-semibold mt-3">MONITORING</span>
          </div>

          <div className="w-px h-12 bg-white/10 hidden md:block"></div>
          <div className="w-full h-px bg-white/10 block md:hidden"></div>

          <div className="flex flex-col items-center justify-center text-center relative z-10">
            <span className="stat-number text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">2</span>
            <span className="text-gray-500 uppercase tracking-[0.2em] text-xs font-semibold mt-3">COUNTRIES</span>
          </div>

        </div>
      </div>
    </section>
  );
}
