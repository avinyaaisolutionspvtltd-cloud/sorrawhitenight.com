import Image from "next/image";
import Reveal from "./Reveal";

const categories = [
  {
    name: "Starters",
    image: "/menu-images/starters.jpg",
    dish: "Paneer Tikka",
    price: "₹180",
    desc: "Char-grilled cottage cheese, smoked in our clay oven",
  },
  {
    name: "Main Course",
    image: "/menu-images/main-course.jpg",
    dish: "Butter Chicken",
    price: "₹280",
    desc: "Velvety tomato–ginger gravy, slow simmered",
  },
  {
    name: "Chinese / Asian",
    image: "/menu-images/chinese.jpg",
    dish: "Hakka Noodles",
    price: "₹160",
    desc: "Wok-tossed noodles with garden vegetables",
  },
  {
    name: "Italian / Continental",
    image: "/menu-images/italian.jpg",
    dish: "Fettuccine Alfredo",
    price: "₹320",
    desc: "Silky parmesan cream, hand-rolled pasta",
  },
  {
    name: "Desserts",
    image: "/menu-images/dessert.jpg",
    dish: "Molten Lava Cake",
    price: "₹150",
    desc: "Warm chocolate heart with vanilla ice cream",
  },
  {
    name: "Beverages",
    image: "/menu-images/beverages.jpg",
    dish: "Sorra Cold Coffee",
    price: "₹90",
    desc: "Brewed dark, frothed to perfection",
  },
];

export default function MenuPreview() {
  return (
    <section id="menu" className="py-24 sm:py-32 px-5 sm:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-6">Our Menu</p>
          <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl font-light text-ivory leading-[1.1]">
            A Taste of <span className="italic text-primary-light">Tonight</span>
          </h2>
          <div className="gold-line-short mx-auto mt-8" />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <Reveal
              key={item.name}
              delay={(index % 3) * 110}
              className="group relative overflow-hidden gold-frame bg-surface"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.dish} — ${item.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-[0.6rem] uppercase tracking-[0.28em] text-background-deep bg-primary/85 px-3 py-1.5">
                  {item.name}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="serif-display text-2xl text-ivory font-medium">
                    {item.dish}
                  </h3>
                  <span className="text-primary-light font-medium tracking-wide whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="text-muted text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-5 h-px w-0 bg-primary-light transition-all duration-700 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-14">
          <a
            href="#dishes"
            className="inline-block border border-primary/40 hover:bg-primary hover:text-background-deep text-primary-light text-xs uppercase tracking-[0.24em] px-10 py-4 transition-all duration-500"
          >
            View Full Menu
          </a>
        </Reveal>
      </div>
    </section>
  );
}