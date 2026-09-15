import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <p className="text-primary text-6xl font-bold mb-4">404</p>
        <h1 className="text-2xl text-foreground mb-4">Page Not Found</h1>
        <p className="text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="bg-primary hover:bg-primary-dark text-background px-6 py-3 rounded text-sm uppercase tracking-widest transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
