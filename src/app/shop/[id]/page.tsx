"use client";

import React, { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { ShopHeader } from '../page';
import Footer from '@/components/Footer';
import { Plus, Minus, ShoppingCart, ShieldCheck, Truck, ChevronDown, Check } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { GlassProtect8inSpecs } from './GlassProtect8inSpecs';
import { MotionProtectPlus8inSpecs } from './MotionProtectPlus8inSpecs';
import { CombiProtect8inSpecs } from './CombiProtect8inSpecs';
import { MotionProtect8inSpecs } from './MotionProtect8inSpecs';
import { MotionCam8inSpecs } from './MotionCam8inSpecs';
import { MotionCamPhod8inSpecs } from './MotionCamPhod8inSpecs';

export default function SingleProductPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const cartItem = {
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      color: selectedColor
    };

    const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    existingCart.push(cartItem);
    localStorage.setItem('cartItems', JSON.stringify(existingCart));

    // Dispatch event so Header can update
    window.dispatchEvent(new Event('cartUpdated'));

    setIsAdded(true);
  };

  useEffect(() => {
    fetch(`/api/products/${unwrappedParams.id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        if (data.colors && data.colors.length > 0) {
          setSelectedColor(data.colors[0]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [unwrappedParams.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <ShopHeader />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <ShopHeader />
        <div className="flex-1 flex items-center justify-center text-xl font-medium text-slate-500">
          Product not found
        </div>
        <Footer />
      </div>
    );
  }

  const oldPrice = Math.round(product.price * 1.25);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ShopHeader />

      <main className="max-w-7xl mx-auto px-6 pt-4 lg:pt-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left: Image */}
          <div className="aspect-square relative flex items-center justify-center p-6 lg:p-10">
            {product.image ? (
              <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
            ) : (
              <div className="text-slate-400">No Image Available</div>
            )}
          </div>

          {/* Right: Details */}
          <div className="flex flex-col lg:pt-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#0f2b4c] mb-4 tracking-tight">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl text-[#94a3b8] line-through font-medium">₹{oldPrice.toFixed(2)}</span>
              <span className="text-2xl text-[#ef233c] font-bold">₹{Number(product.price).toFixed(2)}</span>
            </div>

            {product.description && (
              <p className="text-[#64748b] text-base leading-relaxed mb-8">
                {product.description}
              </p>
            )}

            {/* Quantity and Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-slate-200 bg-slate-50 w-32 h-14 shrink-0">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex-1 flex justify-center items-center h-full hover:bg-slate-200 transition-colors">
                  <Minus size={18} className="text-slate-600" />
                </button>
                <span className="font-semibold text-slate-800 w-10 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="flex-1 flex justify-center items-center h-full hover:bg-slate-200 transition-colors">
                  <Plus size={18} className="text-slate-600" />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full sm:flex-1 shrink-0 h-14 bg-black text-white font-bold tracking-wide uppercase text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-black/10 hover:shadow-black/20 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                {isAdded ? <Check size={18} /> : <ShoppingCart size={18} />}
                {isAdded ? 'Added!' : 'Add to Cart'}
              </button>

              {isAdded && (
                <Link href="/cart" className="w-full sm:flex-1 shrink-0 h-14 bg-emerald-600 text-white font-bold tracking-wide uppercase text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-emerald-600/20 hover:-translate-y-0.5 hover:bg-emerald-700">
                  View Cart
                </Link>
              )}
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 mt-6 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center gap-3 text-slate-600">
                <Truck className="w-6 h-6 text-slate-400" />
                <span className="text-sm font-medium">Free Shipping</span>
              </div>
              <div className="w-px h-8 bg-slate-200"></div>
              <div className="flex items-center gap-3 text-slate-600">
                <ShieldCheck className="w-6 h-6 text-slate-400" />
                <span className="text-sm font-medium">1 Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </main>



      <HubJewellerSpecs slug={unwrappedParams.id} />
      <Hub28inSpecs slug={unwrappedParams.id} />
      <Hub24G8inSpecs slug={unwrappedParams.id} />
      <Hub2Plus8inSpecs slug={unwrappedParams.id} />
      <Rex8inSpecs slug={unwrappedParams.id} />
      <Rex28inSpecs slug={unwrappedParams.id} />
      <DoorProtect8inSpecs slug={unwrappedParams.id} />
      <DoorProtectPlus8inSpecs slug={unwrappedParams.id} />
      <GlassProtect8inSpecs slug={unwrappedParams.id} />
      <MotionProtect8inSpecs slug={unwrappedParams.id} />
      <MotionProtectPlus8inSpecs slug={unwrappedParams.id} />
      <CombiProtect8inSpecs slug={unwrappedParams.id} />
      <MotionCam8inSpecs slug={unwrappedParams.id} />
      <MotionCamPhod8inSpecs slug={unwrappedParams.id} />

      <Footer />
    </div>
  );
}

export function HubJewellerSpecs({ slug }: { slug: string }) {
  if (slug !== 'hub-8in' && slug !== 'hub-jeweller' && slug !== 'hub-4g-8in') return null;

  const BASE = '/images/products/hub-8in';

  const PAGES = [
    { num: 1, src: `${BASE}/hires_page_1.png` },
    { num: 2, src: `${BASE}/hires_page_2.png` },
    { num: 3, src: `${BASE}/hires_page_3.png` },
    { num: 4, src: `${BASE}/hires_page_4.png` },
  ];

  return (
    <section className="w-full bg-white pb-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-0">
        {PAGES.map((page) => (
          <div key={page.num} className="w-full bg-white">
            <img
              src={page.src}
              alt={`Hub Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}



export function Hub28inSpecs({ slug }: { slug: string }) {
  if (slug !== 'hub2-8in' && slug !== 'hub-2') return null;

  const BASE = '/images/products/hub2-8in';

  const PAGES = [
    { num: 1, src: `${BASE}/hires_page_1.png` },
    { num: 2, src: `${BASE}/hires_page_2.png` },
  ];

  return (
    <section className="w-full bg-white pb-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-0">
        {PAGES.map((page) => (
          <div key={page.num} className="w-full bg-white">
            <img
              src={page.src}
              alt={`Hub 2 Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}



export function Hub24G8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'hub2-4g-8in') return null;

  const BASE = '/images/products/hub2-4g-8in';

  const PAGES = [
    { num: 1, src: `${BASE}/hires_page_1.png` },
    { num: 2, src: `${BASE}/hires_page_2.png` },
    { num: 3, src: `${BASE}/hires_page_3.png` },
    { num: 4, src: `${BASE}/hires_page_4.png` },
    { num: 5, src: `${BASE}/hires_page_5.png` },
  ];

  return (
    <section className="w-full bg-white pb-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-0">
        {PAGES.map((page) => (
          <div key={page.num} className="w-full bg-white">
            <img
              src={page.src}
              alt={`Hub 2 4G Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}


export function Hub2Plus8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'hub2-plus-8in') return null;

  return (
    <section className="w-full bg-white font-sans text-slate-900 border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 xl:px-20 py-16 lg:py-24">
        
        {/* HERO SECTION */}
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 mb-24 items-start">
          <div className="w-full lg:w-[60%] flex flex-col">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h2 className="text-[40px] lg:text-[48px] font-bold leading-tight tracking-tight mb-4 text-[#0f2b4c]">Hub 2 Plus Jeweller</h2>
                <p className="text-[20px] lg:text-[22px] text-slate-500 leading-relaxed max-w-2xl">
                  Security system control panel supporting photo verification. Compatible with all Ajax wireless devices of the Jeweller product line¹.
                </p>
                <div className="mt-8 flex items-center gap-6">
                   <img src="/pdf_images/hub2_plus/img_0_1.png" alt="QR Code" className="w-24 h-24 object-contain shadow-sm border border-slate-100 rounded-lg" />
                   <p className="text-[14px] text-slate-500 max-w-[200px]">Find the detailed information on the device by QR code or at the link: http://ajax.systems/support/devices/hub-2-plus/</p>
                </div>
              </div>
            </div>

            <h3 className="text-[24px] lg:text-[28px] font-bold mb-8 text-[#0f2b4c]">Key features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mb-16">
              {[ 
                "4 communication channels: Ethernet, Wi-Fi, and two SIM cards (2G/3G/4G)",
                "Up to 200 devices",
                "Up to 200 users",
                "Up to 64 scenarios",
                "Free software updates",
                "Remote control and setup via the app",
                "Detectors with photo verification support",
                "Up to 100 cameras or DVRs",
                "Up to 25 security groups",
                "Up to 5 range extenders",
                "Effortless installation and maintenance",
                "Connecting via QR code"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-5">
                  <div className="w-2 h-2 rounded-full bg-[#0f2b4c] mt-2 shrink-0"></div>
                  <p className="text-[16px] leading-snug text-slate-700">{feature}</p>
                </div>
              ))}
            </div>

            <h3 className="text-[24px] lg:text-[28px] font-bold mb-6 text-[#0f2b4c]">Always online</h3>
            <div className="space-y-6 mb-16">
              <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
                To guarantee prompt alarm transmission to the monitoring station and users, Hub 2 Plus can be connected to four Internet providers at a time via Ethernet, Wi-Fi, and two SIM cards (2G, 3G, or LTE). Automatic switching between channels takes seconds.
              </p>
              <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
                Hub 2 Plus reduces the security system dependence on the conditions at the facility. The control panel is equipped with a backup battery, providing up to 15 hours of operation in case of a blackout. The system will report a power-down and a restoration of power to the CMS and all users.
              </p>
            </div>

            <h3 className="text-[24px] lg:text-[28px] font-bold mb-6 text-[#0f2b4c]">Photo verification</h3>
            <div className="space-y-6">
              <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
                To help CMS operators and clients assess the situation in case of alarm, Hub 2 Plus supports MotionCam and MotionCam Outdoor detectors. When triggered, detectors take a series of photos with the reason for alarm. Visual verification reduces unnecessary patrol dispatches and saves the client’s nerves.
              </p>
              <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
                Hub 2 Plus runs up to 200 detectors with photo verification and delivers photos to users and security companies in 9 seconds, even when using SIM cards. Thanks to LTE support.
              </p>
              <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
                The control panel also supports motion detectors with the PhOD feature. Such devices take photos on demand and in the case of alarms.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-end sticky top-24">
            <div className="flex gap-6 mb-12 w-full justify-center lg:justify-end">
              <img src="/pdf_images/badge_grade2.png" alt="Grade 2" className="h-16 lg:h-20 object-contain opacity-90 transition-transform hover:scale-105" />
              <img src="/pdf_images/badge_pd6662.png" alt="PD6662" className="h-16 lg:h-20 object-contain opacity-90 transition-transform hover:scale-105" />
              <img src="/pdf_images/icon_jeweller.png" alt="Jeweller" className="h-16 lg:h-20 object-contain opacity-90 transition-transform hover:scale-105" />
            </div>
            <div className="w-full flex justify-center lg:justify-end">
              <img src="/pdf_images/hub2_plus/img_0_2.jpeg" alt="Hub 2 Plus" className="w-full max-w-[450px] object-contain drop-shadow-xl" />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-slate-200 mb-24"></div>

        {/* MIDDLE SECTION */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto mb-24">
             <h3 className="text-[28px] lg:text-[34px] font-bold mb-8 text-[#0f2b4c]">Guaranteed delivery of alarms and photos</h3>
             <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed mb-12">
               To ensure reliable communications with connected devices, Hub 2 Plus is equipped with four antennas and supports two proprietary radio protocols: Jeweller and Wings. Jeweller is responsible for transmitting commands, events, and alarms, while Wings provides transmission of photos. Ajax two-way radio communication uses frames to synchronize communication with connected devices, authentication to prevent forgery, and encryption to protect transmitted data.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                   <h4 className="text-[24px] font-bold mb-4 text-[#0f2b4c]">Jeweller</h4>
                   <ul className="space-y-4">
                     <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#0f2b4c] mt-2 shrink-0"></div>
                        <span className="text-[16px] text-slate-600">up to 2,000 m Jeweller communication range</span>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#0f2b4c] mt-2 shrink-0"></div>
                        <span className="text-[16px] text-slate-600">0.3 s Alarm delivery</span>
                     </li>
                   </ul>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                   <h4 className="text-[24px] font-bold mb-4 text-[#0f2b4c]">Wings</h4>
                   <ul className="space-y-4">
                     <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#0f2b4c] mt-2 shrink-0"></div>
                        <span className="text-[16px] text-slate-600">up to 1,700 m Wings communication range</span>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-[#0f2b4c] mt-2 shrink-0"></div>
                        <span className="text-[16px] text-slate-600">9 s First photo delivery</span>
                     </li>
                   </ul>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
            <div>
              <h3 className="text-[28px] lg:text-[34px] font-bold mb-8 text-[#0f2b4c]">Protection of large premises</h3>
              <div className="space-y-6">
                <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
                  Business centres, factories, and multi-story villas with outbuildings — Hub 2 Plus is ready to secure even the most complicated properties. This hub can control up to 200 devices and manage 25 security groups with 200 users. This allows security personnel to divide large premises into zones and organize staff access.
                </p>
                <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
                  Hub 2 Plus supports 64 scenarios. It can automatically arm and disarm the entire security system or certain groups by schedule. Using automation devices, Hub 2 Plus can control lights, electric locks, and roller shutters. Scenarios can be activated in response to security mode changes, alarms, or Button commands.
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[28px] lg:text-[34px] font-bold mb-8 text-[#0f2b4c]">Controlled with apps</h3>
              <div className="space-y-6 flex-grow">
                <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
                  We’ve developed two types of applications: for users and for PRO. Users’ apps are designed for monitoring alarms and managing security via smartphone. Apps for PRO are designed to manage system settings via PC or smartphone.
                </p>
                <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
                  All types of Ajax apps connect to a hub using a secure channel with Ajax Cloud — our server solution located at several AWS data centres. All security system settings are always available in the app. Even when PRO is far away from the facility, he can connect CCTV cameras, add users, test radio signal level, create security groups and scenarios, or connect a hub to an alarm monitoring company.
                </p>
              </div>
              <div className="mt-12 flex justify-center">
                 <img src="/pdf_images/hub2_plus/img_2_1.jpeg" alt="App Interface" className="w-full max-w-[280px] drop-shadow-lg rounded-3xl" />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-[28px] lg:text-[34px] font-bold mb-8 text-[#0f2b4c]">Fast connection and installation</h3>
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
              Hub 2 Plus is ready to work right out of the box. It comes with pre-installed communication modules, a power supply unit, and a backup battery. To begin the system set-up, you’ll need to plug the device into a power socket, connect it to the Internet, insert SIM cards, and scan the QR code using the app. Thanks to SmartBracket, installers don’t need to disassemble the control panel to mount it.
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-slate-200 mb-24"></div>

        {/* TECHNICAL SPECIFICATIONS */}
        <div>
          <h3 className="text-[32px] lg:text-[40px] font-bold mb-12 text-center text-[#0f2b4c]">Technical specifications</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 border-t border-slate-200">
            {/* Left Column Table Items */}
            <div className="flex flex-col border-r-0 lg:border-r border-slate-200">
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 pr-0 lg:pr-10 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Compliance with standards</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800">
                  EN 50131 (Grade 2)<br/>
                  PD 6662:2017
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 pr-0 lg:pr-10 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Connected devices</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800">
                  <strong className="text-[#0f2b4c]">up to 200 wireless devices</strong><br/>
                  <span className="text-slate-500 text-sm mt-1 block">Including up to 5 range extenders and up to 10 sirens</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 pr-0 lg:pr-10 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Communication channels with Ajax devices</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800">
                  <strong className="text-[#0f2b4c]">Jeweller communication technology</strong><br/>
                  <strong className="text-[#0f2b4c]">Wings communication technology</strong>
                  
                  <div className="mt-8 space-y-6">
                    <div>
                      <strong className="text-[#0f2b4c] block mb-2">Frequency bands</strong>
                      <div className="text-slate-600 leading-relaxed">
                        866.0–866.5 MHz<br/>
                        868.0–868.6 MHz<br/>
                        868.7–869.2 MHz<br/>
                        905.0–926.5 MHz<br/>
                        915.85–926.5 MHz<br/>
                        921.0–922.0 MHz<br/>
                      </div>
                    </div>
                    <div>
                      <strong className="text-[#0f2b4c] block mb-1">Maximum effective radiated power (ERP)</strong>
                      <span className="text-slate-600">≤25 mW</span>
                    </div>
                    <div>
                      <strong className="text-[#0f2b4c] block mb-1">Jeweller communication range</strong>
                      <span className="text-slate-600">up to 2,000 m</span><br/>
                      <span className="text-slate-500 text-sm">In an open space</span>
                    </div>
                    <div>
                      <strong className="text-[#0f2b4c] block mb-1">Wings communication range</strong>
                      <span className="text-slate-600">up to 1,700 m</span><br/>
                      <span className="text-slate-500 text-sm">In an open space<br/><br/>Depends on the sales region.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-200 lg:border-b-0 py-6 pr-0 lg:pr-10 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">External communication channels</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800 space-y-4">
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Ethernet</strong>
                    <span className="text-slate-600">8P8C slot<br/>Up to 100 Mb/s</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Wi-Fi</strong>
                    <span className="text-slate-600">802.11 b/g/n</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Cellular network</strong>
                    <span className="text-slate-600">2 slots for micro-SIMs<br/>2G (GSM900/DCS1800 (B3/B8))<br/>3G (WCDMA 850/900/2100 (B1/B5/B8))<br/>4G/LTE (FDD B1/B3/B5/B7/B8/B20)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Table Items */}
            <div className="flex flex-col lg:pl-10">
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Connection to CMS</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-600 leading-relaxed">
                  SurGard (Contact ID)<br/>
                  SIA (DC-09)<br/>
                  ADEMCO 685<br/>
                  Other proprietary protocols
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Features</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-600 leading-relaxed">
                  200 users<br/>
                  100 cameras or DVRs<br/>
                  64 automation scenarios<br/>
                  25 security groups
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Power supply</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800 space-y-4">
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Main power supply</strong>
                    <span className="text-slate-600">100–240 V~, 50/60 Hz</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Backup power supply</strong>
                    <span className="text-slate-600">Li-Ion battery with 2 A⋅h capacity</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Enclosure</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800 space-y-4">
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Colour</strong>
                    <span className="text-slate-600">white, black</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Dimensions</strong>
                    <span className="text-slate-600">163 × 163 × 36 mm</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Weight</strong>
                    <span className="text-slate-600">351 g</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Tampering alarm</strong>
                    <span className="text-slate-600">Yes</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Installation</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800 space-y-4">
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Operating temperature range</strong>
                    <span className="text-slate-600">from -10°С to +40°С</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Operating humidity</strong>
                    <span className="text-slate-600">up to 75%</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Protection class</strong>
                    <span className="text-slate-600">IP20</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row py-6 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Complete set</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-600 leading-relaxed">
                  Hub 2 Plus Jeweller<br/>
                  Power cable<br/>
                  Ethernet cable<br/>
                  SIM card<br/>
                  <span className="text-slate-500 text-sm block my-1">Depends on the region of sale</span>
                  Installation kit<br/>
                  Quick Start Guide
                </div>
              </div>
            </div>
          </div>
          <p className="text-[14px] text-slate-400 mt-12 text-center">
            ¹ The hub cannot be connected to another hub. uartBridge or ocBridge Plus cannot be connected to the Ajax hubs.
          </p>
        </div>
      </div>
    </section>
  );
}



export function Rex8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'rex-8in') return null;

  return (
    <section className="w-full bg-white font-sans text-slate-900 border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 xl:px-20 py-16 lg:py-24">
        
        {/* HERO SECTION */}
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 mb-24 items-start">
          <div className="w-full lg:w-[60%] flex flex-col">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h2 className="text-[40px] lg:text-[48px] font-bold leading-tight tracking-tight mb-4 text-[#0f2b4c]">ReX</h2>
                <p className="text-[20px] lg:text-[22px] text-slate-500 leading-relaxed max-w-2xl">
                  Radio signal range extender boosting the range of Ajax security system devices that uses Jeweller communication protocol. An Ajax hub is required for operation.
                </p>
                <div className="mt-8 flex items-center gap-6">
                   <img src="/pdf_images/rex/img_0_1.png" alt="QR Code" className="w-24 h-24 object-contain shadow-sm border border-slate-100 rounded-lg" />
                   <p className="text-[14px] text-slate-500 max-w-[200px]">Find the detailed information on the device by the link: http://ajax.systems/support/devices/rex</p>
                </div>
              </div>
            </div>

            <h3 className="text-[24px] lg:text-[28px] font-bold mb-8 text-[#0f2b4c]">Key features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mb-16">
              {[ 
                "Frequency hopping against jamming",
                "Up to 35 hours on the back-up battery in case of external power loss",
                "Fast connection with security system via QR code",
                "Tampering alarm for lid protection",
                "Over-the-air updates",
                "Remote control and setup via an Ajax apps"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-5">
                  <div className="w-2 h-2 rounded-full bg-[#0f2b4c] mt-2 shrink-0"></div>
                  <p className="text-[16px] leading-snug text-slate-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-end sticky top-24">
            <div className="flex gap-6 mb-12 w-full justify-center lg:justify-end">
              <img src="/pdf_images/rex/img_0_3.jpeg" alt="Jeweller" className="h-16 lg:h-20 object-contain opacity-90 transition-transform hover:scale-105" />
            </div>
            <div className="w-full flex justify-center lg:justify-end">
              <img src="/pdf_images/rex/img_0_2.jpeg" alt="ReX" className="w-full max-w-[450px] object-contain drop-shadow-xl" />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-slate-200 mb-24"></div>

        {/* MIDDLE SECTION */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto mb-24">
             <h3 className="text-[28px] lg:text-[34px] font-bold mb-8 text-[#0f2b4c]">Security for large and complex facilities</h3>
             <div className="mb-12">
               <img src="/pdf_images/rex/img_1_1.jpeg" alt="Communication Diagram" className="w-full rounded-2xl drop-shadow-lg" />
             </div>
             <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed mb-12">
               The maximum range of radio communication with connected devices is 1700 meters without obstacles. Up to 5 range extenders can be connected to the Ajax security system. It allows using Ajax products for large-scale facilities protection. Regardless of the number of devices connected to the ReX, alarms are delivered in 0.3 seconds.
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
            <div>
              <h3 className="text-[28px] lg:text-[34px] font-bold mb-8 text-[#0f2b4c]">Encrypted two-way communication</h3>
              <div className="space-y-6">
                <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
                  Jeweller is a two-way wireless protocol that provides fast and reliable communication between both: hub and ReX, and ReX and connected devices. The protocol delivers instant data-rich alarms and events: security companies and users know which device was triggered, when and where it happened.
                </p>
                <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
                  Jeweller features encryption and authentication to prevent forgery, and polling to display connected devices statuses. Supporting up to 1,800 m of wireless connectivity, Jeweller is ready to protect facilities and deliver the best user experience for both end users and installers.
                </p>
                <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed italic bg-slate-50 p-4 border-l-4 border-slate-300">
                  ReX connects to the hub only directly. Connection to another range extender is not provided.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
                  <div className="font-bold text-slate-800 text-[20px]">1800</div>
                  <p className="text-[16px] text-slate-600">Up to 1,800 m communication range</p>
                </div>
                <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
                  <div className="font-bold text-[#0f2b4c] text-[20px]">0.3s</div>
                  <p className="text-[16px] text-slate-600">Alarms and events delivery in 0.3 s</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[28px] lg:text-[34px] font-bold mb-8 text-[#0f2b4c]">Quick installation</h3>
              <div className="space-y-6">
                <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
                  Connecting and configuring ReX is a straightforward process that saves the installer time. To add the range extender to the system, just scan a QR code in the Ajax app and assign a name, room, and group to the device. If necessary, the installer can deactivate or reconfigure ReX remotely without visiting the facility.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-slate-200 mb-24"></div>

        {/* TECHNICAL SPECIFICATIONS */}
        <div>
          <h3 className="text-[32px] lg:text-[40px] font-bold mb-12 text-center text-[#0f2b4c]">Technical specifications</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 border-t border-slate-200">
            {/* Left Column Table Items */}
            <div className="flex flex-col border-r-0 lg:border-r border-slate-200">
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 pr-0 lg:pr-10 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Compliance with standards</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800">
                  EN 50131 (Grade 2)<br/>
                  PD 6662:2017
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 pr-0 lg:pr-10 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Compatibility</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800 space-y-4">
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Hubs</strong>
                    <span className="text-slate-600">all Ajax hubs</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Range extenders</strong>
                    <span className="text-slate-600">Connection to another range extender is not provided</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-200 lg:border-b-0 py-6 pr-0 lg:pr-10 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Communication with control panel and range extenders</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800">
                  <strong className="text-[#0f2b4c]">Jeweller communication technology</strong>
                  
                  <div className="mt-8 space-y-6">
                    <div>
                      <strong className="text-[#0f2b4c] block mb-2">Frequency bands</strong>
                      <div className="text-slate-600 leading-relaxed">
                        866.0 – 866.5 MHz<br/>
                        868.0 – 868.6 MHz<br/>
                        868.7 – 869.2 MHz<br/>
                        905.0 – 926.5 MHz<br/>
                        915.85 – 926.5 MHz<br/>
                        921.0 – 922.0 MHz<br/>
                        <span className="text-slate-500 text-sm mt-1 block">Depends on the region of sales</span>
                      </div>
                    </div>
                    <div>
                      <strong className="text-[#0f2b4c] block mb-1">Maximum effective radiated power (ERP)</strong>
                      <span className="text-slate-600">≤ 20 mW</span>
                    </div>
                    <div>
                      <strong className="text-[#0f2b4c] block mb-1">Communication range</strong>
                      <span className="text-slate-600">up to 1,800 m</span><br/>
                      <span className="text-slate-500 text-sm">In an open space</span>
                    </div>
                    <div>
                      <strong className="text-[#0f2b4c] block mb-1">Polling interval</strong>
                      <span className="text-slate-600">12–300 s</span><br/>
                      <span className="text-slate-500 text-sm">Adjusted by PRO or user with admin rights in the Ajax app</span>
                    </div>
                    <div>
                      <strong className="text-[#0f2b4c] block mb-1">Alarms and events delivery speed</strong>
                      <span className="text-slate-600">0.3 s</span>
                    </div>
                    <div>
                      <strong className="text-[#0f2b4c] block mb-1">Protection against forgery</strong>
                      <span className="text-slate-600">Device authentication</span>
                    </div>
                    <div>
                      <strong className="text-[#0f2b4c] block mb-1">Protection against jamming</strong>
                      <span className="text-slate-600">Frequency hopping</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Table Items */}
            <div className="flex flex-col lg:pl-10">
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Installation</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800 space-y-4">
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Operating temperature range</strong>
                    <span className="text-slate-600">from –10°С to +40°С</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Operating humidity</strong>
                    <span className="text-slate-600">up to 75%</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Protection class</strong>
                    <span className="text-slate-600">IP50</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Power supply</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800 space-y-4">
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Main power supply</strong>
                    <span className="text-slate-600">110–240 V~, 50/60 Hz</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Backup power supply</strong>
                    <span className="text-slate-600">Li-Ion 2 Ah<br/>Up to 35 hours of autonomous operation</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Enclosure</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800 space-y-4">
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Colours</strong>
                    <span className="text-slate-600">white, black</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Dimensions</strong>
                    <span className="text-slate-600">163 × 163 × 36 mm</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Weight</strong>
                    <span className="text-slate-600">330 g</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Tampering alarm</strong>
                    <span className="text-slate-600">Yes</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row py-6 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Complete set</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-600 leading-relaxed">
                  ReX Jeweller<br/>
                  SmartBracket mounting panel<br/>
                  Power supply cable<br/>
                  Installation kit<br/>
                  Quick start guide
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function Rex28inSpecs({ slug }: { slug: string }) {
  if (slug !== 'rex2-8in') return null;

  return (
    <section className="w-full bg-white font-sans text-slate-900 border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 xl:px-20 py-16 lg:py-24">
        
        {/* PAGE 1 CONTENT */}
        <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24 mb-24 items-start">
          <div className="w-full lg:w-[60%] flex flex-col">
            <div className="flex justify-between items-start mb-10">
              <div>
                <h2 className="text-[40px] lg:text-[48px] font-bold leading-tight tracking-tight mb-4 text-[#0f2b4c]">ReX 2 Jeweller</h2>
                <p className="text-[20px] lg:text-[22px] text-slate-500 leading-relaxed max-w-2xl">
                  Radio signal range extender supporting photo verification. An Ajax hub is required for device operation.
                </p>
                <p className="text-[14px] text-slate-500 mt-6 max-w-2xl">
                  Find the detailed information on the device at the link: https://ajax.systems/support/devices/rex-2
                </p>
              </div>
            </div>

            <h3 className="text-[24px] lg:text-[28px] font-bold mb-8 text-[#0f2b4c]">Key features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mb-16">
              {[ 
                "Two channels to transmit events and photos from connected devices to the hub: Ethernet and radio",
                "Range extender firmware update over the air",
                "Radio frequency hopping and transmitting all data via Ethernet in case of attempted jamming",
                "Fast pairing with the security system using QR code",
                "Transmitting photos taken with the detectors of the MotionCam lineup",
                "Up to 38 hours of battery operation in case of a power outage",
                "Enclosure protected with the tamper",
                "Remote control and configuring via the Ajax apps"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-5">
                  <div className="w-2 h-2 rounded-full bg-[#0f2b4c] mt-2 shrink-0"></div>
                  <p className="text-[16px] leading-snug text-slate-700">{feature}</p>
                </div>
              ))}
            </div>

            <h3 className="text-[24px] lg:text-[28px] font-bold mb-6 text-[#0f2b4c]">Photo verification for large and complex facilities</h3>
            <div className="space-y-6">
              <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
                The maximum radio communication range with connected devices is 1,700 meters in an open space. Up to 5 range extenders can be connected to an Ajax security system, allowing it to protect large-scale objects. Regardless of the number of devices connected to the range extender, alarms are delivered in 0.3 seconds. The first photo taken with the detector of the MotionCam lineup is delivered in 10 seconds (the exact time depends on system parameters).
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-end sticky top-24">
            <div className="flex gap-6 mb-12 w-full justify-center lg:justify-end">
              <img src="/pdf_images/rex2/img_0_2.jpeg" alt="MotionCam" className="h-12 lg:h-16 object-contain opacity-90" />
              <img src="/pdf_images/rex2/img_0_3.jpeg" alt="Hub 2 Plus" className="h-12 lg:h-16 object-contain opacity-90" />
            </div>
            <div className="w-full flex justify-center lg:justify-end">
              <img src="/pdf_images/rex2/img_0_1.jpeg" alt="ReX 2" className="w-full max-w-[450px] object-contain drop-shadow-xl" />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-slate-200 mb-24"></div>

        {/* PAGE 2 CONTENT */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24 items-center">
            <div className="flex flex-col">
               <h3 className="text-[28px] lg:text-[34px] font-bold mb-8 text-[#0f2b4c]">Guaranteed delivery of alarms and photos</h3>
               <div className="space-y-6">
                 <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
                   ReX 2 is equipped with four antennas and supports two radio protocols: Jeweller and Wings. The maximum radio communication range of each protocol is 1,700 meters in an open space.
                 </p>
                 <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
                   Jeweller transmits commands, events and alarms. Wings provides packet transmission of images, even when the signal strength is unstable and the communication fails. This is possible due to the built-in algorithms for checking and uploading data packages.
                 </p>
                 <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
                   Ajax two-way radio communication uses frames to synchronize device communication sessions, authentication to prevent spoofing, and encryption to protect against data theft.
                 </p>
               </div>
               <div className="mt-8 space-y-4">
                 <div className="flex items-start gap-4 bg-slate-50 p-4 rounded-xl">
                   <div className="w-2 h-2 rounded-full bg-[#0f2b4c] mt-2 shrink-0"></div>
                   <p className="text-[16px] text-slate-600">Automatic switching between the channels in case of connection loss with one of them</p>
                 </div>
                 <div className="flex items-start gap-4 bg-slate-50 p-4 rounded-xl">
                   <div className="w-2 h-2 rounded-full bg-[#0f2b4c] mt-2 shrink-0"></div>
                   <p className="text-[16px] text-slate-600">Data transmission protected by encryption</p>
                 </div>
               </div>
            </div>
            <div>
               <img src="/pdf_images/rex2/img_1_1.jpeg" alt="Guaranteed delivery diagram" className="w-full rounded-2xl drop-shadow-lg" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-24">
            <h3 className="text-[28px] lg:text-[34px] font-bold mb-8 text-[#0f2b4c]">Сommunication through steel and concrete</h3>
            <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed mb-12">
              ReX 2 with OS Malevich 2.13 firmware transmits data to the hub via radio and Ethernet cable. The cable can be used as the only or additional communication channel. The hub and the range extender must be connected to the same network through a router for that. An Ajax security system does not limit the length of the cable. Thus, one system can cover such an object as an office center with underground parking, a metal sectional hangar or a warehouse complex of several buildings.
            </p>
            <div className="w-full flex justify-center">
               <img src="/pdf_images/rex2/img_1_2.jpeg" alt="Steel and concrete diagram" className="w-full rounded-2xl drop-shadow-lg" />
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-slate-200 mb-24"></div>

        {/* PAGE 3 CONTENT */}
        <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
             <h3 className="text-[28px] lg:text-[34px] font-bold mb-8 text-[#0f2b4c]">Quick installation</h3>
             <p className="text-[16px] lg:text-[18px] text-slate-600 leading-relaxed">
               Connecting and configuring ReX 2 is a hassle-free process which saves the installer time. To add the range extender to the system, scan the QR code using an Ajax app, then assign a name and a room to the device. And if necessary, the range extender can be turned off or reconfigured remotely, without visiting the facility.
             </p>
          </div>
          <div className="w-full flex justify-center">
             <img src="/pdf_images/rex2/img_2_1.jpeg" alt="Quick installation diagram" className="w-full max-w-sm rounded-2xl drop-shadow-lg" />
          </div>
        </div>

        {/* TECHNICAL SPECIFICATIONS (PAGES 3, 4, 5) */}
        <div>
          <h3 className="text-[32px] lg:text-[40px] font-bold mb-12 text-center text-[#0f2b4c]">Technical specifications</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0 border-t border-slate-200">
            {/* Left Column Table Items */}
            <div className="flex flex-col border-r-0 lg:border-r border-slate-200">
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 pr-0 lg:pr-10 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Compliance with standards</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800">
                  EN 50131 (Grade 2)<br/>
                  PD 6662:2017
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 pr-0 lg:pr-10 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Communication channels</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800 space-y-6">
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Jeweller communication technology</strong>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Wings communication technology</strong>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Ethernet</strong>
                    <span className="text-slate-600">8P8C socket<br/>Up to 100 Mb/s</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-2">Radio frequency bands</strong>
                    <div className="text-slate-600 leading-relaxed">
                      866.0–866.5 MHz<br/>
                      868.0–868.6 MHz<br/>
                      868.7–869.2 MHz<br/>
                      905.0–926.5 MHz<br/>
                      915.85–926.5 MHz<br/>
                      921.0–922.0 MHz<br/>
                      <span className="text-slate-500 text-sm mt-1 block">Depends on the sales region</span>
                    </div>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Maximum effective radiated power (ERP)</strong>
                    <span className="text-slate-600">≤ 20 mW</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Radio communication range</strong>
                    <span className="text-slate-600">up to 1,700 m</span><br/>
                    <span className="text-slate-500 text-sm">In an open space</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Polling interval</strong>
                    <span className="text-slate-600">12–300 s</span><br/>
                    <span className="text-slate-500 text-sm">Adjusted by PRO or user with admin rights in the Ajax apps</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Protection against spoofing</strong>
                    <span className="text-slate-600">Device authentication</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Protection against jamming</strong>
                    <span className="text-slate-600">Radio frequency hopping<br/>Automatic switching the communication channel in case of connection loss</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-200 lg:border-b-0 py-6 pr-0 lg:pr-10 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Compatibility</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800 space-y-4">
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Hubs</strong>
                    <span className="text-slate-600">Hub 2 (2G)<br/>Hub 2 (4G)<br/>Hub 2 Plus<br/>Hub Hybrid (2G)<br/>Hub Hybrid (4G)</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Devices</strong>
                    <span className="text-slate-600">All Ajax wireless devices</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Range extenders</strong>
                    <span className="text-slate-600">ReX 2 does not connect to other range extenders</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column Table Items */}
            <div className="flex flex-col lg:pl-10">
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Data transmission</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800 space-y-4">
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Alarm delivery speed</strong>
                    <span className="text-slate-600">0.3 s</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Photo delivery speed via Wings</strong>
                    <span className="text-slate-600">up to 18 s</span><br/>
                    <span className="text-slate-500 text-sm">Depends on system parameters</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Photo delivery speed via Ethernet</strong>
                    <span className="text-slate-600">up to 10 s</span><br/>
                    <span className="text-slate-500 text-sm">Depends on system parameters</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Installation</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800 space-y-4">
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Operating temperature range</strong>
                    <span className="text-slate-600">from -10°C to +40°C</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Operating humidity</strong>
                    <span className="text-slate-600">up to 75%</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Protection class</strong>
                    <span className="text-slate-600">IP20</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Power supply</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800 space-y-4">
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Main power supply</strong>
                    <span className="text-slate-600">100–240 V, 50/60 Hz</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Backup power supply</strong>
                    <span className="text-slate-600">Li-Ion with 2 А·h capacity<br/>Up to 38 hours when not connected via Ethernet<br/>Up to 12 hours when connected via Ethernet</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row border-b border-slate-200 py-6 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Enclosure</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-800 space-y-4">
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Colour</strong>
                    <span className="text-slate-600">white, black</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Dimensions</strong>
                    <span className="text-slate-600">163 × 163 × 36 mm</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Weight</strong>
                    <span className="text-slate-600">410 g</span>
                  </div>
                  <div>
                    <strong className="text-[#0f2b4c] block mb-1">Tamper alarm</strong>
                    <span className="text-slate-600">Yes</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row py-6 gap-4 sm:gap-8">
                <div className="w-full sm:w-[40%] text-[16px] text-slate-500 font-medium">Complete set</div>
                <div className="w-full sm:w-[60%] text-[16px] text-slate-600 leading-relaxed">
                  ReX 2 Jeweller<br/>
                  SmartBracket mounting panel<br/>
                  Power supply cable<br/>
                  Ethernet cable<br/>
                  Installation kit<br/>
                  Quick start guide
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function DoorProtect8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'door-protect-8in') return null;

  return (
    <section className="w-full bg-white font-sans text-slate-900 border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 space-y-24">
        
        {/* PAGE 1: HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mt-12">
            <h1 className="text-[40px] md:text-[56px] font-bold leading-tight tracking-tight text-[#000000] mb-4">
              DoorProtect <span className="font-normal">Jeweller</span>
            </h1>
            <p className="text-[24px] text-slate-700">
              Wireless opening detector.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <img 
              src="/pdf_images/door_protect/img_0_1.jpeg" 
              alt="DoorProtect Black"
              className="h-[350px] object-contain"
            />
          </div>
        </div>

        {/* PAGE 1: BODY SECTION (2-COLUMN) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
          {/* Left Column */}
          <div className="space-y-16">
            <div>
              <h3 className="text-[24px] font-medium mb-6 text-[#000000]">Reliable opening detection</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-4">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span className="text-[16px] text-slate-800">The reed switch with a resource of 2,000,000 openings</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span className="text-[16px] text-slate-800">Protected against reed switch chattering</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span className="text-[16px] text-slate-800">Equipped with two magnets: small and big</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[24px] font-medium mb-6 text-[#000000]">Jeweller<br/>communication technology</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-4">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span className="text-[16px] text-slate-800">Up to 1,200 m of radio communication in an open space</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span className="text-[16px] text-slate-800">Encryption and device authentication to prevent spoofing</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span className="text-[16px] text-slate-800">Regular polling to display current device statuses</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[24px] font-medium mb-6 text-[#000000]">Quick installation and setup</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-4">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span className="text-[16px] text-slate-800">Pairing with a hub via QR code</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span className="text-[16px] text-slate-800">Remote control and configuration in the app</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span className="text-[16px] text-slate-800">Effortless installation and maintenance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            <div>
              <h3 className="text-[24px] font-medium mb-6 text-[#000000]">Additional features</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-4">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span className="text-[16px] text-slate-800">Additional NC input for connecting a third-party detector</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span className="text-[16px] text-slate-800">Chime feature: Ajax sirens make a special sound<br/>when the door is opening</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[24px] font-medium mb-6 text-[#000000]">Flawless autonomy</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-4">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span className="text-[16px] text-slate-800">Up to 7 years of operation</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span className="text-[16px] text-slate-800">Pre-installed battery</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span className="text-[16px] text-slate-800">Low battery warning</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <img 
                src="/pdf_images/door_protect/img_0_3.jpeg" 
                alt="DoorProtect Components" 
                className="w-full max-w-[450px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* PAGE 2: SPECIFICATIONS (4-COLUMN GRID) */}
        <div className="border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            
            {/* ROW 1 */}
            <div className="p-6 border-b xl:border-b-0 md:border-r border-slate-200">
              <h4 className="text-[18px] font-medium mb-6 text-[#000000]">Compliance</h4>
              <div className="text-[14px] text-slate-700 leading-relaxed">
                EN 50131 (Grade 2)<br/>
                [PD 6662:2017]
              </div>
            </div>

            <div className="p-6 border-b xl:border-b-0 xl:border-r border-slate-200">
              <h4 className="text-[18px] font-medium mb-6 text-[#000000]">Compatibility</h4>
              <div className="space-y-6">
                <div>
                  <div className="text-[14px] text-[#000000] mb-1">Hubs</div>
                  <div className="text-[14px] text-slate-500">
                    Hub, Hub Plus, Hub 2 (2G),<br/>
                    Hub 2 (4G), Hub 2 Plus,<br/>
                    Hub Hybrid (2G), Hub Hybrid (4G)
                  </div>
                </div>
                <div>
                  <div className="text-[14px] text-[#000000] mb-1">Range extenders</div>
                  <div className="text-[14px] text-slate-500">
                    ReX, ReX 2
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-b md:border-r xl:border-b-0 xl:border-r border-slate-200">
              <h4 className="text-[18px] font-medium mb-6 text-[#000000]">Communication<br/>with control panel</h4>
              <div className="space-y-6">
                <div>
                  <div className="text-[14px] text-[#000000]">Jeweller communication<br/>technology</div>
                </div>
                <div>
                  <div className="text-[14px] text-[#000000] mb-1">Frequency bands</div>
                  <div className="text-[14px] text-slate-500">
                    866.0–866.5 MHz<br/>
                    868.0–868.6 MHz<br/>
                    868.7–869.2 MHz<br/>
                    905.0–926.5 MHz<br/>
                    915.85–926.5 MHz<br/>
                    921.0–922.0 MHz
                  </div>
                  <div className="text-[14px] text-slate-400 mt-1">
                    Depends on the region of sales.
                  </div>
                </div>
                <div>
                  <div className="text-[14px] text-[#000000] mb-1">Jeweller communication range</div>
                  <div className="text-[14px] text-slate-500">up to 1,200 m</div>
                  <div className="text-[14px] text-slate-400">In an open space.</div>
                </div>
              </div>
            </div>

            <div className="p-6 border-b xl:border-b-0 border-slate-200">
              <h4 className="text-[18px] font-medium mb-6 text-[#000000]">Opening detection</h4>
              <div className="space-y-6">
                <div>
                  <div className="text-[14px] text-[#000000] mb-1">Sensitive element</div>
                  <div className="text-[14px] text-slate-500">1 reed switch</div>
                </div>
                <div>
                  <div className="text-[14px] text-[#000000] mb-1">Sensors’ resource</div>
                  <div className="text-[14px] text-slate-500">2,000,000 openings</div>
                </div>
                <div>
                  <div className="text-[14px] text-[#000000] mb-1">Third-party detector connection</div>
                  <div className="text-[14px] text-slate-500">
                    wired detector with the normally<br/>
                    closed (NC) contact type
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-t border-slate-200">
              <h4 className="text-[18px] font-medium mb-6 text-[#000000]">Power supply</h4>
              <div className="space-y-6">
                <div>
                  <div className="text-[14px] text-[#000000] mb-1">Battery</div>
                  <div className="text-[14px] text-slate-500">1 × CR123A</div>
                  <div className="text-[14px] text-slate-400">Pre-installed.</div>
                </div>
                <div>
                  <div className="text-[14px] text-[#000000] mb-1">Battery life</div>
                  <div className="text-[14px] text-slate-500">up to 7 years</div>
                </div>
              </div>
            </div>

            <div className="p-6 border-b md:border-b-0 xl:border-r border-t border-slate-200">
              <h4 className="text-[18px] font-medium mb-6 text-[#000000]">Installation</h4>
              <div className="space-y-6">
                <div>
                  <div className="text-[14px] text-[#000000] mb-1">Operating temperature range</div>
                  <div className="text-[14px] text-slate-500">from -10°С to +40°С</div>
                </div>
                <div>
                  <div className="text-[14px] text-[#000000] mb-1">Operating humidity</div>
                  <div className="text-[14px] text-slate-500">up to 75%</div>
                </div>
                <div>
                  <div className="text-[14px] text-[#000000] mb-1">Protection class</div>
                  <div className="text-[14px] text-slate-500">IP50</div>
                </div>
              </div>
            </div>

            <div className="p-6 border-b md:border-b-0 md:border-r xl:border-r border-t border-slate-200">
              <h4 className="text-[18px] font-medium mb-6 text-[#000000]">Enclosure</h4>
              <div className="space-y-6">
                <div>
                  <div className="text-[14px] text-[#000000] mb-1">Colour</div>
                  <div className="text-[14px] text-slate-500">white<br/>black</div>
                </div>
                <div>
                  <div className="text-[14px] text-[#000000] mb-1">Dimensions</div>
                  <div className="text-[14px] text-slate-500">Ø 20 × 90 mm</div>
                </div>
                <div>
                  <div className="text-[14px] text-[#000000] mb-1">Weight</div>
                  <div className="text-[14px] text-slate-500">29 g</div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-200">
              <h4 className="text-[18px] font-medium mb-6 text-[#000000]">Complete set</h4>
              <div className="text-[14px] text-[#000000] leading-relaxed">
                DoorProtect Jeweller<br/>
                2 magnets (small and big)<br/>
                1 CR123A battery (pre-installed)<br/>
                SmartBracket mounting panel<br/>
                Installation kit<br/>
                2-wire connector for third-party NC<br/>
                detector<br/>
                Quick start guide
              </div>
            </div>

          </div>
        </div>

        {/* PAGE 2: FOOTER (QR & CONTACT) */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 pt-8">
          <div className="flex flex-row items-center gap-6">
            <img src="/pdf_images/qr_code.png" alt="QR Code" className="w-24 h-24 object-contain mix-blend-multiply opacity-90" />
            <div>
              <p className="text-[16px] text-[#000000] mb-2">
                For detailed information, scan the QR code or follow the link:
              </p>
              <a href="https://support.ajax.systems/manuals/doorprotect/" className="text-[16px] text-slate-800 font-medium hover:underline">
                support.ajax.systems/manuals/doorprotect/
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
             <div className="flex items-center gap-3">
               <svg className="w-5 h-5 text-slate-800" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
               <span className="text-[14px] text-slate-800">support@ajax.systems</span>
             </div>
             <div className="flex items-center gap-3">
               <svg className="w-5 h-5 text-slate-800" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.506-.163-.907-.25-1.024-.526-.06-.142-.061-.3.04-.473.344-.593 1.76-1.211 4.248-2.25 4.316-1.802 5.213-2.115 5.794-2.128z"/></svg>
               <span className="text-[14px] text-slate-800">@AjaxSystemsSupport_Bot</span>
             </div>
             <div className="flex items-center gap-3">
               <svg className="w-5 h-5 text-slate-800" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
               <span className="text-[14px] text-slate-800">ajax.systems</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}


export function DoorProtectPlus8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'door-protect-plus-8in') return null;

  return (
    <section className="w-full bg-white font-sans text-[#111111]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 space-y-16">
        
        {/* HEADER SECTION (FULL WIDTH TOP) */}
        <div className="flex justify-between items-start w-full">
          {/* AJAX LOGO */}
          <svg width="120" height="30" viewBox="0 0 100 24" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.25 18.25L15 4H10L2.75 18.25H6.75L8.5 14.5H16.5L18.25 18.25H22.25ZM10 11.25L12.5 5.5L15 11.25H10Z"/>
            <path d="M28 18.25H31.5V9.5C31.5 6.5 34.5 4 38 4C41.5 4 44.5 6.5 44.5 9.5V18.25H48V9.5C48 4.25 43.5 0 38 0C32.5 0 28 4.25 28 9.5V18.25Z"/>
            <path d="M55.75 18.25L48.5 4H43.5L36.25 18.25H40.25L42 14.5H50L51.75 18.25H55.75ZM43.5 11.25L46 5.5L48.5 11.25H43.5Z"/>
            <path d="M68 4L63 11L58 4H54L61 13.5L54 23H58L63 16L68 23H72L65 13.5L72 4H68Z"/>
          </svg>

          {/* JEWELLER BADGE */}
          <div className="bg-[#333333] text-white flex items-center gap-3 px-6 py-3 rounded-bl-xl -mt-16 mr-[-3rem] md:mr-[-3rem] lg:mr-[-3rem]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="text-[20px] tracking-wide">Jeweller</span>
          </div>
        </div>

        {/* TITLE & IMAGE (PAGE 1) */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-8">
          {/* Left Column */}
          <div className="w-full md:w-[55%] flex flex-col gap-6">
            <h1 className="text-[48px] md:text-[60px] font-semibold leading-[1.1] tracking-tight text-[#000000]">
              DoorProtect Plus <br/><span className="font-normal">Jeweller</span>
            </h1>
            <p className="text-[24px] text-slate-800 leading-snug max-w-md">
              Wireless indoor opening detector<br/>with shock and tilt sensors
            </p>

            <div className="flex items-start gap-6 mt-8">
              <img src="/pdf_images/qr_code.png" alt="QR Code" className="w-24 h-24 object-contain mix-blend-multiply opacity-80" />
              <div className="text-[15px] text-slate-700 space-y-1 pt-1">
                <p>An Ajax hub is required for operation.</p>
                <p>Find the detailed information on the</p>
                <p>device at the link:</p>
                <div className="flex items-center gap-2 mt-2">
                   <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z"/><rect x="3" y="6" width="12" height="12" rx="2"/></svg>
                   <a href="https://ajax.systems/support/devices/doorprotect-plus/" className="text-slate-900 font-medium border-b border-green-500 pb-0.5 hover:text-green-600 transition-colors">
                     https://ajax.systems/support/devices/doorprotect-plus/
                   </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Image + Badges) */}
          <div className="w-full md:w-[45%] flex justify-end mt-12 md:mt-0 relative">
            <img 
              src="/pdf_images/door_protect_plus/img_0_1.jpeg" 
              alt="DoorProtect Plus"
              className="h-[400px] object-contain mr-16"
            />
            <div className="absolute right-0 top-[20%] flex flex-col gap-6">
               <div className="w-14 h-14 rounded-full border border-slate-300 flex flex-col items-center justify-center text-[8px] leading-tight text-center">
                 <span className="text-[14px]">2</span>
                 GRADE
                 <span className="text-[7px]">EN 50131</span>
               </div>
               <div className="w-14 h-14 rounded-full border border-slate-300 flex flex-col items-center justify-center text-[9px] leading-tight text-center">
                 PD 6662
                 <span>2017</span>
               </div>
            </div>
          </div>
        </div>

        {/* KEY FEATURES SECTION */}
        <div className="pt-12">
          <h2 className="text-[36px] font-bold text-[#000000] mb-12">Key features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {/* Left */}
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <svg className="w-8 h-8 text-slate-800 flex-shrink-0 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="8" y="2" width="8" height="20" rx="2"/><path d="M12 6v2m0 8v2"/></svg>
                <span className="text-[18px] text-slate-800 leading-snug">Built-in accelerometer for shock and tilt<br/>detection</span>
              </div>
              <div className="flex items-start gap-6">
                <svg className="w-8 h-8 text-slate-800 flex-shrink-0 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0 1 18 8"/><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"/><path d="M17.4 17.4l4.6 4.6"/><path d="M2 2l20 20"/></svg>
                <span className="text-[18px] text-slate-800 leading-snug">Ignores chattering and single shocks to<br/>avoid false alarms</span>
              </div>
              <div className="flex items-start gap-6">
                <svg className="w-8 h-8 text-slate-800 flex-shrink-0 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="6" y="4" width="12" height="16" rx="2"/><path d="M10 2h4M12 9v6M10 13l4-2"/></svg>
                <span className="text-[18px] text-slate-800 leading-snug">Up to 5 years of operation on pre-<br/>installed battery</span>
              </div>
              <div className="flex items-start gap-6">
                <svg className="w-8 h-8 text-slate-800 flex-shrink-0 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M12 16v-4M8 12h8"/></svg>
                <span className="text-[18px] text-slate-800 leading-snug">Remote control and setup via the app</span>
              </div>
            </div>
            {/* Right */}
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <svg className="w-8 h-8 text-slate-800 flex-shrink-0 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                <span className="text-[18px] text-slate-800 leading-snug">Adjustable tilt angle for alarm triggering</span>
              </div>
              <div className="flex items-start gap-6">
                <svg className="w-8 h-8 text-slate-800 flex-shrink-0 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M8 10V7a4 4 0 1 1 8 0v3"/><rect x="4" y="10" width="16" height="10" rx="2"/></svg>
                <span className="text-[18px] text-slate-800 leading-snug">Additional NC input for connecting a<br/>third-party detector</span>
              </div>
              <div className="flex items-start gap-6">
                <svg className="w-8 h-8 text-slate-800 flex-shrink-0 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                <span className="text-[18px] text-slate-800 leading-snug">Up to 1,200 m of two-way encrypted<br/>wireless communication</span>
              </div>
              <div className="flex items-start gap-6">
                <svg className="w-8 h-8 text-slate-800 flex-shrink-0 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 13h6"/></svg>
                <span className="text-[18px] text-slate-800 leading-snug">Pairing via QR code</span>
              </div>
            </div>
          </div>
        </div>

        {/* JEWELLER COMMUNICATION TECH */}
        <div className="pt-12">
          <h2 className="text-[36px] font-bold text-[#000000] mb-6">Jeweller communication technology</h2>
          <div className="text-[16px] text-slate-800 leading-[1.6] space-y-6 max-w-[1000px]">
            <p>
              <span className="font-bold">Jeweller</span> is a <span className="font-bold">two-way wireless protocol</span> that provides fast and reliable communication between hubs and devices. The protocol delivers instant data-rich alarms: security companies and users know which device was triggered, when and where it happened.
            </p>
            <p>
              Jeweller features <span className="font-bold">encryption</span> and <span className="font-bold">authentication</span> to prevent forgery, and <span className="font-bold">polling</span> to display devices’ status in real time. Supporting <span className="font-bold">up to 1,200 m</span> of wireless connectivity, Jeweller is ready to protect facilities and deliver <span className="font-bold">the best user experience</span> for both end users and installers.
            </p>
          </div>
        </div>

        {/* TECHNICAL SPECIFICATIONS (EXACT 2-COLUMN WITH BORDERS) */}
        <div className="pt-12">
          <h2 className="text-[36px] font-bold text-[#000000] mb-8">Technical specifications</h2>
          <div className="border-t border-slate-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-slate-300">
              
              {/* LEFT COLUMN */}
              <div className="flex flex-col">
                
                <div className="flex gap-6 p-6 border-b border-slate-300">
                  <div className="w-[35%] text-[15px] text-slate-600">Compliance with<br/>standards</div>
                  <div className="w-[65%] text-[15px] text-[#000000]">
                    EN 50131 (Grade 2)<br/>
                    PD 6662:2017
                  </div>
                </div>

                <div className="flex gap-6 p-6 border-b border-slate-300">
                  <div className="w-[35%] text-[15px] text-slate-600">
                    <div className="flex items-center gap-2">
                       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>
                       Jeweller
                    </div>
                    communication<br/>technology
                  </div>
                  <div className="w-[65%] text-[15px] text-[#000000] space-y-6">
                    <div>
                      <div className="font-medium mb-1">Frequency bands</div>
                      <div>
                        866.0 – 866.5 MHz<br/>
                        868.0 – 868.6 MHz<br/>
                        868.7 – 869.2 MHz<br/>
                        905.0 – 926.5 MHz<br/>
                        915.85 – 926.5 MHz<br/>
                        921.0 – 922.0 MHz
                      </div>
                      <div className="text-[14px] text-slate-500 mt-1">
                        Depends on the region<br/>of sales
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Maximum effective<br/>radiated power (ERP)</div>
                      <div>≤ 20 mW</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Communication range</div>
                      <div>up to 1,200 m</div>
                      <div className="text-[14px] text-slate-500 mt-1">In an open space</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Polling interval</div>
                      <div>12–300 sec</div>
                      <div className="text-[14px] text-slate-500 mt-1">
                        Adjusted by PRO or user<br/>with admin rights in the<br/>Ajax app
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Protection against<br/>forgery</div>
                      <div>Device authentication</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 p-6 border-b border-slate-300 lg:border-b-0">
                  <div className="w-[35%] text-[15px] text-slate-600">Power supply</div>
                  <div className="w-[65%] text-[15px] text-[#000000] space-y-6">
                    <div>
                      <div>1 × CR123A, 3 V</div>
                      <div className="text-[14px] text-slate-500 mt-1">Pre-installed</div>
                    </div>
                    <div>
                      <div>up to 5 years of<br/>battery life</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 p-6 lg:border-t border-slate-300">
                  <div className="w-[35%] text-[15px] text-slate-600">Enclosure</div>
                  <div className="w-[65%] text-[15px] text-[#000000] space-y-6">
                    <div>
                      <div className="font-medium mb-1">Colours</div>
                      <div>white, black</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Dimensions</div>
                      <div>Ø 20 × 90 mm</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Weight</div>
                      <div>29 g</div>
                    </div>
                    <div>
                      <div className="font-medium">Tampering alarm</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col">
                
                <div className="flex gap-6 p-6 border-b border-slate-300">
                  <div className="w-[35%] text-[15px] text-slate-600">Compatibility</div>
                  <div className="w-[65%] text-[15px] text-[#000000] space-y-6">
                    <div>
                      <div className="font-medium mb-1">Hubs</div>
                      <div>all Ajax hubs</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Range extenders</div>
                      <div>all Ajax radio signal range<br/>extenders</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 p-6 border-b border-slate-300">
                  <div className="w-[35%] text-[15px] text-slate-600">Detection</div>
                  <div className="w-[65%] text-[15px] text-[#000000] space-y-6">
                    <div>
                      <div className="font-medium mb-1">Sensing element</div>
                      <div>1 × reed switch<br/>1 × accelerometer</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Opening sensors resource</div>
                      <div>2,000,000 openings</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Shock sensor sensitivity</div>
                      <div>3 levels</div>
                      <div className="text-[14px] text-slate-500 mt-1">
                        Adjusted by PRO or user<br/>with admin rights in the<br/>Ajax app
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Option to ignore single<br/>shocks</div>
                      <div className="text-[14px] text-slate-500 mt-1">
                        Enabled by PRO or user<br/>with admin rights in the<br/>Ajax app
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Tilt sensor activation<br/>threshold</div>
                      <div>from 5° to 25°</div>
                      <div className="text-[14px] text-slate-500 mt-1">
                        Adjusted by PRO or user<br/>with admin rights in the<br/>Ajax app
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Third-party detector<br/>connection</div>
                      <div>
                        wired detector with the<br/>normally closed (NC)<br/>contact type
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 p-6 border-b border-slate-300">
                  <div className="w-[35%] text-[15px] text-slate-600">Installation</div>
                  <div className="w-[65%] text-[15px] text-[#000000] space-y-6">
                    <div>
                      <div className="font-medium mb-1">Operating temperature<br/>range</div>
                      <div>from –10°С to +40°С</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Operating humidity</div>
                      <div>up to 75%</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Ingress protection</div>
                      <div>IP50</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 p-6">
                  <div className="w-[35%] text-[15px] text-slate-600">Complete set</div>
                  <div className="w-[65%] text-[15px] text-[#000000] space-y-1">
                    <div>DoorProtect Plus Jeweller</div>
                    <div>2 magnets (small and large)</div>
                    <div>1 × CR123A (pre-installed)</div>
                    <div>SmartBracket</div>
                    <div>Installation kit</div>
                    <div>External contact for NC detector</div>
                    <div>Quick Start Guide</div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
