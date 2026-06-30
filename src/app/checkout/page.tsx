"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShopHeader } from '../shop/page';
import Footer from '@/components/Footer';
import { CheckCircle2, CreditCard, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
    const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(items);
  }, []);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order placement
    localStorage.removeItem('cartItems');
    window.dispatchEvent(new Event('cartUpdated'));
    setIsSuccess(true);
  };

  if (!mounted) return null;

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#F9FAFB]">
        <ShopHeader />
        <main className="max-w-3xl mx-auto px-6 py-20 text-center">
          <div className="bg-white p-16 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>
            <h1 className="text-3xl font-bold text-[#0f2b4c] mb-4">Order Confirmed!</h1>
            <p className="text-slate-500 mb-8 max-w-md">Thank you for your purchase. We have received your order and will send you a confirmation email shortly.</p>
            <Link href="/shop" className="bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm hover:bg-slate-800 transition-colors shadow-lg">
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <ShopHeader />
      
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <h1 className="text-3xl font-bold text-[#0f2b4c] mb-10 tracking-tight">Checkout</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white p-12 rounded-xl shadow-sm text-center border border-slate-100">
            <p className="text-slate-500 mb-6">You have no items to checkout.</p>
            <Link href="/shop" className="text-blue-600 font-bold hover:underline">Return to Shop</Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Checkout Form */}
            <div className="flex-1 w-full bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden p-8">
              <form onSubmit={handleCheckout} className="space-y-10">
                
                {/* Contact Info */}
                <div>
                  <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">1</span>
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="text-sm font-semibold text-slate-700">Email Address</label>
                      <input required type="email" className="w-full h-12 px-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">First Name</label>
                      <input required type="text" className="w-full h-12 px-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all" placeholder="First Name" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">Last Name</label>
                      <input required type="text" className="w-full h-12 px-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all" placeholder="Last Name" />
                    </div>
                  </div>
                </div>

                {/* Shipping Details */}
                <div className="border-t border-slate-100 pt-10">
                  <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">2</span>
                    Shipping Address
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="text-sm font-semibold text-slate-700">Street Address</label>
                      <input required type="text" className="w-full h-12 px-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all" placeholder="123 Main St" />
                    </div>
                    <div className="space-y-1.5 md:col-span-2">
                      <label className="text-sm font-semibold text-slate-700">Apartment, suite, etc. (optional)</label>
                      <input type="text" className="w-full h-12 px-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all" placeholder="Apt 4B" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">City</label>
                      <input required type="text" className="w-full h-12 px-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all" placeholder="City" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700">Postal Code</label>
                      <input required type="text" className="w-full h-12 px-4 border border-slate-200 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition-all" placeholder="ZIP Code" />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="border-t border-slate-100 pt-10">
                  <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">3</span>
                    Payment Method
                  </h2>
                  
                  <div className="p-4 border-2 border-black rounded-lg bg-slate-50 flex items-center gap-4 cursor-pointer">
                    <CreditCard className="text-black" />
                    <div>
                      <h4 className="font-bold text-slate-800">Cash on Delivery (Demo)</h4>
                      <p className="text-xs text-slate-500">Pay when you receive the product.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-black text-white px-8 py-5 rounded-lg font-bold uppercase tracking-wide text-sm shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-slate-800 transition-colors">
                    Place Order (₹{subtotal.toFixed(2)})
                    <ArrowRight size={18} />
                  </button>
                  <p className="flex items-center justify-center gap-1.5 text-xs text-slate-500 mt-4 font-medium">
                    <ShieldCheck size={14} className="text-emerald-600" />
                    100% Secure Checkout Processing
                  </p>
                </div>
              </form>
            </div>

            {/* Order Summary Sidebar */}
            <div className="w-full lg:w-[420px] bg-white rounded-xl shadow-sm border border-slate-100 p-8 shrink-0 lg:sticky lg:top-28">
              <h2 className="text-xl font-bold text-[#0f2b4c] mb-6">Order Summary</h2>
              
              <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto mb-6 pr-2">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-16 h-16 rounded-md p-1 shrink-0 flex items-center justify-center border border-slate-100 relative">
                      {item.image ? <img src={item.image} alt={item.name} className="w-full h-full object-contain" /> : <div className="w-full h-full bg-slate-200" />}
                      <span className="absolute -top-2 -right-2 bg-slate-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">{item.quantity}</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="text-sm font-bold text-slate-800 line-clamp-1">{item.name}</h4>
                      {item.color && <p className="text-[11px] text-slate-500">{item.color}</p>}
                      <p className="text-sm font-semibold text-slate-600 mt-0.5">₹{Number(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6 text-sm border-t border-slate-100 pt-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-800">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-emerald-600">Free</span>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-slate-800">Total</span>
                  <span className="text-2xl font-bold text-red-600">₹{subtotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
