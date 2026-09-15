import Image from "next/image";
import Reveal from "./Reveal";
import { WHATSAPP_EVENT } from "@/lib/contact";
import { WhatsAppIcon } from "./icons";

const occasions = [
  {
    title: "Family Dining",
    image: "/images/dining.webp",
    note: "Long tables, laughter and seconds",
  },
  {
    title: "Date Nights",
    image: "/menu-images/dining-ambiance.jpg",
    note: "Candlelight and closer conversations",
  },
  {
    title: "Birthday Celebrations",
    image: "/menu-images/toast.jpg",
    note: "Cake, toasts and unforgettable entrances",
  },
  {
    title: "Corporate Gatherings",
    image: "/images/rooftop.webp",
    note: "Business over beautiful evenings",
  },
  {
    title: "Private Events",
    image: "/images/roof.webp",
    note: "Your evening, entirely your own",
  },
  {
    title: "Special Occasions",
    image: "/menu-images/cocktail.jpg",
    note: "Because some moments deserve more",
  },
];

export default function Occasions() {
  return (
    <section id="events" className="py-24 sm:py-32 px-5 sm:px-8 bg-background-deep">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-6">Occasions &amp; Events</p>
          <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl font-light text-ivory leading-[1.1]">
            Made for <span className="italic text-primary-light">Every Memory</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {occasions.map((item, index) => (
            <Reveal
              key={item.title}
              delay={(index % 3) * 100}
              className="group relative aspect-[4/3] overflow-hidden gold-frame cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-deep/85 via-background-deep/20 to-transparent" />

              <span className="serif-display absolute top-5 right-6 text-ivory/40 text-xl">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="serif-display text-2xl text-ivory font-medium">
                  {item.title}
                </h3>
                <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-12 group-hover:opacity-100 group-hover:mt-1">
                  <p className="text-muted text-sm">{item.note}</p>
                </div>
                <div className="mt-3 h-px w-0 bg-primary-light transition-all duration-700 group-hover:w-16" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-14">
          <a
            href={WHATSAPP_EVENT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-primary/40 hover:bg-primary hover:text-background-deep text-primary-light text-xs uppercase tracking-[0.24em] px-10 py-4 transition-all duration-500"
          >
            <WhatsAppIcon />
            Plan Your Event
          </a>
        </Reveal>
      </div>
    </section>
  );
}