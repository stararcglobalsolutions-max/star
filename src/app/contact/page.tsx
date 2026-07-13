"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      ".hero-anim",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.2 }
    );

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
          <section className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 lg:pt-20 pb-12">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
              <div className="hero-anim flex items-center gap-4 mb-8">
                <span className="w-12 h-[1px] bg-red-600"></span>
                <span className="text-red-500 font-medium uppercase tracking-[0.3em] text-xs">Get In Touch</span>
                <span className="w-12 h-[1px] bg-red-600"></span>
              </div>
              
              <h1 className="hero-anim text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
                Let's discuss your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                  security needs.
                </span>
              </h1>
              
              <p className="hero-anim text-xl text-gray-400 font-light max-w-2xl mx-auto">
                Whether you're looking for premium security solutions for your home or enterprise-grade systems for commercial properties, our experts are ready to help.
              </p>
            </div>
          </section>

          {/* Contact Info & Form Section */}
          <section className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto">
              
              {/* Left: Contact Info */}
              <div className="fade-up-section flex flex-col gap-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Information</h2>
                  <p className="text-gray-400 text-lg font-light mb-10 leading-relaxed">
                    Connect with STARARC Systems to schedule a consultation, request a quote, or learn more about our intelligent security ecosystems.
                  </p>
                </div>

                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-red-500/50 group-hover:bg-red-950/20 transition-all duration-300">
                      <Phone className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-medium">Phone</h4>
                      <p className="text-xl font-medium text-white hover:text-red-400 transition-colors cursor-pointer">+1 (800) 123-4567</p>
                      <p className="text-xl font-medium text-white hover:text-red-400 transition-colors cursor-pointer">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-red-500/50 group-hover:bg-red-950/20 transition-all duration-300">
                      <Mail className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-medium">Email</h4>
                      <p className="text-xl font-medium text-white hover:text-red-400 transition-colors cursor-pointer">info@stararcsystems.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-red-500/50 group-hover:bg-red-950/20 transition-all duration-300">
                      <MapPin className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-2 font-medium">Headquarters</h4>
                      <p className="text-xl font-medium text-white leading-relaxed max-w-xs">
                        123 Security Avenue,<br />
                        Suite 400, Tech District,<br />
                        Toronto, ON, Canada M1M 1M1
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Contact Form */}
              <div className="fade-up-section bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[80px] pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold mb-8 relative z-10">Send us a message</h3>
                
                <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-gray-400 font-medium ml-1">First Name</label>
                      <input type="text" placeholder="John" className="bg-[#111] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-red-500/50 focus:bg-[#151515] transition-all text-white placeholder:text-gray-600" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm text-gray-400 font-medium ml-1">Last Name</label>
                      <input type="text" placeholder="Doe" className="bg-[#111] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-red-500/50 focus:bg-[#151515] transition-all text-white placeholder:text-gray-600" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium ml-1">Email Address</label>
                    <input type="email" placeholder="john@company.com" className="bg-[#111] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-red-500/50 focus:bg-[#151515] transition-all text-white placeholder:text-gray-600" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium ml-1">Phone Number (Optional)</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="bg-[#111] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-red-500/50 focus:bg-[#151515] transition-all text-white placeholder:text-gray-600" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm text-gray-400 font-medium ml-1">Message</label>
                    <textarea rows={4} placeholder="How can we help you?" className="bg-[#111] border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-red-500/50 focus:bg-[#151515] transition-all text-white placeholder:text-gray-600 resize-none"></textarea>
                  </div>

                  <button type="submit" className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 group">
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>

            </div>
          </section>

        </div>
        <Footer />
      </div>
    </main>
  );
}
