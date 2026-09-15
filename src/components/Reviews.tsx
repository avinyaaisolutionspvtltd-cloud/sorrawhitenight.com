import Reveal from "./Reveal";

const reviews = [
  {
    name: "Aditya Sharma",
    occasion: "Weekend Dinner",
    text: "The rooftop converted an ordinary dinner into an evening we talked about all week. Impeccable vibe, and the butter chicken was unforgettable.",
  },
  {
    name: "Priya Deshmukh",
    occasion: "Anniversary",
    text: "We came for our anniversary and stayed hours past our reservation. Beautiful setting, warm service and the cold coffee is genuinely the best in Wardha.",
  },
  {
    name: "Rahul Nair",
    occasion: "Late Night",
    text: "Open at midnight when nothing else was. The ambience felt premium, the food arrived fast and the staff made us feel truly welcome.",
  },
  {
    name: "Sneha Kulkarni",
    occasion: "Family Gathering",
    text: "Booked the rooftop for a family gathering. Everyone loved the space, the menu had something for all ages and the evening simply flowed.",
  },
];

function Stars({ fill = false }: { fill?: boolean }) {
  return (
    <div
      className="flex gap-1"
      aria-label="5 star rating"
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${fill ? "fill-primary-light" : "fill-primary"}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8 bg-background-deep">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-6">Kind Words</p>
          <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl font-light text-ivory leading-[1.1]">
            Loved by Our <span className="italic text-primary-light">Guests</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review, index) => (
            <Reveal
              key={review.name}
              delay={index * 100}
              className="gold-frame bg-surface p-7 flex flex-col hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500"
            >
              <Stars />
              <p className="text-muted leading-relaxed mt-5 text-sm flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="mt-6 pt-5 border-t border-border-gold">
                <p className="serif-display text-lg text-ivory font-medium">
                  {review.name}
                </p>
                <p className="text-[0.6rem] uppercase tracking-[0.24em] text-primary/80 mt-1">
                  {review.occasion}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}