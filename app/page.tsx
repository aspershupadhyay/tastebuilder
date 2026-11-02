import Link from "next/link";
import { ACTS, LESSONS } from "@/lib/lessons";
import { RetentionGraph, AttentionBars, StoryArc } from "@/components/Graph";

const PHASES = [
  { id: "01", name: "FOUNDATIONS", acts: [1, 2, 3], outcome: "You can name why a video held you, or lost you, in 3 seconds." },
  { id: "02", name: "CORE", acts: [4, 5, 6], outcome: "You can build a 90 second spine and read any platform's signals." },
  { id: "03", name: "MASTERY", acts: [7, 8, 9], outcome: "You can judge, rewrite, brief and test like a director, not a fan." },
];

export default function Home() {
  const totalMin = LESSONS.reduce((s, l) => s + l.minutes, 0);
  return (
    <div>
      <section className="tech-grid relative overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-14 lg:grid-cols-2 lg:pt-20">
          <div className="reveal">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber"><span className="blink">●</span> SYSTEM ONLINE // NO EDITING SOFTWARE REQUIRED</p>
            <h1 className="mt-6 font-display text-6xl font-bold leading-[0.92] tracking-tight sm:text-7xl">
              ANYONE CAN<br />MAKE A VIDEO.<br /><span className="text-amber">FEW CAN</span><br />JUDGE ONE.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fog">
              TasteBuilder is a techy, animated school for video taste. You will learn to read
              retention like a graph, story like an arc, and platforms like a system, from scratch
              to advanced, with reps you can do in 10 minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/curriculum" className="rounded-full bg-amber px-6 py-3 font-bold text-ink hover:bg-amber-deep">Start Phase 01 →</Link>
              <Link href="/lab" className="rounded-full border border-line px-6 py-3 font-bold hover:border-amber">Open Taste Lab</Link>
            </div>
            <div className="mt-10 grid grid-cols-4 gap-3 font-mono text-xs">
              <div className="rounded-xl border border-line bg-panel p-3"><p className="text-xl font-bold text-bone">9</p><p className="text-dim">ACTS</p></div>
              <div className="rounded-xl border border-line bg-panel p-3"><p className="text-xl font-bold text-bone">36</p><p className="text-dim">LESSONS</p></div>
              <div className="rounded-xl border border-line bg-panel p-3"><p className="text-xl font-bold text-bone">{totalMin}m</p><p className="text-dim">TOTAL</p></div>
              <div className="rounded-xl border border-line bg-panel p-3"><p className="text-xl font-bold text-amber">4</p><p className="text-dim">LABS</p></div>
            </div>
          </div>
          <div className="float space-y-4">
            <RetentionGraph />
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-line bg-panel p-4 font-mono text-xs">
                <p className="text-dim">SIGNAL // SENDS</p><p className="mt-2 text-lg font-bold text-lime">SEND &gt; LIKE</p><p className="mt-1 text-fog normal-case">A send risks reputation. That is why it travels.</p>
              </div>
              <div className="rounded-2xl border border-line bg-panel p-4 font-mono text-xs">
                <p className="text-dim">SIGNAL // SKIP</p><p className="mt-2 text-lg font-bold text-clay">3s = AUDITION</p><p className="mt-1 text-fog normal-case">The first frame decides if the rest exists.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b border-line bg-coal py-3">
        <div className="marquee flex w-max gap-10 whitespace-nowrap font-mono text-sm text-fog">
          {Array.from({ length: 2 }).map((_, i) => <span key={i}>HOOK ▸ TENSION ▸ PEAK ▸ PAYOFF ▸ PROOF ▸ ANGLE ▸ SILENCE ▸ SPECIFICITY ▸ SEND ▸ REWATCH ▸&nbsp;</span>)}
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">ILLUSTRATED // HOW TASTE WORKS</p>
        <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Do not feel it.<br />Read it like a graph.</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <AttentionBars />
          <StoryArc />
          <div className="rounded-2xl border border-line bg-panel p-5">
            <p className="font-mono text-[11px] uppercase tracking-widest text-dim">JAW TEST // 4 CHECKS</p>
            <ul className="mt-5 space-y-4">
              {[["SPECIFIC", "Only this creator, with this proof, could say it."], ["SURPRISING", "It breaks an expectation you actually held."], ["HUMAN", "A real person, stake, or cost is on the line."], ["EARNED", "It is proved on screen, not just claimed."]].map(([t, d]) => (
                <li key={t} className="flex gap-3"><span className="font-mono font-bold text-amber">▸</span><span><b>{t}.</b> <span className="text-fog">{d}</span></span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-coal">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="font-display text-4xl font-bold">The structured path</h2>
          <p className="mt-3 max-w-2xl text-fog">No random lessons. Three phases, in order. Each phase ends with a skill you can prove, not just a video you watched.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PHASES.map((p) => (
              <Link key={p.id} href="/curriculum" className="group rounded-2xl border border-line bg-panel p-6 hover:border-amber">
                <p className="font-mono text-xs text-amber">PHASE {p.id} // ACTS {p.acts.join(", ")}</p>
                <h3 className="mt-3 font-display text-2xl font-bold">{p.name}</h3>
                <p className="mt-3 leading-relaxed text-fog">{p.outcome}</p>
                <p className="mt-5 font-bold text-amber group-hover:underline">See the phase →</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ACTS.map((a) => {
              const first = LESSONS.find((l) => l.act === a.n);
              return (
                <Link key={a.n} href={`/learn/${first?.slug}`} className="rounded-xl border border-line bg-ink p-5 hover:border-amber">
                  <p className="font-mono text-xs text-dim">ACT {a.n} • {LESSONS.filter((l) => l.act === a.n).length} LESSONS</p>
                  <h3 className="mt-2 font-display text-xl font-bold">{a.title}</h3>
                  <p className="mt-1 text-sm text-fog">{a.tagline}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-amber">WHY THIS IS NOT AI SLOP</p>
        <h2 className="mt-4 font-display text-4xl font-bold">Tools teach how. This teaches why.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-line bg-panel p-6"><h3 className="font-bold">Skillshare / Coursera</h3><p className="mt-2 text-fog">Strong on Premiere and CapCut. Weak on: is this hook, peak and ending actually good, and why?</p></div>
          <div className="rounded-2xl border border-line bg-panel p-6"><h3 className="font-bold">MasterClass style</h3><p className="mt-2 text-fog">Cinematic and inspiring, but built for long film, not the 3 second audition, the swipe, and the send.</p></div>
          <div className="rounded-2xl border border-line bg-panel p-6"><h3 className="font-bold">TasteBuilder</h3><p className="mt-2 text-fog">Psychology first, platform physics second, tools never. Every lesson ends with a rep, a graph, and a check.</p></div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs">
          <span className="rounded-full border border-line px-4 py-2">#05070B Deep Tech Black</span>
          <span className="rounded-full border border-amber px-4 py-2 text-amber">#00E5FF Signal Cyan</span>
          <span className="rounded-full border border-line px-4 py-2">#C8FF2E Acid Lime, sparingly</span>
          <span className="rounded-full border border-line px-4 py-2">Space Grotesk + Manrope + JetBrains Mono</span>
        </div>
      </section>
    </div>
  );
}
