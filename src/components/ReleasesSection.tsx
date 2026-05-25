import { useEffect, useState } from 'react';
import { ExternalLink, Loader2, Radio } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import {
  APPS,
  type AppKey,
  type Event,
  fetchReleases,
  noteIdToBech32,
  npubToHex,
} from '@/lib/nostr';
import { cn } from '@/lib/cn';

const tabs: {
  key: AppKey;
  label: string;
  accent: string;
  border: string;
  surface: string;
  dot: string;
  logo: string;
}[] = [
  {
    key: 'amber',
    label: 'Amber',
    accent: 'text-amber-300',
    border: 'border-amber-500/20',
    surface: 'bg-amber-950/20',
    dot: 'bg-amber-400',
    logo: '/amber-logo.png',
  },
  {
    key: 'citrine',
    label: 'Citrine',
    accent: 'text-yellow-200',
    border: 'border-yellow-500/20',
    surface: 'bg-yellow-950/20',
    dot: 'bg-yellow-300',
    logo: '/citrine-logo.png',
  },
  {
    key: 'morganite',
    label: 'Morganite',
    accent: 'text-pink-300',
    border: 'border-pink-400/20',
    surface: 'bg-pink-950/20',
    dot: 'bg-pink-400',
    logo: '/morganite-logo.png',
  },
];

function relativeDate(ts: number): string {
  const ms = Date.now() - ts * 1000;
  const minute = 60_000;
  const hour = 60 * minute;
  const day = 24 * hour;
  if (ms < hour) return `${Math.max(1, Math.round(ms / minute))}m ago`;
  if (ms < day) return `${Math.round(ms / hour)}h ago`;
  if (ms < 30 * day) return `${Math.round(ms / day)}d ago`;
  return new Date(ts * 1000).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function ReleaseCard({
  event,
  accent,
  border,
  surface,
}: {
  event: Event;
  accent: string;
  border: string;
  surface: string;
}) {
  const truncated =
    event.content.length > 360 ? event.content.slice(0, 360).trimEnd() + '…' : event.content;
  const noteId = (() => {
    try {
      return noteIdToBech32(event.id);
    } catch {
      return event.id;
    }
  })();
  return (
    <Card className={cn('h-full transition-colors hover:bg-white/[0.05]', border, surface)}>
      <CardContent className="flex h-full flex-col">
        <div className={cn('text-xs font-semibold', accent)}>{relativeDate(event.created_at)}</div>
        <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-relaxed text-[hsl(var(--foreground))]/80">
          {truncated}
        </p>
        <a
          href={`https://njump.me/${noteId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-xs text-[hsl(var(--foreground))]/55 hover:text-[hsl(var(--foreground))]"
        >
          View on Nostr <ExternalLink className="h-3 w-3" />
        </a>
      </CardContent>
    </Card>
  );
}

export function ReleasesSection() {
  const [active, setActive] = useState<AppKey>('amber');
  const [data, setData] = useState<Record<AppKey, Event[]>>({
    amber: [],
    citrine: [],
    morganite: [],
  });
  const [loading, setLoading] = useState<Record<AppKey, boolean>>({
    amber: true,
    citrine: true,
    morganite: true,
  });

  useEffect(() => {
    let cancelled = false;
    const tasks = (Object.keys(APPS) as AppKey[]).map(async (key) => {
      try {
        const pubkey = npubToHex(APPS[key].npub);
        const events = await fetchReleases(pubkey, 8);
        if (cancelled) return;
        setData((prev) => ({ ...prev, [key]: events }));
      } catch (err) {
        console.error(`Failed to load ${key} releases:`, err);
      } finally {
        if (!cancelled) setLoading((prev) => ({ ...prev, [key]: false }));
      }
    });
    void Promise.all(tasks);
    return () => {
      cancelled = true;
    };
  }, []);

  const activeTab = tabs.find((t) => t.key === active)!;
  const events = data[active];
  const isLoading = loading[active];

  return (
    <section
      id="releases"
      className="relative overflow-hidden py-24 md:py-32 scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-amber-500/8 blur-3xl" />
      <div className="absolute -bottom-40 right-1/3 h-96 w-96 rounded-full bg-pink-500/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium backdrop-blur-sm">
            <Radio className="h-3.5 w-3.5" />
            Live from Nostr
          </div>
          <h2 className="mt-5 font-serif text-4xl font-bold md:text-5xl">
            Releases &amp; <span className="text-gradient-tri">updates</span>
          </h2>
          <p className="mt-4 text-lg text-[hsl(var(--foreground))]/70">
            Pulled in real time from each project's announcement npub. New builds, fixes, and notes
            from the maintainer land here as they're posted.
          </p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-5xl">
          <div className="mx-auto grid w-full grid-cols-3 gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-1">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={cn(
                  'flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-colors',
                  active === t.key
                    ? 'bg-white/10 text-white'
                    : 'text-[hsl(var(--foreground))]/60 hover:text-[hsl(var(--foreground))]',
                )}
              >
                <img src={t.logo} alt="" className="h-5 w-5 rounded" />
                <span className="hidden sm:inline">{t.label}</span>
                {loading[t.key] && (
                  <Loader2 className="h-3.5 w-3.5 animate-spin opacity-60" />
                )}
              </button>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[hsl(var(--foreground))]/50">
            <span className={cn('inline-block h-1.5 w-1.5 rounded-full', activeTab.dot)} />
            <a
              href={`https://njump.me/${APPS[active].npub}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono hover:text-[hsl(var(--foreground))]/80"
            >
              {APPS[active].npub.slice(0, 14)}…{APPS[active].npub.slice(-6)}
            </a>
          </div>

          <div className="mt-8 min-h-[280px]">
            {isLoading && events.length === 0 ? (
              <div className="flex h-60 items-center justify-center text-sm text-[hsl(var(--foreground))]/50">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Fetching from relays…
              </div>
            ) : events.length === 0 ? (
              <Card className="border-white/10 bg-white/[0.03]">
                <CardContent className="py-16 text-center text-sm text-[hsl(var(--foreground))]/55">
                  No posts found from this account on the relays we tried. Check back soon.
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {events.map((event) => (
                  <ReleaseCard
                    key={event.id}
                    event={event}
                    accent={activeTab.accent}
                    border={activeTab.border}
                    surface={activeTab.surface}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
