"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we've already shown the loading screen in this session
    const hasLoaded = sessionStorage.getItem("stararc-loaded");
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    // Lock scroll during loading
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
        sessionStorage.setItem("stararc-loaded", "true");
        document.body.style.overflow = "";
      }
    });

    // Simple animation: fade in logo, scale up slightly, then slide up screen
    tl.fromTo(".loading-logo", 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    )
    .to(".loading-logo", { 
      opacity: 0, 
      scale: 1.1, 
      duration: 0.6, 
      delay: 0.5, 
      ease: "power2.in" 
    })
    .to(".loading-screen", { 
      yPercent: -100, 
      duration: 1, 
      ease: "power4.inOut" 
    }, "-=0.2");

  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading-screen fixed inset-0 z-[99999] bg-[#050505] flex items-center justify-center pointer-events-auto">
      <div className="w-[160px] md:w-[220px] loading-logo opacity-0">
        <img 
          src="/starclogo.png" 
          alt="StarArc" 
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
