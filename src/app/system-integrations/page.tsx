"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function SystemIntegrations() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white font-sans overflow-x-clip">
      <Header />
      
      <section className="relative w-full pt-[150px] pb-24 px-6 md:px-12 flex flex-col items-center justify-start overflow-hidden bg-[#050505]">
        
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] max-w-[3000px] aspect-square pointer-events-none opacity-50 flex items-center justify-center">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full border border-purple-900/40"
              style={{
                width: `${(i + 1) * 8}%`,
                height: `${(i + 1) * 8}%`,
                boxShadow: 'inset 0 0 40px rgba(100, 0, 150, 0.05)',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-[1200px] w-full mx-auto mt-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Seamlessly connect your digital ecosystem
          </h2>
          
          <div className="space-y-6 text-gray-300 text-base md:text-[17px] leading-relaxed max-w-4xl">
            <p>
              StarArc's system integration modules allow you to bridge the gap between our cutting-edge wireless technology and third-party wired systems. Expand the capabilities of legacy systems or integrate StarArc detectors seamlessly into centralized smart building platforms.
            </p>
            <p>
              Whether it is integrating with Yale smart locks for secure and automated access control, or using Transmitter modules to connect specialized third-party sensors, our integration solutions ensure that you are never locked into a closed ecosystem.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
