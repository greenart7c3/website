import {
  Shield,
  Key,
  Smartphone,
  Lock,
  Users,
  WifiOff,
  CheckCircle2,
  ExternalLink,
  Github,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const benefits = [
  {
    icon: Shield,
    title: 'Protect your identity',
    description: 'Your nsec never leaves Amber. Other apps request signatures; they never see your key.',
  },
  {
    icon: Key,
    title: 'NIP-46 remote signing',
    description: 'Sign events for web clients without browser extensions. Your phone is the hardware wallet.',
  },
  {
    icon: Smartphone,
    title: 'NIP-55 for Android',
    description: 'Native Android clients request signatures via content providers — no copy-paste.',
  },
  {
    icon: Lock,
    title: 'Per-app permissions',
    description: 'Approve every signing request, or "remember my choice" for trusted apps you use daily.',
  },
  {
    icon: Users,
    title: 'Multiple identities',
    description: 'Manage as many Nostr accounts as you like, each in its own isolated profile.',
  },
  {
    icon: WifiOff,
    title: 'Works offline',
    description: 'Sign events with no internet. Perfect for air-gapped, ceremonial, or secure setups.',
  },
];

const features = [
  'Keep your nsec segregated in one secure app',
  'Sign events for any Nostr client',
  'Web app integration via NIP-46',
  'Native Android integration via NIP-55',
  'Background signing with permission control',
  'Open source and fully auditable',
];

export function AmberSection() {
  return (
    <section
      id="amber"
      className="relative overflow-hidden bg-amber-section py-24 md:py-32 scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-amber-600/15 blur-3xl" />
      <div className="absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-orange-600/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-900/40 px-4 py-2 backdrop-blur-sm">
              <img src="/amber-logo.png" alt="" className="h-5 w-5 rounded" />
              <span className="text-sm font-medium text-amber-300">Nostr event signer</span>
            </div>

            <h2 className="font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              <span>Own your</span>
              <br />
              <span className="text-gradient-amber">identity.</span>
            </h2>

            <p className="text-lg text-[hsl(var(--foreground))]/75 md:text-xl">
              Amber turns your Android phone into a secure signing device for Nostr. Keep your private
              key in one place while using any client safely.{' '}
              <strong className="text-amber-200">
                Private keys should be exposed to as few systems as possible.
              </strong>
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="#download">
                <Button size="lg" className="glow-amber">
                  <Shield className="h-4 w-4" /> Get Amber
                </Button>
              </a>
              <a
                href="https://github.com/greenart7c3/Amber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-amber-500/30 hover:border-amber-400">
                  <Github className="h-4 w-4" /> View source <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 scale-95 rounded-3xl bg-gradient-to-br from-amber-500/30 to-orange-600/20 blur-3xl" />
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-amber-500/30 gem-tile-amber p-12 shadow-2xl shadow-amber-900/40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(0,0,0,0.4),_transparent_55%)]" />
              <div className="relative flex h-full items-center justify-center">
                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md ring-1 ring-white/20">
                  <img
                    src="/amber-logo.png"
                    alt="Amber app icon"
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
              className="border-amber-500/15 bg-amber-950/30 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10 animate-fade-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <CardContent>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-gradient">
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
          <Card className="border-amber-500/20 bg-amber-950/20">
            <CardContent className="p-8">
              <h3 className="mb-6 text-center text-xl font-semibold">Why use Amber?</h3>
              <div className="grid gap-3 md:grid-cols-2">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-400" />
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
