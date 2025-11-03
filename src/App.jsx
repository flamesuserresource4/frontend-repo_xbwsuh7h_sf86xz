import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Showcase />

        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Have a project in mind?</h3>
                <p className="mt-2 text-neutral-700">Let’s collaborate to design something thoughtful and responsive.</p>
              </div>
              <a href="mailto:hello@mifanstudio.com" className="inline-flex items-center rounded-md bg-neutral-900 px-5 py-3 text-white hover:bg-neutral-800 transition-colors">Email us</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Mifan Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#work" className="hover:text-neutral-900">Work</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
