import { Github, ExternalLink, Heart } from 'lucide-react';
import { AMBER_NPUB, CITRINE_NPUB, DEVELOPER_NPUB } from '@/hooks/useAppUpdates';

const footerLinks = {
  amber: [
    { label: 'GitHub', href: 'https://github.com/greenart7c3/Amber' },
    { label: 'Releases', href: 'https://github.com/greenart7c3/Amber/releases' },
    { label: 'Issues', href: 'https://github.com/greenart7c3/Amber/issues' },
    { label: 'F-Droid', href: 'https://f-droid.org/packages/com.greenart7c3.nostrsigner/' },
  ],
  citrine: [
    { label: 'GitHub', href: 'https://github.com/greenart7c3/Citrine' },
    { label: 'Releases', href: 'https://github.com/greenart7c3/Citrine/releases' },
    { label: 'Issues', href: 'https://github.com/greenart7c3/Citrine/issues' },
    { label: 'F-Droid', href: 'https://f-droid.org/packages/com.greenart7c3.citrine/' },
  ],
  nostr: [
    { label: 'What is Nostr?', href: 'https://nostr.com' },
    { label: 'Nostr Resources', href: 'https://nostr.how' },
    { label: 'NIP-46 (Remote Signing)', href: 'https://github.com/nostr-protocol/nips/blob/master/46.md' },
    { label: 'NIP-55 (Android Signer)', href: 'https://github.com/nostr-protocol/nips/blob/master/55.md' },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-amber-500/20">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4 group">
              <div className="flex items-center gap-2">
                <img
                  src="/amber-logo.webp"
                  alt="Amber"
                  className="w-8 h-8 rounded-lg transition-transform group-hover:scale-110"
                />
                <span className="text-lg">+</span>
                <img
                  src="/citrine-logo.webp"
                  alt="Citrine"
                  className="w-8 h-8 rounded-lg transition-transform group-hover:scale-110"
                />
              </div>
              <span className="font-serif text-xl font-bold text-gradient">
                Amber & Citrine
              </span>
            </a>

            <p className="text-muted-foreground mb-6 max-w-sm">
              Own your identity. Own your data. Complete Nostr sovereignty on Android.
            </p>

            <div className="flex items-center gap-3 mb-6">
              <a
                href="https://github.com/greenart7c3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-900/50 border border-amber-500/20 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`https://njump.me/${AMBER_NPUB}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-amber-900/50 border border-amber-500/20 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 transition-colors"
                title="Amber on Nostr"
              >
                <span className="font-bold text-sm">A</span>
              </a>
              <a
                href={`https://njump.me/${CITRINE_NPUB}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-yellow-900/50 border border-yellow-500/20 flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition-colors"
                title="Citrine on Nostr"
              >
                <span className="font-bold text-sm">C</span>
              </a>
            </div>

            {/* Developer Credit */}
            <div className="text-sm text-muted-foreground">
              <span>Developed by </span>
              <a
                href={`https://njump.me/${DEVELOPER_NPUB}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors"
              >
                greenart7c3
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4 text-amber-300">Amber</h4>
            <ul className="space-y-3">
              {footerLinks.amber.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-yellow-300">Citrine</h4>
            <ul className="space-y-3">
              {footerLinks.citrine.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Learn About Nostr</h4>
            <ul className="space-y-3">
              {footerLinks.nostr.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-amber-500/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Amber & Citrine. Open source software.
            </p>

            <div className="flex items-center gap-1">
              <span>Vibed with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using</span>
              <a
                href="https://shakespeare.diy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline font-medium"
              >
                Shakespeare
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
