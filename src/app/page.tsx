"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
import HeroScrollAnimation from "@/components/HeroScrollAnimation";
import ShowcaseSection from "@/components/ShowcaseSection";
import SolutionOverview from "@/components/SolutionOverview";
import PartnerCTASection from "@/components/PartnerCTASection";
import Footer from "@/components/Footer";

export default function Home() {

  // GSAP animation to reveal home page
  useGSAP(() => {
    // Animate main content in
    gsap.fromTo(".hero-content",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.2, stagger: 0.2, 
        onComplete: () => {
          // Force GSAP to recalculate page height
          ScrollTrigger.refresh();
        } 
      }
    );
    
    // Additional safety refresh after a short delay to account for video/image loading
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 2000);
  });

  return (
    <main className="relative min-h-screen w-full bg-black text-white overflow-x-clip">

      {/* HEADER */}
      <Header />

      {/* 
        MAIN WEBSITE CONTENT 
        Revealed after the preloader slides away
      */}
      <div className="relative z-10 w-full">
        <HeroScrollAnimation />
        <ShowcaseSection />
        <SolutionOverview />
        <PartnerCTASection />
        
        {/* High-End Stylish Footer */}
        <Footer />
      </div>

    </main>
  );
}
