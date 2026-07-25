import Scanlines from "@/components/Scanlines";
import PixelNav from "@/components/PixelNav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import SystemLog from "@/components/SystemLog";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-20 starfield animate-drift" />
      <Scanlines />
      <PixelNav />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <SystemLog />
        <Contact />
      </main>
    </div>
  );
}