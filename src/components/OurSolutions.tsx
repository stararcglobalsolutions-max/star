"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldAlert, Lock, Camera, Activity, 
  DoorOpen, Zap, Flame, Eye, 
  Cpu, Clock, Phone, Bell 
} from "lucide-react";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const solutions = [
  {
    title: "Intrusion Alarm Systems",
    desc: "Multi-zone detection with instant alerts and professional response protocols.",
    icon: ShieldAlert
  },
  {
    title: "Smart Automation",
    desc: "Unified control of lighting, locks, cameras, and climate from a single app.",
    icon: Cpu
  },
  {
    title: "Smart Door Locks & Access Control",
    desc: "Biometric, keypad, and app-controlled entry for complete access management.",
    icon: Lock
  },
  {
    title: "CCTV & AI Video Surveillance",
    desc: "4K cameras with AI-powered analytics, facial recognition, and cloud storage.",
    icon: Camera
  },
  {
    title: "Motion Detection",
    desc: "Precision PIR and microwave sensors covering every angle of your property.",
    icon: Activity
  },
  {
    title: "Door & Window Sensors",
    desc: "Instant breach detection on every entry point with tamper-proof installation.",
    icon: DoorOpen
  },
  {
    title: "Glass Break Detection",
    desc: "Acoustic sensors that identify the unique frequency of breaking glass.",
    icon: Zap
  },
  {
    title: "Smoke & CO Detection",
    desc: "Early-warning fire and carbon monoxide detection integrated with your alarm system.",
    icon: Flame
  },
  {
    title: "Outdoor Motion Detection",
    desc: "Weatherproof perimeter sensors with pet-immune technology and floodlight integration.",
    icon: Eye
  },
  {
    title: "24/7 Professional Monitoring",
    desc: "Round-the-clock monitoring by certified security professionals with sub-60s response.",
    icon: Clock
  },
  {
    title: "Video Intercoms",
    desc: "HD video doorbells and two-way audio communication for secure visitor entry.",
    icon: Phone
  },
  {
    title: "Panic & Emergency Alerts",
    desc: "Instant emergency triggers with direct police and medical dispatch capabilities.",
    icon: Bell
  }
];

export default function OurSolutions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Title Fade
    gsap.fromTo(titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 80%" } }
    );

    // Grid Items Fade Stagger
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.children,
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.05, 
          ease: "power3.out", 
          scrollTrigger: { 
            trigger: containerRef.current, 
            start: "top 75%" 
          } 
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full bg-[#030303] text-white py-10 lg:py-16 overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div ref={titleRef} className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-red-600"></span>
            <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-xs">What We Offer</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Our Solutions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A complete ecosystem of security and automation technologies, professionally integrated for your property.
          </p>
        </div>

        {/* Huge Dark Container for Grid (Like Screenshot) */}
        <div className="w-full bg-[#0a0a0a] border border-white/5 rounded-[32px] p-8 md:p-12 lg:p-16 shadow-2xl">
          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {solutions.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-start group">
                  <Icon className="w-7 h-7 text-red-500 mb-5 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.6)] transition-all duration-300" strokeWidth={2} />
                  <h3 className="text-[17px] font-bold text-gray-100 mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400/80 leading-relaxed pr-4">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
