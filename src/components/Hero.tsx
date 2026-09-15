import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/rooftop.webp"
          alt="Sorra White Night rooftop dining"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <a href="#home" className="inline-block">
          <Image
            src="/images/sorra_logo_transparent.png"
            alt="Sorra White Night"
            width={420}
            height={129}
            priority
            className="h-16 w-auto sm:h-24 md:h-32"
          />
        </a>
        <p className="text-primary text-sm uppercase tracking-[0.3em] mb-6 mt-6">
          Rooftop Restaurant &amp; Dining
        </p>
        <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          A premier rooftop dining experience in the heart of Wardha.
          <br />
          Open 24 hours with stunning views and exceptional cuisine.
        </p>
        <p className="text-muted/60 text-sm mb-10">
          Nagthana Square, Sawangi, Wardha &bull; Maharashtra
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+918329120266"
            className="bg-primary hover:bg-primary-dark text-background px-8 py-3 rounded text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="border border-white/20 hover:border-primary text-foreground px-8 py-3 rounded text-sm uppercase tracking-widest transition-all duration-300 hover:text-primary"
          >
            View Menu
          </a>
        </div>

        <div className="mt-20 flex items-center justify-center gap-8 text-muted/40 text-xs uppercase tracking-widest">
          <span>Open 24 Hours</span>
          <span className="w-1 h-1 bg-primary rounded-full" />
          <span>Rooftop Dining</span>
          <span className="w-1 h-1 bg-primary rounded-full" />
          <span>Multi-Cuisine</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted/40 hover:text-primary transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
