"use client";

import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const filters = ["New releases", "Solutions by facility type", "Product groups"];

const cards = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2000&auto=format&fit=crop",
    title: "StarArc Special Event: Dare to be first",
    desc: "Check out the presentation of our latest solutions"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    title: "LifeQuality Lite Jeweller",
    desc: "Wireless temperature and humidity monitor for facilities with strict climate requirements"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=2000&auto=format&fit=crop",
    title: "StarArc Translator PRO and Cloud Signaling are now EN 50136 certified",
    desc: "StarArc Systems became one of the first manufacturers to certify software for the receiving centre transceiver functionality"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
    title: "NVR HDC",
    desc: "Full-fledged local video recording system"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    title: "Next-Gen Intrusion Prevention",
    desc: "Detect threats before they breach your perimeter with our advanced AI sensors."
  }
];

export default function ExploreSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Calculate scroll amount based on approximate card width
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.85 : 480 + 24; // Card width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="w-full bg-black py-24 px-4 md:px-12 text-white relative z-10">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-[32px] md:text-[44px] font-bold mb-8 tracking-tight text-center">Explore us</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((filter, i) => (
            <button 
              key={i}
              onClick={() => setActiveFilter(i)}
              className={`px-6 py-2.5 rounded-full text-[14px] font-semibold transition-all duration-300 ${
                activeFilter === i 
                  ? "bg-white text-black hover:scale-105" 
                  : "bg-[#1a1a1a] text-white hover:bg-[#2a2a2a]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Slider Container */}
        <div className="relative group w-full">
          {/* Hide default scrollbar but allow native scrolling */}
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}} />
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 cursor-grab active:cursor-grabbing"
          >
            {cards.map((card) => (
              <div key={card.id} className="min-w-[85vw] md:min-w-[400px] lg:min-w-[450px] xl:min-w-[480px] snap-start flex flex-col gap-6 group/card">
                <div className="w-full aspect-[16/10] bg-[#111] rounded-2xl overflow-hidden relative shadow-2xl">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/card:scale-105 opacity-80 group-hover/card:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
                <div className="flex flex-col gap-3 pr-4">
                  <h3 className="text-[18px] md:text-[20px] font-bold leading-tight group-hover/card:text-[#e60000] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-[#a0a0a0] text-[15px] leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button 
            onClick={() => scroll("left")} 
            className="w-12 h-12 rounded-full border border-white/10 bg-[#111111] flex items-center justify-center hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll("right")} 
            className="w-12 h-12 rounded-full border border-white/10 bg-[#111111] flex items-center justify-center hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
