export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-4">
            Contact Us
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Get In
            <span className="text-primary"> Touch</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-primary text-sm uppercase tracking-widest mb-3">
                Address
              </h3>
              <p className="text-foreground leading-relaxed">
                Nagthana Square, Sawangi T Point to
                <br />
                Nagthana/Nagpur Bypass Road,
                <br />
                Nagthana Rd, near Chintamani Lawn,
                <br />
                Sindi Meghe, Sawangi, Wardha,
                <br />
                Maharashtra 442001
              </p>
            </div>

            <div>
              <h3 className="text-primary text-sm uppercase tracking-widest mb-3">
                Phone
              </h3>
              <a
                href="tel:+918329120266"
                className="text-foreground hover:text-primary transition-colors text-lg"
              >
                +91 8329 120 266
              </a>
            </div>

            <div>
              <h3 className="text-primary text-sm uppercase tracking-widest mb-3">
                Email
              </h3>
              <a
                href="mailto:sorra.whitenight@gmail.com"
                className="text-foreground hover:text-primary transition-colors"
              >
                sorra.whitenight@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-primary text-sm uppercase tracking-widest mb-3">
                Hours
              </h3>
              <p className="text-foreground">Open 24 Hours</p>
              <p className="text-muted/60 text-sm mt-1">
                All days of the week
              </p>
            </div>

            <div>
              <h3 className="text-primary text-sm uppercase tracking-widest mb-3">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary transition-all"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden border border-white/10 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1234567890123!2d78.6!3d20.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4567890123456%3A0x1234567890abcdef!2sWardha%2C%20Maharashtra%20442001!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sorra White Night Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
