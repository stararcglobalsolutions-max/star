import React from 'react';

export function MotionProtectPlus8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'motion-protect-plus-8in' && slug !== 'motion-protect-plus') return null;

  const BASE = '/images/products/motion-protect-plus-8in';

  const PAGES = [
    { num: 2, src: `${BASE}/hires_page_2.png` },
    { num: 3, src: `${BASE}/hires_page_3.png` },
  ];

  return (
    <section className="w-full bg-white pb-16">
      <div className="w-full flex flex-col gap-0">
        {PAGES.map((page) => (
          <div key={page.num} className="w-full bg-white">
            <img
              src={page.src}
              alt={`Motion Protect Plus Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}

      </div>
    </section>
  );
}
