import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/5 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Image
              src="/images/sorra_logo_transparent.png"
              alt="Sorra White Night"
              width={160}
              height={49}
              className="h-10 w-auto mx-auto md:mx-0 opacity-90"
            />
            <p className="text-muted/60 text-sm mt-3">
              Rooftop Dining &bull; Wardha
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted/60">
            <a
              href="#home"
              className="hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#menu"
              className="hover:text-primary transition-colors"
            >
              Menu
            </a>
            <a
              href="#gallery"
              className="hover:text-primary transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-muted/40 text-xs">
            &copy; {new Date().getFullYear()} Sorra White Night. All rights
            reserved.
          </p>
          <p className="text-muted/30 text-xs mt-2">
            Nagthana Square, Sawangi, Wardha, Maharashtra 442001
          </p>
        </div>
      </div>
    </footer>
  );
}
