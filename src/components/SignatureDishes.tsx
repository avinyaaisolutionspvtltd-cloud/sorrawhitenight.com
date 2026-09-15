import Image from "next/image";
import Reveal from "./Reveal";

const dishes = [
  {
    image: "/menu-images/main-course.jpg",
    name: "Hyderabadi Biryani",
    desc: "Long-grain basmati, saffron, slow dum",
    price: "₹280",
  },
  {
    image: "/menu-images/chinese.jpg",
    name: "Chilli Chicken",
    desc: "Crisp tossed, soy & roasted chilli glaze",
    price: "₹220",
  },
  {
    image: "/menu-images/italian.jpg",
    name: "Truffle Alfredo",
    desc: "Hand-rolled pasta in truffle cream",
    price: "₹340",
  },
  {
    image: "/menu-images/dessert.jpg",
    name: "Molten Lava Cake",
    desc: "Warm centre, vanilla bean ice cream",
    price: "₹150",
  },
  {
    image: "/menu-images/coffee.jpg",
    name: "Signature Latte",
    desc: "Single-origin, velvet microfoam",
    price: "₹120",
  },
  {
    image: "/menu-images/cocktail.jpg",
    name: "Evening Tonic",
    desc: "House-something, slow evening sipper",
    price: "₹180",
  },
];

export default function SignatureDishes() {
  return (
    <section
      id="dishes"
      className="py-24 sm:py-32 px-5 sm:px-8 bg-background-deep overflow-hidden"
    >
      <div className="max-w-7xl mx-auto mb-10">
        <Reveal>
          <p className="eyebrow mb-6">Signature Dishes</p>
          <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl font-light text-ivory leading-[1.1]">
            Plates Worth the <span className="italic text-primary-light">Journey</span>
          </h2>
        </Reveal>
      </div>

      <Reveal className="flex gap-5 overflow-x-auto overscroll-x-contain pb-6 snap-x snap-mandatory scroll-smooth [scrollbar-width:thin] [scrollbar-color:var(--primary)_var(--background-deep)]">
        {dishes.map((dish) => (
          <div
            key={dish.name}
            className="group relative min-w-[78vw] sm:min-w-[46vw] lg:min-w-[34vw] xl:min-w-[26vw] aspect-[3/4] overflow-hidden snap-start gold-frame shrink-0"
          >
            <Image
              src={dish.image}
              alt={dish.name}
              fill
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 26vw"
              className="object-cover img-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-deep/90 via-background-deep/10 to-transparent" />

            <span className="absolute top-5 left-5 w-8 h-px bg-primary/70" />

            <div className="absolute bottom-0 left-0 right-0 p-7 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
              <h3 className="serif-display text-2xl sm:text-3xl text-ivory font-medium">
                {dish.name}
              </h3>
              <div className="mt-2 max-h-16 overflow-hidden opacity-100 transition-all duration-500 md:max-h-0 md:opacity-0 md:mt-0 md:group-hover:max-h-16 md:group-hover:opacity-100 md:group-hover:mt-2">
                <p className="text-muted text-sm">{dish.desc}</p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <span className="text-primary-light tracking-widest text-lg">
                  {dish.price}
                </span>
                <span className="w-8 h-px bg-primary/50 transition-all duration-500 group-hover:w-16" />
              </div>
            </div>
          </div>
        ))}
      </Reveal>

      <Reveal className="text-center mt-8">
        <p className="text-xs uppercase tracking-[0.3em] text-muted/60">
          Swipe to explore &bull; Full menu at the restaurant
        </p>
      </Reveal>
    </section>
  );
}