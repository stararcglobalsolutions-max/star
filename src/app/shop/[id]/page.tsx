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
import { MotionProtectCurtain8inSpecs } from './MotionProtectCurtain8inSpecs';
import { CurtainOutdoor8inSpecs } from './CurtainOutdoor8inSpecs';
import { DualCurtainOutdoor8inSpecs } from './DualCurtainOutdoor8inSpecs';
import { MotionProtectOutdoor8inSpecs } from './MotionProtectOutdoor8inSpecs';
import { HoodSpecs } from './HoodSpecs';
import { MotionCamOutdoor8inSpecs } from './MotionCamOutdoor8inSpecs';
import { MotionCamOutdoorPhod8inSpecs } from './MotionCamOutdoorPhod8inSpecs';
import { MotionCamOutdoorHighMountPhod8inSpecs } from './MotionCamOutdoorHighMountPhod8inSpecs';
import { LeaksProtect8inSpecs } from './LeaksProtect8inSpecs';
import { LifeQuality8inSpecs } from './LifeQuality8inSpecs';
import { FireProtect8inSpecs } from './FireProtect8inSpecs';
import { FireProtect2Heat8inSpecs } from './FireProtect2Heat8inSpecs';
import { FireProtect2HeatSmoke8inSpecs } from './FireProtect2HeatSmoke8inSpecs';
import { FireProtect2HeatSmokeCo8inSpecs } from './FireProtect2HeatSmokeCo8inSpecs';
import { ManualCallPoint8inSpecs } from './ManualCallPoint8inSpecs';
import { Button8inSpecs } from './Button8inSpecs';
import { DoubleButton8inSpecs } from './DoubleButton8inSpecs';
import { HolderSpecs } from './HolderSpecs';

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
                className="w-full sm:flex-1 shrink-0 h-14 bg-[#0066cc] text-white font-bold tracking-wide uppercase text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#0066cc]/20 hover:shadow-[#0066cc]/30 hover:-translate-y-0.5 hover:bg-[#005bb5] rounded-full"
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
      <MotionProtectCurtain8inSpecs slug={unwrappedParams.id} />
      <CurtainOutdoor8inSpecs slug={unwrappedParams.id} />
      <DualCurtainOutdoor8inSpecs slug={unwrappedParams.id} />
      <MotionProtectOutdoor8inSpecs slug={unwrappedParams.id} />
      <HoodSpecs slug={unwrappedParams.id} />
      <MotionCamOutdoor8inSpecs slug={unwrappedParams.id} />
      <MotionCamOutdoorPhod8inSpecs slug={unwrappedParams.id} />
      <MotionCamOutdoorHighMountPhod8inSpecs slug={unwrappedParams.id} />
      <LeaksProtect8inSpecs slug={unwrappedParams.id} />
      <LifeQuality8inSpecs slug={unwrappedParams.id} />
      <FireProtect8inSpecs slug={unwrappedParams.id} />
      <FireProtect2Heat8inSpecs slug={unwrappedParams.id} />
      <FireProtect2HeatSmoke8inSpecs slug={unwrappedParams.id} />
      <FireProtect2HeatSmokeCo8inSpecs slug={unwrappedParams.id} />
      <ManualCallPoint8inSpecs slug={unwrappedParams.id} />
      <Button8inSpecs slug={unwrappedParams.id} />
      <DoubleButton8inSpecs slug={unwrappedParams.id} />
      <HolderSpecs slug={unwrappedParams.id} />

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

  const BASE = '/images/products/hub2-plus-8in';

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
              alt={`Hub 2 Plus Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}



export function Rex8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'rex-8in') return null;

  const BASE = '/images/products/rex-8in';

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
              alt={`ReX Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}


export function Rex28inSpecs({ slug }: { slug: string }) {
  if (slug !== 'rex2-8in') return null;

  const BASE = '/images/products/rex2-8in';

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
              alt={`ReX 2 Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}


export function DoorProtect8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'door-protect-8in') return null;

  const BASE = '/images/products/door-protect-8in';

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
              alt={`Door Protect Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
export function DoorProtectPlus8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'door-protect-plus-8in') return null;

  const BASE = '/images/products/door-protect-plus-8in';

  const PAGES = [
    { num: 1, src: `${BASE}/hires_page_1.png` },
    { num: 2, src: `${BASE}/hires_page_2.png` },
    { num: 3, src: `${BASE}/hires_page_3.png` },
  ];

  return (
    <section className="w-full bg-white pb-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-0">
        {PAGES.map((page) => (
          <div key={page.num} className="w-full bg-white">
            <img
              src={page.src}
              alt={`Door Protect Plus Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
