import React, { useEffect, useRef, useState } from "react";

export default function TerminalCode({ code, file }) {
  const [typed, setTyped] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStarted(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const id = setInterval(() => {
      i += 3;
      setTyped(code.slice(0, i));
      if (i >= code.length) clearInterval(id);
    }, 15);
    return () => clearInterval(id);
  }, [started, code]);

  return (
    <div
      ref={ref}
      className="group relative aspect-[4/3] overflow-hidden border border-border box-glow-cyan bg-[#08080c] rounded-md"
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-card/60">
        <span className="w-2.5 h-2.5 rounded-full bg-destructive" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffb700]" />
        <span className="w-2.5 h-2.5 rounded-full bg-primary" />
        <span className="ml-2 font-mono text-[11px] text-muted-foreground">{file}</span>
      </div>
      <pre className="p-4 font-mono text-[12px] leading-relaxed overflow-x-auto text-foreground whitespace-pre-wrap">
        {typed}
        <span className="animate-pulse text-primary">_</span>
      </pre>
    </div>
  );
}