"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    // Fast tracking variables
    let mouseX = 0;
    let mouseY = 0;

    // Use GSAP quickTo for highly performant animations that update frequently
    const xMoveCursor = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3" });
    const yMoveCursor = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3" });
    const xMoveDot = gsap.quickTo(dot, "x", { duration: 0, ease: "none" }); // Instant follow for dot
    const yMoveDot = gsap.quickTo(dot, "y", { duration: 0, ease: "none" });

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Outer circle trails slightly, centered (-16px assuming 32px width)
      xMoveCursor(mouseX - 16);
      yMoveCursor(mouseY - 16);

      // Inner dot follows instantly, centered (-4px assuming 8px width)
      xMoveDot(mouseX - 4);
      yMoveDot(mouseY - 4);
    };

    // Hover effects on links and buttons
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if we are hovering over an interactive element
      const isInteractive = target.closest("a") || target.closest("button") || target.closest(".magnetic");

      if (isInteractive) {
        gsap.to(cursor, {
          scale: 2.5,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderColor: "transparent",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(dot, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
        });
      } else {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "rgba(255, 255, 255, 0.5)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(dot, {
          scale: 1,
          opacity: 1,
          duration: 0.3,
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <>
      {/* Global style to hide default cursor on non-touch devices */}
      <style>{`
        @media (pointer: fine) {
          body, a, button, input, select, textarea {
            cursor: none !important;
          }
        }
      `}</style>
      
      {/* Outer trailing circle */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      ></div>

      {/* Inner instant dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] hidden md:block mix-blend-difference"
      ></div>
    </>
  );
}
