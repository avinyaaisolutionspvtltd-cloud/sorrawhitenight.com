import Image from "next/image";

const menuCategories = [
  {
    name: "Starters",
    image: "/menu-images/starters.jpg",
    items: [
      { name: "Paneer Tikka", price: "₹180", veg: true },
      { name: "Chicken Tikka", price: "₹220", veg: false },
      { name: "Veg Spring Rolls", price: "₹150", veg: true },
      { name: "Fish Fingers", price: "₹250", veg: false },
    ],
  },
  {
    name: "Main Course",
    image: "/menu-images/main-course.jpg",
    items: [
      { name: "Butter Chicken", price: "₹280", veg: false },
      { name: "Paneer Butter Masala", price: "₹220", veg: true },
      { name: "Mutton Rogan Josh", price: "₹320", veg: false },
      { name: "Dal Makhani", price: "₹180", veg: true },
    ],
  },
  {
    name: "Chinese",
    image: "/menu-images/chinese.jpg",
    items: [
      { name: "Hakka Noodles", price: "₹160", veg: true },
      { name: "Chilli Chicken", price: "₹220", veg: false },
      { name: "Veg Manchurian", price: "₹180", veg: true },
      { name: "Schezwan Fried Rice", price: "₹170", veg: true },
    ],
  },
  {
    name: "Beverages",
    image: "/menu-images/beverages.jpg",
    items: [
      { name: "Fresh Lime Soda", price: "₹60", veg: true },
      { name: "Mango Lassi", price: "₹80", veg: true },
      { name: "Cold Coffee", price: "₹90", veg: true },
      { name: "Masala Chai", price: "₹40", veg: true },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
            Our Menu
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Flavors That
            <span className="text-primary"> Delight</span>
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            From traditional Indian delicacies to international favorites, our
            menu offers something for every palate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {menuCategories.map((category) => (
            <div
              key={category.name}
              className="bg-background border border-white/5 rounded-lg overflow-hidden"
            >
              <div className="relative h-40 mb-6">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <h3 className="absolute bottom-3 left-6 text-primary text-lg font-semibold uppercase tracking-wider">
                  {category.name}
                </h3>
              </div>
              <div className="px-6 pb-6">
                <div className="space-y-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-3 h-3 rounded-sm border ${
                          item.veg
                            ? "border-green-500 bg-green-500/20"
                            : "border-red-500 bg-red-500/20"
                        }`}
                      />
                      <span className="text-foreground">{item.name}</span>
                    </div>
                    <div className="flex-1 mx-4 border-b border-dotted border-white/10" />
                    <span className="text-primary font-semibold">
                      {item.price}
                    </span>
                  </div>
                ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted/40 text-sm mt-10">
          Prices are inclusive of all taxes. Full menu available at the restaurant.
        </p>
      </div>
    </section>
  );
}
