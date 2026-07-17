import React from 'react';

export function FireProtect2HeatSmokeCo8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'fire-protect-2-heat-smoke-co-8in' && slug !== 'fire-protect-2-heat-smoke-co') return null;

  const BASE = '/images/products/fire-protect-2-heat-smoke-co-8in';

  const PAGES: { num: number; src: string }[] = [
    { num: 2, src: `${BASE}/hires_page_2.png` },
  ];

  return (
    <section className="w-full bg-white pb-16">
      <div className="w-full flex flex-col gap-0">
        {/* Powered by StarArc Logo */}
        <div className="flex justify-start items-center py-8 pl-8">
          <img
            src="/pawered by stararc.png"
            alt="Powered by StarArc"
            className="h-16 w-auto object-contain"
          />
        </div>

        {PAGES.map((page) => (
          <div key={page.num} className="w-full bg-white">
            <img
              src={page.src}
              alt={`Fire Protect 2 (Heat/Smoke/CO) Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
