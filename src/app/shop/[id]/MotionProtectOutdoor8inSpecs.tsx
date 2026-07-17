import React from 'react';

export function MotionProtectOutdoor8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'motion-protect-outdoor-8in' && slug !== 'motion-protect-outdoor') return null;

  const BASE = '/images/products/motion-protect-outdoor-8in';

  const PAGES = [
    { num: 2, src: `${BASE}/hires_page_2.png` },
  ];

  return (
    <section className="w-full bg-white pb-16">
      <div className="w-full flex flex-col gap-0">
        {PAGES.map((page) => (
          <div key={page.num} className="w-full bg-white">
            <img
              src={page.src}
              alt={`Motion Protect Outdoor Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}

      </div>
    </section>
  );
}
