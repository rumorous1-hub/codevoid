import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Image } from "@/components/ui/image";
const HERO_IMG = "https://media.base44.com/images/public/6a64fc1f45de6e08ab3bdf42/07acc9fa5_generated_495426d9.png";
const BOOT = "> SYSTEM LOADED. WELCOME TO THE VOID.";
const CODE = `<span class="text-accent">local function</span> <span class="text-primary">process_stamina</span>(character: <span class="text-[#ffb700]">Model</span>, is_running: <span class="text-[#ffb700]">boolean</span>, dt: <span class="text-[#ffb700]">number</span>)
    <span class="text-accent">local</span> current = character:GetAttribute(<span class="text-[#9eff9e]">"Stamina"</span>)
    <span class="text-accent">local</span> rate = character:GetAttribute(<span class="text-[#9eff9e]">"DrainRate"</span>)
    <span class="text-accent">if</span> is_running <span class="text-accent">and</span> current > 0 <span class="text-accent">then</span>
        character:SetAttribute(<span class="text-[#9eff9e]">"Stamina"</span>, math.max(0, current - (rate * dt)))
    <span class="text-accent">elseif</span> <span class="text-accent">not</span> is_running <span class="text-accent">and</span> current &lt; 100 <span class="text-accent">then</span>
        character:SetAttribute(<span class="text-[#9eff9e]">"Stamina"</span>, math.min(100, current + (rate * 0.5 * dt)))
    <span class="text-accent">end</span>
<span class="text-accent">end</span>`;
function CodeCard() {
  return (
    <div className="relative animate-float">
      <div className="box-glow-cyan bg-card/90 backdrop-blur border border-border">
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
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {