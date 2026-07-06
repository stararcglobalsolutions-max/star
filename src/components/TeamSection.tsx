"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const teamMembers = [
  {
    name: "ARUN P.S. THAKUR",
    image: "https://res.cloudinary.com/dsizhtxet/image/upload/v1782975997/stararc_products/ixoawycujmtayeqe2cvl.png",
    title: "Founder & President - STARARC GROUP OF COMPANIES",
    credentials: "(MBA, BBA, ADBM - British Columbia Institute of Technology - Canada)",
    subtitle: "Managing Director - STARARC GLOBAL PVT LTD. (India) & STARARC GLOBAL SOLUTION LTD. (CANADA)",
    description: "An accomplished entrepreneur and business strategist with over 11 years of experience in Banking, security systems, alarm technologies, and operations leadership. He also brings over 7 years of experience in MNC banking, where he mastered corporate finance, project execution, and client relations. At Stararc Global Solutions Ltd., he leads the company's security division — specialising in advanced intrusion detection, CCTV surveillance, access control, fire alarm systems, and 24/7 remote monitoring solutions. Arun's vision drives Stararc's success in delivering end-to-end security infrastructure for commercial, industrial, and residential properties across Canada and India."
  },
  {
    name: "AMAN THAKUR",
    image: "https://res.cloudinary.com/dsizhtxet/image/upload/v1782975997/stararc_products/kgzfctydbzp8ft0kxtkd.png",
    title: "Chief Marketing Officer & National Dealership Head",
    credentials: "(MIB - University of Auckland - New Zealand)",
    description: "With over 16 years of experience in security systems and alarm technologies, Aman leads Stararc's marketing and national dealership operations. He specialises in intrusion detection systems, CCTV surveillance networks, access control solutions, fire alarm systems, and 24/7 remote monitoring infrastructure. His strategic approach to market expansion and dealer partnerships has positioned Stararc as a trusted name in end-to-end security solutions across Canada and India. Aman's deep product knowledge and client-first mindset ensure every security installation meets the highest industry standards."
  },
  {
    name: "ANUBHAV SAINI",
    image: "https://res.cloudinary.com/dsizhtxet/image/upload/v1782975997/stararc_products/tmoh4dalyg6wo69oxdut.png",
    title: "Chief Operating Officer",
    credentials: "(BIB - Langara - CANADA)",
    description: "With over 4 years of experience in security systems and alarm technologies, Anubhav leads Stararc's operational execution and client delivery. He specialises in intrusion detection systems, CCTV surveillance networks, access control solutions, fire alarm systems, and 24/7 remote monitoring infrastructure. His transparent communication and solution-oriented approach foster trust and long-term relationships. Anubhav ensures every security installation meets the highest industry standards while delivering unmatched service excellence across Canada and India."
  },
  {
    name: "PRADEEP MAITHANI",
    image: "https://res.cloudinary.com/dsizhtxet/image/upload/v1782975997/stararc_products/iwhvtmzishvfdkr7mk8m.png",
    title: "Chief Financial Officer & CIO",
    credentials: "(MBA, BBA, CFP, CFA I - USA)",
    subtitle: "Former Portfolio Management Head - ICICI Prudential | Axis Bank | ICICI Bank",
    description: "With over 15 years of leadership in corporate finance and portfolio management at ICICI Bank, Axis Bank, and ICICI Prudential, Pradeep brings unmatched financial acumen to Stararc's security division. He connects banking-grade risk management with top-tier surveillance infrastructure, helping Stararc stand out at premier security systems and security technology expos and surveillance industry conferences. His expertise in capital allocation, investor relations, and strategic financial planning fuels the company's growth in advanced security solutions across India."
  }
];

export default function TeamSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    tl.fromTo(".team-header", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(".team-card", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full bg-[#050505] py-12 md:py-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center gap-4 mb-6 team-header">
          <div className="w-10 h-[2px] bg-red-600"></div>
          <p className="font-bold text-xs tracking-widest text-red-500 uppercase">Leadership</p>
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-16 team-header font-heading">
          Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="group team-card bg-white/[0.02] border border-white/10 shadow-xl p-8 md:p-10 rounded-[24px] hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] transition-all duration-500 hover:-translate-y-1">
              {member.image && (
                <div className="mb-6 relative inline-block">
                  <div className="absolute inset-0 bg-red-600/20 rounded-full blur-md"></div>
                  <img src={member.image} alt={member.name} className="relative w-28 h-28 rounded-full object-cover border-2 border-red-500/40 shadow-[0_0_20px_rgba(220,38,38,0.15)] transition-all duration-500 group-hover:border-red-500 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]" />
                </div>
              )}
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 font-heading">{member.name}</h3>
              <p className="text-red-500 font-bold mb-1 text-sm md:text-base">{member.title}</p>
              
              {member.subtitle && (
                <p className="text-gray-400 text-xs md:text-sm mb-1">{member.subtitle}</p>
              )}
              
              <p className="text-xs text-gray-500 mb-6 font-medium">{member.credentials}</p>
              
              <div className="w-full h-[1px] bg-white/10 my-6"></div>
              
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
