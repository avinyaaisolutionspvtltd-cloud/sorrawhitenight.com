"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const parallaxY = Math.min(offset * 0.35, 220);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-deep"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/rooftop.webp"
          alt="Sorra White Night rooftop restaurant"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-110"
          style={{ transform: `translateY(${parallaxY}px) scale(1.1)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-deep/70 via-background-deep/45 to-background" />
        <div className="absolute inset-0 bg-background-deep/20" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24 pb-32">
        <p className="eyebrow mb-8 text-shadow-hero">Café &amp; Restaurant</p>

        <div className="text-shadow-hero">
          <span
            className="script-accent block text-4xl sm:text-5xl md:text-6xl mb-1"
            style={{ filter: "drop-shadow(0 2px 20px rgba(0,0,0,0.6))" }}
          >
            Sorra
          </span>
          <h1 className="serif-display font-medium text-ivory text-5xl sm:text-7xl md:text-8xl tracking-[0.18em] uppercase">
            White Night
          </h1>
        </div>

        <div className="flex items-center justify-center gap-4 my-8">
          <span className="w-16 h-px bg-primary/60" />
          <span className="w-1.5 h-1.5 rotate-45 bg-primary" />
          <span className="w-16 h-px bg-primary/60" />
        </div>

        <h2 className="serif-display text-ivory text-2xl sm:text-3xl md:text-4xl font-light italic mb-4 text-shadow-hero">
          Good Food. Great Vibes. Better Together.
        </h2>
        <p className="text-muted max-w-xl mx-auto leading-relaxed mb-10 text-shadow-hero">
          A destination for unforgettable food, beautiful evenings and
          memorable moments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="w-full sm:w-auto bg-primary hover:bg-primary-light text-background-deep text-xs uppercase tracking-[0.24em] px-9 py-4 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(201,169,106,0.35)]"
          >
            Explore Menu
          </a>
          <a
            href="tel:+918329120266"
            className="w-full sm:w-auto border border-ivory/30 hover:border-primary text-ivory hover:text-primary-light text-xs uppercase tracking-[0.24em] px-9 py-4 transition-colors duration-500"
          >
            Reserve a Table
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to discover"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary/70 hover:text-primary-light transition-colors"
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase">Scroll</span>
        <span className="h-10 w-px relative overflow-hidden bg-primary/30">
          <span className="absolute top-0 left-0 w-full h-3 bg-primary animate-[scrollIndicator_1.8s_ease-in-out_infinite]" />
        </span>
        <style jsx>{`
          @keyframes scrollIndicator {
            0% {
              transform: translateY(-100%);
            }
            55%,
            100% {
              transform: translateY(320%);
            }
          }
        `}</style>
      </a>
    </section>
  );
}