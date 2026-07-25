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
        className="flex items-center gap-3 px-8 py-4 border border-border bg-card hover:border-primary transition-all font-mono text-sm sm:text-base font-bold mb-10 w-[220px] justify-center cursor-pointer"
      >
        {copied ? (
          <span className="text-primary text-glow-cyan">COPIED!</span>
        ) : (
          <>
            {/* Clean, correct Discord SVG Icon */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
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