import React from "react";

const ITEMS = [
  {
    n: "01.",
    title: "Advanced Mechanics & Physics",
    desc: "Highly proficient in engine-level logic, including raycasting and physical object constraints. This translates to building immersive, highly optimized gameplay loops and precise environmental interactions for survival horror and action prototypes.",
  },
  {
    n: "02.",
    title: "Secure Systems",
    desc: "Strong command over robust back-end development. By prioritizing server-safe mechanics and strictly managing client-server boundaries, I ensure that complex multiplayer logic and competitive systems remain stable, optimized, and exploit-free.",
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <div className="font-pixel text-[10px] text-primary text-glow-cyan mb-6 flex items-center gap-2 tracking-wider">
            <span className="text-primary">+</span> ABOUT
          </div>
          
          {/* Scaled up the heading massively to match screenshot */}
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-glow-soft">
            4 years of building the architecture of your <span className="text-accent text-glow-pink">experiences.</span>
          </h2>
          
          <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-md">
            I'm a programmer capable of designing comprehensive, server-safe architectures that power
            complex game mechanics, from custom movement and stamina systems to round-based PvE
            environments.
          </p>
        </div>
        <div className="space-y-0 pt-2 lg:pt-0">
          {ITEMS.map((it, idx) => (
            <div key={it.n} className={`py-10 ${idx > 0 ? "border-t border-border" : ""}`}>
              <div className="font-mono text-xs text-muted-foreground mb-4">{it.n}</div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">{it.title}</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}