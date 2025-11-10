import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const auraRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro sequence with staggered reveal
      gsap.fromTo(
        titleRef.current,
        { y: 32, opacity: 0, filter: 'blur(4px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9, ease: 'power3.out' }
      );
      gsap.fromTo(
        subRef.current,
        { y: 22, opacity: 0, filter: 'blur(4px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, delay: 0.1, ease: 'power3.out' }
      );
      gsap.fromTo(
        ctaRef.current,
        { y: 12, opacity: 0, filter: 'blur(2px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );

      // Aura pulsing and slow rotation for a living feel
      if (auraRef.current) {
        gsap.to(auraRef.current, {
          scale: 1.06,
          rotate: 1,
          opacity: 0.9,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Parallax drift on scroll
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          yPercent: 4,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[100vh] overflow-hidden bg-[#07080d]">
      {/* Interactive 3D Spline Animation */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-44 pb-28">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-white/80">
            Next‑Gen Footwear
          </span>
          <h1 ref={titleRef} className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Performance Meets Neon Aesthetics
          </h1>
          <p ref={subRef} className="mt-5 text-white/80 text-lg">
            Built for motion, tuned for comfort. Step into reactive cushioning and aerospace‑grade meshes that breathe with you.
          </p>
          <div ref={ctaRef} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#collection"
              className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-medium shadow hover:shadow-lg transition will-change-transform hover:scale-[1.03]"
            >
              Shop Collection
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 text-white px-5 py-3 font-medium backdrop-blur bg-white/10 hover:bg-white/15 transition hover:shadow-lg"
            >
              Our Story
            </a>
          </div>
        </div>
      </div>

      {/* Animated gradient aura overlay (non-blocking) */}
      <div
        ref={auraRef}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(900px 700px at 50% 50%, rgba(168,85,247,0.20), transparent 60%), radial-gradient(1200px 800px at 50% 50%, rgba(56,189,248,0.12), transparent 65%), radial-gradient(700px 500px at 50% 50%, rgba(249,115,22,0.10), transparent 60%)',
          mixBlendMode: 'screen',
        }}
      />
    </section>
  );
}
