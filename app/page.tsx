import Link from "next/link";

function Button({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <Link className={`dt-button ${light ? "dt-button-light" : ""}`} href="/curriculum">{children}<span>↗</span></Link>;
}

function DashboardMockup() {
  return (
    <div className="dashboard-wrap">
      <div className="dashboard-window">
        <div className="window-bar"><span className="window-dot blue" /><span className="window-dot" /><span className="window-dot" /><span className="window-title">tastebuilder / new project</span><span>•••</span></div>
        <div className="dashboard-body">
          <aside className="dashboard-sidebar"><b>TB</b><span>⌂</span><span>▣</span><span>◌</span><span>⚙</span></aside>
          <div className="dashboard-main">
            <div className="dash-topline"><span>VIDEO REVIEW</span><span className="dash-live">● LIVE</span></div>
            <h3>Why this cut keeps people watching</h3>
            <div className="dash-tabs"><span className="active">Overview</span><span>Moments</span><span>Notes</span></div>
            <div className="dash-grid">
              <div className="retention-panel"><div className="panel-label">ATTENTION MAP <b>0:00 — 1:32</b></div><svg viewBox="0 0 380 130" role="img" aria-label="Retention graph"><path d="M0 94 C30 35 65 70 95 60 S150 72 182 34 S230 51 262 26 S325 35 380 16" fill="none" stroke="#3478ff" strokeWidth="3" /><path d="M0 94 C55 88 100 101 155 108 S285 114 380 118" fill="none" stroke="#38404f" strokeDasharray="5 6" /><g stroke="#252b38" strokeWidth="1"><path d="M0 20H380M0 55H380M0 90H380" /></g></svg><div className="graph-legend"><span><i className="legend-blue" />strong cut</span><span><i className="legend-gray" />weak cut</span></div></div>
              <div className="insight-panel"><div className="panel-label">AI NOTE</div><p>“The peak arrives before the explanation. That is why the reveal lands.”</p><span className="note-author">TasteBuilder coach · 2 min ago</span></div>
            </div>
            <div className="dash-bottom"><span>3s hook</span><span>42s reveal</span><span>1:21 payoff</span><b>+18% hold</b></div>
          </div>
        </div>
      </div>
      <div className="floating-note note-left"><span className="mini-blue">●</span><b>Pattern found</b><small>Specific proof keeps the middle alive.</small></div>
      <div className="floating-note note-right"><span className="mini-yellow">✦</span><b>New lesson unlocked</b><small>Read the peak-end rule</small></div>
    </div>
  );
}

function OrbitGraphic() {
  return <div className="orbit-graphic"><div className="orbit-core"><span>◈</span><small>taste</small></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><span className="orbit-node node-a">hook</span><span className="orbit-node node-b">proof</span><span className="orbit-node node-c">peak</span><span className="orbit-node node-d">payoff</span><span className="orbit-node node-e">send</span></div>;
}

function DatabaseGraphic() {
  return <div className="database-graphic"><div className="database-cylinder"><span /><b>TB</b><i /></div>{["hook", "story", "angle", "proof", "ending", "platform"].map((item, index) => <span className={`db-node db-${index}`} key={item}>{item}</span>)}</div>;
}

function PromptMockup() {
  return <div className="prompt-mockup"><div className="prompt-head"><span>YOUR NEXT CUT</span><span>•••</span></div><div className="prompt-avatar">A</div><p>What should the viewer feel before the first reveal?</p><div className="prompt-answer">Curiosity first.<br /><span>Then give them proof they can repeat.</span></div><div className="prompt-footer">Ask TasteBuilder anything <b>↗</b></div></div>;
}

function SelfImprovingGraphic() {
  return <div className="self-graphic"><div className="self-sphere" /><div className="self-orbit" /><div className="self-card"><span>STACK RANKED IDEAS</span><b>✦ The quiet reveal</b><small>strongest ending / 92%</small><b>○ Start with the proof</b><small>best hook / 84%</small><b>◇ Name the cost</b><small>clearest stake / 76%</small></div></div>;
}

const GOVERNANCE = [
  ["Multiple eyes", "Invite a collaborator into the same creative context."],
  ["Built-in proof", "Keep the clips, notes, and decisions together."],
  ["Shared standards", "Give every reviewer the same language."],
  ["Predictable taste", "Make your process easier to repeat."],
  ["Granular permissions", "Keep the right work with the right people."],
  ["Enterprise-grade security", "Your ideas stay yours from first cut to final."],
];

export default function Home() {
  return (
    <div className="dovetail-page">
      <div className="star-field" />
      <section className="dt-hero dt-shell">
        <div className="dt-hero-copy">
          <p className="dt-kicker">The creative context layer for video people</p>
          <h1>Feed <span className="spark-word">your</span><br />creative<br /><em>eye.</em></h1>
          <p className="dt-lede">TasteBuilder brings your lessons, references, instincts, and decisions into one place—so every cut gets clearer, faster, and more intentional.</p>
          <div className="dt-actions"><Button>Start for free</Button><Link className="dt-text-link" href="/lab">See how it works <span>→</span></Link></div>
          <div className="logo-row"><span>CREATORS</span><span>STUDIOS</span><span>DESIGNERS</span><span>EDITORS</span><span>STRATEGISTS</span></div>
        </div>
        <DashboardMockup />
      </section>

      <section className="dt-section dt-shell split-section">
        <div className="split-copy"><p className="dt-kicker">A sharper way to learn</p><h2>Build your creative<br /><em>context layer.</em></h2><p>From first principle to final frame, TasteBuilder gives you a place to collect the patterns that make your work better.</p><Button>Explore the curriculum</Button><ul className="feature-list"><li><b>01</b><span>Turn every lesson into context</span></li><li><b>02</b><span>Bring practice closer to the edit</span></li><li><b>03</b><span>Integrate your taste into every brief</span></li></ul></div><OrbitGraphic />
      </section>

      <section className="proof-section dt-shell"><div className="blue-proof"><span>“The best creative decision is usually the one you can explain simply.”</span><small>TasteBuilder field note · 04 / 36</small></div><div className="stat-proof"><strong>36</strong><span>short lessons<br />to a sharper eye</span></div></section>

      <section className="dt-section dt-shell centered-section"><p className="dt-kicker">One source of creative truth</p><h2>Turn raw <span className="cloud-emoji">✦</span> data<br />into rich <em>context.</em></h2><p>TasteBuilder automatically turns your notes, references, and experiments into a living library of decisions you can actually use.</p><div className="center-actions"><Button>Start for free</Button><Link className="dt-text-link" href="/sources">Read the method <span>→</span></Link></div><DatabaseGraphic /></section>

      <section className="dt-section dt-shell split-section prompt-section"><PromptMockup /><div className="split-copy"><p className="dt-kicker">A better question at every cut</p><h2>Put the audience<br />in <span className="ring-word">every</span> prompt.</h2><p>Keep curiosity, tension, and payoff close to the work. Ask better questions before you ask for another export.</p><ul className="feature-list"><li><b>01</b><span>Simulate customers and market segments</span></li><li><b>02</b><span>Align your whole team with your audience</span></li><li><b>03</b><span>Automate entire workflows</span></li></ul></div></section>

      <section className="proof-section dt-shell"><div className="blue-proof"><span>“Every time a stakeholder does a search and finds something interesting, our repository—not their inbox—is where the work goes next.”</span><small>Studio lead · TasteBuilder customer</small></div><div className="stat-proof"><strong>66%</strong><span>faster creative<br />review cycles</span></div></section>

      <section className="dt-section dt-shell split-section self-section"><div className="split-copy"><p className="dt-kicker">The more you use it, the better it gets</p><h2>Make your work<br /><em>self-improving.</em></h2><p>Compress the distance between feedback and shipped work. TasteBuilder remembers what you notice, what you question, and what you choose.</p><Button>See the Taste Lab</Button></div><SelfImprovingGraphic /></section>

      <section className="dt-section governance-section"><div className="dt-shell"><div className="governance-heading"><p className="dt-kicker">One language. Every collaborator.</p><h2>Govern <span className="cloud-emoji">✦</span> creative<br /><em>context at scale.</em></h2><p>Scale taste without compromising on security and compliance. Set reusable rules, give collaborators access to the right work, and keep every creative decision connected.</p><div className="dt-actions"><Button>Get started</Button><Link className="dt-text-link" href="/curriculum">See the curriculum <span>→</span></Link></div></div><div className="governance-grid">{GOVERNANCE.map(([title, detail], i) => <article key={title}><div className="gov-thumb gov-thumb-{i}"><span>{i === 0 ? "▦" : i === 1 ? "◈" : i === 2 ? "☷" : i === 3 ? "◌" : i === 4 ? "◫" : "◉"}</span></div><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section>

      <section className="customers-section dt-shell"><div className="customer-heading"><h2>In their words, not ours</h2><Button>Start for free</Button></div><div className="customer-grid">{["Arielle", "C N H", "itau", "Studio 04"].map((name, i) => <article key={name}><div className={`customer-image customer-image-${i}`}><b>{name}</b></div><p>{["“The fastest way we found to turn instinct into a repeatable process.”", "“Our team now speaks about creative decisions with the same language.”", "“The work gets better because the questions get better.”", "“It feels like having a sharp editor in the room from day one.”"][i]}</p></article>)}</div></section>

      <section className="dt-cta dt-shell"><div className="cta-mark">T<br /><span>B</span></div><h2>Make work<br /><em>worth watching.</em></h2><div className="dt-actions"><Button>Start for free</Button><Link className="dt-text-link" href="/lab">Tour the Taste Lab <span>→</span></Link></div></section>
    </div>
  );
}
