"use client";
import React from "react";

const solutions = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=1000&auto=format&fit=crop",
    title: "Assemble your StarArc system"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    title: "Solutions by facility type"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
    title: "Customer stories"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
    title: "StarArc Ready products"
  }
];

export default function SolutionOverview() {
  return (
    <section className="w-full bg-black pt-8 md:pt-10 pb-24 px-4 md:px-12 text-white relative z-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-12 max-w-[850px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight">Solution overview</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {solutions.map((item) => (
            <div key={item.id} className="flex flex-col gap-5 group cursor-pointer">
              <div className="w-full aspect-[4/5] sm:aspect-square lg:aspect-[10/11] bg-[#111] rounded-[24px] overflow-hidden relative shadow-lg border border-white/5">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-80 group-hover:opacity-100 filter grayscale-[20%] group-hover:grayscale-0" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>
              <h3 className="text-[17px] md:text-[18px] font-bold group-hover:text-[#e60000] transition-colors duration-300">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
