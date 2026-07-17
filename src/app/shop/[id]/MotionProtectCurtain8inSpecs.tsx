import React from 'react';

export function MotionProtectCurtain8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'motion-protect-curtain-8in' && slug !== 'motion-protect-curtain') return null;

  const BASE = '/images/products/motion-protect-curtain-8in';

  const PAGES = [
    { num: 2, src: `${BASE}/hires_page_2.png` },
    { num: 3, src: `${BASE}/hires_page_3.png` },
    { num: 4, src: `${BASE}/hires_page_4.png` },
  ];

  return (
    <section className="w-full bg-white pb-16">
      <div className="w-full flex flex-col gap-0">
        {PAGES.map((page) => (
          <div key={page.num} className="w-full bg-white">
            <img
              src={page.src}
              alt={`Motion Protect Curtain Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}

      </div>
    </section>
  );
}
