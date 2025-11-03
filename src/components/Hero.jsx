import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] pt-16" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[70vh] items-center">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 backdrop-blur">Interactive design studio</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
              Modern, responsive experiences that feel alive
            </h1>
            <p className="mt-4 text-neutral-700 text-base sm:text-lg">
              We craft interfaces and 3D interactions that scale from mobile to desktop. Clean, minimalist and built for performance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#work" className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-white hover:bg-neutral-800 transition-colors">View work</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/80 px-5 py-3 text-neutral-900 ring-1 ring-neutral-200 hover:bg-white transition-colors">Start a project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
