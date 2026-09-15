import Image from "next/image";
import Reveal from "./Reveal";

export default function BrandIntro() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 px-5 sm:px-8 bg-background"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden gold-frame">
              <Image
                src="/images/dining.webp"
                alt="Intimate dining setup at Sorra White Night"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover img-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-deep/40 to-transparent" />
            </div>

            <div className="absolute -bottom-8 -right-4 sm:-right-8 w-40 sm:w-56 glass p-5 backdrop-blur-xl">
              <p className="script-accent text-2xl sm:text-3xl">
                Since Day One
              </p>
              <p className="text-ivory/80 text-xs tracking-[0.2em] uppercase mt-1">
                Crafted with Love
              </p>
            </div>

            <div className="absolute -top-6 -left-6 w-28 h-28 border border-primary/20 -z-10" />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow mb-6">About Sorra White Night</p>
            <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl font-light text-ivory leading-[1.1]">
              More Than a Meal.
              <br />
              <span className="italic text-primary-light">It&apos;s a Feeling.</span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="gold-line-short mt-8 mb-8" />
            <p className="text-muted leading-relaxed mb-6">
              Sorra White Night is where the evening begins. Perched above the
              city of Wardha, our rooftop café and restaurant blends elegant
              dining with a warm, soulful ambience — where every detail is
              composed to slow things down.
            </p>
            <p className="text-muted leading-relaxed mb-10">
              From handcrafted multi-cuisine plates to golden-hour glow across
              the skyline, we exist for the moments that linger — late-night
              conversations, quiet dates and loud celebrations alike.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-wrap items-center gap-8">
              <div>
                <p className="serif-display text-4xl text-primary-light">24/7</p>
                <p className="text-xs uppercase tracking-[0.22em] text-muted/70 mt-1">
                  Open Hours
                </p>
              </div>
              <div className="h-10 w-px bg-border-gold" />
              <div>
                <p className="serif-display text-4xl text-primary-light">100+</p>
                <p className="text-xs uppercase tracking-[0.22em] text-muted/70 mt-1">
                  Dishes &amp; Brews
                </p>
              </div>
              <div className="h-10 w-px bg-border-gold" />
              <div>
                <p className="serif-display text-4xl text-primary-light">
                  &ldquo;24&rdquo;
                </p>
                <p className="text-xs uppercase tracking-[0.22em] text-muted/70 mt-1">
                  Hours of Magic
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}