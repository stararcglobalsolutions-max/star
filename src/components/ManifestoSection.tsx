"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const text = "We exist to bridge the gap between imagination and execution. StarArc crafts digital experiences that leave a lasting impact through unparalleled precision, immersive depth, and fearless design.";

export default function ManifestoSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  // Split text into words for the animation
  const words = text.split(" ");

  useGSAP(() => {
    // Animate each word's opacity from 0.1 to 1 as you scroll
    gsap.to(".manifesto-word", {
      color: "#ffffff",
      opacity: 1,
      stagger: 0.1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        end: "bottom 50%",
        scrub: true,
      }
    });

    // Optional: Subtle parallax on the background accent
    gsap.to(".manifesto-accent", {
      y: 200,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative w-full flex flex-col justify-center bg-transparent px-6 md:px-12 py-20 md:py-24 overflow-hidden"
    >
      {/* Background visual accent */}
      <div className="manifesto-accent absolute right-0 top-0 w-[500px] h-[500px] bg-white opacity-[0.02] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto z-10 hidden">
        <h2
          ref={textRef}
          className="text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] font-medium tracking-tighter leading-tight md:leading-[1.05]"
        >
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <span
                className="manifesto-word text-[#222]"
                style={{ opacity: 0.15 }}
              >
                {word}
              </span>
              {" "}
            </React.Fragment>
          ))}
        </h2>

      </div>
    </section>
  );
}
