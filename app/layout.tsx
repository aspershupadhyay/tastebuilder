import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const space = Space_Grotesk({ variable: "--font-space", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "TasteBuilder - Learn to judge video, not just make it",
  description: "A techy, animated school for video taste: attention graphs, story arcs, platform signals, and the director's eye. No editing software required.",
};

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-bold tracking-tight">TASTE<span className="text-amber">_</span>BUILDER</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-dim sm:inline">v2 // tech</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm font-semibold sm:gap-6">
          <Link className="text-fog hover:text-bone" href="/curriculum">Curriculum</Link>
          <Link className="text-fog hover:text-bone" href="/lab">Taste Lab</Link>
          <Link className="text-fog hover:text-bone" href="/sources">Sources</Link>
          <Link className="rounded-full bg-amber px-4 py-2 text-ink hover:bg-amber-deep" href="/curriculum">Start →</Link>
        </nav>
      </div>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${space.variable} ${manrope.variable} ${jetbrains.variable}`}>
      <body className="grain min-h-screen bg-ink text-bone antialiased">
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-dim sm:flex-row sm:items-center sm:justify-between">
            <p>TASTEBUILDER // taste is a decision, not a filter.</p>
            <p className="font-mono text-xs uppercase tracking-widest">Research first. Graphs, not vibes. <span className="text-amber">● REC</span></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
