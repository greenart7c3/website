import {
  Image as ImageIcon,
  Hash,
  Link2,
  KeyRound,
  HardDrive,
  Wifi,
  CheckCircle2,
  ExternalLink,
  Github,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const benefits = [
  {
    icon: ImageIcon,
    title: 'Blossom media server',
    description: 'A complete BUD-01 / BUD-02 implementation running on your Android device.',
  },
  {
    icon: Hash,
    title: 'Content-addressed',
    description: 'Every blob is identified by its SHA-256 hash. Tamper-evident, deduplicated, portable.',
  },
  {
    icon: Link2,
    title: 'Standard endpoints',
    description: '/upload, /list/<pubkey>, /<sha256>, /mirror — works with any Blossom-aware client.',
  },
  {
    icon: KeyRound,
    title: 'NIP-98 HTTP auth',
    description: 'Uploads are authorized with signed Nostr events from your Amber-protected key.',
  },
  {
    icon: HardDrive,
    title: 'Self-hosted on your phone',
    description: 'Photos, video, audio and PDFs live on your own storage — no cloud, no third party.',
  },
  {
    icon: Wifi,
    title: 'Serve over LAN',
    description: 'Other devices on your network can fetch your blobs directly from Morganite.',
  },
];

const features = [
  'Local Blossom server on Android',
  'BUD-01 upload, list and get endpoints',
  'BUD-02 mirror support',
  'Authorization via NIP-98 signed events',
  'Pairs naturally with Amber + Citrine',
  'Open source and auditable',
];

export function MorganiteSection() {
  return (
    <section
      id="morganite"
      className="relative overflow-hidden bg-morganite-section py-24 md:py-32 scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-pink-500/15 blur-3xl" />
      <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-rose-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-400/20 bg-pink-900/40 px-4 py-2 backdrop-blur-sm">
              <img src="/morganite-logo.png" alt="" className="h-5 w-5 rounded" />
              <span className="text-sm font-medium text-pink-200">Blossom media server</span>
            </div>

            <h2 className="font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              <span>Own your</span>
              <br />
              <span className="text-gradient-morganite">media.</span>
            </h2>

            <p className="text-lg text-[hsl(var(--foreground))]/75 md:text-xl">
              Morganite turns your Android device into a personal Blossom server. Upload, mirror, and
              serve your images, videos and files from a host{' '}
              <strong className="text-pink-200">you control</strong> — addressable by hash, signed with
              your Nostr key, and ready for any Blossom-aware client.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#download">
                <Button size="lg" className="glow-morganite bg-morganite-gradient text-white">
                  <ImageIcon className="h-4 w-4" /> Get Morganite
                </Button>
              </a>
              <a
                href="https://github.com/greenart7c3/Morganite"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-pink-400/30 hover:border-pink-400">
                  <Github className="h-4 w-4" /> View source <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 scale-95 rounded-3xl bg-gradient-to-br from-pink-500/30 to-rose-600/20 blur-3xl" />
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-pink-400/30 gem-tile-morganite p-12 shadow-2xl shadow-pink-900/40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(0,0,0,0.4),_transparent_55%)]" />
              <div className="relative flex h-full items-center justify-center">
                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md ring-1 ring-white/20">
                  <img
                    src="/morganite-logo.png"
                    alt="Morganite app icon"
                    className="h-40 w-40 rounded-2xl drop-shadow-2xl md:h-56 md:w-56"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Card
              key={b.title}
              className="border-pink-400/15 bg-pink-950/30 hover:border-pink-400/40 hover:shadow-lg hover:shadow-pink-500/10 animate-fade-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <CardContent>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-morganite-gradient">
                  <b.icon className="h-5 w-5 text-white" />
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
          <Card className="border-pink-400/20 bg-pink-950/20">
            <CardContent className="p-8">
              <h3 className="mb-6 text-center text-xl font-semibold">Why use Morganite?</h3>
              <div className="grid gap-3 md:grid-cols-2">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-300" />
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
