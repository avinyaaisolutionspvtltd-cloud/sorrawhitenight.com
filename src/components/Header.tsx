"use client";

import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-primary text-2xl font-bold tracking-tight">
              Sorra White
            </span>
            <span className="text-foreground text-sm font-light hidden sm:inline">
              Night
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-primary text-sm uppercase tracking-widest transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+918329120266"
              className="bg-primary hover:bg-primary-dark text-background text-sm px-4 py-2 rounded transition-colors duration-300"
            >
              Book Table
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-muted hover:text-primary text-sm uppercase tracking-widest transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+918329120266"
              className="inline-block mt-2 bg-primary hover:bg-primary-dark text-background text-sm px-4 py-2 rounded transition-colors duration-300"
            >
              Book Table
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
