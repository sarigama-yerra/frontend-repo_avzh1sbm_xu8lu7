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
      // Intro animation
      gsap.fromTo(
        titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
      );
      gsap.fromTo(
        subRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: 'power3.out' }
      );
      gsap.fromTo(
        ctaRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );

      // Floating aura pulsing
      if (auraRef.current) {
        gsap.to(auraRef.current, {
          scale: 1.05,
          opacity: 0.9,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Parallax on scroll
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
    <section ref={heroRef} className="relative min-h-[100vh] overflow-hidden bg-[#0a0b10]">
      {/* Interactive 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glass headline and copy */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-44 pb-28">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-white/80">
            Premium Sneakers
          </span>
          <h1 ref={titleRef} className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Futuristic Style. Effortless Comfort.
          </h1>
          <p ref={subRef} className="mt-5 text-white/80 text-lg">
            Discover performance-first footwear engineered with precision and crafted to stand out.
            Elevate your movement with iconic silhouettes and advanced materials.
          </p>
          <div ref={ctaRef} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#collection"
              className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-medium shadow hover:shadow-lg transition will-change-transform hover:scale-[1.02]"
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

      {/* Animated gradient auras - keep interactive by disabling pointer events */}
      <div
        ref={auraRef}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(800px 600px at 20% 30%, rgba(124, 58, 237, 0.20), transparent 60%), radial-gradient(900px 650px at 80% 70%, rgba(56, 189, 248, 0.18), transparent 60%), radial-gradient(700px 500px at 50% 50%, rgba(99, 102, 241, 0.12), transparent 60%)',
          mixBlendMode: 'screen',
        }}
      />
    </section>
  );
}
