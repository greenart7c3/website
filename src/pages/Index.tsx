import { useSeoMeta } from '@unhead/react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AmberSection } from '@/components/AmberSection';
import { CitrineSection } from '@/components/CitrineSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { UpdatesSection } from '@/components/UpdatesSection';
import { DownloadSection } from '@/components/DownloadSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  useSeoMeta({
    title: 'Amber & Citrine - Own Your Nostr Identity & Data',
    description: 'Amber secures your Nostr private key. Citrine runs a local relay on your Android. Together, they give you complete sovereignty over your identity and data.',
    ogTitle: 'Amber & Citrine - Own Your Nostr Identity & Data',
    ogDescription: 'Your keys, your data, your control. Amber signs Nostr events securely. Citrine backs up your data locally. Android apps for complete Nostr sovereignty.',
    ogImage: '/amber-hero.webp',
    twitterCard: 'summary_large_image',
  });

  return (
    <div className="min-h-screen bg-hero-gradient">
      <Header />
      <main>
        <HeroSection />
        <AmberSection />
        <CitrineSection />
        <FeaturesSection />
        <UpdatesSection />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
