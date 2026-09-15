import Image from "next/image";

export default function Banner() {
  return (
    <section className="py-24 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-lg overflow-hidden">
          <div className="relative aspect-[16/7]">
            <Image
              src="/images/banner.webp"
              alt="Sorra White Night rooftop experience"
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-center">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground">
              Experience the Magic of
              <span className="text-primary"> White Nights</span>
            </h2>
            <a
              href="tel:+918329120266"
              className="inline-block mt-4 bg-primary hover:bg-primary-dark text-background px-7 py-3 rounded text-sm uppercase tracking-widest transition-all "
            >
              Reserve Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}