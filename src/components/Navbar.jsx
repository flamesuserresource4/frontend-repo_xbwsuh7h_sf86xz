import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-neutral-900 text-lg">Mifan Studio</a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            <a href="#services" className="hover:text-neutral-900 transition-colors">Services</a>
            <a href="#work" className="hover:text-neutral-900 transition-colors">Work</a>
            <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
            <a href="#contact" className="inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800 transition-colors">Let’s talk</a>
          </nav>

          <button
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              {open ? (
                <path fillRule="evenodd" d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.414 1.414L13.414 10.586l4.361 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3.75 5.75h16.5a.75.75 0 000-1.5H3.75a.75.75 0 000 1.5zm0 7h16.5a.75.75 0 000-1.5H3.75a.75.75 0 000 1.5zm0 7h16.5a.75.75 0 000-1.5H3.75a.75.75 0 000 1.5z" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#services" className="block px-2 py-2 rounded-md hover:bg-neutral-100">Services</a>
            <a href="#work" className="block px-2 py-2 rounded-md hover:bg-neutral-100">Work</a>
            <a href="#contact" className="block px-2 py-2 rounded-md hover:bg-neutral-100">Contact</a>
            <a href="#contact" className="block px-2 py-2 text-center rounded-md bg-neutral-900 text-white hover:bg-neutral-800">Let’s talk</a>
          </div>
        )}
      </div>
    </header>
  );
}
