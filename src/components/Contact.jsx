import React, { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("tenshikodo");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 flex flex-col items-center justify-center text-center px-6 border-t border-border mt-20">
      
      {/* Eyebrow Label */}
      <div className="font-mono text-[10px] tracking-wider text-muted-foreground flex items-center gap-2 mb-8 uppercase font-bold">
        <span className="w-1.5 h-1.5 bg-accent text-glow-pink inline-block"></span> GET IN TOUCH
      </div>
      
      {/* Massive Pixel Heading */}
      <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-glow-soft mb-12 max-w-4xl">
        <span className="text-primary text-glow-cyan">Interested?</span> Let's start making your project come alive.
      </h2>
      
      {/* Discord Copy Button */}
      <button 
        onClick={handleCopy}
        className="flex items-center gap-3 px-8 py-4 border border-border bg-card hover:border-primary transition-all font-mono text-sm sm:text-base font-bold mb-10 w-[220px] justify-center"
      >
        {copied ? (
          <span className="text-primary text-glow-cyan">COPIED!</span>
        ) : (
          <>
            {/* Native Discord SVG Logo */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.33-.35-.76-.53-1.09a.09.09 0 0 0-.07-.03c-1.5.26-2.93.71-4.27 1.33a.08.08 0 0 0-.04.03C2.68 13.1 2.05 19.31 2.85 22.5c.01.02.03.04.05.05 1.77 1.31 3.49 2.1 5.16 2.62.03.01.05-.01.07-.03l.81-1.12a.09.09 0 0 0-.04-.12 11.29 11.29 0 0 1-1.63-.78.09.09 0 0 1-.01-.15c.11-.08.23-.17.34-.26.02-.01.04-.02.06-.01 3.25 1.49 6.77 1.49 10 0 .02-.01.04 0 .06.01.11.09.23.18.34.26a.09.09 0 0 1-.01.15c-.51.3-1.06.57-1.63.78a.09.09 0 0 0-.04.12l.81 1.12c.02.02.04.04.07.03 1.67-.52 3.39-1.31 5.16-2.62.02-.01.04-.03.05-.05.89-3.66.08-9.75-1.83-15.84a.08.08 0 0 0-.04-.03Zm-10.42 11.5c-1.16 0-2.11-1.05-2.11-2.35 0-1.3 1.05-2.35 2.35-2.35s2.35 1.05 2.35 2.35c0 1.3-1.05 2.35-2.35 2.35Zm6.3 0c-1.16 0-2.11-1.05-2.11-2.35 0-1.3 1.05-2.35 2.35-2.35s2.35 1.05 2.35 2.35c0 1.3-1.05 2.35-2.35 2.35Z"/>
            </svg>
            tenshikodo
          </>
        )}
      </button>
      
      {/* Legal Subtext */}
      <p className="font-mono text-xs sm:text-sm text-muted-foreground max-w-xl leading-relaxed">
        When contacting me for business, you agree to my <span className="underline decoration-border underline-offset-4 cursor-pointer hover:text-foreground transition-colors">Terms of Service</span> and to using PayPal for transactions.
      </p>
    </section>
  );
}