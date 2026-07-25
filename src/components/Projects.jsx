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
end
function RoundService:ApplyStaminaConstraints(player)
    local character = player.Character or player.CharacterAdded:Wait()
    character:SetAttribute("Stamina", 100)
    character:SetAttribute("DrainRate", self.DifficultyMultiplier)
    [...]`,
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