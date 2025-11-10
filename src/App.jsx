import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedGrid from './components/FeaturedGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const gradientRef = useRef(null);

  useEffect(() => {
    if (!gradientRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(gradientRef.current, { '--hue': 0, '--intensity': 1 });

      // Smooth looping hue rotation across purple→blue→orange
      gsap.to(gradientRef.current, {
        duration: 16,
        repeat: -1,
        ease: 'none',
        keyframes: [
          { '--hue': 60 }, // warm
          { '--hue': 200 }, // blue
          { '--hue': 300 }, // magenta
          { '--hue': 20 }, // orange
          { '--hue': 0 },
        ],
      });

      // Scroll-linked subtle intensity shift
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const v = 1 + self.progress * 0.4; // 1 → 1.4
          gradientRef.current?.style.setProperty('--intensity', String(v));
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#07080d] text-white relative">
      {/* Animated, color-shifting gradient background (non-blocking) */}
      <div
        ref={gradientRef}
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(1200px 800px at 20% 30%, rgba(139, 92, 246, calc(0.18 * var(--intensity,1))), transparent 60%), radial-gradient(1000px 700px at 80% 70%, rgba(56, 189, 248, calc(0.16 * var(--intensity,1))), transparent 60%), radial-gradient(900px 600px at 50% 55%, rgba(249, 115, 22, calc(0.12 * var(--intensity,1))), transparent 60%)',
          filter: 'hue-rotate(var(--hue, 0deg))',
        }}
      />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <FeaturedGrid />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
