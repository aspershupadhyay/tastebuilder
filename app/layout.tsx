import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "TasteBuilder — Make work worth watching",
  description: "A practical school for better video taste. Learn to see the decisions behind work people choose to keep watching.",
};

function Nav() {
  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="brand-mark">Taste<span>Builder</span></span>
        </Link>
        <nav className="nav-links">
          <Link href="/curriculum">Curriculum</Link>
          <Link href="/lab">Taste Lab</Link>
          <Link href="/sources">About</Link>
          <Link className="nav-cta" href="/curriculum">Start here <span>↗</span></Link>
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain min-h-screen bg-ink text-bone antialiased">
        <Nav />
        <main>{children}</main>
        <footer className="site-footer">
          <div className="footer-inner">
            <p className="brand-mark">Taste<span>Builder</span></p>
            <p>Make work worth watching.</p>
            <div className="footer-links"><Link href="/curriculum">Learn</Link><Link href="/lab">Practice</Link><Link href="/sources">Read</Link></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
