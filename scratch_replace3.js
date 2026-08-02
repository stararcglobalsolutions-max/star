const fs = require('fs');
const path = require('path');
const p = path.resolve('c:/react project/sv2/src/app/shop/[id]/page.tsx');
let content = fs.readFileSync(p, 'utf8');

const replacement = `      <HubJewellerSpecs slug={unwrappedParams.id} product={product} />

      <Footer />
    </div>
  );
}

function HubJewellerSpecs({ slug, product }: { slug: string, product: any }) {
  if (slug !== 'hub-jeweller') return null;

  return (
    <section className="w-full bg-white border-t border-slate-200 py-16 lg:py-24 font-sans">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Top Header */}
        <div className="flex justify-between items-start mb-16">
          <div className="text-4xl lg:text-5xl font-black tracking-tighter" style={{ fontFamily: 'Arial, sans-serif' }}>
            AJAX
          </div>
          <div className="bg-[#2a2d34] text-white px-5 py-2.5 rounded-lg flex items-center gap-2.5 shadow-md">
            <ShieldCheck size={20} className="text-slate-300" />
            <span className="font-medium text-base tracking-wide">Jeweller</span>
          </div>
        </div>

        {/* Hero Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
          <div className="flex flex-col">
            <h2 className="text-4xl lg:text-[42px] text-slate-900 mb-6">
              <strong className="font-bold">Hub</strong> <span className="font-light">Jeweller</span>
            </h2>
            <p className="text-[17px] leading-relaxed font-medium text-slate-800 mb-10 max-w-[340px]">
              Security system control panel. Has two independent communication channels: Ethernet and a 2G SIM card.
            </p>
            

          </div>
          
          <div className="relative flex justify-center items-center">
            {product.image ? (
              <img src={product.image} alt="Hub" className="w-[85%] object-contain drop-shadow-2xl" />
            ) : (
              <div className="w-[280px] h-[280px] bg-[#1a1a1c] rounded-[48px] shadow-2xl flex items-center justify-center relative border border-[#333]">
                <span className="text-slate-400 font-bold tracking-widest text-2xl">AJAX</span>
              </div>
            )}

            <div className="absolute -right-4 lg:-right-8 top-1/4 flex flex-col gap-5">
              <div className="w-[60px] h-[60px] rounded-full border border-slate-300 flex flex-col items-center justify-center bg-white text-[8px] text-slate-700 font-bold text-center leading-[1.1] shadow-sm">
                <span className="text-[14px] font-black leading-none mb-0.5">2</span>
                <span>GRADE</span>
                <span className="text-[6px] text-slate-500 font-normal">EN 50131</span>
              </div>
              <div className="w-[60px] h-[60px] rounded-full border border-slate-300 flex flex-col items-center justify-center bg-white text-[8px] text-slate-700 font-bold text-center leading-[1.1] shadow-sm">
                <span>PD 6662</span>
                <span>2017</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-24">
          <h3 className="text-[28px] font-bold mb-12 text-slate-900 tracking-tight">Key features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-16">
            <div className="flex gap-5 items-center">
               <RefreshCw className="w-8 h-8 text-slate-400 shrink-0" strokeWidth={1.2} />
               <p className="text-[14.5px] text-slate-600 font-medium">Free software updates</p>
            </div>
            <div className="flex gap-5 items-center">
               <MessageSquare className="w-8 h-8 text-slate-400 shrink-0" strokeWidth={1.2} />
               <p className="text-[14.5px] text-slate-600 font-medium leading-snug">Informing users with push<br/>notifications, calls, and SMS</p>
            </div>
            <div className="flex gap-5 items-center">
               <Bell className="w-8 h-8 text-slate-400 shrink-0" strokeWidth={1.2} />
               <p className="text-[14.5px] text-slate-600 font-medium leading-snug">Connection to security company CMS</p>
            </div>
            <div className="flex gap-5 items-center">
               <Wifi className="w-8 h-8 text-slate-400 shrink-0" strokeWidth={1.2} />
               <p className="text-[14.5px] text-slate-600 font-medium leading-snug">Communication with wireless Ajax<br/>devices at a distance of up to 2,000 m</p>
            </div>
            <div className="flex gap-5 items-center">
               <AlertTriangle className="w-8 h-8 text-slate-400 shrink-0" strokeWidth={1.2} />
               <p className="text-[14.5px] text-slate-600 font-medium">Tampering alarm</p>
            </div>
            <div className="flex gap-5 items-center">
               <Activity className="w-8 h-8 text-slate-400 shrink-0" strokeWidth={1.2} />
               <p className="text-[14.5px] text-slate-600 font-medium">Frequency hopping</p>
            </div>
            <div className="flex gap-5 items-center">
               <Smartphone className="w-8 h-8 text-slate-400 shrink-0" strokeWidth={1.2} />
               <p className="text-[14.5px] text-slate-600 font-medium leading-snug">Remote control and setup via the app</p>
            </div>
            <div className="flex gap-5 items-center">
               <QrCode className="w-8 h-8 text-slate-400 shrink-0" strokeWidth={1.2} />
               <p className="text-[14.5px] text-slate-600 font-medium leading-snug">Connecting to Ajax apps via QR code</p>
            </div>
          </div>
        </div>

        {/* Always Online */}
        <div>
          <h3 className="text-[28px] font-bold mb-8 text-slate-900 tracking-tight">Always online</h3>
          <div className="space-y-6 text-[14.5px] text-slate-600 font-medium leading-relaxed max-w-[900px]">
             <p>
               To guarantee prompt alarm transmission to the monitoring station and users, Hub can be connected to two Internet providers at a time via <strong className="text-slate-900">Ethernet</strong> and <strong className="text-slate-900">SIM card (2G)</strong>. Channels work in parallel, and automatic switching between them takes seconds.
             </p>
             <p>
               Hub is connected to the apps, security companies and users through the Ajax Cloud server with an availability of 99.995% in 2021. For more excellent reliability, the servers are located in several data centres. We use the proprietary binary protocol and automatic load balancing for the uninterrupted processing of millions of data packets and the stable operation of security systems.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}`;

content = content.replace(/<Footer \/>\s*<\/div>\s*\);\s*}/g, replacement);

fs.writeFileSync(p, content);
console.log('Appended successfully');
