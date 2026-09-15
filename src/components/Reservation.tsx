import Reveal from "./Reveal";
import {
  WHATSAPP_RESERVE,
  WHATSAPP_GENERAL,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
} from "@/lib/contact";
import { WhatsAppIcon } from "./icons";

const hours = [
  { day: "Monday", time: "Open 24 Hours" },
  { day: "Tuesday", time: "Open 24 Hours" },
  { day: "Wednesday", time: "Open 24 Hours" },
  { day: "Thursday", time: "Open 24 Hours" },
  { day: "Friday", time: "Open 24 Hours" },
  { day: "Saturday", time: "Open 24 Hours" },
  { day: "Sunday", time: "Open 24 Hours" },
];

export default function Reservation() {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-5 sm:px-8 bg-background overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.04] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <p className="script-accent text-3xl sm:text-4xl mb-4">
            Your Table Awaits
          </p>
          <h2 className="serif-display text-4xl sm:text-5xl md:text-6xl font-light text-ivory leading-[1.1]">
            Come as You Are.
            <br />
            <span className="italic text-primary-light">Leave with Memories.</span>
          </h2>
          <div className="gold-line-short mx-auto mt-8" />
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <Reveal className="lg:col-span-2 gold-frame bg-surface p-8 sm:p-10 flex flex-col">
            <h3 className="serif-display text-2xl text-ivory font-medium mb-6">
              Visit Us
            </h3>

            <div className="space-y-6 text-sm">
              <div>
                <p className="eyebrow mb-2">Address</p>
                <p className="text-muted leading-relaxed">
                  Nagthana Square, Sawangi T Point to Nagthana / Nagpur Bypass
                  Road, near Chintamani Lawn, Sawangi, Wardha, Maharashtra 442001
                </p>
              </div>

              <div>
                <p className="eyebrow mb-2">Phone</p>
                <a
                  href={PHONE_TEL}
                  className="text-ivory hover:text-primary-light transition-colors text-lg"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>

              <div>
                <p className="eyebrow mb-2">Email</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-muted hover:text-primary-light transition-colors"
                >
                  {EMAIL}
                </a>
              </div>

              <div>
                <p className="eyebrow mb-3">Opening Hours</p>
                <div className="space-y-1.5">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between text-muted"
                    >
                      <span>{h.day}</span>
                      <span className="text-primary-light text-xs tracking-wider">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP_RESERVE}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-primary hover:bg-primary-light text-background-deep text-xs uppercase tracking-[0.24em] px-8 py-4 text-center transition-all duration-500"
            >
              <WhatsAppIcon />
              Reserve Your Table
            </a>
            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full sm:w-auto items-center justify-center gap-2 text-primary-light/70 hover:text-primary-light text-xs uppercase tracking-[0.2em] transition-colors duration-500"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              Chat with us on WhatsApp
            </a>
          </Reveal>

          <Reveal
            delay={140}
            className="lg:col-span-3 gold-frame overflow-hidden min-h-[420px] lg:min-h-full relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1234567890123!2d78.5999!3d20.8106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4567890123456%3A0x1234567890abcdef!2sWardha%2C%20Maharashtra%20442001!5e0!3m2!1sen!2sin!4v1234567890"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: "grayscale(0.4) invert(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sorra White Night location on Google Maps"
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-border-gold" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}