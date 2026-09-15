"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || isOpen
          ? "bg-background-deep/90 backdrop-blur-xl border-b border-border-gold shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        <a
          href="#home"
          className="flex items-center"
          aria-label="Sorra White Night home"
        >
          <Image
            src="/images/sorra_logo_transparent.png"
            alt="Sorra White Night"
            width={150}
            height={46}
            priority
            className="h-8 w-auto sm:h-10"
          />
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-[0.18em] uppercase text-muted hover:text-primary-light transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="tel:+918329120266"
            className="inline-block border border-primary/40 hover:bg-primary hover:text-background-deep text-primary-light text-xs uppercase tracking-[0.22em] px-6 py-3 transition-all duration-500"
          >
            Reserve a Table
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center text-primary-light"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`absolute h-px w-6 bg-current transition-all duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-[5px]"
            }`}
          />
          <span
            className={`absolute h-px w-6 bg-current transition-all duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-[5px]"
            }`}
          />
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
          isOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        } bg-background-deep/95 backdrop-blur-xl border-t border-border-gold`}
      >
        <div className="px-6 py-8 flex flex-col gap-5">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm tracking-[0.2em] uppercase text-muted hover:text-primary-light transition-colors"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+918329120266"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-block bg-primary text-background-deep text-xs uppercase tracking-[0.22em] px-6 py-3 text-center transition-colors"
          >
            Reserve a Table
          </a>
        </div>
      </div>
    </header>
  );
}