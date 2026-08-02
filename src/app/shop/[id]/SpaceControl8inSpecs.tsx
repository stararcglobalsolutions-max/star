import React from 'react';

export function SpaceControl8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'space-control-8in' && slug !== 'space-control') return null;

  const BASE = '/images/products/space-control-8in';

  const PAGES: { num: number; src: string }[] = [
    { num: 1, src: `${BASE}/hires_page_1.png?v=15` },
    { num: 2, src: `${BASE}/hires_page_2.png?v=15` },
  ];

  return (
    <section className="w-full bg-white pb-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-0">
        {PAGES.map((page) => (
          <div key={page.num} className={`w-full bg-white relative ${page.num === PAGES.length ? 'overflow-hidden' : ''}`} style={page.num === PAGES.length ? { aspectRatio: '1 / 0.45' } : {}}>
            <img
              src={page.src}
              alt={`Space Control Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
            
          </div>
        ))}
      </div>
    </section>
  );
}
