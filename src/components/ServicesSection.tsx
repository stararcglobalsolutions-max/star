"use client";

import React, { useState } from "react";

const services = [
  "Strategy & Branding",
  "Web3 & Blockchain Interfaces",
  "Immersive 3D Experiences",
  "Creative Development",
  "Motion & Interaction Design"
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-[80vh] bg-black py-32 flex flex-col justify-center border-t border-white/[0.05]">
      
      <div className="px-6 md:px-12 mb-16">
        <span className="font-mono text-sm tracking-widest uppercase text-gray-500">Our Expertise</span>
      </div>

      <div className="flex flex-col w-full relative z-10">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group relative border-b border-white/[0.05] first:border-t hover:bg-white/[0.02] transition-colors duration-500"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="px-6 md:px-12 py-10 md:py-16 flex items-center justify-between cursor-pointer">
              <h3 className="text-3xl md:text-5xl lg:text-7xl font-light tracking-tighter text-gray-400 group-hover:text-white group-hover:pl-4 md:group-hover:pl-8 transition-all duration-500 ease-out">
                {service}
              </h3>
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center opacity-100 md:opacity-0 group-hover:opacity-100 group-hover:-rotate-45 transition-all duration-500 ease-out">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white w-4 h-4 md:w-6 md:h-6">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
            
            {/* Background Gradient Reveal simulating dynamic hover state */}
            <div 
              className={`absolute inset-0 w-full h-full bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-transparent opacity-0 pointer-events-none transition-opacity duration-700 z-[-1] ${hoveredIndex === index ? 'opacity-100' : ''}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
