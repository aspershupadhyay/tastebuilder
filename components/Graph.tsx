export function RetentionGraph({ title = "RETENTION // LIVE", strong = true }: { title?: string; strong?: boolean }) {
  return (
    <div className="rounded-2xl border border-line bg-panel p-5">
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-dim">
        <span>{title}</span><span className="text-amber">● LIVE</span>
      </div>
      <svg viewBox="0 0 200 100" className="mt-4 h-44 w-full">
        <g stroke="#1e2e3d" strokeWidth="1">
          {[20, 40, 60, 80].map((y) => <line key={y} x1="0" x2="200" y1={y} y2={y} />)}
          {[40, 80, 120, 160].map((x) => <line key={x} x1={x} x2={x} y1="0" y2="100" />)}
        </g>
        <path d="M 0 70 C 30 20, 60 55, 100 45 S 170 30, 200 25" fill="none" stroke="#00e5ff" strokeWidth="2.5" className="draw" />
        <path d={strong ? "M 0 70 C 20 78, 50 85, 100 88 S 170 92, 200 94" : "M 0 20 C 30 50, 80 75, 200 90"} fill="none" stroke="#ff5c7a" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8" />
        <circle r="4" fill="#c8ff2e" className="pulse-dot"><animate attributeName="cx" from="0" to="200" dur="2.4s" fill="freeze" /><animate attributeName="cy" values="70;20;55;45;30;25" dur="2.4s" fill="freeze" /></circle>
        <text x="0" y="98" fill="#64748b" fontSize="7" fontFamily="monospace">0s</text>
        <text x="85" y="98" fill="#64748b" fontSize="7" fontFamily="monospace">30s</text>
        <text x="180" y="98" fill="#64748b" fontSize="7" fontFamily="monospace">60s</text>
      </svg>
      <div className="mt-3 grid grid-cols-3 gap-3 text-center font-mono text-xs">
        <div className="rounded-lg border border-line p-2"><p className="text-amber font-bold">3s</p><p className="text-dim">HOOK</p></div>
        <div className="rounded-lg border border-line p-2"><p className="text-lime font-bold">PEAK</p><p className="text-dim">REVEAL</p></div>
        <div className="rounded-lg border border-line p-2"><p className="text-bone font-bold">END</p><p className="text-dim">MEMORY</p></div>
      </div>
      <p className="mt-3 text-sm text-fog">Cyan is the strong shape: a dip, then a hold, then a peak. Pink dashed is the weak shape: a straight fall. The graph is the story.</p>
    </div>
  );
}

export function AttentionBars() {
  const bars = [92, 68, 84, 45, 78, 96, 58];
  const labels = ["FACE", "MOVE", "TEXT", "STATIC", "PROOF", "PEAK", "CTA"];
  return (
    <div className="rounded-2xl border border-line bg-panel p-5">
      <p className="font-mono text-[11px] uppercase tracking-widest text-dim">ATTENTION BY MOMENT // WHAT THE EYE KEEPS</p>
      <div className="mt-5 flex h-32 items-end gap-2">
        {bars.map((h, i) => (
          <div key={labels[i]} className="flex-1">
            <div className={`bar-grow w-full rounded-t ${h > 80 ? "bg-amber" : h > 60 ? "bg-lime" : "bg-clay"}`} style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }} />
            <p className="mt-2 text-center font-mono text-[9px] text-dim">{labels[i]}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm text-fog">Static frames and admin endings bleed attention. Faces, proof and peaks hold it.</p>
    </div>
  );
}

export function StoryArc() {
  return (
    <div className="rounded-2xl border border-line bg-panel p-5">
      <p className="font-mono text-[11px] uppercase tracking-widest text-dim">STORY ARC // 90 SECONDS, COMPRESSED</p>
      <svg viewBox="0 0 200 90" className="mt-4 h-36 w-full">
        <path d="M 5 75 L 50 70 L 100 25 L 150 55 L 195 20" fill="none" stroke="#00e5ff" strokeWidth="2.5" className="draw-slow" />
        <circle cx="100" cy="25" r="5" fill="#c8ff2e" className="pulse-dot" />
        <text x="5" y="88" fill="#64748b" fontSize="7" fontFamily="monospace">PROMISE</text>
        <text x="80" y="15" fill="#c8ff2e" fontSize="7" fontFamily="monospace">PEAK</text>
        <text x="165" y="88" fill="#64748b" fontSize="7" fontFamily="monospace">PAYOFF</text>
      </svg>
      <p className="mt-2 text-sm text-fog">Promise in 3 seconds, tension in the middle, peak before the end, payoff as the last line. No trailing admin.</p>
    </div>
  );
}
