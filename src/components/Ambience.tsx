import Image from "next/image";
import Reveal from "./Reveal";

const shots = [
  {
    src: "/images/rooftop.webp",
    alt: "Sorra White Night rooftop seating at night",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/day-vew.webp",
    alt: "Daytime view from the rooftop",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/garden.webp",
    alt: "Garden seating surrounded by greenery",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/roof.webp",
    alt: "Outdoor rooftop space under the open sky",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/banner.webp",
    alt: "The Sorra White Night evening experience",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/images/dining.webp",
    alt: "Elegant interior dining at Sorra White Night",
    aspect: "aspect-[3/4]",
  },
];

export default function Ambience() {
  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 px-5 sm:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-6">The Ambience</p>
          <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl font-light text-ivory leading-[1.1]">
            Where Every Evening Feels{" "}
            <span className="italic text-primary-light">Special</span>
          </h2>
          <div className="gold-line-short mx-auto mt-8" />
        </Reveal>

        <div className="columns-2 lg:columns-3 gap-5 [column-fill:balance]">
          {shots.map((shot, index) => (
            <Reveal
              key={shot.src}
              delay={(index % 3) * 90}
              className="mb-5 break-inside-avoid group relative overflow-hidden gold-frame cursor-pointer"
            >
              <div className={`relative ${shot.aspect}`}>
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover img-zoom"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background-deep/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <span className="absolute bottom-4 left-5 w-0 group-hover:w-10 h-px bg-primary-light transition-all duration-700" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}