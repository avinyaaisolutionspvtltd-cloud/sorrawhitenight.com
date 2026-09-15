import Image from "next/image";
import Reveal from "./Reveal";

const moments = [
  { src: "/images/rooftop.webp", alt: "Rooftop evening at Sorra" },
  { src: "/menu-images/main-course.jpg", alt: "Signature biryani" },
  { src: "/menu-images/coffee.jpg", alt: "Artisan latte" },
  { src: "/images/garden.webp", alt: "Garden seating" },
  { src: "/menu-images/dessert.jpg", alt: "Molten lava cake" },
  { src: "/menu-images/cocktail.jpg", alt: "Evening cocktails" },
];

export default function SocialGallery() {
  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <p className="script-accent text-3xl sm:text-4xl mb-4">Moments at</p>
          <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl font-light text-ivory leading-[1.1]">
            <span className="italic text-primary-light">Sorra</span>
          </h2>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-[0.3em] text-muted hover:text-primary-light transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @sorrawhitenight
          </a>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {moments.map((item, index) => (
            <Reveal
              key={item.src}
              delay={(index % 3) * 90}
              className="group relative aspect-square overflow-hidden gold-frame cursor-pointer"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-background-deep/0 group-hover:bg-background-deep/70 transition-colors duration-700 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary-light opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                </svg>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}