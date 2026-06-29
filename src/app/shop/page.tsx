"use client";

import React, { useState, useEffect, useMemo } from 'react';
import Header from "@/components/Header";
import {
  ShoppingBag, X, ChevronRight, Check, Info, Search,
  SlidersHorizontal, LayoutGrid, List, ArrowUpDown,
  Plus, Minus, Trash2, ShieldCheck, Wifi, Battery,
  Cpu, Activity, Zap, Compass, Filter
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  images: {
    white: string;
    black: string;
  };
  tagline: string;
  description: string;
  badge?: string;
  specs: {
    range: string;
    battery: string;
    grade: string;
    channels: string;
  };
  colors: string[];
}

const shopProducts: Product[] = [
  {
    id: "hub-2-plus",
    name: "Hub 2 Plus",
    category: "Hubs",
    price: 499.00,
    images: {
      white: "/hub_white.png",
      black: "/hub_white.png" // We will apply CSS invert to create the black version dynamically
    },
    tagline: "The central brain with LTE and Wi-Fi.",
    description: "Control panel with support for photo verification of alarms, 4 communication channels, and up to 200 connected devices.",
    badge: "Flagship",
    specs: {
      range: "2,000 m",
      battery: "15 hrs backup",
      grade: "Grade 2",
      channels: "Wi-Fi, Ethernet, 2x LTE"
    },
    colors: ["white", "black"]
  },
  {
    id: "motioncam",
    name: "MotionCam Outdoor",
    category: "Detectors",
    price: 199.00,
    images: {
      white: "/motion_white.png",
      black: "/motion_white.png"
    },
    tagline: "Wireless outdoor motion detector.",
    description: "Detects intrusion from the first steps and verifies it with a series of photos. Works in temperatures from -25°C to +60°C.",
    badge: "New",
    specs: {
      range: "1,700 m",
      battery: "3 years",
      grade: "Grade 2",
      channels: "Jeweller, Wings"
    },
    colors: ["white", "black"]
  },
  {
    id: "doorprotect-plus",
    name: "DoorProtect Plus",
    category: "Detectors",
    price: 89.00,
    images: {
      white: "/door_white.png",
      black: "/door_white.png"
    },
    tagline: "Opening, tilt, and shock detector.",
    description: "Protects doors and windows. Detects tilt angle changes and shocks, notifying users instantly of forced entries.",
    specs: {
      range: "1,200 m",
      battery: "5 years",
      grade: "Grade 2",
      channels: "Jeweller protocol"
    },
    colors: ["white", "black"]
  },
  {
    id: "fireprotect-2",
    name: "FireProtect 2 (CO)",
    category: "Fire & Gas",
    price: 129.00,
    images: {
      white: "/fire_white.png",
      black: "/fire_white.png"
    },
    tagline: "Wireless smoke and CO detector.",
    description: "A next-generation detector with a patented smoke chamber that does not require cleaning and detects carbon monoxide levels.",
    badge: "Certified",
    specs: {
      range: "1,700 m",
      battery: "10 years",
      grade: "EN 14604",
      channels: "Jeweller protocol"
    },
    colors: ["white", "black"]
  },
  {
    id: "leaksprotect",
    name: "LeaksProtect",
    category: "Water Leak",
    price: 59.00,
    images: {
      white: "/leak_white.png",
      black: "/leak_white.png"
    },
    tagline: "Wireless flood detector.",
    description: "Detects water leaks in seconds. Compact, places easily under washing machines or sinks. Resets automatically when dry.",
    specs: {
      range: "1,300 m",
      battery: "5 years",
      grade: "IP65",
      channels: "Jeweller protocol"
    },
    colors: ["white", "black"]
  },
  {
    id: "spacecontrol",
    name: "SpaceControl",
    category: "Controls",
    price: 49.00,
    images: {
      white: "/control_white.png",
      black: "/control_white.png"
    },
    tagline: "Four-button key fob with feedback.",
    description: "Arm or disarm your security system with one click. Features a panic button to call help in emergencies.",
    specs: {
      range: "1,300 m",
      battery: "5 years",
      grade: "Grade 2",
      channels: "Jeweller protocol"
    },
    colors: ["white", "black"]
  }
];

const categories = ["All", "Hubs", "Detectors", "Fire & Gas", "Water Leak", "Controls"];

interface CartItem {
  product: Product;
  color: string;
  quantity: number;
}

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [compareList, setCompareList] = useState<Product[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (isCartOpen || quickViewProduct || isCompareModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isCartOpen, quickViewProduct, isCompareModalOpen]);

  const getProductColor = (productId: string) => {
    return selectedColors[productId] || "white";
  };

  const handleColorChange = (productId: string, color: string) => {
    setSelectedColors(prev => ({ ...prev, [productId]: color }));
  };

  const handleToggleCompare = (product: Product) => {
    setCompareList(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      }
      if (prev.length >= 3) {
        alert("You can compare up to 3 products at a time.");
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromCompare = (id: string) => {
    setCompareList(prev => prev.filter(p => p.id !== id));
  };

  const addToCart = (product: Product, color: string) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id && item.color === color);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product, color, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartQuantity = (index: number, delta: number) => {
    setCartItems(prev => {
      const updated = [...prev];
      updated[index].quantity += delta;
      if (updated[index].quantity <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      return updated;
    });
  };

  const removeFromCart = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const cartTotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }, [cartItems]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: shopProducts.length };
    shopProducts.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...shopProducts];
    if (activeCategory !== "All") {
      result = result.filter(p => p.category === activeCategory);
    }
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.tagline.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }
    return result;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#fbfcff] bg-[radial-gradient(#e1e7f0_1px,transparent_1px)] [background-size:32px_32px] text-[#1d1d1f] font-sans antialiased pb-24 transition-colors duration-300">
      <Header />
      <div className="h-28"></div>

      {/* Hero Header Area */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mt-4 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200/60 pb-6 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-red-500">Live Hardware Catalog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black mb-1">
              {activeCategory === "All" ? "Ecosystem Devices" : activeCategory}
            </h1>
            <p className="text-sm font-semibold text-gray-400">
              Professional wireless hardware engineered for high-security applications.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-white hover:bg-black hover:text-white border border-gray-200 text-black px-6 py-3 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ShoppingBag size={15} />
              Shopping Cart
              {cartItems.length > 0 && (
                <span className="bg-red-500 text-white rounded-full text-[9px] w-5 h-5 flex items-center justify-center font-bold absolute -top-1.5 -right-1.5 animate-bounce">
                  {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid: Sidebar + Product Grid */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-10 items-start">

          {/* Sticky Left Sidebar Categories */}
          <aside className="hidden lg:block sticky top-32 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-gray-100/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                <Filter size={12} />
                Categories
              </h3>
              <ul className="space-y-1.5">
                {categories.map(cat => {
                  const isActive = activeCategory === cat;
                  return (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`
                          w-full flex items-center justify-between px-4 py-3 rounded-2xl text-[13px] font-bold transition-all duration-300 group/cat
                          ${isActive
                            ? 'bg-black text-white shadow-lg shadow-black/10'
                            : 'text-gray-500 hover:text-black hover:bg-gray-50'
                          }
                        `}
                      >
                        <span>{cat}</span>
                        <span className={`
                          text-[10px] font-extrabold px-2.5 py-1 rounded-full transition-all duration-300
                          ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-400 group-hover/cat:bg-black/5 group-hover/cat:text-black'}
                        `}>
                          {categoryCounts[cat] || 0}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Compare Quick Widget */}
            {compareList.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-gray-100/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-4">Specs Compare</h3>
                <div className="space-y-2 mb-4">
                  {compareList.map(p => (
                    <div key={p.id} className="flex items-center justify-between text-xs font-bold text-gray-700 bg-gray-50 px-3 py-2 rounded-xl">
                      <span>{p.name}</span>
                      <button onClick={() => removeFromCompare(p.id)} className="text-gray-400 hover:text-black">
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setIsCompareModalOpen(true)}
                  className="w-full bg-black hover:bg-gray-800 text-white text-[11px] font-bold py-2.5 rounded-xl transition-all"
                >
                  Compare Now
                </button>
              </div>
            )}
          </aside>

          {/* Right Area: Grid content */}
          <div className="lg:col-span-3 space-y-8">

            {/* Top Toolbar (Search and Sort) */}
            <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col sm:flex-row items-center justify-between gap-4">

              {/* Category selector for mobile */}
              <div className="lg:hidden w-full overflow-x-auto pb-1 flex gap-1.5 scrollbar-none">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`
                      px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap
                      ${activeCategory === cat ? 'bg-black text-white' : 'bg-gray-50 text-gray-500'}
                    `}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-auto sm:flex-grow max-w-md">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search catalog..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 text-[13px] pl-10 pr-4 py-2.5 rounded-2xl outline-none border border-gray-100 focus:bg-white focus:border-black/20 focus:ring-1 focus:ring-black/10 transition-all font-semibold text-black"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black">
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Sort + Layout controls */}
              <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
                <div className="flex items-center bg-gray-50 border border-gray-100 rounded-2xl px-4 py-2">
                  <ArrowUpDown size={14} className="text-gray-400 mr-2" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-[12px] font-bold outline-none cursor-pointer pr-1 text-black"
                  >
                    <option value="featured">Sort: Featured</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                  </select>
                </div>

                <div className="flex items-center bg-gray-50 border border-gray-100 rounded-2xl p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded-xl transition-all ${viewMode === "grid" ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-black'}`}
                  >
                    <LayoutGrid size={15} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded-xl transition-all ${viewMode === "list" ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-black'}`}
                  >
                    <List size={15} />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Grid Render */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl p-16 text-center border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                <SlidersHorizontal size={40} className="mx-auto text-gray-300 mb-4 animate-pulse" />
                <h3 className="text-lg font-bold mb-2">No hardware found</h3>
                <p className="text-gray-400 text-xs max-w-sm mx-auto mb-6">No devices fit the active query. Try clearing the search or category filters.</p>
                <button
                  onClick={() => { setActiveCategory("All"); setSearchQuery(""); setSortBy("featured"); }}
                  className="bg-black text-white text-[12px] font-bold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Reset Catalogue
                </button>
              </div>
            ) : (
              <div className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "flex flex-col gap-5"
              }>
                {filteredProducts.map(product => {
                  const activeColor = getProductColor(product.id);
                  const isComparing = !!compareList.find(p => p.id === product.id);

                  return (
                    <div
                      key={product.id}
                      className={`
                        group bg-white rounded-3xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.06)] hover:border-gray-200 flex flex-col
                        ${viewMode === "list" ? "md:flex-row md:items-center" : ""}
                      `}
                    >
                      {/* Image Frame */}
                      <div className={`
                        relative bg-[#f8f9fa] flex items-center justify-center p-8 overflow-hidden flex-shrink-0 transition-colors duration-500
                        ${viewMode === "grid" ? "h-64 w-full" : "h-56 w-full md:w-64"}
                      `}>
                        {product.badge && (
                          <span className="absolute top-4 left-4 bg-black text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full z-10">
                            {product.badge}
                          </span>
                        )}

                        {/* Interactive Blur Glow behind the device on hover */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 ease-out z-0"></div>

                        {/* Image asset with dynamic filter for Black color */}
                        <img
                          src={product.images.white}
                          alt={product.name}
                          onClick={() => setQuickViewProduct(product)}
                          className={`
                            max-w-[70%] max-h-[70%] object-contain transition-all duration-700 ease-out cursor-pointer z-10 group-hover:scale-105
                            ${activeColor === "black" ? "brightness-90 contrast-125 invert-[0.85] hue-rotate-180" : ""}
                          `}
                        />

                        {/* Actions Overlay */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                          <button
                            onClick={() => handleToggleCompare(product)}
                            className={`
                              flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-bold border transition-all duration-300
                              ${isComparing
                                ? 'bg-black border-black text-white shadow-md shadow-black/10'
                                : 'bg-white/90 border-gray-200 text-gray-500 hover:text-black hover:bg-white'
                              }
                            `}
                          >
                            {isComparing ? <Check size={10} /> : null}
                            {isComparing ? "Comparing" : "Compare"}
                          </button>

                          <button
                            onClick={() => setQuickViewProduct(product)}
                            className="w-7.5 h-7.5 rounded-xl bg-white/90 text-gray-400 hover:text-black border border-gray-200 flex items-center justify-center transition-all duration-300 hover:scale-105"
                          >
                            <Info size={13} />
                          </button>
                        </div>
                      </div>

                      {/* Info Frame */}
                      <div className="p-6 flex flex-col flex-grow w-full">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400">{product.category}</span>

                          {/* Color Switcher Dots */}
                          <div className="flex gap-1.5">
                            {product.colors.map(color => (
                              <button
                                key={color}
                                onClick={() => handleColorChange(product.id, color)}
                                className={`
                                  w-4 h-4 rounded-full border transition-all duration-300 hover:scale-115
                                  ${color === "white" ? "bg-white border-gray-200" : "bg-black border-black"}
                                  ${activeColor === color ? "ring-2 ring-blue-500 ring-offset-1 scale-105" : ""}
                                `}
                              />
                            ))}
                          </div>
                        </div>

                        <h3
                          onClick={() => setQuickViewProduct(product)}
                          className="text-lg font-black text-black leading-tight hover:text-blue-600 transition-colors cursor-pointer"
                        >
                          {product.name}
                        </h3>
                        <p className="text-[12px] font-semibold text-blue-600 mb-3">{product.tagline}</p>
                        <p className="text-[12.5px] text-gray-500 leading-relaxed mb-4 line-clamp-2">{product.description}</p>

                        {/* Inline specs table */}
                        <div className="grid grid-cols-3 gap-1.5 py-3 border-t border-b border-gray-100 mb-4 text-center">
                          <div className="flex flex-col items-center justify-center p-1 rounded-xl bg-gray-50/50">
                            <Wifi size={12} className="text-gray-400 mb-0.5" />
                            <span className="text-[9px] font-extrabold text-gray-800 line-clamp-1">{product.specs.range}</span>
                          </div>
                          <div className="flex flex-col items-center justify-center p-1 rounded-xl bg-gray-50/50">
                            <Battery size={12} className="text-gray-400 mb-0.5" />
                            <span className="text-[9px] font-extrabold text-gray-800 line-clamp-1">{product.specs.battery}</span>
                          </div>
                          <div className="flex flex-col items-center justify-center p-1 rounded-xl bg-gray-50/50">
                            <ShieldCheck size={12} className="text-gray-400 mb-0.5" />
                            <span className="text-[9px] font-extrabold text-gray-800 line-clamp-1">{product.specs.grade}</span>
                          </div>
                        </div>

                        {/* Price & Add to Cart */}
                        <div className="flex items-center justify-between mt-auto">
                          <div>
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider block">Retail Price</span>
                            <span className="text-lg font-black text-black">${product.price.toFixed(2)}</span>
                          </div>

                          <button
                            onClick={() => addToCart(product, activeColor)}
                            className="bg-black hover:bg-gray-800 text-white text-[12px] font-bold px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:scale-105 active:scale-95"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Comparison Bottom Panel */}
      {isCompareModalOpen && (
        <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCompareModalOpen(false)}></div>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col animate-in zoom-in-95 duration-200 z-10">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Compass size={20} />
                Technical Comparison
              </h2>
              <button onClick={() => setIsCompareModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-black">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 font-bold text-gray-400 text-xs uppercase w-1/4">Specification</th>
                    {compareList.map(product => (
                      <th key={product.id} className="py-4 px-4 w-1/4">
                        <div className="flex flex-col items-center text-center">
                          <img src={product.images.white} alt={product.name} className="w-16 h-16 object-contain mb-3" />
                          <span className="font-extrabold text-sm text-black">{product.name}</span>
                          <span className="text-xs text-blue-600 font-bold mt-1">${product.price.toFixed(2)}</span>
                        </div>
                      </th>
                    ))}
                    {Array.from({ length: 3 - compareList.length }).map((_, i) => (
                      <th key={i} className="py-4 px-4 text-center text-gray-300 text-xs w-1/4">
                        Empty Slot
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-gray-500 text-sm">Category</td>
                    {compareList.map(product => (
                      <td key={product.id} className="py-4 px-4 text-sm font-semibold text-gray-800 text-center">{product.category}</td>
                    ))}
                    {Array.from({ length: 3 - compareList.length }).map((_, i) => <td key={i} />)}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-gray-500 text-sm">Wireless Range</td>
                    {compareList.map(product => (
                      <td key={product.id} className="py-4 px-4 text-sm font-semibold text-gray-800 text-center">{product.specs.range}</td>
                    ))}
                    {Array.from({ length: 3 - compareList.length }).map((_, i) => <td key={i} />)}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-gray-500 text-sm">Battery Life</td>
                    {compareList.map(product => (
                      <td key={product.id} className="py-4 px-4 text-sm font-semibold text-gray-800 text-center">{product.specs.battery}</td>
                    ))}
                    {Array.from({ length: 3 - compareList.length }).map((_, i) => <td key={i} />)}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-gray-500 text-sm">Security Level</td>
                    {compareList.map(product => (
                      <td key={product.id} className="py-4 px-4 text-sm font-semibold text-gray-800 text-center">{product.specs.grade}</td>
                    ))}
                    {Array.from({ length: 3 - compareList.length }).map((_, i) => <td key={i} />)}
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 font-bold text-gray-500 text-sm">Protocols Supported</td>
                    {compareList.map(product => (
                      <td key={product.id} className="py-4 px-4 text-sm font-semibold text-gray-800 text-center">{product.specs.channels}</td>
                    ))}
                    {Array.from({ length: 3 - compareList.length }).map((_, i) => <td key={i} />)}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Quick View Side Drawer */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setQuickViewProduct(null)}></div>
          <div className="relative w-full max-w-xl bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-400">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Info size={18} />
                Technical Details
              </h2>
              <button onClick={() => setQuickViewProduct(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-black">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-56 h-56 bg-gray-50 rounded-3xl flex items-center justify-center p-6 mb-6">
                  <img
                    src={quickViewProduct.images.white}
                    alt={quickViewProduct.name}
                    className={`
                      max-w-full max-h-full object-contain
                      ${getProductColor(quickViewProduct.id) === "black" ? "brightness-90 contrast-125 invert-[0.85] hue-rotate-180" : ""}
                    `}
                  />
                </div>

                {quickViewProduct.badge && (
                  <span className="bg-black text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                    {quickViewProduct.badge}
                  </span>
                )}

                <h3 className="text-2xl font-black mb-1">{quickViewProduct.name}</h3>
                <p className="text-sm font-semibold text-blue-600 mb-4">{quickViewProduct.tagline}</p>
                <p className="text-sm text-gray-500 leading-relaxed max-w-md">{quickViewProduct.description}</p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-400 pb-2 border-b border-gray-100">Specifications Sheet</h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Wireless Range</span>
                    <span className="text-sm font-bold text-gray-800">{quickViewProduct.specs.range}</span>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Battery autonomy</span>
                    <span className="text-sm font-bold text-gray-800">{quickViewProduct.specs.battery}</span>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Security Standard</span>
                    <span className="text-sm font-bold text-gray-800">{quickViewProduct.specs.grade} compliant</span>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <span className="text-[10px] font-bold text-gray-400 uppercase block mb-1">Backup protocols</span>
                    <span className="text-sm font-bold text-gray-800">{quickViewProduct.specs.channels}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase block mb-0.5">Price</span>
                <span className="text-2xl font-black text-black">${quickViewProduct.price.toFixed(2)}</span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleToggleCompare(quickViewProduct)}
                  className="bg-white border border-gray-200 text-black hover:bg-gray-50 text-[13px] font-bold px-6 py-3 rounded-full transition-all"
                >
                  {compareList.find(p => p.id === quickViewProduct.id) ? "Comparing" : "Compare"}
                </button>
                <button
                  onClick={() => { addToCart(quickViewProduct, getProductColor(quickViewProduct.id)); setQuickViewProduct(null); }}
                  className="bg-black text-white hover:bg-gray-800 text-[13px] font-bold px-6 py-3 rounded-full transition-all"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Panel */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsCartOpen(false)}></div>
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag size={20} />
                Your Ecosystem Cart
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-black">
                <X size={20} />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                  <ShoppingBag size={36} className="text-gray-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-black">Your cart is empty</h3>
                <p className="text-gray-400 text-xs mb-8 max-w-xs mx-auto">Build your security ecosystem by selecting components from the catalogue.</p>
                <button onClick={() => setIsCartOpen(false)} className="bg-black text-white font-bold py-3.5 px-8 rounded-xl hover:bg-gray-800 transition-colors shadow-lg">
                  Explore Products
                </button>
              </div>
            ) : (
              <>
                <div className="flex-grow overflow-y-auto p-6 space-y-6">
                  {cartItems.map((item, index) => (
                    <div key={`${item.product.id}-${item.color}`} className="flex gap-4 pb-6 border-b border-gray-100">
                      <div className="w-20 h-20 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center p-2 flex-shrink-0">
                        <img
                          src={item.product.images.white}
                          alt={item.product.name}
                          className={`
                            max-w-full max-h-full object-contain
                            ${item.color === "black" ? "brightness-90 contrast-125 invert-[0.85] hue-rotate-180" : ""}
                          `}
                        />
                      </div>

                      <div className="flex-1 flex flex-col min-w-0">
                        <h4 className="font-bold text-sm text-black truncate mb-0.5">{item.product.name}</h4>
                        <span className="text-[10px] font-semibold text-gray-400 capitalize mb-2">Color: {item.color}</span>

                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center border border-gray-200 rounded-full p-0.5 bg-gray-50">
                            <button
                              onClick={() => updateCartQuantity(index, -1)}
                              className="w-6 h-6 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-black"
                            >
                              <Minus size={10} />
                            </button>
                            <span className="text-[11px] font-bold px-3 text-black">{item.quantity}</span>
                            <button
                              onClick={() => updateCartQuantity(index, 1)}
                              className="w-6 h-6 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-500 hover:text-black"
                            >
                              <Plus size={10} />
                            </button>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="font-bold text-sm text-black">${(item.product.price * item.quantity).toFixed(2)}</span>
                            <button
                              onClick={() => removeFromCart(index)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-500">Subtotal</span>
                    <span className="text-xl font-extrabold text-black">${cartTotal.toFixed(2)}</span>
                  </div>
                  <p className="text-[11px] text-gray-400">Shipping and taxes will be calculated at checkout.</p>
                  <button className="w-full bg-black text-white hover:bg-gray-800 font-bold py-4 rounded-2xl transition-all shadow-lg shadow-black/10">
                    Proceed to Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8 border-t border-gray-200 mt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="font-extrabold text-xl tracking-tighter text-black mb-4 font-black">StarArc Systems</div>
              <p className="text-gray-400 text-xs mb-4 max-w-xs leading-relaxed font-semibold">Professional wireless security systems and smart home automation catalogue.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-black text-xs uppercase tracking-wider">Products</h4>
              <ul className="space-y-3 text-xs text-gray-500 font-semibold">
                <li><a href="#" className="hover:text-black transition-colors">Security Hubs</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Intrusion Detection</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Fire Detection</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Water Leak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-black text-xs uppercase tracking-wider">Support</h4>
              <ul className="space-y-3 text-xs text-gray-500 font-semibold">
                <li><a href="#" className="hover:text-black transition-colors">Support Center</a></li>
                <li><a href="#" className="hover:text-black transition-colors">User Manuals</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Warranty Info</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-black text-xs uppercase tracking-wider">Stay Updated</h4>
              <p className="text-gray-400 text-xs mb-4 font-semibold">Subscribe to our newsletter for the latest security updates.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Your email" className="bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-2.5 w-full text-xs outline-none focus:ring-1 focus:ring-black transition-all" />
                <button className="bg-black text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-gray-800 transition-colors">Join</button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-semibold">
            <p>© 2026 StarArc Systems. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-black transition-colors">End User License Agreement</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
