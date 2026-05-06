import { useState } from 'react';
import { Zap, Copy, Check, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

const LN_ADDRESS = 'greenart7c3@coinos.io';

export function DonationSection() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(LN_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="donate" className="relative overflow-hidden py-24 md:py-32 scroll-mt-20">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium backdrop-blur-sm">
            <Zap className="h-3.5 w-3.5 text-amber-300" />
            Lightning donations
          </div>
          <h2 className="mt-5 font-serif text-4xl font-bold md:text-5xl">
            Support <span className="text-gradient-tri">development</span>
          </h2>
          <p className="mt-4 text-lg text-[hsl(var(--foreground))]/70">
            Amber, Citrine, and Morganite are open-source and free. Zaps keep the work going.
          </p>
        </div>

        <Card className="mx-auto mt-10 max-w-xl border-amber-500/25 bg-amber-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-200">
              <Zap className="h-5 w-5" />
              Lightning address
            </CardTitle>
            <CardDescription>
              Send sats from any Lightning wallet or zap-enabled Nostr client.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="select-all break-all rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center font-mono text-sm md:text-base">
              {LN_ADDRESS}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button onClick={onCopy} className="flex-1 bg-amber-gradient text-white glow-amber">
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied' : 'Copy address'}
              </Button>
              <a href={`lightning:${LN_ADDRESS}`} className="flex-1">
                <Button variant="outline" className="w-full">
                  Open in wallet <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
