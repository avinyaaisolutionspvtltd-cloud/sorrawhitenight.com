import Image from "next/image";
import Reveal from "./Reveal";
import { WHATSAPP_EVENT } from "@/lib/contact";
import { WhatsAppIcon } from "./icons";

const occasions = [
  {
    title: "Birthday Party",
    image: "/images/celebration-birthday.jpg",
    note: "Cakes, toasts and unforgettable entrances",
  },
  {
    title: "Kitty Party",
    image: "/menu-images/cocktail.jpg",
    note: "Cards, chatter and laughter over drinks",
  },
  {
    title: "Wedding Anniversary",
    image: "/images/dining.webp",
    note: "Candlelight and closer conversations",
  },
  {
    title: "Retirement Program",
    image: "/images/rooftop.webp",
    note: "Honour a lifetime over a beautiful evening",
  },
  {
    title: "Ring Ceremony",
    image: "/menu-images/toast.jpg",
    note: "Little moments, grand celebrations",
  },
  {
    title: "And More Little Moments",
    image: "/images/roof.webp",
    note: "Because some moments deserve more",
  },
];

export default function Occasions() {
  return (
    <section
      id="events"
      className="py-24 sm:py-32 px-5 sm:px-8 bg-background-deep"
    >
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-6">Booking &amp; Celebrations</p>
          <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl font-light text-ivory leading-[1.1]">
            Celebrate With <span className="italic text-primary-light">Us</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto mt-5 leading-relaxed">
            Birthday parties, kitty parties, with more little moments in between
            — we host them all.
          </p>
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