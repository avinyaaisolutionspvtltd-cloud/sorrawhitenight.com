import Image from "next/image";
import Reveal from "./Reveal";

const dishes = [
  {
    image: "/menu-images/saoji-chicken.jpg",
    name: "Saoji Chicken",
    desc: "Vidarbha's legendary dark curry, slow-cooked",
  },
  {
    image: "/menu-images/misal-pav.jpg",
    name: "Misal Pav",
    desc: "Crunchy, spicy sprout curry, pav on the side",
  },
  {
    image: "/menu-images/puran-poli.jpg",
    name: "Puran Poli",
    desc: "Sweet lentil flatbread, soaked in ghee",
  },
  {
    image: "/menu-images/modak.jpg",
    name: "Modak",
    desc: "Coconut-jaggery steamed dumpling",
  },
  {
    image: "/menu-images/vada-pav.jpg",
    name: "Vada Pav",
    desc: "Crisp potato fritter, garlic chutney, soft pav",
  },
  {
    image: "/menu-images/tarri-poha.jpg",
    name: "Tarri Poha",
    desc: "Hot curry-drenched poha, Nagpur style",
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
                <span className="w-10 h-px bg-primary/50 transition-all duration-500 group-hover:w-16" />
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