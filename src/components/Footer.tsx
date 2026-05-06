import { Github } from 'lucide-react';

const columns = [
  {
    heading: 'Amber',
    accent: 'text-amber-300',
    logo: '/amber-logo.png',
    links: [
      { label: 'GitHub', href: 'https://github.com/greenart7c3/Amber' },
      { label: 'Releases', href: 'https://github.com/greenart7c3/Amber/releases' },
      { label: 'Issues', href: 'https://github.com/greenart7c3/Amber/issues' },
      { label: 'F-Droid', href: 'https://f-droid.org/packages/com.greenart7c3.nostrsigner/' },
    ],
  },
  {
    heading: 'Citrine',
    accent: 'text-yellow-200',
    logo: '/citrine-logo.png',
    links: [
      { label: 'GitHub', href: 'https://github.com/greenart7c3/Citrine' },
      { label: 'Releases', href: 'https://github.com/greenart7c3/Citrine/releases' },
      { label: 'Issues', href: 'https://github.com/greenart7c3/Citrine/issues' },
      { label: 'F-Droid', href: 'https://f-droid.org/packages/com.greenart7c3.citrine/' },
    ],
  },
  {
    heading: 'Morganite',
    accent: 'text-pink-300',
    logo: '/morganite-logo.png',
    links: [
      { label: 'GitHub', href: 'https://github.com/greenart7c3/Morganite' },
      { label: 'Releases', href: 'https://github.com/greenart7c3/Morganite/releases' },
      { label: 'Issues', href: 'https://github.com/greenart7c3/Morganite/issues' },
      { label: 'F-Droid', href: 'https://f-droid.org/packages/com.greenart7c3.morganite/' },
    ],
  },
  {
    heading: 'Learn Nostr',
    accent: 'text-white',
    logo: undefined,
    links: [
      { label: 'nostr.com', href: 'https://nostr.com' },
      { label: 'nostr.how', href: 'https://nostr.how' },
      { label: 'NIP-46 (remote signing)', href: 'https://github.com/nostr-protocol/nips/blob/master/46.md' },
      { label: 'Blossom (BUDs)', href: 'https://github.com/hzrd149/blossom' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[hsl(var(--background))]/80 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex -space-x-2">
              <img src="/amber-logo.png" alt="" className="h-10 w-10 rounded-lg ring-2 ring-[hsl(var(--background))]" />
              <img src="/citrine-logo.png" alt="" className="h-10 w-10 rounded-lg ring-2 ring-[hsl(var(--background))]" />
              <img src="/morganite-logo.png" alt="" className="h-10 w-10 rounded-lg ring-2 ring-[hsl(var(--background))]" />
            </div>
            <h3 className="mt-4 font-serif text-lg font-bold">
              <span className="text-gradient-tri">Amber · Citrine · Morganite</span>
            </h3>
            <p className="mt-2 max-w-xs text-sm text-[hsl(var(--foreground))]/60">
              Three open-source Android apps from{' '}
              <a
                href="https://github.com/greenart7c3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--foreground))] underline-offset-2 hover:underline"
              >
                greenart7c3
              </a>{' '}
              for a sovereign Nostr stack.
            </p>
            <a
              href="https://github.com/greenart7c3"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-[hsl(var(--foreground))]/80 transition-colors hover:bg-white/10"
            >
              <Github className="h-4 w-4" /> github.com/greenart7c3
            </a>
          </div>

          {columns.slice(0, 3).map((col) => (
            <div key={col.heading} className="hidden md:block">
              <div className="flex items-center gap-2">
                {col.logo && <img src={col.logo} alt="" className="h-5 w-5 rounded" />}
                <h4 className={`text-sm font-semibold ${col.accent}`}>{col.heading}</h4>
              </div>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[hsl(var(--foreground))]/65 hover:text-[hsl(var(--foreground))]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="md:hidden mt-10 grid grid-cols-2 gap-8">
          {columns.map((col) => (
            <div key={col.heading}>
              <div className="flex items-center gap-2">
                {col.logo && <img src={col.logo} alt="" className="h-5 w-5 rounded" />}
                <h4 className={`text-sm font-semibold ${col.accent}`}>{col.heading}</h4>
              </div>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[hsl(var(--foreground))]/65 hover:text-[hsl(var(--foreground))]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <div className="mt-10 -mb-2">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-semibold text-white">Learn Nostr</h4>
            </div>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {columns[3].links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[hsl(var(--foreground))]/65 hover:text-[hsl(var(--foreground))]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-[hsl(var(--foreground))]/50 md:flex-row">
          <p>Open source · MIT-style licenses on each repo · No tracking on this site.</p>
          <p>
            Built with React, Vite and Tailwind. Logos courtesy of the respective project repos.
          </p>
        </div>
      </div>
    </footer>
  );
}
