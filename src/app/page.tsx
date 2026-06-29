"use client";

import { useState, useEffect, useRef } from "react";
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
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);

  // Wait for the video to finish naturally, but have a 10 second safety fallback
  useEffect(() => {
    const fallback = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => clearTimeout(fallback);
  }, []);

  // GSAP animation to reveal home page
  useGSAP(() => {
    if (!loading && preloaderRef.current) {
      // Slide the preloader up to reveal content underneath, cinematic style
      gsap.to(preloaderRef.current, {
        yPercent: -100,
        duration: 1.5,
        ease: "power4.inOut",
        onComplete: () => {
          // completely remove from view
          if (preloaderRef.current) {
            preloaderRef.current.style.display = "none";
          }
        }
      });

      // Animate main content in
      gsap.fromTo(".hero-content",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.8, stagger: 0.2, 
          onComplete: () => {
            // Force GSAP to recalculate page height after preloader disappears
            ScrollTrigger.refresh();
          } 
        }
      );
      
      // Additional safety refresh after a short delay to account for video/image loading
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 2000);
    }
  }, [loading]);

  return (
    <main className="relative min-h-screen w-full bg-black text-white overflow-x-clip">

      {/* 
        PRELOADER (Video Only)
        This covers the entire screen and slides away when loading=false 
      */}
      <div
        ref={preloaderRef}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
      >
        <div className="relative flex items-center justify-center overflow-hidden w-full h-full">
          <video
            autoPlay
            muted
            playsInline
            onEnded={() => setLoading(false)}
            onError={() => setLoading(false)}
            className="absolute inset-0 w-full h-full object-contain md:object-cover opacity-100"
          >
            <source src="https://res.cloudinary.com/dsizhtxet/video/upload/v1782584273/STARARC_logo_reveal_cinematic_202606272300_vd1uhm.mp4" type="video/mp4" />
          </video>

          {/* Subtle Overlays to blend edges */}
          <div className="absolute -bottom-[5%] -right-[5%] w-[30%] h-[30%] md:w-[400px] md:h-[400px] bg-black blur-3xl rounded-full z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[15%] h-[15%] md:w-[200px] md:h-[200px] bg-black blur-xl rounded-tl-full z-10 pointer-events-none opacity-90"></div>
        </div>
      </div>

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
