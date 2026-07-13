import React from 'react';
import { Camera, Image as ImageIcon, Zap, QrCode, Power, Settings2, ShieldCheck, Video, LayoutGrid, ArrowRightLeft, Lock, Wrench, Smartphone, Battery } from 'lucide-react';

export function MotionCam8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'motion-cam-8in' && slug !== 'motion-cam') return null;

  return (
    <section className="w-full bg-white font-sans text-black py-12 md:py-16 border-t border-slate-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col px-4 md:px-8 lg:px-16">
        
        {/* PAGE 1 CONTENT */}

        {/* 1. Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full relative mb-24">
          
          <div className="flex flex-col w-full lg:w-[40%]">
            <div className="text-[40px] md:text-[52px] font-black tracking-tighter mb-4 leading-none">AJAX</div>
            <h1 className="text-[32px] md:text-[44px] font-bold mb-2 leading-tight">MotionCam <span className="font-normal">Jeweller</span></h1>
            <p className="text-[20px] md:text-[22px] font-medium text-black mb-8">Wireless indoor IR motion detector supporting photo verification of alarms.</p>
            
            <div className="flex items-center gap-6 mt-8">
              <img src="/images/products/motion-cam-8in/mc_asset_1_1.png" alt="QR Code" className="w-[80px] md:w-[100px] object-contain mix-blend-multiply" />
              <div className="text-[14px] text-slate-600 leading-snug">
                An Ajax hub is required for operation. Find<br/>
                the detailed information on the device by the<br/>
                link:<br/>
                <a href="http://ajax.systems/support/devices/motioncam/" target="_blank" rel="noreferrer" className="text-black font-medium hover:underline">
                  ajax.systems/support/devices/motioncam/
                </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[40%] flex justify-center mt-12 lg:mt-0 relative">
            <img src="/images/products/motion-cam-8in/mc_asset_1_0.jpeg" alt="MotionCam" className="w-[180px] md:w-[220px] object-contain mix-blend-multiply drop-shadow-xl" />
          </div>

          <div className="w-full lg:w-[20%] flex lg:flex-col justify-end lg:justify-start items-center lg:items-end mt-12 lg:mt-0 gap-4">
            <img src="/images/products/motion-cam-8in/mc_badges.png" alt="Certifications" className="w-full max-w-[200px] object-contain mix-blend-multiply" />
          </div>

        </div>

        {/* 2. Key Features Grid */}
        <div className="flex flex-col mb-24">
          <h2 className="text-[28px] font-bold mb-8">Key features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            
            {/* Col 1 */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-[8px] h-[8px] rounded-full bg-black shrink-0"></div>
                <span className="text-[16px] font-medium">Up to 12 m detection distance</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[8px] h-[8px] rounded-full bg-black shrink-0"></div>
                <span className="text-[16px] font-medium">88.5°/80° viewing angles</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[8px] h-[8px] rounded-full bg-black shrink-0"></div>
                <span className="text-[16px] font-medium">Temperature compensation</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[8px] h-[8px] rounded-full bg-black shrink-0"></div>
                <span className="text-[16px] font-medium">Pet immunity</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[8px] h-[8px] rounded-full bg-black shrink-0"></div>
                <span className="text-[16px] font-medium">A built-in camera for photo verification</span>
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-[8px] h-[8px] rounded-full bg-black shrink-0"></div>
                <span className="text-[16px] font-medium">False alarms prevention algorithm</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[8px] h-[8px] rounded-full bg-black shrink-0"></div>
                <span className="text-[16px] font-medium">Up to 4 years of operation</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[8px] h-[8px] rounded-full bg-black shrink-0"></div>
                <span className="text-[16px] font-medium">Effortless installation and replacement on pre-installed batteries</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[8px] h-[8px] rounded-full bg-black shrink-0"></div>
                <span className="text-[16px] font-medium">Remote control and setup via the app</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[8px] h-[8px] rounded-full bg-black shrink-0"></div>
                <span className="text-[16px] font-medium">Connecting via QR code</span>
              </div>
            </div>

          </div>
        </div>

        {/* 3. Angles and detection range */}
        <div className="flex flex-col mb-32 border-b border-slate-300 pb-16">
          <h2 className="text-[28px] font-bold mb-8">Angles and detection range</h2>
          <div className="w-full">
            <img src="/images/products/motion-cam-8in/mc_detection_range.png" alt="Detection Range" className="w-full object-contain mix-blend-multiply" />
          </div>
        </div>


        {/* PAGE 2 CONTENT */}

        {/* False alarms prevention */}
        <div className="flex flex-col mb-24">
          <h2 className="text-[32px] font-bold mb-12">False alarms prevention</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col">
              <h3 className="text-[20px] font-bold mb-4">Optics</h3>
              <p className="text-[15px] leading-relaxed text-slate-700">The detector lens increases sensitivity to human motion, cutting off false alarms caused by other sources of IR radiation. It is designed so that potential IR radiation from pets and other interferences affect only the small lens sections. Large sections, on the contrary, are aimed at the most likely places of burglar motion.</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[20px] font-bold mb-4">Software</h3>
              <p className="text-[15px] leading-relaxed text-slate-700">For additional protection against false alarms, the detector uses the SmartDetect algorithm. The armed detector constantly analyses the thermal diagram from the IR sensor: the intensity of IR radiation, the size of the thermal spots, the speed of movement and other parameters.</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[20px] font-bold mb-4">Installation</h3>
              <p className="text-[15px] leading-relaxed text-slate-700">When properly installed and configured, the detector does not react to common sources of false alarms and pets under 50 cm tall and 20 kg in weight. The detector has pre-installed batteries and the SmartBracket mounting panel. So, installers don't need to disassemble the device and won't damage the electronics during installation.</p>
            </div>
          </div>
        </div>

        {/* Photo verification */}
        <div className="flex flex-col mb-24">
          <h2 className="text-[32px] font-bold mb-12">Photo verification</h2>
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
            <div className="w-full lg:w-[40%]">
              <img src="/images/products/motion-cam-8in/mc_exploded_camera.png" alt="Exploded camera" className="w-full object-contain mix-blend-multiply" />
            </div>
            <div className="w-full lg:w-[60%]">
              <p className="text-[16px] leading-relaxed text-slate-800 font-medium">
                MotionCam equipped with a built-in camera to show the real situation at the facility. A built-in camera is activated if the detector is armed and motion is detected. Only users with access to the hub event feed and security company employees can view the photos. The detector software architecture does not support taking a photo on demand.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-slate-300">
            <div className="flex flex-col items-start gap-4">
              <LayoutGrid className="w-8 h-8 text-black" />
              <div className="text-[18px] font-bold leading-snug">Up to 640 × 480 pixels<br/><span className="font-normal text-slate-600">photo resolution</span></div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <ImageIcon className="w-8 h-8 text-black" />
              <div className="text-[18px] font-bold leading-snug">Up to 5 photos in a series</div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Zap className="w-8 h-8 text-black" />
              <div className="text-[18px] font-bold leading-snug">IR backlight for low light<br/><span className="font-normal text-slate-600">conditions</span></div>
            </div>
          </div>
        </div>

        {/* Privacy on demand */}
        <div className="flex flex-col mb-32 pb-16 border-b border-slate-300">
          <h2 className="text-[32px] font-bold mb-8">Privacy on demand</h2>
          <p className="text-[16px] leading-relaxed text-slate-700 max-w-4xl">
            MotionCam is designed to control security, not privacy. Graphic data is securely protected by encryption at each step of transmission and storage. Only hub users can access its virtual storage on Ajax Cloud and view photos taken by MotionCam detectors. Photos are stored for up to 6 months in the hub event log in Ajax apps. The Ajax Cloud is located on geographically distributed servers in compliance with the General Data Protection Regulation (GDPR) requirements.
          </p>
        </div>


        {/* PAGE 3 CONTENT */}

        {/* Monitoring software */}
        <div className="flex flex-col mb-24">
          <h2 className="text-[32px] font-bold mb-8">Monitoring software supporting the Ajax photo verification</h2>
          <div className="w-full flex flex-col items-center">
            <img src="/images/products/motion-cam-8in/mc_cms_logos.png" alt="CMS Logos" className="w-full max-w-[800px] object-contain mix-blend-multiply mb-6" />
            <p className="text-[15px] text-slate-600">See the full list by the link: <a href="https://ajax.systems/connecting-to-cms/" target="_blank" rel="noreferrer" className="text-black font-medium hover:underline">ajax.systems/connecting-to-cms/</a></p>
          </div>
        </div>

        {/* Two-way encrypted communication */}
        <div className="flex flex-col mb-32 pb-16 border-b border-slate-300">
          <h2 className="text-[32px] font-bold mb-12 text-center">Two-way encrypted communication</h2>
          <div className="w-full flex justify-center mb-12">
            <img src="/images/products/motion-cam-8in/mc_communication.png" alt="Jeweller Wings Communication" className="w-full max-w-[900px] object-contain mix-blend-multiply" />
          </div>
          <div className="flex flex-col lg:flex-row gap-12 mb-12">
            <p className="text-[15px] leading-relaxed text-slate-700 w-full lg:w-1/2">
              Jeweller and Wings are two-way wireless data transfer protocols that provide fast and reliable communication between hubs and connected devices. Jeweller delivers instant data-rich alarms: security companies and users know which device was triggered, when and where it happened. Wings delivers photos taken by a detector built-in camera.
            </p>
            <p className="text-[15px] leading-relaxed text-slate-700 w-full lg:w-1/2">
              Both protocols feature encryption and authentication to prevent forgery, and polling to display devices' status. Supporting up to 1,700 m of wireless connectivity between MotionCam detectors and hub (or range extender), Jeweller and Wings are ready to protect facilities and deliver the best user experience for both end users and installers.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-12 justify-center">
            <div className="flex items-center gap-4">
              <div className="w-[10px] h-[10px] rounded-full bg-black shrink-0"></div>
              <span className="text-[18px] font-bold">The first photo delivery in 9 s<sup className="text-[12px]">1</sup></span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-[10px] h-[10px] rounded-full bg-black shrink-0"></div>
              <span className="text-[18px] font-bold">Alarm delivery within 0.3 s</span>
            </div>
          </div>
        </div>


        {/* PAGE 4 & 5 CONTENT: TECH SPECS */}
        <h2 className="text-[32px] font-bold mb-12 text-center">Technical specifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-slate-300 w-full mb-12">
          
          {/* COLUMN 1 */}
          <div className="flex flex-col md:border-r border-slate-300">
            
            <div className="p-6 border-b border-slate-300">
              <div className="text-[16px] text-slate-500 font-medium mb-2">Compliance with standards</div>
              <div className="text-[14px] text-black font-medium leading-snug">
                EN 50131 (Grade 2)<br/>
                PD 6662:2017
              </div>
            </div>

            <div className="p-6 border-b border-slate-300">
              <div className="text-[16px] text-slate-500 font-medium mb-4">Communication channels with Ajax devices</div>
              
              <div className="mb-6">
                <strong className="text-[14px]">Jeweller communication technology</strong><br/>
                <strong className="text-[14px]">Wings communication technology</strong>
              </div>

              <div className="mb-6">
                <strong className="text-[14px]">Frequency bands</strong><br/>
                <span className="text-[14px] leading-snug block mt-1">
                  866.0 – 866.5 MHz<br/>
                  868.0 – 868.6 MHz<br/>
                  868.7 – 869.2 MHz<br/>
                  905.0 – 926.5 MHz<br/>
                  915.85 – 926.5 MHz<br/>
                  921.0 – 922.0 MHz
                </span>
                <span className="text-slate-500 text-[13px] mt-1 block">Depends on the region of sales.</span>
              </div>

              <div className="mb-6">
                <strong className="text-[14px]">Maximum effective radiated power (ERP)</strong><br/>
                <span className="text-[14px]">≤ 20 mW</span>
              </div>

              <div className="mb-6">
                <strong className="text-[14px]">Communication range</strong><br/>
                <span className="text-[14px]">up to 1,700 m</span><br/>
                <span className="text-slate-500 text-[13px] mt-1 block">In an open space.</span>
              </div>

              <div className="mb-2">
                <strong className="text-[14px]">Polling interval</strong><br/>
                <span className="text-[14px]">12–300 s</span><br/>
                <span className="text-slate-500 text-[13px] mt-1 block">Adjusted by PRO or user with admin rights in the Ajax app.</span>
              </div>
            </div>

            <div className="p-6 border-b border-slate-300">
              <div className="text-[16px] text-slate-500 font-medium mb-4">Photo verification</div>
              
              <div className="mb-6">
                <strong className="text-[14px]">Photo resolution in pixels</strong><br/>
                <span className="text-[14px] leading-snug block mt-1">
                  640 × 480<br/>
                  320 × 240 (default)<br/>
                  160 × 120
                </span>
                <span className="text-slate-500 text-[13px] mt-1 block">Adjusted by PRO or user with admin rights in the Ajax app</span>
              </div>

              <div className="mb-6">
                <strong className="text-[14px]">Photos in a series</strong><br/>
                <span className="text-[14px]">from 1 to 5 pics</span><br/>
                <span className="text-slate-500 text-[13px] mt-1 block">Adjusted by PRO or user with admin rights in the Ajax app</span>
              </div>

              <div className="mb-2">
                <strong className="text-[14px]">IR backlight</strong>
              </div>
            </div>

            <div className="p-6 border-b md:border-b-0 border-slate-300">
              <div className="text-[16px] text-slate-500 font-medium mb-4">Power supply</div>
              <div className="mb-6">
                <strong className="text-[14px]">Battery</strong><br/>
                <span className="text-[14px]">2 x CR123A</span><br/>
                <span className="text-slate-500 text-[13px] mt-1 block">Pre-installed.</span>
              </div>
              <div className="mb-2">
                <strong className="text-[14px]">Battery life</strong><br/>
                <span className="text-[14px]">up to 4 years</span>
              </div>
            </div>

          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col">
            
            <div className="p-6 border-b border-slate-300">
              <div className="text-[16px] text-slate-500 font-medium mb-4">CMS connectivity</div>
              <div className="mb-4">
                <strong className="text-[14px]">Hubs</strong><br/>
                <span className="text-[14px] leading-snug block mt-1">
                  Hub 2<br/>
                  Hub 2 Plus<br/>
                  Hub Hybrid (2G)<br/>
                  Hub Hybrid (4G)
                </span>
              </div>
              <div className="mb-2">
                <strong className="text-[14px]">Range extenders</strong><br/>
                <span className="text-[14px]">ReX 2</span>
              </div>
            </div>

            <div className="p-6 border-b border-slate-300">
              <div className="text-[16px] text-slate-500 font-medium mb-4">Motion detection</div>
              
              <div className="mb-6">
                <strong className="text-[14px]">Sensitive element</strong><br/>
                <span className="text-[14px]">PIR sensor</span>
              </div>

              <div className="mb-6">
                <strong className="text-[14px]">Detection distance</strong><br/>
                <span className="text-[14px]">up to 12 m</span><br/>
                <span className="text-slate-500 text-[13px] mt-1 block">When installed at a height of 2.4 m.</span>
              </div>

              <div className="mb-6">
                <strong className="text-[14px]">Detection angles</strong><br/>
                <span className="text-[14px] leading-snug block mt-1">
                  horizontal — 88.5°<br/>
                  vertical — 80°
                </span>
              </div>

              <div className="mb-6">
                <strong className="text-[14px]">Motion detection speed</strong><br/>
                <span className="text-[14px]">from 0.3 to 2.0 m/s</span><br/>
                <span className="text-slate-500 text-[13px] mt-1 block">The direction of the detector lens should be perpendicular to an alleged intrusion path into the facility.</span>
              </div>

              <div className="mb-6">
                <strong className="text-[14px]">Temperature compensation</strong>
              </div>

              <div className="mb-6">
                <strong className="text-[14px]">Sensitivity</strong><br/>
                <span className="text-[14px]">3 levels</span><br/>
                <span className="text-slate-500 text-[13px] mt-1 block">Adjusted by PRO or user with admin rights in the Ajax app.</span>
              </div>

              <div className="mb-6">
                <strong className="text-[14px]">Pet immunity</strong><br/>
                <span className="text-[14px] leading-snug block mt-1">
                  weight: up to 20 kg<br/>
                  height: up to 50 cm
                </span>
              </div>

              <div className="mb-2">
                <strong className="text-[14px]">Protection against forgery</strong><br/>
                <span className="text-[14px]">Device authentication</span>
              </div>
            </div>

            <div className="p-6 border-b border-slate-300">
              <div className="text-[16px] text-slate-500 font-medium mb-4">Installation</div>
              
              <div className="mb-6">
                <strong className="text-[14px]">Recommended installation height</strong><br/>
                <span className="text-[14px]">2.4 m</span>
              </div>

              <div className="mb-6">
                <strong className="text-[14px]">Operating temperature range</strong><br/>
                <span className="text-[14px]">from –10°С to +40°С</span>
              </div>

              <div className="mb-6">
                <strong className="text-[14px]">Operating humidity</strong><br/>
                <span className="text-[14px]">up to 75%</span>
              </div>

              <div className="mb-2">
                <strong className="text-[14px]">Protection class</strong><br/>
                <span className="text-[14px]">IP50</span>
              </div>
            </div>

            <div className="p-6 border-b border-slate-300">
              <div className="text-[16px] text-slate-500 font-medium mb-4">Enclosure</div>
              <div className="mb-6">
                <strong className="text-[14px]">Colour</strong><br/>
                <span className="text-[14px]">white, black</span>
              </div>
              <div className="mb-6">
                <strong className="text-[14px]">Dimensions</strong><br/>
                <span className="text-[14px]">110 × 65 × 50 mm</span>
              </div>
              <div className="mb-6">
                <strong className="text-[14px]">Weight</strong><br/>
                <span className="text-[14px]">86 g</span>
              </div>
              <div className="mb-2">
                <strong className="text-[14px]">Tampering alarm</strong>
              </div>
            </div>

            <div className="p-6">
              <div className="text-[16px] text-slate-500 font-medium mb-4">Complete set</div>
              <div className="text-[14px] text-black leading-snug">
                MotionCam Jeweller<br/>
                2 × CR123A battery<br/>
                <span className="text-slate-500">Pre-installed</span><br/>
                SmartBracket mounting panel<br/>
                Installation kit<br/>
                Quick Start Guide
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
