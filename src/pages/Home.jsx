import React from "react";
import Scanlines from "@/components/Scanlines";
import PixelNav from "@/components/PixelNav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import SystemLog from "@/components/SystemLog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Scanlines />
      <PixelNav />
      <main className="relative z-10">
        <Hero />
        {/* Solid background for all sections below the Hero */}
        <div className="bg-background relative z-10">
          <Projects />
          <About />
          <SystemLog />
          <Contact />
        </div>
      </main>
    </div>
  );
}