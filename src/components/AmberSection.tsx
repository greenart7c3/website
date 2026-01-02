import { Shield, Key, Smartphone, Lock, Users, Scan, CheckCircle2, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    icon: Shield,
    title: 'Protect Your Identity',
    description: 'Your private key never leaves Amber. Other apps request signatures, but never see your secret.',
  },
  {
    icon: Key,
    title: 'NIP-46 Remote Signing',
    description: 'Sign events for web apps remotely without browser extensions or servers. Your phone becomes your hardware wallet.',
  },
  {
    icon: Smartphone,
    title: 'NIP-55 Android Integration',
    description: 'Native Android apps can request signatures seamlessly through content providers.',
  },
  {
    icon: Lock,
    title: 'Permission Control',
    description: 'Approve or deny each signing request. Set "remember my choice" for trusted apps.',
  },
  {
    icon: Users,
    title: 'Multiple Accounts',
    description: 'Manage multiple Nostr identities from a single secure app.',
  },
  {
    icon: Scan,
    title: 'Works Offline',
    description: 'Sign events even without internet. Perfect for air-gapped security.',
  },
];

const features = [
  'Keep your nsec segregated in one secure app',
  'Sign events for any Nostr client',
  'Works with web applications via NIP-46',
  'Native Android support via NIP-55',
  'Background signing with permission control',
  'Open source and fully auditable',
];

export function AmberSection() {
  return (
    <section id="amber" className="py-24 md:py-32 relative overflow-hidden bg-amber-section">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-900/40 border border-amber-500/20 backdrop-blur-sm">
              <img src="/amber-logo.webp" alt="Amber" className="w-6 h-6 rounded" />
              <span className="text-sm font-medium text-amber-300">Nostr Event Signer</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-foreground">Own Your</span>
              <br />
              <span className="text-gradient">Identity</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground">
              Amber turns your Android phone into a secure signing device for Nostr. Keep your private key in one place while using any client safely. <strong className="text-amber-300">"Private keys should be exposed to as few systems as possible."</strong>
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#download">
                <Button size="lg" className="bg-amber-gradient hover:opacity-90 text-white font-semibold glow-amber">
                  <Shield className="w-5 h-5 mr-2" />
                  Get Amber
                </Button>
              </a>
              <a
                href="https://github.com/greenart7c3/Amber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-amber-500/30 hover:border-amber-400">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Source
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-orange-600/20 blur-3xl rounded-3xl scale-95" />
            <img
              src="/amber-hero.webp"
              alt="Amber - Secure Key Management"
              className="relative w-full rounded-2xl shadow-2xl shadow-amber-900/50 border border-amber-500/20"
            />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="group border-amber-500/10 bg-amber-950/40 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-amber-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature List */}
        <div className="max-w-3xl mx-auto">
          <Card className="border-amber-500/20 bg-amber-950/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center text-foreground">Why Use Amber?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
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
