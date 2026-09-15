import Image from "next/image";

const galleryItems = [
  {
    src: "/images/rooftop.webp",
    title: "Rooftop Dining",
    description: "Dine under the open sky",
    span: true,
  },
  {
    src: "/images/roof.webp",
    title: "Outdoor Space",
    description: "Spacious rooftop seating",
    span: false,
  },
  {
    src: "/images/dining.webp",
    title: "Dining Area",
    description: "Comfortable indoor seating",
    span: false,
  },
  {
    src: "/images/day-vew.webp",
    title: "Daytime Views",
    description: "Enjoy the daylight ambiance",
    span: false,
  },
  {
    src: "/images/garden.webp",
    title: "Garden Seating",
    description: "Surrounded by greenery",
    span: false,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
            Gallery
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Moments at
            <span className="text-primary"> Sorra White</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            A glimpse of the ambiance waiting for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className={`group relative aspect-[4/3] rounded-lg overflow-hidden ${
                item.span ? "lg:col-span-2 sm:col-span-2" : ""
              }`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-foreground font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted/40 text-sm mt-8">
          Visit us to experience the ambiance firsthand.
        </p>
      </div>
    </section>
  );
}