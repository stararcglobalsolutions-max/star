"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Smartphone, Bell, Video, Activity, ShieldCheck, Smile, Sliders, Zap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  { icon: Bell, title: "Real-time alerts", desc: "Instant notifications directly to your device." },
  { icon: Video, title: "Live video feed", desc: "Monitor your premises in crystal-clear HD." },
  { icon: Activity, title: "System status overview", desc: "Comprehensive view of your entire security setup." },
  { icon: Smartphone, title: "Mobile accessibility", desc: "Total control from anywhere in the world." }
];

const benefits = [
  { icon: ShieldCheck, title: "Enhanced peace of mind", desc: "Knowing your property is monitored 24/7." },
  { icon: Smile, title: "User-friendly interface", desc: "Intuitive design meant for everyone." },
  { icon: Sliders, title: "Centralized management", desc: "Control all sensors and cameras in one place." },
  { icon: Zap, title: "Instant notifications", desc: "Never miss a critical event again." }
];

export default function DashboardFeatureSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    tl.fromTo(".dash-header", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(".dash-card", 
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)" },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-white py-12 md:py-20 px-6 md:px-12 border-t border-black/[0.05] relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#e60000] opacity-5 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-20 dash-header">
          <p className="font-mono text-sm tracking-widest text-[#e60000] uppercase mb-4">Experience seamless control</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Your Security, In Your Hand
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Take command of your entire security ecosystem with the STARARC Dashboard. Designed for clarity, speed, and absolute control.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Key Features */}
          <div>
            <div className="flex items-center gap-4 mb-8 dash-header">
              <div className="w-10 h-[1px] bg-gray-400"></div>
              <h3 className="text-2xl font-bold text-gray-900">Key Features</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((item, index) => (
                <div key={index} className="dash-card bg-white border border-black/[0.05] shadow-lg shadow-black/[0.02] p-6 rounded-xl hover:shadow-xl hover:border-black/[0.1] transition-all duration-300">
                  <div className="w-12 h-12 bg-[#e60000]/10 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="text-[#e60000]" size={24} />
                  </div>
                  <h4 className="text-gray-900 font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <div className="flex items-center gap-4 mb-8 dash-header">
              <div className="w-10 h-[1px] bg-gray-400"></div>
              <h3 className="text-2xl font-bold text-gray-900">Benefits</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((item, index) => (
                <div key={index} className="dash-card bg-white border border-black/[0.05] shadow-lg shadow-black/[0.02] p-6 rounded-xl hover:shadow-xl hover:border-black/[0.1] transition-all duration-300">
                  <div className="w-12 h-12 bg-[#e60000]/10 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="text-[#e60000]" size={24} />
                  </div>
                  <h4 className="text-gray-900 font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
