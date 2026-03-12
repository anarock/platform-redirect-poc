'use client';

import Image from 'next/image';

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 sm:p-8">
      <div className="w-full max-w-lg flex flex-col gap-8">
        <header className="text-center">
          <p className="text-xs font-medium tracking-widest uppercase text-muted mb-2">
            POC
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Redirect Test
          </h1>
          <p className="mt-2 text-sm text-muted max-w-sm mx-auto">
            Image and links go through localhost redirect to the target URL.
          </p>
        </header>

        <section className="rounded-2xl border border-card-border bg-card p-1 shadow-[var(--shadow-card-lg)]">
          <div className="rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-900/50 aspect-[4/3]">
            <Image
              src="http://localhost:4000/file"
              width={400}
              height={300}
              alt="File from server"
              unoptimized
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs text-muted mt-3 px-1 text-center">
            Rendered via <code className="bg-background px-1.5 py-0.5 rounded text-foreground">/file</code> → redirect
          </p>
        </section>

        <div className="flex flex-col gap-3">
          <p className="text-xs font-medium text-muted uppercase tracking-wider">
            Actions
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="http://localhost:4000/file"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3.5 px-4 rounded-xl border border-card-border bg-card hover:bg-stone-100 dark:hover:bg-stone-800/50 hover:border-stone-300 dark:hover:border-stone-600 transition-all font-medium text-foreground text-sm"
            >
              Open in new tab
            </a>
            <button
              onClick={() => window.open('http://localhost:4000/file')}
              className="flex-1 py-3.5 px-4 rounded-xl bg-accent hover:bg-accent-hover text-white font-medium text-sm transition-colors shadow-[var(--shadow-card)]"
            >
              Window open
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}