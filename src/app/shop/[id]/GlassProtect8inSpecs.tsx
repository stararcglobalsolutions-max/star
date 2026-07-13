import React from 'react';

export function GlassProtect8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'glass-protect-8in' && slug !== 'glass-protect') return null;

  const BASE = '/images/products/glass-protect-8in';

  const PAGES = [
    { num: 1, src: `${BASE}/hires_page_1.png` },
    { num: 2, src: `${BASE}/hires_page_2.png` },
    { num: 3, src: `${BASE}/hires_page_3.png` },
  ];

  return (
    <section className="w-full bg-white pb-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-0">
        {PAGES.map((page) => (
          <div key={page.num} className="w-full bg-white">
            <img
              src={page.src}
              alt={`Glass Protect Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
