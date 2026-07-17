'use client';
import React from 'react';

export function MotionCamPhod8inSpecs({ slug }: { slug: string }) {
  if (!['motion-cam-phod-8in','motion-cam-phod','motioncam-phod-8in','motioncam-phod'].includes(slug)) return null;

  const BASE = '/images/products/motion-cam-phod-8in';

  const PAGES: { num: number; src: string }[] = [
    { num: 2, src: `${BASE}/hires_page_2.png` },
    { num: 3, src: `${BASE}/hires_page_3.png` },
    { num: 4, src: `${BASE}/hires_page_4.png` },
    { num: 5, src: `${BASE}/hires_page_5.png` },
    { num: 6, src: `${BASE}/hires_page_6.png` },
  ];

  return (
    <section className="w-full bg-white pb-16">
      <div className="w-full flex flex-col gap-0">
        {PAGES.map((page) => (
          <div key={page.num} className="w-full bg-white">
            <img
              src={page.src}
              alt={`MotionCam PhOD Product Documentation - Page ${page.num}`}
              className="w-full h-auto block select-none pointer-events-none"
              loading="lazy"
            />
          </div>
        ))}

      </div>
    </section>
  );
}
