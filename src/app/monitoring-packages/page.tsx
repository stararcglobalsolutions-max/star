"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Shield, Star, Zap } from "lucide-react";

const ajaxPackages = [
  { 
    name: "Core", 
    popular: false, 
    desc: "Essential protection for smaller footprints.",
    price: "₹129,999.00",
    isTableLayout: true,
    equipment: [
      { name: "Hub 4G (8IN)", qty: 1 },
      { name: "D/W Sensor", qty: 3 },
      { name: "Motion Sensor Indoor", qty: 1 },
      { name: "Panic + Control Remote", qty: 1 },
      { name: "Siren Indoor", qty: 1 }
    ],
    details: [
      { label: "Monitoring cost", value: "24 Months" },
      { label: "STARARC", value: "Integration" },
      { label: "Sales", value: "Dealer/RM" },
      { label: "Installation cost", value: "Technician" },
      { label: "Total Quote", value: "Eq + Install." }
    ],
    features: []
  },
  { 
    name: "Prime Custom Package", 
    popular: true, 
    desc: "Advanced security with expanded coverage and smart alerts.",
    price: "₹219,999.00",
    isTableLayout: true,
    equipment: [
      { name: "Hub 4G (8IN)", qty: 1 },
      { name: "Fire + Heat with Sounder", qty: 1 },
      { name: "Yale Safe", qty: 1 },
      { name: "Shock Locker Sensor System", qty: 1 },
      { name: "Siren Outdoor", qty: 1 },
      { name: "D/W Sensor", qty: 3 },
      { name: "Motion Sensor Indoor", qty: 1 },
      { name: "Panic + Control Remote", qty: 1 },
      { name: "Siren Indoor", qty: 1 },
      { name: "Camera", qty: 2 }
    ],
    details: [
      { label: "Total Quote", value: "13" },
      { label: "Monitoring cost", value: "24 Months" },
      { label: "STARARC", value: "Integration" },
      { label: "Sales", value: "Dealer/RM" },
      { label: "Installation cost", value: "Technician" },
      { label: "Total Quote", value: "Eq + Install." }
    ],
    features: []
  },
  { 
    name: "Elite", 
    popular: false, 
    desc: "Comprehensive ecosystem for large properties.", 
    price: "₹319,999.00",
    isTableLayout: true,
    equipment: [
      { name: "Hub 4G (8IN)", qty: 1 },
      { name: "KEYPAD PANEL", qty: 1 },
      { name: "Fire+Heat with sounder", qty: 1 },
      { name: "Yale Safe", qty: 1 },
      { name: "Panic + Control Remote", qty: 1 },
      { name: "Shock Locker Sensor system", qty: 1 },
      { name: "Seiren Outdoor", qty: 1 },
      { name: "D/W Sensor", qty: 3 },
      { name: "Motion Seneor Indoor", qty: 1 },
      { name: "Panic + Control Remote", qty: 1 },
      { name: "Camera", qty: 4 },
      { name: "Seiren Indoor", qty: 1 },
      { name: "Yale Door lock KYRA Pro", qty: 1 }
    ],
    details: [
      { label: "TOTAL EQ", value: "18" },
      { label: "Monitoring cost", value: "24 Months" },
      { label: "STARARC", value: "Integration 10%" },
      { label: "Sales", value: "Delear/RM" },
      { label: "Installation cost", value: "Technician" },
      { label: "Total Quote", value: "Eq + Install." }
    ],
    features: []
  },
  { 
    name: "Prestige", 
    popular: false, 
    desc: "Total integration with automation and maximum security.", 
    price: "₹429,999.00",
    isTableLayout: true,
    equipment: [
      { name: "Hub 4G (8IN)", qty: 1 },
      { name: "Pannel Keypad Plus", qty: 1 },
      { name: "Yale Safe", qty: 1 },
      { name: "Fire+Heat with sounder", qty: 1 },
      { name: "Access TAG", qty: 2 },
      { name: "Shock Locker Sensor system", qty: 1 },
      { name: "Seiren Outdoor", qty: 1 },
      { name: "Motion curtain pro", qty: 1 },
      { name: "D/W Sensor", qty: 5 },
      { name: "Motion Seneor Indoor", qty: 1 },
      { name: "Panic + Control Remote", qty: 1 },
      { name: "Seiren Indoor", qty: 1 },
      { name: "Cameras +dvr", qty: 6 },
      { name: "Yale Door lock KYRA Pro", qty: 1 }
    ],
    details: [
      { label: "Total Quote", value: "24" },
      { label: "Monitoring cost", value: "24 Months" },
      { label: "STARARC", value: "Integration" },
      { label: "Sales", value: "Delear/RM" },
      { label: "Installation cost", value: "Technician" },
      { label: "Total Quote", value: "Eq + Install." }
    ],
    features: []
  },
  { 
    name: "Private", 
    popular: false, 
    desc: "Custom bespoke architecture for highly sensitive environments.", 
    price: "₹899,999.00",
    isTableLayout: true,
    equipment: [
      { name: "Hub 2 4G (8IN)", qty: 1 },
      { name: "Pannel", qty: 1 },
      { name: "Fire+Heat with sounder", qty: 2 },
      { name: "Access TAG", qty: 2 },
      { name: "Shock Locker Sensor system", qty: 1 },
      { name: "Seiren Outdoor", qty: 2 },
      { name: "D/W Sensor", qty: 4 },
      { name: "Motion Cam Indoor (phod)", qty: 2 },
      { name: "Motion Protect Outdoor", qty: 1 },
      { name: "Yale Safe", qty: 1 },
      { name: "Yale Door lock", qty: 1 },
      { name: "Motion Seneor Indoor", qty: 1 },
      { name: "Panic + Control Remote", qty: 1 },
      { name: "Seiren Indoor", qty: 1 },
      { name: "Cameras +dvr", qty: 8 },
      { name: "Outdoor Motion CameraSensored", qty: 1 }
    ],
    details: [
      { label: "Total Quote", value: "30" },
      { label: "Monitoring cost", value: "24 Months" },
      { label: "STARARC", value: "Integration" },
      { label: "Sales", value: "Delear/RM" },
      { label: "Installation cost", value: "Technician" },
      { label: "Total Quote", value: "Eq + Install." }
    ],
    features: []
  },
];

const dahuaPackages = [
  { 
    name: "Core", 
    popular: false, 
    desc: "High-definition essential surveillance.", 
    price: "₹89,998.00",
    isTableLayout: true,
    equipment: [
      { name: "Alarm Hub 2", qty: 1 },
      { name: "D/W Sensor", qty: 1 },
      { name: "Motion Seneor Indoor", qty: 1 },
      { name: "Panic + Control Remote", qty: 1 },
      { name: "D/W Sensor Plus", qty: 1 },
      { name: "Seiren Indoor", qty: 1 }
    ],
    details: [
      { label: "MONOTERING COST", value: "24 Months" },
      { label: "STARARC APP & ONLINE INTG", value: "Integration, Service & Software" },
      { label: "Sales", value: "Delear/RM" },
      { label: "Installation cost", value: "Technician" },
      { label: "Total Quote", value: "Eq + Install." }
    ],
    features: []
  },
  { 
    name: "Prime", 
    popular: false, 
    desc: "Enhanced clarity with night-vision and remote access.", 
    price: "₹139,999.00",
    isTableLayout: true,
    equipment: [
      { name: "Alarm Hub 2", qty: 1 },
      { name: "D/W Sensor", qty: 1 },
      { name: "Motion Sensor Indoor", qty: 1 },
      { name: "Panic + Control Remote", qty: 1 },
      { name: "Shock Locker Sensor system", qty: 1 },
      { name: "Seiren Outdoor", qty: 1 },
      { name: "Fire+Heat with sounder", qty: 1 },
      { name: "Glass break detector", qty: 1 },
      { name: "Maxwell Safe", qty: 1 },
      { name: "D/W Sensor", qty: 2 },
      { name: "Camera", qty: 2 }
    ],
    details: [
      { label: "Total Quote", value: "13" },
      { label: "Monitoring Cost", value: "24 Months" },
      { label: "STARARC", value: "Integration, Service & Software" },
      { label: "Sales", value: "Delear/RM" },
      { label: "Installation cost", value: "Technician" },
      { label: "Total Quote", value: "Eq + Install." }
    ],
    features: []
  },
  { 
    name: "Elite", 
    popular: true, 
    desc: "AI-powered analytics, facial recognition, and active deterrence.", 
    price: "₹189,999.00",
    isTableLayout: true,
    equipment: [
      { name: "Alarm Hub 2", qty: 1 },
      { name: "D/W Sensor", qty: 1 },
      { name: "Motion Seneor Indoor", qty: 1 },
      { name: "Panic + Control Remote", qty: 1 },
      { name: "Maxwell Safe", qty: 1 },
      { name: "Shock Locker Sensor system", qty: 1 },
      { name: "Seiren Outdoor", qty: 1 },
      { name: "D/W Sensor", qty: 4 },
      { name: "Motion Seneor Indoor CAMERA", qty: 1 },
      { name: "Pannel", qty: 1 },
      { name: "Camera", qty: 4 },
      { name: "Fire+Heat with sounder", qty: 1 },
      { name: "Outdoor Motion Sensored", qty: 1 }
    ],
    details: [
      { label: "Total Quote", value: "19" },
      { label: "Monitoring Cost", value: "24 Months" },
      { label: "STARC", value: "Integration, Service & Software" },
      { label: "Sales", value: "Delear/RM" },
      { label: "Installation cost", value: "Technician" },
      { label: "Total Quote", value: "Eq + Install." }
    ],
    features: []
  },
  { 
    name: "Prestige", 
    popular: false, 
    desc: "Enterprise-grade 4K multi-site monitoring systems.", 
    price: "₹289,999.00",
    isTableLayout: true,
    equipment: [
      { name: "Alarm Hub 2", qty: 1 },
      { name: "D/W Sensor", qty: 1 },
      { name: "Motion Seneor Indoor", qty: 1 },
      { name: "Panic + Control Remote", qty: 1 },
      { name: "Pannel", qty: 1 },
      { name: "Fire+Heat with sounder", qty: 1 },
      { name: "Glass breaker detector", qty: 1 },
      { name: "Shock Locker Sensor system", qty: 1 },
      { name: "Siren Indoor (1 IN HUB2)", qty: 1 },
      { name: "D/W Sensor", qty: 4 },
      { name: "Motion Sensor Indoor", qty: 3 },
      { name: "Panic + Control Remote", qty: 1 },
      { name: "Siren Indoor (1 IN HUB2)", qty: 2 },
      { name: "Cameras +DRV", qty: 6 },
      { name: "Outdoor Motion CameraSensored", qty: 1 },
      { name: "Yale safe", qty: 1 },
      { name: "Door Bell intercome", qty: 1 }
    ],
    details: [
      { label: "Total Quote", value: "25" },
      { label: "Monitoring cost", value: "24 Months" },
      { label: "STARARC", value: "Integration, Service & Software" },
      { label: "Sales", value: "Delear/RM" },
      { label: "Installation cost", value: "Technician" },
      { label: "Total Quote", value: "Eq + Install." }
    ],
    features: []
  },
];

export default function MonitoringPackagesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"ajax" | "dahua">("ajax");

  useGSAP(() => {
    // Page load animation
    gsap.fromTo(
      ".hero-text",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }
    );
  }, { scope: containerRef });

  // Animate cards on tab switch
  useGSAP(() => {
    gsap.fromTo(
      ".package-card",
      { y: 30, opacity: 0, scale: 0.98 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.05, ease: "power2.out", clearProps: "all" }
    );
  }, { dependencies: [activeTab], scope: containerRef });

  const activePackages = activeTab === "ajax" ? ajaxPackages : dahuaPackages;

  return (
    <main ref={containerRef} className="relative min-h-screen w-full bg-black text-white font-sans overflow-x-hidden pt-[80px]">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-8 pb-16 lg:pb-24 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <div className="hero-text flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-red-600"></span>
            <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm">Monitoring</span>
            <span className="w-8 h-[2px] bg-red-600"></span>
          </div>
          <h1 className="hero-text text-5xl md:text-7xl font-extrabold tracking-tight mb-6 font-heading">
            Security, <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Reimagined</span>
          </h1>
          <p className="hero-text text-gray-400 text-lg md:text-xl leading-relaxed">
            Enterprise-grade monitoring packages tailored for both Ajax intelligent ecosystems and Dahua surveillance networks.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="hero-text flex justify-center mb-16">
          <div className="bg-white/5 border border-white/10 rounded-full p-1.5 flex gap-2 backdrop-blur-md">
            <button
              onClick={() => setActiveTab("ajax")}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === "ajax" ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]" : "text-gray-400 hover:text-white"
              }`}
            >
              <Shield className="w-4 h-4" />
              StarArc Ajax
            </button>
            <button
              onClick={() => setActiveTab("dahua")}
              className={`px-8 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === "dahua" ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.4)]" : "text-gray-400 hover:text-white"
              }`}
            >
              <Zap className="w-4 h-4" />
              StarArc Dahua
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center relative">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

          {activePackages.map((pkg, idx) => (
            <PackageCard key={`${activeTab}-${pkg.name}`} pkg={pkg} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PackageCard({ pkg }: { pkg: any }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayFeatures = pkg.highlights || pkg.features || [];

  const maxItems = 4;
  const hasMoreEquipment = pkg.equipment && pkg.equipment.length > maxItems;
  const hasMoreFeatures = displayFeatures.length > maxItems;

  const displayedEquipment = isExpanded ? pkg.equipment : pkg.equipment?.slice(0, maxItems);
  const displayedFeatures = isExpanded ? displayFeatures : displayFeatures.slice(0, maxItems);

  return (
    <div 
      className={`package-card group relative w-full h-full rounded-[24px] overflow-hidden p-8 flex flex-col z-10 transition-all duration-500 hover:-translate-y-2
        ${pkg.popular 
          ? 'bg-gradient-to-br from-red-950/40 to-black border border-red-500/50 hover:border-red-500 shadow-[0_0_30px_rgba(220,38,38,0.1)] hover:shadow-[0_0_50px_rgba(220,38,38,0.25)]' 
          : 'bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
        }
      `}
    >
      {/* Background soft glow for popular */}
      {pkg.popular && (
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      )}

      {/* Popular Badge */}
      {pkg.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] py-1.5 px-6 rounded-b-xl flex items-center gap-1.5 shadow-[0_4px_20px_rgba(220,38,38,0.3)]">
          <Star className="w-3 h-3 fill-white" />
          Best Seller
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full">
        <h3 className={`text-2xl font-bold mb-2 tracking-tight ${pkg.popular ? 'text-white mt-4' : 'text-gray-100'}`}>
          {pkg.name}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 h-10">
          {pkg.desc}
        </p>

        <div className="mb-8 flex items-baseline gap-2">
          <span className="text-4xl font-black text-white tracking-tight">{pkg.price}</span>
          {pkg.price !== "Custom" && <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">/ bundle</span>}
        </div>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Content based on layout type */}
        {!pkg.isTableLayout ? (
          <div className="flex flex-col flex-grow mb-8">
            <ul className="flex flex-col gap-4">
              {displayedFeatures.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-3 group/item">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center group-hover/item:bg-red-500/10 transition-colors">
                    <Check className="w-3 h-3 text-red-500" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium leading-relaxed group-hover/item:text-white transition-colors">{feature}</span>
                </li>
              ))}
            </ul>
            {hasMoreFeatures && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="mt-4 text-red-500 text-sm font-bold hover:text-red-400 text-left transition-colors self-start"
              >
                {isExpanded ? "View Less -" : `View More (+${displayFeatures.length - maxItems})`}
              </button>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-0 text-sm w-full flex-grow mb-8">
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_auto] gap-4 py-3 border-b border-white/20 text-gray-500 font-semibold uppercase tracking-wider text-[10px]">
              <div>Equipment</div>
              <div className="text-right">Quantity</div>
            </div>
            
            {/* Equipment Rows */}
            {displayedEquipment?.map((item: any, i: number) => (
              <div key={i} className="grid grid-cols-[1fr_auto] gap-4 py-3 border-b border-white/5 items-center hover:bg-white/[0.02] px-2 -mx-2 rounded transition-colors">
                <div className="text-gray-300 font-medium text-sm">{item.name}</div>
                <div className="text-right text-gray-400 font-medium">{item.qty}</div>
              </div>
            ))}

            {isExpanded && pkg.details && pkg.details.length > 0 && <div className="h-6"></div>}

            {/* Details Rows */}
            {isExpanded && pkg.details?.map((item: any, i: number) => (
              <div key={`detail-${i}`} className="grid grid-cols-[1fr_auto] gap-4 py-3 border-b border-white/5 items-center hover:bg-white/[0.02] px-2 -mx-2 rounded transition-colors">
                <div className="text-gray-400 font-medium text-sm">{item.label}</div>
                <div className="text-right text-white font-semibold text-sm">{item.value}</div>
              </div>
            ))}

            {((pkg.equipment?.length || 0) + (pkg.details?.length || 0) > maxItems) && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)} 
                className="py-3 mt-2 text-red-500 text-sm font-bold hover:text-red-400 text-left transition-colors border-t border-white/5 w-full"
              >
                {isExpanded ? "View Less -" : `View More (+${((pkg.equipment?.length || 0) + (pkg.details?.length || 0)) - maxItems} Items)`}
              </button>
            )}
          </div>
        )}

        {/* Buttons (Fixed to bottom) */}
        <div className="mt-auto flex flex-col gap-4">
          <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg
            ${pkg.popular 
              ? 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/20 hover:shadow-red-500/40 hover:-translate-y-0.5' 
              : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 hover:-translate-y-0.5'
            }
          `}>
            Select Package
          </button>
        </div>
      </div>
    </div>
  );
}
