import React from 'react';
import { 
  PersonStanding, 
  PawPrint, 
  Target, 
  MonitorSmartphone, 
  ScanLine, 
  Thermometer, 
  Wrench, 
  QrCode,
  Gem
} from 'lucide-react';

export function MotionProtect8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'motion-protect-8in' && slug !== 'motion-protect') return null;

  return (
    <section className="w-full bg-white font-sans text-black py-12 md:py-16 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col px-4 md:px-8 lg:px-16">
        
        {/* PAGE 1 CONTENT */}
        <div className="flex flex-col gap-12">
          
          {/* Section 01: Hero */}
          <div className="flex flex-col md:flex-row justify-between items-start w-full relative">
            <div className="flex flex-col max-w-full md:max-w-[450px]">
              <div className="text-[40px] md:text-[52px] font-black tracking-tighter mb-6 md:mb-8 leading-none">AJAX</div>
              <h1 className="text-[32px] md:text-[44px] font-bold mb-2 leading-tight">MotionProtect Jeweller</h1>
              <p className="text-[22px] mb-8 font-medium">Wireless indoor IR motion detector.</p>
              
              <div className="flex flex-row items-center gap-6">
                <img src="/images/products/motion-protect-8in/image_1_1.jpeg" className="w-[85px] h-[85px] mix-blend-multiply" alt="QR Code" />
                <div className="text-[15px] leading-snug">
                  <p>An Ajax hub is required for operation. Find</p>
                  <p>the detailed information on the device by</p>
                  <p>the link:</p>
                  <div className="mt-2 font-bold hover:underline cursor-pointer text-black">
                    <a href="http://ajax.systems/support/devices/motionprotect/" target="_blank" rel="noreferrer">http://ajax.systems/support/devices/motionprotect/</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-end mt-16 md:mt-0 relative w-full md:w-[450px]">
              <div className="flex flex-row items-center gap-6 mt-12 md:mt-0 md:mr-12">
                <img src="/images/products/motion-protect-8in/image_1_0.jpeg" className="h-[280px] md:h-[320px] object-contain drop-shadow-xl" alt="MotionProtect" />
                
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

          {/* Section 02: Key features */}
          <div className="mt-8">
            <h2 className="text-[28px] md:text-[32px] font-bold mb-8 md:mb-10">Key features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 md:gap-y-10">
               <div className="flex items-start gap-4">
                 <PersonStanding className="w-6 h-6 shrink-0 mt-1" strokeWidth={1.2} />
                 <p className="text-[16px] font-normal">Up to 12 m detection distance</p>
               </div>
               <div className="flex items-start gap-4">
                 <PawPrint className="w-6 h-6 shrink-0 mt-1" strokeWidth={1.2} />
                 <p className="text-[16px] font-normal">Pet immunity</p>
               </div>
               <div className="flex items-start gap-4">
                 <Target className="w-6 h-6 shrink-0 mt-1" strokeWidth={1.2} />
                 <p className="text-[16px] font-normal">False alarms prevention algorithm</p>
               </div>
               <div className="flex items-start gap-4">
                 <MonitorSmartphone className="w-6 h-6 shrink-0 mt-1" strokeWidth={1.2} />
                 <p className="text-[16px] font-normal">Remote control and setup via the app</p>
               </div>
               <div className="flex items-start gap-4">
                 <ScanLine className="w-6 h-6 shrink-0 mt-1" strokeWidth={1.2} />
                 <p className="text-[16px] font-normal">88.5°/80° viewing angles</p>
               </div>
               <div className="flex items-start gap-4">
                 <Thermometer className="w-6 h-6 shrink-0 mt-1" strokeWidth={1.2} />
                 <p className="text-[16px] font-normal">Temperature compensation</p>
               </div>
               <div className="flex items-start gap-4">
                 <Wrench className="w-6 h-6 shrink-0 mt-1" strokeWidth={1.2} />
                 <p className="text-[16px] font-normal">Effortless installation and replacement</p>
               </div>
               <div className="flex items-start gap-4">
                 <QrCode className="w-6 h-6 shrink-0 mt-1" strokeWidth={1.2} />
                 <p className="text-[16px] font-normal">Connecting via QR code</p>
               </div>
            </div>
          </div>

          {/* Section 03: Angles and range */}
          <div className="mt-12 md:mt-8">
            <h2 className="text-[28px] md:text-[32px] font-bold mb-8 md:mb-10">Angles and range</h2>
            <div className="flex flex-col items-start w-full">
              <img src="/images/products/motion-protect-8in/diagrams_crop.png" className="w-full max-w-[900px] object-contain mix-blend-multiply drop-shadow-sm" alt="Coverage Angles" />
            </div>
          </div>

        </div>

        {/* PAGE 2 CONTENT */}
        <div className="flex flex-col mt-32">
          <h2 className="text-[28px] md:text-[36px] font-bold mb-4 text-black">False alarm prevention</h2>
          <p className="text-[16px] leading-relaxed mb-16 text-slate-600 font-normal max-w-5xl">
            MotionProtect Jeweller combines special optics and software to filter false alarms. When professionally installed, the detector ignores pets and doesn’t react to the most common sources of false alarms.
          </p>

          <div className="flex flex-col gap-16 md:gap-24">
            
            {/* Optics - Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
              <div className="w-full md:w-1/2 flex items-center justify-center bg-black rounded-[24px] overflow-hidden drop-shadow-sm">
                <img src="/images/products/motion-protect-8in/auto_crop_1.png" className="w-1/2 object-contain" alt="Optics Left" />
                <div className="w-px h-[80%] bg-[#333] mx-[-1px] z-10"></div>
                <img src="/images/products/motion-protect-8in/auto_crop_0.png" className="w-1/2 object-contain" alt="Optics Right" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h3 className="text-[24px] font-bold mb-4">Optics</h3>
                <p className="text-[15px] leading-relaxed text-slate-600 font-normal">
                  The detector lens increases sensitivity to human motion, cutting off false alarms to other sources of IR radiation. It is designed so that potential IR radiation from pets and other interferences affect only the small lens sections. Large sections, on the contrary, are aimed at the most likely places of burglar motion.
                </p>
              </div>
            </div>

            {/* Software - Text Left, Image Right */}
            <div className="flex flex-col md:flex-row-reverse items-start gap-8 md:gap-16">
              <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-black rounded-[24px] overflow-hidden drop-shadow-sm p-4 gap-2">
                <img src="/images/products/motion-protect-8in/auto_crop_2.png" className="w-full object-contain" alt="Software Top" />
                <div className="w-[90%] h-px bg-[#333] my-2"></div>
                <img src="/images/products/motion-protect-8in/auto_crop_3.png" className="w-full object-contain" alt="Software Bottom" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h3 className="text-[24px] font-bold mb-4">Software</h3>
                <p className="text-[15px] leading-relaxed text-slate-600 font-normal">
                  For additional protection against false alarms, the detector uses the SmartDetect algorithm. The armed detector constantly analyses the thermal diagram from the PIR sensor: the intensity of IR radiation, the size of the thermal spots, the speed of movement and other parameters.
                </p>
              </div>
            </div>

            {/* Installation - Image Left, Text Right */}
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16">
              <div className="w-full md:w-1/2">
                <img src="/images/products/motion-protect-8in/installation_graphic_new.png" className="w-[80%] max-w-[400px] mx-auto object-contain mix-blend-multiply" alt="Installation" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <h3 className="text-[24px] font-bold mb-4">Installation</h3>
                <p className="text-[15px] leading-relaxed text-slate-600 font-normal">
                  When properly installed and configured, the detector does not react to common sources of false alarms and pets under 50 cm tall and 20 kg in weight. For seamless installation, it has pre-installed batteries and the SmartBracket mounting panel. So, installers don’t need to disassemble the detector and won’t damage the electronics during installation.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* PAGE 3 CONTENT */}
        <div className="flex flex-col mt-32">
          
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-[32px] md:text-[40px] font-bold">Jeweller</h2>
            </div>
            <h3 className="text-[20px] md:text-[24px] font-normal text-black tracking-tight mb-12">communication technology</h3>
            
            <div className="flex flex-col lg:flex-row gap-16 items-start w-full">
               <div className="w-full lg:w-1/2 flex flex-col gap-6">
                 <p className="text-[16px] leading-relaxed text-slate-600 font-normal">
                   Jeweller is a two-way wireless protocol that provides fast and reliable communication between hubs and devices. The protocol delivers instant data-rich alarms: security companies and users know which device was triggered, when and where it happened.
                 </p>
                 <p className="text-[16px] leading-relaxed text-slate-600 font-normal">
                   Jeweller features encryption and authentication to prevent forgery, and polling to display devices’ status in real time. Supporting up to 1,700 m of wireless connectivity, Jeweller is ready to protect facilities and deliver the best user experience for both end users and installers.
                 </p>
               </div>
               
               <div className="w-full lg:w-1/2 flex flex-col gap-12 lg:pl-12">
                 <div className="flex items-center gap-6">
                   <img src="/images/products/motion-protect-8in/jeweller_battery.png" className="w-[80px] object-contain mix-blend-multiply" alt="Battery" />
                 </div>
                 <div className="flex items-center gap-6">
                   <img src="/images/products/motion-protect-8in/jeweller_1700.png" className="w-[80px] object-contain mix-blend-multiply" alt="1700m" />
                 </div>
               </div>
            </div>
          </div>

          {/* PAGE 3 & 4 Technical Specifications Table */}
          <div className="mt-24">
            <h2 className="text-[28px] md:text-[36px] font-bold mb-8">Technical specifications</h2>
            
            <div className="w-full flex flex-col md:flex-row border-t border-slate-300">
              {/* Row 1 */}
              <div className="w-full md:w-1/2 flex flex-col md:border-r border-slate-300">
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 font-normal leading-snug">Compliance with standards</div>
                  <div className="w-1/2 md:w-[55%] font-bold text-[13px] md:text-[15px] text-black leading-snug break-words">
                    EN 50131 (Grade 2)<br/>
                    PD 6662:2017
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
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

            <div className="w-full flex flex-col md:flex-row">
              {/* Row 2 */}
              <div className="w-full md:w-1/2 flex flex-col md:border-r border-slate-300">
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 font-normal leading-snug">Communication with control panel</div>
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
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 md:pl-6 font-normal leading-snug">Motion detection</div>
                  <div className="w-1/2 md:w-[55%] text-[13px] md:text-[15px] text-black leading-snug break-words">
                    <strong>Sensitive element</strong><br/>
                    1 × PIR sensor<br/><br/>
                    <strong>Detection distance</strong><br/>
                    up to 12 m<br/><br/>
                    <strong>Detection angles</strong><br/>
                    horizontal — 88.5°<br/>
                    vertical — 80°<br/>
                    <span className="text-slate-500">When installed at a height of 2.4 m</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row">
              {/* Row 3 */}
              <div className="w-full md:w-1/2 flex flex-col md:border-r border-slate-300">
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 font-normal leading-snug">Communication with control panel</div>
                  <div className="w-1/2 md:w-[55%] text-[13px] md:text-[15px] text-black leading-snug break-words">
                    <strong>Maximum effective radiated power (ERP)</strong><br/>
                    ≤ 20 mW<br/><br/>
                    <strong>Communication range</strong><br/>
                    up to 1,700 m<br/>
                    <span className="text-slate-500">In an open space</span><br/><br/>
                    <strong>Polling interval</strong><br/>
                    12–300 s<br/>
                    <span className="text-slate-500">Adjusted by PRO or user with admin rights in the Ajax app</span><br/><br/>
                    <strong>Protection against forgery</strong><br/>
                    Device authentication
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 md:pl-6 font-normal leading-snug">Motion detection</div>
                  <div className="w-1/2 md:w-[55%] text-[13px] md:text-[15px] text-black leading-snug break-words">
                    <strong>Motion detection speed</strong><br/>
                    from 0.3 to 2.0 m/s<br/>
                    <span className="text-slate-500">The direction of the detector lens should be perpendicular to an alleged intrusion path into the facility.</span><br/><br/>
                    <strong>Temperature compensation</strong><br/>
                    <br/>
                    <strong>Sensitivity</strong><br/>
                    3 levels<br/>
                    <span className="text-slate-500">Adjusted by PRO or user with admin rights in the Ajax app</span><br/><br/>
                    <strong>Pet immunity</strong><br/>
                    weight: up to 20 kg<br/>
                    height: up to 50 cm
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row">
              {/* Row 4 */}
              <div className="w-full md:w-1/2 flex flex-col md:border-r border-slate-300">
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 font-normal leading-snug">Power supply</div>
                  <div className="w-1/2 md:w-[55%] text-[13px] md:text-[15px] text-black leading-snug break-words">
                    <strong>Battery</strong><br/>
                    1 x CR123A<br/>
                    <span className="text-slate-500">Pre-installed</span><br/><br/>
                    <strong>Battery life</strong><br/>
                    up to 5 years
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 md:pl-6 font-normal leading-snug">Installation</div>
                  <div className="w-1/2 md:w-[55%] text-[13px] md:text-[15px] text-black leading-snug break-words">
                    <strong>Recommended installation height</strong><br/>
                    2.4 m<br/><br/>
                    <strong>Operating temperature range</strong><br/>
                    from –10°С to +40°С<br/><br/>
                    <strong>Operating humidity</strong><br/>
                    up to 75%<br/><br/>
                    <strong>Protection class</strong><br/>
                    IP50
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row">
              {/* Row 5 */}
              <div className="w-full md:w-1/2 flex flex-col md:border-r border-slate-300">
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 font-normal leading-snug">Enclosure</div>
                  <div className="w-1/2 md:w-[55%] text-[13px] md:text-[15px] text-black leading-snug break-words">
                    <strong>Colour</strong><br/>
                    white, black<br/><br/>
                    <strong>Dimensions</strong><br/>
                    110 × 65 × 50 mm<br/><br/>
                    <strong>Weight</strong><br/>
                    86 g<br/><br/>
                    <strong>Tampering alarm</strong>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col">
                <div className="flex flex-row p-4 md:p-6 border-b border-slate-300 h-full gap-4 md:gap-0">
                  <div className="w-1/2 md:w-[45%] md:pr-4 text-[13px] md:text-[16px] text-slate-500 md:pl-6 font-normal leading-snug">Complete set</div>
                  <div className="w-1/2 md:w-[55%] text-[13px] md:text-[15px] text-black leading-snug break-words">
                    MotionProtect Jeweller<br/>
                    1 x CR123A<br/>
                    <span className="text-slate-500">Pre-installed</span><br/>
                    SmartBracket<br/>
                    Installation kit<br/>
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
