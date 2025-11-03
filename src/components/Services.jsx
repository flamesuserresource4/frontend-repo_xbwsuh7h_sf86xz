const services = [
  {
    title: 'Brand Identity',
    desc: 'Cohesive systems that scale across platforms: logo, color, type, motion.',
  },
  {
    title: 'Web & Product UI',
    desc: 'Responsive, accessible interfaces with a focus on clarity and conversion.',
  },
  {
    title: 'Interactive 3D',
    desc: 'Spline-powered hero moments and subtle motion that enhances storytelling.',
  },
  {
    title: 'Content & Art Direction',
    desc: 'Visual guidelines, component libraries and production-ready assets.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">What we do</h2>
          <p className="mt-3 text-neutral-700">A focused set of services to take your brand from idea to launch.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-medium text-neutral-900">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
