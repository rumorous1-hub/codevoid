import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/6a64fc1f45de6e08ab3bdf42/07acc9fa5_generated_495426d9.png";
const BOOT = "> SYSTEM LOADED. WELCOME TO THE VOID.";
const CODE = `<span class="text-accent">local function</span> <span class="text-primary">process_stamina</span>(character: <span class="text-[#ffb700]">Model</span>, is_running: <span class="text-[#ffb700]">boolean</span>, dt: <span class="text-[#ffb700]">number</span>)
    <span class="text-accent">local</span> current = character:GetAttribute(<span class="text-[#9eff9e]">"Stamina"</span>)
    <span class="text-accent">local</span> rate = character:GetAttribute(<span class="text-[#9eff9e]">"DrainRate"</span>)
    <span class="text-accent">if</span> is_running <span class="text-accent">and</span> current > 0 <span class="text-accent">then</span>
        character:SetAttribute(<span class="text-[#9eff9e]">"Stamina"</span>, math.max(0, current - (rate * dt)))
    <span class="text-accent">elseif</span> <span class="text-accent">not</span> is_running <span class="text-accent">and</span> current < 100 <span class="text-accent">then</span>
        character:SetAttribute(<span class="text-[#9eff9e]">"Stamina"</span>, math.min(100, current + (rate * 0.5 * dt)))
    <span class="text-accent">end</span>
<span class="text-accent">end</span>`;

function CodeCard() {
  return (
    <div className="relative animate-float">
      <div className="box-glow-cyan bg-card/90 backdrop-blur border border-border rounded-md overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <span className="w-2.5 h-2.5 rounded-full bg-accent" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffb700]" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="ml-2 font-mono text-[11px] text-muted-foreground">player_stamina.lua</span>
        </div>
        <pre
          className="p-4 font-mono text-[12px] sm:text-[13px] leading-relaxed overflow-x-auto text-foreground"
          dangerouslySetInnerHTML={{ __html: CODE }}
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const [typed, setTyped] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTyped(BOOT.slice(0, i));
      i++;
      if (i > BOOT.length) clearInterval(id);
    }, 50);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("tenshikodo");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: `url('${HERO_IMG}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
      </div>

      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-left space-y-6">
          <div className="font-mono text-xs font-bold tracking-wider text-primary flex items-center gap-2">
            <span className="w-2 h-2 bg-primary animate-pulse" />
            AVAILABLE FOR WORK
          </div>
          
          <div className="font-mono text-sm text-muted-foreground h-6 flex items-center">
            {typed}
            <span className="inline-block w-2.5 h-[1.1em] bg-primary animate-pulse ml-1" />
          </div>
          
          <h1 className="font-display text-5xl sm:text-7xl font-bold leading-[1.1] text-glow-soft">
            I build systems that <br/> <span className="text-primary text-glow-cyan">Feel alive.</span>
          </h1>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-md">
            I'm <strong>tenshi</strong>, a programmer with over 5 years in building performance-friendly modular systems and experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button onClick={() => scrollTo('work')} className="px-6 py-3 bg-primary text-primary-foreground font-mono font-bold text-sm hover:opacity-90 box-glow-cyan transition-all">
              VIEW MY WORK
            </button>
            <button onClick={() => scrollTo('contact')} className="px-6 py-3 border border-border bg-card font-mono font-bold text-sm hover:border-primary transition-all">
              GET IN TOUCH
            </button>
          </div>
        </div>
        <CodeCard />
      </div>

      <button onClick={() => scrollTo('work')} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
        <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">SCROLL</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground animate-bounce" />
      </button>
    </section>
  );
}