import { Database, Server, Download, Upload, Shield, Wifi, CheckCircle2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    icon: Database,
    title: 'Own Your Data',
    description: 'All your Nostr events stored locally on your device. No reliance on third-party servers.',
  },
  {
    icon: Server,
    title: 'Personal Relay',
    description: 'Run a full Nostr relay right on your Android phone. Connect any client to ws://localhost.',
  },
  {
    icon: Download,
    title: 'Import Database',
    description: 'Restore your data from backups. Never lose your posts, reactions, or follows.',
  },
  {
    icon: Upload,
    title: 'Export Database',
    description: 'Create complete backups of your relay database or export only your own events.',
  },
  {
    icon: Shield,
    title: 'Content Resolvers',
    description: 'Android apps can query your local relay directly through content provider APIs.',
  },
  {
    icon: Wifi,
    title: 'Offline-First',
    description: 'Broadcast your events when you come back online. Works without constant connectivity.',
  },
];

const features = [
  'Full Nostr relay running on Android',
  'Export/import complete database backups',
  'Export only your own events',
  'Manage relay settings (port, icon, users)',
  'Broadcast events after reconnecting',
  'Content resolver support for native apps',
];

export function CitrineSection() {
  return (
    <section id="citrine" className="py-24 md:py-32 relative overflow-hidden bg-citrine-section">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-amber-600/20 blur-3xl rounded-3xl scale-95" />
            <img
              src="/citrine-hero.webp"
              alt="Citrine - Local Relay"
              className="relative w-full rounded-2xl shadow-2xl shadow-yellow-900/50 border border-yellow-500/20"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-900/40 border border-yellow-500/20 backdrop-blur-sm">
              <img src="/citrine-logo.webp" alt="Citrine" className="w-6 h-6 rounded" />
              <span className="text-sm font-medium text-yellow-300">Nostr Relay for Android</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-foreground">Own Your</span>
              <br />
              <span className="text-gradient-citrine">Data</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground">
              Citrine runs a complete Nostr relay on your Android device. Store all your events locally, create backups, and <strong className="text-yellow-300">never depend on external relays</strong> for your own data.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#download">
                <Button size="lg" className="bg-citrine-gradient hover:opacity-90 text-black font-semibold glow-citrine">
                  <Database className="w-5 h-5 mr-2" />
                  Get Citrine
                </Button>
              </a>
              <a
                href="https://github.com/greenart7c3/Citrine"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-yellow-500/30 hover:border-yellow-400">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Source
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="group border-yellow-500/10 bg-yellow-950/40 backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-citrine-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature List */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-yellow-500/20 bg-yellow-950/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center text-foreground">Why Use Citrine?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
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
