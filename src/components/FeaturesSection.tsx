import { Key, Database, Image as ImageIcon, ArrowRight, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

const steps = [
  {
    icon: Key,
    title: 'Sign with Amber',
    body: 'Your private key stays on your phone. Every event you publish is signed by Amber on demand.',
    accent: 'from-amber-500/30 to-orange-500/10',
    iconClass: 'bg-amber-gradient text-white',
    label: 'Amber',
    labelClass: 'text-amber-300',
  },
  {
    icon: Database,
    title: 'Store with Citrine',
    body: 'Notes land on a relay running on your device first, then sync out to public relays at your pace.',
    accent: 'from-yellow-400/30 to-amber-500/10',
    iconClass: 'bg-citrine-gradient text-black',
    label: 'Citrine',
    labelClass: 'text-yellow-300',
  },
  {
    icon: ImageIcon,
    title: 'Host with Morganite',
    body: 'Photos and video are uploaded to your own Blossom server, addressable anywhere by SHA-256.',
    accent: 'from-pink-500/30 to-rose-500/10',
    iconClass: 'bg-morganite-gradient text-white',
    label: 'Morganite',
    labelClass: 'text-pink-300',
  },
];

const combined = [
  { tag: 'Amber', tagClass: 'bg-amber-500/10 text-amber-300', title: 'Key custody on your hardware' },
  { tag: 'Citrine', tagClass: 'bg-yellow-500/10 text-yellow-200', title: 'Authoritative copy of your notes' },
  { tag: 'Morganite', tagClass: 'bg-pink-500/10 text-pink-300', title: 'Self-hosted images and video' },
  { tag: 'Amber + Citrine', tagClass: 'bg-orange-500/10 text-orange-200', title: 'Sign and store fully offline' },
  { tag: 'Citrine + Morganite', tagClass: 'bg-rose-500/10 text-rose-200', title: 'Notes and media on the same LAN' },
  { tag: 'All three', tagClass: 'bg-white/10 text-white', title: 'A complete sovereign Nostr stack' },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-24 md:py-32 scroll-mt-20"
    >
      <div className="absolute inset-0 -z-10 bg-hero-gradient opacity-90" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" /> Better together
          </div>
          <h2 className="mt-5 font-serif text-4xl font-bold md:text-5xl">
            <span>One stack.</span>{' '}
            <span className="text-gradient-tri">Three responsibilities.</span>
          </h2>
          <p className="mt-4 text-lg text-[hsl(var(--foreground))]/70">
            Use any one of them on its own, or combine all three for end-to-end Nostr sovereignty —
            identity, data, and media all on a device you control.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="relative">
              <Card className="h-full border-white/10 bg-white/[0.04]">
                <CardContent className="p-7">
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${s.accent}`} />
                  <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${s.iconClass}`}>
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div className={`text-xs font-semibold uppercase tracking-wider ${s.labelClass}`}>
                    Step {i + 1} · {s.label}
                  </div>
                  <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--foreground))]/65">
                    {s.body}
                  </p>
                </CardContent>
              </Card>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-3 h-5 w-5 -translate-y-1/2 text-[hsl(var(--foreground))]/30" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {combined.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors hover:border-white/20"
            >
              <span
                className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${c.tagClass}`}
              >
                {c.tag}
              </span>
              <h4 className="mt-3 text-base font-semibold">{c.title}</h4>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-sm">
          <div className="flex justify-center -space-x-3">
            <img src="/amber-logo.png" alt="" className="h-14 w-14 rounded-xl ring-2 ring-[hsl(var(--background))]" />
            <img src="/citrine-logo.png" alt="" className="h-14 w-14 rounded-xl ring-2 ring-[hsl(var(--background))]" />
            <img src="/morganite-logo.png" alt="" className="h-14 w-14 rounded-xl ring-2 ring-[hsl(var(--background))]" />
          </div>
          <h3 className="mt-5 font-serif text-2xl font-bold md:text-3xl">
            Complete data sovereignty
          </h3>
          <p className="mt-3 text-base text-[hsl(var(--foreground))]/70">
            Your keys never leave Amber. Your notes are stored by Citrine. Your media is hosted by
            Morganite. No accounts, no servers in the middle, no permission to ask.
          </p>
        </div>
      </div>
    </section>
  );
}
