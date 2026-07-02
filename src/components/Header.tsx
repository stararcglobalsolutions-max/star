"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight, Menu, ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export const navItems = [
  {
    label: "Products",
    dropdown: true,
    columns: [
      {
        sections: [
          {
            title: "Intrusion protection",
            links: ["Superior", "Baseline"]
          },
          {
            title: "Video surveillance",
            links: ["Superior", "Baseline"]
          },
          {
            title: "Fire and life safety",
            links: ["EN54 Line", "Residence Line"]
          },
          {
            title: "Comfort and automation",
            links: []
          }
        ]
      },
      {
        sections: [
          {
            title: "Services",
            links: ["System integrations", "StarArc Ready products"]
          }
        ]
      },
      {
        sections: [
          {
            title: "Software",
            links: [
              "StarArc Security System",
              "StarArc PRO: Tool for Engineers",
              "StarArc Desktop",
              "StarArc PRO Desktop",
              "StarArc TV",
              "StarArc Translator PRO",
              "StarArc Cloud Signaling",
              "StarArc Media Player",
              "Scenarios"
            ]
          },
          {
            title: "Communication technologies",
            isSmall: true,
            links: ["Fibra wired protocol", "StarArc radio protocols"]
          }
        ]
      }
    ],
    footerLink: "View all products"
  },
  {
    label: "Solutions",
    dropdown: true,
    columns: [
      {
        sections: [
          {
            title: "By application",
            isSmall: true,
            links: [
              "Commercial fire detection and alarm system",
              "Wireless Grade 3 solution",
              "Video surveillance solution",
              "Integration with Yale smart locks"
            ]
          },
          {
            title: "Residential",
            isSmall: true,
            links: ["Apartments", "Private houses", "Vacant property"]
          },
          {
            title: "Commercial",
            isSmall: true,
            links: ["Restaurants and cafes", "Offices", "Retail stores"]
          }
        ]
      },
      {
        sections: [
          {
            title: "Industrial",
            isSmall: true,
            links: ["Warehouses and industrial complexes", "Remote sites"]
          },
          {
            title: "Municipal",
            isSmall: true,
            links: ["Museums and cultural sites", "Educational institutions"]
          },
          {
            title: "Transport",
            isSmall: true,
            links: ["Vehicles"]
          }
        ]
      },
      {
        sections: [
          {
            title: "",
            isLargeLinks: true,
            links: ["Customer stories", "Upgrades and retrofits"]
          }
        ]
      }
    ]
  },

  {
    label: "Company",
    dropdown: true,
    columns: [
      {
        sections: [
          {
            title: "",
            isLargeLinks: true,
            links: ["About us", "Press page", "Events", "Career", "StarArc Next"]
          }
        ]
      },
      {
        sections: [
          {
            title: "Reviews and feedback",
            isSmall: false,
            links: [
              "Text reviews",
              "Video reviews",
              "Articles on StarArc Systems",
              "Articles on Air Alert app"
            ]
          }
        ]
      }
    ]
  },
  { label: "About us", dropdown: false, href: "/about" },
  { label: "Shop", dropdown: false, href: "/shop" },
  { label: "For partners", dropdown: false },
  { label: "Purchase Now", dropdown: false },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Detect light theme based on path
  const isLight = pathname === '/about';

  useEffect(() => {
    // Subtle entry animation for the header
    gsap.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 1.5 }
    );
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (e: React.MouseEvent, item: any) => {
    if (item.dropdown) {
      e.preventDefault();
      setActiveDropdown(prev => (prev === item.label ? null : item.label));
    }
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 pt-4 pb-3 md:pt-6 md:pb-3 pointer-events-none group/header"
    >
      <div className="w-full flex items-center justify-between relative z-50">
        <div className="flex items-center gap-3 cursor-pointer group pointer-events-auto">
          <div className="w-[120px] md:w-[140px] h-auto group-hover:scale-105 transition-transform duration-500 ease-out">
            <img
              src={isLight ? "/starclogo22.jpeg" : "/starclogo.png"}
              alt="StarArc Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        {/* Navigation (Floating Island) */}
        <nav className={`
          hidden lg:flex items-center gap-1 p-1 rounded-full pointer-events-auto transition-all duration-300
          ${isLight 
            ? 'bg-white/80 backdrop-blur-xl border border-black/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)]' 
            : 'bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
          }
        `}>
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              <a
                href={item.href || "#"}
                onClick={(e) => handleNavClick(e, item)}
                className={`
                  relative px-4 py-2.5 rounded-full text-[15px] font-semibold transition-all duration-300 ease-out flex items-center gap-1.5
                  ${activeDropdown === item.label 
                    ? (isLight ? 'text-black bg-black/5' : 'text-white bg-white/10') 
                    : (isLight ? 'text-gray-600 hover:text-black hover:bg-black/5' : 'text-gray-300 hover:text-white hover:bg-white/5')
                  }
                `}
              >
                <span className="relative z-10">{item.label}</span>
                {item.dropdown && (
                  <ChevronDown
                    size={12}
                    className={`relative z-10 opacity-70 group-hover:opacity-100 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                  />
                )}
              </a>
            </div>
          ))}
        </nav>

        {/* Right Action */}
        <div className="flex items-center gap-4 pointer-events-auto">
          <button className={`
            group flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[15px] font-bold transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap
            ${isLight 
              ? 'bg-black text-white hover:bg-gray-800 shadow-[0_4px_20px_rgba(0,0,0,0.15)]' 
              : 'bg-white text-black hover:bg-gray-100 shadow-[0_4px_20px_rgba(255,255,255,0.25)]'
            }
          `}>
            Start Project
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>

          {/* Mobile Menu Icon */}
          <button className={`lg:hidden p-2 hover:bg-black/5 rounded-full transition-colors ${isLight ? 'text-black' : 'text-white'}`}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <div
        className={`
          hidden lg:block absolute top-[60px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[1050px] rounded-3xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-auto
          ${isLight 
            ? 'bg-white/95 border border-black/10 shadow-[0_40px_80px_rgba(0,0,0,0.12)]' 
            : 'bg-[#111111]/95 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)]'
          }
          ${activeDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}
        `}
      >
        <div className="p-8 xl:p-10 relative max-h-[75vh] overflow-y-auto custom-scrollbar">
          {navItems.map((item) => (
            item.label === activeDropdown && item.columns && item.columns.length > 0 && (
              <div
                key={`mega-${item.label}`}
                className="animate-in fade-in slide-in-from-bottom-2 duration-300"
              >
                <div className="flex flex-col justify-between h-full">

                  <div className="grid grid-cols-3 gap-8 xl:gap-10">
                    {item.columns.map((col, colIdx) => (
                      <div
                        key={colIdx}
                        className={`flex flex-col gap-6 xl:gap-8 ${colIdx > 0 ? (isLight ? 'border-l border-black/10 pl-8 xl:pl-10' : 'border-l border-white/10 pl-8 xl:pl-10') : ''}`}
                      >
                        {col.sections.map((sec: any, secIdx: number) => (
                          <div key={secIdx} className="flex flex-col">
                            {sec.title && (
                              sec.links.length === 0 ? (
                                <a href="#" className={`block font-bold mb-3 transition-colors ${sec.isSmall ? 'text-[11px] text-gray-400 uppercase tracking-wider font-normal' : 'text-[16px]'} ${isLight ? 'text-black hover:text-blue-600' : 'text-white hover:text-[#e60000]'}`}>
                                  {sec.title}
                                </a>
                              ) : (
                                <h4 className={`font-bold mb-3 ${sec.isSmall ? 'text-[11px] text-gray-400 uppercase tracking-wider font-normal' : 'text-[16px]'} ${isLight ? 'text-black' : 'text-white'}`}>
                                  {sec.title}
                                </h4>
                              )
                            )}
                            {sec.links.length > 0 && (
                              <ul className={sec.isLargeLinks ? "space-y-[18px]" : "space-y-2"}>
                                {sec.links.map((link: string, lIdx: number) => (
                                  <li key={lIdx} className="group/link">
                                    <a href="#" className={`flex items-center gap-2 transition-colors ${sec.isLargeLinks ? `font-bold text-[16px] ${isLight ? 'text-black hover:text-blue-600' : 'text-white hover:text-[#e60000]'}` : `${isLight ? 'text-gray-600 hover:text-black' : 'text-gray-300 hover:text-white'} text-[13.5px]`}`}>
                                      {link}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Footer Link (e.g. View all products) */}
                  {item.footerLink && (
                    <div className={`mt-8 pt-6 border-t ${isLight ? 'border-black/10' : 'border-white/10'}`}>
                      <a href="#" className={`inline-flex items-center gap-2 font-bold text-[14px] transition-colors group/view ${isLight ? 'text-black hover:text-blue-600' : 'text-white hover:text-[#e60000]'}`}>
                        {item.footerLink}
                        <ArrowRight size={16} className="group-hover/view:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  )}

                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </header>
  );
}
