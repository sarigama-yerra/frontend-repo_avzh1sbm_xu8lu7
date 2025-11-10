import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function FeaturedGrid() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('[data-card]');
    if (!cards || !cards.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 28, opacity: 0, filter: 'blur(6px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, stagger: 0.08, ease: 'power3.out' }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const products = [
    {
      id: 1,
      name: 'AeroPulse X1',
      price: '$189',
      color: 'Carbon / Cyan',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Flux Runner Pro',
      price: '$159',
      color: 'Graphite / Neon',
      image:
        'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Spectra Glide',
      price: '$175',
      color: 'Night / Prism',
      image:
        'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 4,
      name: 'Nebula Swift',
      price: '$149',
      color: 'Obsidian / Violet',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <section ref={sectionRef} id="collection" className="relative bg-[#07080d] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Drops</h2>
          <a href="#" className="text-sm text-cyan-300 hover:text-white">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article
              key={p.id}
              data-card
              className="group rounded-2xl overflow-hidden border border-white/10 backdrop-blur bg-white/5 will-change-transform transition-shadow shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:shadow-[0_0_60px_-10px_rgba(56,189,248,0.45)]"
              style={{
                backgroundImage:
                  'linear-gradient(135deg, rgba(56,189,248,0.10), rgba(99,102,241,0.10))',
              }}
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Light sweep on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition"
                  style={{
                    background:
                      'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)',
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium">{p.name}</h3>
                <p className="text-white/60 text-sm">{p.color}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-white font-semibold">{p.price}</span>
                  <button
                    className="inline-flex items-center rounded-lg bg-white text-gray-900 px-3 py-1.5 text-sm font-medium transition will-change-transform hover:scale-[1.04]"
                    aria-label={`Add ${p.name} to cart`}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
