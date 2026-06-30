import React from 'react';

const storeProducts = [
  {
    id: 1,
    name: "Aura Motion Sensor",
    tagline: "AI-driven spatial awareness.",
    price: "₹149",
    video: "/STARARC_AI_Motion_Sensor_202606271700.mp4"
  },
  {
    id: 2,
    name: "Vault Smart Lock",
    tagline: "Keyless entry. Absolute security.",
    price: "₹299",
    video: "/STARARC_Smart_Lock_product_comme…_202606271811.mp4"
  },
  {
    id: 3,
    name: "Core Architecture",
    tagline: "Precision engineering revealed.",
    price: "₹399",
    video: "https://res.cloudinary.com/dsizhtxet/video/upload/v1782720859/Product_exploded_reveal_animation_202606211249_1_vfpr9p.mp4"
  },
  {
    id: 4,
    name: "Security Hub",
    tagline: "Your entire ecosystem, centralized.",
    price: "₹499",
    video: "/STARARC_Smart_Security_Luxury_Homes_202606271838.mp4"
  }
];

export default function ProductsGridSection() {
  return (
    <section className="relative w-full bg-[#020202] py-24 md:py-32 px-6 md:px-12 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-white/30"></div>
              <p className="font-mono text-xs tracking-widest text-gray-400 uppercase">Hardware</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
              Shop our ecosystem.
            </h2>
          </div>
          <a href="#" className="font-mono text-sm uppercase tracking-widest text-white hover:text-gray-400 transition-colors duration-300 border-b border-white/20 pb-1">
            View All Products
          </a>
        </div>

        {/* E-Commerce Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {storeProducts.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-[#070707] border border-white/5 rounded-2xl overflow-hidden flex flex-col hover:border-white/20 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              
              {/* Media Area */}
              <div className="relative w-full aspect-[4/5] bg-[#111] overflow-hidden">
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Buy Button Overlay (Appears on hover) */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center pointer-events-none">
                  <button className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-lg pointer-events-auto hover:bg-gray-200 hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
              
              {/* Info Area */}
              <div className="p-6 flex flex-col gap-2 z-10 bg-[#070707]">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-bold text-white tracking-tight">{item.name}</h3>
                  <span className="font-mono text-sm text-gray-300">{item.price}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{item.tagline}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
