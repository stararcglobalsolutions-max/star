import React from 'react';

export function LifeQuality8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'life-quality-8in' && slug !== 'life-quality') return null;

  const BASE = '/images/products/life-quality-8in';

  const PAGES: { num: number; src: string }[] = [
    { num: 1, src: `${BASE}/hires_page_1.png?v=117` },
    { num: 2, src: `${BASE}/hires_page_2.png?v=117` },
    { num: 3, src: `${BASE}/hires_page_3.png?v=117` },
    { num: 4, src: `${BASE}/hires_page_4.png?v=117` },
    { num: 5, src: `${BASE}/hires_page_5.png?v=117` },
    { num: 6, src: `${BASE}/hires_page_6.png?v=117` },
  ];

  return (
    <section className="w-full bg-white pb-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col gap-0">
        {/* Powered by StarArc Logo */}
        <div className="flex justify-start items-center py-8 pl-8">
          <img
            src="/pawered by stararc.png"
            alt="Powered by StarArc"
            className="h-16 w-auto object-contain"
          />
        </div>

        {PAGES.map((page) => (
          <div key={page.num} className={`w-full bg-white relative ${page.num === PAGES.length ? 'overflow-hidden' : ''}`} style={page.num === PAGES.length ? { aspectRatio: '1 / 0.45' } : {}}>
            <img
              src={page.src}
              alt={`Life Quality Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
            
          </div>
        ))}
      </div>
    </section>
  );
}
