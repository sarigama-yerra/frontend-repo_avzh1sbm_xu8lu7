import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedGrid from './components/FeaturedGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { gsap } from 'gsap';

function App() {
  const gradientRef = useRef(null);

  useEffect(() => {
    if (!gradientRef.current) return;
    // Animate a subtle, looping hue rotation for the background gradient
    const ctx = gsap.context(() => {
      gsap.set(gradientRef.current, { '--hue': 0 });
      gsap.to(gradientRef.current, {
        duration: 12,
        repeat: -1,
        ease: 'none',
        keyframes: [
          { '--hue': 120 },
          { '--hue': 240 },
          { '--hue': 360 },
        ],
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0a0b10] text-white relative">
      {/* Animated, color-shifting gradient background */}
      <div
        ref={gradientRef}
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            'radial-gradient(1200px 800px at 20% 30%, rgba(88, 101, 242, 0.20), transparent 60%), radial-gradient(1000px 700px at 80% 70%, rgba(56, 189, 248, 0.18), transparent 60%), radial-gradient(900px 600px at 50% 50%, rgba(217, 70, 239, 0.16), transparent 60%)',
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
