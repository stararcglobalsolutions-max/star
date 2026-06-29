"use client";
import React from "react";

export default function PartnerCTASection() {
  return (
    <section className="w-full bg-black py-16 md:py-24 px-4 md:px-12 text-white relative z-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="bg-[#151515] p-8 md:p-12 lg:p-14 rounded-[24px] flex flex-col justify-between items-start gap-12 group hover:bg-[#1a1a1a] transition-colors duration-500">
            <div className="flex flex-col gap-4">
              <h3 className="text-[22px] md:text-[26px] font-bold tracking-tight">Purchase StarArc Solutions</h3>
              <p className="text-[#a0a0a0] text-[15px] md:text-[16px] leading-relaxed max-w-[95%]">
                Search for companies selling and/or installing security and automation devices.
              </p>
            </div>
            <button className="bg-[#e60000] hover:bg-[#cc0000] hover:scale-105 active:scale-95 text-white font-semibold text-[14px] px-6 py-2.5 rounded-full transition-all duration-300">
              Where to buy
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#151515] p-8 md:p-12 lg:p-14 rounded-[24px] flex flex-col justify-between items-start gap-12 group hover:bg-[#1a1a1a] transition-colors duration-500">
            <div className="flex flex-col gap-4">
              <h3 className="text-[22px] md:text-[26px] font-bold tracking-tight">Start a new story</h3>
              <p className="text-[#a0a0a0] text-[15px] md:text-[16px] leading-relaxed max-w-[95%]">
                Become a partner of StarArc Systems as an official distributor, authorized reseller, or installer. Or team up with us as a security or monitoring company.
              </p>
            </div>
            <button className="bg-white hover:bg-gray-200 hover:scale-105 active:scale-95 text-black font-semibold text-[14px] px-6 py-2.5 rounded-full transition-all duration-300">
              Become a partner
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
