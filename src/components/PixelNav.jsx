import React, { useEffect, useState } from "react";

const LINKS = [
  { id: "home", label: "tenshikodo", brand: true },
  { id: "work", label: "work" },
  { id: "about", label: "about" },
  { id: "contact", label: "contact" }
];

export default function PixelNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    // Removed the phantom "event" id that wasn't being used
    ["home", "work", "about", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  // Helper function to handle the smooth scroll
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-1 sm:gap-2 bg-card/80 backdrop-blur border border-border box-edge px-2 sm:px-3 py-2">
        {LINKS.map((l) => {
          const isActive = active === l.id;
          return (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`px-2 sm:px-3 py-1.5 font-mono text-[11px] sm:text-xs tracking-wider transition-colors ${
                l.brand
                  ? "text-primary text-glow-cyan font-bold"
                  : isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}