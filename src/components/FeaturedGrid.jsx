export default function FeaturedGrid() {
  const products = [
    {
      id: 1,
      name: "AeroPulse X1",
      price: "$189",
      color: "Carbon / Cyan",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Flux Runner Pro",
      price: "$159",
      color: "Graphite / Neon",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Spectra Glide",
      price: "$175",
      color: "Night / Prism",
      image:
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Nebula Swift",
      price: "$149",
      color: "Obsidian / Violet",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section id="collection" className="relative bg-[#0a0b10] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Drops</h2>
          <a href="#" className="text-sm text-cyan-300 hover:text-white">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium">{p.name}</h3>
                <p className="text-white/60 text-sm">{p.color}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-white font-semibold">{p.price}</span>
                  <button className="inline-flex items-center rounded-lg bg-white text-gray-900 px-3 py-1.5 text-sm font-medium">
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
