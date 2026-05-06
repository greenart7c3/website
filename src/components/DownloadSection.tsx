import { useState } from 'react';
import { ExternalLink, Github, Shield, Database, Image as ImageIcon, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { cn } from '@/lib/cn';

type AppKey = 'all' | 'amber' | 'citrine' | 'morganite';

const links = {
  amber: {
    zapstore: 'https://zapstore.dev/apps/com.greenart7c3.nostrsigner',
    github: 'https://github.com/greenart7c3/Amber/releases',
    fdroid: 'https://f-droid.org/packages/com.greenart7c3.nostrsigner/',
  },
  citrine: {
    zapstore: 'https://zapstore.dev/apps/com.greenart7c3.citrine',
    github: 'https://github.com/greenart7c3/Citrine/releases',
    fdroid: 'https://f-droid.org/packages/com.greenart7c3.citrine/',
  },
  morganite: {
    zapstore: 'https://zapstore.dev/apps/com.greenart7c3.morganite',
    github: 'https://github.com/greenart7c3/Morganite/releases',
    fdroid: 'https://f-droid.org/packages/com.greenart7c3.morganite/',
  },
};

const cards = [
  {
    key: 'amber' as const,
    name: 'Amber',
    role: 'Nostr event signer',
    icon: Shield,
    logo: '/amber-logo.png',
    primaryClass: 'bg-amber-gradient text-white',
    glow: 'glow-amber',
    border: 'border-amber-500/25',
    surface: 'bg-amber-950/30',
    accent: 'text-amber-300',
    outlineHover: 'border-amber-500/30 hover:border-amber-400',
  },
  {
    key: 'citrine' as const,
    name: 'Citrine',
    role: 'Nostr relay for Android',
    icon: Database,
    logo: '/citrine-logo.png',
    primaryClass: 'bg-citrine-gradient text-black',
    glow: 'glow-citrine',
    border: 'border-yellow-500/25',
    surface: 'bg-yellow-950/30',
    accent: 'text-yellow-200',
    outlineHover: 'border-yellow-500/30 hover:border-yellow-400',
  },
  {
    key: 'morganite' as const,
    name: 'Morganite',
    role: 'Blossom media server',
    icon: ImageIcon,
    logo: '/morganite-logo.png',
    primaryClass: 'bg-morganite-gradient text-white',
    glow: 'glow-morganite',
    border: 'border-pink-400/25',
    surface: 'bg-pink-950/30',
    accent: 'text-pink-200',
    outlineHover: 'border-pink-400/30 hover:border-pink-400',
  },
];

const tabs: { value: AppKey; label: string }[] = [
  { value: 'all', label: 'All Three' },
  { value: 'amber', label: 'Amber' },
  { value: 'citrine', label: 'Citrine' },
  { value: 'morganite', label: 'Morganite' },
];

function AppCard({ card, expanded = false }: { card: (typeof cards)[number]; expanded?: boolean }) {
  const Icon = card.icon;
  return (
    <Card className={cn(card.border, card.surface, 'h-full')}>
      <CardHeader className={cn('pb-3', expanded && 'text-center')}>
        <div className={cn('flex items-center gap-4', expanded && 'flex-col gap-3')}>
          <img
            src={card.logo}
            alt=""
            className={cn('rounded-2xl', expanded ? 'h-20 w-20' : 'h-14 w-14')}
          />
          <div className={cn(expanded && 'space-y-1')}>
            <CardTitle className={cn('flex items-center gap-2', card.accent, expanded && 'justify-center text-2xl')}>
              <Icon className="h-5 w-5" />
              {card.name}
            </CardTitle>
            <CardDescription className={cn(expanded && 'text-base')}>{card.role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        <a href={links[card.key].zapstore} target="_blank" rel="noopener noreferrer" className="block">
          <Button size={expanded ? 'lg' : 'md'} className={cn('w-full', card.primaryClass, expanded && card.glow)}>
            Get on Zapstore <ExternalLink className="h-4 w-4" />
          </Button>
        </a>
        <div className="flex gap-3">
          <a href={links[card.key].github} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" size={expanded ? 'lg' : 'md'} className={cn('w-full', card.outlineHover)}>
              <Github className="h-4 w-4" /> GitHub
            </Button>
          </a>
          <a href={links[card.key].fdroid} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" size={expanded ? 'lg' : 'md'} className={cn('w-full', card.outlineHover)}>
              F-Droid
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export function DownloadSection() {
  const [tab, setTab] = useState<AppKey>('all');

  return (
    <section id="download" className="relative overflow-hidden py-24 md:py-32 scroll-mt-20">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium backdrop-blur-sm">
            Android only
          </div>
          <h2 className="mt-5 font-serif text-4xl font-bold md:text-5xl">
            Get the <span className="text-gradient-tri">apps</span>
          </h2>
          <p className="mt-4 text-lg text-[hsl(var(--foreground))]/70">
            Install via <strong className="text-amber-300">Zapstore</strong> for automatic updates,
            or grab APKs from F-Droid or GitHub releases.
          </p>
        </div>

        <Card className="mx-auto mt-10 max-w-2xl border-amber-500/25 bg-amber-950/20">
          <CardContent>
            <div className="flex items-start gap-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-300" />
              <div>
                <h4 className="font-semibold text-amber-200">Advanced apps notice</h4>
                <p className="mt-1 text-sm text-[hsl(var(--foreground))]/70">
                  These apps are <strong>not on Google Play</strong>. Install via Zapstore (recommended),
                  F-Droid, GitHub releases, or Obtainium.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mx-auto mt-10 w-full max-w-5xl">
          <div className="mx-auto grid w-full grid-cols-2 sm:grid-cols-4 gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-1">
            {tabs.map((t) => (
              <button
                key={t.value}
                onClick={() => setTab(t.value)}
                className={cn(
                  'rounded-xl px-3 py-2 text-sm font-semibold transition-colors',
                  tab === t.value
                    ? 'bg-white/10 text-white'
                    : 'text-[hsl(var(--foreground))]/60 hover:text-[hsl(var(--foreground))]',
                )}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-8">
            {tab === 'all' ? (
              <div className="grid gap-5 md:grid-cols-3">
                {cards.map((card) => (
                  <AppCard key={card.key} card={card} />
                ))}
              </div>
            ) : (
              <div className="mx-auto max-w-lg">
                <AppCard card={cards.find((c) => c.key === tab)!} expanded />
              </div>
            )}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="text-center text-xl font-semibold">Installation methods</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: '⭐', title: 'Zapstore', sub: 'Recommended · auto updates', accent: 'border-emerald-500/30 text-emerald-300' },
              { emoji: '📦', title: 'F-Droid', sub: 'Open-source app store', accent: 'border-white/10' },
              { emoji: '🐙', title: 'GitHub', sub: 'Direct APK download', accent: 'border-white/10' },
              { emoji: '🔄', title: 'Obtainium', sub: 'Track GitHub releases', accent: 'border-white/10' },
            ].map((m) => (
              <div
                key={m.title}
                className={cn(
                  'rounded-2xl border bg-white/[0.03] p-4 text-center backdrop-blur-sm',
                  m.accent,
                )}
              >
                <div className="text-2xl">{m.emoji}</div>
                <div className="mt-1 font-semibold">{m.title}</div>
                <div className="text-xs text-[hsl(var(--foreground))]/60">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
