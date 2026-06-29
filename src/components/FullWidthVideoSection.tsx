import React from "react";

export default function FullWidthVideoSection() {
  return (
    <section className="relative w-full bg-[#020202]">
      {/* 
        Full width video container. 
        Using w-full and h-auto ensures it scales perfectly across all devices 
        without cropping the edges.
      */}
      <div className="relative w-full">
        <video
          src="/STARARC_Smart_Security_Luxury_Homes_202606271838.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block"
        />
        
        {/* Cinematic gradient at the bottom to blend smoothly into the footer or next section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
