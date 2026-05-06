import { useEffect, useState } from 'react';
import { Github, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';

const navLinks = [
  { href: '#amber', label: 'Amber' },
  { href: '#citrine', label: 'Citrine' },
  { href: '#morganite', label: 'Morganite' },
  { href: '#features', label: 'Together' },
  { href: '#download', label: 'Download' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'bg-[hsl(var(--background))]/85 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="flex -space-x-2">
              <img
                src="/amber-logo.png"
                alt=""
                className="h-9 w-9 rounded-lg ring-2 ring-[hsl(var(--background))] transition-transform group-hover:translate-y-[-2px]"
              />
              <img
                src="/citrine-logo.png"
                alt=""
                className="h-9 w-9 rounded-lg ring-2 ring-[hsl(var(--background))] transition-transform group-hover:translate-y-[-2px] delay-75"
              />
              <img
                src="/morganite-logo.png"
                alt=""
                className="h-9 w-9 rounded-lg ring-2 ring-[hsl(var(--background))] transition-transform group-hover:translate-y-[-2px] delay-150"
              />
            </div>
            <span className="hidden sm:block font-serif text-lg font-bold tracking-tight">
              <span className="text-gradient-tri">Amber · Citrine · Morganite</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-[hsl(var(--foreground))]/70 transition-colors hover:bg-white/5 hover:text-[hsl(var(--foreground))]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/greenart7c3"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex"
              aria-label="GitHub: greenart7c3"
            >
              <Button variant="ghost" size="sm" className="px-3">
                <Github className="h-4 w-4" />
              </Button>
            </a>
            <a href="#download" className="hidden md:inline-flex">
              <Button size="sm" className="px-5">Download</Button>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 py-3 animate-fade-in">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-[hsl(var(--foreground))]/80 hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2 px-4 pt-3">
                <a
                  href="https://github.com/greenart7c3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  onClick={() => setOpen(false)}
                >
                  <Button variant="outline" size="md" className="w-full">
                    <Github className="h-4 w-4" /> GitHub
                  </Button>
                </a>
                <a href="#download" className="flex-1" onClick={() => setOpen(false)}>
                  <Button size="md" className="w-full">Download</Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
