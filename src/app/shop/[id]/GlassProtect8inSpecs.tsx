import React from 'react';
import { 
  MousePointer2, 
  PersonStanding, 
  BellOff, 
  Battery, 
  MonitorSmartphone, 
  Activity, 
  ToggleLeft, 
  ShieldCheck, 
  QrCode, 
  Sun, 
  Gem 
} from 'lucide-react';

export function GlassProtect8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'glass-protect-8in' && slug !== 'glass-protect') return null;

  return (
    <section className="w-full bg-white font-sans text-black py-12 md:py-16 border-t border-slate-200 overflow-hidden">
      {/* Container mimics PDF structure but spans full width responsively */}
      <div className="max-w-[1440px] mx-auto w-full flex flex-col px-4 md:px-8 lg:px-16">
        
        {/* PAGE 1 CONTENT */}
        <div className="flex flex-col gap-12">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start w-full relative">
            {/* Left Header */}
            <div className="flex flex-col max-w-full md:max-w-[450px]">
              <div className="text-[40px] md:text-[52px] font-black tracking-tighter mb-6 md:mb-8 leading-none">AJAX</div>
              <h1 className="text-[32px] md:text-[44px] font-bold mb-2 leading-tight">GlassProtect Jeweller</h1>
              <p className="text-[22px] mb-8">Wireless indoor glass break detector.</p>
              
              <div className="flex flex-row items-center gap-6">
                <img src="/images/products/glass-protect-8in/image_1_2.png" className="w-[85px] h-[85px] mix-blend-multiply" alt="QR Code" />
                <div className="text-[15px] leading-snug">
                  <p>An Ajax hub is required for operation.</p>
                  <p>Find the detailed information on the</p>
                  <p>device at the link:</p>
                  <div className="flex items-center gap-2 mt-2 font-bold hover:underline cursor-pointer text-black">
                    <MousePointer2 className="w-4 h-4 -rotate-90" />
                    <a href="http://ajax.systems/support/devices/glassprotect/" target="_blank" rel="noreferrer">http://ajax.systems/support/devices/glassprotect/</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Header */}
            <div className="flex flex-col items-center md:items-end mt-16 md:mt-0 relative w-full md:w-[350px]">
              {/* Jeweller Badge */}
              <div className="bg-[#2b2b2b] text-white px-5 py-2 rounded-[4px] flex items-center gap-2 absolute -top-8 right-0 md:-top-4 md:-right-4 lg:-right-8">
                <Gem className="w-5 h-5" />
                <span className="font-semibold text-[17px] tracking-wide">Jeweller</span>
              </div>
              
              <div className="flex flex-row items-center gap-6 mt-12 md:mt-16 md:mr-12">
                <img src="/images/products/glass-protect-8in/image_1_1.jpeg" className="h-[240px] md:h-[280px] object-contain drop-shadow-xl" alt="GlassProtect" />
                
                <div className="flex flex-col gap-6">
                  <div className="w-[65px] h-[65px] rounded-full border border-black flex flex-col items-center justify-center text-[9px] text-center p-1 leading-tight">
                    <span className="text-[17px] font-bold">2</span>
                    <span>GRADE</span>
                    <span>EN 50131</span>
                  </div>
                  <div className="w-[65px] h-[65px] rounded-full border border-black flex flex-col items-center justify-center text-[9px] text-center p-1 leading-tight">
                    <span>PD 6662</span>
                    <span>2017</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-8">
            <h2 className="text-[28px] md:text-[32px] font-bold mb-8 md:mb-10">Key features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 md:gap-y-10">
               <div className="flex items-start gap-4">
                 <PersonStanding className="w-6 h-6 shrink-0 mt-1" strokeWidth={1.2} />
                 <p className="text-[16px] font-normal">Up to 9 m glass break detection distance with 180° horizontal detection angle</p>
               </div>
               <div className="flex items-start gap-4">
                 <Activity className="w-6 h-6 shrink-0 mt-1" strokeWidth={1.2} />
                 <p className="text-[16px] font-normal">Two-factor glass break verification algorithm: by low and high frequencies</p>
               </div>
               <div className="flex items-start gap-4">
                 <BellOff className="w-6 h-6 shrink-0 mt-1" strokeWidth={1.2} />
                 <p className="text-[16px] font-normal">Filter for false alarms caused by dogs barking or the sound of passing trucks</p>
               </div>
               <div className="flex items-start gap-4">
                 <ToggleLeft className="w-6 h-6 shrink-0 mt-1" strokeWidth={1.2} />
                 <p className="text-[16px] font-normal">Additional NC input for connecting a third-party detector</p>
               </div>
               <div className="flex items-start gap-4">
                 <Battery className="w-6 h-6 shrink-0 mt-1" strokeWidth={1.2} />
                 <p className="text-[16px] font-normal">Up to 7 years of operation on pre-installed battery</p>
               </div>
               <div className="flex items-start gap-4">
                 <ShieldCheck className="w-6 h-6 shrink-0 mt-1" strokeWidth={1.2} />
                 <p className="text-[16px] font-normal">Up to 1,000 m of two-way encrypted wireless communication</p>
               </div>
               <div className="flex items-start gap-4">
                 <MonitorSmartphone className="w-6 h-6 shrink-0 mt-1" strokeWidth={1.2} />
                 <p className="text-[16px] font-normal">Configuring in the Ajax mobile and desktop apps</p>
               </div>
               <div className="flex items-start gap-4">
                 <QrCode className="w-6 h-6 shrink-0 mt-1" strokeWidth={1.2} />
                 <p className="text-[16px] font-normal">Pairing with the security system via QR code</p>
               </div>
            </div>
          </div>

          {/* Coverage Angle */}
          <div className="mt-12 md:mt-8">
            <h2 className="text-[28px] md:text-[32px] font-bold mb-8 md:mb-10">Glass break sensor coverage angle</h2>
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 md:px-8">
              {/* Left Diagram Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img src="/images/products/glass-protect-8in/image_1_4.jpeg" className="w-[300px] object-contain mix-blend-multiply" alt="180° Coverage" />
              </div>
              {/* Right Diagram (CSS) */}
              <div className="w-full md:w-1/2 flex flex-col items-center">
                 <div className="w-[300px] flex flex-col font-sans">
                   <div className="flex w-full h-[120px] border border-black relative">
                      <div className="w-1/3 border-r border-black relative">
                         <div className="absolute left-0 top-1 bottom-1 w-[6px] bg-black"></div>
                      </div>
                      <div className="w-1/3 border-r border-black"></div>
                      <div className="w-1/3 relative flex justify-center items-center">
                         <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center -mt-8 -mr-8">
                           <Sun className="w-6 h-6" strokeWidth={1} />
                         </div>
                      </div>
                   </div>
                   <div className="flex justify-between w-full mt-2 text-[12px] text-slate-500 font-medium">
                      <span>0 m</span>
                      <span>3 m</span>
                      <span>6 m</span>
                      <span>9 m</span>
                   </div>
                   <div className="w-full mt-4 relative flex items-center justify-center">
                      <div className="w-full h-px bg-slate-400"></div>
                      <div className="absolute left-0 w-2 h-2 border-l border-b border-slate-400 rotate-45"></div>
                      <div className="absolute right-0 w-2 h-2 border-r border-t border-slate-400 rotate-45"></div>
                      <div className="bg-white px-3 absolute z-10 text-[12px] font-medium text-slate-800">9 m</div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 2 & 3 CONTENT */}
        <div className="flex flex-col gap-12 mt-32">
          
          {/* Jeweller Communication Tech header */}
          <div className="flex flex-col items-center max-w-[800px] mx-auto w-full">
            <div className="flex items-center w-full justify-between gap-2 md:gap-4 relative mb-12">
              <img src="/images/products/glass-protect-8in/image_2_5.jpeg" className="w-[60px] md:w-[80px] object-contain drop-shadow-md" alt="Hub" />
              <div className="flex-1 border-t-2 border-dashed border-slate-300"></div>
              <div className="flex flex-col items-center px-2 md:px-4 text-center">
                <div className="flex items-center gap-2">
                  <Gem className="w-6 h-6 md:w-10 md:h-10 shrink-0" strokeWidth={1} />
                  <span className="text-[24px] md:text-[36px] font-bold">Jeweller</span>
                </div>
                <span className="text-[14px] md:text-[20px] font-semibold tracking-tight">communication technology</span>
              </div>
              <div className="flex-1 border-t-2 border-dashed border-slate-300"></div>
              <img src="/images/products/glass-protect-8in/image_1_3.jpeg" className="h-[40px] md:h-[60px] object-contain" alt="Detector side" />
            </div>

            <p className="text-[16px] leading-relaxed mb-6 text-black font-normal">
              <strong>Jeweller</strong> is a <strong>two-way wireless protocol</strong> that provides fast and reliable communication between hub and connected devices. The protocol delivers instant data-rich alarms: security companies and users know which device was triggered, when and where it happened.
            </p>
            <p className="text-[16px] leading-relaxed text-black font-normal">
              Jeweller features <strong>encryption</strong> and <strong>authentication</strong> to prevent forgery, and <strong>polling</strong> to display devices' status in real time. Supporting <strong>up to 1,000 m</strong> of wireless connectivity, Jeweller is ready to protect facilities and deliver <strong>the best user experience</strong> for both end users and installers.
            </p>
          </div>

          {/* Technical Specifications Table */}
          <div className="mt-16">
            <h2 className="text-[28px] md:text-[36px] font-bold mb-8">Technical specifications</h2>
            
            <div className="w-full flex flex-col md:flex-row border-t border-slate-300">
              {/* Left Column */}
              <div className="w-full md:w-1/2 flex flex-col md:border-r border-slate-300">
                {/* Row 1 Left */}
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 font-normal leading-snug">Compliance with standards</div>
                  <div className="w-1/2 md:w-[55%] font-bold text-[13px] md:text-[15px] text-black leading-snug break-words">
                    EN 50131 (Grade 2)<br/>
                    PD 6662:2017
                  </div>
                </div>
              </div>
              {/* Right Column */}
              <div className="w-full md:w-1/2 flex flex-col">
                {/* Row 1 Right */}
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 md:pl-6 font-normal leading-snug">Compatibility</div>
                  <div className="w-1/2 md:w-[55%] text-[13px] md:text-[15px] text-black leading-snug break-words">
                    <strong>Hubs</strong><br/>
                    all Ajax hubs<br/><br/>
                    <strong>Range extenders</strong><br/>
                    all Ajax radio signal range extenders
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="w-full flex flex-col md:flex-row">
              {/* Left Column */}
              <div className="w-full md:w-1/2 flex flex-col md:border-r border-slate-300">
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 font-normal leading-snug">Communication with control panel and range extenders</div>
                  <div className="w-1/2 md:w-[55%] text-[13px] md:text-[15px] text-black leading-snug break-words">
                    <div className="flex items-center gap-2 mb-6 font-bold">
                      <Gem className="w-4 h-4" /> Jeweller communication technology
                    </div>
                    
                    <strong>Frequency bands</strong><br/>
                    866.0 – 866.5 MHz<br/>
                    868.0 – 868.6 MHz<br/>
                    868.7 – 869.2 MHz<br/>
                    905.0 – 926.5 MHz<br/>
                    915.85 – 926.5 MHz<br/>
                    921.0 – 922.0 MHz<br/>
                    <span className="text-slate-500">Depends on the region of sales</span>
                    <br/><br/>
                    <strong>Maximum effective radiated power (ERP)</strong><br/>
                    ≤ 20 mW
                  </div>
                </div>
              </div>
              {/* Right Column */}
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 md:pl-6 font-normal leading-snug">Detection</div>
                  <div className="w-1/2 md:w-[55%] text-[13px] md:text-[15px] text-black leading-snug break-words">
                    <strong>Sensing element</strong><br/>
                    electret microphone<br/><br/>
                    <strong>Glass break detection distance</strong><br/>
                    up to 9 m<br/><br/>
                    <strong>Glass break detection angles</strong><br/>
                    horizontal — 180°<br/>
                    vertical — N/A<br/><br/>
                    <strong>Sensitivity</strong><br/>
                    3 levels<br/>
                    <span className="text-slate-500">Adjusted by PRO or user with admin rights in the Ajax app</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="w-full flex flex-col md:flex-row">
              {/* Left Column */}
              <div className="w-full md:w-1/2 flex flex-col md:border-r border-slate-300">
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 font-normal leading-snug">Communication with control panel and range extenders</div>
                  <div className="w-1/2 md:w-[55%] text-[13px] md:text-[15px] text-black leading-snug break-words">
                    <strong>Communication range</strong><br/>
                    up to 1,000 m<br/>
                    <span className="text-slate-500">In an open space</span><br/><br/>
                    <strong>Polling interval</strong><br/>
                    12–300 sec<br/>
                    <span className="text-slate-500">Adjusted by PRO or user with admin rights in the Ajax app</span><br/><br/>
                    <strong>Protection against forgery</strong><br/>
                    Device authentication
                  </div>
                </div>
              </div>
              {/* Right Column */}
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 md:pl-6 font-normal leading-snug">Detection</div>
                  <div className="w-1/2 md:w-[55%] text-[13px] md:text-[15px] text-black leading-snug break-words">
                    <strong>False alarm protection</strong><br/>
                    DualTone<br/>
                    <span className="text-slate-500">Two-factor glass break verification software algorithm: by low and high frequencies</span><br/><br/>
                    <strong>Third-party detector connection</strong><br/>
                    wired detector with the normally closed (NC) contact type
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="w-full flex flex-col md:flex-row">
              {/* Left Column */}
              <div className="w-full md:w-1/2 flex flex-col md:border-r border-slate-300">
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 font-normal leading-snug">Power supply</div>
                  <div className="w-1/2 md:w-[55%] text-[13px] md:text-[15px] text-black leading-snug break-words">
                    <strong>Battery type</strong><br/>
                    1 × CR123A<br/>
                    <span className="text-slate-500">Pre-installed</span><br/><br/>
                    <strong>Battery life</strong><br/>
                    up to 7 years
                  </div>
                </div>
              </div>
              {/* Right Column */}
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 md:pl-6 font-normal leading-snug">Installation</div>
                  <div className="w-1/2 md:w-[55%] text-[13px] md:text-[15px] text-black leading-snug break-words">
                    <strong>Operating temperature range</strong><br/>
                    from −10°C to +40°C<br/><br/>
                    <strong>Operating humidity</strong><br/>
                    up to 75%<br/><br/>
                    <strong>Ingress protection</strong><br/>
                    IP50
                  </div>
                </div>
              </div>
            </div>

            {/* Row 5 */}
            <div className="w-full flex flex-col md:flex-row">
              {/* Left Column */}
              <div className="w-full md:w-1/2 flex flex-col md:border-r border-slate-300">
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 font-normal leading-snug">Enclosure</div>
                  <div className="w-1/2 md:w-[55%] text-[13px] md:text-[15px] text-black leading-snug break-words">
                    <strong>Colours</strong><br/>
                    white, black<br/><br/>
                    <strong>Dimensions</strong><br/>
                    Ø 20 × 90 mm<br/><br/>
                    <strong>Weight</strong><br/>
                    30 g
                  </div>
                </div>
              </div>
              {/* Right Column */}
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 md:pl-6 font-normal leading-snug">Complete set</div>
                  <div className="w-1/2 md:w-[55%] text-[13px] md:text-[15px] text-black leading-snug break-words">
                    GlassProtect Jeweller<br/>
                    1 × CR123A<br/>
                    <span className="text-slate-500">Pre-installed</span><br/>
                    SmartBracket<br/>
                    Installation kit<br/>
                    External contact for NC detector<br/>
                    Quick Start Guide
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
