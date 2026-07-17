import React from 'react';

export function MotionCamOutdoorHighMountPhod8inSpecs({ slug }: { slug: string }) {
  if (slug !== 'motioncam-outdoor-highmount-phod-8in' && slug !== 'motioncam-outdoor-highmount-phod') return null;

  const BASE = '/images/products/motioncam-outdoor-highmount-phod-8in';

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
              alt={`MotionCam Outdoor HighMount (PhOD) Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
