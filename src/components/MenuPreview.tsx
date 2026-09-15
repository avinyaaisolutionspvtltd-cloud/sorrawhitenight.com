import Image from "next/image";
import Reveal from "./Reveal";

const categories = [
  {
    name: "Street Favourite",
    image: "/menu-images/vada-pav.jpg",
    dish: "Vada Pav",
    desc: "Crunchy potato fritter in soft pav, mint & garlic chutney",
  },
  {
    name: "Street Favourite",
    image: "/menu-images/misal-pav.jpg",
    dish: "Misal Pav",
    desc: "Spicy sprout curry, crunchy farsan, pav on the side",
  },
  {
    name: "Street Favourite",
    image: "/menu-images/batata-vada.jpg",
    dish: "Batata Vada",
    desc: "Golden fried spiced potato, served with thenga chutney",
  },
  {
    name: "Street Favourite",
    image: "/menu-images/tarri-poha.jpg",
    dish: "Tarri Poha",
    desc: "The fragrant, spicy curry-with-poha from the Nagpur school",
  },
  {
    name: "Rassa & Curry",
    image: "/menu-images/saoji-chicken.jpg",
    dish: "Saoji Chicken",
    desc: "Vidarbha's fiery, aromatic curry — slow, dark, famous",
  },
  {
    name: "Rassa & Curry",
    image: "/menu-images/shev-bhaji.jpg",
    dish: "Shev Bhaji",
    desc: "Crunchy sev folded into a tangy vegetable curry",
  },
  {
    name: "Rassa & Curry",
    image: "/menu-images/zunka-bhakri.jpg",
    dish: "Zunka Bhakri",
    desc: "Gram-flour zunka with the rustic jowar bhakri",
  },
  {
    name: "Traditional Plate",
    image: "/menu-images/thalipeeth.jpg",
    dish: "Thalipeeth",
    desc: "Multigrain bhajani pancake, crisp edges, ghee on top",
  },
  {
    name: "Traditional Plate",
    image: "/menu-images/pithla-bhakri.jpg",
    dish: "Pithla Bhakri",
    desc: "Velvety besan pithla with a robust millet bhakri",
  },
  {
    name: "Mithai",
    image: "/menu-images/puran-poli.jpg",
    dish: "Puran Poli",
    desc: "Sweet chana-dal stuffed flatbread, drenched in ghee",
  },
  {
    name: "Mithai",
    image: "/menu-images/modak.jpg",
    dish: "Modak",
    desc: "Steamed dumplings of coconut and jaggery — Ganesh's favourite",
  },
  {
    name: "Regional Special",
    image: "/menu-images/matki-usal.jpg",
    dish: "Matki Usal",
    desc: "Sprouted moth beans in a Maharashtrian masala broth",
  },
];

export default function MenuPreview() {
  return (
    <section id="menu" className="py-24 sm:py-32 px-5 sm:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-6">Our Menu</p>
          <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl font-light text-ivory leading-[1.1]">
            Tastes of <span className="italic text-primary-light">Wardha</span>
          </h2>
          <div className="gold-line-short mx-auto mt-8" />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <Reveal
              key={item.dish}
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
                <h3 className="serif-display text-2xl text-ivory font-medium">
                  {item.dish}
                </h3>
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
            View Signature Dishes
          </a>
        </Reveal>
      </div>
    </section>
  );
}