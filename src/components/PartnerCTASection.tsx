"use client";
import React from "react";
import Link from "next/link";

export default function PartnerCTASection() {
  return (
    <section className="w-full bg-black py-16 md:py-24 px-4 md:px-12 text-white relative z-10">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="relative p-[1px] rounded-[32px] overflow-hidden group transition-all duration-700 hover:shadow-[0_0_40px_rgba(220,38,38,0.15)] hover:-translate-y-1 bg-gradient-to-br from-white/10 to-transparent">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="relative bg-[#0a0a0a]/90 backdrop-blur-3xl h-full p-8 md:p-12 lg:p-14 rounded-[31px] flex flex-col justify-between items-start gap-12">
              <div className="flex flex-col gap-4">
                <h3 className="text-[24px] md:text-[32px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Purchase StarArc Solutions</h3>
                <p className="text-[#888] text-[15px] md:text-[17px] leading-relaxed max-w-[95%] font-light">
                  Search for companies selling and/or installing security and automation devices globally.
                </p>
              </div>
              <Link href="/shop" className="relative overflow-hidden group/btn bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-semibold text-[15px] px-8 py-3.5 rounded-full transition-all duration-500 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                <span className="relative z-10 flex items-center gap-2">Where to buy <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></span>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative p-[1px] rounded-[32px] overflow-hidden group transition-all duration-700 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:-translate-y-1 bg-gradient-to-br from-white/10 to-transparent">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            <div className="relative bg-[#0a0a0a]/90 backdrop-blur-3xl h-full p-8 md:p-12 lg:p-14 rounded-[31px] flex flex-col justify-between items-start gap-12">
              <div className="flex flex-col gap-4">
                <h3 className="text-[24px] md:text-[32px] font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Start a new story</h3>
                <p className="text-[#888] text-[15px] md:text-[17px] leading-relaxed max-w-[95%] font-light">
                  Become a partner of StarArc Systems as an official distributor, authorized reseller, or installer.
                </p>
              </div>
              <Link href="/become-partner" className="relative overflow-hidden group/btn bg-white hover:bg-gray-100 text-black font-semibold text-[15px] px-8 py-3.5 rounded-full transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <span className="relative z-10 flex items-center gap-2">Become a partner <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
