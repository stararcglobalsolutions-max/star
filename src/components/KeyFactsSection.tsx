import React from 'react';

export default function KeyFactsSection() {
  return (
    <section className="w-full bg-[#f4f4f4] text-black py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-[4.5rem] font-medium tracking-tight text-[#222] mb-4 leading-none">
            Key facts
          </h2>
          <p className="text-[#666] text-sm md:text-base font-medium leading-snug">
            A snapshot of our <br className="hidden md:block" /> experience and impact.
          </p>
        </div>

        {/* Grid Container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Featured & Awards */}
          <div className="relative bg-[#2b2b2d] rounded-lg overflow-hidden aspect-[4/5] p-8 flex flex-col justify-between group shadow-lg">
            {/* Background Graphic Placeholder (since we don't have the exact image) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#444] via-[#222] to-[#111] opacity-60"></div>

            {/* Mock Award Logo */}
            <div className="absolute bottom-[25%] left-8 w-12 h-6 border border-white/20 rounded flex items-center justify-center opacity-70">
              <span className="text-[8px] text-white font-bold tracking-widest">FWA</span>
            </div>

            <div className="relative z-10 text-white text-[10px] tracking-wide uppercase font-medium">
              FEATURED & AWARDS
            </div>

            <div className="relative z-10 flex justify-between items-end mt-auto w-full">
              <p className="text-gray-300 text-[11px] max-w-[130px] leading-tight">
                Featured on top design platforms worldwide.
              </p>
              <h3 className="text-6xl md:text-7xl font-normal text-white tracking-tighter leading-none flex items-start">
                50<span className="text-3xl md:text-4xl mt-1">+</span>
              </h3>
            </div>
          </div>

          {/* Card 2: Projects Completed */}
          <div className="relative bg-[#e6e4df] rounded-lg overflow-hidden aspect-[4/5] p-8 flex flex-col justify-between items-center text-center shadow-lg">
            <div className="text-[#444] text-[10px] tracking-wide uppercase font-medium mt-2">
              PROJECTS COMPLETED
            </div>

            <div className="w-40 h-40 md:w-48 md:h-48 bg-white rounded-full flex items-center justify-center shadow-sm my-auto">
              <h3 className="text-5xl md:text-[4rem] font-medium text-[#222] tracking-tighter flex items-start">
                1.5K<span className="text-2xl md:text-3xl mt-1 font-light">+</span>
              </h3>
            </div>

            <p className="text-[#666] text-[11px] max-w-[180px] leading-relaxed mb-2">
              90% of our clients seek our services for a second project.
            </p>
          </div>

          {/* Card 3: Team Members */}
          <div className="relative bg-[#2e3034] rounded-lg overflow-hidden aspect-[4/5] p-8 flex flex-col justify-between group shadow-lg">
            {/* Background Graphic Placeholder */}
            <div className="absolute inset-x-8 top-[20%] bottom-[25%] bg-[#1c1d1f] rounded shadow-inner flex items-center justify-center opacity-80 overflow-hidden">
              {/* Fake blinds pattern to mimic the screenshot's background */}
              <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(180deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 20px)' }}></div>
            </div>

            <div className="relative z-10 text-white text-[10px] tracking-wide uppercase font-medium text-right w-full">
              OUR TEAM MEMBERS
            </div>

            <div className="relative z-10 flex justify-between items-end mt-auto w-full">
              <p className="text-gray-300 text-[11px] max-w-[110px] leading-tight">
                Different skills.<br />One standard.
              </p>
              <h3 className="text-6xl md:text-7xl font-normal text-white tracking-tighter leading-none flex items-start">
                20<span className="text-3xl md:text-4xl mt-1">+</span>
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
