import {
  Database,
  HardDrive,
  Wifi,
  Save,
  Feather,
  Eye,
  CheckCircle2,
  ExternalLink,
  Github,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const benefits = [
  {
    icon: Database,
    title: 'A relay in your pocket',
    description: 'Citrine runs a full Nostr relay locally on Android. Your notes live where you carry them.',
  },
  {
    icon: HardDrive,
    title: 'Offline-first',
    description: 'Read and write notes with no internet. Sync to public relays whenever you reconnect.',
  },
  {
    icon: Save,
    title: 'Backup and restore',
    description: 'Export your full event history in one tap. Move between devices without losing a thing.',
  },
  {
    icon: Feather,
    title: 'Lightweight',
    description: 'A small footprint and a tidy UI. No background services chewing through your battery.',
  },
  {
    icon: Eye,
    title: 'Privacy-preserving',
    description: 'Hold a personal copy of every note you care about, free from third-party retention rules.',
  },
  {
    icon: Wifi,
    title: 'Works on the LAN',
    description: 'Other devices on your network can read from Citrine — your phone is the source of truth.',
  },
];

const features = [
  'Full local Nostr relay on Android',
  'Read/write events without internet',
  'One-tap export and restore',
  'Configurable retention rules',
  'Pair with any Nostr client',
  'Open source and auditable',
];

export function CitrineSection() {
  return (
    <section
      id="citrine"
      className="relative overflow-hidden bg-citrine-section py-24 md:py-32 scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />
      <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-yellow-500/15 blur-3xl" />
      <div className="absolute -left-40 bottom-1/4 h-96 w-96 rounded-full bg-amber-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 scale-95 rounded-3xl bg-gradient-to-br from-yellow-500/30 to-amber-600/20 blur-3xl" />
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-yellow-500/30 gem-tile-citrine p-12 shadow-2xl shadow-yellow-900/40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(0,0,0,0.4),_transparent_55%)]" />
              <div className="relative flex h-full items-center justify-center">
                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md ring-1 ring-white/20">
                  <img
                    src="/citrine-logo.png"
                    alt="Citrine app icon"
                    className="h-40 w-40 rounded-2xl drop-shadow-2xl md:h-56 md:w-56"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-900/40 px-4 py-2 backdrop-blur-sm">
              <img src="/citrine-logo.png" alt="" className="h-5 w-5 rounded" />
              <span className="text-sm font-medium text-yellow-200">Nostr relay for Android</span>
            </div>

            <h2 className="font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              <span>Own your</span>
              <br />
              <span className="text-gradient-citrine">data.</span>
            </h2>

            <p className="text-lg text-[hsl(var(--foreground))]/75 md:text-xl">
              Citrine is a tiny, full-featured Nostr relay that runs on your Android device. Read and
              write notes <strong className="text-yellow-200">without depending on a public relay</strong>,
              keep an authoritative copy of your timeline, and sync at your own pace.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#download">
                <Button
                  size="lg"
                  className="glow-citrine bg-citrine-gradient text-black hover:opacity-90"
                >
                  <Database className="h-4 w-4" /> Get Citrine
                </Button>
              </a>
              <a
                href="https://github.com/greenart7c3/Citrine"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-yellow-500/30 hover:border-yellow-400">
                  <Github className="h-4 w-4" /> View source <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Card
              key={b.title}
              className="border-yellow-500/15 bg-yellow-950/30 hover:border-yellow-500/40 hover:shadow-lg hover:shadow-yellow-500/10 animate-fade-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <CardContent>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-citrine-gradient">
                  <b.icon className="h-5 w-5 text-black" />
                </div>
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[hsl(var(--foreground))]/65">
                  {b.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <Card className="border-yellow-500/20 bg-yellow-950/20">
            <CardContent className="p-8">
              <h3 className="mb-6 text-center text-xl font-semibold">Why use Citrine?</h3>
              <div className="grid gap-3 md:grid-cols-2">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-300" />
                    <span className="text-sm text-[hsl(var(--foreground))]/75">{f}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
