"use client";
import { useEffect, useState } from "react";
import { progressKey } from "@/lib/lessons";

export default function MarkDone({ slug }: { slug: string }) {
  const [done, setDone] = useState(false);
  useEffect(() => {
    try {
      const list: string[] = JSON.parse(localStorage.getItem(progressKey) || "[]");
      setDone(list.includes(slug));
    } catch { setDone(false); }
  }, [slug]);
  const toggle = () => {
    try {
      const list: string[] = JSON.parse(localStorage.getItem(progressKey) || "[]");
      const next = done ? list.filter((x) => x !== slug) : [...list, slug];
      localStorage.setItem(progressKey, JSON.stringify(next));
      setDone(!done);
    } catch { /* ignore */ }
  };
  return (
    <button onClick={toggle} className={`rounded-full px-5 py-2.5 text-sm font-bold ${done ? "bg-bone text-ink" : "bg-amber text-ink hover:bg-amber-deep"}`}>
      {done ? "Done - tap to undo" : "Mark this lesson done"}
    </button>
  );
}
