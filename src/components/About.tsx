export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
              Our Story
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              A Rooftop
              <br />
              <span className="text-primary">Experience</span>
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Sorra White Night brings you an unforgettable rooftop dining
              experience in Wardha. Perched above the city, enjoy panoramic
              views while savoring our carefully crafted multi-cuisine menu.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Whether it&apos;s a late-night craving or a celebration with loved ones,
              we&apos;re open 24 hours to serve you the finest flavors in an
              ambiance that&apos;s both elegant and welcoming.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-primary text-3xl font-bold">24/7</p>
                <p className="text-muted/60 text-xs uppercase tracking-wider mt-1">
                  Open Hours
                </p>
              </div>
              <div className="text-center">
                <p className="text-primary text-3xl font-bold">4.2</p>
                <p className="text-muted/60 text-xs uppercase tracking-wider mt-1">
                  Google Rating
                </p>
              </div>
              <div className="text-center">
                <p className="text-primary text-3xl font-bold">100+</p>
                <p className="text-muted/60 text-xs uppercase tracking-wider mt-1">
                  Dishes
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-white/5 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">&#9734;</div>
                <p className="text-primary text-lg font-semibold">
                  Rooftop Views
                </p>
                <p className="text-muted/60 text-sm mt-2">
                  Panoramic cityscape dining
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border border-primary/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
