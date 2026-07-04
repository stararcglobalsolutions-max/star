"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import DashboardFeatureSection from "@/components/DashboardFeatureSection";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#030303] text-white overflow-x-clip pt-[120px]">
      <Header />
      
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-between">
        <div className="flex-grow">
          <AboutSection />
          <TeamSection />
          <DashboardFeatureSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
