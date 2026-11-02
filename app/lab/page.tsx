"use client";
import { useMemo, useState } from "react";

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="rounded-2xl border border-line bg-panel p-6"><h2 className="font-display text-2xl font-bold">{title}</h2><div className="mt-4">{children}</div></section>;
}

function HookLab() {
  const [hook, setHook] = useState("9 out of 10 AI agents raised their own limit. 5 paid an attacker.");
  const words = hook.trim().split(/\s+/).filter(Boolean).length;
  const checks = [
    { label: "Short enough to speak in ~3 seconds (10-18 words)", pass: words >= 8 && words <= 18 },
    { label: "Specific: has a number, a person, or a concrete stake", pass: /\d/.test(hook) },
    { label: "Opens a question, does not summarise the whole video", pass: !/in this video (i will|we will)/i.test(hook) },
    { label: "No empty hype adjectives alone (insane, crazy, literally)", pass: !/\b(insane|crazy|literally|unbelievable)\b/i.test(hook) },
    { label: "Not a generic greeting or setup", pass: !/^(hey|hi|hello|so today)/i.test(hook.trim()) },
  ];
  return (
    <Card title="Lab 1 • Hook Tester">
      <p className="text-fog">Paste a hook. This is a heuristic checklist, not an algorithm score. It checks structure, not truth.</p>
      <textarea value={hook} onChange={(e) => setHook(e.target.value)} rows={3} className="mt-4 w-full rounded-xl border border-line bg-ink p-4 text-bone outline-none focus:border-amber" />
      <p className="mt-3 font-mono text-xs text-dim">{words} WORDS • {checks.filter((c) => c.pass).length}/{checks.length} CHECKS PASS</p>
      <ul className="mt-4 space-y-2">{checks.map((c) => <li key={c.label} className={c.pass ? "text-bone" : "text-clay"}>{c.pass ? "✓ " : "✕ "}{c.label}</li>)}</ul>
    </Card>
  );
}

function RetentionLab() {
  const [opening, setOpening] = useState(70);
  const [middle, setMiddle] = useState(50);
  const points = useMemo(() => {
    const start = 100;
    const p3 = opening;
    const p15 = Math.round((opening + middle) / 2);
    const p30 = Math.round(middle * 0.85);
    const p60 = Math.round(middle * 0.7);
    return `${0},${100 - start} ${20},${100 - p3} ${40},${100 - p15} ${70},${100 - p30} ${100},${100 - p60}`;
  }, [opening, middle]);
  return (
    <Card title="Lab 2 • Retention Simulator">
      <p className="text-fog">Move the sliders. This is a teaching model, not a prediction. It shows the shape: a weak opening caps everything after it.</p>
      <label className="mt-4 block text-sm font-bold">Opening strength: {opening}% still watching at 3s</label>
      <input type="range" min={20} max={95} value={opening} onChange={(e) => setOpening(Number(e.target.value))} className="w-full accent-[#00e5ff]" />
      <label className="mt-4 block text-sm font-bold">Middle strength: {middle}% still watching at 30s, if the opening worked</label>
      <input type="range" min={20} max={95} value={middle} onChange={(e) => setMiddle(Number(e.target.value))} className="w-full accent-[#00e5ff]" />
      <svg viewBox="0 0 100 100" className="mt-6 h-48 w-full rounded-xl bg-ink p-2" preserveAspectRatio="none">
        <polyline points={points} fill="none" stroke="#00e5ff" strokeWidth="2" />
      </svg>
      <p className="mt-3 text-sm text-fog">Read it like a story: steep early drop = hook problem. Slow middle bleed = repetition problem. Rise at the end = rewatch, a good sign.</p>
    </Card>
  );
}

const QUIZ = [
  { q: "Which opening is stronger?", a: "Hey guys, today I want to talk about AI agents and security, it is a really important topic.", b: "9 out of 10 AI agents raised their own limit. 5 paid an attacker.", why: "B is specific, surprising, and opens a question. A is setup with no stake." },
  { q: "Which ending is stronger?", a: "So yeah, please like, share and subscribe for more.", b: "The limit was not broken. It was raised, by the agent itself.", why: "B is a quotable peak. A is admin, and it replaces the ending." },
  { q: "Which video is more likely to be sent to a friend?", a: "A correct summary of today's news, with no angle.", b: "A video that names who won, who paid, and what happens next.", why: "Sends are identity votes. A summary gives no reason to send it to one specific person." },
];

function Quiz() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<"a" | "b" | null>(null);
  const item = QUIZ[i];
  return (
    <Card title="Lab 3 • Jaw Test Quiz">
      <p className="font-bold">{item.q}</p>
      <div className="mt-4 grid gap-3">
        {(["a", "b"] as const).map((k) => (
          <button key={k} onClick={() => setPicked(k)} className={`rounded-xl border p-4 text-left ${picked === k ? (k === "b" ? "border-amber bg-ink" : "border-clay bg-ink") : "border-line hover:border-amber"}`}>
            <span className="font-mono text-xs text-amber">{k.toUpperCase()}.</span> {item[k]}
          </button>
        ))}
      </div>
      {picked && <p className="mt-4 leading-relaxed text-fog">{picked === "b" ? "Correct. " : "Not quite. "}{item.why}</p>}
      <button onClick={() => { setPicked(null); setI((i + 1) % QUIZ.length); }} className="mt-4 rounded-full bg-amber px-4 py-2 text-sm font-bold text-ink">Next question</button>
    </Card>
  );
}

function BriefLab() {
  const [intention, setIntention] = useState("Prove the winner is not who you think");
  const [hook, setHook] = useState("9 out of 10 AI agents raised their own limit.");
  const [peak, setPeak] = useState("The payment on screen, in silence");
  const [ending, setEnding] = useState("The limit was raised by the agent itself.");
  const brief = `DIRECTOR BRIEF\nIntention: ${intention}\nHook (10-14 words): ${hook}\nPeak: ${peak}\nEnding: ${ending}\nCut first: anything that repeats the hook without new proof.`;
  return (
    <Card title="Lab 4 • Director Brief Builder">
      <p className="text-fog">Fill 4 lines. Copy the brief and give it to an editor, or to an AI tool. If a line could fit any video, rewrite it.</p>
      <div className="mt-4 grid gap-3">
        <input value={intention} onChange={(e) => setIntention(e.target.value)} className="rounded-xl border border-line bg-ink p-3 outline-none focus:border-amber" placeholder="Intention in 8 words" />
        <input value={hook} onChange={(e) => setHook(e.target.value)} className="rounded-xl border border-line bg-ink p-3 outline-none focus:border-amber" placeholder="Hook" />
        <input value={peak} onChange={(e) => setPeak(e.target.value)} className="rounded-xl border border-line bg-ink p-3 outline-none focus:border-amber" placeholder="Peak moment" />
        <input value={ending} onChange={(e) => setEnding(e.target.value)} className="rounded-xl border border-line bg-ink p-3 outline-none focus:border-amber" placeholder="Ending line" />
      </div>
      <pre className="mt-4 whitespace-pre-wrap rounded-xl bg-ink p-4 font-mono text-sm leading-relaxed text-bone">{brief}</pre>
      <button onClick={() => navigator.clipboard?.writeText(brief).catch(() => {})} className="mt-4 rounded-full border border-line px-4 py-2 text-sm font-bold hover:border-amber">Copy brief</button>
    </Card>
  );
}

export default function Lab() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">Taste Lab • Practice, not theory</p>
      <h1 className="mt-4 font-display text-5xl font-black">Train the eye<br /><em className="text-amber">in 10 minutes.</em></h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fog">Four interactive tools. No data leaves your browser. No scores are saved, no AI grades you. You judge, and the checklist makes your judgement visible.</p>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <HookLab /><RetentionLab /><Quiz /><BriefLab />
      </div>
    </div>
  );
}
