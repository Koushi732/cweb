import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[70vh] px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-[var(--surface)] flex items-center justify-center">
            <AlertTriangle className="w-12 h-12 text-[var(--accent)]" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="pt-4 flex justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-bold text-sm uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors group"
          >
            Return Home
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
