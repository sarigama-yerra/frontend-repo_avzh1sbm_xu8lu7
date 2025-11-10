import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('[data-quote]');
    if (!cards || !cards.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 18, opacity: 0, filter: 'blur(4px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.7, stagger: 0.1, ease: 'power3.out' }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const quotes = [
    {
      id: 1,
      name: 'Jordan H.',
      role: 'Marathoner',
      text:
        'Lightweight, locked-in, and the energy return is unreal. These gave me a new PR.',
    },
    {
      id: 2,
      name: 'Maya R.',
      role: 'Designer',
      text:
        'They look like the future and feel like clouds. I wear them from studio to street.',
    },
    {
      id: 3,
      name: 'Alex P.',
      role: 'Creator',
      text:
        'Build quality is top-tier. The grip and cushion balance is spot on for daily wear.',
    },
  ];

  return (
    <section ref={sectionRef} id="story" className="bg-[#07080d] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">What People Are Saying</h2>
          <p className="mt-2 text-white/70">Real feedback from our community</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <figure
              key={q.id}
              data-quote
              className="rounded-2xl border border-white/10 backdrop-blur bg-white/5 p-6 will-change-transform transition-transform hover:-translate-y-0.5"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(56,189,248,0.08), rgba(217,70,239,0.08))',
              }}
            >
              <blockquote className="text-white/90">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-white/60">
                {q.name} — {q.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
