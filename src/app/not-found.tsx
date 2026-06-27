import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-[70vh] px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-none border-2 border-foreground bg-background flex items-center justify-center">
            <AlertTriangle className="w-12 h-12 text-foreground" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-[-0.04em] text-foreground">
            404
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold tracking-[0.2em] text-foreground uppercase font-mono">
            Page Not Found
          </h2>
          <p className="text-muted-foreground font-light leading-[1.6]">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="pt-8 flex justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 px-8 py-5 bg-foreground text-background font-bold text-sm uppercase tracking-[0.1em] hover:opacity-90 transition-opacity rounded-none"
          >
            Return Home
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
