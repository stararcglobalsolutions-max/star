"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Plus, Search, User, ShoppingCart, Menu, ChevronDown, ArrowRight, Trash2, X } from 'lucide-react';
import Link from 'next/link';
import { navItems } from '@/components/Header';
import Footer from '@/components/Footer';

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/products', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ShopHeader />

      <main className="w-full px-4 md:px-8 lg:px-12 xl:px-20 py-12">
        {/* Product Grid */}
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
              {products.length > 0 ? (
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              ) : (
                // Dummy items while loading or if empty
                <>
                  <DummyProductCard name="Hub Jeweller" price={15500} oldPrice={19375} />
                  <DummyProductCard name="MotionProtect" price={4800} oldPrice={6000} />
                  <DummyProductCard name="DoorProtect Plus" price={3240} oldPrice={4050} />
                  <DummyProductCard name="StreetSiren" price={8640} oldPrice={10800} />
                </>
              )}
            </div>
          </div>
      </main>

      <Footer />
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  // Simulating old price for the sale effect based on the screenshot
  const oldPrice = Math.round(product.price * 1.25);
  const slug = product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <Link href={`/shop/${slug}`} className="group cursor-pointer flex flex-col h-full relative">
      {/* Image Box */}
      <div className="relative aspect-square overflow-hidden mb-6 rounded-2xl bg-[#f4f5f7] flex items-center justify-center p-8 transition-colors duration-500 group-hover:bg-[#ebeef2]">
        
        {/* Product Image */}
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 drop-shadow-xl" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium">No Image</div>
        )}

        {/* Quick View Button overlay (appears on hover) */}
        <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="bg-white text-black text-[13px] font-bold uppercase tracking-widest px-6 py-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            View Details
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col flex-1 px-2">
        {/* Available Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 mb-3">
            {product.colors.map((color: string, i: number) => (
              <div
                key={i}
                className="w-3.5 h-3.5 rounded-full border border-slate-200 shadow-sm"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
            ))}
          </div>
        )}

        <h3 className="text-[19px] font-bold text-[#0f2b4c] leading-tight mb-2 group-hover:text-red-600 transition-colors">
          {product.name}
        </h3>

        {/* Product Details/Description */}
        {product.description && (
          <p className="text-[14px] text-[#64748b] line-clamp-2 leading-relaxed mb-4 font-medium flex-1">
            {product.description}
          </p>
        )}

        <div className="flex items-end gap-3 mt-auto pt-2">
          <span className="text-[20px] text-[#111111] font-extrabold tracking-tight">₹{Number(product.price).toFixed(2)}</span>
          <span className="text-[14px] text-[#94a3b8] line-through font-medium mb-0.5">₹{oldPrice.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  );
}

function DummyProductCard({ name, price, oldPrice }: { name: string, price: number, oldPrice: number }) {
  return (
    <div className="group cursor-pointer flex flex-col h-full relative">
      <div className="relative aspect-square overflow-hidden mb-6 rounded-2xl bg-[#f4f5f7] flex items-center justify-center p-8 transition-colors duration-500 group-hover:bg-[#ebeef2]">
        
        <div className="w-full h-full flex items-center justify-center text-slate-400 font-medium">
          Demo Image
        </div>

        <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="bg-white text-black text-[13px] font-bold uppercase tracking-widest px-6 py-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            View Details
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 px-2">
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-3.5 h-3.5 rounded-full border border-slate-200 shadow-sm bg-black" />
          <div className="w-3.5 h-3.5 rounded-full border border-slate-200 shadow-sm bg-white" />
        </div>

        <h3 className="text-[19px] font-bold text-[#0f2b4c] leading-tight mb-2 group-hover:text-red-600 transition-colors">
          {name}
        </h3>
        
        <p className="text-[14px] text-[#64748b] line-clamp-2 leading-relaxed mb-4 font-medium flex-1">
          Control Panel supporting Jeweller protocol with 2G - Nos. of devices connected.
        </p>
        
        <div className="flex items-end gap-3 mt-auto pt-2">
          <span className="text-[20px] text-[#111111] font-extrabold tracking-tight">₹{price.toFixed(2)}</span>
          <span className="text-[14px] text-[#94a3b8] line-through font-medium mb-0.5">₹{oldPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export function ShopHeader() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Update cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
      setCartItems(items);
      setCartCount(items.reduce((total: number, item: any) => total + item.quantity, 0));
    };

    updateCartCount();
    window.addEventListener('cartUpdated', updateCartCount);
    return () => window.removeEventListener('cartUpdated', updateCartCount);
  }, []);

  const removeFromCart = (indexToRemove: number) => {
    const updatedItems = cartItems.filter((_, idx) => idx !== indexToRemove);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    window.dispatchEvent(new Event('cartUpdated'));
  };

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
    <header ref={headerRef} className="w-full bg-white border-b border-slate-100 relative z-50">
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 h-20 flex items-center justify-between relative z-50 bg-white">

        {/* Mobile Menu & Logo */}
        <div className="flex items-center gap-4">
          <button className="md:hidden text-slate-800 p-2 -ml-2">
            <Menu size={24} />
          </button>
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-[120px] md:w-[140px] h-8 transition-transform duration-500 group-hover:scale-105 flex items-center">
              <img src="/starclogo22.jpeg" alt="StarArc Logo" className="max-h-full max-w-full object-contain" />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              <a
                href={item.href || "#"}
                onClick={(e) => handleNavClick(e, item)}
                className={`
                  relative py-2.5 text-[15px] font-semibold transition-all duration-300 ease-out flex items-center gap-1.5
                  ${activeDropdown === item.label
                    ? 'text-red-600'
                    : 'text-slate-600 hover:text-black'
                  }
                `}
              >
                <span>{item.label}</span>
                {item.dropdown && (
                  <ChevronDown
                    size={12}
                    className={`opacity-70 group-hover:opacity-100 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180 text-red-600' : ''}`}
                  />
                )}
              </a>
            </div>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button className="text-slate-600 hover:text-black transition-colors">
            <Search size={20} />
          </button>
          <button className="text-slate-600 hover:text-black transition-colors">
            <User size={20} />
          </button>
          <button className="text-slate-600 hover:text-black transition-colors relative" onClick={() => setIsCartOpen(!isCartOpen)}>
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Cart Dropdown Preview */}
          {isCartOpen && (
            <div className="absolute top-20 right-6 w-[320px] bg-white border border-slate-200 shadow-2xl p-4 z-50 rounded-md">
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-2">
                <h3 className="font-bold text-slate-800">Your Cart</h3>
                <button onClick={() => setIsCartOpen(false)} className="text-slate-400 hover:text-black">
                  <X size={16} />
                </button>
              </div>

              {cartItems.length === 0 ? (
                <div className="text-center py-6 text-slate-500 text-sm">
                  Your cart is empty.
                </div>
              ) : (
                <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto">
                  {cartItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-slate-50 p-2 rounded relative">
                      <div className="w-12 h-12 bg-white rounded border border-slate-200 overflow-hidden shrink-0">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-full h-full object-contain p-1" />
                        ) : (
                          <div className="w-full h-full bg-slate-100" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-[13px] font-bold text-slate-800 line-clamp-1">{item.name}</p>
                        <p className="text-[12px] text-slate-500">Qty: {item.quantity} {item.color && `• ${item.color}`}</p>
                        <p className="text-[13px] font-bold text-red-600 mt-0.5">₹{Number(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(idx)}
                        className="text-slate-400 hover:text-red-600 transition-colors absolute top-2 right-2"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}

                  <div className="border-t border-slate-200 pt-4 mt-2">
                    <div className="flex items-center justify-between font-bold text-slate-800 mb-4">
                      <span>Total</span>
                      <span>₹{cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)}</span>
                    </div>
                    <Link href="/cart" className="w-full bg-black text-white font-bold text-sm uppercase py-3 hover:bg-slate-800 transition-colors flex items-center justify-center">
                      View Cart & Checkout
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <div
        className={`
          hidden lg:block absolute top-[100%] left-0 w-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          bg-white border-b border-slate-200 shadow-[0_40px_80px_rgba(0,0,0,0.05)]
          ${activeDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible pointer-events-none'}
        `}
      >
        <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 py-10 relative max-h-[75vh] overflow-y-auto custom-scrollbar">
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
                        className={`flex flex-col gap-6 xl:gap-8 ${colIdx > 0 ? 'border-l border-black/10 pl-8 xl:pl-10' : ''}`}
                      >
                        {col.sections.map((sec: any, secIdx: number) => (
                          <div key={secIdx} className="flex flex-col">
                            {sec.title && (
                              sec.links.length === 0 ? (
                                <a href="#" className={`block font-bold mb-3 transition-colors ${sec.isSmall ? 'text-[11px] text-slate-400 uppercase tracking-wider font-normal' : 'text-[16px]'} text-slate-900 hover:text-red-600`}>
                                  {sec.title}
                                </a>
                              ) : (
                                <h4 className={`font-bold mb-3 ${sec.isSmall ? 'text-[11px] text-slate-400 uppercase tracking-wider font-normal' : 'text-[16px]'} text-slate-900`}>
                                  {sec.title}
                                </h4>
                              )
                            )}
                            {sec.links.length > 0 && (
                              <ul className={sec.isLargeLinks ? "space-y-[18px]" : "space-y-2"}>
                                {sec.links.map((link: string, lIdx: number) => (
                                  <li key={lIdx} className="group/link">
                                    <a href="#" className={`flex items-center gap-2 transition-colors ${sec.isLargeLinks ? 'font-bold text-[16px] text-slate-900 hover:text-red-600' : 'text-slate-600 hover:text-slate-900 text-[13.5px]'}`}>
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
                  {(item as any).footerLink && (
                    <div className="mt-8 pt-6 border-t border-black/10">
                      <a href="#" className="inline-flex items-center gap-2 font-bold text-[14px] transition-colors group/view text-slate-900 hover:text-red-600">
                        {(item as any).footerLink}
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
