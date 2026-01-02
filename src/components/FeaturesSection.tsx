import { Shield, Database, Key, Server, Lock, Wifi, Users, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const combinedBenefits = [
  {
    icon: Shield,
    title: 'Complete Privacy Stack',
    description: 'Amber protects your private key while Citrine stores your data. Together they give you full sovereignty over your Nostr identity.',
    amber: true,
    citrine: true,
  },
  {
    icon: Key,
    title: 'Key Never Leaves Your Device',
    description: 'With Amber, your nsec stays in one secure app. Other clients request signatures without ever seeing your secret key.',
    amber: true,
    citrine: false,
  },
  {
    icon: Database,
    title: 'Local Data Backup',
    description: 'Citrine ensures you always have a copy of your posts, reactions, and follows. Export anytime, import anywhere.',
    amber: false,
    citrine: true,
  },
  {
    icon: Server,
    title: 'Your Phone as a Relay',
    description: 'Run a full relay on your Android. Connect clients to ws://localhost for lightning-fast local queries.',
    amber: false,
    citrine: true,
  },
  {
    icon: Lock,
    title: 'Permission-Based Signing',
    description: 'Approve or deny every signature request. Set trusted apps to auto-sign, keeping you in control.',
    amber: true,
    citrine: false,
  },
  {
    icon: Wifi,
    title: 'Offline-First Architecture',
    description: 'Both apps work without internet. Sign events offline with Amber, queue posts with Citrine until connected.',
    amber: true,
    citrine: true,
  },
  {
    icon: Users,
    title: 'Multiple Identities',
    description: 'Manage multiple Nostr accounts in Amber. Switch between personas while keeping all keys secure.',
    amber: true,
    citrine: false,
  },
  {
    icon: Smartphone,
    title: 'Native Android Integration',
    description: 'Both apps use content providers for seamless integration with native Android Nostr clients.',
    amber: true,
    citrine: true,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-900/30 border border-amber-500/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-amber-300">The Perfect Pair</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-foreground">Better</span>
            <span className="text-gradient"> Together</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground">
            Amber and Citrine complement each other perfectly. Secure your identity with Amber, 
            store your data with Citrine, and enjoy complete sovereignty over your Nostr experience.
          </p>
        </div>

        {/* How They Work Together */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-amber-500/20 bg-amber-950/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-gradient flex items-center justify-center mx-auto mb-4">
                <Key className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-amber-300">1. Secure Your Key</h3>
              <p className="text-muted-foreground text-sm">
                Import your nsec into Amber. It becomes your dedicated signing device.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-secondary/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
              <ArrowRight className="w-8 h-8 text-muted-foreground mb-2 md:rotate-0 rotate-90" />
              <p className="text-sm text-muted-foreground">Use any Nostr client</p>
            </CardContent>
          </Card>

          <Card className="border-yellow-500/20 bg-yellow-950/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-citrine-gradient flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-yellow-300">2. Store Your Data</h3>
              <p className="text-muted-foreground text-sm">
                Citrine backs up all your events locally. Export and restore anytime.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {combinedBenefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="group border-border/50 bg-card/50 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                      <div className="flex gap-1">
                        {benefit.amber && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            Amber
                          </span>
                        )}
                        {benefit.citrine && (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                            Citrine
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Card */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="border-amber-500/20 bg-gradient-to-br from-amber-950/40 to-yellow-950/40 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex items-center gap-4">
                  <img src="/amber-logo.webp" alt="Amber" className="w-16 h-16 rounded-xl" />
                  <span className="text-3xl text-muted-foreground">+</span>
                  <img src="/citrine-logo.webp" alt="Citrine" className="w-16 h-16 rounded-xl" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">
                    Complete Data Sovereignty
                  </h3>
                  <p className="text-muted-foreground">
                    When you use Amber and Citrine together, you have full control over both your identity 
                    <em className="text-amber-300"> (private key)</em> and your content 
                    <em className="text-yellow-300"> (relay data)</em>. No third party can censor you, 
                    lock you out, or delete your history.
                  </p>
                </div>
                <CheckCircle className="w-12 h-12 text-green-400 hidden md:block" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
