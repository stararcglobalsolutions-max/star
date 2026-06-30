"use client";

import React, { useEffect, useState, use } from 'react';
import Link from 'next/link';
import { ShopHeader } from '../page';
import Footer from '@/components/Footer';
import { Plus, Minus, ShoppingCart, ShieldCheck, Truck, ChevronDown, Check } from 'lucide-react';

export default function SingleProductPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
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
      <div className="w-full bg-[#111111] text-white text-center py-2.5 text-[13px] font-medium tracking-wide">
        Free Shipping + Flat 20% Off on All Products
      </div>
      <ShopHeader />

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Image */}
          <div className="aspect-square relative flex items-center justify-center p-12 lg:p-20">
            {product.image ? (
              <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
            ) : (
              <div className="text-slate-400">No Image Available</div>
            )}
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-center">
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

            {product.colors && product.colors.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Color</h3>
                <div className="flex gap-3">
                  {product.colors.map((color: string) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color ? 'border-slate-900 scale-110' : 'border-slate-200 shadow-sm'}`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center border border-slate-200 bg-slate-50 w-32 h-14">
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
                className="flex-1 h-14 bg-black text-white font-bold tracking-wide uppercase text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-black/10 hover:shadow-black/20 hover:-translate-y-0.5 hover:bg-slate-800"
              >
                {isAdded ? <Check size={18} /> : <ShoppingCart size={18} />}
                {isAdded ? 'Added!' : 'Add to Cart'}
              </button>

              {isAdded && (
                <Link href="/cart" className="flex-1 h-14 bg-emerald-600 text-white font-bold tracking-wide uppercase text-sm flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-emerald-600/20 hover:-translate-y-0.5 hover:bg-emerald-700">
                  View Cart
                </Link>
              )}
            </div>

            {/* Features list (Accordion) */}
            {product.features && product.features.length > 0 && (
              <div className="border-t border-slate-200 pt-6 mt-4">
                <button
                  onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                  className="w-full flex items-center justify-between py-2 group"
                >
                  <h3 className="text-sm font-bold text-[#0f2b4c] uppercase tracking-wider">Key Features</h3>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isFeaturesOpen ? 'rotate-180' : ''}`} />
                </button>

                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isFeaturesOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  <ul className="space-y-4">
                    {product.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-4 text-[#64748b]">
                        <ShieldCheck className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-[15px]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Trust Badges */}
            <div className="flex items-center gap-6 mt-10 p-6 bg-slate-50 rounded-xl border border-slate-100">
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


      {/* Dynamic or Hardcoded Tech Specs Section based on user request */}
      <HubTechSpecs />

      <Footer />
    </div>
  );
}

function HubTechSpecs() {
  return (
    <section className="w-full bg-[#FAFAFA] border-t border-slate-100 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Rich Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#0f2b4c] tracking-tight">Always online</h2>
            <p className="text-slate-600 leading-relaxed text-[17px]">
              To guarantee prompt alarm transmission to the monitoring station and users, Hub can be connected to two Internet providers at a time via Ethernet and SIM card (2G). Channels work in parallel, and automatic switching between them takes seconds.
            </p>
            <p className="text-slate-600 leading-relaxed text-[17px]">
              Hub is connected to the apps, security companies and users through the Ajax Cloud server with an availability of 99.995% in 2021. For more excellent reliability, the servers are located in several data centres. We use the proprietary binary protocol and automatic load balancing for the uninterrupted processing of millions of data packets and the stable operation of security systems.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#0f2b4c] tracking-tight">Jeweller communication technology</h2>
            <p className="text-slate-600 leading-relaxed text-[17px]">
              Jeweller radio protocol provides two-way communication between a hub and devices at a distance of up to 2,000 m. Jeweller uses time frames to synchronize communication with connected devices, authentication to eliminate forgery, and encryption to protect against data theft.
            </p>
            <p className="text-slate-600 leading-relaxed text-[17px]">
              To expand the radio coverage area, a range extender can be connected to Hub, increasing the range to 1,800 m more.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#0f2b4c] tracking-tight">Fast connection and installation</h2>
            <p className="text-slate-600 leading-relaxed text-[17px]">
              Hub is ready to work right out of the box. It comes with pre-installed communication modules, a power supply unit, and a backup battery. To begin the system setup, an installer needs to plug the device into a power socket, connect it to the Internet, insert a SIM card, and scan the app's QR code. Thanks to SmartBracket, installers don’t need to disassemble the enclosure to mount the hub.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#0f2b4c] tracking-tight">Controlled with apps</h2>
            <p className="text-slate-600 leading-relaxed text-[17px]">
              We’ve developed two types of applications: for users and PRO. Users’ apps are designed for monitoring alarms and managing security via smartphone. Apps for PRO are designed to manage system settings via PC or smartphone.
            </p>
            <p className="text-slate-600 leading-relaxed text-[17px]">
              All types of Ajax apps connect to a hub using a secure channel with Ajax Cloud our server solution located at several AWS data centres. All security system settings are always available in the app.
            </p>
          </div>

        </div>

        {/* Technical Specifications Table */}
        <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 lg:p-12 border-b border-slate-100 bg-[#0f2b4c]">
            <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">Technical specifications</h2>
          </div>

          <div className="p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-12">

              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Compliance with standards</span>
                <span className="text-slate-800 font-medium">EN 50131 (Grade 2)<br />PD 6662:2017</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Connected devices</span>
                <span className="text-slate-800 font-medium">up to 100 wireless devices<br />Including 1 range extender and up to 10 sirens.</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Communication channels</span>
                <span className="text-slate-800 font-medium">Jeweller communication technology</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Frequency bands</span>
                <span className="text-slate-800 font-medium text-sm leading-loose">
                  866.0–866.5 MHz<br />
                  868.0–868.6 MHz<br />
                  868.7–869.2 MHz<br />
                  905.0–926.5 MHz<br />
                  915.85–926.5 MHz<br />
                  921.0–922.0 MHz
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Maximum ERP</span>
                <span className="text-slate-800 font-medium">≤25 mW</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Communication range</span>
                <span className="text-slate-800 font-medium">up to 2,000 m<br /><span className="text-slate-500 font-normal">Depends on the sales region. In an open space.</span></span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Power supply</span>
                <span className="text-slate-800 font-medium">Main: 100–240 V~, 50/60 Hz<br />Backup: Li Ion battery with 2 A⋅h capacity (Up to 16 hours)</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Features</span>
                <span className="text-slate-800 font-medium">50 users<br />10 cameras or DVRs<br />5 automation scenarios<br />9 security groups</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">External channels</span>
                <span className="text-slate-800 font-medium">Ethernet 8P8C slot<br />1 slot for micro-SIM (2G)</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Installation</span>
                <span className="text-slate-800 font-medium">from 10°С to +40°С<br />Humidity up to 75%<br />Protection class IP20</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Dimensions & Weight</span>
                <span className="text-slate-800 font-medium">163 × 163 × 36 mm<br />350 g</span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">Complete set</span>
                <span className="text-slate-800 font-medium">Hub Jeweller<br />Power cable<br />Ethernet cable<br />SIM card<br />Installation kit<br />Quick Start Guide</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
