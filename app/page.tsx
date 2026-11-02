import Link from "next/link";
import { ACTS, LESSONS } from "@/lib/lessons";

const PHASES = [
  { number: "01", name: "See", detail: "Learn to spot the tiny decisions that make a video impossible to ignore.", color: "yellow" },
  { number: "02", name: "Shape", detail: "Turn an idea into a clear hook, a rising middle, and an ending worth remembering.", color: "pink" },
  { number: "03", name: "Direct", detail: "Judge, brief, and improve your work without hiding behind taste or tools.", color: "blue" },
];

const SIGNALS = [
  ["01", "A hook is a promise.", "It gives the viewer a reason to spend the next three seconds with you."],
  ["02", "A peak is a change.", "The best moment is not louder. It is the moment the meaning shifts."],
  ["03", "An ending is a memory.", "Leave people with a line, image, or question they can carry away."],
];

function Doodle({ type }: { type: "eye" | "spark" | "arrow" }) {
  if (type === "eye") return <span className="doodle doodle-eye" aria-hidden="true">◉</span>;
  if (type === "spark") return <span className="doodle doodle-spark" aria-hidden="true">✦</span>;
  return <span className="doodle doodle-arrow" aria-hidden="true">↗</span>;
}

export default function Home() {
  const totalMinutes = LESSONS.reduce((sum, lesson) => sum + lesson.minutes, 0);

  return (
    <div className="studio-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">A school for better video taste <span className="eyebrow-dot" /></p>
          <h1>Make work<br /><em>worth watching.</em></h1>
          <p className="hero-intro">
            TasteBuilder helps you see why a video works before you reach for another tool.
            Short lessons, practical experiments, and a sharper eye for the moments that matter.
          </p>
          <div className="hero-actions">
            <Link href="/curriculum" className="button button-dark">Start learning <span>↗</span></Link>
            <Link href="/lab" className="text-link">Try the Taste Lab <span>→</span></Link>
          </div>
        </div>
        <div className="hero-art" aria-label="An illustrated taste map">
          <div className="art-note art-note-top">YOUR NEXT<br />GOOD IDEA</div>
          <div className="art-circle art-circle-yellow" />
          <div className="art-circle art-circle-pink" />
          <div className="art-line art-line-one" />
          <div className="art-line art-line-two" />
          <div className="art-sticker sticker-eye"><Doodle type="eye" /></div>
          <div className="art-sticker sticker-spark"><Doodle type="spark" /></div>
          <div className="art-sticker sticker-arrow"><Doodle type="arrow" /></div>
          <div className="art-caption">follow the feeling<br />then find the proof</div>
        </div>
      </section>

      <section className="marquee-section" aria-label="TasteBuilder principles">
        <div className="marquee-track">
          <span>HOOK</span><i>✳</i><span>TENSION</span><i>✳</i><span>PROOF</span><i>✳</i><span>PAYOFF</span><i>✳</i><span>REWATCH</span><i>✳</i>
          <span>HOOK</span><i>✳</i><span>TENSION</span><i>✳</i><span>PROOF</span><i>✳</i><span>PAYOFF</span><i>✳</i><span>REWATCH</span>
        </div>
      </section>

      <section className="statement-section section-shell">
        <div className="section-label">01 / The idea</div>
        <div className="statement-grid">
          <h2>Tools teach you <em>how.</em><br />Taste teaches you <em>when.</em></h2>
          <div className="statement-body">
            <p>There is no shortage of software, templates, or advice. What is harder to find is the confidence to tell the difference between a video that is merely polished and one that people choose to keep watching.</p>
            <p>We made TasteBuilder for that gap: a small, opinionated curriculum for creators who want to make better calls.</p>
            <Link href="/sources" className="text-link">See what this is built on <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="signals-section">
        <div className="section-shell">
          <div className="section-label">02 / The practice</div>
          <div className="signals-heading">
            <h2>Read the room<br /><em>before it leaves.</em></h2>
            <p>Three simple ideas. Repeated until they become instinct.</p>
          </div>
          <div className="signal-list">
            {SIGNALS.map(([number, title, detail], index) => (
              <article className={`signal-card signal-${index + 1}`} key={number}>
                <span className="signal-number">{number}</span>
                <div className="signal-icon"><Doodle type={index === 0 ? "eye" : index === 1 ? "spark" : "arrow"} /></div>
                <div><h3>{title}</h3><p>{detail}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="path-section section-shell">
        <div className="section-label">03 / The path</div>
        <div className="path-heading">
          <h2>Start anywhere.<br /><em>Build everywhere.</em></h2>
          <p>{LESSONS.length} lessons, {totalMinutes} minutes, and four small labs to turn watching into doing.</p>
        </div>
        <div className="phase-grid">
          {PHASES.map((phase, index) => (
            <Link className={`phase-card phase-${phase.color}`} href="/curriculum" key={phase.number}>
              <span className="phase-number">{phase.number}</span>
              <span className="phase-mark">{index === 0 ? "◌" : index === 1 ? "✳" : "↗"}</span>
              <h3>{phase.name}</h3>
              <p>{phase.detail}</p>
              <span className="phase-link">Explore phase <b>↗</b></span>
            </Link>
          ))}
        </div>
        <div className="acts-strip">
          <div><span className="strip-kicker">The full curriculum</span><strong>9 acts for a more deliberate eye.</strong></div>
          <div className="act-pills">{ACTS.slice(0, 6).map((act) => <span key={act.n}>{String(act.n).padStart(2, "0")} {act.title}</span>)}</div>
          <Link href="/curriculum" className="round-arrow">↗</Link>
        </div>
      </section>

      <section className="lab-section">
        <div className="section-shell lab-grid">
          <div>
            <div className="section-label">04 / The taste lab</div>
            <h2>Less theory.<br /><em>More “oh, I see it.”</em></h2>
            <p>Test a hook. Shape a retention curve. Compare two endings. Leave with a decision, not a score.</p>
            <Link href="/lab" className="button button-light">Open the lab <span>↗</span></Link>
          </div>
          <div className="lab-card">
            <div className="lab-card-top"><span>LIVE EXERCISE</span><span>04 / 04</span></div>
            <div className="lab-quote">“The limit was raised<br />by the agent itself.”</div>
            <div className="lab-wave"><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
            <div className="lab-card-bottom"><span>JAW TEST</span><span className="lab-check">✓</span></div>
          </div>
        </div>
      </section>

      <section className="closing-section section-shell">
        <div className="closing-sticker"><Doodle type="spark" /></div>
        <p className="eyebrow">No gatekeeping. No jargon. No magic score.</p>
        <h2>Good taste is<br /><em>a practice.</em></h2>
        <Link href="/curriculum" className="button button-dark">Take the first lesson <span>↗</span></Link>
      </section>
    </div>
  );
}
