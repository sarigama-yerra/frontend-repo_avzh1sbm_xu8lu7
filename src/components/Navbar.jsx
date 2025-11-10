import { ShoppingCart, Menu } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const barRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        barRef.current,
        { y: -24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref={barRef} className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 dark:bg-black/20 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-400 to-fuchsia-500 ring-1 ring-white/30 animate-[pulse_4s_ease-in-out_infinite]" />
              <span className="font-semibold text-white tracking-tight text-lg">PulseKicks</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
              <a href="#new" className="hover:text-white transition">New Arrivals</a>
              <a href="#men" className="hover:text-white transition">Men</a>
              <a href="#women" className="hover:text-white transition">Women</a>
              <a href="#sale" className="hover:text-white transition">Sale</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-4 py-2 font-medium shadow hover:shadow-md transition hover:scale-[1.02] will-change-transform">
                <ShoppingCart size={18} />
                Cart
              </button>
            </div>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/20 text-white/80 p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <Menu />
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 text-white/80">
              <div className="grid gap-3">
                <a href="#new" className="hover:text-white transition">New Arrivals</a>
                <a href="#men" className="hover:text-white transition">Men</a>
                <a href="#women" className="hover:text-white transition">Women</a>
                <a href="#sale" className="hover:text-white transition">Sale</a>
                <button className="mt-2 inline-flex items-center gap-2 rounded-xl bg-white text-gray-900 px-4 py-2 font-medium shadow hover:scale-[1.02] transition">
                  <ShoppingCart size={18} />
                  Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
