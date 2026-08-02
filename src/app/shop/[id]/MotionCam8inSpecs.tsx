import React from 'react';
import { Camera, Image as ImageIcon, Zap, QrCode, Power, Settings2, ShieldCheck, Video, LayoutGrid, ArrowRightLeft, Lock, Wrench, Smartphone, Battery } from 'lucide-react';

export function MotionCam8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'motion-cam-8in' && slug !== 'motion-cam') return null;

  const BASE = '/images/products/motion-cam-8in';

  const PAGES: { num: number; src: string }[] = [
    { num: 1, src: `${BASE}/hires_page_1.png?v=111` },
    { num: 2, src: `${BASE}/hires_page_2.png?v=111` },
    { num: 3, src: `${BASE}/hires_page_3.png?v=111` },
    { num: 4, src: `${BASE}/hires_page_4.png?v=111` },
    { num: 5, src: `${BASE}/hires_page_5.png?v=111` },
  ];

  return (
    <section className="w-full bg-white pb-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-0">
        {PAGES.map((page) => (
          <div key={page.num} className={`w-full bg-white relative ${page.num === PAGES.length ? 'overflow-hidden' : ''}`} style={page.num === PAGES.length ? { aspectRatio: '1 / 0.45' } : {}}>
            <img
              src={page.src}
              alt={`MotionCam Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
