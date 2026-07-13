"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function VideoSurveillance() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white font-sans overflow-x-clip">
      {/* Site Global Header */}
      <Header />
      
      {/* HERO SECTION */}
      <section className="relative w-full pt-[150px] pb-24 px-6 md:px-12 flex flex-col items-center justify-start overflow-hidden bg-[#050505]">
        
        {/* Concentric blue circles background */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] max-w-[3000px] aspect-square pointer-events-none opacity-50 flex items-center justify-center">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full border border-blue-900/40"
              style={{
                width: `${(i + 1) * 8}%`,
                height: `${(i + 1) * 8}%`,
                boxShadow: 'inset 0 0 40px rgba(0, 50, 150, 0.05)',
              }}
            />
          ))}
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-4 mt-8 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Video surveillance
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Intelligent wired and wireless video security
          </p>
        </div>

        <div className="relative z-10 max-w-[1200px] w-full mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-left">
            Complete visibility, complete control
          </h2>
          
          <div className="space-y-6 text-gray-300 text-base md:text-[17px] leading-relaxed max-w-4xl text-left">
            <p>
              Our video surveillance solutions provide crystal-clear monitoring for any environment. From compact indoor cameras to robust outdoor systems, we offer a comprehensive range of intelligent video security devices.
            </p>
            <p>
              StarArc's video surveillance integrates seamlessly with our intrusion protection systems, offering verified alarms and real-time visual confirmation. Advanced AI analytics minimize false alarms and ensure that you are always aware of what's happening on your property.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
