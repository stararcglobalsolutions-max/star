import React from 'react';

export function MotionProtectPlus8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'motion-protect-plus-8in' && slug !== 'motion-protect-plus') return null;

  return (
    <section className="w-full bg-white font-sans text-black py-12 md:py-16 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col px-4 md:px-8 lg:px-16">
        
        {/* PAGE 1: HERO & FEATURES */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full relative mb-24">
          
          <div className="flex flex-col w-full lg:w-[65%]">
            <h1 className="text-[32px] md:text-[44px] font-bold mb-2 leading-tight">MotionProtect Plus</h1>
            <p className="text-[20px] md:text-[22px] mb-8 font-medium">Wireless indoor motion detector with additional microwave sensor</p>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-12">
              <div className="flex flex-col gap-4">
                <div className="text-[15px] leading-snug text-slate-600">The Ajax hub is required for operation. Find the detailed information on the official website.</div>
                <div className="text-[15px] leading-snug text-blue-600 hover:underline cursor-pointer break-all">https://ajax.systems/support/devices/motionprotectplus</div>
                <div className="text-[15px] leading-snug font-bold mt-2">
                  Grade 2 EN 50131<br/>
                  PD 6662:2017
                </div>
              </div>
            </div>

            {/* Feature Grid - 2 Columns mapping the X=96 and X=359 positions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 w-full mt-8">
              
              {/* Left Column */}
              <div className="flex flex-col gap-8">
                <div className="flex gap-4 items-start">
                  <div className="w-[6px] h-[6px] mt-2 rounded-full bg-black shrink-0"></div>
                  <p className="text-[15px] leading-relaxed">High-end PIR sensor and optical system with up to 12 m detection distance, and 88.5°/80° viewing angles.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-[6px] h-[6px] mt-2 rounded-full bg-black shrink-0"></div>
                  <p className="text-[15px] leading-relaxed">Immunity to pets with a weight of up to 20 kg and height up to 50 cm.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-[6px] h-[6px] mt-2 rounded-full bg-black shrink-0"></div>
                  <p className="text-[15px] leading-relaxed">SmartDetect software algorithm to analyse the signal from the PIR sensor and prevent false alarms.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-[6px] h-[6px] mt-2 rounded-full bg-black shrink-0"></div>
                  <p className="text-[15px] leading-relaxed">Two-way encrypted communication with control panel at the range of up to 1,200 m.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-[6px] h-[6px] mt-2 rounded-full bg-black shrink-0"></div>
                  <p className="text-[15px] leading-relaxed">Tampering alarm.</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-8">
                <div className="flex gap-4 items-start">
                  <div className="w-[6px] h-[6px] mt-2 rounded-full bg-black shrink-0"></div>
                  <p className="text-[15px] leading-relaxed">Up to 5 years of autonomous operation on a pre-installed battery.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-[6px] h-[6px] mt-2 rounded-full bg-black shrink-0"></div>
                  <p className="text-[15px] leading-relaxed">Pairing with the security system within 30 seconds via QR code.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-[6px] h-[6px] mt-2 rounded-full bg-black shrink-0"></div>
                  <p className="text-[15px] leading-relaxed">Mobile and desktop apps to adjust, test, and control the security system.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-[6px] h-[6px] mt-2 rounded-full bg-black shrink-0"></div>
                  <p className="text-[15px] leading-relaxed">The additional microwave sensor filters false alarms from the air conditioner and curtain movement.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="w-full lg:w-[35%] flex justify-center lg:justify-end mt-12 lg:mt-0">
            <img src="/images/products/motion-protect-plus-8in/asset_1_0.png" alt="MotionProtect Plus" className="max-w-[300px] object-contain drop-shadow-xl" />
          </div>

        </div>

        {/* PAGE 2 & 3: TECH SPECS */}
        <div className="flex flex-col w-full">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-8">Tech Specs</h2>

          {/* General Section */}
          <div className="mb-12">
            <h3 className="text-[20px] font-bold mb-6">General</h3>
            <div className="flex flex-col md:flex-row border-t border-slate-300">
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 md:border-r gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Colour</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">white, black</div>
              </div>
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Installation</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">indoor at a height of 2.4 m</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 md:border-r gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Compatibility</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">all hubs & ReX</div>
              </div>
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Compliance</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">EN 50131 (Grade 2)<br/>PD 6662:2017</div>
              </div>
            </div>
          </div>

          {/* Communication Section */}
          <div className="mb-12">
            <h3 className="text-[20px] font-bold mb-6">Communication</h3>
            <div className="flex flex-col md:flex-row border-t border-slate-300">
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 md:border-r gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Communication protocol</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">Jeweller: two-way encrypted communication of event and alarms</div>
              </div>
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Radio communication range</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">up to 1,200 m</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 md:border-r gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Frequency band</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">
                  868.0–868.6 MHz<br/>
                  868.7–869.2 MHz<br/>
                  863.0–870.0 MHz<br/>
                  <span className="text-slate-500 font-normal text-[13px]">(depends on the region of sale)</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Maximum effective radiated power (ERP)</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">≤ 20 mW</div>
              </div>
            </div>
          </div>

          {/* Detection Section */}
          <div className="mb-12">
            <h3 className="text-[20px] font-bold mb-6">Detection</h3>
            <div className="flex flex-col md:flex-row border-t border-slate-300">
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 md:border-r gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Motion detection distance</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">up to 12 m</div>
              </div>
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Motion detection angles</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">horizontally — 88.5°<br/>vertically — 80°</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 md:border-r gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Pet immunity</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">weight up to 20 kg<br/>height up to 50 cm</div>
              </div>
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Sensitivity</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">3 levels<br/><span className="text-slate-500 font-normal text-[13px]">(set by user in app)</span></div>
              </div>
            </div>
          </div>

          {/* Power supply Section */}
          <div className="mb-12">
            <h3 className="text-[20px] font-bold mb-6">Power supply</h3>
            <div className="flex flex-col md:flex-row border-t border-slate-300">
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 md:border-r gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Power supply</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">1 x CR123, 3 V</div>
              </div>
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Battery life</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">up to 5 years</div>
              </div>
            </div>
          </div>

          {/* Antisabotage protection Section */}
          <div className="mb-12">
            <h3 className="text-[20px] font-bold mb-6">Antisabotage protection</h3>
            <div className="flex flex-col md:flex-row border-t border-slate-300">
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 md:border-r gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Tampering alarm</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">+</div>
              </div>
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Pings</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">12–300 sec<br/><span className="text-slate-500 font-normal text-[13px]">(set by user in app)</span></div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 md:border-r gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Frequency hopping</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">+</div>
              </div>
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Protection against forgery</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">+</div>
              </div>
            </div>
          </div>

          {/* Body and complete set Section */}
          <div className="mb-12">
            <h3 className="text-[20px] font-bold mb-6">Body and complete set</h3>
            <div className="flex flex-col md:flex-row border-t border-slate-300">
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 md:border-r gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Operating temperature range</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">from –10°С to +40°С</div>
              </div>
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Operating humidity</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">up to 75%</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 md:border-r gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Overall dimensions</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">110 × 65 × 50 mm</div>
              </div>
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Weight</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">96 g</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 md:border-r gap-4">
                <div className="w-1/2 text-[14px] md:text-[15px] text-slate-500 font-normal">Complete set</div>
                <div className="w-1/2 text-[14px] md:text-[15px] text-black font-medium">
                  MotionProtect Plus<br/>
                  SmartBracket mounting panel<br/>
                  1 x CR123 (pre-installed)<br/>
                  Installation kit<br/>
                  Quick start guide
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-row p-4 md:p-6 border-b border-slate-300 gap-4">
                {/* Empty cell to balance the grid if needed */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
