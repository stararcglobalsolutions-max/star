import React from 'react';

export function HoodSpecs({ slug }: { slug: string }) {
  if (slug !== 'hood') return null;

  const BASE = '/images/products/hood';

  const PAGES: { num: number; src: string }[] = [
    { num: 1, src: `${BASE}/hires_page_1.png?v=118` },
    { num: 2, src: `${BASE}/hires_page_2.png?v=118` },
  ];

  return (
    <section className="w-full bg-white pb-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-0">
        {PAGES.map((page) => (
          <div key={page.num} className={`w-full bg-white relative ${page.num === PAGES.length ? 'overflow-hidden' : ''}`} style={page.num === PAGES.length ? { aspectRatio: '1 / 0.45' } : {}}>
            <img
              src={page.src}
              alt={`Hood Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
            
          </div>
        ))}

      </div>
    </section>
  );
}
