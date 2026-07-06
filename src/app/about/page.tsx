"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import { Shield, Eye, Home, Lock, Video, Flame, Headphones, Car, Server, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    // Hero animations
    gsap.fromTo(
      ".hero-anim",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 }
    );

    // Scroll animations for sections
    const sections = gsap.utils.toArray(".fade-up-section");
    sections.forEach((sec: any) => {
      gsap.fromTo(
        sec,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 80%",
          },
        }
      );
    });

  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="relative min-h-screen w-full bg-[#030303] text-white font-sans overflow-x-hidden pt-[60px]">
      <Header />

      <div className="relative z-10 w-full flex flex-col justify-between min-h-screen">
        <div className="flex-grow">
          
          {/* Hero Section */}
          <section className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-8 lg:pt-10 pb-4">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
              <div className="hero-anim flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-red-600"></span>
                <span className="text-red-500 font-medium uppercase tracking-[0.3em] text-xs">Our Story</span>
                <span className="w-12 h-[1px] bg-red-600"></span>
              </div>
              
              <h1 className="hero-anim text-5xl md:text-7xl lg:text-[80px] font-bold leading-[1.1] tracking-tight mb-8">
                Built on Trust. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                  Engineered for Tomorrow.
                </span>
              </h1>
              
              <h3 className="hero-anim text-xl md:text-3xl text-gray-300 font-light mb-4 tracking-wide">
                Canadian Security Standards. Global Vision.
              </h3>
            </div>
          </section>

          {/* Main Story Content - Side by Side Layout */}
          <section className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
              
              <div className="lg:col-span-5 fade-up-section">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Canadian Security Standards. <br/> Global Vision.</h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed">
                  Security is no longer just about alarms or cameras. It is about creating intelligent environments where people, businesses, and communities can operate with confidence.
                </p>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-8 text-lg text-gray-400 font-light leading-relaxed fade-up-section">
                <p>
                  Founded on Canadian security principles and now serving clients across Canada and India, <span className="text-white font-semibold">STARARC Systems</span> delivers premium security infrastructure engineered for residential, commercial, industrial, and government projects.
                </p>
                <p>
                  With more than a decade of industry expertise and over <span className="text-white font-semibold">10,000 security systems delivered</span>, STARARC has built a reputation for combining world-class products with uncompromising installation standards. Our team integrates industry-leading technologies from trusted global manufacturers to create complete security ecosystems tailored to each client's needs.
                </p>
                <div className="p-8 mt-4 rounded-2xl bg-white/[0.03] border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
                  <p className="text-xl text-white font-medium italic">
                    "From luxury residences to commercial facilities, our objective is simple: To protect what matters most."
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Beyond Security - Darker Background */}
          <section className="relative w-full bg-[#080808] py-24 border-y border-white/5">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 fade-up-section">
                <div className="max-w-2xl">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Beyond Security</h2>
                  <p className="text-xl text-gray-400 font-light">
                    Our approach goes beyond supplying equipment. We design, engineer, install, monitor, and maintain complete intelligent security ecosystems that work together as one unified platform.
                  </p>
                </div>
                <button className="flex items-center gap-2 text-red-500 font-bold hover:text-red-400 transition-colors group">
                  Explore Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 fade-up-section">
                {[
                  { name: "Intrusion Detection Systems", icon: Shield },
                  { name: "AI Video Surveillance", icon: Eye },
                  { name: "Smart Home Automation", icon: Home },
                  { name: "Access Control Systems", icon: Lock },
                  { name: "Video Door Communication", icon: Video },
                  { name: "Fire Detection & Life Safety", icon: Flame },
                  { name: "24/7 Professional Monitoring", icon: Headphones },
                  { name: "Smart Parking Infrastructure", icon: Car },
                  { name: "Enterprise Security Integration", icon: Server },
                ].map((feature, idx) => (
                  <div key={idx} className="group p-6 lg:p-8 rounded-2xl bg-[#111] border border-white/5 hover:bg-[#151515] hover:border-white/10 transition-all duration-300 flex items-start gap-5 cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-red-950/20 border border-red-900/30 flex items-center justify-center shrink-0 group-hover:bg-red-600/20 transition-all duration-300">
                      <feature.icon className="w-5 h-5 text-red-500" />
                    </div>
                    <span className="font-semibold text-lg text-gray-300 group-hover:text-white transition-colors mt-2">{feature.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Built for Modern Developments & Why STARARC */}
          <section className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              
              <div className="fade-up-section">
                <div className="mb-6 w-12 h-1 bg-red-600"></div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Built for Modern Developments</h2>
                <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
                  <p className="text-white font-medium text-xl">Today's buildings demand more than standalone security devices. They require integrated infrastructure.</p>
                  <p>STARARC partners with builders, architects, developers, consultants, and government agencies to incorporate intelligent security into projects from the design stage through long-term operation.</p>
                  <p>Whether protecting a luxury residence, a commercial tower, a hospitality project, or an entire township, our solutions are engineered to meet the highest international standards while remaining simple to manage through a unified platform.</p>
                </div>
              </div>

              <div className="fade-up-section">
                <div className="mb-6 w-12 h-1 bg-white/20"></div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Why STARARC</h2>
                <div className="flex flex-col gap-8">
                  {[
                    { title: "Canadian Expertise", desc: "Built on international best practices and professional installation standards." },
                    { title: "Premium Technology", desc: "Working with globally recognised security manufacturers to deliver reliable, future-ready solutions." },
                    { title: "Professional Execution", desc: "Every installation follows strict engineering processes, quality control, and commissioning procedures." },
                    { title: "24/7 Support", desc: "From consultation to monitoring and ongoing service, our commitment continues long after installation." },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-2 h-2 rounded-full bg-red-600 mt-2.5 shrink-0"></div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-400 font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* Team Section */}
          <TeamSection />

          {/* Vision Statement */}
          <section className="relative w-full bg-[#050505] py-24 md:py-32 border-t border-white/5 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                
                <div className="flex-1 fade-up-section w-full">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="w-12 h-[2px] bg-red-600"></span>
                    <span className="text-red-500 font-bold uppercase tracking-[0.3em] text-sm">Our Vision</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold leading-[1.1] tracking-tight mb-8">
                    The Benchmark for <br className="hidden lg:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Premium Security.</span>
                  </h2>
                </div>

                <div className="flex-1 flex flex-col gap-8 fade-up-section bg-[#0a0a0a] border border-white/10 shadow-2xl p-10 lg:p-14 rounded-3xl relative overflow-hidden group w-full">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/10 rounded-bl-[100px] blur-2xl group-hover:bg-red-600/20 transition-all duration-700"></div>
                  
                  <p className="text-2xl md:text-3xl font-medium leading-snug text-white relative z-10">
                    To deliver intelligent systems that combine innovation, reliability, and exceptional customer experience.
                  </p>
                  
                  <div className="w-full h-[1px] bg-white/10 my-2 relative z-10"></div>
                  
                  <p className="text-lg md:text-xl font-light text-gray-400 leading-relaxed relative z-10">
                    We believe security should not only protect—it should inspire confidence, enable smarter living, and create safer communities for generations to come.
                  </p>
                </div>
                
              </div>
            </div>
          </section>

        </div>
        <Footer />
      </div>
    </main>
  );
}
