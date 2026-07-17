"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ShopHeader } from '../shop/page';
import Footer from '@/components/Footer';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(items);
  }, []);

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updated = [...cartItems];
    updated[index].quantity = newQuantity;
    setCartItems(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (index: number) => {
    const updated = cartItems.filter((_, idx) => idx !== index);
    setCartItems(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  if (!mounted) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const gst = subtotal * 0.18;
  const estimatedTotal = subtotal + gst;

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <ShopHeader />
      
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <h1 className="text-3xl font-bold text-[#0f2b4c] mb-10 tracking-tight">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white p-16 rounded-xl shadow-sm text-center border border-slate-100">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Your cart is empty</h2>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">Looks like you haven't added any products to your cart yet. Discover our premium ecosystem of devices.</p>
            <Link href="/shop" className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-wide hover:bg-slate-800 transition-colors">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Cart Items List */}
            <div className="flex-1 w-full bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="hidden sm:grid grid-cols-12 gap-4 p-6 bg-slate-50 border-b border-slate-100 text-sm font-bold text-slate-500 uppercase tracking-wider">
                <div className="col-span-6">Product</div>
                <div className="col-span-3 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
                <div className="col-span-1"></div>
              </div>

              <div className="divide-y divide-slate-100">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="p-6 grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-4 items-center">
                    
                    {/* Product Info */}
                    <div className="col-span-1 sm:col-span-6 flex items-center gap-6">
                      {item.image && !item.name?.includes('Package') && (
                        <div className="w-24 h-24 rounded-lg p-2 shrink-0 flex items-center justify-center">
                          <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-bold text-[#0f2b4c] text-lg mb-1">{item.name}</h3>
                        {item.color && <p className="text-sm text-slate-500">Color: {item.color}</p>}
                        <p className="text-sm font-semibold text-red-600 mt-1">₹{Number(item.price).toFixed(2)}</p>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="col-span-1 sm:col-span-3 flex justify-start sm:justify-center">
                      <div className="flex items-center border border-slate-200 rounded-md w-28 h-10">
                        <button onClick={() => updateQuantity(idx, item.quantity - 1)} className="flex-1 flex justify-center items-center h-full hover:bg-slate-100 transition-colors text-slate-500">
                          <Minus size={14} />
                        </button>
                        <span className="font-bold text-slate-800 text-sm w-8 text-center">{item.quantity}</span>
                        <button onClick={() => updateQuantity(idx, item.quantity + 1)} className="flex-1 flex justify-center items-center h-full hover:bg-slate-100 transition-colors text-slate-500">
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Subtotal */}
                    <div className="col-span-1 sm:col-span-2 text-left sm:text-right font-bold text-slate-800 text-lg">
                      ₹{Number(item.price * item.quantity).toFixed(2)}
                    </div>

                    {/* Remove Action */}
                    <div className="col-span-1 flex justify-end">
                      <button 
                        onClick={() => removeItem(idx)}
                        className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-[400px] bg-white rounded-xl shadow-sm border border-slate-100 p-8 shrink-0 lg:sticky lg:top-28">
              <h2 className="text-xl font-bold text-[#0f2b4c] mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-800">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-emerald-600">Free</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>GST (18%)</span>
                  <span className="font-semibold text-slate-800">₹{gst.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-base font-bold text-slate-800">Estimated Total</span>
                  <span className="text-2xl font-bold text-red-600">₹{estimatedTotal.toFixed(2)}</span>
                </div>
              </div>

              <Link href="/checkout" className="w-full flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide text-sm shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all">
                Proceed to Checkout
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
