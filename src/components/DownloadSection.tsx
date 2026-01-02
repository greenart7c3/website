import { ExternalLink, Github, Shield, Database, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const downloadLinks = {
  amber: {
    zapstore: 'https://zapstore.dev',
    github: 'https://github.com/greenart7c3/Amber/releases',
    fdroid: 'https://f-droid.org/packages/com.greenart7c3.nostrsigner/',
  },
  citrine: {
    zapstore: 'https://zapstore.dev',
    github: 'https://github.com/greenart7c3/Citrine/releases',
    fdroid: 'https://f-droid.org/packages/com.greenart7c3.citrine/',
  },
};

export function DownloadSection() {
  return (
    <section id="download" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-900/40 border border-amber-500/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-amber-300">Android Only</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            <span className="text-foreground">Get the</span>
            <span className="text-gradient"> Apps</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground">
            Both Amber and Citrine are available for Android devices. 
            We recommend installing via <strong className="text-amber-300">Zapstore</strong> for automatic updates.
          </p>
        </div>

        {/* Important Notice */}
        <Card className="max-w-2xl mx-auto mb-12 border-amber-500/30 bg-amber-950/30 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-300 mb-2">Advanced Apps Notice</h4>
                <p className="text-muted-foreground text-sm">
                  Amber and Citrine are considered advanced applications. They are <strong>not available on Google Play</strong>. 
                  Install via Zapstore (recommended), F-Droid, GitHub releases, or Obtainium.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Download Tabs */}
        <Tabs defaultValue="both" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="both">Both Apps</TabsTrigger>
            <TabsTrigger value="amber">Amber Only</TabsTrigger>
            <TabsTrigger value="citrine">Citrine Only</TabsTrigger>
          </TabsList>

          {/* Both Apps */}
          <TabsContent value="both">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Amber Card */}
              <Card className="border-amber-500/20 bg-amber-950/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img src="/amber-logo.webp" alt="Amber" className="w-16 h-16 rounded-xl" />
                    <div>
                      <CardTitle className="text-amber-300 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Amber
                      </CardTitle>
                      <CardDescription>Nostr Event Signer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href={downloadLinks.amber.zapstore} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-amber-gradient hover:opacity-90 text-white">
                      Get on Zapstore
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                  <div className="flex gap-3">
                    <a href={downloadLinks.amber.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full border-amber-500/30 hover:border-amber-400">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                    <a href={downloadLinks.amber.fdroid} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full border-amber-500/30 hover:border-amber-400">
                        F-Droid
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Citrine Card */}
              <Card className="border-yellow-500/20 bg-yellow-950/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img src="/citrine-logo.webp" alt="Citrine" className="w-16 h-16 rounded-xl" />
                    <div>
                      <CardTitle className="text-yellow-300 flex items-center gap-2">
                        <Database className="w-5 h-5" />
                        Citrine
                      </CardTitle>
                      <CardDescription>Nostr Relay for Android</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href={downloadLinks.citrine.zapstore} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full bg-citrine-gradient hover:opacity-90 text-black">
                      Get on Zapstore
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                  <div className="flex gap-3">
                    <a href={downloadLinks.citrine.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full border-yellow-500/30 hover:border-yellow-400">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </a>
                    <a href={downloadLinks.citrine.fdroid} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" className="w-full border-yellow-500/30 hover:border-yellow-400">
                        F-Droid
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Amber Only */}
          <TabsContent value="amber">
            <Card className="border-amber-500/20 bg-amber-950/30 backdrop-blur-sm max-w-lg mx-auto">
              <CardHeader className="text-center">
                <img src="/amber-logo.webp" alt="Amber" className="w-24 h-24 rounded-2xl mx-auto mb-4" />
                <CardTitle className="text-amber-300 text-2xl">Amber</CardTitle>
                <CardDescription className="text-lg">Nostr Event Signer for Android</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href={downloadLinks.amber.zapstore} target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="lg" className="w-full bg-amber-gradient hover:opacity-90 text-white glow-amber">
                    <img src="/amber-logo.webp" alt="" className="w-5 h-5 rounded mr-2" />
                    Download from Zapstore
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <div className="flex gap-3">
                  <a href={downloadLinks.amber.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full border-amber-500/30 hover:border-amber-400">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub Releases
                    </Button>
                  </a>
                  <a href={downloadLinks.amber.fdroid} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full border-amber-500/30 hover:border-amber-400">
                      F-Droid
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Citrine Only */}
          <TabsContent value="citrine">
            <Card className="border-yellow-500/20 bg-yellow-950/30 backdrop-blur-sm max-w-lg mx-auto">
              <CardHeader className="text-center">
                <img src="/citrine-logo.webp" alt="Citrine" className="w-24 h-24 rounded-2xl mx-auto mb-4" />
                <CardTitle className="text-yellow-300 text-2xl">Citrine</CardTitle>
                <CardDescription className="text-lg">Nostr Relay for Android</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href={downloadLinks.citrine.zapstore} target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="lg" className="w-full bg-citrine-gradient hover:opacity-90 text-black glow-citrine">
                    <img src="/citrine-logo.webp" alt="" className="w-5 h-5 rounded mr-2" />
                    Download from Zapstore
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <div className="flex gap-3">
                  <a href={downloadLinks.citrine.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full border-yellow-500/30 hover:border-yellow-400">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub Releases
                    </Button>
                  </a>
                  <a href={downloadLinks.citrine.fdroid} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="lg" className="w-full border-yellow-500/30 hover:border-yellow-400">
                      F-Droid
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Installation Methods */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground">Installation Methods</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-green-500/20 bg-green-950/20 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">⭐</div>
                <h4 className="font-semibold text-green-400 mb-1">Zapstore</h4>
                <p className="text-xs text-muted-foreground">Recommended - Auto updates</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">📦</div>
                <h4 className="font-semibold text-foreground mb-1">F-Droid</h4>
                <p className="text-xs text-muted-foreground">Open source store</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">🐙</div>
                <h4 className="font-semibold text-foreground mb-1">GitHub</h4>
                <p className="text-xs text-muted-foreground">Direct APK download</p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2">🔄</div>
                <h4 className="font-semibold text-foreground mb-1">Obtainium</h4>
                <p className="text-xs text-muted-foreground">Track GitHub releases</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
