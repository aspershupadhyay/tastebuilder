import Link from "next/link";

const SOURCES = [
  { label: "Loewenstein, G. (1994). The Psychology of Curiosity. Psychological Bulletin, 116(1), 75-98. Information-gap theory.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4635443/", note: "Peer-reviewed review, via PMC. Curiosity as a perceived gap between what you know and what you want to know." },
  { label: "Kang et al. (2009). Curiosity and reward anticipation. Related neuroscience on curiosity and memory.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4635443/", note: "Cited in the same PMC review. Used here only for the general link between curiosity, reward anticipation and memory." },
  { label: "Zeigarnik, B. (1927). On finished and unfinished tasks. Open loops and memory for interrupted tasks.", url: "https://blog.neuromarket.co/the-power-of-open-loops-using-the-zeigarnik-effect-to-create-irresistible-content", note: "Secondary explainer for the original 1927 work. Used for open-loop teaching, not for exact effect sizes, which vary by replication." },
  { label: "Kahneman, Fredrickson, Schreiber and Redelmeier (1993). When More Pain Is Preferred to Less. Psychological Science, 4(6), 401-405. Peak-end rule.", url: "https://www.suebehaviouraldesign.com/en/blog/peak-end-rule-at-work/", note: "Secondary explainer for the 1993 study. Used for the peak and ending principle, not for medical advice." },
  { label: "Instagram Reels ranking: watch time, likes and sends. Mosseri, January 2025.", url: "https://www.reelxo.tech/blog/instagram-reels-algorithm", note: "Platform statement, reported by Social Media Today and Instagram for Creators. Signals change; check Instagram for Creators for the current version." },
  { label: "Instagram retention and skip rate, August 2025, and trial Reels to non-followers.", url: "https://somin.ai/blog/social-media-algorithm-changes-2026-what-drives-organic-reach/", note: "Secondary summary of 2025-2026 platform changes. Used for the direction of travel, not as a fixed threshold." },
  { label: "First 3 seconds and retention: practitioner benchmarks and the 3-second decision point.", url: "https://rgba.ai/blog/the-first-3-seconds-why-videos-go-viral-or-die", note: "Practitioner source, not peer-reviewed. Benchmarks in the wider market vary widely, so TasteBuilder teaches the shape of the graph, not a magic number." },
  { label: "Short-form retention and hook patterns.", url: "https://thrivenvision.com/short-form-video-retention", note: "Practitioner source. Used for hook patterns, not as proof of a universal retention rate." },
  { label: "Cinematic editorial design research: Fraunces, restraint, no purple gradients, no Inter default.", url: "https://github.com/deanwhitex/aiw2.0stack/blob/HEAD/research/_framework/web-design-research-2026-05.md", note: "Community research synthesis, May 2026. Used as design inspiration, not as a scientific claim. TasteBuilder v1 used Fraunces; v2 uses Space Grotesk + Manrope + JetBrains Mono for a techy system look." },
  { label: "Cinematic dark editorial example: serif display, grotesk body, restrained accent.", url: "https://designmunk.com/parloa/", note: "Design specification measured from a published page. Used as a reference for hierarchy and spacing, not copied." },
  { label: "Marketplace gap: Skillshare storytelling for video creators, and Coursera video editing specialisations.", url: "https://www.skillshare.com/en/classes/storytelling-masterclass-for-video-creators-how-to-make-viewers-care/88147891", note: "Shows the market is strong on tools and story craft, but not on a dedicated, platform-psychology taste curriculum for short form." },
];

export default function Sources() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber">Sources • Honesty page</p>
      <h1 className="mt-4 font-display text-5xl font-black">What is proven,<br /><em className="text-amber">what is platform, what is practice.</em></h1>
      <p className="mt-6 text-lg leading-relaxed text-fog">
        TasteBuilder separates three kinds of claims, so you are never sold a practitioner guess as science.
        Research means peer-reviewed work. Platform means what Instagram, YouTube or TikTok have actually said.
        Practice means what experienced creators report, which is useful, but not proof.
        Platform signals and benchmarks change. If a number matters for a decision you are about to make,
        check the platform&apos;s own creator page on that day.
      </p>
      <div className="mt-10 space-y-4">
        {SOURCES.map((s) => (
          <div key={s.url + s.label} className="rounded-2xl border border-line bg-panel p-6">
            <Link href={s.url} target="_blank" rel="noreferrer" className="font-display text-xl font-bold text-amber hover:underline">{s.label}</Link>
            <p className="mt-3 leading-relaxed text-fog">{s.note}</p>
            <p className="mt-3 break-all font-mono text-xs text-dim">{s.url}</p>
          </div>
        ))}
      </div>
      <section className="mt-12 rounded-2xl bg-amber p-6 text-ink">
        <h2 className="font-display text-2xl font-bold">Design decisions, in one place</h2>
        <p className="mt-3 leading-relaxed">Fonts: Space Grotesk (tech display) + Manrope (body) + JetBrains Mono (timecodes and graphs). Colours: deep tech black #05070B, signal cyan #00E5FF, acid lime #C8FF2E used sparingly, pink #FF5C7A only for weak versions. Structure: 3 phases, 9 acts, lessons in numbered steps, labs with animated graphs. No purple-blue gradient, no badge wall, no generic hero.</p>
      </section>
    </div>
  );
}
