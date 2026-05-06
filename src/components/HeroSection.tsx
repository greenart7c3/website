import { ArrowRight, Github, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const gems = [
  {
    href: '#amber',
    name: 'Amber',
    role: 'Signer',
    logo: '/amber-logo.png',
    glow: 'glow-amber',
    text: 'text-amber-300',
  },
  {
    href: '#citrine',
    name: 'Citrine',
    role: 'Relay',
    logo: '/citrine-logo.png',
    glow: 'glow-citrine',
    text: 'text-yellow-300',
  },
  {
    href: '#morganite',
    name: 'Morganite',
    role: 'Media',
    logo: '/morganite-logo.png',
    glow: 'glow-morganite',
    text: 'text-pink-300',
  },
];

export function HeroSection() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-hero-gradient pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-yellow-400/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-[hsl(var(--foreground))]/80 backdrop-blur-sm">
            <Smartphone className="h-3.5 w-3.5" />
            Three open-source Android apps. No accounts. No tracking.
          </div>

          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            <span className="text-[hsl(var(--foreground))]">Three gems.</span>
            <br />
            <span className="text-gradient-tri">One sovereign Nostr stack.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-[hsl(var(--foreground))]/70 md:text-lg">
            <span className="font-semibold text-amber-300">Amber</span> guards your private key,{' '}
            <span className="font-semibold text-yellow-300">Citrine</span> stores your notes on a relay
            running in your pocket, and{' '}
            <span className="font-semibold text-pink-300">Morganite</span> hosts your photos and videos
            on your own Blossom server. Your keys, your data, your media — all on your phone.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#download">
              <Button size="lg" className="glow-amber">
                Get the apps <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
            <a href="https://github.com/greenart7c3" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">
                <Github className="h-4 w-4" /> View on GitHub
              </Button>
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {gems.map((gem, i) => (
            <a
              key={gem.name}
              href={gem.href}
              className="group relative flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/20 animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={gem.logo}
                alt={`${gem.name} logo`}
                className={`h-14 w-14 rounded-xl transition-all duration-300 group-hover:scale-105 ${gem.glow} opacity-90 group-hover:opacity-100`}
              />
              <div className="flex-1">
                <div className={`text-xs font-medium uppercase tracking-wider ${gem.text}`}>
                  {gem.role}
                </div>
                <div className="font-serif text-xl font-bold">{gem.name}</div>
              </div>
              <ArrowRight className="h-5 w-5 text-[hsl(var(--foreground))]/40 transition-transform group-hover:translate-x-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
