import Link from "next/link";
import { ACTS, LESSONS } from "@/lib/lessons";

const PHASES = [
  { id: "01", name: "FOUNDATIONS", acts: [1, 2, 3], goal: "After this phase you can watch any video and name, in one sentence, why it held you or lost you.", skill: "Notice, name, compare" },
  { id: "02", name: "CORE", acts: [4, 5, 6], goal: "After this phase you can build a 90 second spine, read a retention graph, and choose the right move for Reels, Shorts or TikTok.", skill: "Build, read, choose" },
  { id: "03", name: "MASTERY", acts: [7, 8, 9], goal: "After this phase you can judge a video against the jaw test, find an original angle, and brief or test it without guessing.", skill: "Judge, angle, direct" },
];

export default function Curriculum() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">CURRICULUM // STRUCTURED, IN ORDER, NO RANDOM LESSONS</p>
      <h1 className="mt-4 font-display text-5xl font-bold sm:text-6xl">Three phases.<br /><span className="text-amber">One clear path.</span></h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fog">
        Start at Phase 01, lesson 1.1, and go in order the first time. Each lesson follows the same structure:
        Hook → Concept → Brain → Good vs Weak → Rep → Self-check → Takeaway.
        Progress is saved in your browser only. No account, no tracking.
      </p>

      <div className="mt-12 space-y-14">
        {PHASES.map((ph) => {
          const phaseLessons = LESSONS.filter((l) => ph.acts.includes(l.act));
          const mins = phaseLessons.reduce((s, l) => s + l.minutes, 0);
          return (
            <section key={ph.id}>
              <div className="rounded-2xl border border-amber bg-panel p-6">
                <div className="flex flex-wrap justify-between gap-3">
                  <h2 className="font-display text-3xl font-bold">PHASE {ph.id} // {ph.name}</h2>
                  <span className="font-mono text-xs text-dim">{phaseLessons.length} LESSONS • {mins} MIN • {ph.skill}</span>
                </div>
                <p className="mt-3 max-w-3xl leading-relaxed text-fog">{ph.goal}</p>
              </div>
              {ph.acts.map((actNo) => {
                const act = ACTS.find((a) => a.n === actNo)!;
                const lessons = LESSONS.filter((l) => l.act === actNo);
                return (
                  <div key={actNo} className="mt-8">
                    <div className="flex items-baseline justify-between border-b border-line pb-3">
                      <h3 className="font-display text-2xl font-bold"><span className="text-amber">Act {actNo}.</span> {act.title}</h3>
                      <span className="hidden font-mono text-xs text-dim sm:inline">{act.tagline}</span>
                    </div>
                    <ol className="mt-4 space-y-3">
                      {lessons.map((l, i) => (
                        <li key={l.slug}>
                          <Link href={`/learn/${l.slug}`} className="group flex items-center gap-4 rounded-xl border border-line bg-panel p-4 hover:border-amber">
                            <span className="font-mono text-sm font-bold text-amber">{String(i + 1).padStart(2, "0")}</span>
                            <span className="flex-1"><span className="block font-bold group-hover:text-amber">{l.title}</span><span className="block text-sm text-fog">{l.hook}</span></span>
                            <span className="font-mono text-xs text-dim">{l.level} • {l.minutes}m →</span>
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </div>
                );
              })}
            </section>
          );
        })}
      </div>

      <section className="mt-16 rounded-2xl border border-line bg-coal p-6">
        <h2 className="font-display text-2xl font-bold">Capstone: your director test</h2>
        <p className="mt-2 leading-relaxed text-fog">After lesson 9.4, do this once: pick a video, deconstruct it in 10 minutes, rewrite its hook, score it on the jaw test, and write a 5 line brief. If you can do that without looking back at the lessons, you have the skill, not just the notes.</p>
        <Link href="/lab" className="mt-4 inline-block font-bold text-amber">Do it in the Taste Lab →</Link>
      </section>
    </div>
  );
}
