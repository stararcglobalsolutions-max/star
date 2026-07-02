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
      <ProductSpecs slug={unwrappedParams.id} />

      <Footer />
    </div>
  );
}

function ProductSpecs({ slug }: { slug: string }) {
  if (slug === 'hub-8in') {
    return (
      <section className="w-full bg-[#FAFAFA] border-t border-slate-100 py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f2b4c] tracking-tight mb-6">Hub (8IN) Hybrid Ecosystem</h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              The synergy of wired and wireless technologies. Built for professional installations requiring uncompromised reliability and flexibility with 8 dedicated hardwired inputs.
            </p>
          </div>

          {/* Rich Description Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
            <div className="space-y-6 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-[#0f2b4c] tracking-tight">Seamless Hybrid Architecture</h3>
              <p className="text-slate-600 leading-relaxed text-[17px]">
                Hub (8IN) bridges the gap between traditional wired infrastructure and cutting-edge wireless technology. With 8 built-in wired zones, it allows you to integrate third-party wired detectors seamlessly alongside our proprietary wireless Jeweller devices.
              </p>
              <p className="text-slate-600 leading-relaxed text-[17px]">
                This hybrid approach ensures that large commercial facilities, warehouses, and complex residential layouts can be fully protected without complete rewiring, reducing installation costs while maximizing security.
              </p>
            </div>
            <div className="bg-[#111] rounded-[32px] aspect-[4/3] md:aspect-[16/9] lg:aspect-auto overflow-hidden relative shadow-2xl border border-slate-800">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop" alt="Hybrid Technology" className="w-full h-full object-cover opacity-80" />
            </div>

            <div className="bg-slate-100 rounded-[32px] aspect-[4/3] md:aspect-[16/9] lg:aspect-auto overflow-hidden relative shadow-inner order-2 lg:order-1 hidden lg:block">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop" alt="Always Online" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6 flex flex-col justify-center order-1 lg:order-2">
              <h3 className="text-3xl font-bold text-[#0f2b4c] tracking-tight">Always Online. Multiple Channels.</h3>
              <p className="text-slate-600 leading-relaxed text-[17px]">
                Communication is the backbone of any security system. Hub (8IN) features unprecedented connectivity with Ethernet and Dual SIM capabilities working in parallel.
              </p>
              <p className="text-slate-600 leading-relaxed text-[17px]">
                If the Ethernet connection drops, the system automatically switches to cellular networks in seconds. Real-time polling ensures the monitoring station is instantly notified of any communication failures.
              </p>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="w-full bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-8 lg:p-12 border-b border-slate-100 bg-[#0f2b4c]">
              <h2 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">Hub (8IN) Technical Specifications</h2>
            </div>

            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-12">
                <div className="flex flex-col gap-3">
                  <span className="text-[12px] font-bold text-[#ef233c] uppercase tracking-widest">Wired Integration</span>
                  <span className="text-slate-900 font-bold text-lg">8 Hardwired Inputs</span>
                  <span className="text-slate-500 text-sm leading-relaxed">Supports NO/NC, EOL, and Double EOL connections for maximum compatibility.</span>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-[12px] font-bold text-[#ef233c] uppercase tracking-widest">Wireless Devices</span>
                  <span className="text-slate-900 font-bold text-lg">Up to 100 Devices</span>
                  <span className="text-slate-500 text-sm leading-relaxed">Connects up to 100 Jeweller wireless devices with a range of up to 2,000m.</span>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-[12px] font-bold text-[#ef233c] uppercase tracking-widest">Communication</span>
                  <span className="text-slate-900 font-bold text-lg">Ethernet + Dual SIM</span>
                  <span className="text-slate-500 text-sm leading-relaxed">2G/3G/4G support depending on the regional modem version.</span>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-[12px] font-bold text-[#ef233c] uppercase tracking-widest">Power Supply</span>
                  <span className="text-slate-900 font-bold text-lg">110-240 V AC</span>
                  <span className="text-slate-500 text-sm leading-relaxed">Supports backup 12V SLA battery (4Ah or 7Ah) lasting up to 60 hours.</span>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-[12px] font-bold text-[#ef233c] uppercase tracking-widest">System Features</span>
                  <span className="text-slate-900 font-bold text-lg">Users & Groups</span>
                  <span className="text-slate-500 text-sm leading-relaxed">Up to 50 users, 9 security groups, and 32 automation scenarios.</span>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-[12px] font-bold text-[#ef233c] uppercase tracking-widest">Anti-Sabotage</span>
                  <span className="text-slate-900 font-bold text-lg">Advanced Protection</span>
                  <span className="text-slate-500 text-sm leading-relaxed">Tamper alarm, jamming detection, and hardware authentication.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Fallback generic specs for other products
  return (
    <section className="w-full bg-[#FAFAFA] border-t border-slate-100 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#0f2b4c] tracking-tight mb-4">Premium Ecosystem Features</h2>
          <p className="text-slate-500">Engineered for reliability, designed for modern spaces.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8 text-[#0f2b4c]" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-3">Bank-Grade Security</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Encrypted Jeweller radio protocol ensures your data is protected against interception and forgery.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-[#0f2b4c]" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-3">Instant Installation</h3>
            <p className="text-slate-500 text-sm leading-relaxed">SmartBracket mounts and intuitive app pairing mean devices are online in seconds.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Plus className="w-8 h-8 text-[#0f2b4c]" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-3">Scalable Ecosystem</h3>
            <p className="text-slate-500 text-sm leading-relaxed">Add sensors, sirens, and automation devices effortlessly as your security needs grow.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
