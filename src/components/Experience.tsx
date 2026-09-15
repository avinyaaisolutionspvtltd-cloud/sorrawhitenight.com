import Image from "next/image";
import Reveal from "./Reveal";

const experiences = [
  {
    title: "Fine Dining",
    description: "Plated with intention, savoured slowly",
    image: "/menu-images/dining-ambiance.jpg",
  },
  {
    title: "Café & Coffee",
    description: "Slow mornings and midnight brews",
    image: "/menu-images/coffee.jpg",
  },
  {
    title: "Rooftop & Outdoor",
    description: "Dining beneath an open sky",
    image: "/images/rooftop.webp",
  },
  {
    title: "Celebrations",
    description: "Moments that deserve a stage",
    image: "/menu-images/toast.jpg",
  },
];

export default function Experience() {
  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8 bg-background-deep">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-6">The Experience</p>
          <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl font-light text-ivory leading-[1.1]">
            Signatures of <span className="italic text-primary-light">Sorra</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {experiences.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 110}
              className="group relative aspect-[3/4] overflow-hidden gold-frame cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-deep/85 via-background-deep/15 to-transparent" />

              <span className="absolute top-5 left-5 w-8 h-px bg-primary/70" />
              <span className="serif-display absolute top-5 left-10 text-ivory/50 text-lg">
                0{index + 1}
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[0.6rem] uppercase tracking-[0.3em] text-primary mb-2">
                  Experience
                </p>
                <h3 className="serif-display text-2xl text-ivory font-medium">
                  {item.title}
                </h3>
                <div className="max-h-0 opacity-0 transition-all duration-500 overflow-hidden group-hover:max-h-14 group-hover:opacity-100 group-hover:mt-2">
                  <p className="text-muted text-sm">{item.description}</p>
                </div>
                <div className="mt-4 h-px w-0 bg-primary-light transition-all duration-700 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}