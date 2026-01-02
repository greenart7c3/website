import { useState } from 'react';
import { 
  useAmberUpdates, 
  useAmberProfile, 
  useCitrineUpdates, 
  useCitrineProfile,
  AMBER_NPUB,
  CITRINE_NPUB 
} from '@/hooks/useAppUpdates';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { NoteContent } from '@/components/NoteContent';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, RefreshCw } from 'lucide-react';
import type { NostrEvent } from '@nostrify/nostrify';

function formatRelativeTime(timestamp: number): string {
  const now = Math.floor(Date.now() / 1000);
  const diff = now - timestamp;

  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;

  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

interface UpdateCardProps {
  event: NostrEvent;
  profile: { name?: string; picture?: string; display_name?: string } | null;
  onClick: () => void;
  variant: 'amber' | 'citrine';
}

function UpdateCard({ event, profile, onClick, variant }: UpdateCardProps) {
  const displayName = profile?.display_name || profile?.name || (variant === 'amber' ? 'Amber' : 'Citrine');
  const avatar = profile?.picture;
  const nostrLink = `https://njump.me/${event.id}`;

  const bgClass = variant === 'amber' 
    ? 'border-amber-500/10 bg-amber-950/40 hover:border-amber-500/30 hover:shadow-amber-500/10'
    : 'border-yellow-500/10 bg-yellow-950/40 hover:border-yellow-500/30 hover:shadow-yellow-500/10';

  const gradientClass = variant === 'amber' ? 'bg-amber-gradient' : 'bg-citrine-gradient';
  const textClass = variant === 'amber' ? 'text-amber-400' : 'text-yellow-400';
  const fadeClass = variant === 'amber' ? 'from-amber-950/90' : 'from-yellow-950/90';

  return (
    <Card
      className={`group ${bgClass} backdrop-blur-sm transition-all duration-300 hover:shadow-lg cursor-pointer`}
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className={`w-10 h-10 ring-2 ${variant === 'amber' ? 'ring-amber-500/30' : 'ring-yellow-500/30'}`}>
              <AvatarImage src={avatar} alt={displayName} />
              <AvatarFallback className={`${gradientClass} ${variant === 'citrine' ? 'text-black' : 'text-white'} font-bold`}>
                {variant === 'amber' ? 'A' : 'C'}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className={`font-semibold ${textClass}`}>{displayName}</p>
              <p className="text-xs text-muted-foreground">{formatRelativeTime(event.created_at)}</p>
            </div>
          </div>

          <a
            href={nostrLink}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => e.stopPropagation()}
          >
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="text-sm text-foreground leading-relaxed whitespace-pre-wrap break-words max-h-48 overflow-hidden relative">
          <NoteContent event={event} />
          <div className={`absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t ${fadeClass} to-transparent pointer-events-none`} />
        </div>
      </CardContent>
    </Card>
  );
}

interface NoteModalProps {
  event: NostrEvent | null;
  profile: { name?: string; picture?: string; display_name?: string } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  variant: 'amber' | 'citrine';
}

function NoteModal({ event, profile, open, onOpenChange, variant }: NoteModalProps) {
  if (!event) return null;

  const displayName = profile?.display_name || profile?.name || (variant === 'amber' ? 'Amber' : 'Citrine');
  const avatar = profile?.picture;
  const nostrLink = `https://njump.me/${event.id}`;

  const bgClass = variant === 'amber' ? 'bg-amber-950/95 border-amber-500/20' : 'bg-yellow-950/95 border-yellow-500/20';
  const gradientClass = variant === 'amber' ? 'bg-amber-gradient' : 'bg-citrine-gradient';
  const textClass = variant === 'amber' ? 'text-amber-400' : 'text-yellow-400';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`max-w-2xl ${bgClass} backdrop-blur-xl`}>
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className={`w-10 h-10 ring-2 ${variant === 'amber' ? 'ring-amber-500/30' : 'ring-yellow-500/30'}`}>
                <AvatarImage src={avatar} alt={displayName} />
                <AvatarFallback className={`${gradientClass} ${variant === 'citrine' ? 'text-black' : 'text-white'} font-bold`}>
                  {variant === 'amber' ? 'A' : 'C'}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className={`font-semibold ${textClass}`}>{displayName}</p>
                <p className="text-xs text-muted-foreground">{formatRelativeTime(event.created_at)}</p>
              </div>
            </div>
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh]">
          <div className="text-sm text-foreground leading-relaxed whitespace-pre-wrap break-words pr-4">
            <NoteContent event={event} />
          </div>
        </ScrollArea>

        <div className={`flex justify-end pt-4 border-t ${variant === 'amber' ? 'border-amber-500/20' : 'border-yellow-500/20'}`}>
          <a href={nostrLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              View on Nostr
            </Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function UpdateSkeleton() {
  return (
    <Card className="border-border/50 bg-card/80">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Skeleton className="w-10 h-10 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-4/5" />
          <Skeleton className="h-4 w-3/5" />
        </div>
      </CardContent>
    </Card>
  );
}

export function UpdatesSection() {
  const { data: amberUpdates, isLoading: amberLoading, error: amberError, refetch: refetchAmber, isFetching: amberFetching } = useAmberUpdates(6);
  const { data: amberProfile } = useAmberProfile();
  const { data: citrineUpdates, isLoading: citrineLoading, error: citrineError, refetch: refetchCitrine, isFetching: citrineFetching } = useCitrineUpdates(6);
  const { data: citrineProfile } = useCitrineProfile();
  
  const [selectedEvent, setSelectedEvent] = useState<NostrEvent | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVariant, setModalVariant] = useState<'amber' | 'citrine'>('amber');

  const handleCardClick = (event: NostrEvent, variant: 'amber' | 'citrine') => {
    setSelectedEvent(event);
    setModalVariant(variant);
    setModalOpen(true);
  };

  const refetchAll = () => {
    refetchAmber();
    refetchCitrine();
  };

  const isFetching = amberFetching || citrineFetching;

  return (
    <section id="updates" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-amber-600/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-yellow-600/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-900/40 border border-amber-500/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-amber-300">Latest Updates</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-foreground">Stay in the</span>
            <br />
            <span className="text-gradient">Loop</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Get the latest news, updates, and announcements directly from Amber and Citrine on Nostr.
          </p>

          {/* Follow Links */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href={`https://njump.me/${AMBER_NPUB}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 border-amber-500/30 hover:border-amber-400">
                <ExternalLink className="w-4 h-4" />
                Follow @Amber
              </Button>
            </a>
            <a href={`https://njump.me/${CITRINE_NPUB}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2 border-yellow-500/30 hover:border-yellow-400">
                <ExternalLink className="w-4 h-4" />
                Follow @Citrine
              </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={refetchAll}
              disabled={isFetching}
              className={isFetching ? 'animate-spin' : ''}
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Tabs for Amber/Citrine updates */}
        <Tabs defaultValue="amber" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="amber" className="data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-300">
              <img src="/amber-logo.webp" alt="" className="w-5 h-5 rounded mr-2" />
              Amber Updates
            </TabsTrigger>
            <TabsTrigger value="citrine" className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-300">
              <img src="/citrine-logo.webp" alt="" className="w-5 h-5 rounded mr-2" />
              Citrine Updates
            </TabsTrigger>
          </TabsList>

          <TabsContent value="amber">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {amberLoading ? (
                <>
                  <UpdateSkeleton />
                  <UpdateSkeleton />
                  <UpdateSkeleton />
                </>
              ) : amberError ? (
                <div className="col-span-full">
                  <Card className="border-dashed border-destructive/50">
                    <CardContent className="py-12 text-center">
                      <p className="text-muted-foreground mb-4">
                        Unable to load Amber updates. Please check your connection.
                      </p>
                      <Button variant="outline" onClick={() => refetchAmber()}>
                        Try Again
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ) : amberUpdates && amberUpdates.length > 0 ? (
                amberUpdates.map((event) => (
                  <UpdateCard
                    key={event.id}
                    event={event}
                    profile={amberProfile}
                    onClick={() => handleCardClick(event, 'amber')}
                    variant="amber"
                  />
                ))
              ) : (
                <div className="col-span-full">
                  <Card className="border-dashed border-amber-500/30">
                    <CardContent className="py-12 text-center">
                      <p className="text-muted-foreground">
                        No Amber updates found. Follow on Nostr for the latest news!
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="citrine">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {citrineLoading ? (
                <>
                  <UpdateSkeleton />
                  <UpdateSkeleton />
                  <UpdateSkeleton />
                </>
              ) : citrineError ? (
                <div className="col-span-full">
                  <Card className="border-dashed border-destructive/50">
                    <CardContent className="py-12 text-center">
                      <p className="text-muted-foreground mb-4">
                        Unable to load Citrine updates. Please check your connection.
                      </p>
                      <Button variant="outline" onClick={() => refetchCitrine()}>
                        Try Again
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ) : citrineUpdates && citrineUpdates.length > 0 ? (
                citrineUpdates.map((event) => (
                  <UpdateCard
                    key={event.id}
                    event={event}
                    profile={citrineProfile}
                    onClick={() => handleCardClick(event, 'citrine')}
                    variant="citrine"
                  />
                ))
              ) : (
                <div className="col-span-full">
                  <Card className="border-dashed border-yellow-500/30">
                    <CardContent className="py-12 text-center">
                      <p className="text-muted-foreground">
                        No Citrine updates found. Follow on Nostr for the latest news!
                      </p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Note Modal */}
      <NoteModal
        event={selectedEvent}
        profile={modalVariant === 'amber' ? amberProfile : citrineProfile}
        open={modalOpen}
        onOpenChange={setModalOpen}
        variant={modalVariant}
      />
    </section>
  );
}
