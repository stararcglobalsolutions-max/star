"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const frameCount = 300; // Kept for reference but not needed for video

export default function HeroScrollAnimation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is paused so we can scrub it
    video.pause();
    video.currentTime = 0;

    // GSAP ScrollTrigger to animate video scrubbing
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=350%", // Slightly shorter scroll for better feel
        scrub: 0.15, // Snappier scrub for responsive feel
        pin: true,
      }
    });

    // We animate a progress value from 0 to 1
    const state = { progress: 0 };

    tl.to(state, {
      progress: 1,
      ease: "none",
      onUpdate: () => {
        // If the video metadata has loaded and we have a duration
        if (video.duration && Number.isFinite(video.duration)) {
          // Smoothly scrub the video to the current scroll progress
          video.currentTime = state.progress * video.duration;
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-screen w-full relative overflow-hidden bg-black">
      
      {/* 
        ULTIMATE PERFORMANCE OPTIMIZATION: 
        Replaced 300 heavy PNG frames with a single hardware-accelerated video stream.
        This drops LCP to near-zero and completely eliminates network hanging.
        The scale-[1.15] ensures the edges/watermarks are cropped identically to the old canvas.
      */}
      <video
        ref={videoRef}
        src="/hero-video.mp4.mp4"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-contain md:object-cover z-0 scale-[1.15]"
      />

      {/* Cinematic Black Shadow Overlays */}
      {/* Top and Bottom gradients for text readability */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-black/80 via-transparent to-transparent opacity-70"></div>

      {/* Edge vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,1)]"></div>

      {/* Deep corner shadow specifically for watermark area */}
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-black blur-2xl z-0 pointer-events-none rounded-tl-full opacity-100"></div>

      {/* Hero Text Content */}
      <div className="hero-content absolute top-[22vh] md:top-40 left-6 md:left-12 z-20 flex flex-col items-start pointer-events-auto">
        <h1 className="text-[2.5rem] md:text-[4rem] font-bold tracking-tighter leading-[0.9] text-white drop-shadow-xl">
          Designed to <br />
          <span className="text-[#a0a0a0]">mean intention</span>
        </h1>

        <div className="mt-10 md:mt-12">
          <a
            href="/contact"
            className="group relative flex w-64 cursor-pointer items-center justify-between overflow-hidden pb-3 text-sm font-mono tracking-widest text-[#D8D8D8]"
          >
            {/* Animated Bottom Line */}
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-500/50"></span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#D8D8D8] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"></span>

            <span className="relative z-10">START A PROJECT</span>

            {/* Animated Arrow Container */}
            <span className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
              <span className="absolute group-hover:translate-x-full group-hover:opacity-0 transition-all duration-300 ease-in-out">
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-[#D8D8D8]">
                  <path d="M5.47372 8.652V6.552L8.32972 3.752V4.9L5.47372 2.1V-3.09944e-06L9.32372 3.836V4.816L5.47372 8.652ZM-0.000281237 5.11V3.542H8.60972V5.11H-0.000281237Z" fill="currentColor"></path>
                </svg>
              </span>
              <span className="absolute -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out delay-75">
                <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-[#D8D8D8]">
                  <path d="M5.47372 8.652V6.552L8.32972 3.752V4.9L5.47372 2.1V-3.09944e-06L9.32372 3.836V4.816L5.47372 8.652ZM-0.000281237 5.11V3.542H8.60972V5.11H-0.000281237Z" fill="currentColor"></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>

      {/* Bottom Center Prompt */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center pointer-events-auto mix-blend-difference text-[0.65rem] font-mono tracking-widest text-gray-300 text-center uppercase">
        <p className="mb-1">Hold to <span className="text-red-500 mx-1 text-[0.8rem]">💥</span> Blast</p>
        <p>Dare <span className="text-orange-500 mx-1 text-[0.8rem]">⚡</span> to touch the lines.</p>
      </div>

      {/* Bottom Right Info */}
      <div className="absolute bottom-6 left-6 md:left-auto md:bottom-8 md:right-12 z-20 flex flex-col items-start pointer-events-auto mix-blend-difference scale-90 md:scale-100 origin-bottom-left md:origin-bottom-right">
        <div className="flex border border-gray-600/60 rounded-sm mb-4">
          <div className="flex flex-col items-center justify-center p-2.5 md:p-3 border-r border-gray-600/60 w-20 md:w-24">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-4 h-4 md:w-5 md:h-5 mb-1.5 text-gray-300">
              <circle cx="12" cy="12" r="10"></circle>
              <ellipse cx="12" cy="12" rx="4" ry="10"></ellipse>
              <path d="M2 12h20"></path>
            </svg>
            <span className="text-[0.5rem] md:text-[0.55rem] tracking-widest font-mono text-gray-400">EST. 2012</span>
          </div>
          <div className="flex items-center justify-center p-2.5 md:p-3 w-32 md:w-36">
            <p className="text-[0.5rem] md:text-[0.55rem] font-mono tracking-widest leading-[1.4] text-gray-300 uppercase">
              14+ YEARS SHAPING <br /> DIGITAL DIRECTION.
            </p>
          </div>
        </div>
        <p className="text-[0.65rem] md:text-xs text-gray-300 leading-[1.6] font-light text-left pl-1 max-w-[220px] md:max-w-none">
          Websites, AI products, brands,<br /> and systems built for clarity,<br /> scale and impact.
        </p>
      </div>
    </div>
  );
}
