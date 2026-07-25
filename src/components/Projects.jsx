import React from "react";
import TerminalCode from "@/components/TerminalCode";

const PROJECTS = [
  {
    n: "01",
    title: "Round-Based Survival Framework",
    desc: "A core game loop for a PvE survival horror thriller. Features heavily optimized custom movement mechanics, stamina constraints, and server-safe state management across multiple active rounds.",
    tags: ["Backend", "State Management"],
    stats: [["2,500", "LINES OF CODE"], ["14 days", "TURNAROUND"], ["$300", "PRICE"]],
    file: "round_service.lua",
    code: `local RoundService = {}
RoundService.__index = RoundService

function RoundService.new(mapData, playerList)
    local self = setmetatable({}, RoundService)
    self.Active = true
    self.Survivors = playerList
    self.StartTime = os.time()
    self.DifficultyMultiplier = #playerList * 1.5
    
    for _, player in ipairs(self.Survivors) do
        self:ApplyStaminaConstraints(player)
    end
    
    return self
end`,
  },
  {
    n: "02",
    title: "Competitive Bracket & Tryout System",
    desc: "A secure, server-sided matchmaking and tournament bracket framework designed for crew tryouts. Tracks match logs, rank hierarchies, and division placements without risking client exploitation.",
    tags: ["DataStores", "Server-Safe"],
    stats: [["1,200", "LINES OF CODE"], ["7 days", "TURNAROUND"], ["$150", "PRICE"]],
    file: "matchmaking.lua",
    code: `local MatchmakingService = require(script.Parent.Modules.DataStoreHandler)

local function initializeBracket(crewId, participants)
    -- Bracket initialization logic
    print("Bracket initialized for " .. crewId)
    -- Security boundaries established
    -- Wait for round tick...
end`,
  }
];

export default function Projects() {
  return (
    <section id="work" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          {/* Changed to pink SELECTED WORK */}
          <div className="font-pixel text-[10px] text-accent text-glow-pink mb-5 flex items-center gap-2 tracking-wider">
            <span className="text-accent">+</span> SELECTED WORK
          </div>
          {/* Changed to Featured projects */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-glow-soft">
            Featured projects
          </h2>
          <p className="font-mono text-sm text-muted-foreground mt-4 max-w-md">
            A list of recent systems I've built that show some areas I may specialize in.
          </p>
        </div>
        
        <div className="space-y-24">
          {PROJECTS.map((proj, idx) => (
            <div key={idx} className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="font-mono text-xs text-muted-foreground mb-3">{proj.n}</div>
                <h3 className="font-display text-3xl font-bold mb-4">{proj.title}</h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">{proj.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {proj.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-muted text-xs font-mono text-muted-foreground rounded-sm border border-border">{tag}</span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {proj.stats.map((stat, sIdx) => (
                    <div key={sIdx}>
                      <div className="font-display text-2xl text-primary text-glow-cyan mb-1">{stat[0]}</div>
                      <div className="font-mono text-[10px] text-muted-foreground uppercase">{stat[1]}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={idx % 2 !== 0 ? "lg:order-1" : ""}>
                 <TerminalCode code={proj.code} file={proj.file} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}