import { ArrowDown, Shield, Database, Key, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs - Amber and Citrine colors */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-600/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-amber-700/20 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-900/30 border border-amber-500/20 backdrop-blur-sm animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-gradient"></span>
            </span>
            <span className="text-sm font-medium text-amber-200">
              Own Your Digital Identity & Data
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="block text-foreground">Your Keys,</span>
            <span className="block text-gradient">Your Data,</span>
            <span className="block text-foreground">Your Control</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-amber-400 font-semibold">Amber</span> keeps your private key safe while signing events securely. <span className="text-yellow-400 font-semibold">Citrine</span> runs a personal relay on your device, giving you complete ownership of your Nostr data.
          </p>

          {/* App Icons Row */}
          <div className="flex justify-center items-center gap-8 md:gap-16 animate-fade-in" style={{ animationDelay: '0.25s' }}>
            <a href="#amber" className="group flex flex-col items-center gap-3 transition-transform hover:scale-105">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/40 blur-xl rounded-3xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src="/amber-logo.webp"
                  alt="Amber - Nostr Signer"
                  className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl shadow-2xl shadow-amber-900/50 border border-amber-500/30"
                />
              </div>
              <span className="font-semibold text-amber-300">Amber</span>
            </a>
            <div className="text-4xl text-muted-foreground/50">+</div>
            <a href="#citrine" className="group flex flex-col items-center gap-3 transition-transform hover:scale-105">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500/40 blur-xl rounded-3xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src="/citrine-logo.webp"
                  alt="Citrine - Local Relay"
                  className="relative w-20 h-20 md:w-28 md:h-28 rounded-2xl shadow-2xl shadow-yellow-900/50 border border-yellow-500/30"
                />
              </div>
              <span className="font-semibold text-yellow-300">Citrine</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <a href="#download">
              <Button size="lg" className="w-full sm:w-auto bg-amber-gradient hover:opacity-90 text-white font-semibold px-8 py-6 text-lg glow-amber">
                Get Both Apps
              </Button>
            </a>
            <a href="#amber">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg border-2 hover:border-amber-400">
                Learn More
                <ArrowDown className="w-5 h-5 ml-2" />
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Key className="w-5 h-5 text-amber-400" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">NIP-46</span>
              </div>
              <p className="text-sm text-muted-foreground">Remote Signing</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Shield className="w-5 h-5 text-amber-400" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">NIP-55</span>
              </div>
              <p className="text-sm text-muted-foreground">Android Signer</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Database className="w-5 h-5 text-yellow-400" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">Local</span>
              </div>
              <p className="text-sm text-muted-foreground">Data Backup</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Server className="w-5 h-5 text-yellow-400" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">Relay</span>
              </div>
              <p className="text-sm text-muted-foreground">On Your Phone</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#amber" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-sm font-medium">Discover the apps</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
