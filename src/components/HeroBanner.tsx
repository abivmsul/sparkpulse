// src/components/HeroBanner.tsx
import React from 'react';

interface HeroBannerProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  backgroundImage,
  title,
  subtitle,
  ctaText,
  ctaLink,
}) => (
  <section
    className="relative h-[100vh] flex items-center justify-center text-center text-white"
    style={{ background: `url(${backgroundImage}) center/cover no-repeat` }}
  >
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="relative z-10 max-w-2xl px-4">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      {subtitle && <p className="text-lg mb-6">{subtitle}</p>}
      <a
        href={ctaLink}
        className="inline-block bg-blue-600 rounded-r text-sm hover:bg-blue-700 font-semibold py-2 px-4 rounded-lg transition"
      >
        {ctaText}
      </a>
    </div>
  </section>
);

export default HeroBanner;
