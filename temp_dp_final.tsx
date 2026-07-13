export function DoorProtectPlus8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'door-protect-plus-8in') return null;

  return (
    <section className="w-full bg-white font-sans text-[#111111]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16 space-y-16">
        
        {/* HEADER SECTION (FULL WIDTH TOP) */}
        <div className="flex justify-between items-start w-full">
          {/* AJAX LOGO */}
          <svg width="120" height="30" viewBox="0 0 100 24" fill="black" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.25 18.25L15 4H10L2.75 18.25H6.75L8.5 14.5H16.5L18.25 18.25H22.25ZM10 11.25L12.5 5.5L15 11.25H10Z"/>
            <path d="M28 18.25H31.5V9.5C31.5 6.5 34.5 4 38 4C41.5 4 44.5 6.5 44.5 9.5V18.25H48V9.5C48 4.25 43.5 0 38 0C32.5 0 28 4.25 28 9.5V18.25Z"/>
            <path d="M55.75 18.25L48.5 4H43.5L36.25 18.25H40.25L42 14.5H50L51.75 18.25H55.75ZM43.5 11.25L46 5.5L48.5 11.25H43.5Z"/>
            <path d="M68 4L63 11L58 4H54L61 13.5L54 23H58L63 16L68 23H72L65 13.5L72 4H68Z"/>
          </svg>

          {/* JEWELLER BADGE */}
          <div className="bg-[#333333] text-white flex items-center gap-3 px-6 py-3 rounded-bl-xl -mt-16 mr-[-3rem] md:mr-[-3rem] lg:mr-[-3rem]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="text-[20px] tracking-wide">Jeweller</span>
          </div>
        </div>

        {/* TITLE & IMAGE (PAGE 1) */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-8">
          {/* Left Column */}
          <div className="w-full md:w-[55%] flex flex-col gap-6">
            <h1 className="text-[48px] md:text-[60px] font-semibold leading-[1.1] tracking-tight text-[#000000]">
              DoorProtect Plus <br/><span className="font-normal">Jeweller</span>
            </h1>
            <p className="text-[24px] text-slate-800 leading-snug max-w-md">
              Wireless indoor opening detector<br/>with shock and tilt sensors
            </p>

            <div className="flex items-start gap-6 mt-8">
              <img src="/pdf_images/qr_code.png" alt="QR Code" className="w-24 h-24 object-contain mix-blend-multiply opacity-80" />
              <div className="text-[15px] text-slate-700 space-y-1 pt-1">
                <p>An Ajax hub is required for operation.</p>
                <p>Find the detailed information on the</p>
                <p>device at the link:</p>
                <div className="flex items-center gap-2 mt-2">
                   <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z"/><rect x="3" y="6" width="12" height="12" rx="2"/></svg>
                   <a href="https://ajax.systems/support/devices/doorprotect-plus/" className="text-slate-900 font-medium border-b border-green-500 pb-0.5 hover:text-green-600 transition-colors">
                     https://ajax.systems/support/devices/doorprotect-plus/
                   </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Image + Badges) */}
          <div className="w-full md:w-[45%] flex justify-end mt-12 md:mt-0 relative">
            <img 
              src="/pdf_images/door_protect_plus/img_0_1.jpeg" 
              alt="DoorProtect Plus"
              className="h-[400px] object-contain mr-16"
            />
            <div className="absolute right-0 top-[20%] flex flex-col gap-6">
               <div className="w-14 h-14 rounded-full border border-slate-300 flex flex-col items-center justify-center text-[8px] leading-tight text-center">
                 <span className="text-[14px]">2</span>
                 GRADE
                 <span className="text-[7px]">EN 50131</span>
               </div>
               <div className="w-14 h-14 rounded-full border border-slate-300 flex flex-col items-center justify-center text-[9px] leading-tight text-center">
                 PD 6662
                 <span>2017</span>
               </div>
            </div>
          </div>
        </div>

        {/* KEY FEATURES SECTION */}
        <div className="pt-12">
          <h2 className="text-[36px] font-bold text-[#000000] mb-12">Key features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {/* Left */}
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <svg className="w-8 h-8 text-slate-800 flex-shrink-0 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="8" y="2" width="8" height="20" rx="2"/><path d="M12 6v2m0 8v2"/></svg>
                <span className="text-[18px] text-slate-800 leading-snug">Built-in accelerometer for shock and tilt<br/>detection</span>
              </div>
              <div className="flex items-start gap-6">
                <svg className="w-8 h-8 text-slate-800 flex-shrink-0 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0 1 18 8"/><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"/><path d="M17.4 17.4l4.6 4.6"/><path d="M2 2l20 20"/></svg>
                <span className="text-[18px] text-slate-800 leading-snug">Ignores chattering and single shocks to<br/>avoid false alarms</span>
              </div>
              <div className="flex items-start gap-6">
                <svg className="w-8 h-8 text-slate-800 flex-shrink-0 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="6" y="4" width="12" height="16" rx="2"/><path d="M10 2h4M12 9v6M10 13l4-2"/></svg>
                <span className="text-[18px] text-slate-800 leading-snug">Up to 5 years of operation on pre-<br/>installed battery</span>
              </div>
              <div className="flex items-start gap-6">
                <svg className="w-8 h-8 text-slate-800 flex-shrink-0 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M12 16v-4M8 12h8"/></svg>
                <span className="text-[18px] text-slate-800 leading-snug">Remote control and setup via the app</span>
              </div>
            </div>
            {/* Right */}
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <svg className="w-8 h-8 text-slate-800 flex-shrink-0 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                <span className="text-[18px] text-slate-800 leading-snug">Adjustable tilt angle for alarm triggering</span>
              </div>
              <div className="flex items-start gap-6">
                <svg className="w-8 h-8 text-slate-800 flex-shrink-0 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M8 10V7a4 4 0 1 1 8 0v3"/><rect x="4" y="10" width="16" height="10" rx="2"/></svg>
                <span className="text-[18px] text-slate-800 leading-snug">Additional NC input for connecting a<br/>third-party detector</span>
              </div>
              <div className="flex items-start gap-6">
                <svg className="w-8 h-8 text-slate-800 flex-shrink-0 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                <span className="text-[18px] text-slate-800 leading-snug">Up to 1,200 m of two-way encrypted<br/>wireless communication</span>
              </div>
              <div className="flex items-start gap-6">
                <svg className="w-8 h-8 text-slate-800 flex-shrink-0 stroke-[1.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 13h6"/></svg>
                <span className="text-[18px] text-slate-800 leading-snug">Pairing via QR code</span>
              </div>
            </div>
          </div>
        </div>

        {/* JEWELLER COMMUNICATION TECH */}
        <div className="pt-12">
          <h2 className="text-[36px] font-bold text-[#000000] mb-6">Jeweller communication technology</h2>
          <div className="text-[16px] text-slate-800 leading-[1.6] space-y-6 max-w-[1000px]">
            <p>
              <span className="font-bold">Jeweller</span> is a <span className="font-bold">two-way wireless protocol</span> that provides fast and reliable communication between hubs and devices. The protocol delivers instant data-rich alarms: security companies and users know which device was triggered, when and where it happened.
            </p>
            <p>
              Jeweller features <span className="font-bold">encryption</span> and <span className="font-bold">authentication</span> to prevent forgery, and <span className="font-bold">polling</span> to display devices’ status in real time. Supporting <span className="font-bold">up to 1,200 m</span> of wireless connectivity, Jeweller is ready to protect facilities and deliver <span className="font-bold">the best user experience</span> for both end users and installers.
            </p>
          </div>
        </div>

        {/* TECHNICAL SPECIFICATIONS (EXACT 2-COLUMN WITH BORDERS) */}
        <div className="pt-12">
          <h2 className="text-[36px] font-bold text-[#000000] mb-8">Technical specifications</h2>
          <div className="border-t border-slate-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x divide-slate-300">
              
              {/* LEFT COLUMN */}
              <div className="flex flex-col">
                
                <div className="flex gap-6 p-6 border-b border-slate-300">
                  <div className="w-[35%] text-[15px] text-slate-600">Compliance with<br/>standards</div>
                  <div className="w-[65%] text-[15px] text-[#000000]">
                    EN 50131 (Grade 2)<br/>
                    PD 6662:2017
                  </div>
                </div>

                <div className="flex gap-6 p-6 border-b border-slate-300">
                  <div className="w-[35%] text-[15px] text-slate-600">
                    <div className="flex items-center gap-2">
                       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>
                       Jeweller
                    </div>
                    communication<br/>technology
                  </div>
                  <div className="w-[65%] text-[15px] text-[#000000] space-y-6">
                    <div>
                      <div className="font-medium mb-1">Frequency bands</div>
                      <div>
                        866.0 – 866.5 MHz<br/>
                        868.0 – 868.6 MHz<br/>
                        868.7 – 869.2 MHz<br/>
                        905.0 – 926.5 MHz<br/>
                        915.85 – 926.5 MHz<br/>
                        921.0 – 922.0 MHz
                      </div>
                      <div className="text-[14px] text-slate-500 mt-1">
                        Depends on the region<br/>of sales
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Maximum effective<br/>radiated power (ERP)</div>
                      <div>≤ 20 mW</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Communication range</div>
                      <div>up to 1,200 m</div>
                      <div className="text-[14px] text-slate-500 mt-1">In an open space</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Polling interval</div>
                      <div>12–300 sec</div>
                      <div className="text-[14px] text-slate-500 mt-1">
                        Adjusted by PRO or user<br/>with admin rights in the<br/>Ajax app
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Protection against<br/>forgery</div>
                      <div>Device authentication</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 p-6 border-b border-slate-300 lg:border-b-0">
                  <div className="w-[35%] text-[15px] text-slate-600">Power supply</div>
                  <div className="w-[65%] text-[15px] text-[#000000] space-y-6">
                    <div>
                      <div>1 × CR123A, 3 V</div>
                      <div className="text-[14px] text-slate-500 mt-1">Pre-installed</div>
                    </div>
                    <div>
                      <div>up to 5 years of<br/>battery life</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 p-6 lg:border-t border-slate-300">
                  <div className="w-[35%] text-[15px] text-slate-600">Enclosure</div>
                  <div className="w-[65%] text-[15px] text-[#000000] space-y-6">
                    <div>
                      <div className="font-medium mb-1">Colours</div>
                      <div>white, black</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Dimensions</div>
                      <div>Ø 20 × 90 mm</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Weight</div>
                      <div>29 g</div>
                    </div>
                    <div>
                      <div className="font-medium">Tampering alarm</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col">
                
                <div className="flex gap-6 p-6 border-b border-slate-300">
                  <div className="w-[35%] text-[15px] text-slate-600">Compatibility</div>
                  <div className="w-[65%] text-[15px] text-[#000000] space-y-6">
                    <div>
                      <div className="font-medium mb-1">Hubs</div>
                      <div>all Ajax hubs</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Range extenders</div>
                      <div>all Ajax radio signal range<br/>extenders</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 p-6 border-b border-slate-300">
                  <div className="w-[35%] text-[15px] text-slate-600">Detection</div>
                  <div className="w-[65%] text-[15px] text-[#000000] space-y-6">
                    <div>
                      <div className="font-medium mb-1">Sensing element</div>
                      <div>1 × reed switch<br/>1 × accelerometer</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Opening sensors resource</div>
                      <div>2,000,000 openings</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Shock sensor sensitivity</div>
                      <div>3 levels</div>
                      <div className="text-[14px] text-slate-500 mt-1">
                        Adjusted by PRO or user<br/>with admin rights in the<br/>Ajax app
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Option to ignore single<br/>shocks</div>
                      <div className="text-[14px] text-slate-500 mt-1">
                        Enabled by PRO or user<br/>with admin rights in the<br/>Ajax app
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Tilt sensor activation<br/>threshold</div>
                      <div>from 5° to 25°</div>
                      <div className="text-[14px] text-slate-500 mt-1">
                        Adjusted by PRO or user<br/>with admin rights in the<br/>Ajax app
                      </div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Third-party detector<br/>connection</div>
                      <div>
                        wired detector with the<br/>normally closed (NC)<br/>contact type
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 p-6 border-b border-slate-300">
                  <div className="w-[35%] text-[15px] text-slate-600">Installation</div>
                  <div className="w-[65%] text-[15px] text-[#000000] space-y-6">
                    <div>
                      <div className="font-medium mb-1">Operating temperature<br/>range</div>
                      <div>from –10°С to +40°С</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Operating humidity</div>
                      <div>up to 75%</div>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Ingress protection</div>
                      <div>IP50</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 p-6">
                  <div className="w-[35%] text-[15px] text-slate-600">Complete set</div>
                  <div className="w-[65%] text-[15px] text-[#000000] space-y-1">
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
