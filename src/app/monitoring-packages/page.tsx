"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Shield, Star, Zap } from "lucide-react";

const ajaxPackages = [
  { name: "Core", popular: false, desc: "Essential protection for smaller footprints." },
  { name: "Prime", popular: true, desc: "Advanced security with expanded coverage and smart alerts." },
  { name: "Elite", popular: false, desc: "Comprehensive ecosystem for large properties." },
  { name: "Prestige", popular: false, desc: "Total integration with automation and maximum security." },
  { name: "Private", popular: false, desc: "Custom bespoke architecture for highly sensitive environments." },
];

const dahuaPackages = [
  { name: "Core", popular: false, desc: "High-definition essential surveillance." },
  { name: "Prime", popular: false, desc: "Enhanced clarity with night-vision and remote access." },
  { name: "Elite", popular: true, desc: "AI-powered analytics, facial recognition, and active deterrence." },
  { name: "Prestige", popular: false, desc: "Enterprise-grade 4K multi-site monitoring systems." },
];

export default function MonitoringPackagesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"ajax" | "dahua">("ajax");

  useGSAP(() => {
    // Page load animation
    gsap.fromTo(
      ".hero-text",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
  }, { scope: containerRef });

  // Animate cards on tab switch
  useGSAP(() => {
    gsap.fromTo(
      ".package-card",
      { y: 30, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.05, ease: "power2.out", clearProps: "all" }
    );
  }, { dependencies: [activeTab], scope: containerRef });

  const activePackages = activeTab === "ajax" ? ajaxPackages : dahuaPackages;

  return (
    <main ref={containerRef} className="relative min-h-screen w-full bg-black text-white font-sans overflow-x-hidden pt-[80px]">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-8 pb-16 lg:pb-24 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <div className="hero-text flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-red-600"></span>
            <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm">Monitoring</span>
            <span className="w-8 h-[2px] bg-red-600"></span>
          </div>
          <h1 className="hero-text text-5xl md:text-7xl font-extrabold tracking-tight mb-6 font-heading">
            Security, <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Reimagined</span>
          </h1>
          <p className="hero-text text-gray-400 text-lg md:text-xl leading-relaxed">
            Enterprise-grade monitoring packages tailored for both Ajax intelligent ecosystems and Dahua surveillance networks.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="hero-text flex justify-center mb-16">
          <div className="bg-white/5 border border-white/10 rounded-full p-1.5 flex gap-2 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("ajax")}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === "ajax" ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]" : "text-gray-400 hover:text-white"
              }`}
            >
              <Shield className="w-4 h-4" />
              StarArc Ajax
            </button>
            <button
              onClick={() => setActiveTab("dahua")}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === "dahua" ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]" : "text-gray-400 hover:text-white"
              }`}
            >
              <Zap className="w-4 h-4" />
              StarArc Dahua
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center relative">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

          {activePackages.map((pkg, idx) => (
            <div 
              key={`${activeTab}-${pkg.name}`} 
              className={`package-card group relative w-full rounded-[24px] overflow-hidden p-8 flex flex-col z-10 transition-all duration-500 hover:-translate-y-2
                ${pkg.popular 
                  ? 'bg-gradient-to-br from-red-950/40 to-black border-2 border-red-500 shadow-[0_0_30px_rgba(220,38,38,0.15)] hover:shadow-[0_0_50px_rgba(220,38,38,0.3)]' 
                  : 'bg-white/[0.02] border border-white/10 hover:border-white/30'
                }
              `}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-b-lg flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3 fill-white" />
                  Best Seller
                </div>
              )}

              <h3 className={`text-3xl font-extrabold mb-3 font-heading ${pkg.popular ? 'text-white mt-4' : 'text-gray-100'}`}>
                {pkg.name}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {pkg.desc}
              </p>

              <div className="w-full h-[1px] bg-white/10 mb-8"></div>

              <ul className="flex flex-col gap-4 mb-10">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-[15px]">24/7 Professional Monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-[15px]">Instant App Notifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-[15px]">Priority Response Times</span>
                </li>
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2
                ${pkg.popular 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }
              `}>
                Select Package
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
