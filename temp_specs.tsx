import React from 'react';

export function DoorProtectPlus8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'door-protect-plus-8in') return null;

  return (
    <section className="w-full bg-white font-sans text-slate-900 border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 space-y-24">
        
        {/* PAGE 1: HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mt-12 md:w-1/2">
            <div className="flex justify-between items-center w-full mb-12">
              <div className="text-3xl font-black tracking-tighter">AJAX</div>
              <div className="flex items-center gap-2 bg-[#2D2D2D] text-white px-4 py-2 rounded">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                <span className="font-medium tracking-wide uppercase text-sm">Jeweller</span>
              </div>
            </div>

            <h1 className="text-[40px] md:text-[56px] font-bold leading-tight tracking-tight text-[#000000] mb-4">
              DoorProtect Plus <span className="font-normal">Jeweller</span>
            </h1>
            <p className="text-[24px] text-slate-700 leading-snug mb-12">
              Wireless indoor opening detector<br/>with shock and tilt sensors
            </p>

            <div className="flex items-start gap-4">
              <img src="/pdf_images/qr_code.png" alt="QR Code" className="w-24 h-24 mix-blend-multiply opacity-80" />
              <div className="text-[14px] text-slate-600 space-y-1">
                <p>An Ajax hub is required for operation.</p>
                <p>Find the detailed information on the</p>
                <p>device at the link:</p>
                <a href="https://ajax.systems/support/devices/doorprotect-plus/" className="text-slate-800 font-medium hover:underline block mt-2">
                  https://ajax.systems/support/devices/doorprotect-plus/
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-0 flex justify-end md:w-1/2 relative">
            <img 
              src="/pdf_images/door_protect_plus/img_0_1.jpeg" 
              alt="DoorProtect Plus"
              className="h-[500px] object-contain"
            />
            <div className="absolute top-1/4 right-0 flex flex-col gap-4">
               <div className="w-16 h-16 rounded-full border border-slate-300 flex flex-col items-center justify-center text-[10px] leading-tight text-center">
                 <span className="text-[16px]">2</span>
                 GRADE
                 <span className="text-[8px]">EN 50131</span>
               </div>
               <div className="w-16 h-16 rounded-full border border-slate-300 flex flex-col items-center justify-center text-[10px] leading-tight text-center">
                 PD 6662
                 <span>2017</span>
               </div>
            </div>
          </div>
        </div>

        {/* PAGE 1: KEY FEATURES (2-COLUMN) */}
        <div>
          <h2 className="text-[32px] font-bold text-[#000000] mb-12">Key features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 opacity-60 flex-shrink-0">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="8" y="2" width="8" height="20" rx="2"/><path d="M12 6v2m0 8v2"/></svg>
                </div>
                <span className="text-[18px] text-slate-800">Built-in accelerometer for shock and tilt<br/>detection</span>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 opacity-60 flex-shrink-0">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0 1 18 8"/><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"/><path d="M17.4 17.4l4.6 4.6"/><path d="M2 2l20 20"/></svg>
                </div>
                <span className="text-[18px] text-slate-800">Ignores chattering and single shocks to<br/>avoid false alarms</span>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 opacity-60 flex-shrink-0">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="4" width="12" height="16" rx="2"/><path d="M10 2h4M12 9v6M10 13l4-2"/></svg>
                </div>
                <span className="text-[18px] text-slate-800">Up to 5 years of operation on pre-<br/>installed battery</span>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 opacity-60 flex-shrink-0">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M12 16v-4M8 12h8"/></svg>
                </div>
                <span className="text-[18px] text-slate-800">Remote control and setup via the app</span>
              </div>
            </div>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 opacity-60 flex-shrink-0">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                </div>
                <span className="text-[18px] text-slate-800">Adjustable tilt angle for alarm triggering</span>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 opacity-60 flex-shrink-0">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 10V7a4 4 0 1 1 8 0v3"/><rect x="4" y="10" width="16" height="10" rx="2"/></svg>
                </div>
                <span className="text-[18px] text-slate-800">Additional NC input for connecting a<br/>third-party detector</span>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 opacity-60 flex-shrink-0">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                </div>
                <span className="text-[18px] text-slate-800">Up to 1,200 m of two-way encrypted<br/>wireless communication</span>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-8 h-8 opacity-60 flex-shrink-0">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 13h6"/></svg>
                </div>
                <span className="text-[18px] text-slate-800">Pairing via QR code</span>
              </div>
            </div>
          </div>
        </div>

        {/* PAGE 1: JEWELLER COMMUNICATION */} 
        <div>
          <h2 className="text-[32px] font-bold text-[#000000] mb-6">Jeweller communication technology</h2>
          <div className="text-[18px] text-slate-800 leading-relaxed space-y-6">
            <p>
              <span className="font-bold">Jeweller</span> is a <span className="font-bold">two-way wireless protocol</span> that provides fast and reliable communication between hubs and devices. The protocol delivers instant data-rich alarms: security companies and users know which device was triggered, when and where it happened.
            </p>
            <p>
              Jeweller features <span className="font-bold">encryption</span> and <span className="font-bold">authentication</span> to prevent forgery, and <span className="font-bold">polling</span> to display devices’ status in real time. Supporting <span className="font-bold">up to 1,200 m</span> of wireless connectivity, Jeweller is ready to protect facilities and deliver <span className="font-bold">the best user experience</span> for both end users and installers.
            </p>
          </div>
        </div>

        {/* PAGE 2 & 3: TECHNICAL SPECIFICATIONS */}
        <div>
          <h2 className="text-[32px] font-bold text-[#000000] mb-8">Technical specifications</h2>
          <div className="border-t border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
              
              {/* LEFT COLUMN */}
              <div className="flex flex-col divide-y divide-slate-200">
                
                <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] gap-6 p-6">
                  <div className="text-[16px] text-slate-500">Compliance with<br/>standards</div>
                  <div className="text-[16px] text-slate-900 leading-relaxed">
                    EN 50131 (Grade 2)<br/>
                    PD 6662:2017
                  </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] gap-6 p-6">
                  <div className="text-[16px] text-slate-500">Communication with<br/>control panel and<br/>range extenders</div>
                  <div className="text-[16px] text-slate-900 space-y-6">
                    <div>
                       <span className="font-medium">Jeweller<br/>communication<br/>technology</span>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Frequency bands</div>
                      <div className="text-slate-800">
                        866.0 – 866.5 MHz<br/>
                        868.0 – 868.6 MHz<br/>
                        868.7 – 869.2 MHz<br/>
                        905.0 – 926.5 MHz<br/>
                        915.85 – 926.5 MHz<br/>
                        921.0 – 922.0 MHz
                      </div>
                      <div className="text-[14px] text-slate-400 mt-2">
                        Depends on the region<br/>of sales
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Maximum effective<br/>radiated power (ERP)</div>
                      <div className="text-slate-800">≤ 20 mW</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Communication range</div>
                      <div className="text-slate-800">up to 1,200 m</div>
                      <div className="text-[14px] text-slate-400 mt-1">In an open space</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Polling interval</div>
                      <div className="text-slate-800">12–300 sec</div>
                      <div className="text-[14px] text-slate-400 mt-1">
                        Adjusted by PRO or user<br/>with admin rights in the<br/>Ajax app
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Protection against<br/>forgery</div>
                      <div className="text-slate-800">Device authentication</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] gap-6 p-6">
                  <div className="text-[16px] text-slate-500">Power supply</div>
                  <div className="text-[16px] text-slate-900 space-y-6">
                    <div>
                      <div>1 × CR123A, 3 V</div>
                      <div className="text-[14px] text-slate-400 mt-1">Pre-installed</div>
                    </div>
                    <div>
                      <div>up to 5 years of<br/>battery life</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] gap-6 p-6">
                  <div className="text-[16px] text-slate-500">Enclosure</div>
                  <div className="text-[16px] text-slate-900 space-y-6">
                    <div>
                      <div className="font-medium mb-1">Colours</div>
                      <div className="text-slate-800">white, black</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Dimensions</div>
                      <div className="text-slate-800">Ø 20 × 90 mm</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Weight</div>
                      <div className="text-slate-800">29 g</div>
                    </div>
                    <div>
                      <div className="font-medium">Tampering alarm</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col divide-y divide-slate-200">
                
                <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] gap-6 p-6">
                  <div className="text-[16px] text-slate-500">Compatibility</div>
                  <div className="text-[16px] text-slate-900 space-y-6">
                    <div>
                      <div className="font-medium mb-1">Hubs</div>
                      <div className="text-slate-800">all Ajax hubs</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Range extenders</div>
                      <div className="text-slate-800">all Ajax radio signal range<br/>extenders</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] gap-6 p-6">
                  <div className="text-[16px] text-slate-500">Detection</div>
                  <div className="text-[16px] text-slate-900 space-y-6">
                    <div>
                      <div className="font-medium mb-1">Sensing element</div>
                      <div className="text-slate-800">1 × reed switch<br/>1 × accelerometer</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Opening sensors resource</div>
                      <div className="text-slate-800">2,000,000 openings</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Shock sensor sensitivity</div>
                      <div className="text-slate-800">3 levels</div>
                      <div className="text-[14px] text-slate-400 mt-1">
                        Adjusted by PRO or user<br/>with admin rights in the<br/>Ajax app
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Option to ignore single<br/>shocks</div>
                      <div className="text-[14px] text-slate-400 mt-1">
                        Enabled by PRO or user<br/>with admin rights in the<br/>Ajax app
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Tilt sensor activation<br/>threshold</div>
                      <div className="text-slate-800">from 5° to 25°</div>
                      <div className="text-[14px] text-slate-400 mt-1">
                        Adjusted by PRO or user<br/>with admin rights in the<br/>Ajax app
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Third-party detector<br/>connection</div>
                      <div className="text-slate-800">
                        wired detector with the<br/>normally closed (NC)<br/>contact type
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] gap-6 p-6">
                  <div className="text-[16px] text-slate-500">Installation</div>
                  <div className="text-[16px] text-slate-900 space-y-6">
                    <div>
                      <div className="font-medium mb-1">Operating temperature<br/>range</div>
                      <div className="text-slate-800">from –10°С to +40°С</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Operating humidity</div>
                      <div className="text-slate-800">up to 75%</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Ingress protection</div>
                      <div className="text-slate-800">IP50</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] md:grid-cols-[200px_1fr] gap-6 p-6">
                  <div className="text-[16px] text-slate-500">Complete set</div>
                  <div className="text-[16px] text-slate-900 space-y-1">
                    <div>DoorProtect Plus Jeweller</div>
                    <div>2 magnets (small and large)</div>
                    <div>1 × CR123A (pre-installed)</div>
                    <div>SmartBracket</div>
                    <div>Installation kit</div>
                    <div>External contact for NC detector</div>
                    <div>Quick Start Guide</div>
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
