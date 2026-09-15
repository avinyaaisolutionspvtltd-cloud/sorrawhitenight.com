import Image from "next/image";
import {
  WHATSAPP_RESERVE,
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
} from "@/lib/contact";
import { WhatsAppIcon } from "./icons";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

const exploreLinks = [
  { href: "#dishes", label: "Signature Dishes" },
  { href: "#contact", label: "Location" },
  { href: "#contact", label: "Reservations" },
  { href: "#events", label: "Private Events" },
  { href: "#menu", label: "Beverages" },
];

export default function Footer() {
  return (
    <footer className="bg-background-deep border-t border-border-gold">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Image
              src="/images/sorra_logo_transparent.png"
              alt="Sorra White Night"
              width={180}
              height={55}
              className="h-11 w-auto"
            />
            <p className="text-muted text-sm leading-relaxed mt-5 max-w-xs">
              A rooftop café and restaurant in Wardha. Good food, great vibes,
              better together.
            </p>
            <p className="text-primary-light mt-6 text-sm tracking-wide">
              Good Food &bull; Great Vibes &bull; Better Together
            </p>
          </div>

          <div>
            <p className="eyebrow mb-6">Quick Links</p>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-primary-light text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6">Explore</p>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-primary-light text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6">Contact</p>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={PHONE_TEL}
                  className="text-muted hover:text-primary-light transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-muted hover:text-primary-light transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="text-muted leading-relaxed">
                Nagthana Square, Sawangi,
                <br />
                Wardha, Maharashtra 442001
              </li>
            </ul>

            <div className="flex gap-3 mt-6">
              <a
                href={WHATSAPP_RESERVE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 flex items-center justify-center border border-border-gold text-muted hover:text-primary-light hover:border-primary transition-all"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center border border-border-gold text-muted hover:text-primary-light hover:border-primary transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center border border-border-gold text-muted hover:text-primary-light hover:border-primary transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#contact"
                aria-label="Google Maps"
                className="w-10 h-10 flex items-center justify-center border border-border-gold text-muted hover:text-primary-light hover:border-primary transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border-gold/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted/50 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Sorra White Night. All rights
            reserved.
          </p>
          <p className="text-muted/50 text-xs tracking-[0.2em] uppercase">
            Rooftop Café &bull; Wardha
          </p>
        </div>
      </div>
    </footer>
  );
}