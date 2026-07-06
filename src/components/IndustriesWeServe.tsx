"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const industries = [
  { name: "Residential", image: "/residential-img.png" },
  { name: "Apartments & Condos", image: "/apartments.png" },
  { name: "Commercial Offices", image: "/FOR COMERCIAL OFFICIES.png" },
  { name: "Warehouses", image: "/FOR WEARHOUSE.png" },
  { name: "Retail Stores", image: "/industry_retail.png" },
  { name: "Educational Institutions", image: "/industry_education.png" },
  { name: "Healthcare Facilities", image: "/HEALTHCARE FACILITIES.png" },
  { name: "Industrial Sites", image: "/INDUSTRIAL.png" }
];

export default function IndustriesWeServe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Title Fade
    gsap.fromTo(titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 80%" } }
    );

    // Image Grid Reveal Stagger
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.children,
        { scale: 0.95, opacity: 0, y: 30 },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0,
          duration: 0.8, 
          stagger: 0.1, 
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
    <section ref={sectionRef} className="relative w-full bg-[#030303] text-white py-10 lg:py-16 overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div ref={titleRef} className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Purpose-built security solutions for every environment.
          </p>
        </div>

        {/* Image Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {industries.map((item, idx) => (
            <div key={idx} className="group relative w-full h-[280px] lg:h-[320px] rounded-none overflow-hidden cursor-pointer shadow-xl border border-white/5">
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Glowing Hover Effect */}
              <div className="absolute inset-0 bg-red-600/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>

              {/* Title */}
              <h3 className="absolute bottom-6 left-6 text-white font-bold text-lg lg:text-xl z-20 group-hover:text-red-400 transition-colors duration-300">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
