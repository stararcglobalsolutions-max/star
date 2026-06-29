"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white overflow-x-clip pt-[100px]">
      <Header />
      
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
        <div className="pt-10 flex-grow">
          <AboutSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
