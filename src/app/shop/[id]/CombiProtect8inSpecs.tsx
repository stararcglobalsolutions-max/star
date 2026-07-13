import React from 'react';
import { PersonStanding, Target, Shield, Battery, QrCode } from 'lucide-react';

export function CombiProtect8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'combi-protect-8in' && slug !== 'combi-protect') return null;

  return (
    <section className="w-full bg-white font-sans text-black py-12 md:py-16 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col px-4 md:px-8 lg:px-16">
        
        {/* PAGE 1 CONTENT */}

        {/* 1. Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full relative mb-24">
          
          <div className="flex flex-col w-full lg:w-[45%] xl:w-[40%]">
            <div className="text-[40px] md:text-[52px] font-black tracking-tighter mb-4 leading-none">AJAX</div>
            <div className="text-[16px] font-medium text-slate-500 mb-2 uppercase tracking-wide">Baseline product line</div>
            <h1 className="text-[32px] md:text-[44px] font-bold mb-2 leading-tight">CombiProtect <span className="font-normal">Jeweller</span></h1>
            <p className="text-[20px] md:text-[22px] font-medium text-black">Wireless motion and glass break detector</p>
          </div>

          <div className="w-full lg:w-[40%] flex justify-center mt-12 lg:mt-0 relative">
            <img src="/images/products/combi-protect-8in/m_hero.png" alt="CombiProtect" className="w-[180px] md:w-[220px] object-contain mix-blend-multiply drop-shadow-xl" />
          </div>

          <div className="w-full lg:w-[15%] flex lg:flex-col justify-end lg:justify-start items-center lg:items-end mt-12 lg:mt-0 gap-4">
            <img src="/images/products/combi-protect-8in/m_badges_perfect.png" alt="Certifications" className="w-[80px] md:w-[100px] object-contain mix-blend-multiply" />
          </div>

        </div>

        {/* 2. Motion Detection */}
        <div className="flex flex-col mb-24">
          <div className="flex items-center gap-3 mb-8">
            <PersonStanding className="w-6 h-6" />
            <h2 className="text-[28px] font-bold">Motion detection</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-[60%]">
              <img src="/images/products/combi-protect-8in/m_motion_perfect.png" alt="Motion detection diagrams" className="w-full object-contain mix-blend-multiply drop-shadow-sm" />
            </div>
            <div className="w-full md:w-[40%] flex flex-col justify-center gap-4">
              <div className="flex items-start gap-4">
                <div className="w-[6px] h-[6px] mt-2 rounded-full bg-black shrink-0"></div>
                <p className="text-[16px] leading-relaxed">SmartDetect algorithm to prevent false alarms</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-[6px] h-[6px] mt-2 rounded-full bg-black shrink-0"></div>
                <p className="text-[16px] leading-relaxed">Temperature compensation</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-[6px] h-[6px] mt-2 rounded-full bg-black shrink-0"></div>
                <p className="text-[16px] leading-relaxed">Pet immunity</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Glass Break Detection */}
        <div className="flex flex-col mb-24">
          <div className="flex items-center gap-3 mb-8">
            <Target className="w-6 h-6" />
            <h2 className="text-[28px] font-bold">Glass break detection</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-[60%]">
              <img src="/images/products/combi-protect-8in/m_glass_perfect.png" alt="Glass break detection diagrams" className="w-full object-contain mix-blend-multiply drop-shadow-sm" />
            </div>
            <div className="w-full md:w-[40%] flex flex-col justify-center gap-4">
              <div className="flex items-start gap-4">
                <div className="w-[6px] h-[6px] mt-2 rounded-full bg-black shrink-0"></div>
                <p className="text-[16px] leading-relaxed">DualTone two-factor glass break verification algorithm: by low and high frequencies</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-[6px] h-[6px] mt-2 rounded-full bg-black shrink-0"></div>
                <p className="text-[16px] leading-relaxed">Filter for false alarms caused by dog barking or truck-passing sounds</p>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          
          {/* Row 1, Col 1: Jeweller */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-5 h-5 text-black" />
              <h3 className="text-[20px] font-bold leading-tight">Jeweller<br/>communication technology</h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-[5px] h-[5px] mt-2 rounded-full bg-black shrink-0"></div>
                <p className="text-[15px] leading-relaxed">Up to 1,200 m of radio communication in an open space</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-[5px] h-[5px] mt-2 rounded-full bg-black shrink-0"></div>
                <p className="text-[15px] leading-relaxed">Encryption and device authentication to prevent spoofing</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-[5px] h-[5px] mt-2 rounded-full bg-black shrink-0"></div>
                <p className="text-[15px] leading-relaxed">Regular polling to display current device statuses</p>
              </div>
            </div>
          </div>

          {/* Row 1, Col 2: Flawless autonomy */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Battery className="w-5 h-5 text-black" />
              <h3 className="text-[20px] font-bold leading-tight">Flawless autonomy</h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-[5px] h-[5px] mt-2 rounded-full bg-black shrink-0"></div>
                <p className="text-[15px] leading-relaxed">Up to 5 years of operation</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-[5px] h-[5px] mt-2 rounded-full bg-black shrink-0"></div>
                <p className="text-[15px] leading-relaxed">Pre-installed replaceable battery</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-[5px] h-[5px] mt-2 rounded-full bg-black shrink-0"></div>
                <p className="text-[15px] leading-relaxed">Low battery warning</p>
              </div>
            </div>
          </div>

          {/* Row 2, Col 1: Quick installation */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <QrCode className="w-5 h-5 text-black" />
              <h3 className="text-[20px] font-bold leading-tight">Quick installation and setup</h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-[5px] h-[5px] mt-2 rounded-full bg-black shrink-0"></div>
                <p className="text-[15px] leading-relaxed">Pairing with a hub via QR code</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-[5px] h-[5px] mt-2 rounded-full bg-black shrink-0"></div>
                <p className="text-[15px] leading-relaxed">Remote control and configuration in the app</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-[5px] h-[5px] mt-2 rounded-full bg-black shrink-0"></div>
                <p className="text-[15px] leading-relaxed">Effortless installation and maintenance</p>
              </div>
            </div>
          </div>

          {/* Row 2, Col 2: SmartBracket Graphic */}
          <div className="flex justify-center items-center">
            <img src="/images/products/combi-protect-8in/m_bracket_perfect.png" alt="SmartBracket" className="w-full max-w-[350px] object-contain mix-blend-multiply drop-shadow-md" />
          </div>

        </div>

        {/* PAGE 2 CONTENT */}
        
        {/* Tech Specs 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-slate-300 w-full mb-12">
          
          {/* Row 1 */}
          <div className="flex flex-col p-6 border-b lg:border-r border-slate-300">
            <div className="text-[16px] text-slate-500 font-medium mb-2">Compliance</div>
            <div className="text-[14px] text-black font-medium leading-snug mb-8">
              EN 50131-2-2 (Grade 2)<br/>
              PD 6662:2017
            </div>
            <div className="text-[16px] text-slate-500 font-medium mb-2">Compatibility</div>
            <div className="text-[14px] text-black leading-snug">
              <strong>Hubs</strong><br/>
              Hub, Hub Plus, Hub 2 (2G),<br/>
              Hub 2 (4G), Hub 2 Plus,<br/>
              Hub Hybrid (2G), Hub Hybrid (4G)<br/><br/>
              <strong>Range extenders</strong><br/>
              ReX, ReX 2
            </div>
          </div>

          <div className="flex flex-col p-6 border-b lg:border-r border-slate-300">
            <div className="text-[16px] text-slate-500 font-medium mb-2">Communication with control panel</div>
            <div className="text-[14px] text-black leading-snug">
              <strong>Jeweller communication technology</strong><br/><br/>
              <strong>Frequency bands</strong><br/>
              866.0–866.5 MHz<br/>
              868.0–868.6 MHz<br/>
              868.7–869.2 MHz<br/>
              905.0–926.5 MHz<br/>
              915.85–926.5 MHz<br/>
              921.0–922.0 MHz<br/>
              <span className="text-slate-500">Depends on the region of sales.</span><br/><br/>
              <strong>Jeweller communication range</strong><br/>
              up to 1,200 m<br/>
              <span className="text-slate-500">In an open space.</span>
            </div>
          </div>

          <div className="flex flex-col p-6 border-b lg:border-r border-slate-300">
            <div className="text-[16px] text-slate-500 font-medium mb-2">Motion detection</div>
            <div className="text-[14px] text-black leading-snug">
              <strong>Sensitive element</strong><br/>
              1 × PIR sensor<br/><br/>
              <strong>Detection distance</strong><br/>
              up to 12 m<br/><br/>
              <strong>Motion detection angle</strong><br/>
              horizontal — 88.5°<br/><br/>
              <strong>Pet immunity</strong><br/>
              weight: up to 20 kg<br/>
              height: up to 50 cm
            </div>
          </div>

          <div className="flex flex-col p-6 border-b border-slate-300">
            <div className="text-[16px] text-slate-500 font-medium mb-2">Glass break detection</div>
            <div className="text-[14px] text-black leading-snug">
              <strong>Sensitive element</strong><br/>
              1 × electret microphone<br/><br/>
              <strong>Detection distance</strong><br/>
              up to 9 m<br/><br/>
              <strong>Horizontal glass break detection angle</strong><br/>
              180°
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col p-6 border-b lg:border-b-0 lg:border-r border-slate-300">
            <div className="text-[16px] text-slate-500 font-medium mb-2">Power supply</div>
            <div className="text-[14px] text-black leading-snug">
              <strong>Battery</strong><br/>
              1 × CR123A<br/>
              <span className="text-slate-500">Pre-installed.</span><br/><br/>
              <strong>Battery life</strong><br/>
              up to 5 years
            </div>
          </div>

          <div className="flex flex-col p-6 border-b lg:border-b-0 lg:border-r border-slate-300">
            <div className="text-[16px] text-slate-500 font-medium mb-2">Installation</div>
            <div className="text-[14px] text-black leading-snug">
              <strong>Operating temperature range</strong><br/>
              from –10°С to +40°С<br/><br/>
              <strong>Operating humidity</strong><br/>
              up to 75%<br/><br/>
              <strong>Protection class</strong><br/>
              IP50
            </div>
          </div>

          <div className="flex flex-col p-6 border-b lg:border-b-0 lg:border-r border-slate-300">
            <div className="text-[16px] text-slate-500 font-medium mb-2">Enclosure</div>
            <div className="text-[14px] text-black leading-snug">
              <strong>Colour</strong><br/>
              white, black<br/><br/>
              <strong>Dimensions</strong><br/>
              110 × 65 × 50 mm<br/><br/>
              <strong>Weight</strong><br/>
              92 g
            </div>
          </div>

          <div className="flex flex-col p-6">
            <div className="text-[16px] text-slate-500 font-medium mb-2">Complete set</div>
            <div className="text-[14px] text-black leading-snug">
              CombiProtect Jeweller<br/>
              1 CR123A battery (pre-installed)<br/>
              SmartBracket mounting panel<br/>
              Installation kit<br/>
              Quick start guide
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between p-8 border-t border-slate-300">
          <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center gap-6">
            <img src="/images/products/combi-protect-8in/m_qr.png" alt="QR Code" className="w-[100px] h-[100px] object-contain mix-blend-multiply" />
            <div className="text-[15px] font-medium text-slate-600">
              For detailed information, scan the QR code or follow the link:<br/>
              <a href="https://support.ajax.systems/manuals/combiprotect/" target="_blank" rel="noreferrer" className="text-black hover:underline mt-1 block">
                support.ajax.systems/manuals/combiprotect/
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end gap-2 mt-6 md:mt-0 text-[15px] font-medium text-slate-600">
            <span>support@ajax.systems</span>
            <span>@AjaxSystemsSupport_Bot</span>
            <span>ajax.systems</span>
          </div>
        </div>

      </div>
    </section>
  );
}
