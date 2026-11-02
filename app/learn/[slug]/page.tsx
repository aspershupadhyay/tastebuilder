import Link from "next/link";
import { notFound } from "next/navigation";
import { LESSONS, getLesson, lessonIndex } from "@/lib/lessons";
import MarkDone from "@/components/MarkDone";

export async function generateStaticParams() {
  return LESSONS.map((l) => ({ slug: l.slug }));
}

function Step({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10 border-t border-line pt-8">
      <h2 className="font-mono text-xs uppercase tracking-widest text-amber">Step {n} {"//"} {title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();
  const idx = lessonIndex(slug);
  const prev = idx > 0 ? LESSONS[idx - 1] : null;
  const next = idx < LESSONS.length - 1 ? LESSONS[idx + 1] : null;
  const phase = lesson.act <= 3 ? "Phase 01 Foundations" : lesson.act <= 6 ? "Phase 02 Core" : "Phase 03 Mastery";
  const pct = Math.round(((idx + 1) / LESSONS.length) * 100);

  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <Link href="/curriculum" className="font-mono text-xs uppercase tracking-widest text-amber">← Curriculum</Link>
      <p className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-dim">{phase} • Act {lesson.act} • {lesson.actTitle} • {lesson.no} • {lesson.level} • {lesson.minutes} min</p>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-panel"><div className="h-full bg-amber" style={{ width: `${pct}%` }} /></div>
      <p className="mt-2 font-mono text-xs text-dim">Lesson {idx + 1} of {LESSONS.length} • {pct}% through the path</p>

      <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02]">{lesson.title}</h1>
      <p className="mt-6 font-display text-2xl leading-relaxed text-amber">{lesson.hook}</p>

      <Step n="01" title="The concept"><p className="text-lg leading-relaxed">{lesson.idea}</p></Step>
      <Step n="02" title="Why the brain does this"><p className="leading-relaxed text-fog">{lesson.brain}</p></Step>
      <Step n="03" title="Good vs weak, side by side">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-lime bg-panel p-6"><h3 className="font-bold text-lime">✓ Strong</h3><p className="mt-3 leading-relaxed text-fog">{lesson.good}</p></div>
          <div className="rounded-2xl border border-clay bg-panel p-6"><h3 className="font-bold text-clay">✕ Weak</h3><p className="mt-3 leading-relaxed text-fog">{lesson.weak}</p></div>
        </div>
      </Step>
      <Step n="04" title="Your rep, do it today">
        <div className="rounded-2xl bg-amber p-6 text-ink"><p className="text-lg font-bold leading-relaxed">{lesson.exercise}</p></div>
      </Step>
      <Step n="05" title="Self-check, answer out loud">
        <ul className="space-y-2 leading-relaxed text-fog">
          <li>1. What was the one decision that made this lesson&apos;s example work, or fail?</li>
          <li>2. What would you cut first from the weak version, and why?</li>
          <li>3. How would you use this idea in your next video, in one sentence?</li>
        </ul>
      </Step>
      <Step n="06" title="Takeaway to keep">
        <p className="font-display text-2xl font-bold leading-snug">{lesson.takeaway}</p>
        <p className="mt-6 border-l-2 border-line pl-4 text-sm leading-relaxed text-dim">Source note: {lesson.source}</p>
      </Step>

      <div className="mt-12 flex flex-wrap items-center gap-3">
        <MarkDone slug={lesson.slug} />
        <Link href="/lab" className="rounded-full border border-line px-5 py-2.5 text-sm font-bold hover:border-amber">Try it in the Lab</Link>
      </div>

      <nav className="mt-14 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
        {prev ? <Link href={`/learn/${prev.slug}`} className="rounded-xl border border-line p-4 hover:border-amber"><span className="font-mono text-xs text-dim">PREVIOUS</span><span className="block font-bold">{prev.title}</span></Link> : <span />}
        {next ? <Link href={`/learn/${next.slug}`} className="rounded-xl border border-line p-4 text-right hover:border-amber"><span className="font-mono text-xs text-dim">NEXT LESSON</span><span className="block font-bold">{next.title}</span></Link> : <Link href="/curriculum" className="rounded-xl border border-amber p-4 text-right font-bold text-amber">You finished all 36. Back to curriculum →</Link>}
      </nav>
    </article>
  );
}
