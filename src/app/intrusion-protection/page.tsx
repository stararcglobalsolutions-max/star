"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function IntrusionProtection() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white font-sans overflow-x-clip">
      {/* Site Global Header */}
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative w-full pt-[100px] flex flex-col items-center justify-start overflow-hidden bg-[#050505]">
        
        {/* Concentric red circles background */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] max-w-[3000px] aspect-square pointer-events-none opacity-50 flex items-center justify-center">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full border border-red-900/40"
              style={{
                width: `${(i + 1) * 8}%`,
                height: `${(i + 1) * 8}%`,
                boxShadow: 'inset 0 0 40px rgba(150, 0, 0, 0.05)',
              }}
            />
          ))}
        </div>



        {/* Hero Image */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 mt-2">
          <div className="relative w-full aspect-[21/9]">
            <Image 
              src="/screenshot.png" 
              alt="Intrusion protection devices"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>



      {/* CONTENT SECTION */}
      <section className="w-full py-24 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            For every project, routine or ambitious
          </h2>
          
          <div className="space-y-6 text-gray-300 text-base md:text-[17px] leading-relaxed max-w-4xl">
            <p>
              Intrusion protection category has two product lines of professional devices: Baseline and StarArc Superior. Baseline comprises a wide range of basic wireless indoor and outdoor devices that any StarArc partner can offer.
            </p>
            <p>
              StarArc Superior includes advanced wireless and all wired intrusion devices. These products are compliant with the most stringent international and local regulations and perfect for high-profile projects. The access to the StarArc Superior product line is granted to accredited partners after they complete specialized training at StarArc Academy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
