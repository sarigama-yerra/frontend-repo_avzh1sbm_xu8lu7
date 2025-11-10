import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#0a0b10]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-44 pb-24">
        <div className="max-w-2xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-wider text-white/80">
            Premium Sneakers
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Futuristic Style. Effortless Comfort.
          </h1>
          <p className="mt-5 text-white/80 text-lg">
            Discover performance-first footwear engineered with precision and crafted to stand out. Elevate your movement with iconic silhouettes and advanced materials.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#collection" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-medium shadow">
              Shop Collection
            </a>
            <a href="#story" className="inline-flex items-center justify-center rounded-xl border border-white/20 text-white px-5 py-3 font-medium backdrop-blur bg-white/10">
              Our Story
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(21,203,255,0.2),_transparent_60%)]" />
    </section>
  );
}
