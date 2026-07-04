"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const frameCount = 300;

const currentFrame = (index: number) => {
  const clampedIndex = Math.min(Math.max(1, index), frameCount);
  const paddedIndex = clampedIndex.toString().padStart(3, '0');
  return `/ezgif-774cadbbbbc65ee4-png-split/ezgif-frame-${paddedIndex}.png`;
};

export default function HeroScrollAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Lower internal resolution for the canvas to dramatically improve performance
    canvas.width = 1280;
    canvas.height = 720;

    // Preload images progressively to prevent flickering and freezing
    const images: (HTMLImageElement | null)[] = new Array(frameCount).fill(null);

    // Create an object to hold the current frame index for GSAP to animate
    const airpods = { frame: 1 };
    let lastRenderedFrame = -1;

    // Function to draw the current frame onto the canvas
    function render() {
      if (!context || !canvas) return;

      let frameToDraw = Math.floor(airpods.frame) - 1;

      // Fallback to the nearest loaded frame if current isn't loaded
      while (frameToDraw >= 0 && (!images[frameToDraw] || !images[frameToDraw]?.complete)) {
        frameToDraw--;
      }

      // Skip render if it's the exact same frame we just drew (huge performance boost)
      if (frameToDraw >= 0 && frameToDraw !== lastRenderedFrame) {
        lastRenderedFrame = frameToDraw;
        const img = images[frameToDraw]!;
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate scale to cover canvas (object-cover equivalent)
        // Add a 1.15 multiplier to zoom in slightly and crop out the watermark at the edges
        const scaleFactor = 1.15;
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio) * scaleFactor;
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        context.drawImage(
          img,
          0, 0, img.width, img.height,
          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
      }
    }

    const CONCURRENCY = 8; // Increased concurrency for faster live server loading

    const loadImage = (index: number, retries = 3) => {
      if (images[index - 1] && images[index - 1]?.complete) return; 
      
      const img = new Image();
      img.decoding = "async";
      
      // Prioritize early frames for instant scroll feel, low priority for later to avoid blocking
      (img as any).fetchPriority = index <= 15 ? "high" : "low";
      
      img.src = currentFrame(index);
      
      img.onload = () => {
        if (index === 1) render(); 
        // Chain loading: load the next image in this concurrent pipeline
        if (index + CONCURRENCY <= frameCount) {
          loadImage(index + CONCURRENCY);
        }
      };

      img.onerror = () => {
        if (retries > 0) {
          // Retry on failure for robust live-server performance
          setTimeout(() => loadImage(index, retries - 1), 300);
        } else {
          // Skip the failed image but keep the chain alive
          if (index + CONCURRENCY <= frameCount) {
            loadImage(index + CONCURRENCY);
          }
        }
      };

      images[index - 1] = img;
    };

    // 1. Eagerly load the first few frames immediately with high priority
    for (let i = 1; i <= Math.min(5, frameCount); i++) {
      loadImage(i);
    }

    // 2. Start the massive background loading much sooner (500ms instead of 1500ms)
    setTimeout(() => {
      // Kick off the remaining chains starting from frame 6
      for (let i = 6; i <= CONCURRENCY + 5; i++) {
        if (i <= frameCount) {
           loadImage(i);
        }
      }
    }, 500);

    // GSAP ScrollTrigger to animate frames
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=350%", // Slightly shorter scroll for better feel
        scrub: 0.15, // Snappier scrub for responsive feel
        pin: true,
      }
    });

    tl.to(airpods, {
      frame: frameCount,
      ease: "none",
      onUpdate: render,
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-screen w-full relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-contain md:object-cover z-0"
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
