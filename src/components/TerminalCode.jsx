import { useEffect, useRef, useState } from "react";
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
      i += 2;
      setTyped(code.slice(0, i));
      if (i >= code.length) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [started, code]);
  return (
    <div
      ref={ref}
      className="group relative aspect-[4/3] overflow-hidden border border-border box-glow-cyan bg-[#08080c]"
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-card/60">
        <span className="w-2.5 h-2.5 rounded-full bg-accent" />