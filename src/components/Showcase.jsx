const projects = [
  {
    title: 'Modular Commerce',
    tag: 'E‑commerce, Web UI',
    img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Fintech Dashboard',
    tag: 'Product, Data Viz',
    img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Immersive Landing',
    tag: '3D, Marketing',
    img: 'https://images.unsplash.com/photo-1520607162513-4f184fad0f5a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Brand System',
    tag: 'Identity, Guidelines',
    img: 'https://images.unsplash.com/photo-1526378787940-576a539ba69e?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="work" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Selected work</h2>
            <p className="mt-3 text-neutral-700">A snapshot of recent projects across industries.</p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800 transition-colors">Start a project</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-xl border border-neutral-200 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-xs uppercase tracking-wide text-neutral-500">{p.tag}</p>
                <h3 className="mt-1 font-medium text-neutral-900">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
