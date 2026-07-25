import React, { useEffect, useRef, useState } from "react";

const MESSAGES = [
  "INIT :: void-sync kernel v2.6.1 loaded",
  "AUTH :: handshake established   session secure",
  "NET  :: packet 0x4F2A routed via uplink-7",
  "DATA :: datastore snapshot persisted (12ms)",
  "PHYS :: raycast solver   4096 rays/frame",
  "OOM  :: garbage collector reclaimed 38.2MB",
  "REPL :: state replicated to 4 nodes",
  "SEC  :: exploit vector scanned   clean",
  "TASK :: stamina drain tick dispatched",
  "EVT  :: round transition queued (  1.2s)",
  "UI   :: typography cache rebuilt",
  "WARN :: frame budget 14.8ms / 16.6ms",
  "INFO :: heartbeat ack from shard-3",
  "NET  :: latency 24ms   nominal",
  "CORE :: render pipeline flushed"
];

function stamp() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
}

export default function SystemLog() {
  const [lines, setLines] = useState([]);
  const boxRef = useRef(null);

  useEffect(() => {
    let i = 0;
    const push = () => {
      setLines((prev) => {
        const next = [...prev, `[${stamp()}] ${MESSAGES[i % MESSAGES.length]}`];
        i++;
        return next.slice(-14);
      });
    };
    push();
    const id = setInterval(push, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <div ref={boxRef} className="font-mono text-xs text-muted-foreground bg-black/50 p-4 border border-border h-64 overflow-hidden flex flex-col justify-end">
        {lines.map((line, idx) => (
          <div key={idx} className="opacity-80">{line}</div>
        ))}
      </div>
    </div>
  );
}