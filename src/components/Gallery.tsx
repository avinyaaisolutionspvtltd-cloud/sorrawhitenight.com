const galleryItems = [
  {
    title: "Rooftop Ambiance",
    description: "Stunning views from our rooftop seating",
    gradient: "from-primary/20 to-primary/5",
    icon: "&#9788;",
  },
  {
    title: "Fine Dining",
    description: "Elegant table settings for special occasions",
    gradient: "from-primary/15 to-primary/5",
    icon: "&#9733;",
  },
  {
    title: "Outdoor Seating",
    description: "Enjoy meals under the open sky",
    gradient: "from-primary/10 to-primary/5",
    icon: "&#9728;",
  },
  {
    title: "Late Night Bites",
    description: "Open 24 hours for your cravings",
    gradient: "from-primary/20 to-primary/5",
    icon: "&#9790;",
  },
  {
    title: "Fresh Cuisine",
    description: "Prepared with the finest ingredients",
    gradient: "from-primary/15 to-primary/5",
    icon: "&#9829;",
  },
  {
    title: "Private Events",
    description: "Book our space for celebrations",
    gradient: "from-primary/10 to-primary/5",
    icon: "&#9827;",
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
            Glimpses of the experience that awaits you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-all duration-500 group-hover:scale-105`}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <span
                  className="text-4xl text-primary/60 mb-3"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
                <h3 className="text-foreground font-semibold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-muted/60 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted/40 text-sm mt-8">
          Photos coming soon. Visit us to experience the ambiance firsthand.
        </p>
      </div>
    </section>
  );
}
